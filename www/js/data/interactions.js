const interactionsData = [
    {
        id: "int_01",
        drug1: "Aspirin",
        drug2: "Warfarin",
        severity: "danger", // danger, caution, safe
        ku: "کارلێکێکی زۆر مەترسیدار! هەردوو دەرمانەکە خوێن ڕوون دەکەنەوە، خواردنیان پێکەوە مەترسی خوێنبەربوونی ناوەکی و دەرەکی بە ڕێژەیەکی زۆر بەرز دەکاتەوە.",
        en: "Highly dangerous interaction! Both medications thin the blood. Taking them together significantly increases the risk of severe internal and external bleeding.",
        ar: "تفاعل خطير جداً! كلا الدواءين يسببان سيولة الدم. تناولهما معاً يزيد بشكل كبير من خطر النزيف الداخلي والخارجي."
    },
    {
        id: "int_02",
        drug1: "Aspirin",
        drug2: "Ibuprofen",
        severity: "caution",
        ku: "ئاگاداری! بەکارهێنانیان پێکەوە مەترسی برینی گەدە و خوێنبەربوونی گەدە زیاد دەکات، وە لەوانەیە کاریگەری ئەسپرین بۆ پاراستنی دڵ کەم بکاتەوە.",
        en: "Caution! Using them together increases the risk of stomach ulcers and bleeding, and Ibuprofen may reduce Aspirin's heart-protecting effects.",
        ar: "تحذير! استخدامهما معاً يزيد من خطر قرحة ونزيف المعدة، وقد يقلل الإيبوبروفين من تأثير الأسبرين الواقي للقلب."
    },
    {
        id: "int_03",
        drug1: "Paracetamol",
        drug2: "Ibuprofen",
        severity: "safe",
        ku: "سەلامەتە. زۆرجار پێکەوە یان بە نۆرە بەکاردێن بۆ دابەزاندنی تا و کەمکردنەوەی ئازار کە دەرمانێکیان بە تەنیا کاریگەری نەبێت.",
        en: "Safe to combine. They are often used together or alternated to manage pain and high fever when one drug alone is insufficient.",
        ar: "آمن. غالباً ما يستخدمان معاً أو بالتناوب لخفض الحرارة وتخفيف الألم عندما لا يكفي دواء واحد."
    },
    {
        id: "int_04",
        drug1: "Ciprofloxacin",
        drug2: "Iron Supplements",
        severity: "caution",
        ku: "ئاگاداری! حەبی ئاسن ڕێگری دەکات لە مژینی ئەنتی بایۆتیکەکە (سیپرۆفلاکساسین) لەلایەن جەستەوە. دەبێت لایەنی کەم ٢ بۆ ٤ کاتژمێر نێوانیان هەبێت.",
        en: "Caution! Iron supplements prevent the body from properly absorbing the antibiotic. They should be taken at least 2 to 4 hours apart.",
        ar: "تحذير! تمنع مكملات الحديد الجسم من امتصاص المضاد الحيوي بشكل صحيح. يجب أن يؤخذا بفارق ساعتين إلى 4 ساعات على الأقل."
    },
    {
        id: "int_05",
        drug1: "Sildenafil (Viagra)",
        drug2: "Nitroglycerin",
        severity: "danger",
        ku: "مەترسی کوشندە! بە هیچ شێوەیەک نابێت پێکەوە بخورێن چونکە دەبنە هۆی دابەزینی زۆر خێرای پەستانی خوێن (زەخت) کە ڕەنگە ببێتە هۆی مردن.",
        en: "Fatal Danger! They must NEVER be taken together as they can cause a severe, life-threatening drop in blood pressure.",
        ar: "خطر قاتل! يجب ألا يؤخذا معاً أبداً لأنهما يسببان انخفاضاً حاداً ومهدداً للحياة في ضغط الدم."
    },
    {
        id: "int_06",
        drug1: "Atorvastatin",
        drug2: "Grapefruit (شەربەتی سندی)",
        severity: "danger",
        ku: "مەترسیدار! شەربەتی سندی (گرەیپ فروت) ڕێگری دەکات لە تێکشکاندنی دەرمانەکە لە جگەردا، ئەمەش دەبێتە هۆی کۆبوونەوەی دەرمانەکە لە خوێندا و وێرانکردنی ماسولکەکان.",
        en: "Dangerous! Grapefruit juice blocks the enzyme that breaks down the drug in the liver, leading to toxic levels in the blood and severe muscle damage.",
        ar: "خطير! عصير الجريب فروت يمنع تكسير الدواء في الكبد، مما يؤدي إلى تراكمه في الدم وتدمير العضلات."
    },
    {
        id: "int_07",
        drug1: "Amoxicillin",
        drug2: "Clavulanic Acid",
        severity: "safe",
        ku: "سەلامەتە و پێویستە. ئەم دوو دەرمانە بەتەواوی پێکەوە گونجاون و یەکتر بەهێز دەکەن (وەک لە دەرمانی ئۆگمێنتین).",
        en: "Safe and Synergistic. These two are perfectly combined to enhance each other's antibacterial effects (e.g., Augmentin).",
        ar: "آمن وفعال جداً. هذان الدواءان ممتازان معاً ويعززان مفعول بعضهما البعض (مثل دواء أوجمنتين)."
    },
    {
        id: "int_08",
        drug1: "Spironolactone",
        drug2: "Lisinopril",
        severity: "caution",
        ku: "ئاگاداری! هەردوو دەرمانەکە ڕێژەی پۆتاسیۆم لە خوێندا زیاد دەکەن، ئەگەر زۆر بەرز بێتەوە ڕەنگە کێشەی مەترسیدار بۆ ترپەی دڵ دروست بکات. تەنها لەژێر چاودێری پزیشک بێت.",
        en: "Caution! Both drugs increase blood potassium levels. If levels get too high, it can cause dangerous irregular heartbeats. Only use under medical supervision.",
        ar: "تحذير! كلا الدواءين يرفعان نسبة البوتاسيوم في الدم. إذا ارتفعت النسبة جداً قد تسبب مشاكل خطيرة في نبض القلب. يستخدم تحت إشراف طبي فقط."
    },
    {
        id: "int_09",
        drug1: "Metronidazole (Flagyl)",
        drug2: "Alcohol (کحول)",
        severity: "danger",
        ku: "زۆر مەترسیدار! خواردنەوەی کحول لەگەڵ فلاجیل دەبێتە هۆی دڵتێکچوونێکی زۆر توند، ڕشانەوە، سەرئێشە، و خێرا لێدانی دڵ. دەبێت تا ٤٨ کاتژمێر دوای دەرمانەکەش کحول نەخورێتەوە.",
        en: "Highly Dangerous! Mixing alcohol with Metronidazole causes a severe reaction including intense nausea, vomiting, headache, and rapid heartbeat. Avoid alcohol until 48 hours after the last dose.",
        ar: "خطير جداً! شرب الكحول مع الفلاجيل يسبب تفاعلاً عنيفاً يشمل غثيان شديد، قيء، صداع، وتسارع ضربات القلب. يجب تجنب الكحول حتى 48 ساعة بعد آخر جرعة."
    },
    {
        id: "int_10",
        drug1: "Omeprazole",
        drug2: "Clopidogrel",
        severity: "caution",
        ku: "ئاگاداری! ئۆمێپرازۆڵ (حەبی گەدە) کاریگەری کلۆپیدۆگرێل (حەبی ڕوونكەرەوەی خوێن) کەم دەکاتەوە، کە ڕەنگە مەترسی جەڵتە زیاد بکات. پزیشک ڕەنگە جۆرێکی تری حەبی گەدە بنووسێت.",
        en: "Caution! Omeprazole reduces the effectiveness of Clopidogrel (a blood thinner), potentially increasing the risk of heart attacks. Doctors may suggest a different stomach protector.",
        ar: "تحذير! الأوميبرازول يقلل من فعالية الكلوبيدوغريل (مسيل الدم)، مما قد يزيد من خطر الجلطات. قد يصف الطبيب نوعاً آخر من أدوية المعدة."
    },
    {
        id: "int_11",
        drug1: "Levothyroxine",
        drug2: "Calcium Supplements",
        severity: "caution",
        ku: "ئاگاداری! کالیسیۆم ڕێگری دەکات لە مژینی حەبی غودە (لیڤۆسایرۆکسین). دەبێت لایەنی کەم ٤ کاتژمێر نێوانیان هەبێت.",
        en: "Caution! Calcium prevents the absorption of the thyroid hormone pill. They must be taken at least 4 hours apart.",
        ar: "تحذير! الكالسيوم يمنع امتصاص حبوب الغدة الدرقية. يجب أن يفصل بينهما 4 ساعات على الأقل."
    },
    {
        id: "int_12",
        drug1: "Tramadol",
        drug2: "Fluoxetine",
        severity: "danger",
        ku: "مەترسیدار! بەکارهێنانی ئەم ئازارشکێنە لەگەڵ حەبی خەمۆکی ڕەنگە ببێتە هۆی (نیشانەکانی سیرۆتۆنین) کە بریتییە لە لەرز، سەرلێشێواوی، تا، و ئەگەر زۆر بێت دەبێتە هۆی گیانلەدەستدان.",
        en: "Dangerous! Mixing this painkiller with the antidepressant can cause 'Serotonin Syndrome', leading to shivering, confusion, fever, and potentially death.",
        ar: "خطير! مزج مسكن الألم هذا مع مضاد الاكتئاب قد يسبب 'متلازمة السيروتونين'، والتي تؤدي إلى رجفة، ارتباك، حمى، وقد تصل للوفاة."
    },
    {
        id: "int_13",
        drug1: "Paracetamol",
        drug2: "Alcohol (کحول)",
        severity: "danger",
        ku: "مەترسیدار! خواردنی پاراسیتامۆڵ لەگەڵ بڕێکی زۆر لە کحول مەترسی وێرانبوونی جگەر بە ڕێژەیەکی زۆر مەترسیدار زیاد دەکات.",
        en: "Dangerous! Taking Paracetamol with large amounts of alcohol significantly increases the risk of severe and potentially fatal liver damage.",
        ar: "خطير! تناول الباراسيتامول مع كميات كبيرة من الكحول يزيد بشكل كبير من خطر تلف الكبد الحاد والمميت."
    },
    {
        id: "int_14",
        drug1: "Lisinopril",
        drug2: "Ibuprofen",
        severity: "caution",
        ku: "ئاگاداری! پرۆفین کاریگەری حەبی زەختەکە (لیسینۆپریڵ) کەم دەکاتەوە، وە ئەگەر زۆر پێکەوە بخورێن ڕەنگە کێشە بۆ گورچیلەکان دروست بکەن.",
        en: "Caution! Ibuprofen reduces the blood-pressure-lowering effect of Lisinopril, and taking them together frequently can harm the kidneys.",
        ar: "تحذير! الإيبوبروفين يقلل من تأثير دواء الضغط، وتناولهما معاً بكثرة قد يسبب ضرراً للكلى."
    },
    {
        id: "int_15",
        drug1: "Warfarin",
        drug2: "Vitamin K",
        severity: "danger",
        ku: "مەترسیدار! ڤیتامین K ڕاستەوخۆ دژی حەبی وارفارین (ڕوونکەرەوەی خوێن) کاردەکات و خوێن خەست دەکاتەوە. هەرگیز پێکەوە بەبێ چاودێری مەیخۆ.",
        en: "Dangerous! Vitamin K directly opposes the blood-thinning effect of Warfarin. Never take them together without strict medical supervision.",
        ar: "خطير! فيتامين K يعاكس مباشرة مفعول الوارفارين (مسيل الدم). لا تتناولهما معاً أبداً بدون إشراف طبي دقيق."
    }
];

if (typeof window !== 'undefined') {
    window.interactionsData = interactionsData;
}
