let currentLang = 'ku';
let currentCategory = 'home';
let favorites = JSON.parse(localStorage.getItem('medkurds_favs')) || [];
let activeTheme = localStorage.getItem('medkurds_theme') || 'midnight';
let isMobileView = localStorage.getItem('medkurds_mobile_view') === 'true';
let currentStep = 0;

// Change this version whenever you update the app
const APP_VERSION = "90";

// Groq Configuration (Note: Key is exposed in frontend - for production use a proxy/backend)
const AI_KEY = "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";
function getAiSystemPrompt() {
    if (currentLang === 'en') {
        return `You are an expert and intelligent doctor. You only answer medical and health-related questions.
You must answer in clear and fluent English.

When asked about a medicine or any medical topic, your answer must include the following points in an organized manner:
1. Definition (explain what it is in detail).
2. What is it used for? (benefits and uses).
3. How is it used? (usage instructions).
4. Warnings or side effects (if necessary).

If the question is not medical, politely state that your expertise is strictly in the health field.
Try to use bullet points to make your answers easy to read.`;
    } else if (currentLang === 'ar') {
        return `أنت طبيب خبير وذكي وتجيب فقط على الأسئلة الطبية والصحية.
يجب أن تكون إجاباتك باللغة العربية الفصحى وبطريقة واضحة.

عندما تُسأل عن دواء أو أي موضوع طبي، يجب أن تتضمن إجابتك النقاط التالية بطريقة منظمة:
١. تعريف الموضوع (اشرح ما هو بالتفصيل).
٢. لماذا يستخدم؟ (فوائد واستخدامات).
٣. كيف يستخدم؟ (تعليمات الاستخدام).
٤. تحذيرات أو آثار جانبية (إذا لزم الأمر).

إذا لم يكن السؤال طبياً، اذكر بأدب أن تخصصك يقتصر على المجال الصحي فقط.
حاول أن تكون إجاباتك في شكل نقاط (bullet points) لتسهيل القراءة.`;
    } else {
        return `تۆ پزیشکێکی پسپۆڕ و زیرەکی و تەنها وەڵامی پرسیاری پزیشکی و تەندروستی دەدەیتەوە. 
پێویستە وەڵامەکانت بە زمانی کوردییەکی زۆر پاراو، ڕەوان، و بە هێز بن.

کاتێک پرسیار لەبارەی دەرمان یان هەر بابەتێکی پزیشکی دەکرێت، پێویستە وەڵامەکەت ئەم خاڵانە لەخۆ بگرێت بە شێوەیەکی ڕێکخراو:
١. پێناسی بابەتەکە (بە وردی باسی بکە کە چییە).
٢. بۆچی بەکاردێت؟ (باسی سوود و بەکارهێنانەکانی بکە).
٣. چۆن بەکاردێت؟ (ڕێنمایی بەکارهێنانی بدە).
٤. ئاگاداری یان کاریگەری لاوەکی (ئەگەر پێویست بوو).

ئەگەر پرسیارەکە پزیشکی نەبوو، بە شێوازێکی زۆر ڕێزدارانە بڵێ کە پسپۆڕی تۆ تەنها لە بواری تەندروستیدایە.
هەوڵبدە وەڵامەکانت بە خاڵبەندی (bullet points) بن بۆ ئەوەی خوێندنەوەیان ئاسان بێت.`;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // ===== SPLASH SCREEN LOGIC =====
    initSplashScreen();
    // ===== END SPLASH SCREEN LOGIC =====

    setTheme(activeTheme);
    setLanguage(currentLang);
    updateStatCards();
    updateCharts();
    setupEventListeners();
    
    // Add realistic snake
    create3DSnake();
    renderDailyTip();
    // Initial Render
    goHome();
    
    // Apply saved view mode
    if (isMobileView) {
        document.getElementById('main-grid')?.classList.add('mobile-view');
        const icon = document.getElementById('viewToggleIcon');
        if (icon) icon.className = 'fas fa-th-large';
        const text = document.getElementById('viewToggleText');
        if (text) text.innerText = 'گەڕانەوە بۆ خشتە';
    }

    // Sync with Firebase & Analytics
    if (typeof db !== 'undefined') {
        loadFromFirestore();
        trackUserAnalytics();
    }

    // Version Check
    const savedVersion = localStorage.getItem('medkurds_version');
    if (savedVersion !== APP_VERSION) {
        setTimeout(() => {
            showToast('بەرنامەکە بە سەرکەوتوویی نوێکرایەوە! 🚀');
        }, 1500);
        localStorage.setItem('medkurds_version', APP_VERSION);
    }

    // Register Service Worker for PWA and Offline Support
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => {
                console.log('Service Worker registered successfully with scope:', reg.scope);

            })
            .catch(err => {
                console.error('Service Worker registration failed:', err);
            });

        // Automatically reload the page once a new service worker takes control (updates)
        let refreshing = false;
        navigator.serviceWorker.addEventListener('controllerchange', () => {
            if (!refreshing) {
                refreshing = true;
                window.location.reload(true);
            }
        });
    }
    
    // Initial category counts update from hardcoded data
    updateCategoryCounts();
}

// ===== SPLASH SCREEN FUNCTION =====
function initSplashScreen() {
    const splash = document.getElementById('splash-screen');
    if (!splash) return;

    // Only show splash when app opens fresh (not on every navigation)
    // Use sessionStorage so it shows once per session/app launch
    const splashShown = sessionStorage.getItem('medkurds_splash_shown');

    if (splashShown) {
        // Already shown this session — hide immediately
        splash.style.display = 'none';
        return;
    }

    // Mark as shown for this session
    sessionStorage.setItem('medkurds_splash_shown', '1');

    // Show splash, then fade out after 1.5s
    const SPLASH_DURATION = 1500;

    setTimeout(() => {
        splash.classList.add('splash-hidden');
        // Remove from DOM after transition ends
        splash.addEventListener('transitionend', () => {
            splash.remove();
        }, { once: true });
    }, SPLASH_DURATION);
}
// ===== END SPLASH SCREEN FUNCTION =====


function updateCategoryCounts() {
    document.querySelectorAll('.nav-item').forEach(btn => {
        const onclickAttr = btn.getAttribute('onclick');
        if (onclickAttr) {
            let category = null;
            if (onclickAttr.includes("selectCategory")) {
                const match = onclickAttr.match(/selectCategory\(['"]([^'"]+)['"]\)/);
                if (match && match[1]) category = match[1];
            } else if (onclickAttr.includes("openSimulator")) {
                category = "scenarios";
            }

            if (category && medicalData[category] && Array.isArray(medicalData[category])) {
                let badge = btn.querySelector('.nav-badge');
                if (!badge) {
                    badge = document.createElement('span');
                    badge.className = 'nav-badge';
                    btn.appendChild(badge);
                }
                const count = medicalData[category].length;
                badge.textContent = count > 0 ? count : '';
                badge.style.display = count > 0 ? 'inline-block' : 'none';
            }
        }
    });
}

function loadFromFirestore() {
    if (typeof db === 'undefined' || !db) return;
    const collections = ['drugs', 'nursing', 'emergency', 'nutrition', 'skincare', 'dictionary', 'body', 'lab', 'vitamins', 'equipment', 'maternal', 'hotlines', 'herbal', 'poisoning', 'diseases', 'occupational', 'signlanguage', 'pathology', 'bloodTypes', 'diet', 'scenarios', 'vaccinations', 'videos'];
    
    collections.forEach(col => {
        db.collection(col).onSnapshot(snapshot => {
            if (!snapshot.empty) {
                const rawData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                
                if (!medicalData[col] || medicalData[col].length === 0) {
                    medicalData[col] = rawData.map(item => normalizeMedicalItem(item, col));
                } else {
                    // Merge: Override local data with Firestore data to ensure updates are reflected
                    const normalizedRaw = rawData.map(item => normalizeMedicalItem(item, col));
                    const mergedMap = new Map();
                    
                    // Add local data first
                    medicalData[col].forEach(item => mergedMap.set(String(item.id), item));
                    
                    // Add/Override with Firestore data
                    normalizedRaw.forEach(item => mergedMap.set(String(item.id), item));
                    
                    medicalData[col] = Array.from(mergedMap.values());
                }
            } else {

            }
            
            // Update UI if the user is looking at the updated category
            if (currentCategory === col || currentCategory === 'favorites' || currentCategory === 'home') {
                renderCategory(currentCategory);
            }
            updateCategoryCounts();
        }, err => {
            console.error(`Firestore Sync Error for ${col}:`, err);
        });
    });
}

function normalizeMedicalItem(item, type) {
    if (!item) return item;
    
    // Ensure multilingual consistency
    ['ku', 'en', 'ar'].forEach(lang => {
        if (item[lang]) {
            const lData = item[lang];
            
            // Standardize Drug fields
            if (type === 'drugs' || type === 'herbal') {
                if (lData.dose && !lData.dosage) lData.dosage = lData.dose;
                if (lData.warn && !lData.warning) lData.warning = lData.warn;
                if (lData.side && !lData.sideEffects) lData.sideEffects = lData.side;
            }
            
            if (type === 'dictionary') {
                if (lData.word && !lData.title) lData.title = lData.word;
                if (lData.meaning && !lData.desc) lData.desc = lData.meaning;
            }
            
            // Ensure title/name consistency
            if (!lData.title && lData.name) lData.title = lData.name;
            if (!lData.name && lData.title) lData.name = lData.title;
        }
    });

    // Ensure top-level name consistency
    if (!item.name && item.ku && item.ku.title) item.name = item.ku.title;
    
    return item;
}

function setupEventListeners() {
    // Search
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            handleSearch();
        });
        
        // Trigger AI on Enter
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const query = searchInput.value.trim();
                if (query) askAI(query);
            }
        });
    }

    // Modal close on outside click
    window.onclick = function(event) {
        const modal = document.getElementById('modal');
        const aiModal = document.getElementById('ai-modal');
        if (event.target == modal) {
            closeModal();
        } else if (event.target == aiModal) {
            closeAIModal();
        }
    }

    // AI Button
    const aiBtn = document.getElementById('ai-search-btn');
    if (aiBtn) {
        aiBtn.addEventListener('click', () => {
            const aiModal = document.getElementById('ai-modal');
            if (aiModal) {
                aiModal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
                setTimeout(() => {
                    document.getElementById('ai-modal-input').focus();
                }, 100);
            }
        });
    }
}

function closeAIModal() {
    const aiModal = document.getElementById('ai-modal');
    if (aiModal) {
        aiModal.style.display = 'none';
        if (document.getElementById('modal').style.display !== 'flex' && 
            (!document.getElementById('map-modal') || document.getElementById('map-modal').style.display !== 'flex') && 
            (!document.getElementById('add-dir-modal') || document.getElementById('add-dir-modal').style.display !== 'flex')) {
            document.body.style.overflow = 'auto';
        }
    }
}

function submitAIModal() {
    const input = document.getElementById('ai-modal-input');
    const query = input ? input.value.trim() : '';
    
    if (query) {
        closeAIModal();
        askAI(query);
    } else {
        showToast(currentLang === 'ku' ? 'تکایە سەرەتا پرسیارەکەت بنووسە' : 'Please write your question first');
        if (input) input.focus();
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

function toggleMobileView() {
    const grid = document.getElementById('main-grid');
    const icon = document.getElementById('viewToggleIcon');
    const text = document.getElementById('viewToggleText');
    
    if (grid) {
        grid.classList.toggle('mobile-view');
        isMobileView = grid.classList.contains('mobile-view');
        localStorage.setItem('medkurds_mobile_view', isMobileView);
        
        if (icon) icon.className = isMobileView ? 'fas fa-th-large' : 'fas fa-list';
        if (text) text.innerText = isMobileView ? 'گەڕانەوە بۆ خشتە' : 'شێوازی مۆبایل';
    }
    
    // Close mobile sidebar after clicking
    if (window.innerWidth <= 1024) {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) sidebar.classList.remove('active');
    }
}

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'en') ? 'ltr' : 'rtl';
    
    // Update active lang button
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });

    const videosBtn = document.getElementById('videos-nav-btn');
    if (videosBtn) {
        if (lang === 'ku') {
            videosBtn.style.display = 'block';
        } else {
            videosBtn.style.display = 'none';
            if (currentCategory === 'videos') {
                goHome();
                return; // goHome will call renderCategory
            }
        }
    }

    updateTranslations();
    renderDailyTip();
    renderAppUpdates();
    renderCategory(currentCategory);
}

function setTheme(theme) {
    document.body.className = `theme-${theme}`;
    activeTheme = theme;
    localStorage.setItem('medkurds_theme', theme);
}

function updateTranslations() {
    const trans = medicalData.translations[currentLang];
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (trans[key]) el.textContent = trans[key];
    });
    
    const searchInput = document.getElementById('search-input');
    if (searchInput && trans.searchPlaceholder) {
        searchInput.placeholder = trans.searchPlaceholder;
    }
}

function goHome() {
    currentCategory = 'home';
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('onclick') && item.getAttribute('onclick').includes('goHome()'));
    });

    const welcome = document.getElementById('welcome-screen');
    const grid = document.getElementById('main-grid');
    const body3d = document.getElementById('body-3d-view');
    const mapView = document.getElementById('map-view');
    
    if (welcome) welcome.style.display = 'block';
    if (grid) {
        grid.style.display = 'grid'; // Ensure grid is visible
        grid.innerHTML = '';
    }
    if (body3d) body3d.style.display = 'none';
    if (mapView) mapView.style.display = 'none';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Close mobile sidebar
    const sidebar = document.getElementById('sidebar');
    if (sidebar && window.innerWidth <= 1024) {
        sidebar.classList.remove('active');
    }


}

function selectCategory(cat) {
    currentCategory = cat;
    
    // Update active nav item
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.getAttribute('onclick').includes(`selectCategory('${cat}')`));
    });

    // Hide welcome screen after first interaction
    document.getElementById('welcome-screen').style.display = 'none';

    // Handle Map visibility
    const mapView = document.getElementById('map-view');
    if (mapView) mapView.style.display = 'none';

    // Handle Main Grid visibility
    const grid = document.getElementById('main-grid');
    if (grid) grid.style.display = 'grid';

    // Handle 3D Body visibility
    const body3d = document.getElementById('body-3d-view');
    if (cat === 'body') {
        body3d.style.display = 'block';
        if (typeof init3DBody === 'function') init3DBody();
    } else {
        body3d.style.display = 'none';
    }
    renderCategory(cat);

    // Show Toast
    const activeButton = document.querySelector(`.nav-item[onclick="selectCategory('${cat}')"] span`);
    if (activeButton) {
        showToast(`بەشی ${activeButton.innerText} کرایەوە <i class="fas fa-check-circle" style="color:#4ade80;"></i>`);
    }

    // Close mobile sidebar
    if (window.innerWidth <= 1024) {
        document.getElementById('sidebar').classList.remove('active');
    }


}

function renderCategory(cat, filter = '') {
    const grid = document.getElementById('main-grid');
    grid.innerHTML = '';
    
    let data = [];
    if (cat === 'favorites') {
        data = getFavoritesData();
    } else {
        data = medicalData[cat] || [];
    }

    const filtered = data.filter(item => {
        const title = (item[currentLang]?.title || item[currentLang]?.name || item.name || '').toLowerCase();
        const desc = (item[currentLang]?.desc || '').toLowerCase();
        return title.includes(filter.toLowerCase()) || desc.includes(filter.toLowerCase());
    });

    filtered.forEach(item => {
        const card = createCard(item, cat);
        grid.appendChild(card);
    });
}

function createCard(item, cat) {
    const data = item[currentLang] || {};
    const title = data.title || data.name || item.name || 'No Title';
    const desc = data.desc || '';
    const img = item.img || '';
    const id = item.id;
    const isFav = favorites.some(f => Number(f.id) === Number(id));

    const div = document.createElement('div');
    div.className = `info-card ${cat === 'medical_book' ? 'book-card' : ''}`;
    div.onclick = () => showDetail(item);

    div.innerHTML = `
        ${img ? `<div class="card-img"><img src="${img}" alt="${title}"></div>` : ''}
        <div class="card-content-wrapper">
            <h3>${title}</h3>
            <p>${desc.substring(0, 100)}${desc.length > 100 ? '...' : ''}</p>
        </div>
        <div class="card-footer">
            <span><i class="fas fa-heart ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, ${id})"></i></span>
            <span class="more-btn">زیاتر <i class="fas fa-arrow-left"></i></span>
        </div>
    `;
    return div;
}

function handleSearch() {
    const query = document.getElementById('search-input').value;
    renderCategory(currentCategory, query);
}

window.currentStepIndex = 0;
window.totalSteps = 0;

function changeStep(direction) {
    const newStep = window.currentStepIndex + direction;
    if (newStep >= 0 && newStep < window.totalSteps) {
        document.getElementById(`step-card-${window.currentStepIndex}`).style.display = 'none';
        document.getElementById(`step-card-${newStep}`).style.display = 'block';
        window.currentStepIndex = newStep;
        
        document.getElementById('wizard-prev').disabled = newStep === 0;
        document.getElementById('wizard-prev').style.opacity = newStep === 0 ? '0.5' : '1';
        
        const nextBtn = document.getElementById('wizard-next');
        if (newStep === window.totalSteps - 1) {
            nextBtn.innerHTML = medicalData.translations[currentLang].finish || "تەواو";
            nextBtn.onclick = closeModal;
        } else {
            nextBtn.innerHTML = medicalData.translations[currentLang].next || "دواتر";
            nextBtn.onclick = () => changeStep(1);
        }
    }
}

function showDetail(item) {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    const data = item[currentLang] || {};
    
    // Make modal visible FIRST to ensure iframes render properly
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    body.innerHTML = `
        <div class="modal-body-content">
            <h2>${data.title || data.name || item.name}</h2>
            ${item.icon ? `<div style="font-size: 5rem; text-align: center; margin: 20px 0; text-shadow: 0 10px 20px rgba(0,0,0,0.3); transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.1)'" onmouseout="this.style.transform='scale(1)'">${item.icon}</div>` : ''}
            ${item.img && !item.video ? `<img src="${item.img}" style="width:100%; max-width: ${currentCategory === 'pathology' ? '300px' : '100%'}; margin: 0 auto 20px auto; display: block; border-radius:${currentCategory === 'pathology' ? '50%' : '15px'}; aspect-ratio: ${currentCategory === 'pathology' ? '1/1' : 'auto'}; object-fit: cover; ${currentCategory === 'pathology' ? 'border: 8px solid #111; box-shadow: 0 0 25px rgba(0,0,0,0.9);' : ''}">` : ''}
            
            ${item.video ? `<div class="video-container" style="position: relative; padding-bottom: ${item.video.includes('instagram.com') ? '135%' : '56.25%'}; height: 0; overflow: hidden; max-width: 100%; border-radius: 15px; margin-bottom: 20px; background: #000;"><iframe src="${item.video}" style="position: absolute; ${item.video.includes('instagram.com') ? 'top: -65px; left: -2px; width: calc(100% + 4px); height: calc(100% + 240px);' : 'top: 0; left: 0; width: 100%; height: 100%;'} border:0;" allowfullscreen></iframe></div>` : ''}
            
            <div class="modal-text-section">
                <p>${data.desc || ''}</p>
            </div>

            ${data.dosage ? `<div class="detail-box info-box"><strong><i class="fas fa-capsules"></i> ${medicalData.translations[currentLang].dosage}:</strong> <p>${data.dosage}</p></div>` : ''}
            ${data.warning ? `<div class="detail-box warning-box"><i class="fas fa-exclamation-triangle"></i> <strong>${medicalData.translations[currentLang].warning}:</strong> <p>${data.warning}</p></div>` : ''}
            ${data.sideEffects ? `<div class="detail-box danger-box"><strong><i class="fas fa-exclamation-circle"></i> ${medicalData.translations[currentLang].sideEffects}:</strong> <p>${data.sideEffects}</p></div>` : ''}
            
            ${data.range ? `<div class="detail-box primary-box"><strong><i class="fas fa-vial"></i> ${medicalData.translations[currentLang].normalRange}:</strong> <p>${data.range}</p></div>` : ''}
            ${data.notes ? `<div class="detail-box"><strong><i class="fas fa-clipboard-list"></i> ${medicalData.translations[currentLang].interpretation}:</strong> <ul>${data.notes.map(n => `<li>${n}</li>`).join('')}</ul></div>` : ''}
            ${data.action ? `<div class="detail-box"><strong><i class="fas fa-hand-holding-medical"></i> ${medicalData.translations[currentLang].actionPlan}:</strong> <ul>${data.action.map(a => `<li>${a}</li>`).join('')}</ul></div>` : ''}

            ${data.symptoms ? `<div class="detail-box"><strong><i class="fas fa-thermometer-half"></i> ${medicalData.translations[currentLang].symptoms}:</strong> <ul>${data.symptoms.map(s => `<li>${s}</li>`).join('')}</ul></div>` : ''}
            ${data.treatment ? `<div class="detail-box"><strong><i class="fas fa-briefcase-medical"></i> ${medicalData.translations[currentLang].treatment}:</strong> <ul>${data.treatment.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
            ${data.advice ? `<div class="detail-box info-box"><strong><i class="fas fa-lightbulb"></i> ${medicalData.translations[currentLang].advice}:</strong> <p>${data.advice}</p></div>` : ''}
            ${data.caption ? `<div class="detail-box" style="background: rgba(14, 165, 233, 0.08); border: 1px solid rgba(14, 165, 233, 0.2); border-${currentLang === 'en' ? 'left' : 'right'}: 4px solid #0ea5e9; padding: 20px; border-radius: 15px; margin-top: 20px; margin-bottom: 20px;">
                <h3 style="color: #0ea5e9; margin: 0 0 15px 0; display: flex; align-items: center; gap: 8px; font-size: 1.3rem;">
                    <i class="fas fa-closed-captioning"></i>
                    ${currentLang === 'ku' ? 'کاپشنی ڤیدیۆ' : (currentLang === 'ar' ? 'وصف الفيديو' : 'Video Caption')}
                </h3>
                <div style="white-space: pre-wrap; font-size: 1.15rem; line-height: 1.8; color: #e2e8f0;">${data.caption}</div>
            </div>` : ''}
            ${data.use ? `<div class="detail-box"><strong><i class="fas fa-tools"></i> ${medicalData.translations[currentLang].useTitle || "Usage"}:</strong> <ul>${data.use.map(u => `<li>${u}</li>`).join('')}</ul></div>` : ''}
            
            ${data.type ? `<div class="detail-box primary-box"><strong><i class="fas fa-microscope"></i> ${currentLang === 'ku' ? 'جۆر' : (currentLang === 'ar' ? 'النوع' : 'Type')}:</strong> <p>${data.type}</p></div>` : ''}
            ${data.diseases ? `<div class="detail-box warning-box"><strong><i class="fas fa-biohazard"></i> ${currentLang === 'ku' ? 'نەخۆشییەکان' : (currentLang === 'ar' ? 'الأمراض' : 'Diseases')}:</strong> <p>${data.diseases}</p></div>` : ''}
            ${data.antibiotics ? `<div class="detail-box" style="background: rgba(74, 222, 128, 0.1); border-${currentLang === 'en' ? 'left' : 'right'}: 4px solid #4ade80;"><strong><i class="fas fa-pills" style="color: #4ade80;"></i> <span style="color: #4ade80;">${currentLang === 'ku' ? 'ئەنتیبایۆتیک (چارەسەر)' : (currentLang === 'ar' ? 'المضادات الحيوية' : 'Antibiotics')}</span>:</strong> <p>${data.antibiotics}</p></div>` : ''}

            ${(() => {
                if (data.steps && data.steps.length > 0) {
                    currentStep = 0;
                    let stepCards = data.steps.map((s, i) => `
                        <div class="step-card" id="step-${i}" style="display: ${i === 0 ? 'block' : 'none'}; background: rgba(255,255,255,0.03); padding: 25px; border-radius: 20px; border: 1px solid rgba(255,255,255,0.1); margin-top: 15px;">
                            <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 15px;">
                                <div style="background: var(--primary); color: #fff; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem;">${i + 1}</div>
                                <h3 style="margin: 0; color: #fff;">${medicalData.translations[currentLang].steps}</h3>
                            </div>
                            <p style="font-size: 1.2rem; line-height: 1.8; color: #cbd5e1;">${s}</p>
                        </div>
                    `).join('');

                    return `
                        <div class="wizard-container" style="margin-top: 20px;">
                            ${stepCards}
                            <div style="display: flex; gap: 15px; justify-content: space-between; margin-top: 20px;">
                                <button id="wizard-prev" onclick="changeStep(-1, ${data.steps.length})" disabled style="flex: 1; padding: 12px; background: rgba(255,255,255,0.1); border:none; border-radius: 10px; color: #fff; cursor: pointer; font-size: 1rem; opacity: 0.5;">${medicalData.translations[currentLang].back}</button>
                                <button id="wizard-next" onclick="${data.steps.length > 1 ? `changeStep(1, ${data.steps.length})` : 'closeModal()'}" style="flex: 1; padding: 12px; background: var(--primary); border:none; border-radius: 10px; color: #fff; cursor: pointer; font-size: 1rem;">${data.steps.length > 1 ? medicalData.translations[currentLang].next : medicalData.translations[currentLang].finish}</button>
                            </div>
                        </div>
                    `;
                }
                return '';
            })()}
            
            ${data.harm ? `<div class="detail-box danger-box" style="margin-top: 20px;"><strong><i class="fas fa-biohazard"></i> ${medicalData.translations[currentLang].harmTitle}:</strong> <p>${data.harm}</p></div>` : ''}
            ${data.benefit ? `<div class="detail-box success-box"><strong><i class="fas fa-heart"></i> ${medicalData.translations[currentLang].benefit}:</strong> <p>${data.benefit}</p></div>` : ''}
            ${data.tips ? `<div class="detail-box info-box"><strong><i class="fas fa-lightbulb"></i> ${medicalData.translations[currentLang].tips}:</strong> <ul>${data.tips.map(t => `<li>${t}</li>`).join('')}</ul></div>` : ''}
            ${data.foods ? `<div class="detail-box"><strong><i class="fas fa-apple-alt"></i> ${currentLang === 'ku' ? 'خواردنەکان' : (currentLang === 'ar' ? 'الأطعمة' : 'Foods')}:</strong> <ul>${data.foods.map(f => `<li>${f}</li>`).join('')}</ul></div>` : ''}
            ${data.sources ? `<div class="detail-box info-box"><strong><i class="fas fa-link"></i> ${medicalData.translations[currentLang].sources}:</strong> <p>${data.sources}</p></div>` : ''}
            
            ${data.canGive ? `<div class="detail-box success-box"><strong><i class="fas fa-hand-holding-heart"></i> ${currentLang === 'ku' ? 'دەتوانێت خوێن بدات بە' : (currentLang === 'ar' ? 'يمكنه التبرع لـ' : 'Can Give To')}:</strong> <ul>${data.canGive.map(g => `<li>${g}</li>`).join('')}</ul></div>` : ''}
            ${data.canReceive ? `<div class="detail-box info-box"><strong><i class="fas fa-hand-holding-medical"></i> ${currentLang === 'ku' ? 'دەتوانێت خوێن وەربگرێت لە' : (currentLang === 'ar' ? 'يمكنه الاستقبال من' : 'Can Receive From')}:</strong> <ul>${data.canReceive.map(r => `<li>${r}</li>`).join('')}</ul></div>` : ''}
            ${data.rarity ? `<div class="detail-box primary-box"><strong><i class="fas fa-users"></i> ${currentLang === 'ku' ? 'ڕێژەی بڵاوی' : (currentLang === 'ar' ? 'نسبة الانتشار' : 'Rarity')}:</strong> <p>${data.rarity}</p></div>` : ''}
            
            ${data.address ? `<div class="detail-box"><strong><i class="fas fa-map-marker-alt"></i> ${currentLang === 'ku' ? 'ناونیشان' : (currentLang === 'ar' ? 'العنوان' : 'Address')}:</strong> <p>${data.address}</p></div>` : ''}
            ${data.phone ? `<div class="detail-box"><strong><i class="fas fa-phone-alt"></i> ${currentLang === 'ku' ? 'تەلەفۆن' : (currentLang === 'ar' ? 'رقم الهاتف' : 'Phone')}:</strong> <p><a href="tel:${data.phone}" style="color:var(--primary); text-decoration:none; font-weight:bold; letter-spacing:1px;">${data.phone}</a></p></div>` : ''}
            
            ${item.lat && item.lng ? `<div style="display:flex; flex-wrap:wrap; gap:10px; justify-content:center; margin-top: 20px;">
                <button onclick="showMapModal(${item.lat}, ${item.lng}, '${(data.title || data.name || item.name || '').replace(/'/g, "\\'")}')" style="flex:1; min-width:140px; padding: 12px 15px; background: var(--primary); color: #fff; border: none; border-radius: 50px; font-size: 1.1rem; cursor: pointer; display: inline-flex; justify-content:center; align-items: center; gap: 8px;"><i class="fas fa-map-marked-alt"></i> ${currentLang === 'ku' ? 'لەسەر نەخشە' : (currentLang === 'ar' ? 'الخريطة' : 'Map')}</button>
                ${data.phone ? `<a href="tel:${data.phone}" style="flex:1; min-width:140px; padding: 12px 15px; background: #22c55e; color: #fff; border: none; border-radius: 50px; font-size: 1.1rem; cursor: pointer; display: inline-flex; justify-content:center; align-items: center; gap: 8px; text-decoration: none;"><i class="fas fa-phone"></i> ${currentLang === 'ku' ? 'پەیوەندی' : (currentLang === 'ar' ? 'اتصال' : 'Call')}</a>` : ''}
            </div>` : ''}

            ${currentCategory === 'directory' && item.id && item.id !== 'dir_binaslawa_1' ? `<div style="text-align:center; margin-top: 25px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.1);">
                <button onclick="deleteDirectoryItem('${item.id}')" style="padding: 10px 20px; background: transparent; color: #ef4444; border: 1px solid #ef4444; border-radius: 50px; font-size: 1rem; cursor: pointer; display: inline-flex; align-items: center; gap: 8px; transition: 0.3s;" onmouseover="this.style.background='#ef4444'; this.style.color='#fff';" onmouseout="this.style.background='transparent'; this.style.color='#ef4444';"><i class="fas fa-trash-alt"></i> ${currentLang === 'ku' ? 'سڕینەوەی ئەم شوێنە' : 'Delete this place'}</button>
            </div>` : ''}
        </div>
    `;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto';
    const modalBody = document.getElementById('modal-body');
    if (modalBody) {
        modalBody.innerHTML = '';
    }
}

function showAboutMe() {
    if (isMobileView && window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('active');
    }
    
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    
    const title = (medicalData.translations[currentLang] && medicalData.translations[currentLang].aboutMeTitle) || "دەربارەی من";
    const creatorName = (medicalData.translations[currentLang] && medicalData.translations[currentLang].creatorName) || "هێدی سەرتیپ حسێن";
    const creatorRole = (medicalData.translations[currentLang] && medicalData.translations[currentLang].creatorRole) || "گەشەپێدەری ئەپڵیکەیشن";
    
    modalBody.innerHTML = `
        <h2 style="text-align: center; color: var(--primary); margin-bottom: 20px; font-weight: 800;">
            <i class="fas fa-user-md" style="font-size: 2.5rem; display: block; margin-bottom: 10px;"></i>
            ${title}
        </h2>
        
        <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; border: 1px solid rgba(255,255,255,0.1); margin-bottom: 20px; text-align: center;">
            <img src="img/about-me.jpg" alt="MedKurds Developer" style="width: 100px; height: 100px; border-radius: 50%; border: 3px solid var(--primary); margin-bottom: 15px; box-shadow: 0 0 15px var(--primary); object-fit: cover;">
            <h3 style="color: #fff; font-size: 1.3rem; margin: 0 0 5px 0;">${creatorName}</h3>
            <p style="color: #a78bfa; font-weight: 600; margin: 0; font-size: 1rem;">${creatorRole}</p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 15px;">
            <a href="tel:+9647518337828" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; background: rgba(34, 197, 94, 0.1); border: 1px solid rgba(34, 197, 94, 0.3); border-radius: 12px; text-decoration: none; color: #fff; transition: all 0.3s ease;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <i class="fas fa-phone-alt" style="color: #22c55e; font-size: 1.5rem;"></i>
                    <span style="font-size: 1.1rem; font-weight: bold; letter-spacing: 1px; font-family: sans-serif;" dir="ltr">+964 751 833 7828</span>
                </div>
                <i class="fas fa-chevron-left" style="color: #22c55e;"></i>
            </a>

            <a href="https://wa.me/9647518337828" target="_blank" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; background: rgba(37, 211, 102, 0.1); border: 1px solid rgba(37, 211, 102, 0.3); border-radius: 12px; text-decoration: none; color: #fff; transition: all 0.3s ease;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <i class="fab fa-whatsapp" style="color: #25D366; font-size: 1.5rem;"></i>
                    <span style="font-size: 1.1rem; font-weight: bold;">WhatsApp</span>
                </div>
                <i class="fas fa-chevron-left" style="color: #25D366;"></i>
            </a>

            <a href="https://t.me/hedi_s7" target="_blank" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; background: rgba(0, 136, 204, 0.1); border: 1px solid rgba(0, 136, 204, 0.3); border-radius: 12px; text-decoration: none; color: #fff; transition: all 0.3s ease;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <i class="fab fa-telegram-plane" style="color: #0088cc; font-size: 1.5rem;"></i>
                    <span style="font-size: 1.1rem; font-weight: bold;">Telegram (@hedi_s7)</span>
                </div>
                <i class="fas fa-chevron-left" style="color: #0088cc;"></i>
            </a>

            <a href="https://instagram.com/hedi_s72" target="_blank" style="display: flex; align-items: center; justify-content: space-between; padding: 15px; background: rgba(225, 48, 108, 0.1); border: 1px solid rgba(225, 48, 108, 0.3); border-radius: 12px; text-decoration: none; color: #fff; transition: all 0.3s ease;">
                <div style="display: flex; align-items: center; gap: 15px;">
                    <i class="fab fa-instagram" style="color: #E1306C; font-size: 1.5rem;"></i>
                    <span style="font-size: 1.1rem; font-weight: bold;">Instagram (@hedi_s72)</span>
                </div>
                <i class="fas fa-chevron-left" style="color: #E1306C;"></i>
            </a>
        </div>
    `;
    
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function changeStep(dir, total) {
    const prevStep = currentStep;
    currentStep += dir;
    
    if (currentStep < 0) currentStep = 0;
    if (currentStep >= total) currentStep = total - 1;
    
    document.getElementById(`step-${prevStep}`).style.display = 'none';
    document.getElementById(`step-${currentStep}`).style.display = 'block';
    
    const prevBtn = document.getElementById('wizard-prev');
    const nextBtn = document.getElementById('wizard-next');
    const trans = medicalData.translations[currentLang];
    
    prevBtn.disabled = currentStep === 0;
    prevBtn.style.opacity = currentStep === 0 ? '0.5' : '1';
    
    if (currentStep === total - 1) {
        nextBtn.innerText = trans.finish;
        nextBtn.onclick = () => closeModal();
    } else {
        nextBtn.innerText = trans.next;
        nextBtn.onclick = () => changeStep(1, total);
    }
}

function toggleFavorite(e, id) {
    e.stopPropagation();
    const numericId = Number(id);
    const index = favorites.findIndex(f => Number(f.id) === numericId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push({ id: numericId });
    }
    localStorage.setItem('medkurds_favs', JSON.stringify(favorites));
    renderCategory(currentCategory);
}

function showToast(message) {
    let toast = document.getElementById('app-toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'app-toast';
        toast.className = 'toast-notification';
        document.body.appendChild(toast);
    }
    toast.innerHTML = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

function getFavoritesData() {
    const categories = ['drugs', 'nursing', 'emergency', 'body', 'lab', 'vitamins', 'equipment', 'nutrition', 'diet', 'skincare', 'maternal', 'herbal', 'poisoning', 'dictionary', 'diseases', 'occupational', 'signlanguage', 'pathology', 'bloodTypes', 'videos'];
    let allData = [];
    categories.forEach(cat => {
        if (medicalData[cat]) allData = allData.concat(medicalData[cat]);
    });
    return allData.filter(item => favorites.some(f => String(f.id) === String(item.id)));
}


function showIntroduction() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    const trans = medicalData.translations[currentLang];
    const alignment = (currentLang === 'en') ? 'left' : 'right';
    
    let introContent = `
        <div style="text-align: ${alignment}; line-height: 1.8; color: #fff;">
            <h2 style="color: var(--primary); text-align: center; margin-bottom: 20px;">📖 ${trans.introduction}</h2>
            
            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; margin-bottom: 20px; border-${alignment === 'right' ? 'right' : 'left'}: 4px solid var(--primary);">
                <h3 style="color: #fff; margin-bottom: 10px;"><i class="fas fa-user-nurse"></i> ${trans.introNursingTitle}</h3>
                <p>${trans.introNursingDesc}</p>
            </div>

            <div style="background: rgba(255,255,255,0.05); padding: 20px; border-radius: 15px; border-${alignment === 'right' ? 'right' : 'left'}: 4px solid #f59e0b;">
                <h3 style="color: #fff; margin-bottom: 10px;"><i class="fas fa-pills"></i> ${trans.introPharmacyTitle}</h3>
                <p>${trans.introPharmacyDesc}</p>
            </div>
            
            <div style="text-align: center; margin-top: 30px;">
                <button onclick="closeModal()" style="padding: 10px 30px; background: var(--primary); color: #fff; border: none; border-radius: 50px; font-size: 1.1rem; cursor: pointer;">${trans.gotIt}</button>
            </div>
        </div>
    `;

    body.innerHTML = introContent;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function showFeedbackForm() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    const trans = medicalData.translations[currentLang];
    const alignment = (currentLang === 'en') ? 'left' : 'right';
    
    let formContent = `
        <div style="text-align: ${alignment}; color: #fff;">
            <h2 style="color: var(--primary); text-align: center; margin-bottom: 20px;"><i class="fas fa-envelope-open-text"></i> ${trans.feedbackTitle}</h2>
            <p style="text-align: center; margin-bottom: 20px; color: #cbd5e1; line-height: 1.6;">${trans.feedbackSub}</p>
            
            <form id="feedbackForm" style="display: flex; flex-direction: column; gap: 15px;">
                <input type="text" id="fb-name" placeholder="${trans.fbNamePlaceholder}" style="padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.2); color: #fff; font-family: inherit; font-size: 1rem;" outline="none">
                
                <textarea id="fb-message" placeholder="${trans.fbMsgPlaceholder}" required style="padding: 15px; border-radius: 10px; border: 1px solid rgba(255,255,255,0.2); background: rgba(0,0,0,0.2); color: #fff; font-family: inherit; font-size: 1rem; min-height: 150px; resize: vertical;" outline="none"></textarea>
                
                <button type="submit" id="fb-submit-btn" style="padding: 15px; background: var(--primary); color: #fff; border: none; border-radius: 10px; font-size: 1.1rem; cursor: pointer; font-weight: bold; margin-top: 10px; transition: 0.3s;">${trans.fbSubmitBtn} <i class="fas fa-paper-plane"></i></button>
            </form>
            <div id="fb-result" style="text-align: center; margin-top: 15px; font-weight: bold; font-size: 1.1rem;"></div>
        </div>
    `;

    body.innerHTML = formContent;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    document.getElementById('feedbackForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const btn = document.getElementById('fb-submit-btn');
        const result = document.getElementById('fb-result');
        const name = document.getElementById('fb-name').value || (currentLang === 'ku' ? 'بەکارهێنەرێکی نەناسراو' : (currentLang === 'ar' ? 'مستخدم مجهول' : 'Anonymous User'));
        const message = document.getElementById('fb-message').value;
        
        btn.innerHTML = `${trans.fbSending} <i class="fas fa-spinner fa-spin"></i>`;
        btn.disabled = true;
        btn.style.opacity = '0.7';

        const accessKey = '6f29edd5-8122-4928-a614-f2c45657f695'; 

        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                access_key: accessKey,
                subject: `MedKurds Feedback - ${currentLang.toUpperCase()}`,
                name: name,
                message: message
            })
        })
        .then(async (response) => {
            if (response.status == 200) {
                result.innerHTML = `<span style="color: #4ade80;"><i class="fas fa-check-circle"></i> ${trans.fbSuccess}</span>`;
                document.getElementById('feedbackForm').reset();
            } else {
                result.innerHTML = `<span style="color: #f87171;"><i class="fas fa-times-circle"></i> ${trans.fbError}</span>`;
            }
        })
        .catch(error => {
            result.innerHTML = `<span style="color: #f87171;"><i class="fas fa-times-circle"></i> ${trans.fbInternetError}</span>`;
        })
        .finally(() => {
            btn.innerHTML = `${trans.fbSubmitBtn} <i class="fas fa-paper-plane"></i>`;
            btn.disabled = false;
            btn.style.opacity = '1';
        });
    });
}

// Install Guide Logic
function showInstallGuideModal() {
    const modal = document.getElementById('modal');
    const body = document.getElementById('modal-body');
    const trans = medicalData.translations[currentLang];
    
    let content = `
        <div style="text-align: center; color: #fff;">
            <h2 style="color: var(--primary); margin-bottom: 20px;"><i class="fas fa-download"></i> ${trans.installApp || 'داگرتنی بەرنامە (Add to Home Screen)'}</h2>
            <div class="install-tabs">
                <button onclick="showInstallSteps('iphone')" id="tab-iphone">
                    <i class="fab fa-apple"></i> <span>${trans.iphoneInstall || 'بۆ ئایفۆن'}</span>
                </button>
                <button onclick="showInstallSteps('android')" id="tab-android">
                    <i class="fab fa-android"></i> <span>${trans.androidInstall || 'بۆ ئەندرۆید'}</span>
                </button>
            </div>
            <div id="install-steps-text" class="steps-box"></div>
        </div>
    `;

    body.innerHTML = content;
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
        showInstallSteps('iphone');
    }, 50);
}

function showInstallSteps(platform) {
    const textContainer = document.getElementById('install-steps-text');
    const btnIphone = document.getElementById('tab-iphone');
    const btnAndroid = document.getElementById('tab-android');
    const trans = medicalData.translations[currentLang];

    if (platform === 'iphone') {
        textContainer.innerHTML = trans.iphoneSteps;
        btnIphone.classList.add('active');
        btnAndroid.classList.remove('active');
    } else {
        textContainer.innerHTML = trans.androidSteps;
        btnAndroid.classList.add('active');
        btnIphone.classList.remove('active');
    }
}

// AI Analysis Logic
function hideAI() {
    document.getElementById('ai-response-area').style.display = 'none';
}

async function askAI(query) {
    const responseArea = document.getElementById('ai-response-area');
    const responseText = document.getElementById('ai-response-text');
    const trans = medicalData.translations[currentLang];
    
    // Check if the user is offline
    if (!navigator.onLine) {
        let offlineMsg = '';
        if (currentLang === 'ku') {
            offlineMsg = 'بۆ بەکارهێنانی پزیشکی زیرەک (AI) پێویستت بە هێڵی ئینتەرنێتە. هەموو بەشەکانی تری بەرنامەکە بە تەواوی و بەبێ ئینتەرنێت کاردەکەن! 📡';
        } else if (currentLang === 'ar') {
            offlineMsg = 'لاستخدام الطبيب الذكي (AI) تحتاج إلى اتصال بالإنترنت. جميع الأقسام الأخرى للتطبيق تعمل بالكامل بدون إنترنت! 📡';
        } else {
            offlineMsg = 'Using the AI Doctor requires an active internet connection. All other sections of the app work fully offline! 📡';
        }
        
        responseArea.style.display = 'block';
        responseText.innerHTML = `<div style="color:#e2e8f0; text-align:center; padding:20px; font-size:1.1rem; line-height:1.6;"><i class="fas fa-wifi-slash" style="font-size:2rem; margin-bottom:10px; display:block; color:#f59e0b;"></i>${offlineMsg}</div>`;
        responseArea.scrollIntoView({ behavior: 'smooth' });
        return;
    }
    
    responseArea.style.display = 'block';
    responseText.innerHTML = `<div style="text-align:center; padding:20px;"><i class="fas fa-spinner fa-spin"></i> ${trans.aiThinkingMsg}</div>`;
    
    // Scroll to response
    responseArea.scrollIntoView({ behavior: 'smooth' });

    try {
        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${AI_KEY}`
            },
            body: JSON.stringify({
                model: "llama-3.3-70b-versatile", 
                messages: [
                    { role: "system", content: getAiSystemPrompt() },
                    { role: "user", content: query }
                ],
                temperature: 0.6
            })
        });

        const data = await response.json();
        if (data.choices && data.choices[0]) {
            const aiMsg = data.choices[0].messages?.content || data.choices[0].message?.content;
            const alignment = (currentLang === 'en') ? 'left' : 'right';
            responseText.innerHTML = `<div style="line-height:1.8; color:#fff; font-size:1.1rem; text-align:${alignment};">${aiMsg.replace(/\n/g, '<br>')}</div>`;
        } else {
            responseText.innerHTML = `<div style="color:#f87171; text-align:center; padding:20px;">${trans.aiErrorMsg}</div>`;
        }
    } catch (error) {
        console.error("AI Error:", error);
        responseText.innerHTML = `<div style="color:#f87171; text-align:center; padding:20px;">${trans.aiConnError}</div>`;
    }
}

// Real-time Unique User and Visit Analytics
function trackUserAnalytics() {
    if (typeof db === 'undefined' || !db) return;
    
    const userKey = 'medkurds_uuid';
    const existingUser = localStorage.getItem(userKey);
    
    const batch = db.collection('analytics').doc('counters');
    
    if (!existingUser) {
        // Create a unique local installation ID for this browser
        const newUuid = 'user_' + Math.random().toString(36).substr(2, 9) + '_' + Date.now();
        localStorage.setItem(userKey, newUuid);
        
        // Atomically increment unique users and visits
        batch.set({
            unique_users: firebase.firestore.FieldValue.increment(1),
            total_visits: firebase.firestore.FieldValue.increment(1)
        }, { merge: true }).catch(err => console.error("Analytics Error:", err));
    } else {
        // Returning user - only increment visit count
        batch.set({
            total_visits: firebase.firestore.FieldValue.increment(1)
        }, { merge: true }).catch(err => console.error("Analytics Error:", err));
    }
    
    // Start real-time updates for the visual counter
    listenToUserCounter();
}

function listenToUserCounter() {
    if (typeof db === 'undefined' || !db) return;
    
    db.collection('analytics').doc('counters').onSnapshot((doc) => {
        if (doc.exists) {
            const data = doc.data();
            const count = data.unique_users || 0;
            
            // Format number beautifully according to selected locale
            const formatter = new Intl.NumberFormat(currentLang === 'ku' ? 'ckb-IQ' : (currentLang === 'ar' ? 'ar-EG' : 'en-US'));
            const formattedCount = formatter.format(count);
            
            // Update Sidebar Counter (Desktop)
            const displayEl = document.getElementById('user-counter-display');
            const countEl = document.getElementById('user-count-num');
            if (displayEl && countEl) {
                countEl.textContent = formattedCount;
                displayEl.style.display = 'inline-flex';
            }
        }
    }, (err) => {
        console.warn("Counter sync failed (normal if offline/rules restricted):", err);
    });
}

// Leaflet Map Logic
window.mapInstance = null;
window.mapMarker = null;

function showMapModal(lat, lng, title) {
    const mapModal = document.getElementById('map-modal');
    mapModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        if (!window.mapInstance) {
            window.mapInstance = L.map('map-container').setView([lat, lng], 15);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; OpenStreetMap contributors'
            }).addTo(window.mapInstance);
            
            window.mapMarker = L.marker([lat, lng]).addTo(window.mapInstance);
        } else {
            window.mapInstance.setView([lat, lng], 15);
            window.mapMarker.setLatLng([lat, lng]);
        }
        
        if (title) {
            window.mapMarker.bindPopup(`<strong>${title}</strong>`).openPopup();
        }
        
        window.mapInstance.invalidateSize();
    }, 300);
}

function closeMapModal() {
    const mapModal = document.getElementById('map-modal');
    mapModal.style.display = 'none';
    
    // Only restore body overflow if main modal is closed
    if (document.getElementById('modal').style.display !== 'flex') {
        document.body.style.overflow = 'auto';
    }
}


// --- Light/Dark Mode Logic ---
let isLightMode = localStorage.getItem('medkurds_lightmode') === 'true';

function applyThemeMode() {
    const btnIcon = document.querySelector('#theme-toggle-btn i');
    if (isLightMode) {
        document.body.classList.add('light-mode');
        if (btnIcon) {
            btnIcon.className = 'fas fa-moon';
        }
    } else {
        document.body.classList.remove('light-mode');
        if (btnIcon) {
            btnIcon.className = 'fas fa-sun';
        }
    }
}

function toggleThemeMode() {
    isLightMode = !isLightMode;
    localStorage.setItem('medkurds_lightmode', isLightMode);
    applyThemeMode();
}

function renderDailyTip() {
    const tipText = document.getElementById('daily-tip-text');
    if (!tipText || !medicalData.dailyTips || medicalData.dailyTips.length === 0) return;
    
    const tips = medicalData.dailyTips;
    
    // Get local date string (e.g. "2026-5-19") to respect local calendar timezone
    const localDate = new Date();
    const todayStr = `${localDate.getFullYear()}-${localDate.getMonth() + 1}-${localDate.getDate()}`;
    
    let savedDate = localStorage.getItem('medkurds_tip_date');
    let savedIndex = localStorage.getItem('medkurds_tip_index');
    let shownIndices = JSON.parse(localStorage.getItem('medkurds_shown_tips') || '[]');
    
    let activeIndex;
    
    // If it's a new day, or there's no saved tip, or the saved index is invalid
    if (savedDate !== todayStr || savedIndex === null || Number(savedIndex) >= tips.length) {
        // Filter out already shown tips to prevent repetition
        let availableIndices = tips.map((_, i) => i).filter(i => !shownIndices.includes(i));
        
        // If all tips have been shown once, reset the history
        if (availableIndices.length === 0) {
            shownIndices = [];
            availableIndices = tips.map((_, i) => i);
        }
        
        // Select a random index from the available ones
        const randomIndex = Math.floor(Math.random() * availableIndices.length);
        activeIndex = availableIndices[randomIndex];
        
        // Save the selection and update history
        shownIndices.push(activeIndex);
        localStorage.setItem('medkurds_tip_date', todayStr);
        localStorage.setItem('medkurds_tip_index', activeIndex.toString());
        localStorage.setItem('medkurds_shown_tips', JSON.stringify(shownIndices));
    } else {
        activeIndex = Number(savedIndex);
    }
    
    const tip = tips[activeIndex];
    
    if (tip && tip[currentLang]) {
        tipText.textContent = tip[currentLang];
    } else if (Array.isArray(tips)) {
        // Fallback for simple array structure
        const simpleTip = tips[activeIndex];
        tipText.textContent = typeof simpleTip === 'string' ? simpleTip : (simpleTip[currentLang] || '');
    }
}

async function toggleNotifications() {
    const btn = document.getElementById('notification-btn');
    if (!btn) return;
    
    // Check if Capacitor LocalNotifications is available
    if (window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.LocalNotifications) {
        const { LocalNotifications } = window.Capacitor.Plugins;
        
        let permStatus = await LocalNotifications.checkPermissions();
        if (permStatus.display !== 'granted') {
            permStatus = await LocalNotifications.requestPermissions();
        }
        
        if (permStatus.display === 'granted') {
            // Cancel existing
            const pending = await LocalNotifications.getPending();
            if (pending.notifications.length > 0) {
                await LocalNotifications.cancel(pending);
                showToast('ئاگادارکردنەوەی ڕۆژانە کوژێنرایەوە 🔕');
                btn.style.opacity = '0.5';
            } else {
                // Schedule notifications
                const tips = medicalData.dailyTips || [];
                const notifsToSchedule = [];
                
                // Schedule next 30 days
                for (let i = 1; i <= 30; i++) {
                    const tip = tips[Math.floor(Math.random() * tips.length)];
                    if (!tip) continue;
                    const text = tip[currentLang] || tip['ku'] || '';
                    if(!text) continue;
                    
                    const scheduleDate = new Date();
                    scheduleDate.setDate(scheduleDate.getDate() + i);
                    scheduleDate.setHours(11, 0, 0, 0); // 11 AM
                    
                    notifsToSchedule.push({
                        title: currentLang === 'ku' ? "ئامۆژگاری ئەمڕۆ بۆتۆ" : "Daily Tip",
                        body: text,
                        id: i,
                        schedule: { at: scheduleDate, allowWhileIdle: true }
                    });
                }
                
                if (notifsToSchedule.length > 0) {
                    await LocalNotifications.schedule({ notifications: notifsToSchedule });
                    showToast('ئاگادارکردنەوەی ڕۆژانە چالاک کرا 🔔 (هەموو بەیانییەک ١١:٠٠)');
                    btn.style.opacity = '1';
                }
            }
        } else {
            showToast('مۆڵەتی ناردنی ئاگادارکردنەوە نەدراوە!');
        }
    } else {
        // Fallback to Web/Firebase Notifications
        if (typeof window.requestNotificationPermission === 'function') {
            if ('serviceWorker' in navigator) {
                navigator.serviceWorker.ready.then(async (reg) => {
                    await window.requestNotificationPermission(reg);
                    showToast('ئاگادارکردنەوەی ئۆنلاین چالاک کرا 🔔');
                    btn.style.opacity = '1';
                });
            } else {
                showToast('مۆبایلەکەت پاڵپشتی ئاگادارکردنەوە ناکات!');
            }
        } else {
            showToast('مۆبایلەکەت پاڵپشتی ئاگادارکردنەوە ناکات!');
        }
    }
}
