const medicalBookData = [
    {
        "id": 1001,
        "name": "Paracetamol",
        "ku": { "title": "پاراسیتامۆڵ", "desc": "ئازارشکێن و نزمکەرەوەی پلەی گەرمی جەستەیە.", "harm": "بەکارهێنانی زۆر زیان بە جگەر دەگەیەنێت.", "benefit": "بۆ چارەسەری ئازاری سەر و تا بەکاردێت.", "use": ["٥٠٠ ملگم بۆ ١ گرام لە کاتی پێویست."] },
        "en": { "title": "Paracetamol", "desc": "Pain reliever and fever reducer.", "harm": "Overdose can cause liver damage.", "benefit": "Effective for headaches and fever.", "use": ["500mg to 1g as needed."] },
        "ar": { "title": "باراسيتامول", "desc": "مسكن للألم وخافض للحرارة.", "harm": "الجرعة الزائدة تسبب تلف الكبد.", "benefit": "فعال للصداع والحمى.", "use": ["٥٠٠ ملغ إلى ١ غرام عند الحاجة."] }
    },
    {
        "id": 1002,
        "name": "Blood Pressure Monitor",
        "ku": { "title": "ئامێری پەستانی خوێن", "desc": "ئامێرێکە بۆ پێوانەکردنی پەستانی خوێن.", "harm": "بەکارهێنانی نادروست ئەنجامی هەڵە دەدات.", "benefit": "ئاگاداربوون لە تەندروستی دڵ و خوێنبەرەکان.", "use": ["بەستنی قۆڵەبەندەکە و داگرتنی دوگمەی دەستپێکردن."] },
        "en": { "title": "BP Monitor", "desc": "Device for measuring blood pressure.", "harm": "Improper use leads to incorrect readings.", "benefit": "Monitoring cardiovascular health.", "use": ["Fasten the cuff and press start."] },
        "ar": { "title": "جهاز ضغط الدم", "desc": "جهاز لقياس ضغط الدم.", "harm": "الاستخدام الخاطئ يعطي نتائج غير دقيقة.", "benefit": "مراقبة صحة القلب والشرايين.", "use": ["ربط الكفة والضغط على زر البدء."] }
    },
    {
        "id": 1003,
        "name": "Honey",
        "ku": { "title": "هەنگوین", "desc": "ماددەیەکی سروشتی شیرین و دەوڵەمەند بە ماددە خۆراکییەکان.", "harm": "بۆ منداڵی خوار یەک ساڵ مەترسیدارە.", "benefit": "بۆ چارەسەری کۆکە و چاککردنەوەی برین.", "use": ["خواردنی کەوچکێک لە بەیانیان بەسکی ناشتا."] },
        "en": { "title": "Honey", "desc": "Natural sweet substance rich in nutrients.", "harm": "Dangerous for infants under 1 year.", "benefit": "Good for cough and wound healing.", "use": ["One spoon in the morning on empty stomach."] },
        "ar": { "title": "العسل", "desc": "مادة طبيعية حلوة غنية بالعناصر الغذائية.", "harm": "خطر للأطفال دون سن السنة.", "benefit": "مفيد للسعال ولتئام الجروح.", "use": ["تناول ملعقة في الصباح على الريق."] }
    },
    {
        "id": 1004,
        "name": "Aspirin",
        "ku": { "title": "ئەسپرین", "desc": "دەرمانێکی ڕوونکەرەوەی خوێن و دژە هەوکردنە.", "harm": "ڕەنگە ببێتە هۆی برینی گەدە و خوێنبەربوون.", "benefit": "ڕێگری لە جەڵتەی دڵ و مێشک دەکات.", "use": ["بەپێی ڕێنمایی پزیشک و بە ژەمی کەم."] },
        "en": { "title": "Aspirin", "desc": "Blood thinner and anti-inflammatory drug.", "harm": "May cause stomach ulcers and bleeding.", "benefit": "Prevents heart attack and stroke.", "use": ["As prescribed by doctor in low doses."] },
        "ar": { "title": "أسبرين", "desc": "دواء مميع للدم ومضاد للالتهابات.", "harm": "قد يسبب قرحة في المعدة ونزيف.", "benefit": "يمنع النوبات القلبية والسكتات.", "use": ["حسب إرشادات الطبيب وبجرعات منخفضة."] }
    },
    {
        "id": 1005,
        "name": "Ibuprofen",
        "ku": { "title": "ئایبۆپڕۆفین", "desc": "دژە هەوکردنی ناستیرۆیدی و ئازارشکێنە.", "harm": "بۆ نەخۆشانی گورچیلە و ڕەبۆ مەترسیدارە.", "benefit": "بۆ ئازاری جومگە، دان و ماسولکەکان.", "use": ["٤٠٠ ملگم دوای نان خواردن."] },
        "en": { "title": "Ibuprofen", "desc": "Non-steroidal anti-inflammatory and painkiller.", "harm": "Risky for kidney and asthma patients.", "benefit": "Relieves joint, tooth, and muscle pain.", "use": ["400mg after meals."] },
        "ar": { "title": "إيبوبروفين", "desc": "مضاد للالتهابات ومسكن للألم.", "harm": "خطر لمرضى الكلى والربو.", "benefit": "يخفف آلام المفاصل والأسنان والعضلات.", "use": ["٤٠٠ ملغ بعد الأكل."] }
    },
    {
        "id": 1006,
        "name": "Amoxicillin",
        "ku": { "title": "ئەمۆکسیلین", "desc": "دژە زیندەییەکی بەهێزە بۆ کوشتنی بەکتریا.", "harm": "ڕەنگە ببێتە هۆی هەستیاری و سکچوون.", "benefit": "بۆ هەوکردنی قوڕگ، گوێ و میزەڵدان.", "use": ["سێ جار لە ڕۆژێکدا بۆ ماوەی ٧ بۆ ١٠ ڕۆژ."] },
        "en": { "title": "Amoxicillin", "desc": "Strong antibiotic to kill bacteria.", "harm": "May cause allergic reactions and diarrhea.", "benefit": "Treats throat, ear, and bladder infections.", "use": ["Three times daily for 7 to 10 days."] },
        "ar": { "title": "أموكسيسيلين", "desc": "مضاد حيوي قوي لقتل البكتيريا.", "harm": "قد يسبب حساسية وإسهال.", "benefit": "يعالج التهابات الحلق والأذن والمثانة.", "use": ["ثلاث مرات يومياً لمدة ٧ إلى ١٠ أيام."] }
    },
    {
        "id": 1007,
        "name": "Insulin",
        "ku": { "title": "ئەنسۆلین", "desc": "هۆرمۆنێکە بۆ ڕێکخستنی ئاستی شەکر لە خوێن.", "harm": "دابەزینی زۆری شەکر (Hypoglycemia) مەترسیدارە.", "benefit": "ژیانی تووشبووانی شەکرەی جۆری یەک دەپارێزێت.", "use": ["لێدانی دەرزی لەژێر پێست پێش نان خواردن."] },
        "en": { "title": "Insulin", "desc": "Hormone that regulates blood sugar levels.", "harm": "Severe low blood sugar is dangerous.", "benefit": "Essential for type 1 diabetes patients.", "use": ["Subcutaneous injection before meals."] },
        "ar": { "title": "أنسولين", "desc": "هرمون ينظم مستويات السكر في الدم.", "harm": "انخفاض السكر الشديد يشكل خطراً.", "benefit": "ضروري لمرضى السكري من النوع الأول.", "use": ["حقنة تحت الجلد قبل الوجبات."] }
    },
    {
        "id": 1008,
        "name": "Stethoscope",
        "ku": { "title": "سەماعەی پزیشکی", "desc": "ئامێرێکە بۆ بیستنی دەنگی ناوەوەی جەستە.", "harm": "هیچ زیانێکی فیزیایی نییە.", "benefit": "بۆ پشکنینی دڵ، سییەکان و ڕیخۆڵەکان.", "use": ["خستنە سەر سنگی نەخۆش بە هێمنی."] },
        "en": { "title": "Stethoscope", "desc": "A device for listening to internal body sounds.", "harm": "No physical side effects.", "benefit": "Used to check heart, lungs, and bowels.", "use": ["Place gently on the patient's chest."] },
        "ar": { "title": "سماعة طبية", "desc": "جهاز لسماع الأصوات الداخلية للجسم.", "harm": "لا توجد آثار جانبية جسدية.", "benefit": "يستخدم لفحص القلب والرئتين والأمعاء.", "use": ["توضع بلطف على صدر المريض."] }
    },
    {
        "id": 1009,
        "name": "Thermometer",
        "ku": { "title": "گەرمیپێو", "desc": "ئامێرێکە بۆ پێوانی پلەی گەرمی جەستە.", "harm": "جۆری جیوەیی ئەگەر بشکێت ژەهراوییە.", "benefit": "بۆ زانینی بوونی تا و نیشانەی هەوکردن.", "use": ["خستنە ژێر زمان یان بنباڵ بۆ چەند خولەکێک."] },
        "en": { "title": "Thermometer", "desc": "Device for measuring body temperature.", "harm": "Mercury type is toxic if broken.", "benefit": "Detects fever and signs of infection.", "use": ["Place under tongue or armpit for minutes."] },
        "ar": { "title": "ميزان حرارة", "desc": "جهاز لقياس درجة حرارة الجسم.", "harm": "النوع الزئبقي سام إذا كسر.", "benefit": "يكشف الحمى وعلامات الالتهاب.", "use": ["يوضع تحت اللسان أو الإبط لدقائق."] }
    },
    {
        "id": 1010,
        "name": "Ginger",
        "ku": { "title": "زەنجەفیل", "desc": "ڕەگێکی ڕووەکی دەرمانییە.", "harm": "بڕی زۆر دەبێتە هۆی دڵەکزێ و سکچوون.", "benefit": "بۆ چارەسەری هێڵنجدان و هەوکردن.", "use": ["کوڵاندنی لەگەڵ ئاو یان تێکەڵکردن لەگەڵ چا."] },
        "en": { "title": "Ginger", "desc": "A medicinal plant root.", "harm": "Excessive amounts cause heartburn and diarrhea.", "benefit": "Treats nausea and inflammation.", "use": ["Boil with water or mix with tea."] },
        "ar": { "title": "زنجبيل", "desc": "جذر نباتي علاجي.", "harm": "الكميات الكبيرة تسبب حموضة وإسهال.", "benefit": "يعالج الغثيان والالتهابات.", "use": ["يغلى مع الماء أو يخلط مع الشاي."] }
    },
    {
        "id": 1011,
        "name": "Vitamin C",
        "ku": { "title": "ڤیتامین C", "desc": "ماددەیەکی خۆراکی پێویستە بۆ بەرگری جەستە.", "harm": "بڕی زۆر ڕەنگە ببێتە هۆی بەردی گورچیلە.", "benefit": "بەرگری جەستە بەهێز دەکات دژی هەڵامەت.", "use": ["یەک حەبی فەوار لە ڕۆژێکدا."] },
        "en": { "title": "Vitamin C", "desc": "Essential nutrient for the immune system.", "harm": "High doses may lead to kidney stones.", "benefit": "Strengthens immunity against colds.", "use": ["One effervescent tablet daily."] },
        "ar": { "title": "فيتامين C", "desc": "عنصر غذائي ضروري لجهاز المناعة.", "harm": "الجرعات العالية قد تؤدي لحصى الكلى.", "benefit": "يقوي المناعة ضد نزلات البرد.", "use": ["قرص واحد فوار يومياً."] }
    },
    {
        "id": 1012,
        "name": "Aloe Vera",
        "ku": { "title": "ئالۆڤێرا", "desc": "ڕووەکێکی بیابانییە و جێڵێکی بەسوودی تێدایە.", "harm": "ڕەنگە ببێتە هۆی هەستیاری پێست لە هەندێک کەس.", "benefit": "بۆ چارەسەری سووتاوی و شێدارکردنی پێست.", "use": ["خستنە سەر پێست بە شێوەی مەڵحەم."] },
        "en": { "title": "Aloe Vera", "desc": "Desert plant containing beneficial gel.", "harm": "May cause skin allergy in some people.", "benefit": "Treats burns and moisturizes the skin.", "use": ["Apply topically to the skin."] },
        "ar": { "title": "ألوفيرا", "desc": "نبات صحراوي يحتوي على جل مفيد.", "harm": "قد يسبب حساسية جلدية لبعض الناس.", "benefit": "يعالج الحروق ويرطب البشرة.", "use": ["يوضع موضعياً على الجلد."] }
    },
    {
        "id": 1013,
        "name": "Omega-3",
        "ku": { "title": "ئۆمیگا-٣", "desc": "ترشە چەورییەکی سوودبەخشە کە لە ماسی دایە.", "harm": "ڕەنگە ببێتە هۆی بۆنی ناخۆشی دەم.", "benefit": "بۆ تەندروستی دڵ، مێشک و چاوەکان.", "use": ["ڕۆژانە یەک کەپسول لە کاتی نان خواردن."] },
        "en": { "title": "Omega-3", "desc": "Beneficial fatty acid found in fish.", "harm": "May cause fishy breath or aftertaste.", "benefit": "Good for heart, brain, and eyes.", "use": ["One capsule daily with food."] },
        "ar": { "title": "أوميغا-٣", "desc": "حمض دهني مفيد موجود في الأسماك.", "harm": "قد يسبب رائحة فم سمكية.", "benefit": "مفيد لصحة القلب والدماغ والعيون.", "use": ["كبسولة واحدة يومياً مع الطعام."] }
    },
    {
        "id": 1014,
        "name": "Mask",
        "ku": { "title": "دەمامکی پزیشکی", "desc": "پۆشاکێکی پارێزەرە بۆ دەم و لووت.", "harm": "بەکارهێنانی درێژخایەن دەبێتە هۆی ناڕەحەتی هەناسە.", "benefit": "ڕێگری لە بڵاوبوونەوەی ڤایرۆس و بەکتریا دەکات.", "use": ["داپۆشینی دەم و لووت بە شێوەیەکی توند."] },
        "en": { "title": "Medical Mask", "desc": "Protective covering for nose and mouth.", "harm": "Long-term use causes breathing discomfort.", "benefit": "Prevents spread of viruses and bacteria.", "use": ["Cover mouth and nose securely."] },
        "ar": { "title": "كمامة طبية", "desc": "غطاء واقي للأنف والفم.", "harm": "الاستخدام الطويل يسبب ضيق تنفس.", "benefit": "يمنع انتشار الفيروسات والبكتيريا.", "use": ["تغطية الفم والأنف بإحكام."] }
    },
    {
        "id": 1015,
        "name": "Garlic",
        "ku": { "title": "سیر", "desc": "ڕووەکێکی پیازەییە و تامێکی بەهێزی هەیە.", "harm": "دەبێتە هۆی بۆنی ناخۆشی دەم و پێست.", "benefit": "پەستانی خوێن دادەبەزێنێت و بەرگری زیاد دەکات.", "use": ["خواردنی یەک پارچەی بچووک ڕۆژانە."] },
        "en": { "title": "Garlic", "desc": "Bulbous plant with a strong taste.", "harm": "Causes bad breath and skin odor.", "benefit": "Lowers blood pressure and boosts immunity.", "use": ["Eat one small clove daily."] },
        "ar": { "title": "ثوم", "desc": "نبات بصلي ذو طعم قوي.", "harm": "يسبب رائحة فم وجلد كريهة.", "benefit": "يخفض ضغط الدم ويقوي المناعة.", "use": ["تناول فص صغير يومياً."] }
    },
    {
        "id": 1016,
        "name": "Metformin",
        "ku": { "title": "مێتفۆرمین", "desc": "دەرمانێکی سەرەکییە بۆ نەخۆشی شەکرە.", "harm": "ڕەنگە ببێتە هۆی کێشەی هەرس و سکچوون.", "benefit": "شەکری خوێن لە تووشبووانی جۆری دووەم ڕێکدەخات.", "use": ["وەک پزیشک بۆت دادەنێت، زۆرجار لەگەڵ نان."] },
        "en": { "title": "Metformin", "desc": "Main medication for diabetes.", "harm": "May cause digestive issues and diarrhea.", "benefit": "Regulates blood sugar in type 2 diabetes.", "use": ["As prescribed by doctor, usually with meals."] },
        "ar": { "title": "متفورمين", "desc": "دواء أساسي لمرض السكري.", "harm": "قد يسبب مشاكل هضمية وإسهال.", "benefit": "ينظم سكر الدم في السكري من النوع الثاني.", "use": ["حسب وصفة الطبيب، غالباً مع الوجبات."] }
    },
    {
        "id": 1017,
        "name": "Ventolin",
        "ku": { "title": "ڤێنتۆلین", "desc": "بوخاخێکە بۆ فراوانکردنی بۆری هەناسە.", "harm": "ڕەنگە ببێتە هۆی لەرینەوەی دەست و خێرایی لێدانی دڵ.", "benefit": "بۆ چارەسەری تەنگەنەفەسی و ڕەبۆ خێرایە.", "use": ["هەڵمژینی یەک یان دوو جار لە کاتی تەنگەنەفەسی."] },
        "en": { "title": "Ventolin", "desc": "Inhaler for expanding airways.", "harm": "May cause hand tremors and fast heart rate.", "benefit": "Fast relief for asthma and shortness of breath.", "use": ["One or two puffs during breathlessness."] },
        "ar": { "title": "فنتولين", "desc": "بخاخ لتوسيع الشعب الهوائية.", "harm": "قد يسبب رعشة في اليدين وتسارع القلب.", "benefit": "راحة سريعة للربو وضيق التنفس.", "use": ["بخة أو بختان عند ضيق التنفس."] }
    },
    {
        "id": 1018,
        "name": "Omeprazole",
        "ku": { "title": "ئۆمیپڕازۆڵ", "desc": "دەرمانێکە بۆ کەمکردنەوەی ترشەڵۆکی گەدە.", "harm": "بەکارهێنانی زۆر دەبێتە هۆی کێشەی هەرس.", "benefit": "بۆ چارەسەری دڵەکزێ و برینی گەدە.", "use": ["یەک حەب بەیانیان نیو کاتژمێر پێش نان."] },
        "en": { "title": "Omeprazole", "desc": "Medication to reduce stomach acid.", "harm": "Overuse may cause digestive problems.", "benefit": "Treats heartburn and stomach ulcers.", "use": ["One pill in the morning 30 mins before breakfast."] },
        "ar": { "title": "أوميبرازول", "desc": "دواء لتقليل حموضة المعدة.", "harm": "الاستخدام المفرط قد يسبب مشاكل هضمية.", "benefit": "يعالج حموضة المعدة وقرحة المعدة.", "use": ["قرص واحد صباحاً قبل الإفطار بـ٣٠ دقيقة."] }
    },
    {
        "id": 1019,
        "name": "Gloves",
        "ku": { "title": "دەستکێشی پزیشکی", "desc": "دەستکێشی یەکجار بەکارهێنان بۆ پاراستن.", "harm": "هەندێک جۆری لاتێکس هەستیاری دروست دەکات.", "benefit": "ڕێگری لە گواستنەوەی میکرۆب بۆ دەست دەکات.", "use": ["لەدەستکردن پێش دەستکاری کردنی برین."] },
        "en": { "title": "Medical Gloves", "desc": "Disposable gloves for protection.", "harm": "Some latex types cause allergies.", "benefit": "Prevents germ transfer to hands.", "use": ["Wear before handling wounds."] },
        "ar": { "title": "قفازات طبية", "desc": "قفازات تستخدم لمرة واحدة للحماية.", "harm": "بعض أنواع اللاتكس تسبب حساسية.", "benefit": "تمنع انتقال الجراثيم لليدين.", "use": ["تلبس قبل التعامل مع الجروح."] }
    },
    {
        "id": 1020,
        "name": "First Aid Kit",
        "ku": { "title": "جانتاى فریاگوزاری", "desc": "کۆمەڵێک شتی سەرەتایی پزیشکی لە یەک شوێندا.", "harm": "هیچ زیانێکی نییە تەنها ڕێکخستنە.", "benefit": "بۆ فریاکەوتنی خێرا لە کاتی برینداربوون.", "use": ["پێویستە هەموو کات لە ماڵ و سەیارەدا هەبێت."] },
        "en": { "title": "First Aid Kit", "desc": "Collection of basic medical supplies.", "harm": "No harm, just an organization tool.", "benefit": "For quick emergency response during injuries.", "use": ["Must be kept in homes and cars at all times."] },
        "ar": { "title": "حقيبة إسعافات", "desc": "مجموعة من المستلزمات الطبية الأساسية.", "harm": "لا توجد أضرار، هي أداة تنظيمية فقط.", "benefit": "للاستجابة السريعة للطوارئ عند الإصابات.", "use": ["يجب الاحتفاظ بها في المنازل والسيارات دائماً."] }
    },
    {
        "id": 1021,
        "name": "Vitamin D",
        "ku": { "title": "ڤیتامین D", "desc": "ڤیتامینێکی پێویست بۆ هەڵمژینی کالسیۆم.", "harm": "بڕی زۆر دەبێتە هۆی ژەهراوی بوون.", "benefit": "بۆ بەهێزکردنی ئێسک و ددانەکان.", "use": ["یەک دڵۆپ یان حەب ڕۆژانە بەپێی پشکنین."] },
        "en": { "title": "Vitamin D", "desc": "Vitamin needed for calcium absorption.", "harm": "High doses can cause toxicity.", "benefit": "For strengthening bones and teeth.", "use": ["One drop or pill daily based on test."] },
        "ar": { "title": "فيتامين D", "desc": "فيتامين ضروري لامتصاص الكالسيوم.", "harm": "الجرعات العالية تسبب تسمماً.", "benefit": "لتقوية العظام والأسنان.", "use": ["قطرة أو قرص يومياً حسب الفحص."] }
    },
    {
        "id": 1022,
        "name": "Calcium",
        "ku": { "title": "کالسیۆم", "desc": "ماددەیەکی کانزایی بۆ بنیاتنانی ئێسک.", "harm": "ڕەنگە ببێتە هۆی قەبزی و بەردی گورچیلە.", "benefit": "ڕێگری لە فشەڵبوونی ئێسک دەکات.", "use": ["ڕۆژانە ٥٠٠ بۆ ١٠٠٠ ملگم دوای نان."] },
        "en": { "title": "Calcium", "desc": "Mineral for building bones.", "harm": "May cause constipation and kidney stones.", "benefit": "Prevents osteoporosis.", "use": ["500 to 1000 mg daily after meals."] },
        "ar": { "title": "كالسيوم", "desc": "معدن لبناء العظام.", "harm": "قد يسبب إمساكاً وحصى الكلى.", "benefit": "يمنع هشاشة العظام.", "use": ["٥٠٠ إلى ١٠٠٠ ملغ يومياً بعد الأكل."] }
    },
    {
        "id": 1023,
        "name": "Iron",
        "ku": { "title": "ئاسن", "desc": "کانزایەک بۆ دروستکردنی هیمۆگلۆبین.", "harm": "ڕەنگە ببێتە هۆی ئازاری گەدە و قەبزی.", "benefit": "چارەسەری کەمخوێنی و بێهێزی دەکات.", "use": ["پێش نان یان دوای نان بە ڕاوێژی پزیشک."] },
        "en": { "title": "Iron", "desc": "Mineral for hemoglobin production.", "harm": "May cause stomach pain and constipation.", "benefit": "Treats anemia and weakness.", "use": ["Before or after meals as advised by doctor."] },
        "ar": { "title": "حديد", "desc": "معدن لإنتاج الهيموغلوبين.", "harm": "قد يسبب آلاماً في المعدة وإمساكاً.", "benefit": "يعالج فقر الدم والضعف.", "use": ["قبل أو بعد الأكل حسب استشارة الطبيب."] }
    },
    {
        "id": 1024,
        "name": "Alcohol",
        "ku": { "title": "ئەلکحولی پزیشکی", "desc": "ماددەیەکی پاکژکەرەوە بۆ پێست.", "harm": "پێست وشک دەکاتەوە و نابێت لە ناو چاو بدرێت.", "benefit": "کوشتنی بەکتریا و میکرۆب پێش دەرزی لێدان.", "use": ["سڕینی شوێنی مەبەست بە پارچە لۆکەیەک."] },
        "en": { "title": "Medical Alcohol", "desc": "Disinfectant substance for skin.", "harm": "Dries out skin, avoid contact with eyes.", "benefit": "Kills bacteria and germs before injections.", "use": ["Wipe the target area with a cotton pad."] },
        "ar": { "title": "كحول طبي", "desc": "مادة مطهرة للجلد.", "harm": "يجفف الجلد، يجب تجنب ملامسة العين.", "benefit": "قتل البكتيريا والجراثيم قبل الحقن.", "use": ["مسح المنطقة المستهدفة بقطعة قطن."] }
    },
    {
        "id": 1025,
        "name": "Bandage",
        "ku": { "title": "باندج", "desc": "پارچە قوماشێکی کشاو بۆ بەستنی برین.", "harm": "ئەگەر زۆر توند بێت خوێن دەوەستێنێت.", "benefit": "پاراستنی برین و جێگیرکردنی جومگەکان.", "use": ["پێچانەوەی دەوری شوێنی ئازار بە هێمنی."] },
        "en": { "title": "Bandage", "desc": "Elastic cloth for binding wounds.", "harm": "Can stop blood flow if too tight.", "benefit": "Protects wounds and stabilizes joints.", "use": ["Wrap gently around the painful area."] },
        "ar": { "title": "باندج", "desc": "قطعة قماش مرنة لربط الجروح.", "harm": "قد يوقف تدفق الدم إذا كان مشدوداً جداً.", "benefit": "حماية الجروح وتثبيت المفاصل.", "use": ["لفه بلطف حول المنطقة المصابة."] }
    },
    {
        "id": 1026,
        "name": "Stretcher",
        "ku": { "title": "سارینە", "desc": "ئامرازێک بۆ گواستنەوەی نەخۆش.", "harm": "کەوتنی نەخۆش لێی مەترسیدارە.", "benefit": "گواستنەوەی نەخۆشی بێهۆش یان زامدار.", "use": ["دانانی نەخۆش و بەستنی پشتوێنی سەلامەتی."] },
        "en": { "title": "Stretcher", "desc": "A tool for transporting patients.", "harm": "Falling off it is dangerous.", "benefit": "Transports unconscious or injured patients.", "use": ["Place patient and fasten safety belts."] },
        "ar": { "title": "نقالة", "desc": "أداة لنقل المرضى.", "harm": "سقوط المريض منها يشكل خطراً.", "benefit": "نقل المرضى فاقدي الوعي أو المصابين.", "use": ["وضع المريض وربط أحزمة الأمان."] }
    },
    {
        "id": 1027,
        "name": "Wheelchair",
        "ku": { "title": "کورسی کەمئەندام", "desc": "کورسییەکی چەرخدار بۆ جوڵە.", "harm": "هیچ زیانێکی نییە تەنها ئاگاداری کەوتن بن.", "benefit": "بۆ ئەو کەسانەی ناتوانن بە پێ بڕۆن.", "use": ["دانیشتن و لێخوڕین بە دەست یان کارەبا."] },
        "en": { "title": "Wheelchair", "desc": "A wheeled chair for mobility.", "harm": "No harm, just be careful of falls.", "benefit": "For people who cannot walk.", "use": ["Sit and drive manually or electrically."] },
        "ar": { "title": "كرسي متحرك", "desc": "كرسي ذو عجلات للتنقل.", "harm": "لا توجد أضرار، فقط الحذر من السقوط.", "benefit": "للأشخاص الذين لا يستطيعون المشي.", "use": ["الجلوس والقيادة يدوياً أو كهربائياً."] }
    },
    {
        "id": 1028,
        "name": "Crutches",
        "ku": { "title": "گۆچان", "desc": "ئامرازێکی پاڵپشت بۆ ڕۆیشتن.", "harm": "بەکارهێنانی هەڵە ئازاری بنباڵ دەدات.", "benefit": "هاوسەنگی و پاڵپشتی لە کاتی شکاوی قاڵ.", "use": ["گرتنی لەژێر باڵ و جوڵە بە هێواشی."] },
        "en": { "title": "Crutches", "desc": "Support tool for walking.", "harm": "Improper use causes armpit pain.", "benefit": "Balance and support during leg fractures.", "use": ["Hold under arms and move slowly."] },
        "ar": { "title": "عكازات", "desc": "أداة دعم للمشي.", "harm": "الاستخدام الخاطئ يسبب آلام الإبط.", "benefit": "التوازن والدعم عند كسور الساق.", "use": ["تمسك تحت الإبط والتحرك ببطء."] }
    },
    {
        "id": 1029,
        "name": "Syringe",
        "ku": { "title": "سرنج", "desc": "ئامرازێک بۆ لێدانی دەرزی یان کێشانی خوێن.", "harm": "مەترسی گواستنەوەی نەخۆشی ئەگەر دووبارە بەکاربێت.", "benefit": "گەیاندنی خێرای دەرمان بۆ ناو خوێن.", "use": ["بەکارهێنانی تەنها بۆ یەکجار و فڕێدان."] },
        "en": { "title": "Syringe", "desc": "Tool for injection or drawing blood.", "harm": "Risk of disease spread if reused.", "benefit": "Fast delivery of medication to blood.", "use": ["Single use only and then discard."] },
        "ar": { "title": "سرنج", "desc": "أداة للحقن أو سحب الدم.", "harm": "خطر انتقال الأمراض إذا أعيد استخدامها.", "benefit": "توصيل سريع للدواء إلى الدم.", "use": ["تستخدم لمرة واحدة فقط ثم ترمى."] }
    },
    {
        "id": 1030,
        "name": "Microscope",
        "ku": { "title": "مایکرۆسکۆپ", "desc": "ئامێرێک بۆ بینینی شتە زۆر وردەکان.", "harm": "هیچ زیانێکی فیزیایی نییە.", "benefit": "دیاریکردنی جۆری بەکتریا و ڤایرۆس لە تاقیگە.", "use": ["دانانی نموونەکە و ڕێکخستنی هاوێنەکان."] },
        "en": { "title": "Microscope", "desc": "Device for seeing microscopic things.", "harm": "No physical harm.", "benefit": "Detects bacteria and viruses in labs.", "use": ["Place sample and adjust the lenses."] },
        "ar": { "title": "مجهر", "desc": "جهاز لرؤية الأشياء المجهرية.", "harm": "لا توجد أضرار جسدية.", "benefit": "يكشف البكتيريا والفيروسات في المختبرات.", "use": ["وضع العينة وتعديل العدسات."] }
    },
    {
        "id": 1031,
        "name": "Pulse Oximeter",
        "ku": { "title": "ئۆکسیمیتەر", "desc": "ئامێرێک بۆ پێوانی ئۆکسجین و لێدانی دڵ.", "harm": "ئەگەر پەنجە سارد بێت ئەنجامەکەی هەڵەیە.", "benefit": "زانینی ئاستی ئۆکسجین لە کاتی نەخۆشی.", "use": ["خستنە ناو پەنجەی ناوەڕاست و چاوەڕوانی."] },
        "en": { "title": "Pulse Oximeter", "desc": "Device for oxygen and pulse measurement.", "harm": "Incorrect reading if fingers are cold.", "benefit": "Monitoring oxygen levels during illness.", "use": ["Insert middle finger and wait."] },
        "ar": { "title": "جهاز نبض", "desc": "جهاز لقياس الأكسجين والنبض.", "harm": "قراءة خاطئة إذا كانت الأصابع باردة.", "benefit": "مراقبة مستويات الأكسجين أثناء المرض.", "use": ["إدخال الإصبع الأوسط والانتظار."] }
    },
    {
        "id": 1032,
        "name": "Inhaler",
        "ku": { "title": "بوخاخ", "desc": "ئامرازێک بۆ گەیاندنی دەرمان بۆ سییەکان.", "harm": "وشکبوونی دەم و قوڕگ.", "benefit": "چارەسەری خێرای ڕەبۆ و تەنگەنەفەسی.", "use": ["هەڵمژینی یەک پەمپ و گرتنی هەناسە."] },
        "en": { "title": "Inhaler", "desc": "Tool for delivering medicine to lungs.", "harm": "Dryness of mouth and throat.", "benefit": "Quick relief for asthma and dyspnea.", "use": ["Inhale one pump and hold breath."] },
        "ar": { "title": "بخاخ", "desc": "أداة لتوصيل الدواء للرئتين.", "harm": "جفاف الفم والحلق.", "benefit": "راحة سريعة للربو وضيق التنفس.", "use": ["استنشاق بخة واحدة وحبس النفس."] }
    },
    {
        "id": 1033,
        "name": "Eye Drops",
        "ku": { "title": "قەترەی چاو", "desc": "دەرمانی شل بۆ پاککردنەوەی چاو.", "harm": "ڕەنگە ببێتە هۆی لێڵی بینین بۆ ماوەیەکی کەم.", "benefit": "بۆ چارەسەری هەوکردن و سووربوونەوەی چاو.", "use": ["تکاندنی یەک دڵۆپ لە ناو چاو."] },
        "en": { "title": "Eye Drops", "desc": "Liquid medicine for eye cleaning.", "harm": "May cause temporary blurred vision.", "benefit": "Treats eye infection and redness.", "use": ["Drop one drop into the eye."] },
        "ar": { "title": "قطرة عين", "desc": "دواء سائل لتنظيف العين.", "harm": "قد يسبب غباشاً مؤقتاً في الرؤية.", "benefit": "يعالج التهاب العين واحمرارها.", "use": ["تقطير قطرة واحدة في العين."] }
    },
    {
        "id": 1034,
        "name": "Ear Drops",
        "ku": { "title": "قەترەی گوێ", "desc": "دەرمانی شل بۆ ناو گوێ.", "harm": "ڕەنگە هەستی سووتان دروست بکات.", "benefit": "بۆ چارەسەری ئازار و کێمی گوێ.", "use": ["پاڵکەوتن لەسەر لایەک و تکاندن."] },
        "en": { "title": "Ear Drops", "desc": "Liquid medicine for the ear.", "harm": "May cause a burning sensation.", "benefit": "Treats ear pain and discharge.", "use": ["Lie on one side and drop in."] },
        "ar": { "title": "قطرة أذن", "desc": "دواء سائل للأذن.", "harm": "قد يسبب شعوراً بالحرقان.", "benefit": "يعالج آلام الأذن وإفرازاتها.", "use": ["الاستلقاء على جانب واحد والتقطير."] }
    },
    {
        "id": 1035,
        "name": "Cough Syrup",
        "ku": { "title": "شەربەتی کۆکە", "desc": "دەرمانی شل بۆ ئارامکردنەوەی کۆکە.", "harm": "زۆربەی جۆرەکانی خەواڵوویی دروست دەکات.", "benefit": "نەهێشتنی کۆکەی وشک و بەڵغەم.", "use": ["یەک کەوچک پێش خەوتن بخورێت."] },
        "en": { "title": "Cough Syrup", "desc": "Liquid medicine to soothe cough.", "harm": "Most types cause drowsiness.", "benefit": "Eliminates dry and productive cough.", "use": ["Take one spoon before bedtime."] },
        "ar": { "title": "شراب سعال", "desc": "دواء سائل لتهدئة السعال.", "harm": "معظم الأنواع تسبب النعاس.", "benefit": "يزيل السعال الجاف والرطب.", "use": ["تناول ملعقة قبل النوم."] }
    },
    {
        "id": 1036,
        "name": "Scalpel",
        "ku": { "title": "موسی نەشتەرگەری", "desc": "چەقۆیەکی زۆر تیژ بۆ بڕینی پێست.", "harm": "زۆر مەترسیدارە ئەگەر بە هەڵە بەکاربێت.", "benefit": "بۆ ئەنجامدانی نەشتەرگەری ورد.", "use": ["تەنها لەلایەن پزیشکی پسپۆڕ بەکاردێت."] },
        "en": { "title": "Scalpel", "desc": "Very sharp knife for skin incision.", "harm": "Very dangerous if misused.", "benefit": "For performing precise surgeries.", "use": ["Only used by a specialist doctor."] },
        "ar": { "title": "مشرط", "desc": "سكين حاد جداً لشق الجلد.", "harm": "خطير جداً إذا استخدم بشكل خاطئ.", "benefit": "لإجراء عمليات جراحية دقيقة.", "use": ["يستخدم فقط من قبل طبيب مختص."] }
    },
    {
        "id": 1037,
        "name": "Turmeric",
        "ku": { "title": "زەردەچەوە", "desc": "بەهاراتێکی زەرد و دەرمانییە.", "harm": "بڕی زۆر دەبێتە هۆی کێشەی گورچیلە.", "benefit": "دژە هەوکردنێکی زۆر بەهێزە.", "use": ["تێکەڵکردنی لەگەڵ خواردن یان شیر."] },
        "en": { "title": "Turmeric", "desc": "A yellow medicinal spice.", "harm": "High amounts cause kidney issues.", "benefit": "A very strong anti-inflammatory.", "use": ["Mix with food or milk."] },
        "ar": { "title": "كركم", "desc": "توابل صفراء علاجية.", "harm": "الكميات العالية تسبب مشاكل كلوية.", "benefit": "مضاد للالتهابات قوي جداً.", "use": ["يخلط مع الطعام أو الحليب."] }
    },
    {
        "id": 1038,
        "name": "Green Tea",
        "ku": { "title": "چای سەوز", "desc": "جۆرە چایەکە کە دژە ئۆکسانی تێدایە.", "harm": "ڕەنگە ببێتە هۆی کەمخەوی بەهۆی کافایین.", "benefit": "یارمەتی دابەزاندنی کێش و دڵ دەدات.", "use": ["خواردنەوەی دوو کوپ ڕۆژانە."] },
        "en": { "title": "Green Tea", "desc": "Tea type containing antioxidants.", "harm": "May cause insomnia due to caffeine.", "benefit": "Helps in weight loss and heart health.", "use": ["Drink two cups daily."] },
        "ar": { "title": "شاي أخضر", "desc": "نوع شاي يحتوي مضادات أكسدة.", "harm": "قد يسبب الأرق بسبب الكافيين.", "benefit": "يساعد في إنقاص الوزن وصحة القلب.", "use": ["شرب كوبين يومياً."] }
    },
    {
        "id": 1039,
        "name": "Peppermint",
        "ku": { "title": "نەعنا", "desc": "ڕووەکێکی بۆنخۆش و دەرمانییە.", "harm": "بۆ ئەو کەسانەی گەدەیان ترشەڵۆکی زۆرە نابێت.", "benefit": "ئارامکردنەوەی گەدە و غازات.", "use": ["کوڵاندنی گەڵاکانی و خواردنەوەی."] },
        "en": { "title": "Peppermint", "desc": "A fragrant medicinal plant.", "harm": "Not for people with acid reflux.", "benefit": "Soothes stomach and reduces gas.", "use": ["Boil the leaves and drink."] },
        "ar": { "title": "نعناع", "desc": "نبات عطري وعلاجي.", "harm": "لا يصلح لمن لديهم حموضة معدة.", "benefit": "تهدئة المعدة وتقليل الغازات.", "use": ["غلي الأوراق وشربها."] }
    },
    {
        "id": 1040,
        "name": "Chamomile",
        "ku": { "title": "بەیبوون", "desc": "گوڵێکی بچووکی سپی و زەردە.", "harm": "ڕەنگە ببێتە هۆی خوران لە هەندێک کەس.", "benefit": "بۆ خەوێکی ئارام و نەهێشتنی قەلەقی.", "use": ["خواردنەوەی وەک چایەکی گەرم."] },
        "en": { "title": "Chamomile", "desc": "Small white and yellow flower.", "harm": "May cause itching in some people.", "benefit": "For peaceful sleep and anti-anxiety.", "use": ["Drink as a warm tea."] },
        "ar": { "title": "بابونج", "desc": "زهرة بيضاء وصفراء صغيرة.", "harm": "قد يسبب حكة لبعض الناس.", "benefit": "لنوم هادئ ومضاد للقلق.", "use": ["يشرب كشاي دافئ."] }
    },
    {
        "id": 1041,
        "name": "Magnesium",
        "ku": { "title": "مەگنیسیۆم", "desc": "کانزایەکی پێویست بۆ ماسولکەکان.", "harm": "بڕی زۆر دەبێتە هۆی سکچوون.", "benefit": "نەهێشتنی گرژبوونی ماسولکە و باشکردنی خەو.", "use": ["یەک حەب پێش خەوتن بخورێت."] },
        "en": { "title": "Magnesium", "desc": "Mineral needed for muscles.", "harm": "High doses cause diarrhea.", "benefit": "Eliminates cramps and improves sleep.", "use": ["Take one pill before bedtime."] },
        "ar": { "title": "مغنيسيوم", "desc": "معدن ضروري للعضلات.", "harm": "الجرعات العالية تسبب الإسهال.", "benefit": "يزيل تشنج العضلات ويحسن النوم.", "use": ["تناول قرص قبل النوم."] }
    },
    {
        "id": 1042,
        "name": "Probiotics",
        "ku": { "title": "پڕۆبایۆتیک", "desc": "بەکتریای سوودبەخش بۆ ڕیخۆڵە.", "harm": "لە سەرەتادا ڕەنگە غازات دروست بکات.", "benefit": "باشکردنی هەرس و تەندروستی ڕیخۆڵە.", "use": ["یەک کەپسول ڕۆژانە."] },
        "en": { "title": "Probiotics", "desc": "Beneficial bacteria for bowels.", "harm": "May cause initial gas.", "benefit": "Improves digestion and bowel health.", "use": ["One capsule daily."] },
        "ar": { "title": "بروبايوتك", "desc": "بكتيريا مفيدة للأمعاء.", "harm": "قد يسبب غازات في البداية.", "benefit": "تحسين الهضم وصحة الأمعاء.", "use": ["كبسولة واحدة يومياً."] }
    },
    {
        "id": 1043,
        "name": "Hand Sanitizer",
        "ku": { "title": "پاکژکەرەوەی دەست", "desc": "جێڵێکی ئەلکحولی بۆ کوشتنی میکرۆب.", "harm": "زۆرییەکەی پێست وشک و قڵیشاو دەکات.", "benefit": "پاراستنی خێرا لە ڤایرۆس کاتێک ئاو نییە.", "use": ["لێدانی بڕێکی کەم لە دەست و سڕین."] },
        "en": { "title": "Hand Sanitizer", "desc": "Alcoholic gel to kill germs.", "harm": "Dries and cracks skin if overused.", "benefit": "Quick virus protection without water.", "use": ["Apply small amount to hands and rub."] },
        "ar": { "title": "معقم يدين", "desc": "جل كحولي لقتل الجراثيم.", "harm": "كثرته تجفف وتشقق الجلد.", "benefit": "حماية سريعة من الفيروسات بلا ماء.", "use": ["وضع كمية صغيرة على اليد ومسحها."] }
    },
    {
        "id": 1044,
        "name": "Hospital Bed",
        "ku": { "title": "قەرەوێڵەی پزیشکی", "desc": "جێگایەکی تایبەت بۆ نەخۆش.", "harm": "بەرز و نزمییەکەی ئەگەر تێک بچێت مەترسیدارە.", "benefit": "حەوانەوەی نەخۆش و ئاسانکاری چارەسەر.", "use": ["پاڵکەوتنی نەخۆش و ڕێکخستنی جێگاکە."] },
        "en": { "title": "Hospital Bed", "desc": "Special bed for patients.", "harm": "Mechanism failure is dangerous.", "benefit": "Patient comfort and treatment ease.", "use": ["Lie the patient and adjust the bed."] },
        "ar": { "title": "سرير طبي", "desc": "سرير خاص للمرضى.", "harm": "فشل الآلية يشكل خطراً.", "benefit": "راحة المريض وتسهيل العلاج.", "use": ["استلقاء المريض وتعديل السرير."] }
    },
    {
        "id": 1045,
        "name": "Test Tube",
        "ku": { "title": "تیوبی تاقیگە", "desc": "تیوبێکی شووشەیی بۆ کۆکردنەوەی خوێن.", "harm": "شکانی دەبێتە هۆی برینداربوونی دەست.", "benefit": "بۆ گواستنەوەی نموونەی پشکنین.", "use": ["خستنە ناو ئامێری تاقیگە."] },
        "en": { "title": "Test Tube", "desc": "Glass tube for blood collection.", "harm": "Breaking causes hand injury.", "benefit": "For transporting lab samples.", "use": ["Insert into lab machinery."] },
        "ar": { "title": "أنبوب اختبار", "desc": "أنبوب زجاجي لجمع الدم.", "harm": "كسره يسبب إصابة اليد.", "benefit": "لنقل عينات المختبر.", "use": ["يدخل في أجهزة المختبر."] }
    },
    {
        "id": 1046,
        "name": "Centrifuge",
        "ku": { "title": "سەنتەرفیوج", "desc": "ئامێرێک بۆ جیاکردنەوەی پێکهاتەکانی خوێن.", "harm": "لەرینەوەی بەهێز ئەگەر هاوسەنگ نەبێت.", "benefit": "بەدەستهێنانی پلازما و سیرەم.", "use": ["دانانی تیوبەکان بە هاوسەنگی."] },
        "en": { "title": "Centrifuge", "desc": "Device to separate blood components.", "harm": "Strong vibration if unbalanced.", "benefit": "Obtaining plasma and serum.", "use": ["Place tubes balanced."] },
        "ar": { "title": "جهاز طرد مركزي", "desc": "جهاز لفصل مكونات الدم.", "harm": "اهتزاز قوي إذا لم يتوازن.", "benefit": "الحصول على البلازما والمصل.", "use": ["وضع الأنابيب بتوازن."] }
    },
    {
        "id": 1047,
        "name": "Glucometer",
        "ku": { "title": "ئامێری شەکرە", "desc": "ئامێرێکی بچووک بۆ پێوانی شەکر لە ماڵەوە.", "harm": "ئازاری دەرزییەکەی.", "benefit": "کۆنتڕۆڵکردنی شەکرە بە ئاسانی.", "use": ["خستنە ناو شریتەکە و دڵۆپە خوێنێک."] },
        "en": { "title": "Glucometer", "desc": "Small device for home sugar testing.", "harm": "Pain from the lancet.", "benefit": "Controlling diabetes easily.", "use": ["Insert strip and a blood drop."] },
        "ar": { "title": "جهاز سكري", "desc": "جهاز صغير لفحص السكر منزلياً.", "harm": "ألم الوخزة.", "benefit": "السيطرة على السكري بسهولة.", "use": ["إدخال الشريط وقطرة دم."] }
    },
    {
        "id": 1048,
        "name": "Defibrillator",
        "ku": { "title": "شۆکی کارەبایی", "desc": "ئامێرێک بۆ گەڕانەوەی لێدانی دڵ.", "harm": "مەترسی کارەبا لێدان ئەگەر نادروست بێت.", "benefit": "ڕزگارکردنی ژیان لە کاتی وەستانی دڵ.", "use": ["دانانی لەسەر سنگ و دانانی شۆکەکە."] },
        "en": { "title": "Defibrillator", "desc": "Device to restore heart rhythm.", "harm": "Electric shock risk if misused.", "benefit": "Saves lives during cardiac arrest.", "use": ["Place on chest and deliver shock."] },
        "ar": { "title": "جهاز صدمات", "desc": "جهاز لاستعادة نبض القلب.", "harm": "خطر الصعق إذا أسيء استخدامه.", "benefit": "ينقذ الحياة عند توقف القلب.", "use": ["يوضع على الصدر وإعطاء الصدمة."] }
    },
    {
        "id": 1049,
        "name": "Surgical Mask",
        "ku": { "title": "دەمامکی نەشتەرگەری", "desc": "دەمامکێکی شینی سێ چین.", "harm": "تەنها بۆ ٢-٤ کاتژمێر کار دەکات.", "benefit": "ڕێگری لە میکرۆب لە کاتی نەشتەرگەری.", "use": ["بەستنی بە دەوری گوێدا."] },
        "en": { "title": "Surgical Mask", "desc": "Blue 3-ply mask.", "harm": "Only effective for 2-4 hours.", "benefit": "Prevents germs during surgery.", "use": ["Tie around the ears."] },
        "ar": { "title": "كمامة جراحية", "desc": "كمامة زرقاء ثلاثية الطبقات.", "harm": "تعمل لمدة ٢-٤ ساعات فقط.", "benefit": "تمنع الجراثيم أثناء الجراحة.", "use": ["تربط حول الأذنين."] }
    },
    {
        "id": 1050,
        "name": "CPAP Machine",
        "ku": { "title": "ئامێری خەو", "desc": "ئامێرێک بۆ ئەوانەی لە خەودا هەناسەیان دەوەستێت.", "harm": "وشکبوونەوەی دەم و لووت.", "benefit": "باشکردنی کوالێتی خەو و ئۆکسجین.", "use": ["بەستنی دەمامکی ئامێرەکە پێش خەوتن."] },
        "en": { "title": "CPAP Machine", "desc": "Machine for sleep apnea patients.", "harm": "Drying of mouth and nose.", "benefit": "Improves sleep quality and oxygen.", "use": ["Wear the device mask before sleep."] },
        "ar": { "title": "جهاز تنفس للنوم", "desc": "جهاز لمن يتوقف تنفسهم أثناء النوم.", "harm": "جفاف الفم والأنف.", "benefit": "تحسين جودة النوم والأكسجين.", "use": ["لبس كمامة الجهاز قبل النوم."] }
    }
];
