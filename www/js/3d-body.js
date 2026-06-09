/* ===================================================
   MedKurds — 3D Anatomy Viewer  (Sketchfab Embed)
   Dual-Panel: Image Reference + Interactive 3D Model
   =================================================== */

'use strict';

let is3DInit = false;

const ORGANS = [
  { id: 303, type: 'brain',     labelKu: 'مێشک',        labelEn: 'Brain',       labelAr: 'الدماغ' },
  { id: 307, type: 'eye',       labelKu: 'چاو',           labelEn: 'Eyes',       labelAr: 'العيون' },
  { id: 323, type: 'throat',    labelKu: 'قوڕگ',         labelEn: 'Throat',      labelAr: 'الحنجرة' },
  { id: 318, type: 'thyroid',   labelKu: 'غودەی دەرەقی', labelEn: 'Thyroid',    labelAr: 'الغدة الدرقية' },
  { id: 301, type: 'heart',     labelKu: 'دڵ',           labelEn: 'Heart',       labelAr: 'القلب' },
  { id: 302, type: 'lungs',     labelKu: 'سییەکان',     labelEn: 'Lungs',       labelAr: 'الرئتين' },
  { id: 304, type: 'stomach',   labelKu: 'گەدە',         labelEn: 'Stomach',     labelAr: 'المعدة' },
  { id: 306, type: 'liver',     labelKu: 'جگەر',         labelEn: 'Liver',       labelAr: 'الكبد' },
  { id: 305, type: 'kidneys',   labelKu: 'گورچیلەکان',  labelEn: 'Kidneys',     labelAr: 'الكلى' },
  { id: 324, type: 'pancreas',  labelKu: 'پەنکریاس',    labelEn: 'Pancreas',    labelAr: 'البنكرياس' },
  { id: 319, type: 'intestine', labelKu: 'ڕیخۆڵەکان',  labelEn: 'Intestines',  labelAr: 'الأمعاء' },
  { id: 326, type: 'bladder',   labelKu: 'میزدان',       labelEn: 'Bladder',     labelAr: 'المثانة' },
  { id: 320, type: 'prostate',  labelKu: 'پڕۆستات',     labelEn: 'Prostate',    labelAr: 'البروستاتا' },
  { id: 321, type: 'uterus',    labelKu: 'منداڵدان',     labelEn: 'Uterus',      labelAr: 'الرحم' },
  { id: 317, type: 'spine',     labelKu: 'بڕبڕەی پشت',  labelEn: 'Spine',       labelAr: 'العمود الفقري' },
  { id: 309, type: 'bone',      labelKu: 'ئێسکەکان',    labelEn: 'Bones',       labelAr: 'العظام' },
  { id: 313, type: 'muscle',    labelKu: 'ماسولکە',      labelEn: 'Muscles',     labelAr: 'العضلات' },
  { id: 311, type: 'skin',      labelKu: 'پێست',         labelEn: 'Skin',        labelAr: 'الجلد' },
  { id: 312, type: 'blood',     labelKu: 'خوێن',         labelEn: 'Blood',       labelAr: 'الدم' }
];

/* ── organ colour palette ── */
const ORGAN_PALETTE = {
  heart    : '#c0392b',
  lungs    : '#e8917a',
  brain    : '#f5cba7',
  stomach  : '#f0c04a',
  liver    : '#8b2500',
  kidneys  : '#a93226',
  pancreas : '#e59866',
  intestine: '#e8c69e',
  spine    : '#faf0dc',
  skin     : '#e8b88a',
  bone     : '#fff8e7',
  thyroid  : '#76d7c4',
  eye      : '#85c1e9',
  bladder  : '#f7dc6f',
  throat   : '#d98880',
  prostate : '#85c1e9',
  uterus   : '#f1948a',
  blood    : '#e74c3c',
  muscle   : '#cd6155',
  default  : '#aab7b8',
};


/* ══════════════════════════════════════════════════
   INIT (called by app.js)
══════════════════════════════════════════════════ */
function init3DBody() {
  if (is3DInit) return;
  const container = document.getElementById('body-3d-container');
  if (!container) return;

  is3DInit = true;

  // Clear container and inject Sketchfab iframe
  container.innerHTML = `
    <iframe title="Human Internal Organs Anatomy" 
            frameborder="0" 
            allowfullscreen 
            mozallowfullscreen="true" 
            webkitallowfullscreen="true" 
            allow="autoplay; fullscreen; xr-spatial-tracking" 
            xr-spatial-tracking 
            execution-while-out-of-viewport 
            execution-while-not-rendered 
            web-share 
            src="https://sketchfab.com/models/8a43f3a308994699a4000b17004d5220/embed?autostart=1&ui_theme=dark&ui_infos=0&ui_watermark=0&ui_stop=0&ui_animations=0&preload=1"
            style="width: 100%; height: 100%; border: none; border-radius: 22px;">
    </iframe>
  `;

  buildDualPanelUI();
}

/* ══════════════════════════════════════════════════
   DUAL-PANEL UI  (Image + Organ Pills)
══════════════════════════════════════════════════ */
function buildDualPanelUI() {
  const parentView = document.getElementById('body-3d-view');
  
  // Clean up any existing image panel to declutter the UI
  const existingImgPanel = document.getElementById('anatomy-img-panel');
  if (existingImgPanel) {
      existingImgPanel.remove();
  }

  // If there's a dual wrapper, remove it and just keep the container
  const dualWrap = document.querySelector('.anatomy-dual');
  if(dualWrap) {
      dualWrap.replaceWith(...dualWrap.childNodes);
  }

  // ── Organ Pills (below 3D) ──
  if (!document.getElementById('organ-pills')) {
    const pills = document.createElement('div');
    pills.id = 'organ-pills';
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'ku';
    pills.innerHTML = ORGANS.map(o =>
      `<button class="organ-pill" onclick="handlePartClick(${o.id})">
         <span class="pill-dot" style="background:${orgColor(o.type)}"></span>
         ${lang === 'ku' ? o.labelKu : lang === 'ar' ? o.labelAr : o.labelEn}
       </button>`
    ).join('');
    parentView.appendChild(pills);
  }
}

function orgColor(type) {
  return ORGAN_PALETTE[type] || ORGAN_PALETTE.default;
}

function getLang(lang, ku, en, ar) {
  return lang === 'ku' ? ku : lang === 'ar' ? ar : en;
}

/* ══════════════════════════════════════════════════
   ORGAN CLICK (shared with app.js)
══════════════════════════════════════════════════ */
function handlePartClick(id) {
  if (typeof medicalData === 'undefined' || !medicalData.body) return;
  const part = medicalData.body.find(b => Number(b.id) === Number(id));
  if (part && typeof showDetail === 'function') showDetail(part);
}

/* ══════════════════════════════════════════════════
   CLEANUP
══════════════════════════════════════════════════ */
function destroy3DBody() {
  const container = document.getElementById('body-3d-container');
  if (container) container.innerHTML = '';
  is3DInit = false;
}
