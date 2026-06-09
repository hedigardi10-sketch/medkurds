const poisoningData = [
    {
        id: 2001,
        ku: { 
            title: "ژەهراویبوون بە سپیکەرەوە (Bleach)", 
            desc: "خواردنی ماددەی سپیکەرەوە یان شووشتنی کەلوپەل کە دەبێتە هۆی سووتانی قوڕگ و گەدە.", 
            symptoms: ["ئازاری توند لە قوڕگ", "ڕشانەوە", "سەختی لە هەناسەدان", "سووربوونەوەی دەم"], 
            treatment: ["هەرگیز هەوڵ مەدە نەخۆشەکە بڕشێتەوە", "دەم و لێوی بە ئاو بشۆ", "بە پەلە بیگەیەنە نەخۆشخانە"], 
            advice: "ماددە پاککەرەوەکان لە شوێنی بەرز و دوور لە دەستی منداڵان دابنێ." 
        },
        en: { 
            title: "Bleach Poisoning", 
            desc: "Ingestion of household bleach which causes chemical burns to the throat and stomach.", 
            symptoms: ["Severe throat pain", "Vomiting", "Difficulty breathing", "Oral redness/burns"], 
            treatment: ["Do NOT induce vomiting", "Rinse mouth and lips with water", "Seek emergency medical help immediately"], 
            advice: "Store cleaning supplies in high, locked cabinets away from children." 
        },
        ar: { 
            title: "التسمم بالمبيض (الكلور)", 
            desc: "ابتلاع مادة المبيض مما يسبب حروقاً كيميائية في الحلق والمعدة.", 
            symptoms: ["ألم شديد في الحلق", "قيء", "صعوبة في التنفس", "احمرار أو حروق في الفم"], 
            treatment: ["لا تحاول تحريض القيء أبداً", "اغسل الفم والشفتين بالماء", "انقله للمستشفى فوراً"], 
            advice: "احفظ المنظفات في أماكن عالية وبعيدة عن متناول الأطفال." 
        }
    },
    {
        id: 2002,
        ku: { 
            title: "ژەهراویبوون بە گازی یەکەم ئۆکسیدی کاربۆن", 
            desc: "هەڵمژینی گازی بێ بۆن و بێ ڕەنگ کە لە سۆپا و مۆلیدە و ئۆتۆمبێلەوە دەردەچێت.", 
            symptoms: ["سەرئێشە", "گێژبوون", "هێڵنجدان", "بێهێزی و بێهۆشبوون"], 
            treatment: ["خێرا نەخۆشەکە بەرە دەرەوە بۆ هەوای پاک", "پەیوەندی بە فریاکەوتن بکە", "پێدانی ئۆکسجینی چڕ"], 
            advice: "سۆپا و مۆلیدە لە شوێنی داخراو بەکارمەهێنە و دڵنیابە لە هەواگۆڕکێ." 
        },
        en: { 
            title: "Carbon Monoxide Poisoning", 
            desc: "Inhaling odorless, colorless gas from heaters, generators, or car exhausts.", 
            symptoms: ["Headache", "Dizziness", "Nausea", "Weakness and loss of consciousness"], 
            treatment: ["Move the person to fresh air immediately", "Call emergency services", "Administer high-flow oxygen"], 
            advice: "Never use generators or heaters in enclosed spaces; ensure proper ventilation." 
        },
        ar: { 
            title: "التسمم بأول أكسيد الكربون", 
            desc: "استنشاق غاز عديم اللون والرائحة ينبعث من المدافئ أو المولدات.", 
            symptoms: ["صداع", "دوار", "غثيان", "ضعف وفقدان الوعي"], 
            treatment: ["انقل الشخص للهواء الطلق فوراً", "اتصل بالإسعاف", "إعطاء أكسجين بتركيز عالٍ"], 
            advice: "لا تستخدم المولدات أو المدافئ في أماكن مغلقة؛ تأكد من التهوية الجيدة." 
        }
    },
    {
        id: 2003,
        ku: { 
            title: "ژەهراویبوون بە پاراسیتامۆڵ (Paracetamol)", 
            desc: "خواردنی بڕێکی زۆر لە دەرمانی پاراسیتامۆڵ کە دەبێتە هۆی تێکچوونی جگەر.", 
            symptoms: ["هێڵنجدان و ڕشانەوە", "ئازار لە لای ڕاستی سەرەوەی سک", "زەردبوویی پێست و چاو (دوای چەند ڕۆژێک)"], 
            treatment: ["بردنی خێرا بۆ نەخۆشخانە", "بەکارهێنانی دژە ژەهر (N-acetylcysteine)"], 
            advice: "هەرگیز لە یەک کاتدا چەند جۆرە دەرمانێک مەخۆ کە پاراسیتامۆڵیان تێدایە." 
        },
        en: { 
            title: "Paracetamol Overdose", 
            desc: "Ingesting excessive amounts of paracetamol, leading to potential liver failure.", 
            symptoms: ["Nausea and vomiting", "Pain in the upper right abdomen", "Jaundice (yellowing of skin/eyes) later on"], 
            treatment: ["Immediate hospitalization", "Administration of the antidote (N-acetylcysteine)"], 
            advice: "Check labels; many medicines contain paracetamol, avoiding cumulative toxic doses." 
        },
        ar: { 
            title: "تسمم الباراسيتامول", 
            desc: "تناول كميات مفرطة من الباراسيتامول، مما قد يؤدي لفشل كبدي.", 
            symptoms: ["غثيان وقيء", "ألم في الجزء العلوي الأيمن من البطن", "يرقان (اصفرار الجلد والعين) لاحقاً"], 
            treatment: ["النقل الفوري للمستشفى", "إعطاء الترياق (N-acetylcysteine)"], 
            advice: "افحص ملصقات الأدوية؛ الكثير منها يحتوي على الباراسيتامول لتجنب الجرعات السامة." 
        }
    },
    {
        id: 2004,
        ku: { 
            title: "باتری دوگمەیی (Button Battery)", 
            desc: "قووتدانی باتری بچووک لەلایەن منداڵەوە کە دەبێتە هۆی کونکردنی سورێنچک.", 
            symptoms: ["کۆکە", "ئازاری سنگ", "سەختی لە قووتدان", "ڕشانەوەی خوێناوی"], 
            treatment: ["پێدانی کەوچکێک هەنگوین (ئەگەر تەمەنی سەروو ساڵێک بوو) تا دەگەیتە نەخۆشخانە", "بردنی خێرا بۆ تیشک و نەشتەرگەری"], 
            advice: "هەرگیز ڕێگە مەدە منداڵ یاری بە کۆنتڕۆڵ و کاتژمێر بکات کە باتری لێ دەبێتەوە." 
        },
        en: { 
            title: "Button Battery Ingestion", 
            desc: "Swallowing small lithium batteries which can burn through the esophagus in hours.", 
            symptoms: ["Coughing", "Chest pain", "Difficulty swallowing", "Bloody vomiting"], 
            treatment: ["Give 2 teaspoons of honey (if over age 1) while heading to the ER", "Immediate X-ray and surgical removal"], 
            advice: "Keep all devices with small batteries secured and away from young children." 
        },
        ar: { 
            title: "ابتلاع بطارية الزر", 
            desc: "ابتلاع البطاريات الصغيرة التي قد تسبب ثقباً في المريء خلال ساعات.", 
            symptoms: ["سعال", "ألم في الصدر", "صعوبة في البلع", "قيء دموي"], 
            treatment: ["إعطاء ملعقتين من العسل (إذا كان فوق سنة) أثناء التوجه للطوارئ", "أشعة فورية وإزالة جراحية"], 
            advice: "احفظ جميع الأجهزة التي تحتوي على بطاريات صغيرة مغلقة وبعيدة عن الأطفال." 
        }
    },
    {
        id: 2005,
        ku: { 
            title: "ژەهراویبوونی خۆراکی (Food Poisoning)", 
            desc: "خواردنی خۆراکی پیسبوو بە بەکتریا یان ژەهر.", 
            symptoms: ["سکچوونی توند", "ئازاری سک", "تای بەرز", "هێڵنجدان"], 
            treatment: ["خواردنەوەی شلەمەنی زۆر (ORS)", "پشوودان", "بەکارهێنانی دژە بەکتریا ئەگەر پزیشک بڕیار بدات"], 
            advice: "خۆراک بە باشی بکوڵێنە و سەوزە و میوە پێش خواردن بە باشی بشۆ." 
        },
        en: { 
            title: "Food Poisoning", 
            desc: "Consuming food contaminated with bacteria, viruses, or toxins.", 
            symptoms: ["Severe diarrhea", "Abdominal cramps", "Fever", "Nausea"], 
            treatment: ["Hydration with oral rehydration salts (ORS)", "Rest", "Antibiotics only if prescribed by a doctor"], 
            advice: "Cook food thoroughly and wash fruits and vegetables properly before eating." 
        },
        ar: { 
            title: "التسمم الغذائي", 
            desc: "تناول طعام ملوث بالبكتيريا أو الفيروسات أو السموم.", 
            symptoms: ["إسهال حاد", "تقلصات البطن", "حمى", "غثيان"], 
            treatment: ["شرب الكثير من السوائل (محلول الجفاف)", "الراحة", "مضادات حيوية فقط إذا قرر الطبيب"], 
            advice: "اطبخ الطعام جيداً واغسل الخضار والفواكه قبل تناولها." 
        }
    },
    {
        id: 2006,
        ku: { 
            title: "ژەهراویبوون بە نەوت یان گاز (Hydrocarbons)", 
            desc: "خواردنی ماددە سوتەمەنییەکان کە مەترسی بۆ سەر سییەکان دروست دەکات.", 
            symptoms: ["کۆکەی توند", "هەناسەبڕکێ", "بۆنی نەوت لە دەم", "گێژبوون"], 
            treatment: ["هەرگیز هەوڵ مەدە نەخۆشەکە بڕشێتەوە (چونکە دەچێتە ناو سییەکان)", "بەرەو هەوای پاکی ببە و بیگەیەنە نەخۆشخانە"], 
            advice: "نەوت و بەنزین لە ناو بوتڵی ئاو یان شەربەتدا دامەنێ." 
        },
        en: { 
            title: "Hydrocarbon Poisoning (Kerosene/Gas)", 
            desc: "Ingestion of fuels which poses a high risk of chemical pneumonia.", 
            symptoms: ["Severe coughing", "Shortness of breath", "Fuel odor on breath", "Dizziness"], 
            treatment: ["Do NOT induce vomiting (risk of aspiration into lungs)", "Move to fresh air and seek ER help"], 
            advice: "Never store fuels in drink bottles or food containers." 
        },
        ar: { 
            title: "التسمم بالمحروقات (النفط/البنزين)", 
            desc: "ابتلاع الوقود مما يشكل خطراً كبيراً على الرئتين.", 
            symptoms: ["سعال حاد", "ضيق تنفس", "رائحة الوقود في النفس", "دوار"], 
            treatment: ["لا تحاول تحريض القيء (خطر دخوله للرئتين)", "انقله للهواء الطلق ثم للمستشفى"], 
            advice: "لا تضع النفط أو البنزين في زجاجات المياه أو العصير." 
        }
    },
    {
        id: 2007,
        ku: { 
            title: "ژەهراویبوون بە دەرمانی مێروو (Pesticides)", 
            desc: "بەرکەوتن یان خواردنی ئەو ماددانەی بۆ لەناوبردنی مێروو و گیا بەکاردێن.", 
            symptoms: ["زیادبوونی لیک و فرمێسک", "تەسکبوونەوەی بیلبیلەی چاو", "سکچوون و میزی زۆر", "لەرزینی ماسولکە"], 
            treatment: ["لابردنی جلوبەرگی پیسبوو", "شوشتنی پێست بە سابوون و ئاو", "پێدانی ئاترۆپین (Atropine) لە نەخۆشخانە"], 
            advice: "لە کاتی ڕشتنی دەرمان دەستکێش و ماسک بەکاربهێنە." 
        },
        en: { 
            title: "Pesticide Poisoning", 
            desc: "Exposure to or ingestion of chemicals used for killing insects or weeds.", 
            symptoms: ["Excessive salivation/tearing", "Pinpoint pupils", "Diarrhea/Urination", "Muscle twitching"], 
            treatment: ["Remove contaminated clothing", "Wash skin with soap and water", "Hospital treatment with Atropine"], 
            advice: "Use gloves and masks when applying pesticides; store safely." 
        },
        ar: { 
            title: "التسمم بالمبيدات الحشرية", 
            desc: "التعرض أو ابتلاع المواد الكيميائية المستخدمة لقتل الحشرات.", 
            symptoms: ["زيادة اللعاب والدموع", "ضيق حدقة العين", "إسهال وتبول مفرط", "تشنج العضلات"], 
            treatment: ["إزالة الملابس الملوثة", "غسل الجلد بالماء والصابون", "العلاج بالأتروبين في المستشفى"], 
            advice: "استخدم القفازات والكمامات عند رش المبيدات؛ احفظها بأمان." 
        }
    },
    {
        id: 2008,
        ku: { 
            title: "ژەهراویبوون بە پاککەرەوەی قاپ (Detergents)", 
            desc: "قووتدانی سابوونی شل یان حەبی قاپشۆر کە دەبێتە هۆی هەوکردنی گەدە.", 
            symptoms: ["ڕشانەوە", "سکچوون", "ئازاری سک", "بڵق لە دەم"], 
            treatment: ["پێدانی بڕێکی کەم ئاو یان شیر", "چاودێریکردنی هەناسەدان", "بردنی بۆ نەخۆشخانە ئەگەر ڕشانەوەکە بەردەوام بوو"], 
            advice: "حەبی قاپشۆر چونکە ڕەنگی جوانە، منداڵ وەک شیرینی دەیبینێت، بۆیە لێیان بشارەوە." 
        },
        en: { 
            title: "Detergent Poisoning", 
            desc: "Swallowing liquid soap or dishwasher pods causing GI irritation.", 
            symptoms: ["Vomiting", "Diarrhea", "Abdominal pain", "Bubbles from mouth"], 
            treatment: ["Give a small amount of water or milk", "Monitor breathing", "Hospitalize if vomiting persists"], 
            advice: "Dishwasher pods look like candy to kids; keep them out of sight and reach." 
        },
        ar: { 
            title: "التسمم بالمنظفات", 
            desc: "ابتلاع الصابون السائل أو كبسولات غسالة الأطباق مما يسبب تهيجاً معوياً.", 
            symptoms: ["قيء", "إسهال", "ألم في البطن", "فقاعات من الفم"], 
            treatment: ["إعطاء كمية قليلة من الماء أو الحليب", "مراقبة التنفس", "النقل للمستشفى إذا استمر القيء"], 
            advice: "كبسولات الغسيل تشبه الحلوى للأطفال؛ ابعدها عن نظرهم ومتناولهم." 
        }
    },
    {
        id: 2009,
        ku: { 
            title: "ژەهراویبوون بە مەشروب (Alcohol)", 
            desc: "خواردنەوەی بڕێکی زۆر لە ئەلکهول کە دەبێتە هۆی وەستانی کۆئەندامی دەمار.", 
            symptoms: ["سەختی لە قسەکردن", "نەبوونی هاوسەنگی", "ساردبوونی پێست", "بێهۆشبوون"], 
            treatment: ["پێدانی شلەمەنی دەمار (IV Fluids)", "پاراستنی ڕێڕەوی هەناسە (ڕێگری لە خنکان بە ڕشانەوە)", "گەرمکردنەوەی جەستە"], 
            advice: "ژەهراویبوون بە ئەلکهول حاڵەتێکی مەترسیدارە و پێویستی بە چاودێری پزیشکی هەیە." 
        },
        en: { 
            title: "Alcohol Poisoning", 
            desc: "Consuming large amounts of alcohol in a short time, depressing the CNS.", 
            symptoms: ["Slurred speech", "Loss of coordination", "Cold/pale skin", "Unconsciousness"], 
            treatment: ["IV fluids for hydration", "Protect airway (prevent choking on vomit)", "Maintain body temperature"], 
            advice: "Alcohol poisoning is a life-threatening emergency requiring medical care." 
        },
        ar: { 
            title: "التسمم الكحولي", 
            desc: "تناول كميات كبيرة من الكحول، مما يثبط الجهاز العصبي.", 
            symptoms: ["ثقل اللسان", "فقدان التوازن", "برودة الجلد", "فقدان الوعي"], 
            treatment: ["سوائل وريدية", "حماية مجرى التنفس (منع الاختناق بالقيء)", "تدفئة الجسم"], 
            advice: "التسمم الكحولي حالة طارئة تهدد الحياة وتتطلب رعاية طبية." 
        }
    },
    {
        id: 2010,
        ku: { 
            title: "ژەهراویبوون بە نیکۆتینی شل", 
            desc: "قووتدانی نیکۆتینی ناو جگەرەی ئەلیکترۆنی (Vape) کە بۆ منداڵ زۆر کوشندەیە.", 
            symptoms: ["لێدانی خێرای دڵ", "لەرزین", "ڕشانەوە", "سەکتەی مێشک (لە بڕی زۆردا)"], 
            treatment: ["بردنی خێرا بۆ نەخۆشخانە", "شوشتنی گەدە یان بەکارهێنانی خەڵوزی چالاک"], 
            advice: "نیکۆتینی شل بۆنی خۆشە و منداڵ ڕادەکێشێت، هەمیشە سەری بوتڵەکە قفڵ بکە." 
        },
        en: { 
            title: "Liquid Nicotine Poisoning", 
            desc: "Swallowing e-cigarette liquid, which is highly toxic to small children.", 
            symptoms: ["Rapid heart rate", "Tremors", "Vomiting", "Seizures (in high doses)"], 
            treatment: ["Immediate emergency care", "Gastric lavage or activated charcoal"], 
            advice: "Liquid nicotine smells attractive to kids; always ensure bottles are child-proof." 
        },
        ar: { 
            title: "التسمم بالنيكوتين السائل", 
            desc: "ابتلاع سائل السيجارة الإلكترونية، وهو شديد السمية للأطفال.", 
            symptoms: ["تسارع ضربات القلب", "ارتعاش", "قيء", "تشنجات (في الجرعات العالية)"], 
            treatment: ["الرعاية الطارئة الفورية", "غسيل المعدة أو الفحم المنشط"], 
            advice: "النيكوتين السائل له رائحة جاذبة للأطفال؛ تأكد دائماً من إغلاق الزجاجات بإحکام." 
        }
    },
    {
        id: 2011,
        ku: { 
            title: "ژەهراویبوون بە تەواوکەری ئاسن (Iron Supplements)", 
            desc: "خواردنی بڕێکی زۆر لە حەبی ئاسن لەلایەن منداڵەوە کە دەبێتە هۆی تێکچوونی گەدە و جگەر.", 
            symptoms: ["ئازاری توند لە سک", "ڕشانەوەی خوێناوی", "سکچوونی ڕەش"], 
            treatment: ["بردنی خێرا بۆ نەخۆشخانە", "بەکارهێنانی دژە ژەهری تایبەت (Deferoxamine)"], 
            advice: "حەبی ئاسن وەک شیرینی دەردەکەوێت، بۆیە لە شوێنێک دایبنێ کە منداڵ پێی نەگات." 
        },
        en: { 
            title: "Iron Supplement Overdose", 
            desc: "Ingesting excessive iron tablets, a leading cause of fatal poisoning in children.", 
            symptoms: ["Severe stomach pain", "Bloody vomiting", "Black stool"], 
            treatment: ["Immediate emergency care", "Chelation therapy (Deferoxamine)"], 
            advice: "Iron pills often look like candy; store them in child-proof containers." 
        },
        ar: { 
            title: "تسمم مكملات الحديد", 
            desc: "تناول كميات كبيرة من حبوب الحديد، وهو سبب رئيسي للتسمم القاتل لدى الأطفال.", 
            symptoms: ["ألم شديد في البطن", "قيء دموي", "براز أسود"], 
            treatment: ["الرعاية الطارئة الفورية", "العلاج بالترياق (Deferoxamine)"], 
            advice: "حبوب الحديد تشبه الحلوى؛ احفظها في عبوات محكمة الإغلاق بعيداً عن الأطفال." 
        }
    },
    {
        id: 2012,
        ku: { 
            title: "دژە بەستن (Antifreeze)", 
            desc: "ماددەی (Ethylene glycol) کە لە سەیارەدا بەکاردێت و تامێکی شیرینی هەیە.", 
            symptoms: ["سەرخۆشبوون (بەبێ بۆنی ئەلکهول)", "گێژبوون", "وەستانی گورچیلە"], 
            treatment: ["گواستنەوەی خێرا بۆ نەخۆشخانە", "بەکارهێنانی دژە ژەهری تایبەت (Fomepizole)"], 
            advice: "هەرگیز ئەم ماددەیە لەناو قاپ و بوتڵی ئاساییدا جێ مەهێڵە." 
        },
        en: { 
            title: "Antifreeze Poisoning", 
            desc: "Ingesting ethylene glycol, which tastes sweet but is highly toxic to kidneys.", 
            symptoms: ["Appearing drunk (without alcohol odor)", "Dizziness", "Kidney failure"], 
            treatment: ["Immediate medical attention", "Antidote (Fomepizole or ethanol)"], 
            advice: "Keep automotive fluids in original containers and locked away." 
        },
        ar: { 
            title: "التسمم بمضاد التجمد", 
            desc: "ابتلاع الإيثيلين جليكول، الذي له طعم حلو ولكنه سام جداً للكلى.", 
            symptoms: ["ظهور أعراض السكر (بدون رائحة كحول)", "دوار", "فشل كلوي"], 
            treatment: ["العناية الطبية الفورية", "إعطاء الترياق (فومبيزول)"], 
            advice: "احفظ سوائل السيارات في عبواتها الأصلية وبعيداً عن متناول الجميع." 
        }
    },
    {
        id: 2013,
        ku: { 
            title: "دەرمانی نینۆک (Acetone)", 
            desc: "خواردنەوەی ماددەی لابەری بۆیەی نینۆک.", 
            symptoms: ["سەرئێشە", "سەختی لە هەناسەدان", "تامی شیرین لە دەم"], 
            treatment: ["هەوڵ مەدە بیڕشێنیتەوە", "بیدە دەست پزیشک بۆ شوشتنی گەدە"], 
            advice: "ماددە جوانکارییەکان مەخەرە بەردەستی منداڵانی خوار ٥ ساڵ." 
        },
        en: { 
            title: "Nail Polish Remover (Acetone)", 
            desc: "Ingestion of acetone-based nail polish removers.", 
            symptoms: ["Headache", "Difficulty breathing", "Sweet taste in mouth"], 
            treatment: ["Do NOT induce vomiting", "Hospital evaluation for gastric lavage if large amount"], 
            advice: "Keep cosmetics out of reach of children under 5." 
        },
        ar: { 
            title: "تسمم مزيل طلاء الأظافر (الأسيتون)", 
            desc: "ابتلاع مزيلات طلاء الأظافر التي تحتوي على الأسيتون.", 
            symptoms: ["صداع", "صعوبة في التنفس", "طعم حلو في الفم"], 
            treatment: ["لا تحاول تحريض القيء", "التقييم الطبي لغسيل المعدة إذا كانت الكمية كبيرة"], 
            advice: "احفظ مستحضرات التجميل بعيداً عن متناول الأطفال دون سن الخامسة." 
        }
    },
    {
        id: 2014,
        ku: { 
            title: "پاککەرەوەی دەست (Hand Sanitizer)", 
            desc: "خواردنی بڕێکی زۆر لە جێڵی دەست کە ڕێژەی ئەلکهولی زۆرە.", 
            symptoms: ["گێژبوونی زۆر", "دابەزینی شەکری خوێن", "ڕشانەوە"], 
            treatment: ["پێدانی ئاو یان شەربەت", "چاودێریکردنی ئاستی هۆشیاری"], 
            advice: "پاککەرەوەی دەست کە بۆنی میوەی لێدێت، منداڵ بۆ لای خۆی ڕادەکێشێت، ئاگاداربە." 
        },
        en: { 
            title: "Hand Sanitizer Ingestion", 
            desc: "Swallowing large amounts of alcohol-based hand sanitizer.", 
            symptoms: ["Confusion", "Low blood sugar", "Vomiting"], 
            treatment: ["Give water or juice", "Monitor alertness", "Seek medical advice if symptoms are severe"], 
            advice: "Scented sanitizers are attractive to kids; supervise their use." 
        },
        ar: { 
            title: "ابتلاع معقم اليدين", 
            desc: "تناول كميات كبيرة من معقم اليدين الذي يحتوي على نسبة عالية من الكحول.", 
            symptoms: ["ارتباك شديد", "انخفاض سكر الدم", "قيء"], 
            treatment: ["إعطاء الماء أو العصير", "مراقبة مستوى الوعي", "طلب المشورة الطبية إذا كانت الأعراض شديدة"], 
            advice: "المعقمات المعطرة تجذب الأطفال؛ أشرف على استخدامهم لها." 
        }
    },
    {
        id: 2015,
        ku: { 
            title: "دەرمانی مشک (Rat Poison)", 
            desc: "خواردنی دەرمانی مشک کە دەبێتە هۆی خوێنبەربوونی ناوخۆیی.", 
            symptoms: ["خوێنبەربوونی پووک یان لووت", "شینبوونەوەی پێست", "خوێن لە میزداد"], 
            treatment: ["پێدانی ڤیتامین (K1) لەژێر چاودێری پزیشک", "بە هیچ شێوەیەک بیری لێ مەکەرەوە لە ماڵەوە چارەسەری بکەیت"], 
            advice: "دەرمانی مشک لەو شوێنانە دابنێ کە منداڵ و ئاژەڵی ماڵی پێی ناگەن." 
        },
        en: { 
            title: "Rat Poison Ingestion", 
            desc: "Consuming rodenticides which interfere with blood clotting.", 
            symptoms: ["Bleeding gums or nose", "Bruising", "Blood in urine"], 
            treatment: ["Vitamin K1 therapy in a hospital", "Never attempt home treatment for rat poison"], 
            advice: "Place rodent baits in areas inaccessible to children and pets." 
        },
        ar: { 
            title: "تسمم سم الفئران", 
            desc: "تناول مبيدات القوارض التي تتداخل مع تجلط الدم.", 
            symptoms: ["نزيف اللثة أو الأنف", "كدمات", "دم في البول"], 
            treatment: ["العلاج بفيتامين K1 في المستشفى", "لا تحاول أبداً العلاج المنزلي لسم الفئران"], 
            advice: "ضع طعوم الفئران في أماكن لا يصل إليها الأطفال والحيوانات الأليفة." 
        }
    },
    {
        id: 2016,
        ku: { 
            title: "شوشتنی دەم (Mouthwash)", 
            desc: "خواردنەوەی بڕێکی زۆر لە شوشتنی دەم کە ئەلکهولی تێدایە.", 
            symptoms: ["گێژبوون", "ڕشانەوە", "سستی هەناسەدان"], 
            treatment: ["پێدانی ئاو", "چاودێریکردن", "ئەگەر بڕەکە زۆر بوو، بیگەیەنە فریاکەوتن"], 
            advice: "شوشتنی دەم لە شوێنێکی بەرز دابنێ." 
        },
        en: { 
            title: "Mouthwash Ingestion", 
            desc: "Drinking large quantities of alcohol-containing mouthwash.", 
            symptoms: ["Dizziness", "Vomiting", "Slow breathing"], 
            treatment: ["Give water", "Monitor for intoxication symptoms", "Seek ER if a large amount was swallowed"], 
            advice: "Store mouthwash in a high or locked cabinet." 
        },
        ar: { 
            title: "ابتلاع غسول الفم", 
            desc: "شرب كميات كبيرة من غسول الفم الذي يحتوي على الكحول.", 
            symptoms: ["دوار", "قيء", "بطء التنفس"], 
            treatment: ["إعطاء الماء", "مراقبة أعراض السكر", "التوجه للطوارئ إذا كانت الكمية كبيرة"], 
            advice: "احفظ غسول الفم في مكان عالٍ أو مغلق." 
        }
    },
    {
        id: 2017,
        ku: { 
            title: "زەیتی بنەڕەتی (Essential Oils)", 
            desc: "خواردنی زەیتی وەک (Tea Tree) یان (Eucalyptus) کە زۆر خەستن.", 
            symptoms: ["لەرزین", "گێژبوون", "سووتانی دەم"], 
            treatment: ["هەوڵ مەدە بیڕشێنیتەوە", "بیگەیەنە نەخۆشخانە بۆ پشکنینی سییەکان"], 
            advice: "زەیتی بنەڕەتی زۆر خەستن و نابێت قووت بدرێن." 
        },
        en: { 
            title: "Essential Oil Poisoning", 
            desc: "Ingestion of concentrated oils like Tea Tree or Eucalyptus.", 
            symptoms: ["Seizures", "Confusion", "Burning in the mouth"], 
            treatment: ["Do NOT induce vomiting", "Immediate medical check for lung aspiration risk"], 
            advice: "Essential oils are highly concentrated; keep them out of reach of children." 
        },
        ar: { 
            title: "التسمم بالزيوت العطرية", 
            desc: "ابتلاع زيوت مركزة مثل زيت الشاي أو اليوكاليبتوس.", 
            symptoms: ["تشنجات", "ارتباك", "حرقان في الفم"], 
            treatment: ["لا تحاول تحريض القيء", "فحص طبي فوري لخطر دخول الزيت للرئتين"], 
            advice: "الزيوت العطرية مركزة جداً؛ احفظها بعيداً عن متناول الأطفال." 
        }
    },
    {
        id: 2018,
        ku: { 
            title: "جیوە لە گەرمیپێوی شکاودا", 
            desc: "بەرکەوتن یان هەڵمژینی جیوە دوای شکانی گەرمیپێوی کۆن.", 
            symptoms: ["کۆکە", "ئازاری سنگ", "تامی کانزا لە دەم"], 
            treatment: ["بە دەست دەستی لێ مەدە", "بە کاغەزێکی ڕەق کۆی بکەرەوە و لە بوتڵێکدا دایبخە", "پەنجەرەکان بکەرەوە بۆ هەواگۆڕکێ"], 
            advice: "گەرمیپێوی دیجیتاڵ بەکاربهێنە لەبری جیوە." 
        },
        en: { 
            title: "Mercury Exposure (Broken Thermometer)", 
            desc: "Contact or inhalation of mercury from an old broken thermometer.", 
            symptoms: ["Coughing", "Chest pain", "Metallic taste in mouth"], 
            treatment: ["Do NOT touch with bare hands", "Scoop up with stiff paper and seal in a jar", "Ventilate the room"], 
            advice: "Switch to digital thermometers to avoid mercury risks." 
        },
        ar: { 
            title: "التعرض للزئبق (ميزان حرارة مكسور)", 
            desc: "ملامسة أو استنشاق الزئبق بعد كسر ميزان حرارة قديم.", 
            symptoms: ["سعال", "ألم في الصدر", "طعم معدني في الفم"], 
            treatment: ["لا تلمسه بيديك العاريتين", "اجمعه بقطعة ورق صلبة وضعه في جرة مغلقة", "قم بتهوية الغرفة"], 
            advice: "استخدم موازين الحرارة الرقمية لتجنب مخاطر الزئبق." 
        }
    },
    {
        id: 2019,
        ku: { 
            title: "پەین (Fertilizer)", 
            desc: "خواردنی پەینی گیای باخچە کە ماددەی نایتراتی تێدایە.", 
            symptoms: ["شینبوونەوەی لێو و نینۆک", "ڕشانەوە", "سەرئێشە"], 
            treatment: ["شوشتنی دەم", "بردنی بۆ نەخۆشخانە بۆ پشکنینی ئۆکسجین"], 
            advice: "دوای ڕشتنی پەین، ڕێگە مەدە منداڵ لەو شوێنە یاری بکات." 
        },
        en: { 
            title: "Fertilizer Ingestion", 
            desc: "Eating lawn or plant fertilizer containing nitrates.", 
            symptoms: ["Blue lips and fingernails", "Vomiting", "Headache"], 
            treatment: ["Rinse mouth", "Seek medical evaluation for oxygen levels"], 
            advice: "Keep children and pets away from recently fertilized areas." 
        },
        ar: { 
            title: "ابتلاع الأسمدة", 
            desc: "تناول أسمدة النباتات التي تحتوي على النترات.", 
            symptoms: ["ازرقاق الشفتين والأظافر", "قيء", "صداع"], 
            treatment: ["غسل الفم", "التوجه للمستشفى لفحص مستويات الأكسجين"], 
            advice: "ابعد الأطفال والحيوانات الأليفة عن المناطق المسمدة حديثاً." 
        }
    },
    {
        id: 2020,
        ku: { 
            title: "پاککەرەوەی فڕن (Oven Cleaner)", 
            desc: "ماددەی (Caustic soda) کە دەبێتە هۆی سووتانی توند.", 
            symptoms: ["ئازاری توند", "سەختی لە قووتدان", "برینی قوڵ لە دەم"], 
            treatment: ["بە هیچ شێوەیەک بیری لێ مەکەرەوە بیڕشێنیتەوە", "بە پەلە بیگەیەنە فریاکەوتن"], 
            advice: "ئەم ماددانە لە شوێنی زۆر پارێزراو دابنێ." 
        },
        en: { 
            title: "Oven Cleaner Poisoning", 
            desc: "Ingestion of caustic soda-based cleaners causing severe burns.", 
            symptoms: ["Severe pain", "Inability to swallow", "Deep oral ulcers"], 
            treatment: ["Do NOT induce vomiting", "Immediate emergency transport"], 
            advice: "Store caustic cleaners in a very secure, high location." 
        },
        ar: { 
            title: "التسمم بمنظف الأفران", 
            desc: "ابتلاع المنظفات التي تحتوي على الصودا الكاوية وتسبب حروقاً شديدة.", 
            symptoms: ["ألم شديد", "عدم القدرة على البلع", "قروح عميقة في الفم"], 
            treatment: ["لا تحاول تحريض القيء أبداً", "النقل الفوري للطوارئ"], 
            advice: "احفظ المنظفات الكاوية في مكان آمن جداً ومرتفع." 
        }
    },
    {
        id: 2021,
        ku: { 
            title: "چەسپی خێرا (Super Glue)", 
            desc: "لکان و داخستنی چاو یان دەم بەهۆی چەسپی بەهێزەوە.", 
            symptoms: ["لکان", "سووربوونەوە و ئازاری پێست"], 
            treatment: ["بەکارهێنانی ئاوی شلەتێن", "هەوڵ مەدە بە زۆر لێکی بکەیتەوە", "بەکارهێنانی ڤازلین یان ڕۆن بۆ نەرمکردنەوەی"], 
            advice: "چسپ لە شوێنێک دابنێ کە منداڵ دەستی پێی نەگات." 
        },
        en: { 
            title: "Super Glue Exposure", 
            desc: "Accidental bonding of skin, lips, or eyelids with cyanoacrylate.", 
            symptoms: ["Bonded tissue", "Skin irritation and pain"], 
            treatment: ["Use warm water soak", "Do NOT pull apart forcefully", "Apply petroleum jelly or oil to soften the bond"], 
            advice: "Store strong adhesives in a secure location away from children." 
        },
        ar: { 
            title: "التعرض للصمغ السريع (السوبر جلو)", 
            desc: "التصاق الجلد أو الشفاه أو الجفون بالصمغ القوي.", 
            symptoms: ["التصاق الأنسجة", "تهيج الجلد وألم"], 
            treatment: ["استخدم النقع بالماء الدافئ", "لا تحاول نزع الجلد بقوة", "استخدم الفازلين أو الزيت لتليين الالتصاق"], 
            advice: "احفظ المواد اللاصقة القوية في مكان آمن بعيداً عن الأطفال." 
        }
    },
    {
        id: 2022,
        ku: { 
            title: "سیلیکا جێڵ (Silica Gel)", 
            desc: "ئەو کیسە بچووکانەی لە ناو کارتۆنی پێڵاو و کەلوپەلدان بۆ وشککردنەوە.", 
            symptoms: ["زۆرجار ژەهراوی نییە", "مەترسی خنکانی هەیە ئەگەر منداڵ قووتى بدات"], 
            treatment: ["پێدانی کەمێک ئاو", "ئەگەر منداڵەکە دەخنکا، ڕێکاری خنکان ئەنجام بدە"], 
            advice: "ئەم کیسانە خێرا فڕێ بدە چونکە منداڵ ڕادەکێشێت." 
        },
        en: { 
            title: "Silica Gel Packets", 
            desc: "The small packets found in shoe boxes or electronics for moisture control.", 
            symptoms: ["Usually non-toxic", "Choking hazard for young children"], 
            treatment: ["Give a sip of water", "Perform choking first aid if the child is struggling to breathe"], 
            advice: "Discard these packets immediately after opening new products." 
        },
        ar: { 
            title: "أكياس السيليكا جل", 
            desc: "الأكياس الصغيرة الموجودة في صناديق الأحذية للتحكم في الرطوبة.", 
            symptoms: ["غير سامة عادة", "خطر الاختناق للأطفال الصغار"], 
            treatment: ["إعطاء رشفة من الماء", "إجراء الإسعاف الأولي للاختناق إذا كان الطفل يعاني"], 
            advice: "تخلص من هذه الأكياس فوراً بعد فتح المنتجات الجديدة." 
        }
    },
    {
        id: 2023,
        ku: { 
            title: "نەفتالین (Mothballs)", 
            desc: "خواردنی ئەو تۆپە بچووکانەی بۆ پاراستنی جلوبەرگ بەکاردێن.", 
            symptoms: ["ڕشانەوە", "سەرئێشە", "تێکچوونی خڕۆکە سوورەکان"], 
            treatment: ["بردنی خێرا بۆ نەخۆشخانە", "بەکارهێنانی خەڵوزی چالاک لەژێر چاودێری پزیشک"], 
            advice: "نەفتالین بۆنی خۆشە و منداڵ وەک شیرینی دەیبینێت، زۆر وریابە." 
        },
        en: { 
            title: "Mothball Ingestion", 
            desc: "Swallowing the small balls used to protect clothes from moths.", 
            symptoms: ["Vomiting", "Headache", "Red blood cell breakdown (hemolysis)"], 
            treatment: ["Immediate emergency care", "Activated charcoal in a clinical setting"], 
            advice: "Mothballs have a strong scent and look like candy to kids; use with extreme caution." 
        },
        ar: { 
            title: "ابتلاع النفتالين", 
            desc: "ابتلاع الكرات الصغيرة المستخدمة لحماية الملابس من العث.", 
            symptoms: ["قيء", "صداع", "تحلل خلايا الدم الحمراء"], 
            treatment: ["الرعاية الطارئة الفورية", "الفحم المنشط في المستشفى"], 
            advice: "النفتالين له رائحة قوية ويشبه الحلوى للأطفال؛ استخدمه بحذر شديد." 
        }
    },
    {
        id: 2024,
        ku: { 
            title: "دەرمانی بەسەرچوو (Expired Meds)", 
            desc: "خواردنی دەرمانێک کە ماوەکەی بەسەرچووە و ماددە کیمیاییەکانی گۆڕاون.", 
            symptoms: ["ئازاری گەدە", "ڕشانەوە", "کاردانەوەی هەستیاری (Allergy)"], 
            treatment: ["پێدانی ئاو", "بردنی بوتڵی دەرمانەکە بۆ پزیشک"], 
            advice: "هەموو ٦ مانگ جارێک دەرمانخانەی ماڵەوە بپشکنە و بەسەرچووەکان فڕێ بدە." 
        },
        en: { 
            title: "Expired Medication", 
            desc: "Consuming drugs past their expiration date, which may have changed chemically.", 
            symptoms: ["Stomach upset", "Vomiting", "Allergic reactions"], 
            treatment: ["Give water", "Bring the medication bottle to the doctor for evaluation"], 
            advice: "Check your home medicine cabinet every 6 months and discard expired items." 
        },
        ar: { 
            title: "الأدوية منتهية الصلاحية", 
            desc: "تناول أدوية بعد تاريخ انتهاء صلاحيتها، مما قد يغير تركيبتها الكيميائية.", 
            symptoms: ["اضطراب المعدة", "قيء", "ردود فعل تحسسية"], 
            treatment: ["إعطاء الماء", "إحضار عبوة الدواء للطبيب لتقييم الحالة"], 
            advice: "افحص خزانة الأدوية المنزلية كل 6 أشهر وتخلص من الأدوية المنتهية." 
        }
    },
    {
        id: 2025,
        ku: { 
            title: "قارچکی ژەهراوی (Toxic Mushrooms)", 
            desc: "خواردنی قارچکی کێوی کە ماددەی ژەهراوی کوشندەی تێدایە.", 
            symptoms: ["ئازاری توند لە سک", "سکچوونی زۆر", "وەستانی جگەر"], 
            treatment: ["بردنی خێرا بۆ نەخۆشخانە", "بردن یان وێنەگرتنی قارچکەکە بۆ ناسینەوەی"], 
            advice: "هەرگیز ئەو قارچکە مەخۆ کە لە سروشتدا دەیبینیت ئەگەر شارەزا نەبیت." 
        },
        en: { 
            title: "Poisonous Mushrooms", 
            desc: "Eating wild mushrooms containing lethal toxins.", 
            symptoms: ["Severe abdominal pain", "Profuse diarrhea", "Liver failure"], 
            treatment: ["Immediate emergency care", "Bring a sample or photo of the mushroom for identification"], 
            advice: "Never eat wild mushrooms unless you are an expert mycologist." 
        },
        ar: { 
            title: "الفطر السام", 
            desc: "تناول الفطر البري الذي يحتوي على سموم قاتلة.", 
            symptoms: ["ألم شديد في البطن", "إسهال غزير", "فشل كبدي"], 
            treatment: ["الرعاية الطارئة الفورية", "إحضار عينة أو صورة للفطر للتعرف عليه"], 
            advice: "لا تأكل الفطر البري أبداً ما لم تكن خبيراً متخصصاً." 
        }
    },
    {
        id: 2026,
        ku: { 
            title: "گیای (Oleander)", 
            desc: "هەموو بەشەکانی ئەم گیایە ژەهرە و کاریگەری لەسەر دڵ هەیە.", 
            symptoms: ["لێدانی ناڕێکی دڵ", "گێژبوون", "ڕشانەوە"], 
            treatment: ["بردنی خێرا بۆ نەخۆشخانە", "چاودێریکردنی لێدانی دڵ"], 
            advice: "ئەم گیایە لەو شوێنانە مەڕوێنە کە منداڵ یاری لێ دەکات." 
        },
        en: { 
            title: "Oleander Poisoning", 
            desc: "Every part of the oleander plant is toxic and affects the heart.", 
            symptoms: ["Irregular heartbeat", "Dizziness", "Vomiting"], 
            treatment: ["Immediate medical attention", "Heart monitoring and decontamination"], 
            advice: "Do not plant oleander in areas where children or pets play." 
        },
        ar: { 
            title: "التسمم بنبات الدفلة", 
            desc: "كل جزء من نبات الدفلة سام ويؤثر بشكل مباشر على القلب.", 
            symptoms: ["عدم انتظام ضربات القلب", "دوار", "قيء"], 
            treatment: ["العناية الطبية الفورية", "مراقبة القلب والتطهير المعوي"], 
            advice: "لا تزرع الدفلة في المناطق التي يلعب فيها الأطفال أو الحيوانات." 
        }
    },
    {
        id: 2027,
        ku: { 
            title: "قەترەی چاو (Eyedrops)", 
            desc: "قووتدانی قەترەی چاو کە ماددەی (Tetrahydrozoline)ی تێدایە.", 
            symptoms: ["خەواڵوویی توند", "دابەزینی پلەی گەرمی جەستە", "سستی لێدانی دڵ"], 
            treatment: ["بردنی بۆ نەخۆشخانە", "چاودێریکردنی هەناسەدان"], 
            advice: "قەترەی چاو تەنها بۆ بەکارهێنانی دەرەوەیە و خواردنی زۆر مەترسیدارە." 
        },
        en: { 
            title: "Eyedrop Ingestion", 
            desc: "Swallowing eyedrops containing tetrahydrozoline.", 
            symptoms: ["Extreme sleepiness", "Low body temperature", "Slow heart rate"], 
            treatment: ["Immediate medical evaluation", "Airway and heart rate monitoring"], 
            advice: "Eyedrops are for external use only; ingestion is highly dangerous." 
        },
        ar: { 
            title: "ابتلاع قطرات العين", 
            desc: "ابتلاع قطرات العين التي تحتوي على مادة تتراهيدروزولين.", 
            symptoms: ["نعاس شديد", "انخفاض حرارة الجسم", "بطء ضربات القلب"], 
            treatment: ["التقييم الطبي الفوري", "مراقبة التنفس ومعدل ضربات القلب"], 
            advice: "قطرات العين للاستعمال الخارجي فقط؛ بلعها خطر جداً." 
        }
    },
    {
        id: 2028,
        ku: { 
            title: "بۆیەی قژ (Hair Dye)", 
            desc: "خواردنی ماددەی بۆیەی قژ یان ئۆکسجین.", 
            symptoms: ["سووتانی دەم", "ئازاری گەدە", "ڕشانەوە"], 
            treatment: ["پێدانی ئاو یان شیر", "بردنی بۆ نەخۆشخانە بۆ پشکنینی ناوەوە"], 
            advice: "بۆیەی قژ لە شوێنێکی بەرز و پارێزراو دابنێ." 
        },
        en: { 
            title: "Hair Dye Poisoning", 
            desc: "Ingestion of hair dyes or developers.", 
            symptoms: ["Oral burns", "Stomach pain", "Vomiting"], 
            treatment: ["Give water or milk", "Seek medical attention for endoscopy if needed"], 
            advice: "Keep hair coloring products in a high, secure place." 
        },
        ar: { 
            title: "التسمم بصبغة الشعر", 
            desc: "ابتلاع صبغات الشعر أو المواد المؤكسدة.", 
            symptoms: ["حروق في الفم", "ألم في المعدة", "قيء"], 
            treatment: ["إعطاء الماء أو الحليب", "التوجه للمستشفى للفحص الداخلي"], 
            advice: "احفظ منتجات تلوين الشعر في مكان عالٍ وآمن." 
        }
    },
    {
        id: 2029,
        ku: { 
            title: "بۆنی خۆش (Perfume)", 
            desc: "خواردنەوەی بڕێکی زۆر لە بۆن و کۆڵۆنیا کە ئەلکهولی زۆرە.", 
            symptoms: ["گێژبوون", "سستی هەناسەدان", "ڕشانەوە"], 
            treatment: ["پێدانی ئاو", "چاودێریکردن", "بیگەیەنە نەخۆشخانە ئەگەر نیشانەکان توند بوون"], 
            advice: "بۆنی خۆش مەخەرە بەردەستی منداڵانی بچووک." 
        },
        en: { 
            title: "Perfume Ingestion", 
            desc: "Drinking large amounts of perfume or cologne containing high alcohol levels.", 
            symptoms: ["Dizziness", "Slow breathing", "Vomiting"], 
            treatment: ["Give water", "Monitor for intoxication", "Seek medical help if symptoms persist"], 
            advice: "Do not leave perfume bottles within reach of young children." 
        },
        ar: { 
            title: "ابتلاع العطر", 
            desc: "شرب كميات كبيرة من العطر أو الكولونيا التي تحتوي على نسبة عالية من الكحول.", 
            symptoms: ["دوار", "بطء التنفس", "قيء"], 
            treatment: ["إعطاء الماء", "مراقبة أعراض السكر", "طلب المساعدة الطبية إذا استمرت الأعراض"], 
            advice: "لا تترك زجاجات العطر في متناول الأطفال الصغار." 
        }
    },
    {
        id: 2030,
        ku: { 
            title: "مرەکەبی پێنووس (Ink)", 
            desc: "خواردنی مرەکەبی ناو پێنووس یان مارکەر.", 
            symptoms: ["زۆرجار ژەهراوی نییە بڕی کەم", "پەڵەی ڕەنگین لەسەر زمان و دەم"], 
            treatment: ["شوشتنی دەم بە ئاو", "چاودێریکردنی ڕشانەوە"], 
            advice: "مارکەرەکان لە منداڵانی بچووک دووربخەرەوە چونکە ڕەنگەکەی ڕایاندەکێشێت." 
        },
        en: { 
            title: "Ink Ingestion", 
            desc: "Consuming ink from pens or markers.", 
            symptoms: ["Usually non-toxic in small amounts", "Colorful stains in mouth"], 
            treatment: ["Rinse mouth with water", "Monitor for upset stomach"], 
            advice: "Keep markers away from toddlers; they are attracted to the colors." 
        },
        ar: { 
            title: "ابتلاع الحبر", 
            desc: "تناول الحبر من الأقلام أو أقلام التخطيط.", 
            symptoms: ["غير سام عادة بالكميات الصغيرة", "بقع ملونة في الفم"], 
            treatment: ["غسل الفم بالماء", "مراقبة اضطراب المعدة"], 
            advice: "ابعد أقلام التخطيط عن الأطفال الصغار لجاذبية ألوانها." 
        }
    }
];
