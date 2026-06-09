const botNodes = {
    start: {
        message: "سڵاو! من دکتۆری زیرەکی ئەپەکەم 🩺. تکایە پێم بڵێ کێشەکەت چییە تا یارمەتیت بدەم؟",
        options: [
            { text: "سەرئێشە 🤕", next: "headache_1" },
            { text: "ئازاری سک 🤢", next: "stomach_1" },
            { text: "تا و کۆکە 🤒", next: "fever_1" },
            { text: "کێشەی پێست 🧴", next: "skin_1" },
            { text: "ئازاری سنگ ❤️‍🔥", next: "chest_1" },
            { text: "ئازاری پشت و جومگە 🦴", next: "joint_1" },
            { text: "کێشەی چاو 👁️", next: "eye_1" },
            { text: "کێشەی میزکردن 🚽", next: "urine_1" },
            { text: "بێهێزی و ماندووبوون 🥱", next: "fatigue_1" }
        ]
    },
    // Headache Path
    headache_1: {
        message: "سەرئێشەکەت چۆنە؟ کام بەشی سەرت ئازاری هەیە؟",
        options: [
            { text: "هەموو سەرم وەک قایش توند بووە", next: "headache_tension" },
            { text: "لایەکی سەرمە و دڵتێکچوونم هەیە", next: "headache_migraine" },
            { text: "دەوروبەری چاوم و لووتم (جیوب)", next: "headache_sinus" }
        ]
    },
    headache_tension: {
        message: "ئەمە نیشانەکانی **سەرئێشەی گرژییە (Tension Headache)** کە زۆرجار بەهۆی سترێس، ماندووبوون یان کەمخەوییەوە دروست دەبێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- پشوودان و خەوێکی باش.<br>- بەکارهێنانی ئازارشکێنی وەک Paracetamol یان Ibuprofen.<br><br>⚠️ ئەگەر ئازارەکە زۆر توند بوو یان بەرچاوت لێڵ بوو، تکایە سەردانی پزیشک بکە.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    headache_migraine: {
        message: "ئەمە نیشانەکانی **شەقیقەیە (Migraine)**. زۆرجار بە ڕووناکی و دەنگەدەنگ زیاد دەکات.<br><br>💊 **چارەسەری سەرەتایی:**<br>- دانیشتن لە ژوورێکی تاریک و بێدەنگ.<br>- بەکارهێنانی دەرمانی تایبەت بە شەقیقە (وەک ئازارشکێنەکان پاش ڕاوێژکردن).<br><br>⚠️ شەقیقە پێویستی بە پزیشکی پسپۆڕ هەیە بۆ کۆنترۆڵکردن.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    headache_sinus: {
        message: "ئەمە ئەگەری زۆرە **هەوکردنی جیوبەکان (Sinusitis)** بێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- هەڵمژینی هەڵمی ئاوی گەرم.<br>- بەکارهێنانی دەرمانی دژە-هیستامین یان قەترەی لووت.<br><br>⚠️ سەردانی پزیشکی قوڕگ و لووت و گوێ بکە گەر زیاتر لە ٧ ڕۆژی خایاند.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    
    // Stomach Path
    stomach_1: {
        message: "ئازارەکەی سکت لە کام لایە؟",
        options: [
            { text: "لای ڕاستی خوارەوە", next: "stomach_appendix" },
            { text: "لای سەرەوەی ناوەڕاست (گەدە)", next: "stomach_gastritis" },
            { text: "هەموو سکم دەگورژێتەوە و سکچوونم هەیە", next: "stomach_poisoning" }
        ]
    },
    stomach_appendix: {
        message: "⚠️ **ئاگاداربە!** ئەمە ڕەنگە نیشانەی **هەوکردنی ڕیخۆڵە کوێرە (Appendicitis)** بێت.<br><br>هەرگیز دەرمانی ئازارشکێن مەخۆ چونکە نیشانەکان دەشارێتەوە! بە زووترین کات سەردانی نەخۆشخانەی فریاکەوتن بکە بۆ پشکنینی سۆنار و خوێن.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    stomach_gastritis: {
        message: "ئەمە نیشانەکانی **کێشەی گەدەیە (Gastritis یان ترشەڵۆک)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- دوورکەوتنەوە لە چای قورس، قاوە و خواردنی تیژ.<br>- دەتوانیت دەرمانی (Antacid) یان (Omeprazole) بەکاربهێنیت بۆ کەمکردنەوەی ترشەڵۆک.<br><br>⚠️ گەر ڕشانەوەی خوێناوی یان پیسایی ڕەشی لەگەڵ بوو، خێرا بڕۆ بۆ لای پزیشک.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    stomach_poisoning: {
        message: "پێدەچێت **ژەهراویبوونی خۆراک یان پەتا (Gastroenteritis)** بێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- خواردنەوەی بڕێکی زۆر لە شلەمەنی بۆ قەرەبووکردنەوەی ئاو.<br>- بەکارهێنانی گیراوەی (ORS).<br><br>⚠️ گەر سکچوونەکە خوێنی پێوە بوو یان تا-یەکی زۆرت هەبوو سەردانی پزیشک بکە.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    
    // Fever Path
    fever_1: {
        message: "ئایا لەگەڵ تا و کۆکەکەدا هیچ کام لەم نیشانانەت هەیە؟",
        options: [
            { text: "قورگ ئێشە و لووت گیران", next: "fever_cold" },
            { text: "هەناسەتەنگی و سنگی ئێشە", next: "fever_pneumonia" },
            { text: "ئازاری جومگەکان و لەشم داهێزراوە", next: "fever_flu" }
        ]
    },
    fever_cold: {
        message: "ئەمە نیشانەی **پەتای وەرزی و هەڵامەتی ئاساییە (Common Cold)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- پشوودان و خواردنەوەی شۆربا و شلەمەنی گەرم.<br>- بۆ تا و ئازار (Paracetamol) بخۆ.<br><br>⚠️ دژە-زیندەیی (Antibiotics) مەخۆ چونکە کاریگەری لەسەر ڤایرۆس نییە!",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    fever_pneumonia: {
        message: "⚠️ **ئاگاداربە!** هەناسەتەنگی لەگەڵ تا پێدەچێت نیشانەی **هەوکردنی سییەکان (Pneumonia)** بێت.<br><br>تکایە لە ماڵەوە چارەسەر مەکە، سەردانی پزیشکی پسپۆڕی هەناسەدان یان نەخۆشخانە بکە بۆ گرتنی تیشکی سنگ (X-Ray).",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    fever_flu: {
        message: "ئەمە نیشانەکانی **ئەنفلۆنزایە (Flu)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- پشوودانی تەواو لە جێگەدا.<br>- خواردنی ڤیتامین C و زۆر خواردنەوەی ئاو.<br>- بەکارهێنانی دەرمانی وەک (Cold & Flu).<br><br>⚠️ گەر تێبینی هەناسەتەنگیت کرد، سەردانی پزیشک بکە.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },

    // Skin Path
    skin_1: {
        message: "کێشەی پێستەکەت چۆنە؟",
        options: [
            { text: "سەرووچاوم زیپکەی هەیە", next: "skin_acne" },
            { text: "پێستم دەخورێت و سوور بووەتەوە", next: "skin_allergy" },
            { text: "برینێکی سوورە و ئاوی لێ دێت", next: "skin_infection" }
        ]
    },
    skin_acne: {
        message: "کێشەی **زیپکەی گەنجانە (Acne)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- بەردەوام شۆردنی دەموچاو بە سابوونی گونجاو.<br>- دەستکاری زیپکەکان مەکە بۆ ئەوەی جێگەیان نەمێنێت.<br><br>⚠️ بۆ حەپی بەهێزی وەک Roaccutane تەنها پزیشکی پێست دەتوانێت بۆتی بنووسێت.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    skin_allergy: {
        message: "ئەمە نیشانەی **هەستیارییە (Allergy / Urticaria)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- بەکارهێنانی حەپی دژە-هیستامین (وەک Loratadine یان Allermine).<br>- خۆدورخستنەوە لەو خواردن یان دەرمانەی کە حەساسییەتەکەی دروستکردووە.<br><br>⚠️ گەر حەساسییەتەکە بووە هۆی ئاوسانی دەم و چاو یان تەنگەنەفەسی، خێرا بڕۆ بۆ نەخۆشخانە!",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    skin_infection: {
        message: "⚠️ پێدەچێت **هەوکردنی پێست یان بەکتریا (Cellulitis)** بێت.<br><br>پێویستی بە بینینی پزیشکی پێست یان گشتی هەیە بۆ ئەوەی کرێم یان حەپی دژە-بەکتریای (Antibiotic) گونجاوت بۆ بنووسێت.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },

    // Chest Path
    chest_1: {
        message: "ئازاری سنگت چۆنە؟",
        options: [
            { text: "وەک بەرد قورسە و لای چەپمە دێتە سەر دەستم", next: "chest_heart" },
            { text: "دڵەکزێیە و دەسوتێتەوە", next: "chest_gerd" },
            { text: "کاتێک کۆکە دەکەم یان جوڵە دەکەم ئازاری هەیە", next: "chest_muscle" }
        ]
    },
    chest_heart: {
        message: "🚨 **هۆشداری زۆر توند!** ئەمە نیشانەکانی **جەڵتەی دڵە (Myocardial Infarction)**!<br><br>تکایە هەر ئێستا بە خێرایی پەیوەندی بە فریاکەوتن (122) بکە یان سەردانی نەخۆشخانە بکە. هیچ شتێک مەخۆ جگە لە حەپی ئەسپرین ئەگەر لەلات بێت.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    chest_gerd: {
        message: "پێدەچێت **ترشەڵۆکی گەدە (GERD / دڵەکزێ)** بێت و هاتبێتە سەرەوە بۆ سۆنچی.<br><br>💊 **چارەسەری سەرەتایی:**<br>- دوای نانخواردن یەکسەر پاڵ مەکەوە.<br>- دەرمانی دژە-ترشەڵۆک (Antacid) وەک گافیسکۆن یان ڕێنی بخۆ.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    chest_muscle: {
        message: "ئەمە نیشانەی **گرژبوونی ماسولکەی سنگە (Muscle Strain)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- پشوو بدە و جوڵەی قورس مەکە.<br>- کرێمی ئازارشکێن یان حەپی ماسولکە خاوکەرەوە بەکاربهێنە.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },

    // Joint Path
    joint_1: {
        message: "ئازارەکەت لە کوێیە بە دیاریکراوی؟",
        options: [
            { text: "پشتمە و دەداتە قاچم (وەک تەزوو)", next: "joint_sciatica" },
            { text: "تەنها ماسولکەکانمە بەهۆی ئیشەوە", next: "joint_strain" },
            { text: "جومگەی ئەژنۆم ئاوساوە و ئازاری هەیە", next: "joint_arthritis" }
        ]
    },
    joint_sciatica: {
        message: "ئەمە نیشانەکانی **ئازاری دەماری عیرقونسا (Sciatica)** یە، زۆرجار بەهۆی خلیسکانی کرکڕاگەوە (ئینزلاق) دروست دەبێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- پشوودان لەسەر جێگەی ڕەق.<br>- بەکارهێنانی ئازارشکێنی وەک Diclofenac.<br><br>⚠️ پێویستە سەردانی پزیشکی مێشک و دەمار یان جومگە بکەیت بۆ چارەسەری تەواو.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    joint_strain: {
        message: "ئەمە پێدەچێت **گرژبوونی ماسولکە (Muscle Strain)** بێت بەهۆی ماندووبوون یان هەڵگرتنی شتی قورسەوە.<br><br>💊 **چارەسەری سەرەتایی:**<br>- پشوودان و بەکارهێنانی جەوەنەی گەرم یان سارد.<br>- بەکارهێنانی حەپی Paracetamol یان کرێمی ئازارشکێن.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    joint_arthritis: {
        message: "ئەمە نیشانەی **سەوەفان یان هەوکردنی جومگەیە (Arthritis)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- کەمکردنەوەی کێش و وەرزشی سووک.<br>- دەتوانیت حەپی وەک Meloxicam یان Ibuprofen بەکاربهێنیت بۆ کەمکردنەوەی هەوکردنەکە.<br><br>⚠️ گەر ئازارەکە بەردەوام بوو، سەردانی پزیشکی جومگە بکە.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },

    // Eye Path
    eye_1: {
        message: "چاوەکانت چییان لێ هاتووە؟",
        options: [
            { text: "سوور بووەتەوە و ئاوی لێ دێت و دەخورێت", next: "eye_conjunctivitis" },
            { text: "هەست دەکەم چاوم وشک بووەتەوە و دەسوتێتەوە", next: "eye_dry" },
            { text: "ئازارێکی توندی هەیە و بینینم کز بووە", next: "eye_glaucoma" }
        ]
    },
    eye_conjunctivitis: {
        message: "ئەمە ئەگەری زۆرە **پەتای چاو (Conjunctivitis)** بێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- دەست مەدە لە چاوت بۆ ئەوەی بڵاو نەبێتەوە.<br>- گەر پەتاکە بەکتریایی بێت، پێویستت بە قەترەی دژە-بەکتریا دەبێت (وەک Chloramphenicol).",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    eye_dry: {
        message: "ئەمە نیشانەی **وشکبوونەوەی چاوە (Dry Eye Syndrome)**، بەهۆی زۆر سەیرکردنی شاشە یان کەشوهەواوە دروست دەبێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- بەکارهێنانی فرمێسکی دەستکرد (Artificial Tears).<br>- کەمکردنەوەی سەیرکردنی مۆبایل.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    eye_glaucoma: {
        message: "⚠️ **ئاگاداربە!** ئازاری توند و لێڵبوونی بینین ڕەنگە نیشانەی **بەرزبوونەوەی پەستانی چاو (Glaucoma)** بێت.<br><br>دەستبەجێ سەردانی پزیشکی چاو بکە بۆ ڕێگریکردن لە لەدەستدانی بینین!",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },

    // Urine Path
    urine_1: {
        message: "کێشەی میزکردنەکەت چۆنە؟",
        options: [
            { text: "میزم دەسوتێتەوە و زوو زوو دەچمە ئاودەست", next: "urine_uti" },
            { text: "ئازارێکی توند لە پشتمدا هەیە و ڕەنگی میزم گۆڕاوە", next: "urine_stone" },
            { text: "میزم قەتیس بووە و ناتوانم میز بکەم", next: "urine_prostate" }
        ]
    },
    urine_uti: {
        message: "ئەمە نیشانەی **هەوکردنی میزەڵدان یان میزەڕۆیە (UTI)**.<br><br>💊 **چارەسەری سەرەتایی:**<br>- زۆر خواردنەوەی ئاو و شلەمەنی.<br>- پێویستت بە پشکنینی میز هەیە (GUE) بۆ ئەوەی دەرمانی گونجاوت بۆ بنووسرێت (وەک Ciprofloxacin).",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    urine_stone: {
        message: "ئەمە ئەگەری زۆرە نیشانەی **بەردی گورچیلە (Kidney Stone)** بێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- زۆر خواردنەوەی ئاو.<br>- بەکارهێنانی دەرمانی ئازارشکێن و فراوانکەری بۆری میز.<br>⚠️ سەردانی سۆنار بکە بۆ دڵنیابوونەوە.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    urine_prostate: {
        message: "⚠️ **ئاگاداربە!** قەتیسبوونی میز (Urinary Retention) کێشەیەکی فریاگوزارییە، زۆرجار بەهۆی گەورەبوونی پرۆستات یان بەردەوە دەبێت.<br><br>پێویستە دەستبەجێ سەردانی فریاکەوتن بکەیت بۆ دانانی سۆندەی میز (Foley Catheter).",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },

    // Fatigue Path
    fatigue_1: {
        message: "هۆکاری بێهێزییەکەت بەڕای خۆت پەیوەندی بە چییەوە هەیە؟",
        options: [
            { text: "سەرگێژخواردن و زەردبوونی ڕەنگم", next: "fatigue_anemia" },
            { text: "کێشم زیاد دەکات و هەردەم سەرمامە", next: "fatigue_thyroid" },
            { text: "خەوم تێکچووە و هیچ ئارەزوویەکی کارکردنم نەماوە", next: "fatigue_depression" }
        ]
    },
    fatigue_anemia: {
        message: "ئەمە نیشانەکانی **کەمخوێنییە (Anemia)**، زۆرجار بەهۆی کەمی ئاسن یان ڤیتامین B12 دروست دەبێت.<br><br>💊 **چارەسەری سەرەتایی:**<br>- خواردنی گۆشتی سوور و سپێناخ.<br>⚠️ پێویستە پشکنینی خوێن (CBC) بکەیت بۆ زانینی جۆری کەمخوێنییەکە.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    fatigue_thyroid: {
        message: "ئەمە ڕەنگە نیشانەی **تەمبەڵبوونی غودەی دەرەقی (Hypothyroidism)** بێت.<br><br>⚠️ پێویستە سەردانی پزیشک بکەیت و پشکنینی هۆرمۆنەکانی غودە (T3, T4, TSH) بکەیت.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    },
    fatigue_depression: {
        message: "ئەمە نیشانەکانی **خەمۆکی یان سترێسی دەروونییە (Depression/Stress)**.<br><br>💡 **چارەسەری سەرەتایی:**<br>- هەوڵبدە قسە لەگەڵ کەسێکی نزیکت بکەیت.<br>- وەرزشکردن و ڕۆیشتن لە هەوای پاکدا.<br>⚠️ ئەگەر هەستەکانت زۆر توند بوون، شەرم مەکە لە سەردانکردنی پزیشکی دەروونی.",
        options: [
            { text: "گەڕانەوە بۆ سەرەتا 🔄", next: "start" }
        ]
    }
};

let botTypingTimeout = null;

function openBot() {
    const modal = document.getElementById('bot-modal');
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    const chatContainer = document.getElementById('bot-chat-container');
    chatContainer.innerHTML = ''; // clear chat
    
    // Start bot
    goToNode('start');
}

function closeBot() {
    const modal = document.getElementById('bot-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    clearTimeout(botTypingTimeout);
}

function goToNode(nodeId) {
    const node = botNodes[nodeId];
    if (!node) return;
    
    // Remove previous options
    const previousOptions = document.querySelectorAll('.bot-options-container');
    previousOptions.forEach(el => el.remove());

    // Show typing indicator
    const chatContainer = document.getElementById('bot-chat-container');
    
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'bot-message-wrapper bot-typing-wrapper';
    typingIndicator.innerHTML = `
        <div class="bot-avatar">🤖</div>
        <div class="bot-message typing">
            <span></span><span></span><span></span>
        </div>
    `;
    chatContainer.appendChild(typingIndicator);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    botTypingTimeout = setTimeout(() => {
        // Remove typing
        typingIndicator.remove();
        
        // Show actual message
        const msgWrapper = document.createElement('div');
        msgWrapper.className = 'bot-message-wrapper';
        
        // Parse bold text
        let formattedMessage = node.message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        msgWrapper.innerHTML = `
            <div class="bot-avatar">🤖</div>
            <div class="bot-message">${formattedMessage}</div>
        `;
        chatContainer.appendChild(msgWrapper);
        
        // Show options
        if (node.options && node.options.length > 0) {
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'bot-options-container';
            
            node.options.forEach(opt => {
                const btn = document.createElement('button');
                btn.className = 'bot-option-btn';
                btn.innerText = opt.text;
                btn.onclick = () => handleUserSelection(opt.text, opt.next);
                optionsContainer.appendChild(btn);
            });
            chatContainer.appendChild(optionsContainer);
        }
        
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }, 1000);
}

function handleUserSelection(text, nextNodeId) {
    // Remove options
    const previousOptions = document.querySelectorAll('.bot-options-container');
    previousOptions.forEach(el => el.remove());

    const chatContainer = document.getElementById('bot-chat-container');
    
    // Append user message
    const msgWrapper = document.createElement('div');
    msgWrapper.className = 'user-message-wrapper';
    msgWrapper.innerHTML = `
        <div class="user-message">${text}</div>
    `;
    chatContainer.appendChild(msgWrapper);
    chatContainer.scrollTop = chatContainer.scrollHeight;

    // Proceed to next
    goToNode(nextNodeId);
}
