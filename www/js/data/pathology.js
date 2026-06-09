const pathologyData = [
    {
        id: 4001,
        img: "img/pathology/rbc.png?v=2",
        ku: { title: "خڕۆکە سوورەکانی خوێن (RBCs)", desc: "شێوەی ئاسایی خڕۆکە سوورەکانی خوێن لە ژێر میکرۆسکۆپدا. شێوەیان وەک قاپێکی بچووکە کە ناوەڕاستەکەی تەنکترە و هیچ ناوکێکیان (Nucleus) نییە. بەرپرسن لە گواستنەوەی ئۆکسجین.", symptoms: ["کەمییان دەبێتە هۆی کەمخوێنی (Anemia)", "زۆرییان دەبێتە هۆی خەستبوونەوەی خوێن (Polycythemia)"] },
        en: { title: "Normal Red Blood Cells (RBCs)", desc: "Normal microscopic view of erythrocytes. They are biconcave anucleated discs responsible for oxygen transport.", symptoms: ["Low count causes Anemia", "High count causes Polycythemia"] },
        ar: { title: "خلايا الدم الحمراء الطبيعية", desc: "المظهر المجهري الطبيعي لخلايا الدم الحمراء. هي أقراص مقعرة الوجهين عديمة النواة مسؤولة عن نقل الأكسجين.", symptoms: ["نقصها يسبب فقر الدم", "زيادتها تسبب كثرة الحمر"] }
    },
    {
        id: 4002,
        img: "img/pathology/wbc.png?v=2",
        ku: { title: "خڕۆکە سپییەکان (Neutrophils)", desc: "باوترین جۆری خڕۆکە سپییەکانی خوێنە کە ناوکەکەی دابەشبووە بۆ ٣-٥ بەش (Segmented). هێڵی یەکەمی بەرگری لەشە دژی بەکتریاکان.", symptoms: ["لە کاتی هەوکردنی بەکتریاییدا (Infection) ڕێژەیان زۆر بەرز دەبێتەوە."] },
        en: { title: "White Blood Cells (Neutrophils)", desc: "The most abundant type of granulocytes. They have a multi-lobed nucleus and form the first line of defense against bacterial infections.", symptoms: ["Levels rise significantly during bacterial infections."] },
        ar: { title: "خلايا الدم البيضاء (العدلات)", desc: "النوع الأكثر شيوعاً من خلايا الدم البيضاء. تتميز بنواة مفصصة وهي خط الدفاع الأول ضد البكتيريا.", symptoms: ["ترتفع مستوياتها بشكل كبير أثناء الالتهابات البكتيرية."] }
    },
    {
        id: 4003,
        img: "img/pathology/ecoli.png?v=2",
        ku: { title: "بەکتریای ئی-کۆلای (E. coli)", desc: "بەکتریایەکی شێوە دارچیلەییە (Gram-negative bacillus) کە بەشێوەیەکی ئاسایی لە ڕیخۆڵەی مرۆڤدا دەژی، بەڵام هەندێک جۆری دەبنە هۆی سکچوونی توند و هەوکردنی میزەڵدان.", symptoms: ["هەوکردنی کۆئەندامی میز (UTI)", "سکچوون و ئازاری سک"] },
        en: { title: "Escherichia coli (E. coli)", desc: "A Gram-negative, rod-shaped bacterium commonly found in the lower intestine. Certain strains can cause severe food poisoning or UTIs.", symptoms: ["Urinary Tract Infections (UTI)", "Diarrhea and abdominal cramps"] },
        ar: { title: "بكتيريا الإشريكية القولونية (E. coli)", desc: "بكتيريا سالبة الجرام عصوية الشكل تعيش بشكل طبيعي في الأمعاء، لكن بعض السلالات تسبب تسمماً غذائياً أو التهابات بولية.", symptoms: ["التهاب المسالك البولية", "إسهال ومغص معوي"] }
    },
    {
        id: 4004,
        img: "img/pathology/malaria.png?v=2",
        ku: { title: "پاراسایتی مەلاریا (Plasmodium)", desc: "لەم وێنەیەدا پاراسایتی مەلاریا لە شێوەی 'ئەڵقە' (Ring form) لە ناو خڕۆکە سوورەکاندا دەردەکەوێت. نەخۆشییەکە لە ڕێگەی پێوەدانی مێشوولەوە دەگوازرێتەوە.", symptoms: ["تایەکی زۆر بەرز کە دێت و دەچێت", "لەرزێکی بەهێز", "کەمخوێنی"] },
        en: { title: "Malaria Parasite (Plasmodium)", desc: "Microscopic view of Plasmodium falciparum in its 'ring form' inside red blood cells. Transmitted by infected mosquitoes.", symptoms: ["Cyclical high fever", "Severe chills", "Anemia"] },
        ar: { title: "طفيلي الملاريا (بلازموديوم)", desc: "مظهر طفيلي الملاريا على شكل 'خاتم' داخل خلايا الدم الحمراء. ينتقل عن طريق لدغات البعوض المصاب.", symptoms: ["حمى دورية شديدة", "قشعريرة قوية", "فقر دم"] }
    },
    {
        id: 4005,
        img: "img/pathology/tb.png?v=2",
        ku: { title: "بەکتریای سیل (Tuberculosis)", desc: "بەکتریای سیل (Mycobacterium tuberculosis) کە بە بۆیەی تایبەت (Acid-fast stain) ڕەنگ کراوە و بە ڕەنگی پەمەیی/سوور لەسەر باکگراوندێکی شین دەردەکەوێت.", symptoms: ["کۆکەی درێژخایەن (زیاتر لە ٣ هەفتە)", "خوێن هێنانەوە", "ئارەقکردنەوەی شەوانە"] },
        en: { title: "Tuberculosis Bacteria", desc: "Mycobacterium tuberculosis stained with acid-fast stain (Ziehl-Neelsen), appearing as bright red rods against a blue background.", symptoms: ["Chronic cough (over 3 weeks)", "Hemoptysis (coughing blood)", "Night sweats"] },
        ar: { title: "بكتيريا السل", desc: "بكتيريا السل ملطخة بصبغة مقاومة للأحماض، تظهر كعصيات حمراء ساطعة على خلفية زرقاء.", symptoms: ["سعال مزمن (أكثر من 3 أسابيع)", "سعال مصحوب بدم", "تعرق ليلي"] }
    },
    {
        id: 4006,
        img: "img/pathology/sickle.png?v=2",
        ku: { title: "کەمخوێنی داسەیی (Sickle Cell)", desc: "لەم حاڵەتە بۆماوەییەدا، شێوەی خڕۆکە سوورەکان دەگۆڕێت بۆ شێوەی 'داس' یان 'مانگی نیوە'. ئەمەش وادەکات لەناو بۆرییە بچووکەکانی خوێندا گیر بخۆن.", symptoms: ["ئازارێکی زۆر و کتوپڕ لە ئێسک و جومگەکان", "کەمخوێنی", "مەترسی جەڵتە"] },
        en: { title: "Sickle Cell Anemia", desc: "A genetic disorder where red blood cells assume an abnormal, rigid, sickle shape. This causes them to block small blood vessels.", symptoms: ["Sudden severe pain crises", "Chronic anemia", "Increased risk of stroke"] },
        ar: { title: "فقر الدم المنجلي", desc: "اضطراب وراثي تأخذ فيه خلايا الدم الحمراء شكل 'منجل' غير طبيعي وصلب، مما يؤدي إلى انسداد الأوعية الدموية الدقيقة.", symptoms: ["نوبات ألم مفاجئة وشديدة", "فقر دم مزمن", "زيادة خطر الإصابة بالجلطات"] }
    },
    {
        id: 4007,
        img: "img/pathology/staph.png?v=2",
        ku: { title: "ستافیلۆکۆکەس ساپڕۆفیتیکەس", desc: "بەکتریايەکی شێوە گۆییە (Gram-positive) کە بەزۆری دەبێتە هۆی هەوکردنی میزڵدان (UTI) لە ئافرەتانی گەنجدا. بە دووەم باوترین هۆکاری هەوکردنی میز دادەنرێت دوای E. coli.", symptoms: ["ئازار لە کاتی میزکردن", "زوو زوو میزکردن", "ئازاری خوارەوەی سک"] },
        en: { title: "Staphylococcus saprophyticus", desc: "Gram-positive cocci bacteria that is a leading cause of uncomplicated UTIs, particularly in young sexually active females.", symptoms: ["Painful urination (Dysuria)", "Frequent urination", "Lower abdominal pain"] },
        ar: { title: "المكورات العنقودية الرمية", desc: "بكتيريا كروية موجبة الجرام تعتبر سبباً رئيسياً لالتهابات المسالك البولية، خاصة لدى الشابات.", symptoms: ["ألم عند التبول", "كثرة التبول", "ألم أسفل البطن"] }
    },
    {
        id: 4008,
        img: "img/pathology/proteus.png?v=2",
        ku: { title: "بەکتریای پڕۆتیەس (Proteus mirabilis)", desc: "بەکتریايەکی جوڵاوە کە دەبێتە هۆی هەوکردنی بۆرییەکانی میز. ترشێتی میز کەم دەکاتەوە و دەبێتە هۆی دروستبوونی بەردی گورچیلە (بەردی ستروڤایت).", symptoms: ["میزی بۆن ناخۆش", "دروستبوونی بەردی گورچیلە", "تا و ئازاری کەمەر"] },
        en: { title: "Proteus mirabilis", desc: "A highly motile Gram-negative bacterium known to cause UTIs. It produces urease, alkalizing urine and leading to struvite kidney stones.", symptoms: ["Foul-smelling urine", "Kidney stone formation", "Fever and flank pain"] },
        ar: { title: "المتقلبة الرائعة (Proteus mirabilis)", desc: "بكتيريا متحركة سالبة الجرام تسبب التهابات البول. تفرز إنزيم اليورياز مما يجعل البول قلوياً ويؤدي لتكون حصوات الكلى.", symptoms: ["بول كريه الرائحة", "تكون حصوات الكلى", "حمى وألم في الخاصرة"] }
    },
    {
        id: 4009,
        img: "img/pathology/klebsiella.png?v=2",
        ku: { title: "بەکتریای کلێبسیێلا (Klebsiella pneumoniae)", desc: "بەکتریايەکی کەپسولدارە کە دەبێتە هۆی هەوکردنی سییەکان و هەوکردنی میزڵدان. زیاتر لەو نەخۆشانەدا دەردەکەوێت کە سۆندەی میزیان بۆ دانراوە یان لە نەخۆشخانەن.", symptoms: ["تا و لەرز", "میزی خوێناویی", "هەوکردنی سییەکان و کۆکە"] },
        en: { title: "Klebsiella pneumoniae", desc: "Capsulated Gram-negative bacteria causing pneumonia and UTIs. It is a common hospital-acquired infection, especially with urinary catheters.", symptoms: ["Fever and chills", "Bloody urine", "Pneumonia with thick sputum"] },
        ar: { title: "كليبسيلا الرئوية", desc: "بكتيريا محاطة بمحفظة تسبب التهابات رئوية وبولية. شائعة كعدوى مكتسبة في المستشفيات، خاصة مع القسطرة البولية.", symptoms: ["حمى وقشعريرة", "بول دموي", "التهاب رئوي مع بلغم"] }
    },
    {
        id: 4010,
        img: "img/pathology/pseudomonas.png?v=2",
        ku: { title: "بەکتریای سودۆمۆناس (Pseudomonas aeruginosa)", desc: "بەکتریايەکی بەهێزە کە بەرگرییەکی زۆری بەرامبەر ئەنتی بایۆتیکەکان هەیە. دەبێتە هۆی هەوکردنی میز و برینەکان، بەتایبەت لەو نەخۆشانەی سیستەمی بەرگرییان لاوازە.", symptoms: ["میزێکی ڕەنگ سەوز یان شین (دەگمەن)", "تا و هەوکردنی توند", "هەوکردنی برینی سووتاوی"] },
        en: { title: "Pseudomonas aeruginosa", desc: "A robust Gram-negative bacterium highly resistant to antibiotics. Causes UTIs and wound infections, primarily in immunocompromised patients.", symptoms: ["Blue-green tinted urine (rare)", "High fever and severe infection", "Burn wound infections"] },
        ar: { title: "الزائفة الزنجارية (Pseudomonas)", desc: "بكتيريا قوية مقاومة للمضادات الحيوية. تسبب التهابات المسالك البولية والجروح، خاصة لدى المرضى الذين يعانون من ضعف المناعة.", symptoms: ["بول ذو لون أخضر مزرق (نادر)", "حمى والتهاب شديد", "التهاب جروح الحروق"] }
    },
    {
        id: 4011,
        img: "img/pathology/enterococcus.png?v=2",
        ku: { title: "بەکتریای ئینتیرۆکۆکەس (Enterococcus faecalis)", desc: "بەکتریايەکی گۆییە کە لە ڕیخۆڵەکاندا دەژی، بەڵام ئەگەر بچێتە ناو کۆئەندامی میز دەبێتە هۆی هەوکردن. زۆرجار لە نەخۆشخانەکاندا دەگوازرێتەوە.", symptoms: ["ئازاری کاتی میزکردن", "ئازاری بەشی خوارەوەی پشت", "تای مامناوەند"] },
        en: { title: "Enterococcus faecalis", desc: "Gram-positive cocci normally found in the GI tract. If introduced to the urinary tract, it causes UTIs, frequently as a nosocomial infection.", symptoms: ["Painful urination", "Lower back pain", "Low-grade fever"] },
        ar: { title: "المكورات المعوية البرازية", desc: "بكتيريا كروية موجبة الجرام توجد طبيعياً في الأمعاء. إذا دخلت المسالك البولية تسبب التهابات، وغالباً ما تكون عدوى مستشفيات.", symptoms: ["ألم عند التبول", "ألم أسفل الظهر", "حمى خفيفة"] }
    },
    {
        id: 4012,
        img: "img/pathology/uricacid.png?v=2",
        ku: { title: "کریستاڵی یوریک ئەسید لە میزدا", desc: "لە ژێر میکرۆسکۆپدا وەک شێوەی ڕۆمبۆید (مەعین) یان گوڵێک دەردەکەون. زۆرییان نیشانەیە بۆ نەخۆشی دەردەپاشا (Gout) یان بەردی گورچیلە.", symptoms: ["ئازاری توندی جومگەکان (بەتایبەت پەنجە گەورەی قاچ)", "دروستبوونی بەردی گورچیلە", "میزی خەست"] },
        en: { title: "Uric Acid Crystals in Urine", desc: "Microscopically, they appear as diamond, rhomboid, or rosette shapes. High levels indicate gout or high protein diets, leading to kidney stones.", symptoms: ["Severe joint pain (especially big toe)", "Kidney stone formation", "Concentrated urine"] },
        ar: { title: "بلورات حمض اليوريك في البول", desc: "تحت المجهر تظهر بأشكال معينية أو وردية. ارتفاعها يشير إلى النقرس أو تكوّن حصوات الكلى.", symptoms: ["ألم شديد في المفاصل (خاصة إصبع القدم الكبير)", "تكون حصى الكلى", "بول مركز"] }
    },
    {
        id: 4013,
        img: "img/pathology/calcium.png?v=2",
        ku: { title: "کریستاڵی کالسیۆم ئۆکسالەیت", desc: "باوترین جۆری کریستاڵە لە میزدا کە شێوەیان وەک زەرفی نامەیە. زۆربوونەکەی هۆکاری سەرەکییە بۆ دروستبوونی بەردی گورچیلە.", symptoms: ["ئازاری توندی کەمەر و پشت", "خوێن لە میزدا (Hematuria)", "ئازار لە کاتی میزکردندا"] },
        en: { title: "Calcium Oxalate Crystals", desc: "The most common urine crystals, often appearing as small envelopes. They are the primary constituent of most kidney stones.", symptoms: ["Severe flank or back pain", "Blood in urine (Hematuria)", "Painful urination"] },
        ar: { title: "بلورات أكسالات الكالسيوم", desc: "أكثر بلورات البول شيوعاً وتظهر على شكل أظرف رسائل صغيرة. هي المكون الأساسي لمعظم حصوات الكلى.", symptoms: ["ألم شديد في الخاصرة والظهر", "دم في البول", "ألم عند التبول"] }
    },
    {
        id: 4014,
        img: "img/pathology/triple.png?v=2",
        ku: { title: "کریستاڵی فۆسفاتی سیانی (Triple Phosphate)", desc: "کریستاڵێکە شێوەی وەک سەری تابووتە لە ژێر میکرۆسکۆپدا. بەزۆری لەو کەسانەدا دەردەکەوێت کە تووشی هەوکردنی میز بوون بە بەکتریای Proteus.", symptoms: ["هەوکردنی بەردەوامی میز", "بەردی گەورەی گورچیلە (Struvite)", "میزێکی تفت (Alkaline)"] },
        en: { title: "Triple Phosphate Crystals", desc: "Microscopically appear as 'coffin-lid' shapes. They are associated with alkaline urine and UTIs caused by urea-splitting bacteria like Proteus.", symptoms: ["Recurrent UTIs", "Large staghorn kidney stones", "Highly alkaline urine"] },
        ar: { title: "بلورات الفوسفات الثلاثية", desc: "تظهر تحت المجهر بشكل 'أغطية توابيت'. ترتبط بالبول القلوي والتهابات البول الناتجة عن بكتيريا المتقلبة (Proteus).", symptoms: ["التهابات بول متكررة", "حصوات كلوية كبيرة", "بول قلوي بشدة"] }
    },
    {
        id: 4015,
        img: "img/pathology/rbccast.png?v=2",
        ku: { title: "کاستی خڕۆکە سوورەکان لە میزدا (RBC Casts)", desc: "پێکهاتەیەکی لوولەییە کە خڕۆکەی سووری خوێنی تێدایە. بینینی لە میزدا نیشانەیەکی مەترسیدارە و دەلالەت دەکات لە هەوکردنی شانەکانی گورچیلە (Glomerulonephritis).", symptoms: ["میزێکی ڕەنگ قاوەیی یان سوور", "بەرزی پەستانی خوێن", "ئاوسانی دەموچاو و قاچ"] },
        en: { title: "Red Blood Cell Casts", desc: "Cylindrical structures packed with RBCs. Their presence in urine is pathognomonic for glomerular damage (Glomerulonephritis).", symptoms: ["Cola or red-colored urine", "High blood pressure", "Swelling (Edema) of face and legs"] },
        ar: { title: "أسطوانات خلايا الدم الحمراء", desc: "هياكل أسطوانية مليئة بخلايا الدم الحمراء. وجودها في البول يعد علامة مؤكدة على تلف كبيبات الكلى.", symptoms: ["بول بلون الكولا أو أحمر", "ارتفاع ضغط الدم", "تورم الوجه والساقين"] }
    },
    {
        id: 4016,
        img: "img/pathology/wbccast.png?v=2",
        ku: { title: "کاستی خڕۆکە سپییەکان (WBC Casts)", desc: "پێکهاتەیەکی لوولەییە کە پڕە لە خڕۆکەی سپی خوێن. نیشانەیە بۆ هەوکردنی توندی گورچیلە (Pyelonephritis) و هاتنی بەکتریا بۆ ناو گورچیلەکان.", symptoms: ["تای بەرز و لەرز", "ئازاری کەمەر", "میزی لێڵ و هەبوونی کێم لە میزدا"] },
        en: { title: "White Blood Cell Casts", desc: "Casts filled with white blood cells. They typically indicate a kidney infection (Pyelonephritis) or interstitial nephritis.", symptoms: ["High fever and chills", "Flank pain", "Cloudy urine with pus"] },
        ar: { title: "أسطوانات خلايا الدم البيضاء", desc: "أسطوانات مليئة بخلايا الدم البيضاء. تشير عادة إلى التهاب حويضة الكلى أو التهاب الكلية الخلالي.", symptoms: ["حمى عالية وقشعريرة", "ألم في الخاصرة", "بول عكر يحتوي على قيح"] }
    },
    {
        id: 4017,
        img: "img/pathology/squamous.png?v=2",
        ku: { title: "خانەی پێستی لە میزدا (Squamous Epithelial Cells)", desc: "خانەی گەورەن کە لە بەشی دەرەوەی بۆری میزەوە دێن. هەبوونی بڕێکی کەم ئاساییە، بەڵام زۆرییان نیشانەی ئەوەیە نموونەی میزەکە باش وەرنەگیراوە.", symptoms: ["بەزۆری هیچ نیشانەیەکی نییە", "نیشانەی پیسبوونی نموونەی میزەکەیە بە پێست"] },
        en: { title: "Squamous Epithelial Cells", desc: "Large, flat cells originating from the lower urethra or vagina. A few are normal, but many indicate a poorly collected urine sample.", symptoms: ["Usually asymptomatic", "Indicates sample contamination"] },
        ar: { title: "الخلايا الحرشفية الظهارية", desc: "خلايا كبيرة مسطحة تأتي من أسفل مجرى البول أو المهبل. القليل منها طبيعي، لكن كثرتها تعني تلوث العينة.", symptoms: ["غالباً بدون أعراض", "تشير إلى تلوث عينة البول بالجلد"] }
    },
    {
        id: 4018,
        img: "img/pathology/transitional.png?v=2",
        ku: { title: "خانەی ناوەوەی میزڵدان (Transitional Cells)", desc: "خانەی شێوە بازنەیی یان هەرمێین کە دیواری میزڵدان دادەپۆشن. بینینیان بە ڕێژەیەکی زۆر لە میزدا ڕەنگە نیشانە بێت بۆ هەوکردن یان گرێی میزڵدان.", symptoms: ["ئازار لە کاتی میزکردن", "خوێن لە میزدا", "گۆڕانکاری لە ناوپۆشی میزڵدان"] },
        en: { title: "Transitional Epithelial Cells", desc: "Round or pear-shaped cells lining the bladder. High numbers in urine can indicate cystitis, catheter trauma, or a bladder neoplasm.", symptoms: ["Painful urination", "Blood in urine", "Bladder lining irritation"] },
        ar: { title: "الخلايا الانتقالية", desc: "خلايا دائرية أو كمثرية الشكل تبطن المثانة. رؤيتها بكثرة قد يشير إلى التهاب المثانة، صدمة القسطرة، أو أورام المثانة.", symptoms: ["ألم عند التبول", "دم في البول", "تهيج بطانة المثانة"] }
    },
    {
        id: 4019,
        img: "img/pathology/trichomonas.png?v=2",
        ku: { title: "پاراسایتی تڕایکۆمۆناس (Trichomonas vaginalis)", desc: "پاراسایتێکی کلکدار و جوڵاوە کە لە ڕێگەی سێکسەوە دەگوازرێتەوە. لە ژێر میکرۆسکۆپدا لەناو میزدا دەبینرێت و بە خێرایی دەجوڵێت.", symptoms: ["دەرچوونی شلەی زەرد یان سەوز لە ئەندامی زاوزێ", "خوران و سووتانەوەی ناوچەکە", "ئازار لە کاتی میزکردندا"] },
        en: { title: "Trichomonas vaginalis", desc: "A flagellated, motile protozoan parasite causing an STI. Under a microscope in a wet mount of urine, it is seen darting around rapidly.", symptoms: ["Yellow-green vaginal discharge", "Itching and burning", "Painful urination"] },
        ar: { title: "طفيلي المشعرات المهبلية", desc: "طفيلي سوطي متحرك يسبب عدوى منقولة جنسياً. تحت المجهر يمكن رؤيته يتحرك بسرعة في البول.", symptoms: ["إفرازات مهبلية صفراء-خضراء", "حكة وحرقة", "ألم عند التبول"] }
    },
    {
        id: 4020,
        img: "img/pathology/yeast.png?v=2",
        ku: { title: "کەڕوو لە میزدا (Yeast/Candida)", desc: "کەڕوو یان کەڕووی کاندیدا، لە ژێر میکرۆسکۆپدا وەک خانەی هێلکەیی بچووک دەردەکەون کە لق لێدەدەن. زیاتر لە نەخۆشانی شەکرە و هەوکردنی کەڕوویی دەردەکەون.", symptoms: ["خورانی زۆری ناوچەی زاوزێ", "دەرچوونی شلەی سپی مەیلەو پەنیر", "بەرزبوونەوەی شەکری خوێن"] },
        en: { title: "Yeast Cells (Candida) in Urine", desc: "Microscopically appear as oval budding cells or pseudohyphae. Common in diabetic patients or vaginal thrush contamination.", symptoms: ["Severe genital itching", "White cottage-cheese-like discharge", "High blood sugar association"] },
        ar: { title: "الخميرة (المبيضات) في البول", desc: "تظهر تحت المجهر كخلايا بيضاوية متبرعمة. شائعة لدى مرضى السكري أو بسبب عدوى فطرية مهبلية.", symptoms: ["حكة تناسلية شديدة", "إفرازات بيضاء سميكة", "ارتباط بارتفاع سكر الدم"] }
    },
    {
        id: 4021,
        img: "img/pathology/sperm.png?v=2",
        ku: { title: "سپێرم لە میزدا (Spermatozoa)", desc: "سپێرم بە شێوەی خانەی کلکدار لە میزدا دەبینرێت. بینینی لە پیاواندا زۆرجار ئاساییە، بەڵام هەندێک جار بەهۆی گەڕانەوەی ئاوەکەیە بۆ ناو میزڵدان لەبری دەرەوە (Retrograde ejaculation).", symptoms: ["زۆرجار ئاساییە و نیشانەی نییە", "کێشەی نەزۆکی لە باری گەڕانەوەی ئاو بۆ ناو میزڵدان"] },
        en: { title: "Spermatozoa in Urine", desc: "Tadpole-shaped cells with a head and a tail. Usually a normal finding in males, but can indicate retrograde ejaculation.", symptoms: ["Usually asymptomatic", "Infertility issues if caused by retrograde ejaculation"] },
        ar: { title: "الحيوانات المنوية في البول", desc: "خلايا ذات رأس وذيل تشبه الضفادع. وجودها لدى الرجال طبيعي غالباً، لكنه قد يشير إلى القذف المرتجع للمثانة.", symptoms: ["غالباً بدون أعراض", "مشاكل العقم إذا كان بسبب القذف المرتجع"] }
    },
    {
        id: 4022,
        img: "img/pathology/hyaline.png?v=2",
        ku: { title: "کاستی ڕوون (Hyaline Casts)", desc: "کاستێکی ڕوون و بێڕەنگە لە میزدا دروست دەبێت. زۆرجار ئاساییە، بەتایبەت دوای وەرزشکردن یان کەم ئاو خواردنەوە، بەڵام بڕی زۆری نیشانەی کێشەی گورچیلەیە.", symptoms: ["کەمی ئاوی جەستە (Dehydration)", "دوای وەرزشی قورس", "هەندێک جار نەخۆشی گورچیلە"] },
        en: { title: "Hyaline Casts", desc: "Transparent, colorless, cylinder-shaped protein structures. Often normal after strenuous exercise or dehydration, but large numbers can indicate kidney disease.", symptoms: ["Dehydration", "Post-strenuous exercise", "Sometimes renal disease"] },
        ar: { title: "الأسطوانات الشفافة (هيالين)", desc: "هياكل بروتينية أسطوانية شفافة وعديمة اللون. غالباً ما تكون طبيعية بعد التمرين المجهد أو الجفاف، لكن كثرتها تدل على أمراض الكلى.", symptoms: ["الجفاف", "بعد التمرين الشاق", "أحياناً أمراض الكلى"] }
    },
    {
        id: 4023,
        img: "img/pathology/granular.png?v=2",
        ku: { title: "کاستی دەنکدار (Granular Casts)", desc: "کاستێکی میزە کە پێکهاتەی دەنکداری تێدایە (ئەنجامی تێکشکانی خانەکان). هەبوونی لە میزدا بەزۆری نیشانەیە بۆ نەخۆشییەکانی گورچیلە و لەکارکەوتنی گورچیلە.", symptoms: ["لەکارکەوتنی کتوپڕی گورچیلە (AKI)", "کەمبوونەوەی میز", "ئاوسانی جەستە بەهۆی کۆبوونەوەی ئاو"] },
        en: { title: "Granular Casts", desc: "Casts containing granular material from the breakdown of cellular structures. Their presence in urine usually indicates significant renal tubular disease.", symptoms: ["Acute Kidney Injury (AKI)", "Decreased urine output", "Edema due to fluid retention"] },
        ar: { title: "الأسطوانات الحبيبية", desc: "أسطوانات تحتوي على مواد حبيبية ناتجة عن تحلل الخلايا. وجودها في البول يشير عادة إلى أمراض وتلف أنابيب الكلى.", symptoms: ["إصابة الكلى الحادة", "نقص إخراج البول", "وذمة بسبب احتباس السوائل"] }
    },
    {
        id: 4024,
        img: "img/pathology/salmonella.png?v=2",
        ku: { title: "بەکتریای سالمۆنێلا (Salmonella typhi)", desc: "بەکتریايەکی مەترسیدارە کە دەبێتە هۆی نەخۆشی تای گرانەتا (Typhoid). لە ڕێگەی ئاو و خۆراکی پیسەوە دەگوازرێتەوە و دەچێتە ناو ڕیخۆڵە و خوێن.", symptoms: ["تایەکی زۆر بەرز کە ڕۆژانە بەرزتر دەبێتەوە", "ئازاری سک و سکچوون", "پەڵەی سوور لەسەر سک"] },
        en: { title: "Salmonella typhi", desc: "A dangerous bacterium that causes Typhoid fever. It is transmitted via contaminated food and water, invading the intestines and bloodstream.", symptoms: ["High fever that increases daily", "Abdominal pain and diarrhea", "Rose spots on the abdomen"] },
        ar: { title: "السالمونيلا التيفية", desc: "بكتيريا خطيرة تسبب حمى التيفوئيد. تنتقل عن طريق الماء والطعام الملوث وتغزو الأمعاء ومجرى الدم.", symptoms: ["حمى شديدة تزداد يومياً", "ألم في البطن وإسهال", "بقع وردية على البطن"] }
    },
    {
        id: 4025,
        img: "img/pathology/streptococcus.png?v=2",
        ku: { title: "ستریپتۆکۆکەس (Streptococcus pyogenes)", desc: "بەکتریايەکی شێوە زنجیرەییە کە هۆکاری سەرەکییە بۆ هەوکردنی قورگ و لەوزەتێنەکان. ئەگەر چارەسەر نەکرێت، ڕەنگە ببێتە هۆی نەخۆشی ڕۆماتیزمەی دڵ.", symptoms: ["ئازاری توندی قورگ", "قووتدانی بەئازار", "ئاوسانی لیمفەگرێکانی مل"] },
        en: { title: "Streptococcus pyogenes", desc: "A chain-like bacterium that is the leading cause of strep throat and tonsillitis. If untreated, it can lead to Rheumatic heart disease.", symptoms: ["Severe sore throat", "Painful swallowing", "Swollen neck lymph nodes"] },
        ar: { title: "المكورات العقدية المقيحة", desc: "بكتيريا على شكل سلاسل تعد السبب الرئيسي لالتهاب الحلق واللوزتين. إهمال علاجها قد يؤدي إلى روماتيزم القلب.", symptoms: ["ألم شديد في الحلق", "صعوبة وألم عند البلع", "تورم الغدد الليمفاوية في الرقبة"] }
    },
    {
        id: 4026,
        img: "img/pathology/h_pylori.png?v=2",
        ku: { title: "بەکتریای گەدە (Helicobacter pylori)", desc: "بەکتریايەکی مارپێچییە کە لەناو پەرژینی گەدەدا دەژی. هۆکاری سەرەکییە بۆ برینی گەدە و دوانزەگرێ، هەروەها دڵەکزێ.", symptoms: ["ئازار و کزانەوەی گەدە", "دڵتێکەڵهاتن و باکردنی سک", "برینی گەدە یان خوێنبەربوونی گەدە"] },
        en: { title: "Helicobacter pylori", desc: "A spiral-shaped bacterium that lives in the stomach lining. It is the main cause of gastric and duodenal ulcers.", symptoms: ["Burning stomach pain", "Nausea and bloating", "Stomach ulcers or bleeding"] },
        ar: { title: "جرثومة المعدة (جرثومة الملوية البوابية)", desc: "بكتيريا حلزونية تعيش في بطانة المعدة. هي السبب الرئيسي لقرحة المعدة والاثني عشر وحرقة المعدة.", symptoms: ["ألم وحرقة في المعدة", "غثيان وانتفاخ", "قرحة أو نزيف في المعدة"] }
    },
    {
        id: 4027,
        img: "img/pathology/gonorrhoeae.png?v=2",
        ku: { title: "نەیسیریا (Neisseria gonorrhoeae)", desc: "بەکتریایەکی جووت گۆییە کە دەبێتە هۆی نەخۆشی سوزەنک (Gonorrhea). ئەم نەخۆشییە لە ڕێگەی سێکسەوە دەگوازرێتەوە و دەبێتە هۆی هەوکردنی بۆری میز و زاوزێ.", symptoms: ["دەرچوونی کێمی سپی یان زەرد لە ئەندامی زاوزێ", "سووتانەوەی توند لە کاتی میزکردن", "ئازاری جومگەکان ئەگەر بڵاوببێتەوە"] },
        en: { title: "Neisseria gonorrhoeae", desc: "A diplococcus bacterium that causes the STI Gonorrhea. It infects the mucous membranes of the reproductive and urinary tracts.", symptoms: ["Thick yellow or white discharge from genitals", "Severe burning during urination", "Joint pain if disseminated"] },
        ar: { title: "النيسرية البنية", desc: "بكتيريا مكورة مزدوجة تسبب مرض السيلان. ينتقل عبر الاتصال الجنسي ويسبب التهاب المسالك البولية والتناسلية.", symptoms: ["إفرازات قيحية بيضاء أو صفراء من الأعضاء التناسلية", "حرقة شديدة عند التبول", "ألم المفاصل إذا انتشرت العدوى"] }
    },
    {
        id: 4028,
        img: "img/pathology/treponema.png?v=2",
        ku: { title: "تریپۆنیما (Treponema pallidum)", desc: "بەکتریايەکی شێوە سپرینگ یان مارپێچییە کە هۆکاری نەخۆشی زوهرییە (Syphilis). ئەم نەخۆشییە ئەگەر چارەسەر نەکرێت دەبێتە هۆی زیان گەیاندن بە مێشک و دڵ.", symptoms: ["دروستبوونی برینی بێ ئازار لەسەر ئەندامی زاوزێ (قۆناغی یەکەم)", "پەڵەی پێست و ڕووتانەوەی قژ (قۆناغی دووەم)", "تێکچوونی دەمار و دڵ (قۆناغی سێیەم)"] },
        en: { title: "Treponema pallidum", desc: "A spirochete bacterium that causes Syphilis. If left untreated, it can cause severe long-term damage to the brain and heart.", symptoms: ["Painless sore on genitals (Chancre - Stage 1)", "Skin rash and hair loss (Stage 2)", "Neurological and cardiac damage (Stage 3)"] },
        ar: { title: "اللولبية الشاحبة (Treponema pallidum)", desc: "بكتيريا لولبية الشكل تسبب مرض الزهري. إذا لم تُعالج، قد تسبب أضراراً طويلة الأمد للدماغ والقلب.", symptoms: ["قرحة غير مؤلمة على الأعضاء التناسلية (المرحلة الأولى)", "طفح جلدي وتساقط الشعر (المرحلة الثانية)", "تلف عصبي وقلبي (المرحلة الثالثة)"] }
    }
];

if (typeof window !== 'undefined') {
    window.pathologyData = pathologyData;
}
