const veterinaryData = [
    {
        id: 1001,
        ku: { title: "نەخۆشی سەگی (Rabies)", desc: "نەخۆشییەکی ڤایرۆسی مەترسیدارە کە دەبێتە هۆی هەوکردنی مێشک و کۆئەندامی دەمار.", symptoms: ["گۆڕانی ڕەفتار", "گازگرتنی شتەکان", "زیادبوونی لیک", "بێتاقەتی و مەترسی لە ئاو"], treatment: ["هیچ چارەسەرێکی نییە دوای دەرکەوتنی نیشانەکان", "کوتان تاکە ڕێگەیە"], advice: "هەموو ساڵێک ئاژەڵە ماڵییەکانت بکووتە و لە ئاژەڵی کێوی دووریان بخەرەوە." },
        en: { title: "Rabies", desc: "A fatal viral disease affecting the brain and nervous system of mammals.", symptoms: ["Behavioral changes", "Aggression", "Excessive drooling", "Fear of water", "Paralysis"], treatment: ["No cure after symptoms appear", "Prevention is key"], advice: "Vaccinate pets annually and avoid contact with wild animals." },
        ar: { title: "داء الكلب (السعار)", desc: "مرض فيروسي قاتل يصيب الدماغ والجهاز العصبي للثدييات.", symptoms: ["تغيرات سلوكية", "عدوانية", "لعابة مفرطة", "خوف من الماء", "شلل"], treatment: ["لا يوجد علاج بعد ظهور الأعراض", "التطعيم هو الحل الوحيد"], advice: "قم بتطعيم حيواناتك الأليفة سنوياً وتجنب ملامسة الحيوانات البرية." }
    },
    {
        id: 1002,
        ku: { title: "پارڤۆ ڤایرۆسی سەگ (Parvovirus)", desc: "نەخۆشییەکی ڤایرۆسی زۆر گوازراوەیە کە تووشی گەدە و ڕیخۆڵەی سەگ دەبێت.", symptoms: ["ڕشانەوە", "سکچوونی خوێناوی توند", "بێهێزی", "لەدەستدانی ئارەزووی خواردن"], treatment: ["شلەمەنی دەمار", "دژە بەکتریا", "چاودێری چڕ لەلایەن پزیشکەوە"], advice: "کوتانی بەردەوام و پاکوخاوێنی شوێنی سەگەکە زۆر گرنگە." },
        en: { title: "Canine Parvovirus", desc: "A highly contagious viral disease that affects a dog's gastrointestinal tract.", symptoms: ["Vomiting", "Severe bloody diarrhea", "Lethargy", "Loss of appetite"], treatment: ["IV fluids", "Antibiotics", "Supportive intensive care"], advice: "Follow vaccination schedules and maintain strict hygiene." },
        ar: { title: "فيروس البارفو للكلاب", desc: "مرض فيروسي شديد العدوى يصيب الجهاز الهضمي للكلاب.", symptoms: ["قيء", "إسهال دموي حاد", "خمول", "فقدان الشهية"], treatment: ["سوائل وريدية", "مضادات حيوية", "رعاية طبية مكثفة"], advice: "التزم بجدول التطعيمات وحافظ على نظافة مكان الكلب." }
    },
    {
        id: 1003,
        ku: { title: "نەخۆشی تای سپی (FMD)", desc: "نەخۆشییەکی ڤایرۆسییە کە تووشی ئاژەڵی دەم و سم دەبێت (مانگا، مەڕ، بزن).", symptoms: ["دەرکەوتنی بڵق لە دەم و سەر سم", "زیادبوونی لیک", "شەقبوونی سم"], treatment: ["پاککردنەوەی برینەکان", "پێدانی دژە هەوکردن و شلەمەنی"], advice: "جیاکردنەوەی ئاژەڵی تووشبوو و کوتانی ئاژەڵە تەندروستەکان." },
        en: { title: "Foot and Mouth Disease (FMD)", desc: "A severe, highly contagious viral disease of livestock.", symptoms: ["Blisters on mouth and feet", "Excessive salivation", "Lameness"], treatment: ["Symptomatic care", "Wound cleaning", "Antibiotics for secondary infections"], advice: "Isolate infected animals and vaccinate the healthy herd." },
        ar: { title: "الحمى القلاعية", desc: "مرض فيروسي شديد العدوى يصيب الماشية (الأبقار، الأغنام، الماعز).", symptoms: ["بثور في الفم والقدمين", "لعابة مفرطة", "عرج"], treatment: ["علاج الأعراض", "تنظيف الجروح", "مضادات حيوية للعدوى الثانوية"], advice: "اعزل الحيوانات المصابة وقم بتطعيم القطيع السليم." }
    },
    {
        id: 1004,
        ku: { title: "تای ماڵتا (Brucellosis)", desc: "نەخۆشییەکی بەکتریاییە کە لە ئاژەڵەوە دەگوازرێتەوە بۆ مرۆڤ.", symptoms: ["لەبارچوونی بێچوو لە ئاژەڵ", "هەوکردنی گون", "کەمی بەرهەمی شیر"], treatment: ["دژە بەکتریای تایبەت بۆ ماوەیەکی درێژ"], advice: "بەکارهێنانی شیری کوڵاو و دوورکەوتنەوە لە بەرکەوتنی ڕاستەوخۆ لەگەڵ پاشماوەی ئاژەڵ." },
        en: { title: "Brucellosis", desc: "A bacterial disease that spreads from animals to humans.", symptoms: ["Abortion in animals", "Swollen testicles", "Reduced milk production"], treatment: ["Specific long-term antibiotic therapy"], advice: "Pasteurize milk and avoid unprotected contact with animal waste." },
        ar: { title: "الحمى المالطية (البروسيلا)", desc: "مرض بكتيري ينتقل من الحيوانات إلى البشر.", symptoms: ["الإجهاض في الحيوانات", "تورم الخصيتين", "انخفاض إنتاج الحليب"], treatment: ["مضادات حيوية مخصصة لفترة طويلة"], advice: "اغلِ الحليب جيداً وتجنب التلامس المباشر مع مخلفات الحيوانات." }
    },
    {
        id: 1005,
        ku: { title: "نەخۆشی دێستمپەری سەگ (Distemper)", desc: "نەخۆشییەکی ڤایرۆسییە کە تووشی کۆئەندامی هەناسە و هەرس و دەمار دەبێت.", symptoms: ["تای بەرز", "پژمین", "کێمی چاو و لووت", "لەرزینی ماسولکەکان"], treatment: ["چاودێری پاڵپشت", "کوتان بۆ ڕێگریکردن"], advice: "ئەم نەخۆشییە زۆر کوشندەیە، بۆیە کوتان لە تەمەنی بچووکەوە دەستپێبکە." },
        en: { title: "Canine Distemper", desc: "A viral disease affecting the respiratory, GI, and nervous systems.", symptoms: ["High fever", "Sneezing", "Eye/nasal discharge", "Muscle twitches"], treatment: ["Supportive care", "Isolation", "Prevention through vaccination"], advice: "Highly fatal; ensure early and consistent vaccination." },
        ar: { title: "حمى الكلاب (الديستمبر)", desc: "مرض فيروسي يصيب الجهاز التنفسي والهضمي والعصبي.", symptoms: ["حمى عالية", "عطس", "إفرازات من العين والأنف", "تشنجات عضلية"], treatment: ["رعاية داعمة", "عزل", "الوقاية من خلال التطعيم"], advice: "مرض خطير جداً؛ تأكد من التطعيم المبكر والمنتظم." }
    },
    {
        id: 1006,
        ku: { title: "هەوکردنی ڕیخۆڵەی پشیلە (Panleukopenia)", desc: "ڤایرۆسێکی زۆر مەترسیدارە کە تووشی پشیلە دەبێت و بەرگری کەمدەکاتەوە.", symptoms: ["ڕشانەوە", "سکچوونی توند", "بێتاقەتی زۆر", "نەنۆشینی ئاو"], treatment: ["شلەمەنی دەمار", "دژە بەکتریا", "ڤیتامینەکان"], advice: "پشیلەکەت لە ماڵەوە بهێڵەرەوە و هەموو ساڵێک بکووتە." },
        en: { title: "Feline Panleukopenia", desc: "A highly contagious viral disease in cats that lowers white blood cells.", symptoms: ["Vomiting", "Severe diarrhea", "Extreme lethargy", "Dehydration"], treatment: ["IV fluids", "Antibiotics", "Vitamin supplementation"], advice: "Keep cats indoors and ensure they are up to date on vaccines." },
        ar: { title: "نقص الكريات البيضاء للقطط", desc: "مرض فيروسي خطير يصيب القطط ويقلل من مناعتها.", symptoms: ["قيء", "إسهال حاد", "خمول شديد", "جفاف"], treatment: ["سوائل وريدية", "مضادات حيوية", "فيتامينات"], advice: "ابقِ قطتك في المنزل وتأكد من تطعيمها سنوياً." }
    },
    {
        id: 1007,
        ku: { title: "کوتانی سەگ و پشیلە", desc: "خشتەیەکی گرنگ بۆ پاراستنی ئاژەڵە ماڵییەکان لە نەخۆشییە کوشندەکان.", symptoms: [], treatment: ["کوتانی یەکەم لە تەمەنی ٦-٨ هەفتەیی", "ژەمی بەهێزکەر"], advice: "هەمیشە دەفتەری کوتانی ئاژەڵەکەت لای پزیشکی ڤێتەرنری نوێ بکەرەوە." },
        en: { title: "Pet Vaccination Schedule", desc: "A crucial schedule to protect pets from fatal diseases.", symptoms: [], treatment: ["First shots at 6-8 weeks", "Booster doses"], advice: "Always maintain your pet's vaccination record with a vet." },
        ar: { title: "جدول تطعيم الأليفة", desc: "جدول ضروري لحماية الحيوانات الأليفة من الأمراض القاتلة.", symptoms: [], treatment: ["أول جرعة في عمر 6-8 أسابيع", "جرعات منشطة"], advice: "حافظ دائماً على سجل تطعيمات أليفك لدى الطبيب البيطري." }
    },
    {
        id: 1008,
        ku: { title: "ژەهراویبوونی سەگ بە شوکولاتە", desc: "شوکۆلاتە ماددەی (Theobromine) تێدایە کە بۆ سەگ ژەهرە.", symptoms: ["ڕشانەوە", "لێدانی خێرای دڵ", "لەرزین", "ئەگەری مردن"], treatment: ["شوشتنی گەدە", "بەکارهێنانی خەڵوزی چالاک (Activated Charcoal)"], advice: "هەرگیز شوکولاتە مەدە بە سەگ، تەنانەت بڕێکی کەمیش." },
        en: { title: "Chocolate Poisoning in Dogs", desc: "Chocolate contains theobromine, which is toxic to dogs.", symptoms: ["Vomiting", "Rapid heart rate", "Tremors", "Potential death"], treatment: ["Inducing vomiting", "Using activated charcoal by a vet"], advice: "Never give chocolate to dogs, even in small amounts." },
        ar: { title: "تسمم الكلاب بالشوكولاتة", desc: "تحتوي الشوكولاتة على الثيوبيرومين، وهو مادة سامة للكلاب.", symptoms: ["قيء", "تسارع ضربات القلب", "تشنجات", "احتمال الوفاة"], treatment: ["غسيل المعدة", "استخدام الفحم المنشط تحت إشراف بيطري"], advice: "لا تعطِ الشوكولاتة للكلاب أبداً، ولو بكميات صغيرة." }
    },
    {
        id: 1009,
        ku: { title: "گەڕی ئاژەڵ (Mange)", desc: "نەخۆشییەکی پێستە کە بەهۆی مێروویەکی زۆر بچووکەوە دروست دەبێت.", symptoms: ["خورانی توند", "وەرینی تووک", "سووربوونەوەی پێست و برین"], treatment: ["بەکارهێنانی دەرمانی دژە گەڕ (ئایڤەرمێکتین)", "شامپۆی تایبەت"], advice: "ئاژەڵە تووشبووەکە جیا بکەرەوە و شوێنەکەی پاک بکەرەوە." },
        en: { title: "Mange", desc: "A skin disease caused by tiny parasitic mites.", symptoms: ["Intense itching", "Hair loss", "Skin redness", "Sores"], treatment: ["Anti-parasitic medications (Ivermectin)", "Medicated baths"], advice: "Isolate the infected animal and disinfect their bedding." },
        ar: { title: "الجرب في الحيوانات", desc: "مرض جلدي تسببه طفيليات مجهرية.", symptoms: ["حكة شديدة", "تساقط الشعر", "احمرار الجلد", "قروح"], treatment: ["استخدام مضادات الطفيليات (إيفرمكتين)", "شامبو طبي"], advice: "اعزل الحيوان المصاب وطهر مكان نومه." }
    },
    {
        id: 1010,
        ku: { title: "کرمەکانی ڕیخۆڵە (Worms)", desc: "کرمی جۆراوجۆر وەک کرمی تەختە و خڕ کە لە گەدەی ئاژەڵدا دەژین.", symptoms: ["ئاوسانی سک", "کێش دابەزین", "سکچوون", "بوونی کرم لە پاشەڕۆدا"], treatment: ["پێدانی دەرمانی کرم (Anthelmintic) بە شێوەی خول"], advice: "هەر ٣ یان ٦ مانگ جارێک دەرمانی کرم بدە بە ئاژەڵەکەت." },
        en: { title: "Intestinal Worms", desc: "Parasites like roundworms and tapeworms living in the GI tract.", symptoms: ["Pot-bellied appearance", "Weight loss", "Diarrhea", "Visible worms in stool"], treatment: ["Deworming medications prescribed by a vet"], advice: "Administer deworming treatments every 3-6 months." },
        ar: { title: "الديدان المعوية", desc: "طفيليات كالديدان المستديرة والشريطية تعيش في أمعاء الحيوان.", symptoms: ["انتفاخ البطن", "فقدان الوزن", "إسهال", "ديدان مرئية في البراز"], treatment: ["إعطاء جرعات طاردة للديدان يصفها الطبيب"], advice: "قم بإعطاء علاجات الديدان بانتظام كل 3-6 أشهر." }
    },
    {
        id: 1011,
        ku: { title: "کێچ و مێروو (Fleas & Ticks)", desc: "مێرووی دەرەکی کە خوێنی ئاژەڵ دەمژن و نەخۆشی دەگوێزنەوە.", symptoms: ["خوران", "سووربوونەوە", "دەرکەوتنی مێرووەکان لەناو تووکدا"], treatment: ["بەکارهێنانی قەترەی سەر مل یان حەبی تایبەت"], advice: "پشکنینی بەردەوامی تووکی ئاژەڵەکە و بەکارهێنانی بەرگری." },
        en: { title: "Fleas & Ticks", desc: "External parasites that suck blood and transmit diseases.", symptoms: ["Itching", "Scratching", "Redness", "Visible insects on skin"], treatment: ["Topical spot-on treatments", "Oral medications", "Sprays"], advice: "Regularly check your pet's fur and use preventive products." },
        ar: { title: "البرغوث والقراد", desc: "طفيليات خارجية تمتص الدم وتنقل الأمراض.", symptoms: ["حكة", "خدش الجلد", "احمرار", "رؤية الحشرات في الفراء"], treatment: ["استخدام قطرات الظهر", "الحبوب المخصصة", "البخاخات"], advice: "افحص فراء أليفك بانتظام واستخدم منتجات الوقاية." }
    },
    {
        id: 1012,
        ku: { title: "نەخۆشی گرانەتا لە پەلەوەر (Newcastle Disease)", desc: "نەخۆشییەکی ڤایرۆسی مەترسیدارە کە تووشی مریشک و باڵندە دەبێت.", symptoms: ["پژمین", "سکچوونی سەوز", "بادانی مل", "مردنی زۆر"], treatment: ["کوتان", "بەهێزکردنی بەرگری"], advice: "خشتەی کوتانی مریشکەکان بە ڕێکوپێکی جێبەجێ بکە." },
        en: { title: "Newcastle Disease", desc: "A highly contagious viral disease of birds and poultry.", symptoms: ["Sneezing", "Greenish diarrhea", "Twisted necks", "High mortality"], treatment: ["Biosecurity", "Vaccination"], advice: "Follow strict vaccination protocols for your poultry flock." },
        ar: { title: "مرض نيوكاسل (طاعون الدجاج)", desc: "مرض فيروسي خطير يصيب الدواجن والطيور.", symptoms: ["عطس", "إسهال أخضر", "التواء الرقبة", "نفوق عالٍ"], treatment: ["الأمن الحيوي", "التطعيم"], advice: "التزم بجداول التحصين الصارمة لقطيع الدواجن." }
    },
    {
        id: 1013,
        ku: { title: "خۆراکی دروستی سەگ", desc: "سەگ پێویستی بە پارسەنگی پڕۆتین و چەوری و کاربۆهیدرات هەیە.", symptoms: [], treatment: ["بەکارهێنانی خواردنی وشک (Dry Food)", "خواردنی ماڵەوەی بێ بەهارات"], advice: "هەرگیز پیاز، سیر، و ترێ مەدە بە سەگ چونکە ژەهراوی دەبن." },
        en: { title: "Dog Nutrition", desc: "Dogs need a balanced diet of proteins, fats, and carbs.", symptoms: [], treatment: ["High-quality dry food", "Spice-free home-cooked meals"], advice: "Avoid onions, garlic, and grapes as they are toxic to dogs." },
        ar: { title: "تغذية الكلاب", desc: "تحتاج الكلاب إلى نظام غذائي متوازن من البروتين والدهون والكربوهيدرات.", symptoms: [], treatment: ["استخدام الطعام الجاف عالي الجودة", "طعام منزلي غير متبل"], advice: "تجنب البصل والثوم والعنب لأنها سامة للكلاب." }
    },
    {
        id: 1014,
        ku: { title: "خۆراکی دروستی پشیلە", desc: "پشیلە ئاژەڵێکی گۆشتخۆرە و پێویستی بە ماددەی (Taurine) هەیە.", symptoms: [], treatment: ["خواردنی پشیلە کە پڕۆتینی ئاژەڵی زۆری تێدایە"], advice: "پشیلە ناتوانێت تەنها بە سەوزە بژی و پێویستی بە گۆشت هەیە." },
        en: { title: "Cat Nutrition", desc: "Cats are obligate carnivores and need taurine from meat.", symptoms: [], treatment: ["High-protein cat food with animal-based ingredients"], advice: "Cats cannot survive on vegetarian diets; meat is essential." },
        ar: { title: "تغذية القطط", desc: "القطط آكلة لحوم إجبارية وتحتاج لمادة التورين الموجودة في اللحوم.", symptoms: [], treatment: ["طعام قطط غني بالبروتين الحيواني"], advice: "لا يمكن للقطط العيش على نظام نباتي؛ اللحوم ضرورية." }
    },
    {
        id: 1015,
        ku: { title: "هەوکردنی چاو لە پشیلە", desc: "زۆرجار بەهۆی ڤایرۆسی (Herpes) یان بەکتریاوە دروست دەبێت.", symptoms: ["سووربوونەوە", "ئاوسانی پێڵووەکان", "هاتنی کێم و فرمێسک"], treatment: ["پاککردنەوە بە ئاوی گەرم", "بەکارهێنانی قەترەی دژە بەکتریا"], advice: "ئەگەر پشیلەکەت پژمی، ڕەنگە نیشانەی هەڵامەتی پشیلە بێت." },
        en: { title: "Eye Infection in Cats", desc: "Often caused by feline herpesvirus or bacteria.", symptoms: ["Redness", "Swollen eyelids", "Thick eye discharge"], treatment: ["Gentle cleaning with warm water", "Antibiotic eye drops"], advice: "Sneezing along with eye discharge may indicate feline flu." },
        ar: { title: "التهاب العين في القطط", desc: "غالباً ما يسببه فيروس الهربس القططي أو البكتيريا.", symptoms: ["احمرار", "تورم الجفون", "إفرازات قيحية"], treatment: ["تنظيف لطيف بماء دافئ", "قطرات مضاد حيوي"], advice: "العطس مع إفرازات العين قد يكون دليلاً على زكام القطط." }
    },
    {
        id: 1016,
        ku: { title: "تای خوێنبەربوون (CCHF)", desc: "نەخۆشییەکی کوشندەیە کە لە ڕێگەی (قڕنە)وە دەگوازرێتەوە.", symptoms: ["تای بەرز لە ئاژەڵ (بێ نیشانەی توند)", "لە مرۆڤدا خوێنبەربوون"], treatment: ["لە ناوبردنی قڕنە لەسەر جەستەی ئاژەڵ"], advice: "لە کاتی سەربڕین دەستکێش بەکاربهێنە و گۆشت بۆ ٢٤ سەعات بخەرە سەلاجە." },
        en: { title: "Crimean-Congo Hemorrhagic Fever", desc: "A deadly disease transmitted by ticks from livestock.", symptoms: ["High fever in humans", "Animals often show no severe symptoms"], treatment: ["Eliminating ticks on animals", "Sprays or dips"], advice: "Wear gloves during slaughter and refrigerate meat for 24 hours." },
        ar: { title: "حمى القرم والكونغو النزفية", desc: "مرض قاتل ينتقل عن طريق القراد من الماشية.", symptoms: ["حمى عالية في البشر", "الحيوانات لا تظهر عليها أعراض شديدة"], treatment: ["القضاء على القراد في الحيوانات", "الرش أو التغطيس"], advice: "ارتدِ القفازات أثناء الذبح واحفظ اللحم في الثلاجة لـ 24 ساعة." }
    },
    {
        id: 1017,
        ku: { title: "هەوکردنی گوێ لە سەگ", desc: "بەهۆی شێ، بەکتریا، یان کەڕووەوە دروست دەبێت.", symptoms: ["لەراندنەوەی سەر", "خورانی گوێ", "بۆنی ناخۆشی ناو گوێ"], treatment: ["پاککردنەوەی ناو گوێ بە پاککەرەوەی تایبەت", "قەترە"], advice: "دوای شتنی سەگەکە، ناو گوێی بە باشی وشک بکەرەوە." },
        en: { title: "Ear Infection in Dogs", desc: "Caused by moisture, bacteria, or yeast in the ear canal.", symptoms: ["Head shaking", "Ear scratching", "Foul odor from the ear"], treatment: ["Ear cleaning with special solutions", "Medicated drops"], advice: "Dry your dog's ears thoroughly after bathing or swimming." },
        ar: { title: "التهاب الأذن في الكلاب", desc: "يحدث بسبب الرطوبة أو البكتيريا أو الفطريات داخل الأذن.", symptoms: ["هز الرأس", "حك الأذن", "رائحة كريهة من الأذن"], treatment: ["تنظيف الأذن بمحاليل خاصة", "قطرات علاجية"], advice: "جفف أذني كلبك جيداً بعد الاستحمام أو السباحة." }
    },
    {
        id: 1018,
        ku: { title: "گیرانی میزەڕۆ لە پشیلەی نێر (FLUTD)", desc: "حاڵەتێکی فریاگوزارییە کە پشیلە ناتوانێت میز بکات.", symptoms: ["هەوڵدان بۆ میزکردن بەبێ سوود", "هاوارکردن لەناو لمەکەدا"], treatment: ["بردنی خێرا بۆ لای پزیشک", "دانانی کاتیتەر"], advice: "پێدانی ئاوی زۆر و خواردنی تەڕ (Wet Food) بۆ ڕێگری." },
        en: { title: "Urinary Blockage in Male Cats", desc: "An emergency condition where a cat cannot urinate.", symptoms: ["Straining to pee", "Crying out in the litter box", "Lethargy"], treatment: ["Immediate veterinary intervention", "Catheterization"], advice: "Encourage hydration and use wet food to prevent crystals." },
        ar: { title: "انسداد مجرى البول في ذكور القطط", desc: "حالة طارئة حيث يعجز القط عن التبول.", symptoms: ["محاولة التبول دون جدوى", "الصراخ في صندوق الرمل", "الخمول"], treatment: ["التدخل البيطري الفوري", "تركيب قسطرة"], advice: "شجع القط على شرب الماء واستخدم الطعام الرطب للوقاية." }
    },
    {
        id: 1019,
        ku: { title: "فریاگوزاری: خنکان بە شت", desc: "کاتێک شتێک لە قوڕگی ئاژەڵەکەدا گیر دەبێت.", symptoms: ["کۆکەی توند", "شینبوونەوەی زمان", "هەوڵدان بۆ دەرهێنانی بە دەست"], treatment: ["ئەنجامدانی (Heimlich maneuver)", "کێشان بە پشتی ئاژەڵەکەدا"], advice: "ئاگاداری یارییە بچووکەکان بە کە سەگ و پشیلە قووتی نەدەن." },
        en: { title: "First Aid: Choking", desc: "When an object gets stuck in an animal's throat.", symptoms: ["Coughing", "Blue tongue", "Pawing at the mouth"], treatment: ["Perform a modified Heimlich maneuver", "Back blows"], advice: "Be careful with small toys that pets can swallow." },
        ar: { title: "إسعاف أولي: الاختناق", desc: "عندما يعلق شيء في حلق الحيوان.", symptoms: ["سعال حاد", "ازرقاق اللسان", "محاولة إخراج الشيء بالمخالب"], treatment: ["إجراء مناورة هيمليخ المعدلة", "ضربات على الظهر"], advice: "كن حذراً من الألعاب الصغيرة التي يمكن للأليفة بلعها." }
    },
    {
        id: 1020,
        ku: { title: "لێدانی گەرما (Heatstroke)", desc: "بەرزبوونەوەی زۆری پلەی گەرمی جەستە لە هاویندا.", symptoms: ["هەناسەبڕکێی زۆر", "لەرینەوە", "تەمەڵبوون"], treatment: ["ساردکردنەوە بە ئاوی شلەتێن", "بردن بۆ پزیشک"], advice: "هەرگیز ئاژەڵ لە ناو سەیارەی داخراو و لەبەر خۆردا جێ مەهێڵە." },
        en: { title: "Heatstroke", desc: "An overheating of the body, common in hot weather.", symptoms: ["Excessive panting", "Drooling", "Tremors", "Collapse"], treatment: ["Cool down with lukewarm water", "Seek a vet"], advice: "Never leave pets in parked cars or under direct sun." },
        ar: { title: "ضربة الشمس في الحيوانات", desc: "ارتفاع شديد في درجة حرارة الجسم في الصيف.", symptoms: ["لهث شديد", "لعاب مفرط", "ارتعاش", "انهيار"], treatment: ["تبريد الجسم بماء فاتر", "الذهاب للطبيب"], advice: "لا تترك الحيوانات أبداً في سيارات مغلقة أو تحت الشمس المباشرة." }
    },
    {
        id: 1021,
        ku: { title: "پێوەدانی مار و دووپشک", desc: "ژەهراویبوونی ئاژەڵ بەهۆی پێوەدانەوە.", symptoms: ["ئاوسانی زۆر لە شوێنی پێوەدانەکە", "تای بەرز", "لەرزین"], treatment: ["بردن بۆ نەخۆشخانە بۆ دژە ژەهر"], advice: "ئاژەڵەکەت کەمێک بە ئارامی ڕابگرە تا ژەهرەکە بڵاو نەبێتەوە." },
        en: { title: "Snake and Scorpion Bites", desc: "Toxic poisoning from bites or stings.", symptoms: ["Severe swelling at the site", "Fever", "Tremors"], treatment: ["Seek anti-venom immediately"], advice: "Keep the pet calm and still to slow the spread of venom." },
        ar: { title: "لدغات الأفاعي والعقارب", desc: "تسمم الحيوان نتيجة اللدغ.", symptoms: ["تورم شديد في مكان اللدغة", "حمى", "ارتعاش"], treatment: ["اذهب للمستشفى للحصول على مضاد السم"], advice: "حافظ على هدوء الحيوان لتقليل انتشار السم في الجسم." }
    },
    {
        id: 1022,
        ku: { title: "نەخۆشی شێرپەنجە لە ئاژەڵ", desc: "دروستبوونی گرێی مەترسیدار لە جەستەی ئاژەڵە بەتەمەنەکان.", symptoms: ["دەرکەوتنی گرێ", "کێش دابەزینی خێرا", "برینی چاک نەبووەوە"], treatment: ["نەشتەرگەری", "کیمیایی", "چاودێری ئارامکەرەوە"], advice: "هەموو مانگێک بە دەست جەستەی ئاژەڵەکەت بپشکنە بۆ هەر گرێیەک." },
        en: { title: "Cancer in Animals", desc: "Dangerous tumors occurring in older pets.", symptoms: ["Lumps or bumps", "Rapid weight loss", "Non-healing sores"], treatment: ["Surgery", "Chemotherapy", "Palliative care"], advice: "Perform monthly hands-on checks for any new lumps or bumps." },
        ar: { title: "السرطان في الحيوانات", desc: "تكون أورام خطيرة في أجسام الحيوانات المسنة.", symptoms: ["ظهور كتل", "فقدان وزن سريع", "قروح لا تلتئم"], treatment: ["الجراحة", "الكيماوي", "الرعاية التلطيفية"], advice: "قم بفحص جسم أليفك يدوياً كل شهر للبحث عن أي كتل." }
    },
    {
        id: 1023,
        ku: { title: "نەخۆشی شەکرە لە سەگ و پشیلە", desc: "کێشە لە ڕێکخستنی شەکری خوێن بەهۆی کەمی ئەنسۆلین.", symptoms: ["تینووبوونی زۆر", "میزی زۆر", "برسیبوونی بەردەوام"], treatment: ["دەرزی ئەنسۆلین", "ڕێجیمی تایبەت"], advice: "کێشی ئاژەڵەکەت بە تەندروستی ڕابگرە بۆ ڕێگری لە شەکرە." },
        en: { title: "Diabetes in Pets", desc: "Difficulty regulating blood sugar levels.", symptoms: ["Excessive thirst", "Frequent urination", "Constant hunger"], treatment: ["Insulin injections", "Controlled diet"], advice: "Maintain a healthy weight to prevent diabetes in pets." },
        ar: { title: "السكري في الأليفة", desc: "مشكلة في تنظيم مستوى السكر في الدم.", symptoms: ["عطش شديد", "تبول متكرر", "جوع مستمر"], treatment: ["حقن الأنسولين", "نظام غذائي صارم"], advice: "حافظ على وزن صحي لأليفك للوقاية من السكري." }
    },
    {
        id: 1024,
        ku: { title: "پاکوخاوێنی ددان", desc: "پاراستنی ددانی سەگ و پشیلە لە کلۆربوون.", symptoms: ["بۆنی ناخۆشی دەم", "خوێنبەربوونی پووک", "زەردبوونی ددان"], treatment: ["شوشتنی ددان بە فڵچە", "هەویری تایبەت بە ئاژەڵ"], advice: "هەرگیز هەویری ددانی مرۆڤ بەکار مەهێنە چونکە ژەهرە بۆیان." },
        en: { title: "Dental Hygiene", desc: "Protecting pet teeth from decay and plaque.", symptoms: ["Bad breath", "Bleeding gums", "Yellow teeth"], treatment: ["Brushing with pet-safe toothpaste", "Dental chews"], advice: "Never use human toothpaste as it is toxic to pets." },
        ar: { title: "نظافة الأسنان", desc: "حماية أسنان الكلاب والقطط من التسوس.", symptoms: ["رائحة فم كريهة", "نزيف اللثة", "اصفرار الأسنان"], treatment: ["تنظيف الأسنان بفرشاة ومعجون مخصص"], advice: "لا تستخدم معجون أسنان البشر أبداً لأنه سام لهم." }
    },
    {
        id: 1025,
        ku: { title: "ئازاری جومگەکان (Arthritis)", desc: "هەوکردنی جومگەکان کە زۆرجار لە ئاژەڵە بەتەمەنەکاندا ڕوودەدات.", symptoms: ["سەختی لە هەستان", "شەلین", "کەمبوونەوەی جوڵە"], treatment: ["دەرمانی ئازارشکێن و جومگە", "ڕێکخستنی کێش"], advice: "شوێنی خەوتنی ئارام و نەرم بۆ ئاژەڵەکە دابین بکە." },
        en: { title: "Arthritis in Pets", desc: "Joint inflammation commonly seen in aging animals.", symptoms: ["Difficulty rising", "Limping", "Reluctance to move"], treatment: ["Pain relievers", "Joint supplements", "Weight management"], advice: "Provide soft, supportive bedding for older pets." },
        ar: { title: "التهاب المفاصل", desc: "التهاب المفاصل الذي يحدث غالباً في الحيوانات المسنة.", symptoms: ["صعوبة في النهوض", "عرج", "قلة الحركة"], treatment: ["مسكنات الألم", "مكملات المفاصل", "تنظيم الوزن"], advice: "وفر مكاناً مريحاً وناعماً لنوم الحيوان." }
    },
    {
        id: 1026,
        ku: { title: "نەخۆشی گرانەتا لە مانگا (LSD)", desc: "نەخۆشییەکی ڤایرۆسییە کە دەبێتە هۆی دەرکەوتنی گرێ لەسەر پێست.", symptoms: ["دەرکەوتنی گرێی ڕەق لەسەر پێستی مانگا", "تای بەرز", "کەمبوونی شیر"], treatment: ["پاککردنەوەی برینەکان", "پێدانی دژە بەکتریا"], advice: "کوتانی ساڵانە باشترین ڕێگەیە بۆ ڕێگری لەم نەخۆشییە." },
        en: { title: "Lumpy Skin Disease (LSD)", desc: "A viral disease causing nodules on cattle skin.", symptoms: ["Firm nodules on skin", "High fever", "Drop in milk yield"], treatment: ["Wound care", "Antibiotics"], advice: "Annual vaccination is the best prevention against LSD." },
        ar: { title: "الجلد العقدي", desc: "مرض فيروسي يسبب ظهور عقد على جلد الأبقار.", symptoms: ["ظهور عقد صلبة على الجلد", "حمى عالية", "نقص الحليب"], treatment: ["تنظيف الجروح", "مضادات حيوية"], advice: "التطعيم السنوي هو أفضل وسيلة للوقاية." }
    },
    {
        id: 1027,
        ku: { title: "هەوکردنی گوانی مانگا (Mastitis)", desc: "هەوکردنی بەکتریایی لە گواندا کە کوالیتی شیر خراپ دەکات.", symptoms: ["ئاوسان و سووربوونەوەی گوان", "گۆڕانی ڕەنگی شیر"], treatment: ["بەکارهێنانی دژە بەکتریا لە ناو گواندا (Intramammary)"], advice: "پاکوخاوێنی شوێنی مانگا و شوشتنی گوان پێش دۆشین." },
        en: { title: "Mastitis in Cattle", desc: "Bacterial infection of the udder affecting milk quality.", symptoms: ["Swollen, hot udder", "Blood or clots in milk"], treatment: ["Intramammary antibiotics"], advice: "Maintain clean bedding and wash udders before milking." },
        ar: { title: "التهاب الضرع", desc: "عدوى بكتيرية في الضرع تؤثر على جودة الحليب.", symptoms: ["تورم واحمرار الضرع", "تغير لون الحليب"], treatment: ["استخدام مضادات حيوية داخل الضرع"], advice: "نظافة مكان الأبقار وغسل الضرع قبل الحلب." }
    },
    {
        id: 1028,
        ku: { title: "سکچوون لە بەرخ و کارژۆڵە", desc: "کێشەیەکی مەترسیدارە کە زۆرجار بەهۆی بەکتریای (E. coli)وە دەبێت.", symptoms: ["سکچوونی زەرد یان سپی", "بێهێزی", "چاوقوچبوونەوە"], treatment: ["شلەمەنی دەم (ORS)", "دژە بەکتریای خێرا"], advice: "پێدانی شیری (لەوەڕ) لە کاتژمێرە یەکەمەکانی لەدایکبوون زۆر گرنگە." },
        en: { title: "Diarrhea in Lambs/Kids", desc: "A severe issue often caused by E. coli or scours.", symptoms: ["Yellow or white diarrhea", "Lethargy", "Sunken eyes"], treatment: ["Oral rehydration (ORS)", "Immediate antibiotics"], advice: "Colostrum intake within the first hours of life is vital." },
        ar: { title: "الإسهال في الحملان والجداء", desc: "مشكلة خطيرة تسببها بكتيريا الإيكولاي غالباً.", symptoms: ["إسهال أصفر أو أبيض", "خمول", "غور العينين"], treatment: ["محلول جفاف فموي", "مضادات حيوية فورية"], advice: "إعطاء السرسوب (اللبأ) في الساعات الأولى للولادة ضروري جداً." }
    },
    {
        id: 1029,
        ku: { title: "نەخۆشی گەڕەپێکە (Scabies)", desc: "نەخۆشییەکی گوازراوەی پێستە لە مەڕ و بزندا.", symptoms: ["خورانی توند", "وەرینی خوری", "دروستبوونی قەتماغە"], treatment: ["کوتانی ئایڤەرمێکتین", "حەمامی دژە گەڕ"], advice: "هەموو مەڕەکان بەیەکەوە چارەسەر بکە بۆ ئەوەی دووبارە نەبێتەوە." },
        en: { title: "Sheep Scab", desc: "A highly contagious skin disease in sheep.", symptoms: ["Intense itching", "Wool loss", "Crusty skin lesions"], treatment: ["Ivermectin injections", "Anti-parasitic dips"], advice: "Treat the whole flock simultaneously to prevent recurrence." },
        ar: { title: "جرب الأغنام", desc: "مرض جلدي شديد العدوى في الأغنام.", symptoms: ["حكة شديدة", "تساقط الصوف", "تكون قشور"], treatment: ["حقن الإيفرمكتين", "التغطيس بمضادات الطفيليات"], advice: "عالج القطيع بالكامل معاً لمنع تكرار العدوى." }
    },
    {
        id: 1030,
        ku: { title: "کوتانی مانگا و مەڕ", desc: "پاراستنی سامانی ئاژەڵ لە نەخۆشییە گوازراوەکان.", symptoms: [], treatment: ["تای سپی", "ئەنتەرۆتۆکسیمیا", "برۆسێلا"], advice: "هەر وەرزە و کوتانی تایبەت بە خۆی هەیە، ڕاوێژ بە ڤێتەرنەری بکە." },
        en: { title: "Livestock Vaccination", desc: "Protecting farm animals from infectious diseases.", symptoms: [], treatment: ["FMD", "Enterotoxemia", "Brucellosis"], advice: "Each season has specific vaccines; consult your local vet." },
        ar: { title: "تحصين الماشية", desc: "حماية الثروة الحيوانية من الأمراض المعدية.", symptoms: [], treatment: ["القلاعية", "التسمم الدموي", "البروسيلا"], advice: "لكل فصل تطعيمات خاصة؛ استشر الطبيب البيطري." }
    },
    {
        id: 1031,
        ku: { title: "نەخۆشی تالاسیمیا لە ئاژەڵ", desc: "کەمخوێنییەکی بۆماوەییە کە لە هەندێک جۆری ئاژەڵدا دەردەکەوێت.", symptoms: ["زەردبوونی ناو دەم و چاو", "کەمبوونی جوڵە", "هەناسەبڕکێ"], treatment: ["گواستنەوەی خوێن"], advice: "ئاژەڵی تووشبوو بۆ زاوزێ بەکارمەهێنە." },
        en: { title: "Anemia in Animals", desc: "Reduced red blood cells or hemoglobin levels.", symptoms: ["Pale gums/eyes", "Lethargy", "Shortness of breath"], treatment: ["Iron supplements", "Blood transfusion"], advice: "Do not breed animals with known hereditary blood disorders." },
        ar: { title: "فقر الدم في الحيوانات", desc: "نقص خلايا الدم الحمراء أو مستوى الهيموجلوبين.", symptoms: ["شحوب اللثة والعين", "خمول", "ضيق تنفس"], treatment: ["مكملات الحديد", "نقل الدم"], advice: "لا تستخدم الحيوانات المصابة باضطرابات وراثية للتكاثر." }
    },
    {
        id: 1032,
        ku: { title: "هەوکردنی سییەکانی پەلەوەر", desc: "بەهۆی سەرما یان ڤایرۆسەوە دروست دەبێت.", symptoms: ["دەنگی ناخۆش لە کاتی هەناسەدان", "کێمانی دەنووک", "تەمەڵی"], treatment: ["دژە بەکتریای تایبەت (Tylosin)"], advice: "شوێنی پەلەوەرەکان بە گەرمی و وشکی ڕابگرە." },
        en: { title: "Respiratory Infection in Poultry", desc: "Caused by cold weather, dust, or viruses.", symptoms: ["Rattling breath sounds", "Nasal discharge", "Lethargy"], treatment: ["Specific antibiotics (Tylosin)"], advice: "Keep the poultry house warm, dry, and well-ventilated." },
        ar: { title: "التهاب التنفس في الدواجن", desc: "يحدث بسبب البرد أو الغبار أو الفيروسات.", symptoms: ["صوت طقطقة عند التنفس", "إفرازات الأنف", "خمول"], treatment: ["مضادات حيوية (تايلوزين)"], advice: "حافظ على مكان الدواجن دافئاً وجافاً وجيد التهوية." }
    },
    {
        id: 1033,
        ku: { title: "نەخۆشی ئەنتەرۆتۆکسیمیا (Enterotoxemia)", desc: "بەهۆی بەکتریایەکەوەیە کە لە ڕیخۆڵەدا ژەهر بەرهەم دەهێنێت.", symptoms: ["مردنی لەناکاوی بەرخ", "بادانی سەر بەرەو دواوە"], treatment: ["کوتان پێش وەرزەکە"], advice: "گۆڕینی خواردنی ئاژەڵ بە هێواشی ئەگەری ئەم نەخۆشییە کەمدەکاتەوە." },
        en: { title: "Enterotoxemia", desc: "A bacterial condition producing toxins in the gut.", symptoms: ["Sudden death in lambs", "Head arched back"], treatment: ["Vaccination"], advice: "Avoid sudden changes in diet to prevent bacterial blooms." },
        ar: { title: "التسمم المعوي", desc: "حالة بكتيرية تنتج سموماً في الأمعاء.", symptoms: ["موت مفاجئ للحملان", "التواء الرأس للخلف"], treatment: ["التحصين المسبق"], advice: "تجنب التغيير المفاجئ في العلف لتقليل خطر المرض." }
    },
    {
        id: 1034,
        ku: { title: "نەخۆشی کوشندەی ئەسپی (Glanders)", desc: "نەخۆشییەکی بەکتریایی مەترسیدارە کە تووشی ئەسپ دەبێت.", symptoms: ["برینی پێست", "هاتنی کێم لە لووت", "ئاوسانی لیمفەگرێکان"], treatment: ["زۆرجار ئاژەڵەکە لەناودەبرێت"], advice: "ئەسپە نوێیەکان کەرەنتینە بکە پێش ئەوەی تێکەڵی ئەوانی تری بکەیت." },
        en: { title: "Glanders", desc: "A serious bacterial disease primarily affecting horses.", symptoms: ["Skin ulcers", "Thick nasal discharge", "Swollen lymph nodes"], treatment: ["Often requires euthanasia"], advice: "Quarantine new horses before introducing them to the stable." },
        ar: { title: "مرض الرعام", desc: "مرض بكتيري خطير يصيب الخيول بشكل أساسي.", symptoms: ["قروح جلدية", "إفرازات أنفية سميكة", "تورم العقد اللمفاوية"], treatment: ["القتل الرحيم غالباً"], advice: "اعزل الخيول الجديدة قبل إدخالها إلى الإسطبل." }
    },
    {
        id: 1035,
        ku: { title: "ژەهراویبوونی ئاژەڵ بە گیا", desc: "خواردنی هەندێک گیای کێوی کە ماددەی ژەهراوییان تێدایە.", symptoms: ["زیادبوونی لیک", "سکچوون", "لەرینەوە", "بێهێزی زۆر"], treatment: ["شلەمەنی زۆر", "پێدانی خەڵوزی چالاک"], advice: "ئاژەڵ لەو لەوەرگایانە دووربخەرەوە کە گیای زیانبەخشیان تێدایە." },
        en: { title: "Plant Poisoning", desc: "Ingestion of toxic wild plants in pastures.", symptoms: ["Excessive salivation", "Diarrhea", "Tremors", "Weakness"], treatment: ["Supportive care", "Activated charcoal"], advice: "Keep livestock away from known toxic weed areas." },
        ar: { title: "التسمم بالنباتات", desc: "تناول نباتات برية تحتوي على مواد سامة.", symptoms: ["لعابة مفرطة", "إسهال", "ارتعاش", "خمول شديد"], treatment: ["رعاية داعمة", "فحم منشط"], advice: "ابعد الماشية عن مناطق الأعشاب الضارة المعروفة." }
    },
    {
        id: 1036,
        ku: { title: "چاودێری سم و ناڵکردن", desc: "پاراستنی سمەکانی ئەسپ و مانگا لە شەقبوون و هەوکردن.", symptoms: ["شەلین", "گەرمبوونی سم", "بۆنی ناخۆشی ژێر سم"], treatment: ["بڕینی سم بە ڕێکوپێکی", "پاککردنەوەی بە دەرمانی پاککەرەوە"], advice: "شوێنی مانەوەی ئاژەڵەکە با وشک بێت بۆ ئەوەی سمەکەی نەڕزێت." },
        en: { title: "Hoof Care", desc: "Maintaining hoof health in horses and cattle.", symptoms: ["Lameness", "Hot hooves", "Foul odor"], treatment: ["Regular trimming", "Antiseptic dressings"], advice: "Ensure clean, dry bedding to prevent hoof rot." },
        ar: { title: "العناية بالحوافر", desc: "الحفاظ على صحة الحوافر.", symptoms: ["عرج", "حرارة في الحافر", "رائحة كريهة"], treatment: ["تقليم الحوافر", "المطهرات"], advice: "تأكد من جفاف مكان الحيوان لمنع تعفن الحوافر." }
    },
    {
        id: 1037,
        ku: { title: "نەخۆشی ماسی (Ich)", desc: "خاڵی سپی کە لەسەر جەستەی ماسی ئاکواریۆم دروست دەبێت.", symptoms: ["دەرکەوتنی خاڵی سپی", "خۆخشاندنی ماسی بە بەردەکان"], treatment: ["بەرزکردنەوەی پلەی گەرمی ئاو", "بەکارهێنانی دەرمانی شین"], advice: "ماسی نوێ بۆ ماوەی هەفتەیەک جیا بکەرەوە پێش خستنە ناو تانکە سەرەکییەکە." },
        en: { title: "Ich (White Spot)", desc: "A common parasitic infection in aquarium fish.", symptoms: ["Tiny white spots", "Fish rubbing against objects"], treatment: ["Raising water temperature", "Methylene Blue"], advice: "Quarantine new fish for a week before adding to the main tank." },
        ar: { title: "مرض النقاط البيضاء", desc: "عدوى طفيلية شائعة في أسماك الزينة.", symptoms: ["نقاط بيضاء", "حك السمكة بالأحجار"], treatment: ["رفع حرارة الماء", "ميثيلين بلو"], advice: "اعزل الأسماك الجديدة لمدة أسبوع قبل إضافتها للحوض الرئيسي." }
    },
    {
        id: 1038,
        ku: { title: "نەخۆشی کەمخوێنی پەلەوەر", desc: "بەهۆی ڤایرۆسێکەوەیە کە دەبێتە هۆی زەردبوون و کەمخوێنی.", symptoms: ["زەردبوونی دەنووک و پێست", "گەشە نەکردن", "مردنی زۆر"], treatment: ["پێدانی ڤیتامینەکان", "دژە بەکتریا"], advice: "کوتانی دایکەکان باشترین ڕێگەیە بۆ پاراستنی بێچووەکان." },
        en: { title: "Chicken Anemia", desc: "A viral infection leading to severe anemia in chicks.", symptoms: ["Pale combs/skin", "Stunted growth", "Mortality"], treatment: ["Vitamins", "Antibiotics"], advice: "Vaccinate breeder flocks to provide immunity to chicks." },
        ar: { title: "فقر الدم في الدجاج", desc: "عدوى فيروسية تؤدي لفقر دم حاد.", symptoms: ["شحوب الجلد", "ضعف النمو", "نفوق عالٍ"], treatment: ["فيتامينات", "مضادات حيوية"], advice: "تحصين الأمهات هو أفضل وسيلة لحماية الكتاكيت." }
    },
    {
        id: 1039,
        ku: { title: "ژەهراویبوونی ئاژەڵ بە دەرمانی مێروو", desc: "بەرکەوتن یان خواردنی دەرمانی ناوماڵ و باخچە.", symptoms: ["لەرزین", "زیادبوونی لیک", "تەسکبوونەوەی بیلبیلە"], treatment: ["شوشتنی جەستە", "پێدانی (Atropine)"], advice: "دەرمانی قڕکەر لە شوێنی بەرز و داخراو دابنێ." },
        en: { title: "Insecticide Poisoning", desc: "Ingestion or contact with household pesticides.", symptoms: ["Tremors", "Drooling", "Constricted pupils"], treatment: ["Bathing the pet", "Atropine"], advice: "Store all pesticides in high, locked cabinets away from pets." },
        ar: { title: "تسمم بالمبيدات", desc: "ملامسة أو تناول مبيدات الحشرات.", symptoms: ["ارتعاش", "لعابة مفرطة", "تضيق حدقة العين"], treatment: ["غسل الجسم", "الأتروبين"], advice: "احفظ المبيدات في أماكن عالية ومغلقة بعيداً عن الحيوانات." }
    },
    {
        id: 1040,
        ku: { title: "فریاگوزاری: برینداری توند", desc: "خوێنبەربوونی زۆر بەهۆی ڕووداو یان شەڕە سەگەوە.", symptoms: ["خوێنبەربوون", "بێهۆشی", "ناڵاندن"], treatment: ["پەستان خستنە سەر برینەکە", "بەستنی بە توندی"], advice: "خێرا ئاژەڵەکە بگەیەنە نزیکترین کلینیک بۆ دروومان و چارەسەر." },
        en: { title: "First Aid: Injury", desc: "Heavy bleeding due to accidents or fights.", symptoms: ["Bleeding", "Fainting", "Whimpering"], treatment: ["Direct pressure", "Tight bandage"], advice: "Take the animal to the nearest vet clinic for stitching and care." },
        ar: { title: "إسعاف أولي: الإصابة", desc: "نزيف حاد نتيجة الحوادث.", symptoms: ["نزيف", "إغماء", "أنين"], treatment: ["الضغط المباشر", "الربط جيداً"], advice: "انقل الحيوان فوراً لأقرب عيادة للخياطة والعلاج." }
    }
];
