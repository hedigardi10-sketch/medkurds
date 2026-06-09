let map;
let markers = [];
let userLocation = null;

function showHealthMap() {
    // Hide main grid and body view
    document.getElementById('main-grid').style.display = 'none';
    if(document.getElementById('body-3d-view')) {
        document.getElementById('body-3d-view').style.display = 'none';
    }
    
    // Hide welcome screen
    if(document.getElementById('welcome-screen')) {
        document.getElementById('welcome-screen').style.display = 'none';
    }

    // Show map view
    document.getElementById('map-view').style.display = 'block';

    // Update active nav button
    document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }

    if (!map) {
        initMap();
    }
}

function initMap() {
    // Initialize map centered at a default location (e.g. Erbil)
    map = L.map('health-map').setView([36.1901, 44.0089], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // Try to get user location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                userLocation = [position.coords.latitude, position.coords.longitude];
                map.setView(userLocation, 14);
                
                // Add user marker
                const userIcon = L.divIcon({
                    html: '<i class="fas fa-street-view fa-2x" style="color: blue;"></i>',
                    className: 'user-marker',
                    iconSize: [30, 30],
                    iconAnchor: [15, 30]
                });
                
                L.marker(userLocation, {icon: userIcon}).addTo(map)
                    .bindPopup(document.documentElement.lang === 'ku' ? 'شوێنی تۆ' : 'Your Location')
                    .openPopup();
                
                // Automatically fetch all nearby facilities when map loads
                findNearbyFacilities('all');
            },
            () => {
                console.log("Geolocation denied or failed.");
            }
        );
    }
}

function findNearbyFacilities(type) {
    if (!map) return;

    // Clear existing markers
    markers.forEach(marker => map.removeLayer(marker));
    markers = [];

    const center = map.getCenter();
    const lat = center.lat;
    const lon = center.lng;
    const radius = 10000; // 10km radius

    // Overpass API query
    let overpassQuery = "";
    if (type === 'all') {
        overpassQuery = `
            [out:json][timeout:25];
            (
              node["amenity"~"hospital|pharmacy"](around:${radius},${lat},${lon});
              way["amenity"~"hospital|pharmacy"](around:${radius},${lat},${lon});
              relation["amenity"~"hospital|pharmacy"](around:${radius},${lat},${lon});
            );
            out center;
        `;
    } else {
        overpassQuery = `
            [out:json][timeout:25];
            (
              node["amenity"="${type}"](around:${radius},${lat},${lon});
              way["amenity"="${type}"](around:${radius},${lat},${lon});
              relation["amenity"="${type}"](around:${radius},${lat},${lon});
            );
            out center;
        `;
    }

    const url = "https://overpass-api.de/api/interpreter";

    fetch(url, {
        method: "POST",
        body: overpassQuery
    })
    .then(response => response.json())
    .then(data => {
        if (data.elements.length === 0) {
            alert(document.documentElement.lang === 'ku' ? "هیچ ئەنجامێک نەدۆزرایەوە لە نزیکت." : "No results found nearby.");
            return;
        }

        data.elements.forEach(element => {
            const elLat = element.type === 'node' ? element.lat : element.center.lat;
            const elLon = element.type === 'node' ? element.lon : element.center.lon;
            
            const amenityType = element.tags && element.tags.amenity ? element.tags.amenity : type;
            const isHospital = amenityType === 'hospital';
            
            const name = element.tags && element.tags.name ? element.tags.name : (isHospital ? 'نەخۆشخانە / Hospital' : 'دەرمانخانە / Pharmacy');
            
            const iconColor = isHospital ? 'red' : 'green';
            const iconClass = isHospital ? 'fa-hospital' : 'fa-pills';
            
            const facilityIcon = L.divIcon({
                html: \`<i class="fas \${iconClass} fa-2x" style="color: \${iconColor};"></i>\`,
                className: 'facility-marker',
                iconSize: [30, 30],
                iconAnchor: [15, 30]
            });

            const marker = L.marker([elLat, elLon], {icon: facilityIcon}).addTo(map);
            marker.bindPopup(\`<b>\${name}</b>\`);
            markers.push(marker);
        });
        
        // Fit bounds to show all markers
        if (markers.length > 0) {
            const group = new L.featureGroup(markers);
            map.fitBounds(group.getBounds().pad(0.1));
        }
    })
    .catch(error => {
        console.error("Error fetching Overpass API:", error);
        alert(document.documentElement.lang === 'ku' ? "کێشەیەک هەیە لە هێڵی ئینتەرنێت، نەتوانرا داتا بهێنرێت." : "Network error, could not fetch data.");
    });
}
