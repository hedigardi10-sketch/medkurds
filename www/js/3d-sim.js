let simScene, simCamera, simRenderer, simControls, simRaycaster, simMouse;
let simObjects = []; // Objects that can be interacted with
let currentScenario = null;
let simAnimationId;

function initSimulator() {
    const container = document.getElementById('sim-canvas-container');
    if (!container) return;

    // Clear previous if any
    container.innerHTML = '';
    simObjects = [];

    // Scene setup
    simScene = new THREE.Scene();
    simScene.background = new THREE.Color(0xf0f4f8);

    // Camera
    simCamera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    simCamera.position.set(0, 0, 10);

    // Renderer
    simRenderer = new THREE.WebGLRenderer({ antialias: true });
    simRenderer.setSize(container.clientWidth, container.clientHeight);
    simRenderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(simRenderer.domElement);

    // Controls
    simControls = new THREE.OrbitControls(simCamera, simRenderer.domElement);
    simControls.enableDamping = true;
    simControls.dampingFactor = 0.05;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    simScene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    simScene.add(dirLight);

    // Raycaster for clicks
    simRaycaster = new THREE.Raycaster();
    simMouse = new THREE.Vector2();

    // Event listener for click
    simRenderer.domElement.addEventListener('pointerdown', onSimPointerDown, false);
    
    // Handle resize
    window.addEventListener('resize', onSimWindowResize, false);

    animateSim();
}

function loadScenario(type) {
    if(!simScene) initSimulator();
    
    // Clear old objects
    while(simScene.children.length > 0){ 
        simScene.remove(simScene.children[0]); 
    }
    simObjects = [];
    currentScenario = type;

    // Re-add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    simScene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 10, 7);
    simScene.add(dirLight);

    hideSimMessage();

    if(type === 'iv') {
        buildIVScenario();
        document.getElementById('sim-instructions').innerText = "ڕێنمایی: کلیک لەسەر خوێنهێنەرە شینەکە بکە بۆ لێدانی دەرزی (کانولا).";
    } else if(type === 'im') {
        buildIMScenario();
        document.getElementById('sim-instructions').innerText = "ڕێنمایی: کلیک لەسەر چارەکی سەرەوەی دەرەوەی سمت بکە بۆ لێدانی دەرزی سەلامەت.";
    }
}

function buildIVScenario() {
    simCamera.position.set(0, 0, 8);
    
    // 1. Arm Base (Cylinder)
    const armGeo = new THREE.CylinderGeometry(1, 0.8, 6, 32);
    const armMat = new THREE.MeshPhongMaterial({ color: 0xffccaa, transparent: true, opacity: 0.9 });
    const armMesh = new THREE.Mesh(armGeo, armMat);
    armMesh.rotation.z = Math.PI / 2; // Horizontal
    
    // Make arm un-clickable or a failure zone
    armMesh.userData = { isVein: false, message: "هەڵەیە! دەرزییەکەت لە ماسولکە و پێست دا، دەبێتە هۆی ئازار و شینبوونەوە.", isError: true };
    simScene.add(armMesh);
    simObjects.push(armMesh);

    // 2. Vein (Torus/Tube) on top of arm
    const veinGeo = new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3([
            new THREE.Vector3(-2.5, 0.95, 0),
            new THREE.Vector3(-1, 0.95, 0.2),
            new THREE.Vector3(1, 0.95, -0.1),
            new THREE.Vector3(2.5, 0.95, 0)
        ]), 
        64, 0.1, 8, false
    );
    const veinMat = new THREE.MeshPhongMaterial({ color: 0x3498db });
    const veinMesh = new THREE.Mesh(veinGeo, veinMat);
    veinMesh.userData = { isVein: true, message: "سەرکەوتوو بوو! دەرزییەکە بە دروستی چووە ناو خوێنهێنەرەکە.", isError: false };
    simScene.add(veinMesh);
    simObjects.push(veinMesh);
}

function buildIMScenario() {
    simCamera.position.set(0, 0, 7);

    // Group for the glute
    const gluteGroup = new THREE.Group();

    // Box geometry to represent 4 quadrants (simple representation)
    const quadSize = 2;
    const geo = new THREE.BoxGeometry(quadSize, quadSize, 0.5);

    // Create 4 quadrants
    const positions = [
        { x: -quadSize/2, y: quadSize/2, isSafe: false, name: "Upper Inner" }, // Top-Left
        { x: quadSize/2, y: quadSize/2, isSafe: true, name: "Upper Outer" },   // Top-Right (Safe!)
        { x: -quadSize/2, y: -quadSize/2, isSafe: false, name: "Lower Inner" },// Bottom-Left
        { x: quadSize/2, y: -quadSize/2, isSafe: false, name: "Lower Outer" }  // Bottom-Right
    ];

    positions.forEach(pos => {
        // Base material
        const mat = new THREE.MeshPhongMaterial({ color: 0xffccaa });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(pos.x, pos.y, 0);

        // Edges for visibility
        const edges = new THREE.EdgesGeometry(geo);
        const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial( { color: 0xaa5555, linewidth: 2 } ) );
        mesh.add(line);

        if(pos.isSafe) {
            mesh.userData = { message: "سەرکەوتوو بوو! ئەمە بڕگەی سەرەوەی دەرەوەیە (Upper Outer Quadrant) کە سەلامەتترین شوێنە.", isError: false, mesh: mesh };
        } else {
            mesh.userData = { message: "مەترسیدارە! لێدانی دەرزی لێرە لەوانەیە دەماری سایاتیک (Sciatic Nerve) بریندار بکات.", isError: true, mesh: mesh };
        }

        gluteGroup.add(mesh);
        simObjects.push(mesh);
    });

    simScene.add(gluteGroup);
}

function onSimPointerDown(event) {
    const container = document.getElementById('sim-canvas-container');
    const rect = container.getBoundingClientRect();

    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    simMouse.x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
    simMouse.y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;

    // Raycast
    simRaycaster.setFromCamera(simMouse, simCamera);
    const intersects = simRaycaster.intersectObjects(simObjects);

    if (intersects.length > 0) {
        const object = intersects[0].object;
        const data = object.userData;

        // Reset all colors
        simObjects.forEach(obj => {
            if(obj.material.color) {
                // If IV scenario arm
                if(obj.geometry.type === "CylinderGeometry") obj.material.color.setHex(0xffccaa);
                // If IM scenario quads
                if(obj.geometry.type === "BoxGeometry") obj.material.color.setHex(0xffccaa);
            }
        });

        showSimMessage(data.message, data.isError);

        // Highlight
        if(object.material.color) {
            object.material.color.setHex(data.isError ? 0xe74c3c : 0x2ecc71);
        }

        // Play feedback animation/sound if possible
        if(!data.isError) {
            triggerConfetti();
        }
    }
}

function onSimWindowResize() {
    const container = document.getElementById('sim-canvas-container');
    if (!container || !simCamera || !simRenderer) return;
    simCamera.aspect = container.clientWidth / container.clientHeight;
    simCamera.updateProjectionMatrix();
    simRenderer.setSize(container.clientWidth, container.clientHeight);
}

function animateSim() {
    simAnimationId = requestAnimationFrame(animateSim);
    if(simControls) simControls.update();
    if(simRenderer && simScene && simCamera) {
        simRenderer.render(simScene, simCamera);
    }
}

function showSimMessage(msg, isError) {
    const msgBox = document.getElementById('sim-feedback-msg');
    msgBox.innerText = msg;
    msgBox.className = "sim-feedback " + (isError ? "error" : "success");
    msgBox.style.display = "block";
    
    setTimeout(() => {
        msgBox.style.display = "none";
    }, 4000);
}

function hideSimMessage() {
    document.getElementById('sim-feedback-msg').style.display = "none";
}

function triggerConfetti() {
    // Optional: a simple CSS animation or external library for confetti
    // For now, it's just handled by the green color
}

// Stop rendering when closing
function stopSimulator() {
    if(simAnimationId) {
        cancelAnimationFrame(simAnimationId);
    }
}
