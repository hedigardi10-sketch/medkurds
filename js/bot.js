const botNodes = {
    ku: {
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
    },
    en: {
        start: {
            message: "Hello! I am the app's smart doctor 🩺. Please tell me what your problem is so I can help you?",
            options: [
                { text: "Headache 🤕", next: "headache_1" },
                { text: "Stomach pain 🤢", next: "stomach_1" },
                { text: "Fever and cough 🤒", next: "fever_1" },
                { text: "Skin problem 🧴", next: "skin_1" },
                { text: "Chest pain ❤️‍🔥", next: "chest_1" },
                { text: "Back and joint pain 🦴", next: "joint_1" },
                { text: "Eye problem 👁️", next: "eye_1" },
                { text: "Urination problem 🚽", next: "urine_1" },
                { text: "Weakness and fatigue 🥱", next: "fatigue_1" }
            ]
        },
        headache_1: {
            message: "How is your headache? Which part of your head hurts?",
            options: [
                { text: "My whole head is tight like a band", next: "headache_tension" },
                { text: "One side of my head and I feel nauseous", next: "headache_migraine" },
                { text: "Around my eyes and nose (sinus)", next: "headache_sinus" }
            ]
        },
        headache_tension: {
            message: "These are symptoms of a **Tension Headache**, often caused by stress, fatigue, or lack of sleep.<br><br>💊 **Initial Treatment:**<br>- Rest and get a good sleep.<br>- Use painkillers like Paracetamol or Ibuprofen.<br><br>⚠️ If the pain is very severe or your vision is blurry, please visit a doctor.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        headache_migraine: {
            message: "These are symptoms of a **Migraine**. It often worsens with light and noise.<br><br>💊 **Initial Treatment:**<br>- Sit in a dark, quiet room.<br>- Use migraine-specific medication (after consulting).<br><br>⚠️ Migraines require a specialist doctor for proper control.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        headache_sinus: {
            message: "This is very likely **Sinusitis**.<br><br>💊 **Initial Treatment:**<br>- Inhale hot water steam.<br>- Use anti-histamines or nasal drops.<br><br>⚠️ Visit an ENT doctor if it lasts more than 7 days.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        stomach_1: {
            message: "Where is the pain in your stomach?",
            options: [
                { text: "Lower right side", next: "stomach_appendix" },
                { text: "Upper middle (stomach)", next: "stomach_gastritis" },
                { text: "My whole stomach cramps and I have diarrhea", next: "stomach_poisoning" }
            ]
        },
        stomach_appendix: {
            message: "⚠️ **Warning!** This might be a sign of **Appendicitis**.<br><br>Never take painkillers as they hide the symptoms! Visit the emergency hospital ASAP for an ultrasound and blood test.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        stomach_gastritis: {
            message: "These are symptoms of **Gastritis / Acidity**.<br><br>💊 **Initial Treatment:**<br>- Avoid strong tea, coffee, and spicy food.<br>- Use antacids or Omeprazole to reduce acidity.<br><br>⚠️ If accompanied by bloody vomit or black stool, go to the doctor immediately.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        stomach_poisoning: {
            message: "It seems to be **Food Poisoning or Gastroenteritis**.<br><br>💊 **Initial Treatment:**<br>- Drink plenty of fluids to stay hydrated.<br>- Use ORS solution.<br><br>⚠️ If the diarrhea contains blood or you have high fever, see a doctor.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        fever_1: {
            message: "Do you have any of these symptoms along with the fever and cough?",
            options: [
                { text: "Sore throat and stuffy nose", next: "fever_cold" },
                { text: "Shortness of breath and chest pain", next: "fever_pneumonia" },
                { text: "Joint pain and body aches", next: "fever_flu" }
            ]
        },
        fever_cold: {
            message: "This is a sign of a **Common Cold**.<br><br>💊 **Initial Treatment:**<br>- Rest and drink warm soup and fluids.<br>- Take Paracetamol for fever and pain.<br><br>⚠️ Do not take antibiotics as they have no effect on viruses!",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        fever_pneumonia: {
            message: "⚠️ **Warning!** Shortness of breath with fever might be a sign of **Pneumonia**.<br><br>Please do not treat this at home. Visit a respiratory specialist or a hospital for a chest X-Ray.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        fever_flu: {
            message: "These are symptoms of the **Flu**.<br><br>💊 **Initial Treatment:**<br>- Complete bed rest.<br>- Take Vitamin C and drink plenty of water.<br>- Use cold & flu medications.<br><br>⚠️ If you experience shortness of breath, visit a doctor.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        skin_1: {
            message: "What is your skin problem like?",
            options: [
                { text: "Pimples on my face", next: "skin_acne" },
                { text: "My skin is itchy and red", next: "skin_allergy" },
                { text: "It is a red wound that oozes fluid", next: "skin_infection" }
            ]
        },
        skin_acne: {
            message: "**Acne** problem.<br><br>💊 **Initial Treatment:**<br>- Wash your face regularly with a suitable soap.<br>- Do not touch or pop the pimples to avoid scarring.<br><br>⚠️ For strong medications like Roaccutane, only a dermatologist can prescribe it.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        skin_allergy: {
            message: "This is a sign of an **Allergy (Urticaria)**.<br><br>💊 **Initial Treatment:**<br>- Use anti-histamine pills (like Loratadine).<br>- Avoid the food or medication that caused the allergy.<br><br>⚠️ If the allergy causes swelling in the mouth/face or shortness of breath, go to the hospital immediately!",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        skin_infection: {
            message: "⚠️ It seems to be a **Skin Infection or Cellulitis**.<br><br>You need to see a dermatologist or general practitioner to prescribe the appropriate antibiotic cream or pills.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        chest_1: {
            message: "How is your chest pain?",
            options: [
                { text: "Heavy like a rock, radiating to my left arm", next: "chest_heart" },
                { text: "Heartburn and burning sensation", next: "chest_gerd" },
                { text: "It hurts when I cough or move", next: "chest_muscle" }
            ]
        },
        chest_heart: {
            message: "🚨 **URGENT WARNING!** These are symptoms of a **Heart Attack (Myocardial Infarction)**!<br><br>Please call emergency services (122) or visit a hospital IMMEDIATELY. Do not eat anything; you may take an Aspirin if available.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        chest_gerd: {
            message: "It seems to be **Gastric Reflux (GERD / Heartburn)**.<br><br>💊 **Initial Treatment:**<br>- Do not lie down immediately after eating.<br>- Take antacids like Gaviscon or Rennie.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        chest_muscle: {
            message: "This is a sign of **Muscle Strain** in the chest.<br><br>💊 **Initial Treatment:**<br>- Rest and avoid heavy movements.<br>- Use pain relief cream or muscle relaxant pills.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        joint_1: {
            message: "Where exactly is the pain?",
            options: [
                { text: "My back, radiating down my leg (like an electric shock)", next: "joint_sciatica" },
                { text: "Just my muscles due to work", next: "joint_strain" },
                { text: "My knee joint is swollen and painful", next: "joint_arthritis" }
            ]
        },
        joint_sciatica: {
            message: "These are symptoms of **Sciatica**, often caused by a slipped disc.<br><br>💊 **Initial Treatment:**<br>- Rest on a firm surface.<br>- Use painkillers like Diclofenac.<br><br>⚠️ You should visit a neurologist or orthopedist for full treatment.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        joint_strain: {
            message: "This seems to be a **Muscle Strain** due to fatigue or lifting heavy objects.<br><br>💊 **Initial Treatment:**<br>- Rest and use hot or cold packs.<br>- Take Paracetamol or use pain relief cream.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        joint_arthritis: {
            message: "This is a sign of **Arthritis**.<br><br>💊 **Initial Treatment:**<br>- Weight reduction and light exercise.<br>- Use pills like Meloxicam or Ibuprofen to reduce inflammation.<br><br>⚠️ If the pain persists, see a rheumatologist.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        eye_1: {
            message: "What happened to your eyes?",
            options: [
                { text: "Red, watery, and itchy", next: "eye_conjunctivitis" },
                { text: "Feels dry and burning", next: "eye_dry" },
                { text: "Severe pain and blurred vision", next: "eye_glaucoma" }
            ]
        },
        eye_conjunctivitis: {
            message: "This is very likely **Conjunctivitis (Pink Eye)**.<br><br>💊 **Initial Treatment:**<br>- Do not touch your eyes to prevent spreading.<br>- If bacterial, you need antibiotic eye drops (like Chloramphenicol).",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        eye_dry: {
            message: "This is a sign of **Dry Eye Syndrome**, caused by too much screen time or weather.<br><br>💊 **Initial Treatment:**<br>- Use Artificial Tears.<br>- Reduce mobile screen time.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        eye_glaucoma: {
            message: "⚠️ **Warning!** Severe pain and blurred vision might be a sign of **High Eye Pressure (Glaucoma)**.<br><br>Visit an eye doctor immediately to prevent vision loss!",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        urine_1: {
            message: "What is your urination problem?",
            options: [
                { text: "Burning sensation and frequent urination", next: "urine_uti" },
                { text: "Severe back pain and changed urine color", next: "urine_stone" },
                { text: "Urine is retained, I can't urinate", next: "urine_prostate" }
            ]
        },
        urine_uti: {
            message: "This is a sign of a **Urinary Tract Infection (UTI)**.<br><br>💊 **Initial Treatment:**<br>- Drink plenty of water and fluids.<br>- You need a urine test (GUE) to get the right medication prescribed (like Ciprofloxacin).",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        urine_stone: {
            message: "This is likely a sign of a **Kidney Stone**.<br><br>💊 **Initial Treatment:**<br>- Drink plenty of water.<br>- Use painkillers and urinary tract dilators.<br>⚠️ Get an ultrasound to confirm.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        urine_prostate: {
            message: "⚠️ **Warning!** Urinary Retention is an emergency, often caused by an enlarged prostate or stones.<br><br>You must visit the emergency room immediately for a Foley Catheter.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        fatigue_1: {
            message: "What do you think is causing your fatigue?",
            options: [
                { text: "Dizziness and pale face", next: "fatigue_anemia" },
                { text: "Gaining weight and always feeling cold", next: "fatigue_thyroid" },
                { text: "Poor sleep and no desire to work", next: "fatigue_depression" }
            ]
        },
        fatigue_anemia: {
            message: "These are symptoms of **Anemia**, often caused by iron or Vitamin B12 deficiency.<br><br>💊 **Initial Treatment:**<br>- Eat red meat and spinach.<br>⚠️ You need a blood test (CBC) to determine the type of anemia.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        fatigue_thyroid: {
            message: "This might be a sign of **Hypothyroidism**.<br><br>⚠️ You need to visit a doctor and get thyroid hormone tests (T3, T4, TSH).",
            options: [{ text: "Back to start 🔄", next: "start" }]
        },
        fatigue_depression: {
            message: "These are symptoms of **Depression or Stress**.<br><br>💡 **Initial Treatment:**<br>- Try to talk to someone close to you.<br>- Exercise and walk in fresh air.<br>⚠️ If your feelings are very intense, do not hesitate to visit a psychiatrist.",
            options: [{ text: "Back to start 🔄", next: "start" }]
        }
    },
    ar: {
        start: {
            message: "مرحباً! أنا الطبيب الذكي للتطبيق 🩺. يرجى إخباري بمشكلتك لأتمكن من مساعدتك؟",
            options: [
                { text: "صداع 🤕", next: "headache_1" },
                { text: "ألم في المعدة 🤢", next: "stomach_1" },
                { text: "حمى وسعال 🤒", next: "fever_1" },
                { text: "مشكلة جلدية 🧴", next: "skin_1" },
                { text: "ألم في الصدر ❤️‍🔥", next: "chest_1" },
                { text: "ألم في الظهر والمفاصل 🦴", next: "joint_1" },
                { text: "مشكلة في العين 👁️", next: "eye_1" },
                { text: "مشكلة في التبول 🚽", next: "urine_1" },
                { text: "ضعف وإرهاق 🥱", next: "fatigue_1" }
            ]
        },
        headache_1: {
            message: "كيف هو الصداع؟ أي جزء من رأسك يؤلمك؟",
            options: [
                { text: "رأسي كله مشدود كالحزام", next: "headache_tension" },
                { text: "جانب واحد من رأسي وأشعر بالغثيان", next: "headache_migraine" },
                { text: "حول عيني وأنفي (الجيوب الأنفية)", next: "headache_sinus" }
            ]
        },
        headache_tension: {
            message: "هذه أعراض **صداع التوتر**، وغالباً ما ينتج عن التوتر أو الإرهاق أو قلة النوم.<br><br>💊 **العلاج الأولي:**<br>- الراحة والحصول على نوم جيد.<br>- استخدم مسكنات الألم مثل الباراسيتامول أو الإيبوبروفين.<br><br>⚠️ إذا كان الألم شديداً أو كانت الرؤية ضبابية، يرجى زيارة الطبيب.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        headache_migraine: {
            message: "هذه أعراض **الصداع النصفي (الشقيقة)**. يزداد الألم غالباً مع الضوء والضوضاء.<br><br>💊 **العلاج الأولي:**<br>- الجلوس في غرفة مظلمة وهادئة.<br>- استخدام أدوية الصداع النصفي (بعد الاستشارة).<br><br>⚠️ الصداع النصفي يتطلب طبيباً مختصاً للسيطرة عليه.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        headache_sinus: {
            message: "من المحتمل جداً أن يكون **التهاب الجيوب الأنفية**.<br><br>💊 **العلاج الأولي:**<br>- استنشاق بخار الماء الساخن.<br>- استخدام مضادات الهيستامين أو قطرات الأنف.<br><br>⚠️ قم بزيارة طبيب أنف وأذن وحنجرة إذا استمر لأكثر من ٧ أيام.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        stomach_1: {
            message: "أين يقع الألم في معدتك؟",
            options: [
                { text: "الجانب الأيمن السفلي", next: "stomach_appendix" },
                { text: "الوسط العلوي (المعدة)", next: "stomach_gastritis" },
                { text: "تشنجات في البطن مع إسهال", next: "stomach_poisoning" }
            ]
        },
        stomach_appendix: {
            message: "⚠️ **تحذير!** قد يكون هذا علامة على **التهاب الزائدة الدودية**.<br><br>لا تتناول مسكنات الألم أبداً لأنها تخفي الأعراض! قم بزيارة مستشفى الطوارئ في أقرب وقت لإجراء فحص بالسونار والدم.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        stomach_gastritis: {
            message: "هذه أعراض **التهاب المعدة / الحموضة**.<br><br>💊 **العلاج الأولي:**<br>- تجنب الشاي الثقيل والقهوة والأطعمة الحارة.<br>- استخدم مضادات الحموضة أو أوميبرازول لتقليل الحموضة.<br><br>⚠️ إذا ترافق مع قيء دموي أو براز أسود، اذهب إلى الطبيب فوراً.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        stomach_poisoning: {
            message: "يبدو أنه **تسمم غذائي أو نزلة معوية**.<br><br>💊 **العلاج الأولي:**<br>- شرب الكثير من السوائل لتعويض الماء المفقود.<br>- استخدام محلول الجفاف (ORS).<br><br>⚠️ إذا كان الإسهال يحتوي على دم أو كانت لديك حمى عالية، فاستشر الطبيب.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        fever_1: {
            message: "هل لديك أي من هذه الأعراض إلى جانب الحمى والسعال؟",
            options: [
                { text: "احتقان في الحلق وانسداد بالأنف", next: "fever_cold" },
                { text: "ضيق في التنفس وألم في الصدر", next: "fever_pneumonia" },
                { text: "ألم في المفاصل والجسم", next: "fever_flu" }
            ]
        },
        fever_cold: {
            message: "هذه علامة على **نزلة برد (الزكام)**.<br><br>💊 **العلاج الأولي:**<br>- الراحة وشرب الحساء الساخن والسوائل.<br>- تناول الباراسيتامول للحمى والألم.<br><br>⚠️ لا تتناول المضادات الحيوية لأنها لا تؤثر على الفيروسات!",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        fever_pneumonia: {
            message: "⚠️ **تحذير!** ضيق التنفس مع الحمى قد يكون علامة على **التهاب رئوي**.<br><br>يرجى عدم علاجه في المنزل. قم بزيارة أخصائي تنفسية أو مستشفى لإجراء أشعة سينية للصدر.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        fever_flu: {
            message: "هذه أعراض **الإنفلونزا**.<br><br>💊 **العلاج الأولي:**<br>- راحة تامة في السرير.<br>- تناول فيتامين سي وشرب الكثير من الماء.<br>- استخدام أدوية البرد والإنفلونزا.<br><br>⚠️ إذا شعرت بضيق في التنفس، قم بزيارة الطبيب.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        skin_1: {
            message: "كيف تبدو مشكلة بشرتك؟",
            options: [
                { text: "بثور (حبوب) في وجهي", next: "skin_acne" },
                { text: "حكة واحمرار في الجلد", next: "skin_allergy" },
                { text: "جرح أحمر يفرز سوائل", next: "skin_infection" }
            ]
        },
        skin_acne: {
            message: "مشكلة **حب الشباب**.<br><br>💊 **العلاج الأولي:**<br>- غسل الوجه بانتظام بصابون مناسب.<br>- لا تلمس أو تفرقع البثور لتجنب الندبات.<br><br>⚠️ بالنسبة للأدوية القوية مثل الروأكيوتان، طبيب الجلدية فقط هو من يمكنه وصفه.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        skin_allergy: {
            message: "هذه علامة على **الحساسية (الشرى)**.<br><br>💊 **العلاج الأولي:**<br>- استخدام حبوب مضادة للهيستامين (مثل اللوراتادين).<br>- تجنب الطعام أو الدواء الذي سبب الحساسية.<br><br>⚠️ إذا سببت الحساسية تورماً في الفم/الوجه أو ضيقاً في التنفس، اذهب إلى المستشفى فوراً!",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        skin_infection: {
            message: "⚠️ يبدو أنه **التهاب جلدي بكتيري (التهاب النسيج الخلوي)**.<br><br>يجب عليك زيارة طبيب جلدية أو طبيب عام ليصف لك الكريم أو الحبوب المضادة للبكتيريا المناسبة.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        chest_1: {
            message: "كيف تصف ألم الصدر؟",
            options: [
                { text: "ثقيل كالحجر ويمتد ليدي اليسرى", next: "chest_heart" },
                { text: "حرقة وحموضة", next: "chest_gerd" },
                { text: "يؤلمني عند السعال أو الحركة", next: "chest_muscle" }
            ]
        },
        chest_heart: {
            message: "🚨 **تحذير عاجل الخطورة!** هذه أعراض **نوبة قلبية (احتشاء عضلة القلب)**!<br><br>يرجى الاتصال بالطوارئ (122) أو زيارة المستشفى فوراً. لا تأكل أي شيء؛ يمكنك تناول حبة أسبرين إذا توفرت.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        chest_gerd: {
            message: "يبدو أنه **ارتجاع مريئي (حرقة المعدة)**.<br><br>💊 **العلاج الأولي:**<br>- لا تستلقِ فوراً بعد الأكل.<br>- تناول مضادات الحموضة مثل جافيسكون أو ريني.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        chest_muscle: {
            message: "هذه علامة على **شد عضلي** في الصدر.<br><br>💊 **العلاج الأولي:**<br>- الراحة وتجنب الحركات الشاقة.<br>- استخدام كريم لتخفيف الألم أو حبوب مرخية للعضلات.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        joint_1: {
            message: "أين يقع الألم بالضبط؟",
            options: [
                { text: "في ظهري ويمتد إلى ساقي (مثل الصعقة)", next: "joint_sciatica" },
                { text: "فقط عضلاتي بسبب الإرهاق", next: "joint_strain" },
                { text: "مفصل الركبة منتفخ ومؤلم", next: "joint_arthritis" }
            ]
        },
        joint_sciatica: {
            message: "هذه أعراض **عرق النسا**، وغالباً ما ينتج عن انزلاق غضروفي.<br><br>💊 **العلاج الأولي:**<br>- الراحة على سطح صلب.<br>- استخدم مسكنات مثل الديكلوفيناك.<br><br>⚠️ يجب عليك زيارة طبيب أعصاب أو عظام للعلاج الكامل.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        joint_strain: {
            message: "يبدو أن هذا **شد عضلي** بسبب التعب أو رفع أشياء ثقيلة.<br><br>💊 **العلاج الأولي:**<br>- الراحة واستخدام الكمادات الساخنة أو الباردة.<br>- تناول الباراسيتامول أو استخدام كريم مسكن.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        joint_arthritis: {
            message: "هذه علامة على **التهاب المفاصل (سوفان)**.<br><br>💊 **العلاج الأولي:**<br>- تقليل الوزن وممارسة تمارين خفيفة.<br>- استخدم مسكنات مثل الميلوكسيكام أو الإيبوبروفين لتقليل الالتهاب.<br><br>⚠️ إذا استمر الألم، قم بزيارة طبيب الروماتيزم.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        eye_1: {
            message: "ماذا حدث لعينيك؟",
            options: [
                { text: "حمراء، تدمع باستمرار وبها حكة", next: "eye_conjunctivitis" },
                { text: "أشعر بجفاف وحرقة", next: "eye_dry" },
                { text: "ألم شديد ورؤية ضبابية", next: "eye_glaucoma" }
            ]
        },
        eye_conjunctivitis: {
            message: "هذا على الأرجح **التهاب الملتحمة (العين الوردية)**.<br><br>💊 **العلاج الأولي:**<br>- لا تلمس عينيك لمنع انتقال العدوى.<br>- إذا كان بكتيرياً، ستحتاج إلى قطرات مضادة للبكتيريا (مثل الكلورامفينيكول).",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        eye_dry: {
            message: "هذه علامة على **متلازمة جفاف العين**، بسبب كثرة استخدام الشاشات أو الطقس.<br><br>💊 **العلاج الأولي:**<br>- استخدم الدموع الاصطناعية.<br>- قلل من وقت استخدام شاشة الهاتف.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        eye_glaucoma: {
            message: "⚠️ **تحذير!** الألم الشديد وضعف الرؤية قد يكون علامة على **ارتفاع ضغط العين (الجلوكوما)**.<br><br>قم بزيارة طبيب عيون فوراً لمنع فقدان البصر!",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        urine_1: {
            message: "ما هي مشكلة التبول لديك؟",
            options: [
                { text: "حرقة وكثرة التبول", next: "urine_uti" },
                { text: "ألم شديد في الظهر وتغير لون البول", next: "urine_stone" },
                { text: "احتباس البول، لا أستطيع التبول", next: "urine_prostate" }
            ]
        },
        urine_uti: {
            message: "هذه علامة على **التهاب المسالك البولية**.<br><br>💊 **العلاج الأولي:**<br>- شرب الكثير من الماء والسوائل.<br>- ستحتاج إلى فحص بول (GUE) لوصف الدواء المناسب (مثل السيبروفلوكساسين).",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        urine_stone: {
            message: "هذه غالباً علامة على وجود **حصوة في الكلى**.<br><br>💊 **العلاج الأولي:**<br>- شرب الكثير من الماء.<br>- استخدام مسكنات الألم وموسعات الحالب.<br>⚠️ قم بإجراء فحص بالسونار للتأكد.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        urine_prostate: {
            message: "⚠️ **تحذير!** احتباس البول حالة طارئة، وغالباً ما يكون بسبب تضخم البروستاتا أو الحصوات.<br><br>يجب عليك زيارة غرفة الطوارئ فوراً لتركيب قسطرة بولية.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        fatigue_1: {
            message: "ما الذي تعتقد أنه يسبب لك هذا التعب؟",
            options: [
                { text: "دوخة واصفرار في الوجه", next: "fatigue_anemia" },
                { text: "زيادة في الوزن وأشعر بالبرد دائماً", next: "fatigue_thyroid" },
                { text: "قلة النوم ولا رغبة لي في العمل", next: "fatigue_depression" }
            ]
        },
        fatigue_anemia: {
            message: "هذه أعراض **فقر الدم (الأنيميا)**، وغالباً ما يكون بسبب نقص الحديد أو فيتامين ب12.<br><br>💊 **العلاج الأولي:**<br>- تناول اللحوم الحمراء والسبانخ.<br>⚠️ تحتاج إلى فحص دم (CBC) لتحديد نوع فقر الدم.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        fatigue_thyroid: {
            message: "قد يكون هذا علامة على **خمول الغدة الدرقية**.<br><br>⚠️ تحتاج إلى زيارة طبيب وإجراء تحاليل هرمونات الغدة (T3، T4، TSH).",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        },
        fatigue_depression: {
            message: "هذه أعراض **الاكتئاب أو الضغط النفسي**.<br><br>💡 **العلاج الأولي:**<br>- حاول التحدث مع شخص مقرب لك.<br>- ممارسة الرياضة والمشي في الهواء الطلق.<br>⚠️ إذا كانت مشاعرك قوية جداً، لا تتردد في زيارة طبيب نفسي.",
            options: [{ text: "العودة للبداية 🔄", next: "start" }]
        }
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
    const nodeSet = botNodes[currentLang] || botNodes['ku'];
    const node = nodeSet[nodeId];
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
