const drugsData = [
    { 
        id: 1, name: "Paracetamol", type: "pill", 
        ku: { name: "پاراسیتامۆڵ", cat: "ئازارشکێن", desc: "یەکێکە لە باوترین و سەلامەتترین دەرمانەکان بۆ کەمکردنەوەی ئازار و دابەزاندنی پلەی گەرمیی لەش. بەکارهێنانە سەرەکییەکان: کەمکردنەوەی ئازار (سەر، ددان، ماسولکەکان، سووڕی مانگانە، پشت) وە دابەزاندنی تا لە کاتی پەتا و ئەنفلۆنزا.<br><br>پێگەیشتووان: 500 بۆ 1000 ملگم بۆ هەر ژەمێک (نابێت لە 4000 ملگم زیاتر بێت لە 24 کاتژمێردا). منداڵان: بەپێی کێش و تەمەن. نێوانی ژەمەکان بە لایەنی کەمەوە 4 بۆ 6 کاتژمێر بێت.<br><br>ژەهراویبوونی جگەر مەترسیدارترین لایەنیەتی بەهۆی زیادەڕۆییەوە. پێویستە ئاگاداری دەرمانە تێکەڵەکانی تری پەتا بیت کە پاراستامۆڵیان تێدایە. بۆ نەخۆشییەکانی جگەر و گورچیلە ڕاوێژ بکە.<br><br>پەیوەندی بە پزیشکەوە بکە ئەگەر: ئازار 3 بۆ 5 ڕۆژ، یان تا زیاتر لە 3 ڕۆژ بەردەوام بوو، یان نیشانەی هەستیاری دەرکەوت. لە کاتی زیادخواردنی بە هەڵە دەستبەجێ بڕۆ فریاکەوتن.<br><br>تێبینی: ئەم زانیارییانە بۆ مەبەستی ڕۆشنبیرییە و جێگەی ڕاوێژی پزیشکی ناگرێتەوە. هەمیشە پێش بەکارهێنان سەیری ڕێنماییەکانی ناو پاکەتەکە بکە.", dose: "", warn: "", side: "", benefit: "" }, 
        en: { name: "Paracetamol", cat: "Analgesic", desc: "Used for pain relief and fever reduction.", dose: "500mg-1000mg every 4-6 hours as needed.", warn: "Do not exceed 4000mg/day; overuse causes liver damage.", side: "Nausea, stomach pain, and rarely allergic skin reactions.", benefit: "Reduces fever and provides relief from headaches, muscle aches, and mild pain." }, 
        ar: { name: "باراسيتامول", cat: "مسكن", desc: "لعلاج الألم وخفض الحرارة.", dose: "500-1000مجم كل 4-6 ساعات عند اللزوم.", warn: "لا تتجاوز 4000مجم يومياً لحماية الكبد من التلف.", side: "غثيان، ألم بالمعدة، ونادراً طفح جلدي.", benefit: "فعال في خفض الحرارة وتخفيف آلام الصداع والأسنان والعضلات." } 
    },
    { 
        id: 2, name: "Amoxicillin", type: "pill", 
        ku: { name: "ئەمۆکسیلین", cat: "دژەبەکتریا", desc: "بۆ چارەسەری هەوکردنی بەکتریایی وەک قوڕگ و سییەکان.", dose: "٥٠٠ملگم بۆ ٨٧٥ملگم ٢ بۆ ٣ جار لە ڕۆژێکدا.", warn: "دەبێت کۆرسی دەرمانەکە بە تەواوی تەواو بکرێت تەنانەت ئەگەر هەستت بە باشبوونیش کرد.", side: "سکچوون، دڵتێکچوون، و هەستیاری پێست (پەڵە).", benefit: "لەناوبردنی بەکتریای هۆکاری نەخۆشییەکانی سییەکان، گوێ، قوڕگ و میزەڵدان." }, 
        en: { name: "Amoxicillin", cat: "Antibiotic", desc: "Treats bacterial infections like throat and lungs.", dose: "500mg-875mg 2-3 times daily.", warn: "Must complete the full prescription course even if feeling better.", side: "Diarrhea, nausea, and skin rash (allergic reaction).", benefit: "Cures bacterial infections of the respiratory tract, ear, and urinary tract." }, 
        ar: { name: "أموكسيسيلين", cat: "مضاد حيوي", desc: "لعلاج الالتهابات البكتيرية في الحلق والرئتين.", dose: "500-875مجم 2-3 مرات يومياً.", warn: "يجب إكمال الكورس العلاجي بالكامل حتى بعد زوال الأعراض.", side: "إسهال، غثيان، وطفح جلدي عند التحسس.", benefit: "يقضي على البكتيريا المسببة لالتهابات الأذن والجهاز التنفسي والمسالك البولية." } 
    },
    { 
        id: 3, name: "Ibuprofen", type: "pill", 
        ku: { name: "ئایبۆپڕۆفین", cat: "ئازارشکێن", desc: "بۆ کەمکردنەوەی هەوکردن و ئازاری جومگە و ددان.", dose: "٤٠٠ملگم هەموو ٦ بۆ ٨ کاتژمێر جارێک، پێویستە دوای نان بخورێت.", warn: "بۆ ئەو کەسانەی برینی گەدەیان هەیە یان کێشەی دڵ و گورچیلەیان هەیە گونجاو نییە.", side: "ئازاری گەدە، دڵەکزێ، و سکچوون.", benefit: "ئازارشکێنێکی بەهێزە و هەوکردن و ئاوسانی جومگەکان و ماسولکەکان کەمدەکاتەوە." }, 
        en: { name: "Ibuprofen", cat: "NSAID", desc: "Reduces inflammation, joint, and tooth pain.", dose: "400mg every 6-8 hours, take after meals.", warn: "Not suitable for patients with stomach ulcers, severe heart or kidney issues.", side: "Stomach pain, heartburn, and diarrhea.", benefit: "Strong painkiller that significantly reduces tissue inflammation, swelling, and fever." }, 
        ar: { name: "إيبوبروفين", cat: "مضاد التهاب", desc: "يسكن الألم ويقلل الالتهاب وتورم المفاصل.", dose: "400مجم كل 6-8 ساعات، يجب تناوله بعد الأكل.", warn: "يمنع لمرضى قرحة المعدة والقصور القلبي أو الكلوي.", side: "ألم معدة، حرقة، وإسهال.", benefit: "مسكن قوي يخفف الالتهابات والتورم في المفاصل والعضلات." } 
    },
    { 
        id: 4, name: "Metformin", type: "pill", 
        ku: { name: "مێتفۆرمین", cat: "شەکرە", desc: "بۆ کۆنترۆڵکردنی ڕێژەی شەکر لە جۆری دووەمی شەکرە.", dose: "٥٠٠ملگم بۆ ٨٥٠ملگم ١ بۆ ٣ جار لە ڕۆژێکدا.", warn: "دەبێت لەگەڵ ژەمە خواردنەکاندا بخورێت بۆ ڕێگریکردن لە کێشەی گەدە.", side: "غازات، سکچوون، دڵتێکچوون و کەمبوونەوەی ئارەزووی خواردن.", benefit: "یارمەتی دابەزاندنی شەکری خوێن دەدات و بەرگری ئەنسۆلین کەمدەکاتەوە بێ ئەوەی کێش زیاد بکات." }, 
        en: { name: "Metformin", cat: "Antidiabetic", desc: "Controls blood sugar in Type 2 Diabetes.", dose: "500mg-850mg 1-3 times daily.", warn: "Must be taken with meals to minimize gastrointestinal issues.", side: "Gas, diarrhea, nausea, and loss of appetite.", benefit: "Effectively lowers blood sugar levels and improves insulin sensitivity without causing weight gain." }, 
        ar: { name: "ميتفورمين", cat: "للسكري", desc: "منظم للسكر في الدم للنوع الثاني.", dose: "500-850مجم 1-3 مرات يومياً.", warn: "يؤخذ مع الأكل لتقليل الأعراض الهضمية المزعجة.", side: "غازات، إسهال، غثيان، وفقدان الشهية.", benefit: "ينظم مستوى السكر ويحسن استجابة الجسم للأنسولين ولا يسبب زيادة الوزن." } 
    },
    { 
        id: 5, name: "Atorvastatin", type: "pill", 
        ku: { name: "ئاتۆرڤاستاتین", cat: "چەوری", desc: "بۆ دابەزاندنی چەوری خوێن (کۆلیستڕۆڵ).", dose: "١٠ملگم بۆ ٤٠ملگم یەک جار لە ڕۆژێکدا، باشترە شەوانە بخورێت.", warn: "ئەگەر ئازار و لاوازیی ماسولکەت هەبوو بەپەلە پزیشک ئاگادار بکەرەوە.", side: "سەرئێشە، ئازاری جومگە و ماسولکەکان، کێشەی هەرەس.", benefit: "مەترسی جەڵتەی دڵ و مێشک کەمدەکاتەوە بە ڕێگریکردن لە دروستبوونی چەوری زیانبەخش لە خوێنبەرەکان." }, 
        en: { name: "Atorvastatin", cat: "Statin", desc: "Lowers cholesterol levels in the blood.", dose: "10mg-40mg once daily, preferably at night.", warn: "Report any unexplained muscle pain or weakness to your doctor immediately.", side: "Headache, joint/muscle pain, and digestive issues.", benefit: "Significantly reduces the risk of heart attacks and strokes by lowering bad cholesterol (LDL)." }, 
        ar: { name: "أتورفاستاتين", cat: "للكوليسترول", desc: "يقلل دهون الدم الضارة (الكوليسترول).", dose: "10-40مجم مرة يومياً، يفضل ليلاً.", warn: "أبلغ الطبيب فوراً عند الشعور بألم عضلي غير مبرر.", side: "صداع، ألم في المفاصل والعضلات، واضطراب هضمي.", benefit: "يحمي من الجلطات القلبية والدماغية عبر تقليل الكوليسترول الضار في الشرايين." } 
    },
    { 
        id: 6, name: "Amlodipine", type: "pill", 
        ku: { name: "ئەملۆدیپین", cat: "پەستان", desc: "بۆ دابەزاندنی پەستانی خوێن.", dose: "٥ملگم بۆ ١٠ملگم ڕۆژانە یەک جار.", warn: "لەوانەیە ببێتە هۆی ئاوسانی قاچەکان، ئەگەر زۆر بوو سەردانی پزیشک بکە.", side: "سەرگێژخواردن، ماندوێتی، سوربوونەوەی دەموچاو، و ئاوسانی قاچ.", benefit: "خوێنبەرەکان خاو دەکاتەوە و وا دەکات خوێن باشتر سووڕ بخوات، ئەمەش پەستانی خوێن دادەبەزێنێت." }, 
        en: { name: "Amlodipine", cat: "Calcium Blocker", desc: "Used to treat high blood pressure.", dose: "5mg-10mg once daily.", warn: "May cause significant ankle or leg swelling; consult doctor if bothersome.", side: "Dizziness, fatigue, facial flushing, and ankle edema.", benefit: "Relaxes blood vessels, improving blood flow and lowering blood pressure effectively." }, 
        ar: { name: "أملوديبين", cat: "للضغط", desc: "يخفض ضغط الدم المرتفع.", dose: "5-10مجم مرة يومياً.", warn: "قد يسبب تورماً ملحوظاً في القدمين، استشر الطبيب إذا استمر.", side: "دوخة، تعب، احمرار الوجه، وتورم الكاحل.", benefit: "يوسع الأوعية الدموية ويسهل تدفق الدم مما يخفض الضغط ويحمي القلب." } 
    },
    { 
        id: 7, name: "Omeprazole", type: "pill", 
        ku: { name: "ئۆمیپرازۆڵ", cat: "گەدە", desc: "بۆ چارەسەری ترشەڵۆکی گەدە و برینی گەدە.", dose: "٢٠ملگم بۆ ٤٠ملگم یەک جار لە ڕۆژێکدا، پێش نانی بەیانی.", warn: "بەکارهێنانی درێژخایەن لەوانەیە ببێتە هۆی کەمبوونەوەی ڤیتامین B12 و مەگنیسیۆم.", side: "سەرئێشە، سکچوون یان قەبزی، و غازات.", benefit: "بە خێرایی دڵەکزێ و ترشەڵۆک کەمدەکاتەوە و یارمەتی چاکبوونەوەی برینی گەدە دەدات." }, 
        en: { name: "Omeprazole", cat: "PPI", desc: "Treats acid reflux and stomach ulcers.", dose: "20mg-40mg once daily, before breakfast.", warn: "Prolonged use without medical advice may cause Vitamin B12 and Magnesium deficiency.", side: "Headache, diarrhea or constipation, and flatulence.", benefit: "Provides fast relief from heartburn and helps heal stomach and esophageal ulcers." }, 
        ar: { name: "أوميبرازول", cat: "للمعدة", desc: "يعالج حموضة وقرحة المعدة.", dose: "20-40مجم مرة يومياً، قبل الإفطار.", warn: "الاستخدام لفترات طويلة قد يسبب نقص فيتامين B12 والمغنيسيوم.", side: "صداع، إسهال أو إمساك، وغازات.", benefit: "يقلل إفراز الحمض المعدي بقوة ويساعد على التئام قرحة المعدة والمريء." } 
    },
    { 
        id: 8, name: "Ciprofloxacin", type: "pill", 
        ku: { name: "سیپڕۆفلۆکساسین", cat: "دژەبەکتریا", desc: "بۆ هەوکردنی میزەڵدان و هەوکردنی توند.", dose: "٥٠٠ملگم بۆ ٧٥٠ملگم ٢ جار لە ڕۆژێکدا.", warn: "نابێت لەگەڵ شیرەمەنییەکان بخورێت چونکە هەڵمژینی کەمدەکاتەوە. مەترسی پچڕانی ژێی ماسولکەی هەیە.", side: "سەرگێژخواردن، هەستیاری بە تیشکی خۆر، دڵتێکچوون.", benefit: "بەهێزە دژی زۆرێک لە بەکتریاکان بەتایبەت ئەو بەکتریایانەی دەبنە هۆی هەوکردنی میزەڵدان." }, 
        en: { name: "Ciprofloxacin", cat: "Antibiotic", desc: "Used for UTI and severe bacterial infections.", dose: "500mg-750mg twice daily.", warn: "Avoid taking with dairy products. Risk of tendon rupture, especially in older adults.", side: "Dizziness, sun sensitivity, and nausea.", benefit: "Highly effective against resistant bacteria, especially in urinary and intestinal tracts." }, 
        ar: { name: "سيبروفلوكساسين", cat: "مضاد حيوي", desc: "لعلاج التهاب المسالك والالتهابات القوية.", dose: "500-750مجم مرتين يومياً.", warn: "لا يؤخذ مع منتجات الألبان. يحمل خطر تمزق الأوتار خاصة لكبار السن.", side: "دوخة، حساسية للشمس، وغثيان.", benefit: "قوي جداً في القضاء على البكتيريا المستعصية في المسالك البولية والأمعاء." } 
    },
    { 
        id: 9, name: "Metronidazole (Flagyl)", type: "pill", 
        ku: { name: "فلاژیل", cat: "دژە بەکتریا/مشەخۆر", desc: "بۆ چارەسەری هەوکردنی ڕێخۆڵە و سکچوون.", dose: "٤٠٠ملگم بۆ ٥٠٠ملگم ٣ جار لە ڕۆژێکدا.", warn: "نابێت بە هیچ شێوەیەک کحول بەکاربێت لەگەڵی تا ٤٨ کاتژمێر دوای تەواوبوونی دەرمانەکە.", side: "تامی کانزایی لە دەم، دڵتێکچوون، و تاریکبوونی ڕەنگی میز.", benefit: "زۆر کاریگەرە بۆ وەستاندنی سکچوون کە بەهۆی مشەخۆر و بەکتریای ناو ڕێخۆڵەوە دروست دەبێت." }, 
        en: { name: "Metronidazole", cat: "Antibiotic", desc: "Treats intestinal infections and diarrhea.", dose: "400mg-500mg three times daily.", warn: "Avoid alcohol completely during treatment and 48 hours after to prevent severe vomiting.", side: "Metallic taste, nausea, and dark-colored urine.", benefit: "Highly effective against anaerobic bacteria and parasites causing severe diarrhea." }, 
        ar: { name: "فلاجيل", cat: "مضاد طفيليات", desc: "لعلاج التهاب الأمعاء والإسهال.", dose: "400-500مجم 3 مرات يومياً.", warn: "يمنع تناول الكحول تماماً أثناء العلاج لتجنب القيء الشديد.", side: "طعم معدني بالفم، غثيان، وتغير لون البول للداكن.", benefit: "ممتاز في علاج الإسهال المزمن والالتهابات المعوية الناتجة عن الطفيليات." } 
    },
    { 
        id: 10, name: "Salbutamol (Ventolin)", type: "pill", 
        ku: { name: "ڤێنتۆلین", cat: "تەنگەنەفەسی", desc: "بۆ کردنەوەی بۆری هەناسە و چارەسەری ڕەبۆ.", dose: "١ بۆ ٢ پرژە لە کاتی تەنگەنەفەسیدا یان پێش وەرزش.", warn: "بەکارهێنانی زۆر لێدانی دڵ خێرا دەکات و دەبێتە هۆی لەرزینی دەستەکان.", side: "لەرزینی دەست، خێرا لێدانی دڵ، و سەرئێشە.", benefit: "بە خێرایی ماسولکەکانی بۆری هەناسە خاو دەکاتەوە و یارمەتی کەسی تووشبوو دەدات بە ئاسانی هەناسە بدات." }, 
        en: { name: "Salbutamol", cat: "Bronchodilator", desc: "Opens airways and treats asthma.", dose: "1-2 puffs as needed or before exercise.", warn: "Overuse can cause palpitations and severe hand tremors.", side: "Hand tremors, rapid heart rate, and headache.", benefit: "Acts quickly to relieve shortness of breath and wheezing in asthma patients." }, 
        ar: { name: "فنتولين", cat: "موسع قصبات", desc: "يوسع القصبات في نوبات الربو.", dose: "بخخة إلى بخختين عند اللزوم أو قبل المجهود.", warn: "الإفراط يسبب تسارع القلب ورجفة شديدة في اليدين.", side: "رجفة باليدين، خفقان، وصداع.", benefit: "يوسع المسالك الهوائية بسرعة لينقذ المريض من نوبات ضيق التنفس." } 
    },
    { 
        id: 11, name: "Prednisolone", type: "pill", 
        ku: { name: "پریدنیسۆلۆن", cat: "ستیرۆید", desc: "بۆ چارەسەری هەوکردن و هەستیاری توند.", dose: "بەپێی فەرمانی پزیشک، زۆرجار ٥ملگم بۆ ٦٠ملگم بەیانیان.", warn: "نابێت بە کتوپڕ وازی لێ بهێنرێت، دەبێت وردە وردە ژەمەکەی کەم بکرێتەوە.", side: "زیادبوونی ئارەزووی خواردن و کێش، بەرزبوونەوەی شەکر و پەستانی خوێن.", benefit: "دەرمانێکی زۆر بەهێزە بۆ کوژاندنەوەی هەوکردنە توندەکان و چارەسەری نەخۆشییە بەرگرییەکان." }, 
        en: { name: "Prednisolone", cat: "Corticosteroid", desc: "Treats severe inflammation and allergies.", dose: "As directed by MD, usually 5mg-60mg in the morning.", warn: "Do not stop suddenly; must be tapered down slowly to prevent withdrawal.", side: "Weight gain, increased appetite, elevated blood sugar and pressure.", benefit: "A potent anti-inflammatory agent that saves lives in severe allergic or autoimmune crises." }, 
        ar: { name: "بريدنيزولون", cat: "ستيرويد", desc: "لعلاج الالتهاب والحساسية الشديدة.", dose: "حسب تعليمات الطبيب، غالباً 5-60مجم صباحاً.", warn: "لا يوقف فجأة بل يجب تقليل الجرعة تدريجياً.", side: "زيادة الوزن والشهية، ارتفاع السكر وضغط الدم.", benefit: "دواء سحري وقوي للسيطرة على الالتهابات الشديدة والأمراض المناعية." } 
    },
    { 
        id: 12, name: "Aspirin", type: "pill", 
        ku: { name: "ئەسپرین", cat: "خوێن", desc: "بۆ ڕێگری لە جەڵتە و ڕوونکردنەوەی خوێن.", dose: "٧٥ملگم بۆ ١٠٠ملگم ڕۆژانە یەک جار پاش نان.", warn: "بۆ منداڵی خوار ١٦ ساڵ بەکارنایەت (مەترسی کۆنیشانەی ڕای Reye's syndrome هەیە).", side: "خوێنبەربوونی گەدە، دڵەکزێ، شینبوونەوەی پێست.", benefit: "ڕێگری دەکات لە کۆبوونەوەی پەڕەکانی خوێن و مەترسی جەڵتەی دڵ و مێشک کەمدەکاتەوە." }, 
        en: { name: "Aspirin", cat: "Antiplatelet", desc: "Prevents blood clots and heart attacks.", dose: "75mg-100mg once daily after meals.", warn: "Strictly contraindicated in children under 16 due to Reye's syndrome risk.", side: "Gastric bleeding, heartburn, and easy bruising.", benefit: "Prevents platelets from clumping together, drastically reducing heart attack and stroke risks." }, 
        ar: { name: "أسبرين", cat: "سيولة", desc: "يمنع الجلطات ويحمي القلب.", dose: "75-100مجم يومياً بعد الأكل.", warn: "يمنع للأطفال دون 16 عاماً لتجنب متلازمة راي القاتلة.", side: "نزيف بالمعدة، حرقة، وسهولة التكدم.", benefit: "يمنع تجمع الصفائح الدموية مما يحمي من النوبات القلبية والسكتات." } 
    },
    { 
        id: 13, name: "Losartan", type: "pill", 
        ku: { name: "لۆزارتان", cat: "پەستان", desc: "بۆ دابەزاندنی پەستانی خوێن و پاراستنی گورچیلە.", dose: "٥٠ملگم بۆ ١٠٠ملگم ڕۆژانە یەک جار.", warn: "نابێت بە هیچ شێوەیەک لە کاتی دووگیانیدا بەکاربێت.", side: "سەرگێژخواردن، بەرزبوونەوەی پۆتاسیۆم لە خوێندا.", benefit: "پەستانی خوێن کۆنترۆڵ دەکات و یارمەتی پاراستنی گورچیلەکان دەدات، بەتایبەت بۆ نەخۆشانی شەکرە." }, 
        en: { name: "Losartan", cat: "ARB", desc: "Lowers blood pressure and protects kidneys.", dose: "50mg-100mg once daily.", warn: "Absolutely contraindicated during pregnancy.", side: "Dizziness and elevated blood potassium levels.", benefit: "Controls blood pressure effectively and offers renal protection, especially for diabetic patients." }, 
        ar: { name: "لوزارتان", cat: "للضغط", desc: "يخفض ضغط الدم ويحمي الكلى.", dose: "50-100مجم يومياً.", warn: "يمنع استخدامه قطعياً أثناء فترة الحمل.", side: "دوخة، وارتفاع مستويات البوتاسيوم في الدم.", benefit: "يضبط الضغط ويوفر حماية ممتازة للكلى خاصة لدى مرضى السكري." } 
    },
    { 
        id: 14, name: "Azithromycin", type: "pill", 
        ku: { name: "ئەزیسرۆمایسین", cat: "دژەبەکتریا", desc: "بۆ هەوکردنی سییەکان، سینۆزایتس و قوڕگ.", dose: "٥٠٠ملگم ڕۆژانە یەک جار بۆ ماوەی ٣ تا ٥ ڕۆژ.", warn: "باشترە یەک کاتژمێر پێش نان یان دوو کاتژمێر دوای نان بخورێت.", side: "ئازاری سک، سکچوون، و هێڵنجدان.", benefit: "بە خێرایی کاریگەرییەکەی دەردەکەوێت و ماوەی بەکارهێنانی کورتە (زۆرجار تەنها ٣ ڕۆژ)." }, 
        en: { name: "Azithromycin", cat: "Antibiotic", desc: "Treats pneumonia, sinusitis, and throat infections.", dose: "500mg once daily for 3 to 5 days.", warn: "Best taken 1 hour before or 2 hours after meals.", side: "Stomach pain, diarrhea, and nausea.", benefit: "Fast-acting with a convenient short course (usually just 3 days) to clear infections." }, 
        ar: { name: "أزيثرومايسين", cat: "مضاد حيوي", desc: "لعلاج التهاب الصدر والجيوب والحلق.", dose: "500مجم مرة يومياً لمدة 3 إلى 5 أيام.", warn: "يفضل أخذه قبل الأكل بساعة أو بعده بساعتين.", side: "ألم في البطن، إسهال، وغثيان.", benefit: "مفعوله سريع ويمتاز بقصر فترة العلاج (غالباً 3 أيام فقط)." } 
    },
    { 
        id: 15, name: "Diazepam (Valium)", type: "pill", 
        ku: { name: "ڤالێۆم", cat: "هێورکەرەوە", desc: "بۆ چارەسەری دڵەڕاوکێ، گرژبوونی ماسولکە، و فێ.", dose: "٢ملگم بۆ ١٠ملگم بەپێی حاڵەت و فەرمانی پزیشک.", warn: "دەبێتە هۆی ئاڵوودەبوون، تەنها دەبێت بۆ ماوەیەکی زۆر کورت بەکاربێت.", side: "خەواڵوویی زۆر، سستی لێدانی دڵ، و تێکچوونی هاوسەنگی.", benefit: "هێورکەرەوەیەکی خێرایە بۆ نۆرەی دڵەڕاوکێی توند و گرژبوونی ماسولکەکان و فێ خاو دەکاتەوە." }, 
        en: { name: "Diazepam", cat: "Benzodiazepine", desc: "Treats anxiety, muscle spasms, and seizures.", dose: "2mg-10mg as prescribed by doctor.", warn: "High potential for addiction; must be used for a very short duration.", side: "Severe drowsiness, slow heart rate, and loss of balance.", benefit: "Provides rapid relief for severe anxiety attacks, acute muscle spasms, and active seizures." }, 
        ar: { name: "فاليوم", cat: "مهدئ", desc: "لعلاج القلق والتشنجات العضلية والصرع.", dose: "2-10مجم حسب إرشادات الطبيب.", warn: "يسبب الإدمان، ويجب استخدامه لفترة قصيرة جداً.", side: "نعاس شديد، بطء ضربات القلب، وفقدان التوازن.", benefit: "يهدئ سريعاً نوبات القلق الحادة ويرخي العضلات المتشنجة بقوة." } 
    },
    { 
        id: 16, name: "Furosemide (Lasix)", type: "pill", 
        ku: { name: "لازیکس", cat: "میزپێکردن", desc: "بۆ دەرکردنی ئاوی زیادەی ناو جەستە و دابەزاندنی پەستان.", dose: "٢٠ملگم بۆ ٤٠ملگم یەک جار، باشترە بەیانیان بخورێت.", warn: "دەبێتە هۆی دابەزینی خێرای پۆتاسیۆمی خوێن، پێویستە خۆراکی دەوڵەمەند بە پۆتاسیۆم بخورێت.", side: "وشکبوونەوە، سەرگێژخواردن، و زۆر میزکردن.", benefit: "ئاوسانی لەش کەمدەکاتەوە و باری سەر دڵ و سییەکان سووک دەکات بە دەرکردنی شلەی زیادە." }, 
        en: { name: "Furosemide", cat: "Diuretic", desc: "Removes excess water and lowers blood pressure.", dose: "20mg-40mg once, preferably in the morning.", warn: "Can cause rapid depletion of potassium; potassium-rich foods may be needed.", side: "Dehydration, dizziness, and frequent urination.", benefit: "Effectively reduces edema (swelling) and relieves workload on the heart and lungs." }, 
        ar: { name: "لازيكس", cat: "مدر بول", desc: "يطرد السوائل الزائدة من الجسم.", dose: "20-40مجم مرة واحدة ويفضل صباحاً.", warn: "يستنزف البوتاسيوم بسرعة، لذا قد تحتاج لتعويضه بالغذاء أو الدواء.", side: "جفاف، دوخة، وكثرة التبول.", benefit: "يزيل التورم ويخفف العبء عن القلب والرئتين بطرد السوائل المحتبسة." } 
    },
    { 
        id: 17, name: "Warfarin", type: "pill", 
        ku: { name: "وارفارین", cat: "خوێن", desc: "ڕێگری لە مەیینی خوێن و جەڵتە دەکات.", dose: "بەپێی پشکنینی خوێنی بەردەوام (INR) دیاری دەکرێت.", warn: "نابێت بڕی سەوزەواتەکانی وەک سپێناخ (ڤیتامین K) بە کتوپڕی بگۆڕیت لە ژەمەکانتدا.", side: "خوێنبەربوون لە لووت یان پووک، و شینبوونەوەی ئاسانی پێست.", benefit: "خوێن ڕوون دەکاتەوە بۆ ڕێگریکردن لە دروستبوونی کڵۆی خوێن (جەڵتە) لەناو دەمارەکاندا." }, 
        en: { name: "Warfarin", cat: "Anticoagulant", desc: "Prevents blood clots and strokes.", dose: "Highly individualized based on INR blood tests.", warn: "Maintain a consistent diet of Vitamin K-rich foods (like leafy greens); sudden changes alter drug effect.", side: "Gum/nose bleeds, and easy skin bruising.", benefit: "Thins the blood effectively to prevent dangerous blood clots from forming in veins or heart." }, 
        ar: { name: "وارفارين", cat: "سيولة", desc: "يمنع تجلط الدم والجلطات.", dose: "تحدد بدقة حسب فحص السيولة (INR).", warn: "يجب الثبات على كمية الخضروات الورقية (فيتامين K) في الغذاء لمنع تذبذب السيولة.", side: "نزيف اللثة أو الأنف، وظهور كدمات بسهولة.", benefit: "يزيد سيولة الدم ويمنع تكون الجلطات القاتلة في الأوردة والقلب." } 
    },
    { 
        id: 18, name: "Levothyroxine", type: "pill", 
        ku: { name: "ئێڵتیرۆکسین", cat: "هۆرمۆن", desc: "بۆ چارەسەری تەمەڵی غودەی دەرەقی.", dose: "٢٥ بۆ ١٠٠ مایکرۆگرام بەیانیان.", warn: "دەبێت لەسەر گەدەی بەتاڵ بخورێت، لانیکەم ٣٠ خولەک پێش نانی بەیانی.", side: "خێرا لێدانی دڵ، دڵەڕاوکێ، و دابەزینی کێش (ئەگەر ژەمەکە زۆر بێت).", benefit: "قەرەبووی هۆرمۆنی غودە دەکاتەوە و یارمەتی گەڕانەوەی وزەی لەش و ڕێکخستنی کێش دەدات." }, 
        en: { name: "Levothyroxine", cat: "Thyroid Hormone", desc: "Treats hypothyroidism (underactive thyroid).", dose: "25mcg-100mcg daily in the morning.", warn: "Must be taken on an empty stomach, at least 30 minutes before breakfast.", side: "Palpitations, anxiety, and weight loss (if dose is too high).", benefit: "Replaces missing thyroid hormone, restoring energy levels and regulating metabolism." }, 
        ar: { name: "ليفوثيروكسين", cat: "غدة", desc: "لعلاج خمول الغدة الدرقية.", dose: "25-100ميكروغرام صباحاً.", warn: "يؤخذ على معدة فارغة تماماً قبل الإفطار بـ 30 دقيقة على الأقل.", side: "خفقان، قلق، وفقدان الوزن (إذا كانت الجرعة زائدة).", benefit: "يعوض نقص الهرمون الدرقي ويعيد نشاط الجسم وعملية الحرق لمستواها الطبيعي." } 
    },
    { 
        id: 19, name: "Montelukast (Singulair)", type: "pill", 
        ku: { name: "سینگیولێر", cat: "تەنگەنەفەسی", desc: "بۆ ڕێگری لە نۆرەی ڕەبۆ و هەستیاری.", dose: "١٠ملگم ڕۆژانە یەک جار، شەوانە پێش خەوتن.", warn: "نابێت بۆ چارەسەری کتوپڕی تەنگەنەفەسی بەکاربێت (دەبێت پرژە بەکاربێت لەو کاتەدا).", side: "سەرئێشە، ئازاری سک، و خەوبینینی ناخۆش یان تێکچوونی خەو.", benefit: "بۆرییەکانی هەناسە کراوەیی دەهێڵێتەوە و ڕێگری دەکات لە دروستبوونی هەستیاری و ڕەبۆ." }, 
        en: { name: "Montelukast", cat: "Leukotriene Blocker", desc: "Prevents asthma attacks and allergies.", dose: "10mg once daily at night.", warn: "Do not use to treat sudden, acute asthma attacks (use a rescue inhaler instead).", side: "Headache, stomach pain, and sometimes vivid dreams or mood changes.", benefit: "Keeps airways open continuously and significantly reduces allergy symptoms and asthma flare-ups." }, 
        ar: { name: "سينجولير", cat: "للحساسية", desc: "يمنع نوبات الربو وحساسية الصدر والأنف.", dose: "10مجم مرة واحدة مساءً.", warn: "لا ينفع لعلاج أزمات الربو المفاجئة (يجب استخدام البخاخ الإسعافي).", side: "صداع، ألم بطن، وأحياناً كوابيس أو تغير بالمزاج.", benefit: "يمنع تضيق القصبات الهوائية ويقلل من نوبات الربو وأعراض الحساسية الموسمية." } 
    },
    { 
        id: 20, name: "Insulin (Lantus)", type: "pill", 
        ku: { name: "ئەنسۆلین (لانتوس)", cat: "شەکرە", desc: "بۆ ڕێکخستنی شەکر لە خوێندا بۆ ماوەیەکی درێژ.", dose: "بەپێی فەرمانی پزیشک، زۆرجار شەوانە لە ژێر پێست دەدرێت.", warn: "دەبێت لەناو سەلاجەدا هەڵبگیرێت (نەک بەستەر).", side: "دابەزینی توندی شەکرە (گێژبوون و ئارەقکردنەوە)، سوربوونەوەی شوێنی دەرزییەکە.", benefit: "بە درێژایی ٢٤ کاتژمێر شەکری خوێن جێگیر دەکات بەبێ ئەوەی لوتکەی خێرا دروست بکات." }, 
        en: { name: "Insulin (Lantus)", cat: "Antidiabetic", desc: "Long-acting insulin for blood sugar control.", dose: "As per doctor's orders, usually injected subcutaneously at night.", warn: "Must be stored in the refrigerator (do not freeze).", side: "Hypoglycemia (sweating/dizziness), and redness at injection site.", benefit: "Provides a steady, 24-hour baseline insulin level to keep blood sugar stable." }, 
        ar: { name: "أنسولين لانتوس", cat: "للسكري", desc: "أنسولين طويل الأمد لضبط السكر.", dose: "حسب وصفة الطبيب، يحقن تحت الجلد غالباً مساءً.", warn: "يحفظ في الثلاجة (دون تجميد).", side: "هبوط السكر (تعرق ودوخة)، واحمرار موضع الحقن.", benefit: "يوفر مستوى قاعدي مستقر من الأنسولين على مدار 24 ساعة لضبط السكر." } 
    },
    { 
        id: 21, name: "Citalopram (Celexa)", type: "pill", 
        ku: { name: "سیتالۆپڕام", cat: "دەروونی", desc: "بۆ چارەسەری خەمۆکی و دڵەڕاوکێ.", dose: "٢٠ملگم بۆ ٤٠ملگم ڕۆژانە بەیانیان یان شەوانە.", warn: "٤ بۆ ٦ هەفتەی پێویستە تا کاریگەرییەکەی بە تەواوی دەردەکەوێت. نابێت کتوپڕ وازی لێ بهێنرێت.", side: "وشکبوونی دەم، خەواڵوویی یان خەوزڕان، و کەمبوونەوەی ئارەزووی سێکسی.", benefit: "یارمەتی مێشک دەدات هۆرمۆنی دڵخۆشی (سیرۆتۆنین) ڕێکبخاتەوە بۆ نەهێشتنی خەمۆکی." }, 
        en: { name: "Citalopram", cat: "SSRI", desc: "Used for depression and anxiety disorders.", dose: "20mg-40mg once daily.", warn: "Takes 4-6 weeks for full therapeutic effect. Do not stop abruptly.", side: "Dry mouth, drowsiness or insomnia, and decreased libido.", benefit: "Balances serotonin levels in the brain to effectively treat depression and anxiety." }, 
        ar: { name: "سيتالوبرام", cat: "مضاد اكتئاب", desc: "لعلاج الاكتئاب والقلق.", dose: "20-40مجم مرة يومياً.", warn: "يحتاج 4-6 أسابيع لظهور مفعوله الكامل، ولا يوقف فجأة.", side: "جفاف الفم، نعاس أو أرق، وضعف الرغبة الجنسية.", benefit: "يعيد توازن السيروتونين في الدماغ ليخفف من أعراض الاكتئاب والتوتر." } 
    },
    { 
        id: 22, name: "Clopidogrel (Plavix)", type: "pill", 
        ku: { name: "پلاڤیکس", cat: "خوێن", desc: "بۆ ڕێگری لە جەڵتەی دڵ و مێشک دوای دانانی شەبەکە.", dose: "٧٥ملگم ڕۆژانە یەک جار.", warn: "ئاگاداری پزیشکی ددان بن پێش هەر نەشتەرگەرییەک ئەگەر ئەم دەرمانە بەکاردەهێنن.", side: "شینبوونەوەی پێست، خوێنبەربوونی لووت، و کێشەی گەدە.", benefit: "ڕێگری دەکات لە لکانی پەڕەکانی خوێن بە یەکەوە و بەمەش دڵ و مێشک دەپارێزێت." }, 
        en: { name: "Clopidogrel", cat: "Antiplatelet", desc: "Prevents stroke and heart attack, especially after stents.", dose: "75mg once daily.", warn: "Inform your dentist or surgeon you are taking this before any procedures.", side: "Bruising, nosebleeds, and gastrointestinal upset.", benefit: "Keeps blood platelets from sticking together, preventing fatal clots in stents and vessels." }, 
        ar: { name: "بلافيكس", cat: "سيولة", desc: "يمنع الجلطات بعد عمليات القسطرة والقلب.", dose: "75مجم مرة يومياً.", warn: "أبلغ طبيب الأسنان أو الجراح بتناولك الدواء قبل أي تدخل جراحي.", side: "كدمات، نزيف الأنف، واضطرابات معدية.", benefit: "يمنع التصاق الصفائح الدموية مما يحمي الدعامات القلبية ويمنع الجلطات الدماغية." } 
    },
    { 
        id: 23, name: "Hydrochlorothiazide", type: "pill", 
        ku: { name: "ئێچ-سی-تی", cat: "پەستان", desc: "بۆ دابەزاندنی پەستانی خوێن و چارەسەری ئاوسان.", dose: "١٢.٥ملگم بۆ ٢٥ملگم بەیانیان.", warn: "دەبێتە هۆی وشکبوونەوە ئەگەر ئاوی پێویست نەخورێتەوە، پێست هەستیار دەکات بە خۆر.", side: "سەرگێژخواردن، وشکبوونەوەی دەم، و کەمبوونەوەی پۆتاسیۆم.", benefit: "بە شێوەیەکی هێواش و سەلامەت پەستانی خوێن دادەبەزێنێت لە ڕێگەی زیادکردنی میزکردنەوە." }, 
        en: { name: "Hydrochlorothiazide", cat: "Diuretic", desc: "Treats high blood pressure and edema.", dose: "12.5mg-25mg once daily in the morning.", warn: "Drink adequate water to prevent dehydration. Increases skin sensitivity to sunlight.", side: "Dizziness, dry mouth, and hypokalemia (low potassium).", benefit: "Gently lowers blood pressure by helping the kidneys remove excess salt and water." }, 
        ar: { name: "هيدروكلوروثيازيد", cat: "مدر بول", desc: "لعلاج ضغط الدم والوذمة.", dose: "12.5-25مجم صباحاً.", warn: "اشرب كمية كافية من الماء. يزيد من حساسية الجلد لأشعة الشمس.", side: "دوخة، جفاف الفم، ونقص البوتاسيوم.", benefit: "يخفض الضغط بشكل آمن وفعال عبر تحفيز الكلى لطرد الأملاح والسوائل الزائدة." } 
    },
    { 
        id: 24, name: "Spironolactone (Aldactone)", type: "pill", 
        ku: { name: "ئەلدێکتۆن", cat: "پەستان/دڵ", desc: "بۆ سستبوونی دڵ و هەندێک کێشەی هۆرمۆنی وەک زیبکە.", dose: "٢٥ملگم بۆ ١٠٠ملگم ڕۆژانە.", warn: "نابێت لەگەڵ خۆراکی زۆر دەوڵەمەند بە پۆتاسیۆم (وەک مۆز) زۆر بەکاربێت.", side: "گۆڕانی دەنگ، تێکچوونی سووڕی مانگانە، و بەرزبوونەوەی پۆتاسیۆم.", benefit: "میزپێکەرێکە کە پۆتاسیۆم دەپارێزێت و لە هەمان کاتدا یارمەتی نەخۆشییەکانی دڵ و هۆرمۆن دەدات." }, 
        en: { name: "Spironolactone", cat: "Diuretic", desc: "Treats heart failure and hormonal issues like acne.", dose: "25mg-100mg daily.", warn: "Avoid taking potassium supplements or consuming large amounts of high-potassium foods.", side: "Voice changes, menstrual irregularities, and hyperkalemia.", benefit: "A potassium-sparing diuretic that treats fluid retention and provides hormonal balance." }, 
        ar: { name: "ألداكتون", cat: "مدر بول", desc: "لعلاج فشل القلب والضغط وبعض المشاكل الهرمونية.", dose: "25-100مجم يومياً.", warn: "تجنب تناول مكملات البوتاسيوم أو الأطعمة الغنية به بكثرة لمنع التسمم.", side: "تغيرات هرمونية، اضطراب الدورة الشهرية، وارتفاع البوتاسيوم.", benefit: "مدر للبول يحافظ على البوتاسيوم، ويفيد جداً في حالات فشل القلب وحب الشباب الهرموني." } 
    },
    { 
        id: 25, name: "Bisoprolol (Concor)", type: "pill", 
        ku: { name: "کۆنکۆر", cat: "دڵ", desc: "بۆ ڕێکخستنی لێدانی دڵ و دابەزاندنی پەستان.", dose: "٢.٥ملگم بۆ ١٠ملگم ڕۆژانە بەیانیان.", warn: "نابێت بۆ ئەو کەسانەی ڕەبۆی توندیان هەیە بەکاربێت، نابێت کتوپڕ وازی لێ بهێنرێت.", side: "سەرمابوونی دەست و قاچ، ماندوێتی، و سستبوونی لێدانی دڵ.", benefit: "باری سەر دڵ سووک دەکات، لێدانی دڵ ڕێکدەخات و تەمەنی دڵ درێژ دەکات." }, 
        en: { name: "Bisoprolol", cat: "Beta Blocker", desc: "Regulates heart rate and treats hypertension.", dose: "2.5mg-10mg once daily in the morning.", warn: "Contraindicated in severe asthma patients. Do not stop abruptly.", side: "Cold hands/feet, fatigue, and slow heart rate (bradycardia).", benefit: "Reduces the workload on the heart, stabilizing rhythm and lowering blood pressure safely." }, 
        ar: { name: "كونكور", cat: "للقلب", desc: "ينظم ضربات القلب ويخفض الضغط.", dose: "2.5-10مجم صباحاً.", warn: "يحذر لمرضى الربو الشديد، ولا يجوز إيقافه فجأة لتجنب النوبات القلبية.", side: "برودة الأطراف، تعب، وبطء معدل ضربات القلب.", benefit: "يريح عضلة القلب وينظم النبض مما يحسن من كفاءة القلب وعمره." } 
    },
    { 
        id: 26, name: "Augmentin", type: "pill", 
        ku: { name: "ئۆگمێنتین", cat: "دژەبەکتریا", desc: "بۆ چارەسەری هەوکردنی توندی گوێ، سینۆزایتس، و سییەکان.", dose: "٦٢٥ملگم بۆ ١گرام، ٢ جار لە ڕۆژێکدا.", warn: "نابێت بۆ ئەو کەسانە بەکاربێت کە هەستیارییان بە پەنسلین هەیە.", side: "دڵتێکچوون، سکچوونێکی زۆر، و هەستیاری پێست.", benefit: "دژەبکتریایەکی زۆر بەهێزە کە بەکتریای خۆڕاگر لەناودەبات کە ئەمۆکسیلینی ئاسایی ناتوانێت." }, 
        en: { name: "Augmentin", cat: "Antibiotic", desc: "Treats severe ear infections, sinusitis, and pneumonia.", dose: "625mg-1g twice daily.", warn: "Strictly contraindicated for patients with penicillin allergy.", side: "Nausea, significant diarrhea, and skin rash.", benefit: "A broad-spectrum antibiotic that kills resistant bacteria effectively." }, 
        ar: { name: "أوجمنتين", cat: "مضاد حيوي", desc: "لعلاج التهابات الأذن الشديدة والجيوب الأنفية.", dose: "625مجم إلى 1جم مرتين يومياً.", warn: "يمنع منعاً باتاً لمن يعاني من حساسية البنسلين.", side: "غثيان، إسهال ملحوظ، وطفح جلدي.", benefit: "مضاد واسع الطيف يقضي على البكتيريا العنيدة التي تقاوم المضادات العادية." } 
    },
    { 
        id: 27, name: "Diclofenac (Voltaren)", type: "pill", 
        ku: { name: "ڤۆڵتارین", cat: "ئازارشکێن", desc: "بۆ ئازاری توندی جومگەکان و هەوکردن.", dose: "٥٠ملگم بۆ ٧٥ملگم ٢ جار لە ڕۆژێکدا دوای نان.", warn: "بۆ نەخۆشانی دڵ و پەستانی خوێن و برینی گەدە مەترسیدارە ئەگەر زۆر بەکاربێت.", side: "ئازاری گەدە، دڵەکزێ، و بەرزبوونەوەی پەستانی خوێن.", benefit: "زۆر بە خێرایی ئازاری توند و هەوکردنی جومگە و پشتی مرۆڤ کەمدەکاتەوە." }, 
        en: { name: "Diclofenac", cat: "NSAID", desc: "Relieves severe joint pain and inflammation.", dose: "50mg-75mg twice daily after meals.", warn: "High risk for patients with heart disease, hypertension, or stomach ulcers.", side: "Stomach pain, heartburn, and increased blood pressure.", benefit: "Provides highly potent and fast relief for acute musculoskeletal pain and severe inflammation." }, 
        ar: { name: "فولتارين", cat: "مسكن", desc: "لعلاج آلام المفاصل والالتهابات القوية.", dose: "50-75مجم مرتين يومياً بعد الأكل.", warn: "خطير على مرضى القلب وضغط الدم وقرحة المعدة عند الاستخدام الطويل.", side: "ألم معدة، حرقة، وارتفاع الضغط.", benefit: "يقضي بسرعة فائقة على آلام الظهر والمفاصل المبرحة والتهاباتها." } 
    },
    { 
        id: 28, name: "Dexamethasone", type: "pill", 
        ku: { name: "دێکسامیسازۆن", cat: "ستیرۆید", desc: "بۆ چارەسەری هەستیاری توند و هەوکردنی توند.", dose: "٠.٥ملگم بۆ ٨ملگم ڕۆژانە بەپێی حاڵەت.", warn: "بەکارهێنانی درێژخایەن دەبێتە هۆی پووکانەوەی ئێسک، دابەزینی بەرگری، و ئاوی سپی چاو.", side: "زیادبوونی شەکر لە خوێندا، خەوزڕان، و زیادبوونی کێش.", benefit: "لە کاتی فریاگوزاریدا ژیان ڕزگار دەکات (وەک هەستیاری زۆر توند یان ئاوسانی مێشک)." }, 
        en: { name: "Dexamethasone", cat: "Corticosteroid", desc: "Treats severe allergic reactions and inflammation.", dose: "0.5mg-8mg daily based on condition.", warn: "Long-term use can cause osteoporosis, immune suppression, and cataracts.", side: "Hyperglycemia, insomnia, and rapid weight gain.", benefit: "A life-saving drug in emergencies like severe anaphylaxis or brain swelling." }, 
        ar: { name: "ديكساميثازون", cat: "ستيرويد", desc: "لعلاج الحساسية والالتهابات الشديدة جداً.", dose: "0.5-8مجم يومياً حسب الحالة.", warn: "الاستخدام الطويل يسبب هشاشة العظام وضعف المناعة وماء العين.", side: "ارتفاع السكر، أرق، وزيادة الوزن السريعة.", benefit: "منقذ للحياة في الطوارئ مثل الحساسية المفرطة وتورم الدماغ." } 
    },
    { 
        id: 29, name: "Doxycycline", type: "pill", 
        ku: { name: "دۆکسی-سایکلین", cat: "دژەبەکتریا", desc: "بۆ چارەسەری زیپکە و هەندێک هەوکردنی بەکتریایی.", dose: "١٠٠ملگم ١ بۆ ٢ جار لە ڕۆژێکدا دوای نان.", warn: "نابێت لە کاتی دووگیانیدا و بۆ منداڵ بەکاربێت چونکە ڕەنگی ددان تێکدەدات.", side: "هەستیاری پێست بۆ تیشکی خۆر، دڵتێکچوون، و ترشەڵۆکی گەدە.", benefit: "زۆر سەرکەوتووە بۆ چارەسەری زیپکەی پێست و نەخۆشییە گوازراوەکانی ڕێگەی سێکس." }, 
        en: { name: "Doxycycline", cat: "Antibiotic", desc: "Treats acne and various bacterial infections.", dose: "100mg 1-2 times daily after meals.", warn: "Avoid in pregnancy and children under 8 as it permanently stains teeth.", side: "Extreme sun sensitivity, nausea, and acid reflux.", benefit: "Highly effective for clear skin (acne treatment) and respiratory/STD infections." }, 
        ar: { name: "دوكسيسايكلين", cat: "مضاد حيوي", desc: "لعلاج حب الشباب والالتهابات البكتيرية.", dose: "100مجم 1-2 مرة يومياً بعد الأكل.", warn: "يحذر أثناء الحمل وللأطفال دون 8 سنوات لأنه يصبغ الأسنان بشكل دائم.", side: "حساسية شديدة للشمس، غثيان، وحرقة معدة.", benefit: "فعال جداً في تصفية البشرة من حب الشباب وعلاج بعض الأمراض المنقولة جنسياً." } 
    },
    { 
        id: 30, name: "Gabapentin", type: "pill", 
        ku: { name: "گاباپێنتین", cat: "ئازاری دەمار", desc: "بۆ چارەسەری ئازاری دەمار (وەک شەکرە) و فێ.", dose: "٣٠٠ملگم بۆ ٩٠٠ملگم تا ٣ جار لە ڕۆژێکدا.", warn: "دەبێتە هۆی گێژخواردنی زۆر، نابێت ئۆتۆمبێل لێبخورێت دوای بەکارهێنانی.", side: "خەواڵوویی زۆر، تێکچوونی هاوسەنگی، و ئاوسانی قاچ.", benefit: "ئازارە سووتاوییەکانی دەمار کەمدەکاتەوە کە بە ئازارشکێنی ئاسایی چارەسەر نابن." }, 
        en: { name: "Gabapentin", cat: "Anticonvulsant", desc: "Treats nerve pain (neuropathy) and seizures.", dose: "300mg-900mg up to 3 times daily.", warn: "Causes severe dizziness; avoid driving or operating heavy machinery.", side: "Extreme drowsiness, loss of coordination, and leg swelling.", benefit: "Effectively relieves burning nerve pain that doesn't respond to regular painkillers." }, 
        ar: { name: "جابابنتين", cat: "لألم الأعصاب", desc: "يعالج آلام الأعصاب (كالسكري) والتشنجات.", dose: "300-900مجم حتى 3 مرات يومياً.", warn: "يسبب دواراً شديداً، لذا تجنب القيادة بعد تناوله.", side: "نعاس شديد، ترنح، وتورم في الأطراف.", benefit: "يسكن الآلام العصبية الحارقة التي لا تستجيب للمسكنات التقليدية." } 
    },
    { 
        id: 31, name: "Fluoxetine (Prozac)", type: "pill", 
        ku: { name: "پڕۆزاک", cat: "دەروونی", desc: "بۆ چارەسەری خەمۆکی، وسوەسە، و ترس.", dose: "٢٠ملگم بۆ ٤٠ملگم بەیانیان.", warn: "لەوانەیە لە سەرەتادا بیرۆکەی خۆکوژی زیاد بکات، پێویستە چاودێری بکرێت.", side: "خەوزڕان، دڵتێکچوون، و کەمبوونی ئارەزووی خواردن.", benefit: "میزاج زۆر باش دەکات و یارمەتی کەسەکە دەدات ژیانێکی ئاسایی بژی و وسوەسەکانی نەمێنێت." }, 
        en: { name: "Fluoxetine", cat: "SSRI", desc: "Treats depression, OCD, and panic attacks.", dose: "20mg-40mg in the morning.", warn: "May initially increase suicidal thoughts in young adults; monitor closely.", side: "Insomnia, nausea, and decreased appetite/weight loss.", benefit: "Significantly uplifts mood, restores normal daily functioning, and reduces obsessive behaviors." }, 
        ar: { name: "بروزاك", cat: "مضاد اكتئاب", desc: "لعلاج الاكتئاب والوسواس القهري والهلع.", dose: "20-40مجم صباحاً.", warn: "قد يزيد من الأفكار الانتحارية في بداية العلاج، يجب المراقبة.", side: "أرق، غثيان، وفقدان الشهية.", benefit: "يحسن المزاج بشكل رائع ويعيد المريض لحياته الطبيعية متخلصاً من الوساوس." } 
    },
    { 
        id: 32, name: "Lorazepam (Ativan)", type: "pill", 
        ku: { name: "ئاتیڤان", cat: "هێورکەرەوە", desc: "بۆ دڵەڕاوکێی توند، فێ، و تێکچوونی خەو.", dose: "١ملگم بۆ ٢ملگم ٢-٣ جار لە ڕۆژێکدا.", warn: "تەنها بۆ ماوەیەکی کورت (٢ بۆ ٤ هەفتە) بەکاردێت بەهۆی مەترسی ئاڵوودەبوون.", side: "خەواڵوویی، لاوازی ماسولکە، و لەبیرچوونەوەی کاتی.", benefit: "بە خێراییەکی زۆر مێشک هێور دەکاتەوە و یارمەتی کەسەکە دەدات لە کاتی فشار و نۆرەی پەنیک بخەوێت." }, 
        en: { name: "Lorazepam", cat: "Benzodiazepine", desc: "Treats severe anxiety, seizures, and insomnia.", dose: "1mg-2mg 2-3 times daily.", warn: "Short-term use only (2-4 weeks) due to high risk of dependence.", side: "Drowsiness, muscle weakness, and short-term memory loss.", benefit: "Provides ultra-fast calmness to the brain, helping patients sleep or survive severe panic attacks." }, 
        ar: { name: "أتيڤان", cat: "مهدئ", desc: "لعلاج القلق الشديد والأرق والصرع.", dose: "1-2مجم مرتين لثلاث يومياً.", warn: "يسبب الإدمان، ويستخدم لفترة قصيرة جداً (2-4 أسابيع).", side: "نعاس، ضعف عضلي، وفقدان مؤقت للذاكرة.", benefit: "يهدئ الدماغ بسرعة فائقة وينقذ المريض من نوبات الهلع والأرق الشديد." } 
    },
    { 
        id: 33, name: "Escitalopram (Lexapro)", type: "pill", 
        ku: { name: "لێکساپڕۆ", cat: "دەروونی", desc: "بۆ چارەسەری خەمۆکی و دڵەڕاوکێی گشتگیر.", dose: "١٠ملگم بۆ ٢٠ملگم ڕۆژانە یەک جار.", warn: "کاریگەرییەکەی دوای ٢ بۆ ٤ هەفتە دەردەکەوێت، پێویستە نەخۆش ئارام بگرێت.", side: "دڵتێکچوون، وشکبوونی دەم، خەواڵوویی، و کێشەی سێکسی.", benefit: "یەکێکە لە سەلامەتترین و کاریگەرترین دەرمانەکان بۆ ئارامکردنەوەی مێشک و ڕێکخستنی میزاج." }, 
        en: { name: "Escitalopram", cat: "SSRI", desc: "Treats depression and generalized anxiety.", dose: "10mg-20mg once daily.", warn: "Therapeutic effect starts after 2-4 weeks; patience is required.", side: "Nausea, dry mouth, drowsiness, and sexual dysfunction.", benefit: "Considered one of the most effective and well-tolerated medications for stabilizing mood and anxiety." }, 
        ar: { name: "ليكسابرو", cat: "مضاد اكتئاب", desc: "لعلاج الاكتئاب والقلق العام.", dose: "10-20مجم يومياً.", warn: "يستغرق من أسبوعين إلى شهر ليبدأ مفعوله، لذا يلزم الصبر.", side: "غثيان، جفاف الفم، نعاس، ومشاكل جنسية.", benefit: "من أكثر الأدوية أماناً وفعالية في ضبط المزاج وتخفيف التوتر المستمر." } 
    },
    { 
        id: 34, name: "Metoclopramide (Plasil)", type: "pill", 
        ku: { name: "پلاسیل", cat: "دژە-هێڵنج", desc: "بۆ وەستاندنی دڵتێکچوون، هێڵنجدان و خێراکردنی هەرەس.", dose: "١٠ملگم ٣ جار لە ڕۆژێکدا نیو کاتژمێر پێش نان.", warn: "نابێت لە کاتی برینی توندی گەدە یان گیرانی ڕێخۆڵە بەکاربێت.", side: "ماندوێتی، بێتاقەتی زۆر (نەمانی ئارامی ماسولکە)، و خەواڵوویی.", benefit: "یارمەتی گەدە دەدات زووتر خواردن بەتاڵ بکاتەوە و ڕێگرییەکی بەهێزە لە ڕشانەوە." }, 
        en: { name: "Metoclopramide", cat: "Antiemetic", desc: "Prevents nausea, vomiting, and speeds up gastric emptying.", dose: "10mg 3 times daily, 30 mins before meals.", warn: "Contraindicated in gastrointestinal hemorrhage or mechanical bowel obstruction.", side: "Fatigue, restlessness (akathisia), and drowsiness.", benefit: "Promotes stomach emptying and provides excellent relief from severe nausea and vomiting." }, 
        ar: { name: "بلاسيل", cat: "للقيء", desc: "يعالج الغثيان والقيء ويسرع تفريغ المعدة.", dose: "10مجم 3 مرات يومياً قبل الأكل بنصف ساعة.", warn: "يحذر استخدامه في حالات النزيف المعدي أو انسداد الأمعاء.", side: "تعب، تململ حركي (عدم القدرة على الجلوس بثبات)، ونعاس.", benefit: "يسرع هضم الطعام ويوقف القيء بقوة مما يريح المعدة بشكل ملحوظ." } 
    },
    { 
        id: 35, name: "Clarithromycin", type: "pill", 
        ku: { name: "کۆ-کلاسیرۆ", cat: "دژەبەکتریا", desc: "بۆ هەوکردنی قوڕگ، سییەکان، و بەکتریای گەدە (H. pylori).", dose: "٥٠٠ملگم ٢ جار لە ڕۆژێکدا بۆ ٧ تا ١٤ ڕۆژ.", warn: "دەتوانێت کارلێک لەگەڵ زۆر دەرمانی تر بکات، بەتایبەت دەرمانی چەوری.", side: "ئازاری سک، تامی ناخۆش (تاڵ) لە دەمدا، و دڵتێکچوون.", benefit: "بەشێکی زۆر گرنگە لە چارەسەری سێینەیی بۆ لەناوبردنی بەکتریای گەدە و بنبڕکردنی برینی گەدە." }, 
        en: { name: "Clarithromycin", cat: "Antibiotic", desc: "Treats throat/lung infections and H. pylori (stomach bacteria).", dose: "500mg twice daily for 7-14 days.", warn: "Has many drug interactions, especially with statins (cholesterol meds).", side: "Stomach pain, persistent bitter/metallic taste, and nausea.", benefit: "Crucial component of the triple therapy used to eradicate stomach bacteria and heal ulcers." }, 
        ar: { name: "كلاريثروميسين", cat: "مضاد حيوي", desc: "لعلاج التهابات الصدر وجرثومة المعدة.", dose: "500مجم مرتين يومياً لمدة 7-14 يوم.", warn: "يتعارض مع أدوية كثيرة وخاصة أدوية الكوليسترول.", side: "ألم في البطن، طعم مر أو معدني مستمر بالفم، وغثيان.", benefit: "حجر الأساس في العلاج الثلاثي للقضاء على جرثومة المعدة وشفاء القرحة نهائياً." } 
    },
    { 
        id: 36, name: "Pantoprazole", type: "pill", 
        ku: { name: "پانتۆپرازۆڵ", cat: "گەدە", desc: "بۆ ترشەڵۆک و برینی گەدە.", dose: "٤٠ملگم ڕۆژانە بەیانیان پێش نان.", warn: "زۆر بەکارهێنانی دەبێتە هۆی کەمبوونەوەی ڤیتامین B12.", side: "سەرئێشە، غازات، و سکچوون.", benefit: "بەخێرایی ڕێگری لە دروستبوونی ترشەڵۆک دەکات و برینی گەدە چاک دەکاتەوە." }, 
        en: { name: "Pantoprazole", cat: "PPI", desc: "Treats acid reflux and stomach ulcers.", dose: "40mg daily before breakfast.", warn: "Prolonged use may lead to Vitamin B12 deficiency.", side: "Headache, gas, and diarrhea.", benefit: "Rapidly blocks stomach acid production and helps heal stomach ulcers." }, 
        ar: { name: "بانتوبرازول", cat: "للمعدة", desc: "يعالج حموضة وقرحة المعدة.", dose: "40مجم يومياً قبل الإفطار.", warn: "استخدامه الطويل قد يسبب نقص فيتامين B12.", side: "صداع، غازات، وإسهال.", benefit: "يمنع إنتاج الحمض بسرعة ويساعد في التئام قرحة المعدة." } 
    },
    { 
        id: 37, name: "Cetirizine", type: "pill", 
        ku: { name: "سیتریزین", cat: "حەساسییەت", desc: "بۆ چارەسەری حەساسییەت، پژمە، و خورووی پێست.", dose: "١٠ملگم ڕۆژانە یەک جار.", warn: "لەوانەیە کەمێک خەواڵووت بکات، باشترە شەوانە بخورێت.", side: "خەواڵوویی، وشکبوونی دەم، و سەرئێشە.", benefit: "بەهێزە بۆ وەستاندنی ئاوی لووت و خورووی چاو و پێست بەهۆی هەستیارییەوە." }, 
        en: { name: "Cetirizine", cat: "Antihistamine", desc: "Treats allergies, sneezing, and skin itching.", dose: "10mg once daily.", warn: "May cause slight drowsiness; best taken at night.", side: "Drowsiness, dry mouth, and headache.", benefit: "Highly effective at stopping runny nose, itchy eyes, and skin hives." }, 
        ar: { name: "سيتيريزين", cat: "للحساسية", desc: "لعلاج الحساسية والعطس وحكة الجلد.", dose: "10مجم مرة يومياً.", warn: "قد يسبب النعاس الخفيف، يفضل تناوله ليلاً.", side: "نعاس، جفاف الفم، وصداع.", benefit: "يوقف سيلان الأنف وحكة العين والجلد الناتجة عن الحساسية بقوة." } 
    },
    { 
        id: 38, name: "Amitriptyline", type: "pill", 
        ku: { name: "ئەمیتریپتیلین", cat: "دەروونی/ئازار", desc: "بۆ خەمۆکی، ئازاری دەمار، و شەقیقە.", dose: "١٠ بۆ ٢٥ملگم شەوانە.", warn: "دەبێتە هۆی خەواڵوویی زۆر و قەبزی.", side: "خەواڵوویی، قەبزی، و زیادبوونی کێش.", benefit: "یارمەتی چارەسەری ئازارە درێژخایەنەکان دەدات و ڕێگری لە هاتنی سەرئێشەی شەقیقە دەکات." }, 
        en: { name: "Amitriptyline", cat: "Antidepressant", desc: "Treats depression, nerve pain, and migraines.", dose: "10-25mg at night.", warn: "Causes significant drowsiness and constipation.", side: "Drowsiness, constipation, and weight gain.", benefit: "Helps manage chronic nerve pain and prevents migraine headaches." }, 
        ar: { name: "أميتريبتيلين", cat: "مضاد اكتئاب/ألم", desc: "لعلاج الاكتئاب، آلام الأعصاب، والشقيقة.", dose: "10-25مجم ليلاً.", warn: "يسبب نعاساً شديداً وإمساكاً.", side: "نعاس، إمساك، وزيادة الوزن.", benefit: "يساعد في السيطرة على الآلام المزمنة ويقي من نوبات الصداع النصفي." } 
    },
    { 
        id: 39, name: "Seretide (Salmeterol/Fluticasone)", type: "pill", 
        ku: { name: "سێرێتاید", cat: "تەنگەنەفەسی", desc: "پرژەیەکە بۆ ڕێگری لە نۆرەی ڕەبۆ.", dose: "١ یان ٢ پرژە ٢ جار لە ڕۆژێکدا.", warn: "دەبێت دوای بەکارهێنان دەم بە ئاو بشۆرێت بۆ ڕێگری لە کەڕووی ناو دەم.", side: "گۆڕانی دەنگ، کەڕووی دەم، و کۆکە.", benefit: "هەوکردنی سییەکان کەمدەکاتەوە و بۆرییەکانی هەناسە بە کراوەیی دەهێڵێتەوە." }, 
        en: { name: "Seretide", cat: "Inhaler", desc: "Inhaler to prevent asthma attacks.", dose: "1 or 2 puffs twice daily.", warn: "Must rinse mouth with water after use to prevent oral thrush.", side: "Voice changes, oral thrush, and cough.", benefit: "Reduces lung inflammation and keeps airways open long-term." }, 
        ar: { name: "سيريتايد", cat: "بخاخ ربو", desc: "بخاخ للوقاية من نوبات الربو.", dose: "بخة أو بخختين مرتين يومياً.", warn: "يجب غسل الفم بالماء بعد الاستخدام لمنع فطريات الفم.", side: "بحة في الصوت، فطريات الفم، وسعال.", benefit: "يخفف التهاب الرئتين ويبقي القصبات الهوائية مفتوحة على المدى الطويل." } 
    },
    { 
        id: 40, name: "Ondansetron (Zofran)", type: "pill", 
        ku: { name: "ئۆندانسێترۆن", cat: "دژە-هێڵنج", desc: "بۆ وەستاندنی ڕشانەوە و دڵتێکچوونی توند.", dose: "٤ بۆ ٨ملگم ٢ تا ٣ جار لە ڕۆژێکدا.", warn: "لەوانەیە ببێتە هۆی قەبزی و سەرئێشە.", side: "سەرئێشە، قەبزی، و هەستکردن بە گەرمبوونی لەش.", benefit: "دەرمانێکی زۆر بەهێزە بۆ وەستاندنی ڕشانەوە کە بە دەرمانی ئاسایی ناوەستێت." }, 
        en: { name: "Ondansetron", cat: "Antiemetic", desc: "Stops severe nausea and vomiting.", dose: "4-8mg 2 to 3 times daily.", warn: "May cause constipation and headache.", side: "Headache, constipation, and sensation of warmth.", benefit: "A highly potent medication to stop vomiting that doesn't respond to regular meds." }, 
        ar: { name: "أوندانسيترون", cat: "للقيء", desc: "يوقف الغثيان والقيء الشديد.", dose: "4-8مجم 2-3 مرات يومياً.", warn: "قد يسبب الإمساك والصداع.", side: "صداع، إمساك، وشعور بالحرارة.", benefit: "دواء قوي جداً لوقف القيء المستعصي الذي لا يستجيب للأدوية العادية." } 
    }
];

// Ensure it attaches to window if needed
if (typeof window !== 'undefined') {
    window.drugsData = drugsData;
}
