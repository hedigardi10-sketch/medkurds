const diseasesData = [
    {
        id: 1101,
        ku: {
            title: "هەوکردنی سییەکان (Pneumonia)",
            desc: "هەوکردنی توند و تووشکەری یەکێک یان هەردوو سییەکان بەهۆی بەکتریا، ڤایرۆس یان کەڕووەوە کە دەبێتە هۆی پڕبوونی کیسە هەواکان لە کێم یان شلە.",
            symptoms: ["کۆکەی توند بە بەڵغەمی سەوز، زەرد یان خوێناوی", "تا، لەرز و ئارەقکردنەوەی زۆر", "تەنگەنەفەسی و خێرابوونی هەناسەدان", "ئازاری تیژی سنگ لە کاتی هەناسەدان یان کۆکین", "خەواڵوویی و ماندوێتی زۆر بەتایبەت لە بەساڵاچووان"],
            treatment: ["وەرگرتنی دژەبەکتریا (ئەگەر بەکتریایی بێت) یان دژەڤایرۆس بە ڕەچەتە", "بەکارهێنانی دەرمانی دابەزاندنی تا و کەمکردنەوەی ئازار (وەک پاراسیتامۆڵ)", "چارەسەر بە ئۆکسجین لە نەخۆشخانە بۆ حالەتە توندەکان", "بەکارهێنانی دەرمانی فراوانکەری بۆریچکەکانی هەناسە"],
            advice: "پشووی تەواو بدە، بڕێکی زۆر لە شلەمەنی گەرم بخوەرەوە، و بە تەواوی دووربکەوەرەوە لە جگەرەکێشان و شوێنی دووکەڵاو.",
            warning: "ئەگەر هەستت بە تەنگەنەفەسی توند، شینبوونی لێو یان نینۆکەکان، یان بەرز مانەوەی تا کرد، پێویستە دەستبەجێ سەردانی بەشی فریاکەوتن بکەیت."
        },
        en: {
            title: "Pneumonia",
            desc: "An infection that inflames the air sacs in one or both lungs, which may fill with fluid or pus, caused by bacteria, viruses, or fungi.",
            symptoms: ["Cough which may produce greenish, yellow, or bloody mucus", "Fever, sweating, and shaking chills", "Shortness of breath and rapid breathing", "Sharp or stabbing chest pain that worsens when breathing deeply or coughing", "Fatigue, loss of appetite, and confusion in older adults"],
            treatment: ["Antibiotic therapy (for bacterial pneumonia) or antivirals as prescribed", "Fever reducers and pain relievers (like Paracetamol or Ibuprofen)", "Oxygen therapy for severe cases requiring hospitalization", "Bronchodilators to help open airways"],
            advice: "Get plenty of rest, drink lots of warm fluids to help loosen mucus, and strictly avoid smoking or exposure to secondhand smoke.",
            warning: "Seek immediate medical care if you experience severe difficulty breathing, persistent chest pain, a high fever that won't go down, or bluish lips/fingertips."
        },
        ar: {
            title: "التهاب الرئة (Pneumonia)",
            desc: "عدوى تؤدي إلى التهاب الحويصلات الهوائية في إحدى الرئتين أو كلتيهما، حيث قد تمتلئ بالسوائل أو الصديد، وتسببها البكتيريا أو الفيروسات أو الفطريات.",
            symptoms: ["سعال قد ينتج عنه مخاط أخضر أو أصفر أو دموي", "حمى، تعرق، وقشعريرة مصحوبة بارتجاف", "ضيق في التنفس وتنفس سريع وضحي", "ألم حاد في الصدر يزداد سوءاً عند التنفس العميق أو السعال", "تعب شديد، وفقدان الشهية، والارتباك لدى كبار السن"],
            treatment: ["مضادات حيوية (للالتهاب البكتيري) أو مضادات فيروسية بوصفة طبية", "خافضات الحرارة ومسكنات الألم (مثل الباراسيتامول أو الإيبوبروفين)", "العلاج بالأكسجين للحالات الشديدة التي تتطلب دخول المستشفى", "موسعات الشعب الهوائية لتسهيل التنفس"],
            advice: "احصل على قسط كافٍ من الراحة، واشرب الكثير من السوائل الدافئة للمساعدة في إذابة البلغم، وتجنب التدخين تماماً.",
            warning: "يجب التماس الرعاية الطبية الفورية إذا كنت تعاني من صعوبة شديدة في التنفس، أو ألم مستمر في الصدر، أو حمى شديدة لا تنخفض، أو زرقة في الشفاه وأطراف الأصابع."
        }
    },
    {
        id: 1102,
        ku: {
            title: "ڕەبۆ (Asthma)",
            desc: "نەخۆشییەکی درێژخایەنی بۆرییەکانی هەناسەیە کە تێیدا ڕێڕەوەکانی هەناسە دەئاوسێن و تەسک دەبنەوە، ئەمەش دەبێتە هۆی زەحمەتبوونی هەناسەدان.",
            symptoms: ["تەنگەنەفەسی توند و ناڕەحەت کەر", "هەستکردن بە توندی یان ئازار لە ناو سنگدا", "فیکە فیک یان زیڕەی سنگ لە کاتی هەناسەداندا", "کۆکەی وشک کە لە شەوان و بەیانیانی زوودا خراپتر دەبێت", "تێکچوونی خەو بەهۆی کۆکین یان تەنگەنەفەسییەوە"],
            treatment: ["بەکارهێنانی پەمپی فریاکەوتنی خێرا (فراوانکەری بۆری هەناسە وەک ئەلبۆتیرۆڵ)", "بەکارهێنانی دەرمانی درێژخایەنی کۆنترۆڵکەر (وەک پەمپە ستیرۆیدییەکان)", "بەکارهێنانی ئامێری نیبولایزەر (مۆگافی خێرا) لە کاتی هێرشی تونددا", "بەکارهێنانی دەرمانی دژە هەستیاری وەک مۆنتیلوکاست"],
            advice: "هەمیشە پەمپەکەت لەگەڵ خۆتدا هەڵبگرە. بە تەواوی لە تۆز، بۆنی توند، مووی ئاژەڵ، و هەوای زۆر سارد دوور بکەوەرەوە.",
            warning: "ئەگەر لە کاتی هێرشی ڕەبۆدا پەمپی خێرا کاریگەری نەبوو، یان قسەکردنت بۆ نەدەکرا بەهۆی کەمی هەناسە، دەستبەجێ بچۆ بۆ فریاکەوتن."
        },
        en: {
            title: "Asthma",
            desc: "A chronic respiratory condition characterized by inflammation and narrowing of the airways, causing periodic wheezing, shortness of breath, chest tightness, and coughing.",
            symptoms: ["Shortness of breath and difficulty exhaling", "Chest tightness or pressure", "Wheezing or whistling sound when exhaling", "Dry coughing spells that worsen at night or early morning", "Trouble sleeping caused by shortness of breath or coughing"],
            treatment: ["Quick-relief inhalers (bronchodilators like Albuterol)", "Long-term control inhalers (inhaled corticosteroids)", "Nebulizer therapy for acute severe episodes", "Oral anti-allergy medications (e.g., Montelukast)"],
            advice: "Always carry your rescue inhaler. Identify and avoid triggers such as dust, strong odors, tobacco smoke, pet dander, and cold air.",
            warning: "If your rescue inhaler fails to relieve symptoms during an attack, or you struggle to speak in full sentences due to lack of breath, seek emergency medical help immediately."
        },
        ar: {
            title: "الربو (Asthma)",
            desc: "حالة تنفسية مزمنة تتميز بالتهاب وتضيق مجاري الهواء، مما يؤدي إلى صعوبة في التنفس، ونوبات من الأزيز، وضيق الصدر، والسعال.",
            symptoms: ["ضيق في التنفس وصعوبة في الزفير", "ضيق أو ألم في الصدر", "أزيز أو صوت صفير عند التنفس", "نوبات سعال جاف تزداد سوءاً في الليل أو في الصباح الباكر", "اضطرابات النوم بسبب السعال أو ضيق التنفس"],
            treatment: ["بخاخات الإغاثة السريعة (موسعات الشعب الهوائية مثل ألبوتيرول)", "بخاخات التحكم طويلة الأجل (الكورتيكوستيرويدات المستنشقة)", "العلاج بجهاز النيبولايزر (التبخيرة) في الحالات الحادة", "أدوية الحساسية الفموية (مثل مونتيلوكاست)"],
            advice: "احمل دائماً بخاخ الإغاثة السريعة الخاص بك. حدد وتجنب المهيجات مثل الغبار، والروائح القوية، ودخان التبغ، ووبر الحيوانات، والهواء البارد.",
            warning: "إذا فشل بخاخ الإنقاذ في تخفيف الأعراض أثناء النوبة، أو إذا كنت تواجه صعوبة في التحدث بجمل كاملة بسبب ضيق التنفس، فتوجه إلى الطوارئ فوراً."
        }
    },
    {
        id: 1103,
        ku: {
            title: "شەکرە (Diabetes Mellitus)",
            desc: "کۆمەڵێک نەخۆشی میتابۆلیکییە کە تێیدا ئاستی شەکری خوێن بۆ ماوەیەکی درێژ بەرز دەبێتەوە، بەهۆی ناتەواوی لە بەرهەمهێنان یان بەکارهێنانی هۆرمۆنی ئینسۆلین.",
            symptoms: ["تینوێتی و وشکبوونەوەی زۆری دەم", "میزکردنی زۆر و بەردەوام بەتایبەت لە شەواندا", "برسیێتی توند و دابەزینی کێش بەبێ هۆکار", "ماندوێتی بەردەوام و بێهێزی گشتی جەستە", "درەنگ چاکبوونەوەی برینەکان و تاریكبوونی بینین"],
            treatment: ["دەرزی ئینسۆلین (پێویستی حەتمی بۆ جۆری یەکەم و بەشێک لە جۆری دووەم)", "حەبی ڕێکخەری شەکرە (وەک میتفۆرمین) بۆ جۆری دووەم", "پشکنینی ڕۆژانە و بەردەوامی ڕێژەی شەکری خوێن لە ماڵەوە", "چاندنی پەنکریاس لە هەندێک حاڵەتی زۆر دەگمەندا"],
            advice: "پابەندبە بە خۆراکی کەم شەکر و پڕ ڕیشاڵ. ڕۆژانە وەرزش بکە و بە وردی پێست و قاچەکانت بپشکنە بۆ ڕێگریکردن لە برین.",
            warning: "دابەزینی خێرای شەکری خوێن (کەمی شەکر) یان بەرزبوونەوەی لە ڕاددەبەدەر (DKA) دەبێتە هۆی لەهۆشچوون و خێرا مردن، ئەگەر دەستبەجێ چارەسەر نەکرێت."
        },
        en: {
            title: "Diabetes Mellitus",
            desc: "A group of metabolic diseases characterized by high blood sugar levels over a prolonged period, resulting from defects in insulin secretion, action, or both.",
            symptoms: ["Increased thirst and dry mouth", "Frequent urination, especially at night", "Extreme hunger and unexplained weight loss", "Chronic fatigue and generalized physical weakness", "Slow-healing sores or cuts and blurry vision"],
            treatment: ["Insulin therapy (essential for Type 1, sometimes required for Type 2)", "Oral diabetes medications (such as Metformin) for Type 2", "Regular blood glucose monitoring with home glucometers", "Pancreas transplant in rare, highly selected cases"],
            advice: "Follow a strictly low-sugar, high-fiber diet. Exercise daily, stay hydrated, and inspect your feet daily for cuts, blisters, or redness.",
            warning: "Severely low blood sugar (hypoglycemia) or dangerously high blood sugar (diabetic ketoacidosis/DKA) can lead to loss of consciousness or death if not treated immediately."
        },
        ar: {
            title: "السكري (Diabetes Mellitus)",
            desc: "مجموعة من الأمراض التمثيلية الغذائية التي تتميز بارتفاع مستويات السكر في الدم لفترة طويلة، نتيجة خلل في إفراز الإنسولين أو عمله أو كليهما.",
            symptoms: ["العطش الشديد وجفاف الفم", "كثرة التبول، خاصة أثناء الليل", "الجوع الشديد وفقدان الوزن غير المبرر", "التعب المزمن والضعف الجسدي العام", "بطء التئام الجروح والقصور في الرؤية"],
            treatment: ["العلاج بالإنسولين (ضروري للنوع الأول، ومطلوب أحياناً للنوع الثاني)", "أدوية السكري الفموية (مثل الميتفورمين) للنوع الثاني", "مراقبة مستمرة لمستويات الجلوكوز في الدم بالمنزل", "زراعة البنكرياس في حالات نادرة جداً ومحددة"],
            advice: "اتبع نظاماً غذائياً منخفض السكريات وغنياً بالألياف. مارس الرياضة يومياً، وافحص قدميك يومياً بحثاً عن أي جروح أو قرح.",
            warning: "انخفاض السكر الشديد (الهبوط) أو الارتفاع الحاد (الحماض الكيتوني السكري/DKA) قد يؤدي إلى غيبوبة أو الوفاة إذا لم يعالج على وجه السرعة."
        }
    },
    {
        id: 1104,
        ku: {
            title: "بەرزی پەستانی خوێن (Hypertension)",
            desc: "نەخۆشییەکی بێدەنگە کە تێیدا هێزی پاڵنەری خوێن دژی دیواری خوێنبەرەکان بە شێوەیەکی بەردەوام بەرزە، ئەمەش فشار دەخاتە سەر دڵ.",
            symptoms: ["زۆرجار هیچ نیشانەیەکی نییە (بکوژی بێدەنگ)", "سەرئێشەی بەردەوام بەتایبەت لە دواوەی سەر", "سەرگێژخواردن و تێکچوونی هاوسەنگی", "تەنگەنەفەسی یان ئازاری سووکی ناو سنگ", "خوێنبەربوونی لووت بەبێ هۆکاری دەرەکی"],
            treatment: ["بەکارهێنانی دەرمانی دابەزاندنی زەخت (وەک ACE inhibitors یان Beta-blockers)", "خواردنی دەرمانی میزپێکەر (Diuretics) بۆ کەمکردنەوەی شلە لە جەستەدا", "کۆنترۆڵکردنی پەستان بە شێوەی خولی ڕۆژانە", "بەکارهێنانی دەرمانی فراوانکەری خوێنبەرەکان (Calcium Channel Blockers)"],
            advice: "خواردنی خوێ بە تەواوی کەم بکەرەوە. کێشت دابەزێنە، لە دڵەڕاوکێ دووربکەوەرەوە، و ڕۆژانە لانیکەم ٣٠ خولەک پیادەڕەوی بکە.",
            warning: "بەرزی بەردەوام و بێ کۆنترۆڵی پەستانی خوێن هۆکاری سەرەکییە بۆ جەڵتەی مێشک، جەڵتەی دڵ، و لەکارکەوتنی گورچیلە."
        },
        en: {
            title: "Hypertension (High Blood Pressure)",
            desc: "A common condition in which the long-term force of the blood against your artery walls is high enough that it may eventually cause heart disease or stroke.",
            symptoms: ["Often has no symptoms at all (known as the 'silent killer')", "Dull headaches, especially in the back of the head", "Dizziness, vertigo, or lightheadedness", "Shortness of breath or mild chest pain", "Frequent or unexplained nosebleeds"],
            treatment: ["Antihypertensive drugs (e.g., ACE inhibitors or Beta-blockers)", "Diuretics (water pills) to reduce blood volume and pressure", "Regular daily monitoring and recording of blood pressure", "Calcium Channel Blockers to relax and widen blood vessels"],
            advice: "Strictly reduce sodium (salt) intake. Maintain a healthy body weight, manage stress levels, and walk for at least 30 minutes daily.",
            warning: "Hypertension left untreated or poorly managed significantly increases your risk of stroke, heart attack, aneurysm, and kidney failure."
        },
        ar: {
            title: "ارتفاع ضغط الدم (Hypertension)",
            desc: "حالة شائعة تكون فيها قوة دفع الدم طويلة الأمد ضد جدران الشرايين مرتفعة بما يكفي للتسبب في نهاية المطاف في مشاكل صحية مثل أمراض القلب أو السكتة الدماغية.",
            symptoms: ["غالباً لا توجد له أي أعراض على الإطلاق (يسمى 'القاتل الصامت')", "صداع خفيف، خاصة في الجزء الخلفي من الرأس", "دوار، دوخة، أو عدم اتزان", "ضيق في التنفس أو ألم خفيف في الصدر", "نزيف متكرر من الأنف دون سبب واضح"],
            treatment: ["أدوية خفض ضغط الدم (مثل مثبطات الإنزيم المحول للأنجيوتنسين أو حاصرات بيتا)", "مدرات البول لتقليل حجم الدم وضغطه", "مراقبة وتسجيل ضغط الدم بشكل يومي ومنتظم", "حاصرات قنوات الكالسيوم لإرخاء وتوسيع الأوعية الدموية"],
            advice: "قلل بشدة من تناول الصوديوم (الملح). حافظ على وزن صحي، وتحكم في مستويات التوتر، وامشِ لمدة 30 دقيقة على الأقل يومياً.",
            warning: "إهمال علاج ارتفاع ضغط الدم أو عدم السيطرة عليه بشكل جيد يزيد بشكل كبير من خطر الإصابة بالسكتة الدماغية والنوبات القلبية والفشل الكلوي."
        }
    },
    {
        id: 1105,
        ku: {
            title: "نەخۆشی خوێنبەری تاجی دڵ (Coronary Artery Disease)",
            desc: "تەسکبوونەوە یان بەستنی خوێنبەرە سەرەکییەکانی دڵ بەهۆی کۆبوونەوەی چەوری و کۆلیسترۆڵەوە، کە مانای وایە دڵ ئۆکسجینی پێویست وەرناگرێت.",
            symptoms: ["ئازار یان پەستانی توند لە ناوەڕاستی سنگدا (نۆبەی سنگ)", "تەنگەنەفەسی لەگەڵ ئەنجامدانی بچوکترین کار", "ئازارێک کە بڵاودەبێتەوە بۆ شانی چەپ، مل، شەویلگە یان پشت", "ماندوێتی نائاسایی و بێهێزی", "دڵتێکچوون و ئارەقکردنەوەی ساردی نائاسایی"],
            treatment: ["وەرگرتنی دەرمانی تەنککەرەوەی خوێن (وەک ئەسپرین)", "بەکارهێنانی دەرمانی دابەزاندنی چەوری (ستاتینەکان) بۆ ڕێگری لە بلۆکبوون", "ئەنجامدانی نەشتەرگەری قەستەرە و بالۆن و شەبەکە (Angioplasty)", "نەشتەرگەری گۆڕینی ڕێڕەوی خوێنبەرەکانی دڵ (CABG)"],
            advice: "خۆراکی تەندروست و کەم چەوری بخۆ. جگەرەکێشان بە یەکجاری قەدەغە بکە، وەرزشی گونجاو بکە و پەستانی خوێن و کۆلیسترۆڵت کۆنترۆڵ بکە.",
            warning: "ئەگەر هەستت بە ئازارێکی توندی خنکێنەر کرد لە ناو سنگدا کە زیاتر لە ١٥ خولەک بەردەوام بوو، یان گواسترایەوە بۆ شانی چەپ، دەستبەجێ پەیوەندی بە فریاکەوتنەوە بکە چونکە نیشانەی جەڵتەی دڵە."
        },
        en: {
            title: "Coronary Artery Disease (CAD)",
            desc: "The narrowing or blockage of the coronary arteries, usually caused by plaque buildup (atherosclerosis), which restricts oxygen-rich blood flow to the heart muscle.",
            symptoms: ["Chest pain, pressure, or tightness (angina)", "Shortness of breath, especially during physical activity", "Pain radiating to the left arm, neck, jaw, shoulder, or back", "Unexplained fatigue and generalized weakness", "Nausea, lightheadedness, and cold sweats"],
            treatment: ["Blood thinners (like daily low-dose Aspirin) to prevent clots", "Cholesterol-lowering drugs (Statins) to stabilize plaque", "Coronary Angioplasty and stenting to open blocked arteries", "Coronary Artery Bypass Graft (CABG) surgery for severe cases"],
            advice: "Adopt a low-fat, low-sodium, heart-healthy diet. Stop smoking immediately, engage in regular light exercise, and manage blood pressure and cholesterol levels.",
            warning: "Sudden, crushing chest pain lasting longer than 15 minutes, radiating to the arm or jaw, and accompanied by sweating, indicates a heart attack. Call emergency services immediately."
        },
        ar: {
            title: "مرض الشريان التاجي (CAD)",
            desc: "تضيق أو انسداد في الشرايين التاجية الرئيسية المغذية للقلب، وغالباً ما يكون بسبب تراكم اللويحات (تصلب الشرايين)، مما يمنع تدفق الدم الغني بالأكسجين للقلب.",
            symptoms: ["ألم في الصدر، أو ضغط، أو ضيق (الذبحة الصدرية)", "ضيق في التنفس، خاصة أثناء ممارسة النشاط البدني", "ألم يمتد إلى الذراع الأيسر، أو الرقبة، أو الفك، أو الكتف، أو الظهر", "تعب غير مبرر وضعف عام في الجسم", "غثيان، دوار، وتعرق بارد مفاجئ"],
            treatment: ["مميعات الدم (مثل الأسبرين بجرعة منخفضة) لمنع الجلطات", "أدوية خفض الكوليسترول (الستاتينات) لمنع زيادة التصلب", "قسطرة القلب وتركيب الشبكات (الدعامات) لفتح الشرايين المغلقة", "جراحة مجازة الشريان التاجي (عملية قلب مفتوح) للحالات الشديدة"],
            advice: "اتبع نظاماً غذائياً صحياً قليل الدهون والملح. أقلع عن التدخين فوراً، مارس الرياضة بانتظام، وحافظ على مستويات ضغط الدم والكوليسترول.",
            warning: "الألم المفاجئ والساحق في الصدر الذي يستمر لأكثر من 15 دقيقة، ويمتد للذراع أو الفك مع تعرق، يدل على نوبة قلبية. اتصل بالطوارئ فوراً."
        }
    },
    {
        id: 1106,
        ku: {
            title: "سەوەفان یان داخورانی جومگە (Osteoarthritis)",
            desc: "باوترین جۆری هەوکردنی جومگەکانە کە بەهۆی داخران و تێکچوونی پارێزەری کرکڕاگەی جومگەکان لە کۆتایی ئێسکەکاندا دروست دەبێت.",
            symptoms: ["ئازار لە جومگەکاندا بەتایبەت لە کاتی جوڵە یان دوای جوڵە", "ڕەقبوونی جومگەکان لە بەیانیاندا یان دوای پشوو و بێجوڵەیی", "نەمانی نەرمی جومگە و سنوورداربوونی جوڵە", "بیستنی دەنگی تەقە یان خشە لە کاتی چەمانەوەی جومگەکاندا", "ئاوسانی سووکی جومگە بەهۆی هەوکردنی شانەکانی دەوروبەری"],
            treatment: ["بەکارهێنانی دەرمانی ئازارشکێن و دژە هەوکردن (وەک پاراتسیتامۆڵ و ئیبۆپڕۆفین)", "فیزۆتراپی (چارسەری سروشتی) بۆ بەهێزکردنی ماسولکەکانی دەوروبەری جومگە", "دەرزی کۆرتیزۆن یان ترشی هیالۆرۆنیک بۆ ناو جومگەکە", "نەشتەرگەری گۆڕینی جومگە (وەک گۆڕینی جومگەی ئەژنۆ یان حەوز)"],
            advice: "کێشی جەستەت لە ئاستێکی تەندروستدا ڕابگرە بۆ کەمکردنەوەی فشار لەسەر جومگەکان. وەرزشی بێ زیان بکە وەک مەلەکردن یان پاسکیل سواری.",
            warning: "بەکارهێنانی زۆری دەرمانی ئازارشکێنی NSAIDs بەبێ ڕێنمایی پزیشک دەبێتە هۆی تێکچوونی گورچیلەکان و برینی توندی گەدە."
        },
        en: {
            title: "Osteoarthritis",
            desc: "The most common form of arthritis, characterized by the gradual wear and tear of the protective cartilage that cushions the ends of your bones over time.",
            symptoms: ["Joint pain during or after movement or physical activity", "Joint stiffness, particularly noticed upon awakening or after inactivity", "Loss of flexibility and decreased range of motion in the joint", "Grating sensation or clicking sounds when moving the joint", "Mild swelling or tenderness around the joint due to soft tissue inflammation"],
            treatment: ["Pain relievers and NSAIDs (like Paracetamol or Ibuprofen)", "Physical therapy to strengthen muscles surrounding the joint", "Intra-articular injections (Corticosteroids or Hyaluronic Acid)", "Joint replacement surgery (Arthroplasty) for advanced damage"],
            advice: "Maintain a healthy weight to reduce load and stress on weight-bearing joints. Engage in low-impact exercises like swimming or cycling, and apply warm packs.",
            warning: "Chronic self-medication with NSAID pain relievers can lead to severe stomach ulcers, gastrointestinal bleeding, and kidney impairment."
        },
        ar: {
            title: "فصال عظمي / سيلان المفاصل (Osteoarthritis)",
            desc: "الشكل الأكثر شيوعاً لالتهاب المفاصل، ويحدث عندما يتآكل الغضروف الواقي الذي يحمي أطراف عظامك تدريجياً مع مرور الوقت.",
            symptoms: ["ألم في المفاصل أثناء أو بعد الحركة أو النشاط البدني", "تصلب المفاصل، خاصة عند الاستيقاظ في الصباح أو بعد الخمول", "فقدان المرونة وصعوبة تحريك المفصل بالكامل", "الشعور بطقطقة أو سماع صوت احتكاك عند تحريك المفصل", "تورم خفيف أو حساسية حول المفصل بسبب التهاب الأنسجة"],
            treatment: ["مسكنات الألم ومضادات الالتهاب (مثل الباراسيتامول أو الإيبوبروفين)", "العلاج الطبيعي لتقوية العضلات المحيطة بالمفصل المصاب", "حقن المفاصل بالستيرويدات القشرية أو حمض الهيالورونيك", "جراحة استبدال المفصل (تقويم المفصل) للتلف المتقدم"],
            advice: "حافظ على وزن صحي لتقليل الضغط على المفاصل الحاملة للوزن. مارس تمارين منخفضة التأثير مثل السباحة، واستخدم كمادات دافئة.",
            warning: "الاستخدام المزمن لمسكنات الألم دون إشراف طبي قد يؤدي إلى قرحة شديدة في المعدة، نزيف هضمي، وتلف في وظائف الكلى."
        }
    },
    {
        id: 1107,
        ku: {
            title: "خەمۆکی (Depression)",
            desc: "تێکچوونێکی دەروونی و دەمارگیریی باوە کە تێیدا کەسەکە هەست بە دڵتەنگی بەردەوام و لەدەستدانی ئارەزووی چالاکییەکانی ڕۆژانە دەکات بۆ ماوەیەکی درێژ.",
            symptoms: ["خەم و ناڕەحەتی بەردەوام، گریانی بەبێ هۆکار و بێهیوایی", "نەمانی حەز یان خۆشی لەو کارانەی پێشتر خۆش بوون لای کەسەکە", "تێکچوونی خەو (بێخەوی یان خەوتنی زۆر)", "گۆڕانی ئارەزووی خواردن و کێش (دابەزین یان زیادبوون)", "بیرکردنەوە لە مردن، خۆئازاردان یان خۆکوشتن"],
            treatment: ["وەرگرتنی دەرمانی دژە خەمۆکی (وەک SSRIs) بە ڕێنمایی پزیشکی دەروونی", "چارەسەری دەروونی و قسەکردن (وەک چارەسەری ڕەفتاری ناسیاری - CBT)", "گۆڕینی شێوازی ژیان و پشتیوانی خێزانی و کۆمەڵایەتی", "چارەسەری هاندانی مێشک (ECT) لە حاڵەتە زۆر توندەکاندا"],
            advice: "هەوڵبدە لە تەنیایی دووربکەویتەوە. کاتی خەوتنت ڕێکبخە، چالاکی وەرزشی ڕۆژانە ئەنجام بدە و گفتوگۆ لەگەڵ کەسانی متمانەپێکراو بکە.",
            warning: "ئەگەر تۆ یان کەسێکی نزیکت بیرۆکەی خۆکوشتن یان زیان گەیاندن بە خۆی لادروست بوو، پێویستە دەستبەجێ سەردانی پزیشک یان بنکەی تەندروستی بکەیت."
        },
        en: {
            title: "Depression (Major Depressive Disorder)",
            desc: "A common and serious medical illness that negatively affects how you feel, the way you think, and how you act, causing persistent feelings of sadness and loss of interest in activities.",
            symptoms: ["Persistent feelings of sadness, emptiness, hopelessness, or frequent crying", "Loss of interest or pleasure in most or all normal activities previously enjoyed", "Sleep disturbances, including insomnia or sleeping too much", "Changes in appetite and weight (significant loss or gain)", "Recurrent thoughts of death, self-harm, or suicide"],
            treatment: ["Antidepressant medications (e.g., SSRIs or SNRIs) prescribed by a psychiatrist", "Psychotherapy (such as Cognitive Behavioral Therapy - CBT)", "Lifestyle modifications and building a supportive social network", "Electroconvulsive therapy (ECT) for treatment-resistant, severe cases"],
            advice: "Avoid isolation by staying connected with family and friends. Maintain a regular sleep schedule, exercise daily, and break large tasks into smaller steps.",
            warning: "If you or someone you know is expressing immediate thoughts of self-harm or suicide, contact emergency psychological hotlines or go to the nearest emergency room."
        },
        ar: {
            title: "الاكتئاب (Depression)",
            desc: "اضطراب نفسي شائع وجدي يؤثر سلباً على طريقة شعورك وتفكيرك وتصرفك، مما يسبب شعوراً مستمراً بالحزن وفقدان الاهتمام بالأنشطة المعتادة.",
            symptoms: ["الشعور المستمر بالحزن، الفراغ، اليأس، أو نوبات البكاء المتكررة", "فقدان الاهتمام أو المتعة في معظم الأنشطة التي كانت ممتعة سابقاً", "اضطرابات النوم، مثل الأرق أو النوم لفترات طويلة جداً", "تغيرات في الشهية والوزن (فقدان أو كسب وزن غير مقصود)", "أفكار متكررة حول الموت، إيذاء النفس، أو الانتحار"],
            treatment: ["الأدوية المضادة للاكتئاب (مثل مثبطات استرداد السيروتونين الانتقائية) بوصفة طبيب نفسي", "العلاج النفسي والكلامي (مثل العلاج المعرفي السلوكي - CBT)", "تعديل نمط الحياة وبناء شبكة دعم اجتماعية قوية", "العلاج بالتخليج الكهربائي (ECT) في الحالات الشديدة والمقاومة للعلاج"],
            advice: "تجنب العزلة وحافظ على تواصلك الاجتماعي. ضع جدول نوم منتظم، مارس الرياضة، وقسم مهامك الكبيرة إلى خطوات صغيرة.",
            warning: "إذا كانت لديك أو لدى شخص تعرفه أفكار فورية حول إيذاء النفس أو الانتحار، فيجب طلب المساعدة النفسية الطارئة فوراً."
        }
    },
    {
        id: 1108,
        ku: {
            title: "کەمخوێنی (Anemia)",
            desc: "حاڵەتێکە کە تێیدا جەستە بڕی پێویست خڕۆکەی سووری تەندروستی نییە بۆ گواستنەوەی ئۆکسجین بۆ شانەکان و ئەندامە جیاوازەکانی جەستە.",
            symptoms: ["هەستکردن بە ماندوێتی بەردەوام و بێهێزی توندی ماسولکەکان", "ڕەنگپەڕیوی یان زەردبوونی پێست و ناوپۆشی چاو", "سەرگێژخواردن، بێهۆشبوون یان سەرئێشەی سووک", "ساردی بەردەوامی دەست و قاچەکان", "تەنگەنەفەسی لەگەڵ کەمترین ماندووبووندا"],
            treatment: ["پێدانی حەبی ئاسن (Iron) یان ڤیتامین B12 بەپێی جۆری کەمخوێنییەکە", "گۆڕینی سیستمی خۆراکی و خواردنی گۆشت و سەوزەوات", "وەرگرتنی خوێن (Blood Transfusion) لە حاڵەتە زۆر توندەکاندا", "دەرزی ئێریسرۆپۆیتین بۆ هاندانی دروستبوونی خڕۆکە لە مۆخی ئێسکدا"],
            advice: "خواردنە دەوڵەمەندەکانی وەک گۆشتی سوور، جەرگ، سپێناخ، و نیسک بخۆ. خواردنەوەی چا و قاوە لەگەڵ ژەمەکاندا کەم بکەرەوە چونکە مژینی ئاسن کەمدەکەنەوە.",
            warning: "کەمخوێنی توند و چارەسەرنەکراو لە ماوەی درێژدا دەبێتە هۆی ماندووبوونی دڵ، خێرا لێدانی دڵ، و مەترسی لەکارکەوتنی دڵ."
        },
        en: {
            title: "Anemia",
            desc: "A condition in which you lack enough healthy red blood cells or hemoglobin to carry adequate oxygen to your body's tissues.",
            symptoms: ["Chronic, debilitating fatigue and muscle weakness", "Pale or yellowish skin and inner eyelids", "Dizziness, lightheadedness, or persistent mild headaches", "Coldness in the hands and feet", "Shortness of breath, even with minimal physical exertion"],
            treatment: ["Iron supplements, Vitamin B12, or Folic Acid depending on the cause", "Dietary adjustments to include iron-rich whole foods", "Blood transfusions for acute or life-threatening severe anemia", "Erythropoietin injections to stimulate red blood cell production"],
            advice: "Consume iron-rich foods such as red meat, poultry, beans, and spinach, paired with Vitamin C to boost absorption. Avoid tea/coffee during or right after meals.",
            warning: "Severe, untreated anemia can place excessive strain on the cardiovascular system, leading to rapid heart rate (tachycardia) and heart failure."
        },
        ar: {
            title: "فقر الدم (Anemia)",
            desc: "حالة تفتقر فيها إلى ما يكفي من خلايا الدم الحمراء السليمة أو الهيموجلوبين لحمل الأكسجين الكافي إلى أنسجة جسمك المختلفة.",
            symptoms: ["التعب المزمن والضعف الشديد في العضلات", "شحوب أو اصفرار الجلد وباطن الجفون", "الدوخة، الدوار، أو الصداع الخفيف المستمر", "برودة في اليدين والقدمين", "ضيق في التنفس حتى مع بذل مجهود بدني بسيط"],
            treatment: ["مكملات الحديد، أو فيتامين B12، أو حمض الفوليك حسب نوع فقر الدم", "تعديلات غذائية لتشمل الأطعمة الغنية بالحديد", "نقل الدم لحالات فقر الدم الشديدة أو المهددة للحياة", "حقن الإريثروبويتين لتحفيز إنتاج خلايا الدم الحمراء في نخاع العظم"],
            advice: "تناول الأطعمة الغنية بالحديد مثل اللحوم الحمراء، والسبانخ، والعدس، مع فيتامين C لزيادة الامتصاص. تجنب الشاي والقهوة مع الوجبات.",
            warning: "فقر الدم الشديد غير المعالج يمكن أن يجهد القلب بشكل مفرط، مما يؤدي إلى تسارع ضربات القلب وفشل القلب."
        }
    },
    {
        id: 1109,
        ku: {
            title: "برینی گەدە (Peptic Ulcer)",
            desc: "برینێکی کراوەیە کە لەسەر ناوپۆشی ناوەوەی گەدە یان بەشی سەرەوەی ڕێخۆڵە باریکە دروست دەبێت بەهۆی کاریگەری ترشەڵۆکەکانەوە.",
            symptoms: ["ئازار و سووتانەوە لە ناوەراستی سکدا (لەنێوان سنگ و ناوک)", "دڵەکزێی توند، غازات و باکردنی سک", "هێڵنج و هەندێکجار ڕشانەوەی شلەی ترش", "تێکچوونی خەو بەهۆی ئازاری سکەوە لە کاتی برسیێتیدا", "نائارامی و دابەزینی کێش بەهۆی نەخواردنەوە"],
            treatment: ["بەکارهێنانی دەرمانی دژە ترشەڵۆک (وەک ئۆمێپرازۆڵ یان لانزۆپرازۆڵ)", "بەکارهێنانی دەرمانی دژەبەکتریا (Antibiotics) بۆ نەمانی بەکتریای H. pylori", "بەکارهێنانی دەرمانی پارێزەری ناوپۆشی گەدە (سوکڕاڵفەیت)", "دوورکەوتنەوەی تەواو لە دەرمانی ئازارشکێنی وەک پرۆفین"],
            advice: "ژەمی بچووک بخۆ و بێ بەش مەبە لە نان. لە خواردنی تیژ، مزر، چەور و کافایین دوور بکەوەرەوە و جگەرە مەکێشە.",
            warning: "ڕشانەوەی خوێناوی یان شلەی هاوشێوەی قاوە، بوونی پیسایی ڕەش و تاریك، یان ئازاری توندی لەپڕی سک نیشانەی تەقینی برینەکەیە و پێویستی بە فریاکەوتنی خێرا هەیە."
        },
        en: {
            title: "Peptic Ulcer",
            desc: "Open sores that develop on the inside lining of your stomach (gastric ulcers) and the upper part of your small intestine (duodenal ulcers) due to acid damage.",
            symptoms: ["Burning stomach pain, often felt between the breastbone and navel", "Heartburn, bloating, and excessive belching", "Nausea and occasional vomiting of clear or acidic fluid", "Stomach pain that worsens on an empty stomach and improves after eating", "Loss of appetite and unexplained weight loss"],
            treatment: ["Proton Pump Inhibitors (PPIs like Omeprazole) to reduce stomach acid", "Antibiotic therapy to eradicate H. pylori bacterial infection", "Mucosal protectants (like Sucralfate) to coat and heal the ulcer", "Discontinuation of NSAIDs (Ibuprofen, Naproxen, Aspirin)"],
            advice: "Eat smaller, more frequent meals. Avoid spicy, acidic, greasy foods, caffeine, and alcohol. Do not smoke.",
            warning: "Vomiting blood (or coffee-ground material), passing dark, tarry stools, or sudden severe abdominal pain indicate bleeding or perforation. Seek immediate emergency care."
        },
        ar: {
            title: "قرحة المعدة (Peptic Ulcer)",
            desc: "قروح مفتوحة تتطور على البطانة الداخلية للمعدة (قرحة المعدة) والجزء العلوي من الأمعاء الدقيقة (قرحة الاثني عشر) بسبب تلف ناتج عن أحماض المعدة.",
            symptoms: ["ألم حارق في المعدة، يُشعر به غالباً بين عظم الصدر والسرة", "حموضة، انتفاخ، وتجشؤ مفرط", "غثيان وتقيؤ مفاجئ لسوائل حمضية", "ألم يزداد سوءاً عندما تكون المعدة فارغة ويتحسن بعد تناول الطعام", "فقدان الشهية وفقدان الوزن غير المبرر"],
            treatment: ["مثبطات مضخة البروتون (مثل أوميبرازول) لتقليل حموضة المعدة", "علاج بالمضادات الحيوية للقضاء على بكتيريا الملوية البوابية (جرثومة المعدة)", "حماة الغشاء المخاطي (مثل سوكرالفات) لتغطية القرحة والمساعدة على شفائها", "التوقف التام عن تناول مضادات الالتهاب غير الستيرويدية (الإيبوبروفين)"],
            advice: "تناول وجبات صغيرة ومتكررة. تجنب الأطعمة الحارة، والحامضة، والدهنية، والكافيين، والكحول. لا تدخن.",
            warning: "تقيؤ الدم (أو مادة تشبه تفل القهوة)، أو خروج براز أسود داكن، أو ألم مفاجئ وشديد في البطن يشير إلى حدوث نزيف أو ثقب. اطلب الطوارئ فوراً."
        }
    },
    {
        id: 1110,
        ku: {
            title: "ئەنفلۆنزا (Influenza / Flu)",
            desc: "نەخۆشییەکی بەربڵاو و زۆر گوازەرەوەی ڤایرۆسییە کە هێرش دەکاتە سەر کۆئەندامی هەناسەدان (لووت، قوڕگ، و سییەکان).",
            symptoms: ["تای بەرز و لەپڕ (سەرووی ٣٨.٥ پلە)", "ئازاری توندی ماسولکەکان و هەموو جومگەکانی جەستە", "سەرئێشە، کۆکەی وشک، و سووتانەوەی قوڕگ", "هەستکردن بە سەرما و لەرزی توند", "بێهێزی زۆر کە ڕەنگە تا چەند هەفتەیەک بەردەوام بێت"],
            treatment: ["پشوودانی تەواو لە جێگەدا بۆ هێز گەڕانەوەی جەستە", "بڕێکی زۆر شلەمەنی گەرم و ئاو بخوەرەوە بۆ ڕێگری لە وشکبوونەوە", "بەکارهێنانی دەرمانی دژە تا و ئازار (وەک پاراسیتامۆڵ)", "دەرمانی دژەڤایرۆسی (وەک Tamiflu) لە دۆخی زۆر تونددا"],
            advice: "خۆت گۆشەگیر بکە بۆ ئەوەی کەسانی تر تووش نەکەیت. ڤاکسینی ساڵانەی ئەنفلۆنزا وەربگرە بۆ پاراستنی خۆت و خێزانت.",
            warning: "ئەگەر هەستت بە ئازاری سنگ، ناڕەحەتی توندی هەناسەدان، سەرگێژخواردنی بەردەوام یان ڕشانەوەی توند کرد، پێویستە سەردانی پزیشک بکەیت."
        },
        en: {
            title: "Influenza (Flu)",
            desc: "A common and highly contagious viral infection that attacks your respiratory system, including your nose, throat, and lungs.",
            symptoms: ["Sudden, high fever (often above 38.5°C)", "Severe muscle aches and generalized joint pain", "Headache, dry cough, and sore throat", "Chills, shivering, and sweating", "Extreme fatigue and weakness that can last for weeks"],
            treatment: ["Complete bed rest to help the body recover", "Increased hydration by drinking warm fluids, herbal teas, and water", "Fever reducers and pain relievers (e.g., Paracetamol)", "Antiviral medications (like Tamiflu) if diagnosed early in high-risk patients"],
            advice: "Isolate yourself from others to prevent transmission. Get an annual flu vaccine, wash hands frequently, and cover your mouth when coughing.",
            warning: "Seek medical help if you experience shortness of breath, chest pain, persistent dizziness, confusion, or severe vomiting."
        },
        ar: {
            title: "الإنفلونزا (Influenza)",
            desc: "عدوى فيروسية شائعة وشديدة العدوى تهاجم الجهاز التنفسي، بما في ذلك الأنف والحلق والرئتين.",
            symptoms: ["حمى مفاجئة ومرتفعة (غالباً فوق 38.5 درجة مئوية)", "آلام شديدة في العضلات والمفاصل في جميع أنحاء الجسم", "صداع، وسعال جاف، واحتقان أو ألم في الحلق", "قشعريرة، ارتعاش، وتعرق", "تعب وإرهاق شديد قد يستمر لعدة أسابيع"],
            treatment: ["الراحة التامة في الفراش لمساعدة الجسم على التعافي", "زيادة شرب السوائل الدافئة والماء لمنع الجفاف", "مسكنات الألم وخافضات الحرارة (مثل الباراسيتامول)", "الأدوية المضادة للفيروسات (مثل تاميفلو) إذا تم تشخيصها مبكراً للمرضى الأكثر عرضة للخطر"],
            advice: "اعزل نفسك عن الآخرين لمنع انتقال العدوى. احصل على لقاح الإنفلونزا السنوي، واغسل يديك بشكل متكرر.",
            warning: "اطلب المساعدة الطبية إذا كنت تعاني من ضيق في التنفس، أو ألم في الصدر، أو دوار مستمر، أو ارتباك، أو قيء شديد."
        }
    },
    {
        id: 1111,
        ku: {
            title: "میگرێن یان سەرئێشەی نیوەیی (Migraine)",
            desc: "جۆرێکی تایبەت و بەردەوامی سەرئێشەیە کە بە ئازارێکی لێدەر و توند لە یەک لای سەردا دەست پێدەکات و زۆرجار نیشانەی تری لەگەڵدایە.",
            symptoms: ["ئازارێکی توندی لێدەر (وەک لێدانی دڵ) لە یەک لای سەردا", "دڵتێکچوون و ڕشانەوە لە کاتی هێرشەکەدا", "هەستیارییەکی ئێجگار زۆر بە ڕووناکی، دەنگ، و بۆنەکان", "بینینی تەڵخی یان خاڵی ڕووناک و تەزبیرکەری پێش چاو (Aura)", "ئازارەکە بە جوڵە یان کەمێک کارکردن خراپتر دەبێت"],
            treatment: ["بەکارهێنانی ئازارشکێنە گشتییەکان (وەک پاراسیتامۆڵ، پرۆفین یان ئەسپرین)", "بەکارهێنانی دەرمانی تایبەتی میگرێن (وەک Triptans یان Ergotamines)", "بەکارهێنانی دەرمانی دژە هێڵنج و ڕشانەوە", "وەرگرتنی دەرمانی ڕێگری کەر (وەک Beta-blockers یان Amitriptyline)"],
            advice: "لە ژوورێکی تاریک و بێدەنگدا پشوو بدە. خاولییەکی سارد یان بەفر بخەرە سەر تەوێڵت. لە خەوی ناڕێک و دڵەڕاوکێ دوور بکەوەرەوە.",
            warning: "ئەگەر سەرئێشەکە زۆر لەپڕ و توند بوو (هاوشێوەی تەقینەوە لە سەردا)، یان لەگەڵیدا تای بەرز و ڕەقبوونی مل دروستبوو، پێویستە دەستبەجێ پەیوەندی بە فریاکەوتنەوە بکەیت چونکە مەترسیدارە."
        },
        en: {
            title: "Migraine",
            desc: "A neurological condition characterized by intense, throbbing headaches, usually on one side of the head, often accompanied by visual disturbances and sensory sensitivity.",
            symptoms: ["Throbbing or pulsing pain, usually on one side of the head", "Nausea and vomiting during the attack", "Extreme sensitivity to light, sound, and sometimes smells", "Visual disturbances, such as seeing flashing lights, blind spots, or zig-zag patterns (aura)", "Pain worsens with physical activity or movement"],
            treatment: ["Over-the-counter pain relievers (like Ibuprofen, Acetaminophen, or Aspirin)", "Triptans (specific prescription migraine medications)", "Antiemetics to treat nausea and vomiting", "Preventive medications (like Beta-blockers, Anticonvulsants, or Amitriptyline)"],
            advice: "Rest in a quiet, dark room during an attack. Apply a cold compress to your forehead, keep a regular sleep schedule, and stay hydrated.",
            warning: "Seek immediate medical attention if you experience a sudden, severe headache that feels like a 'thunderclap', or if it is accompanied by a stiff neck, fever, or confusion."
        },
        ar: {
            title: "الصداع النصفي / الشقيقة (Migraine)",
            desc: "حالة عصبية تتميز بنوبات من الصداع الشديد والنابض، عادة في جانب واحد من الرأس، وغالباً ما تكون مصحوبة باضطرابات بصرية وحساسية حسية.",
            symptoms: ["ألم نابض أو خافق، عادة في جانب واحد من الرأس", "غثيان وقيء أثناء النوبة", "حساسية مفرطة للضوء والصوت وأحياناً الروائح", "اضطرابات بصرية، مثل رؤية أضواء وامضة، أو بقع عمياء، أو خطوط متعرجة (الهالة)", "يزداد الألم سوءاً مع النشاط البدني أو الحركة"],
            treatment: ["مسكنات الألم المتاحة دون وصفة طبية (مثل الإيبوبروفين أو الأسيتامينوفين)", "أدوية التريبتان (أدوية موصوفة خصيصاً للصداع النصفي)", "مضادات القيء لعلاج الغثيان والقيء المصاحب للنوبة", "أدوية وقائية (مثل حاصرات بيتا أو مضادات الاكتئاب ثلاثية الحلقات)"],
            advice: "استرح في غرفة مظلمة وهادئة أثناء النوبة. ضع كمادة باردة على جبهتك، وحافظ على مواعيد نوم منتظمة، واشرب الكثير من الماء.",
            warning: "يجب التماس العناية الطبية الفورية إذا واجهت صداعاً مفاجئاً وشديداً للغاية (يشبه ضربة الرعد)، أو إذا كان مصحوباً بتصلب في الرقبة أو حمى أو ارتباك."
        }
    },
    {
        id: 1112,
        ku: {
            title: "کۆلێرا (Cholera)",
            desc: "هەوکردنێکی توند و زۆر گوازەرەوەی ڕێخۆڵەیە بەهۆی بەکتریای (Vibrio cholerae) کە لە ڕێگەی ئاو یان خۆراکی پیسبوو بە پیسایی بڵاودەبێتەوە.",
            symptoms: ["سکچوونی توند و ئاوی بەبێ ئازار (هاوشێوەی ئاوی برنج)", "ڕشانەوەی بەردەوام و بێهێزی خێرا", "وشکبوونەوەی توندی جەستە (ناڕوونی چاو، وشکی زمان، و نەمانی میز)", "گرژبوونی توندی ماسولکەکان بەهۆی نەمانی خوێیەکان", "تەنگەنەفەسی و نزمبوونەوەی خێرای فشاری خوێن"],
            treatment: ["پێدانی خێرای گیراوەی ئاودێری دەم (ORS) بە بڕی زۆر", "وەرگرتنی شلەمەنی بە دەرزی لە دەمارەوە (IV Fluids) لە حاڵەتی وشکبوونەوەی تونددا", "پێدانی دژەبەکتریا (Antibiotics) بۆ کەمکردنەوەی ماوەی نەخۆشینەکە", "پێدانی زینک بۆ منداڵان"],
            advice: "تەنها ئاوی کوڵاو یان بتڵی پاک بخوەرەوە. سەوزە و میوەکان بە باشی بشۆرەوە. دەستەکانت بەردەوام بە سابوون بشۆ.",
            warning: "کۆلێرا دەبێتە هۆی وشکبوونەوەی توند و مردن لە ماوەی چەند کاتژمێرێکدا ئەگەر بە خێرایی چارەسەر و ئاو بۆ نەخۆشەکە دابین نەکرێت."
        },
        en: {
            title: "Cholera",
            desc: "An acute diarrheal infection caused by ingestion of food or water contaminated with the bacterium Vibrio cholerae, leading to rapid dehydration.",
            symptoms: ["Sudden, severe watery diarrhea (often described as 'rice-water stools')", "Nausea and persistent vomiting in the early stages", "Severe dehydration (dry mouth, extreme thirst, lack of urine, sunken eyes)", "Muscle cramps due to rapid loss of salts and minerals", "Rapid heart rate and dangerously low blood pressure"],
            treatment: ["Immediate oral rehydration salts (ORS) in large, frequent doses", "Intravenous fluids (IV) for patients with severe dehydration", "Antibiotic therapy to shorten the duration and severity of illness", "Zinc supplements for children"],
            advice: "Drink and use only safe, boiled, or chemically treated water. Wash hands thoroughly with soap, and eat only hot, well-cooked foods.",
            warning: "Cholera is a medical emergency. It can cause severe dehydration and death within hours if left untreated. Immediate rehydration is critical."
        },
        ar: {
            title: "الكوليرا (Cholera)",
            desc: "عدوى معوية حادة تسببها بكتيريا ضمة الكوليرا (Vibrio cholerae) نتيجة تناول طعام أو ماء ملوث، مما يؤدي إلى جفاف سريع وشديد.",
            symptoms: ["إسهال مائي مفاجئ وشديد (يوصف غالباً ببراز 'ماء الأرز')", "غثيان وقيء مستمر في المراحل الأولى", "جفاف شديد (جفاف الفم، عطش شديد، قلة البول، عيون غائرة)", "تشنجات عضلية بسبب الفقدان السريع للأملاح والمعادن", "تسارع ضربات القلب وانخفاض خطير في ضغط الدم"],
            treatment: ["محلول الجفاف الفموي (ORS) فوراً وبكميات كبيرة ومتكررة", "السوائل الوريدية (IV) للمرضى الذين يعانون من جفاف شديد", "المضادات الحيوية لتقليل مدة المرض وشدته", "مكملات الزنك للأطفال"],
            advice: "اشرب واستخدم المياه الآمنة أو المغلية فقط. اغسل يديك جيداً بالصابون، وتناول الأطعمة الساخنة والمطهية جيداً فقط.",
            warning: "الكوليرا حالة طبية طارئة. يمكن أن تسبب الجفاف الشديد والوفاة في غضون ساعات إذا لم تعالج. تعويض السوائل فوراً هو أمر بالغ الأهمية."
        }
    },
    {
        id: 1113,
        ku: {
            title: "نەخۆشی پادشا یان نیکریس (Gout)",
            desc: "جۆرێکی بەئازاری هەوکردنی جومگەکانە کە بەهۆی کۆبوونەوەی کریستاڵەکانی ترشی یۆریک (Uric Acid) لەناو جومگەکاندا دروست دەبێت.",
            symptoms: ["ئازاری لەپڕ و زۆر توند لە جومگەی پەنجە گەورەی پێدا", "سووربوونەوە، گەرمبوون و ئاوسانی توندی جومگە تووشبووەکە", "هەستیاری زۆر بە جۆرێک کەمترین بەرکەوتن ئازاری توند دروست دەکات", "سنوورداربوونی جوڵەی جومگەکە", "خوروو و کڕڕانەوەی پێستی جومگەکە دوای چاکبوونەوەی ئاوسانەکە"],
            treatment: ["بەکارهێنانی دەرمانی دژە هەوکردن و ئازارشکێن (وەک ئیبۆپڕۆفین یان ئیندۆمێساسین)", "بەکارهێنانی دەرمانی کۆلچیسین (Colchicine) لە کاتی هێرشەکەدا", "بەکارهێنانی دەرمانی کەمکەرەوەی ترشی یۆریک (وەک ئالۆپۆرینۆڵ) لە ماوەی درێژدا", "دەرزی ستیرۆید لەناو جومگە تووشبووەکەدا"],
            advice: "بڕێکی زۆر لە ئاو بخوەرەوە بۆ فڕێدانی ترشی یۆریک. خواردنی گۆشتی سوور، نیسک، خۆراکە دەریاییەکان، و خواردنەوە کحولییەکان کەم بکەرەوە.",
            warning: "چارەسەرنەکردنی بەردەوامی نیکریس دەبێتە هۆی دروستبوونی بەردی گورچیلە و کۆبوونەوەی کریستاڵی گەورە لە ژێر پێستدا (Tophi) کە جومگەکان تێکدەدات."
        },
        en: {
            title: "Gout",
            desc: "A painful form of inflammatory arthritis characterized by the accumulation of uric acid crystals in joints, most commonly affecting the big toe.",
            symptoms: ["Sudden, intense joint pain, typically starting in the big toe at night", "Swelling, redness, warmth, and extreme tenderness in the affected joint", "Hypersensitivity where even a light bedsheet causes excruciating pain", "Limited range of motion in the joint", "Peeling or itchy skin over the joint after the acute attack subsides"],
            treatment: ["NSAIDs (like Ibuprofen or Indomethacin) to relieve pain and swelling", "Colchicine to reduce joint inflammation during acute flares", "Uric acid-lowering medications (e.g., Allopurinol) for long-term control", "Corticosteroid injections directly into the affected joint"],
            advice: "Drink plenty of water to help flush uric acid out of your kidneys. Limit intake of purine-rich foods like red meat, seafood, yeast products, and alcohol.",
            warning: "Untreated, chronic gout can lead to permanent joint damage, formation of painful nodules under the skin (tophi), and uric acid kidney stones."
        },
        ar: {
            title: "النقرس / داء الملوك (Gout)",
            desc: "نوع مؤلم من التهاب المفاصل الالتهابي يتميز بتراكم بلورات حمض اليوريك (البوليك) في المفاصل، وغالباً ما يصيب المفصل الكبير لإصبع القدم الكبير.",
            symptoms: ["ألم مفاجئ وشديد في المفاصل، وعادة ما يبدأ في إصبع القدم الكبير ليلاً", "تورم، احمرار، سخونة، وحساسية مفرطة في المفصل المصاب", "حساسية مفرطة لدرجة أن ملامسة ورقة السرير تسبب ألماً شديداً لا يُطاق", "محدودية حركة المفصل المصاب", "تقشر أو حكة في الجلد فوق المفصل بعد تراجع النوبة الحادة"],
            treatment: ["مضادات الالتهاب غير الستيرويدية (مثل الإندوميثاسين) لتخفيف الألم والتورم", "الكولشيسين لتقليل التهاب المفاصل أثناء النوبات الحادة", "أدوية خفض حمض اليوريك (مثل ألوبورينول) للسيطرة على المدى الطويل", "حقن الكورتيكوستيرويد مباشرة في المفصل المصاب"],
            advice: "اشرب الكثير من الماء لمساعدة الكلى على التخلص من حمض اليوريك. قلل من تناول الأطعمة الغنية بالبيورين مثل اللحوم الحمراء والمأكولات البحرية والكحول.",
            warning: "إذا لم يُعالج النقرس المزمن، فقد يؤدي إلى تلف دائم في المفاصل، وتكوّن عقد مؤلمة تحت الجلد (التوف)، وحصوات الكلى الناتجة عن حمض اليوريك."
        }
    },
    {
        id: 1114,
        ku: {
            title: "سستبوون و لەکارکەوتنی گورچیلە (Kidney Failure)",
            desc: "لەدەستدانی توانای گورچیلەکانە بۆ پاڵاوتن و فلتەرکردنی پاشماوەکان و شلەی زیادە لە خوێندا، کە دەبێتە هۆی کۆبوونەوەی ژەهر لە جەستەدا.",
            symptoms: ["کەمبوونەوەی بەرچاوی بڕی میزکردنی ڕۆژانە", "ئاوسانی دەست، قاچ، پێ و بەتایبەت دەوروبەری چاو بەهۆی شلەوە", "تەنگەنەفەسی بەهۆی کۆبوونەوەی شلە لە سییەکاندا", "دڵتێکچوون، ڕشانەوە، و نەمانی تەواوی ئارەزووی خواردن", "ماندوێتی زۆر، خەواڵوویی و تێکچوونی هاوسەنگی فیکری"],
            treatment: ["شوشتنی گورچیلە (Dialysis) بۆ پاڵاوتنی دەستکردی خوێن", "چاندن و گۆڕینی گورچیلە (Kidney Transplant)", "دەرمانی کۆنترۆڵکردنی پەستانی خوێن و دەرکردنی شلە (میزپێکەرەکان)", "ڕێکخستنی توندی کانزاکان لە خوێندا بە دەرمان"],
            advice: "بە تەواوی خواردنی خوێ، پڕۆتین، و خۆراکە پڕ پۆتاسیۆم و فۆسفۆرەکان کەم بکەرەوە. شەکری خوێن و زەختت بە وردی ڕێکبخە.",
            warning: "لەکارکەوتنی گورچیلە نەخۆشییەکی مەترسیداری کوشندەیە کە پێویستی بە چاودێری پزیشکی بەردەوام و خێرا هەیە."
        },
        en: {
            title: "Kidney Failure (Renal Failure)",
            desc: "The state in which one or both kidneys can no longer function properly on their own, leading to a build-up of waste products and excess fluids in the body.",
            symptoms: ["Decreased urine output, or occasionally no urination", "Swelling in your legs, ankles, feet, hands, or face due to fluid retention", "Shortness of breath caused by fluid accumulation in the lungs", "Nausea, vomiting, metallic taste in mouth, and loss of appetite", "Severe fatigue, drowsiness, confusion, and generalized weakness"],
            treatment: ["Dialysis (hemodialysis or peritoneal dialysis) to filter waste from blood", "Kidney transplant for end-stage renal disease", "Medications to manage complications (such as high blood pressure and anemia)", "Diuretics to help pass excess fluid"],
            advice: "Follow a strict renal diet low in sodium, potassium, phosphorus, and protein. Strictly control blood glucose levels and blood pressure.",
            warning: "Kidney failure is a life-threatening medical condition. It requires immediate, continuous specialized nephrology care and lifestyle changes."
        },
        ar: {
            title: "الفشل الكلوي (Kidney Failure)",
            desc: "حالة تفقد فيها إحدى الكليتين أو كلتاهما قدرتها على العمل بشكل صحيح بمفردها، مما يؤدي إلى تراكم الفضلات والسوائل الزائدة في الجسم.",
            symptoms: ["انخفاض ملحوظ في كمية البول، أو عدم التبول في بعض الأحيان", "تورم في الساقين، الكاحلين، القدمين، اليدين، أو الوجه بسبب احتباس السوائل", "ضيق في التنفس بسبب تراكم السوائل في الرئتين", "غثيان، قيء، طعم معدني في الفم، وفقدان الشهية", "تعب شديد، نعاس، ارتباك، وضعف عام في الجسم"],
            treatment: ["غسيل الكلى (الدموي أو البريتوني) لتصفية الفضلات من الدم", "زراعة الكلى في حالات الفشل الكلوي في مراحله الأخيرة", "أدوية للتحكم في المضاعفات (مثل ارتفاع ضغط الدم وفقر الدم)", "مدرات البول لمساعدة الجسم على التخلص من السوائل الزائدة"],
            advice: "اتبع نظاماً غذائياً صارماً قليل الصوديوم، البوتاسيوم، الفوسفور، والبروتين. اضبط مستويات السكر وضغط الدم بدقة.",
            warning: "الفشل الكلوي حالة طبية مهددة للحياة. تتطلب رعاية فورية ومستمرة من قبل طبيب أمراض كلى مختص."
        }
    },
    {
        id: 1115,
        ku: {
            title: "تیفۆ یان تای تیفۆید (Typhoid Fever)",
            desc: "نەخۆشییەکی مەترسیداری بەکتریاییە بەهۆی بەکتریای (Salmonella typhi) کە بەهۆی خواردنەوەی ئاو یان خواردنی پیسبوو بڵاودەبێتەوە.",
            symptoms: ["تای توند و بەردەوام کە ڕۆژ بە ڕۆژ بەرزتر دەبێتەوە", "سەرئێشەی زۆر توند و بێهێزی گشتی جەستە", "ئازاری سک، غازات، و قەبزی یان سکچوون", "دەرکەوتنی پەڵەی پەمەیی سووکی سەر سنگ و سک (Rose spots)", "خۆشکنەبوونی قوڕگ و بەڵغەمی کەم"],
            treatment: ["وەرگرتنی دژەبەکتریا (Antibiotics) وەک سیپرۆفلۆکساسین یان سێفتریێکسۆن", "پێدانی شلەمەنی زۆر لە ڕێگەی دەمارەوە (IV Fluids) لە کاتی سکچوونی زۆردا", "پێدانی دەرمانی دابەزاندنی تا (پاراسیتامۆڵ)", "خواردنی خۆراکی شل و نەرم کە ئاسان هەرس بکرێت"],
            advice: "ئاو بکوڵێنە پێش خواردنەوە. سەوزە و میوەکان بە توندی پاک بکەرەوە. لە خواردنی دەرەوە و سەر شەقامەکان دوور بکەوەرەوە.",
            warning: "چارەسەرنەکردنی تیفۆ دەبێتە هۆی کونکردنی ڕێخۆڵەکان یان خوێنبەربوونی ناوەکی، کە دەبێتە هۆی گیانلەدەستدان."
        },
        en: {
            title: "Typhoid Fever",
            desc: "A life-threatening systemic infection caused by the bacterium Salmonella enterica serovar Typhi, primarily spread through contaminated food and water.",
            symptoms: ["High, sustained fever that increases daily (often reaching 39°C-40°C)", "Severe headache, generalized weakness, and muscle fatigue", "Abdominal pain, bloating, and constipation or diarrhea", "A skin rash characterized by flat, rose-colored spots on the chest or abdomen", "Dry cough and loss of appetite"],
            treatment: ["Antibiotics (such as Ciprofloxacin, Ceftriaxone, or Azithromycin)", "Intravenous fluids and electrolyte replacement for severe cases", "Fever reducers (like Paracetamol) to manage temperature", "Soft, easily digestible, high-calorie diet"],
            advice: "Boil water before drinking or use bottled water. Wash hands thoroughly before eating or preparing food. Avoid raw fruits/vegetables unless peeled.",
            warning: "Untreated typhoid fever can lead to severe intestinal perforation or internal bleeding, which are life-threatening emergencies requiring surgery."
        },
        ar: {
            title: "حمى التيفوئيد (Typhoid Fever)",
            desc: "عدوى بكتيرية مهددة للحياة تسببها بكتيريا السالمونيلا التيفية (Salmonella typhi)، وتنتشر بشكل رئيسي عن طريق المياه والأطعمة الملوثة.",
            symptoms: ["حمى مرتفعة ومستمرة تزداد يومياً (قد تصل إلى 39-40 درجة مئوية)", "صداع شديد، ضعف عام، وإعياء في العضلات", "ألم في البطن، انتفاخ، وإمساك أو إسهال", "طفح جلدي يتميز ببقع مسطحة وردية اللون على الصدر أو البطن", "سعال جاف وفقدان الشهية"],
            treatment: ["مضادات حيوية مناسبة (مثل سيبروفلوكساسين، سيفترين، أو أزيثروميسين)", "سوائل وريدية وتعويض الكهارل في الحالات الشديدة", "خافضات الحرارة (مثل الباراسيتامول) للتحكم في الحمى", "اتباع نظام غذائي لين وسهل الهضم وعالي السعرات الحرارية"],
            advice: "اغلِ الماء قبل الشرب أو استخدم المياه المعبأة. اغسل يديك جيداً بالصابون قبل تناول الطعام. تجنب الخضار والفواكه النيئة.",
            warning: "قد يؤدي إهمال علاج حمى التيفوئيد إلى حدوث انثقاب في الأمعاء أو نزيف داخلي شديد، وهي حالات طارئة مهددة للحياة تتطلب جراحة فورية."
        }
    },
    {
        id: 1116,
        ku: {
            title: "بەردی گورچیلە (Kidney Stones)",
            desc: "تراکم و دروستبوونی کریستاڵی ڕەقی کانزاییە لە ناو گورچیلەکاندا، کە کاتێک دێنە ناو بۆری میزەوە ئازارێکی زۆر توند دروست دەکەن.",
            symptoms: ["ئازاری زۆر توند و لەپڕی پشت، ژێر پەراسووەکان یان کەنیشتەکان", "ئازارێک کە دێت و دەچێت و بڵاودەبێتەوە بۆ خوارەوەی سک یان بن ڕان", "بوونی خوێن لە میزدا (میزی پەمەیی، سوور یان قاوەیی)", "سووتانەوە و ناڕەحەتی زۆر لە کاتی میزکردندا", "هێڵنج و ڕشانەوە بەهۆی توندی ئازارەکەوە"],
            treatment: ["خواردنەوەی بڕێکی ئێجگار زۆر لە ئاو (سەرووی ٣ لیتر) بۆ فڕێدانی بەردەکە", "بەکارهێنانی ئازارشکێنی بەهێز (وەک دیکلۆفیناک یان مۆرفین بۆ حالەتی توند)", "بەکارهێنانی دەرمانی شلکەرەوەی بۆری میز (وەک تامسولۆسین)", "نەشتەرگەری یان لێدانی بەرد بە شەپۆل (Lithotripsy) بۆ بەردی گەورە"],
            advice: "خواردنی خوێ بە تەواوی کەم بکەرەوە. بڕی پێویست ئاو بخوەرەوە ڕۆژانە بە شێوەیەک میزی پاک بەردەوام هەبێت. خۆراکی پڕ ئۆکسالات وەک سپێناخ کەم بکەرەوە.",
            warning: "ئەگەر ئازارەکەت لەگەڵیدا تا، لەرز، هێڵنجی بەردەوام، یان نەتوانینی میزکردنی لەگەڵ بوو، دەستبەجێ سەردانی نەخۆشخانە بکە چونکە نیشانەی داخران و هەوکردنی توندە."
        },
        en: {
            title: "Kidney Stones",
            desc: "Hard deposits made of minerals and salts that form inside your kidneys, which can cause severe, excruciating pain when they travel down the urinary tract.",
            symptoms: ["Severe, sharp pain in the side and back, below the ribs", "Pain that fluctuates in intensity and radiates to the lower abdomen and groin", "Pink, red, or brown urine (hematuria)", "Painful or burning sensation during urination", "Nausea and vomiting due to the severity of the pain"],
            treatment: ["Drinking large amounts of water (3+ liters daily) to help flush the stone", "Strong pain relievers (NSAIDs or opioids for severe acute episodes)", "Alpha-blockers (like Tamsulosin) to relax ureter muscles and ease passage", "Extracorporeal shock wave lithotripsy (ESWL) or surgery for large stones"],
            advice: "Significantly reduce sodium (salt) intake. Maintain high fluid intake so your urine is pale and clear. Limit oxalate-rich foods like spinach and nuts.",
            warning: "Seek immediate medical care if pain is accompanied by fever, chills, persistent vomiting, or an inability to pass urine."
        },
        ar: {
            title: "حصوات الكلى (Kidney Stones)",
            desc: "رواسب صلبة مكونة من المعادن والأملاح تتشكل داخل الكلى، ويمكن أن تسبب ألماً شديداً لا يُطاق عندما تنتقل إلى المسالك البولية.",
            symptoms: ["ألم شديد وحاد في الجانب والظهر، تحت الأضلاع", "ألم يتأرجح في شدته ويمتد إلى أسفل البطن والفخذ", "بول وردي أو أحمر أو بني (دم في البول)", "ألم أو حرقان أثناء التبول", "غثيان وقيء بسبب شدة الألم"],
            treatment: ["شرب كميات كبيرة من الماء (أكثر من 3 لترات يومياً) للمساعدة في طرد الحصوة", "مسكنات ألم قوية (مضادات الالتهاب غير الستيرويدية أو أشباه الأفيونات)", "حاصرات ألفا (مثل تامسولوسين) لإرخاء عضلات الحالب وتسهيل مرور الحصوة", "تفتيت الحصوات بموجات الصدمة (ESWL) أو الجراحة للحصوات الكبيرة"],
            advice: "قلل من تناول الصوديوم (الملح). حافظ على شرب السوائل بكثرة ليكون البول فاتحاً ونقياً. حد من الأطعمة الغنية بالأكسالات مثل السبانخ والمكسرات.",
            warning: "يجب التماس العناية الطبية الفورية إذا كان الألم مصحوباً بحمى، أو قشعريرة، أو قيء مستمر، أو عدم القدرة على التبول."
        }
    },
    {
        id: 1117,
        ku: {
            title: "هەوکردنی جگەر (Hepatitis)",
            desc: "ئیلتیهاب و تێکچوونی خانەکانی جگەرە کە زۆرجار بەهۆی یەکێک لە ڤایرۆسەکانی هەوکردنی جگەر (A, B, C) دروست دەبێت.",
            symptoms: ["زەردوویی (زەردبوونی سپێنەی چاو و پێست)", "میزی تۆخ (هاوشێوەی چا یان کۆلا)", "ماندوێتی توند و بێهێزی بەردەوام", "ئازاری سک لە بەشی سەرەوەی لای ڕاستدا", "دڵتێکچوون، ڕشانەوە و لەدەستدانی ئارەزووی خواردن"],
            treatment: ["پشوودانی تەواو و نەخواردنی دەرمانی زیان بەخش بۆ جگەر", "وەرگرتنی دەرمانی دژەڤایرۆسی (بۆ جۆری B و C) بە ڕەچەتە", "وەرگرتنی ڤاکسینی پاراستن بۆ جۆری A و B", "چاندنی جگەر لە حاڵەتی تێکچوونی تەواوی جگەردا"],
            advice: "واز لە کحول و جگەرەکێشان بهێنە. شتی تایبەتی خۆت (دەرزی، گوێزان، فڵچەی ددان) بەکارمەهێنە لەگەڵ کەسی تردا.",
            warning: "هەوکردنی درێژخایەنی جگەری جۆری B یان C ئەگەر کۆنترۆڵ نەکرێت، دەبێتە هۆی مەمکبوونی جگەر (Cirrhosis) یان شێرپەنجەی جگەر."
        },
        en: {
            title: "Hepatitis",
            desc: "An inflammation of the liver tissue, most commonly caused by a viral infection (Hepatitis A, B, C, D, or E), toxins, or autoimmune responses.",
            symptoms: ["Jaundice (yellowing of the skin and whites of the eyes)", "Dark-colored urine (resembling tea or cola)", "Severe, persistent fatigue and body weakness", "Abdominal pain or discomfort in the upper right quadrant", "Nausea, vomiting, and loss of appetite"],
            treatment: ["Supportive care and avoidance of liver-stressing substances", "Antiviral medications (specifically for chronic Hepatitis B and C)", "Vaccination for prevention (available for Hepatitis A and B)", "Liver transplantation for end-stage liver failure or cirrhosis"],
            advice: "Avoid alcohol completely. Never share personal hygiene items like razors, toothbrushes, or needles. Maintain a low-fat diet.",
            warning: "Chronic viral hepatitis (especially B and C) can silently progress to liver cirrhosis, liver failure, or liver cancer over decades if left unmanaged."
        },
        ar: {
            title: "التهاب الكبد (Hepatitis)",
            desc: "التهاب يصيب أنسجة الكبد، وغالباً ما يكون سببه عدوى فيروسية (التهاب الكبد A أو B أو C أو D أو E)، أو السموم، أو الاستجابة المناعية الذاتية.",
            symptoms: ["اليرقان (اصفرار الجلد وبياض العينين)", "بول داكن اللون (يشبه الشاي أو الكولا)", "تعب شديد ومستمر وضعف في الجسم", "ألم أو عدم ارتياح في البطن في الربع العلوي الأيمن", "غثيان، قيء، وفقدان الشهية"],
            treatment: ["الرعاية الداعمة وتجنب المواد التي تضغط على الكبد (مثل الكحول والباراسيتامول)", "الأدوية المضادة للفيروسات (خاصة لالتهاب الكبد المزمن B وC)", "التطعيم للوقاية (متوفر لالتهاب الكبد A وB)", "زراعة الكبد في حالات الفشل الكلوي المتقدم أو تليف الكبد"],
            advice: "تجنب الكحول تماماً. لا تشارك الأدوات الشخصية مثل شفرات الحلاقة أو فرش الأسنان أو الإبر مع الآخرين.",
            warning: "يمكن أن يتطور التهاب الكبد الفيروسي المزمن (خاصة B وC) بصمت إلى تليف الكبد أو فشل الكبد أو سرطان الكبد إذا لم يتم تشخيصه وعلاجه."
        }
    },
    {
        id: 1118,
        ku: {
            title: "ڕۆماتیزمی جومگەکان (Rheumatoid Arthritis)",
            desc: "نەخۆشییەکی بەرگری خۆیی درێژخایەنە کە تێیدا کۆئەندامی بەرگری جەستە بە هەڵە هێرش دەکاتە سەر ناوپۆشی جومگەکان و دەبێتە هۆی هەوکردنی بەئازار.",
            symptoms: ["ئازاری بەئازار و ئاوسانی جومگەکان بە شێوەی هاوتەریب (هەردوو دەست یان هەردوو ئەژنۆ)", "ڕەقبوونی توندی جومگەکان لە بەیانیاندا کە زیاتر لە کاتژمێرێک بەردەوام دەبێت", "تێکچوونی شێوەی جومگەکان لە ماوەی درێژدا", "ماندوێتی زۆر، تا لێهاتنی سووک و نەمانی کێش", "سووربوونەوە و گەرمبوونی جومگەکان"],
            treatment: ["بەکارهێنانی دەرمانی ڕێکخەری نەخۆشییەکە (DMARDs وەک میسۆترێکسایت)", "بەکارهێنانی دەرمانی دژە هەوکردن و ئازارشکێن بۆ کۆنترۆڵی ئازار", "بەکارهێنانی دەرزی کۆرتیزۆن بۆ کەمکردنەوەی خێرای هەوکردنەکە", "فیزۆتراپی بۆ هێشتنەوەی نەرمی جومگەکان"],
            advice: "چالاک بە بە شێوەیەکی نەرم و جوڵەی سادە بکە وەک مەلەکردن. لە کاتی ئاوساندا سەهۆڵ بەکاربهێنە و لە کاتی ڕەقبووندا گەرمی.",
            warning: "گرنگی نەدان بە دەرمانی ڕێگریکەر لە قۆناغی سەرەتاییدا دەبێتە هۆی تێکچوونی هەمیشەیی و شێواندنی بێ گەڕانەوەی جومگەکان."
        },
        en: {
            title: "Rheumatoid Arthritis (RA)",
            desc: "An autoimmune and chronic inflammatory disorder where the immune system mistakenly attacks the synovium (lining of the membranes that surround your joints).",
            symptoms: ["Tender, warm, swollen joints, usually occurring symmetrically (e.g., both wrists or both knees)", "Severe joint stiffness in the mornings or after periods of inactivity, lasting over an hour", "Gradual joint deformity and loss of function over time", "Fatigue, low-grade fever, and unexplained weight loss", "Rheumatoid nodules (firm lumps of tissue under the skin near joints)"],
            treatment: ["Disease-Modifying Antirheumatic Drugs (DMARDs like Methotrexate)", "Biologic response modifiers (biologics) to target specific immune pathway parts", "NSAIDs and low-dose Corticosteroids for immediate symptom control", "Physical and occupational therapy to maintain joint flexibility and strength"],
            advice: "Stay active with low-impact exercises (swimming, walking) to keep joints moving. Protect joints from heavy strain and apply alternating heat/cold packs.",
            warning: "Delaying treatment with DMARDs can lead to permanent, irreversible joint destruction, bone erosion, and significant physical disability."
        },
        ar: {
            title: "التهاب المفاصل الروماتويدي (Rheumatoid Arthritis)",
            desc: "اضطراب مناعي ذاتي والتهابي مزمن حيث يهاجم الجهاز المناعي بالخطأ الغشاء الزليلي (البطانة التي تحيط بالمفاصل)، مما يسبب التهاباً مؤلماً.",
            symptoms: ["مفاصل مؤلمة ودافئة ومتورمة، وتحدث عادة بشكل متناظر (مثل كلا الرسغين أو كلا الركبتين)", "تصلب المفاصل الشديد في الصباح أو بعد فترات الخمول، ويستمر لأكثر من ساعة", "تشوه تدريجي في المفاصل وفقدان وظيفتها مع مرور الوقت", "تعب شديد، حمى خفيفة، وفقدان الوزن غير المبرر", "عقد روماتويدية (كتل صلبة من الأنسجة تحت الجلد بالقرب من المفاصل)"],
            treatment: ["الأدوية المضادة للروماتيزم المعدلة للمرض (DMARDs مثل الميثوتريكسيت)", "معدلات الاستجابة البيولوجية (العلاجات البيولوجية) لاستهداف خلايا مناعية معينة", "مضادات الالتهاب غير الستيرويدية والكورتيكوستيرويدات للسيطرة السريعة", "العلاج الطبيعي والمهني للحفاظ على مرونة المفاصل وقوتها"],
            advice: "حافظ على نشاطك بممارسة تمارين منخفضة التأثير (السباحة، المشي). احمِ مفاصلك من الإجهاد الشديد واستخدم كمادات دافئة أو باردة.",
            warning: "تأخير العلاج بأدوية DMARDs يمكن أن يؤدي إلى تلف مائم وغير قابل للإصلاح في المفاصل، وتآكل العظام، وعجز جسدي كبير."
        }
    },
    {
        id: 1119,
        ku: {
            title: "سیل یان تیوبرکۆلۆسس (Tuberculosis / TB)",
            desc: "نەخۆشییەکی بەکتریایی گوازەرەوەی زۆر توندە بەهۆی بەکتریای (Mycobacterium tuberculosis) کە هێرش دەکاتە سەر سییەکان و لە ڕێگەی هەواوە بڵاودەبێتەوە.",
            symptoms: ["کۆکەی بەردەوام بۆ ماوەی ٣ هەفتە یان زیاتر", "کۆکین لەگەڵ بەڵغەمی خوێناوی یان خوێنی ڕوون", "ئارەقکردنەوەی توندی شەوانە بەبێ هۆکاری گەرمی ژوور", "ئازاری توند لە ناو سنگدا لە کاتی کۆکین یان هەناسەداندا", "دابەزینی زۆری کێش بەبێ هۆکار و کەمبوونەوەی ئارەزووی خواردن"],
            treatment: ["وەرگرتنی تێکەڵەیەک لە ٤ دژەبەکتریا بۆ ماوەی لانی کەم ٦ مانگ", "بەردەوام پشکنینی بەڵغەم لە ماوەی وەرگرتنی دەرماندا", "دابینکردنی چاودێری ڕاستەوخۆ (DOTS) بۆ دڵنیابوون لە خواردنی دەرمانەکان", "بەکارهێنانی ماسکی پارێزەر لەلایەن کەسانی دەوروبەرەوە"],
            advice: "پێویستە دەرمانەکانت بە تەواوی بخۆیت بەبێ دواکەوتن یان بڕین. لە ژوورێکدا بنو و پشوو بدە کە هەواگۆڕکێی باشی تێدا بێت.",
            warning: "پچڕاندنی کۆرسی دەرمانی سیل زۆر مەترسیدارە و دەبێتە هۆی دروستبوونی بەکتریای مقاوم (MDR-TB) کە چارەسەرکردنی زۆر قورس و ئەگەری مردنی زۆرە."
        },
        en: {
            title: "Tuberculosis (TB)",
            desc: "A highly contagious bacterial disease caused by Mycobacterium tuberculosis, which primarily affects the lungs and spreads through the air from person to person.",
            symptoms: ["Persistent cough that lasts 3 weeks or longer", "Coughing up blood or sputum/mucus", "Severe night sweats (waking up drenched in sweat)", "Chest pain when breathing deeply or coughing", "Unexplained significant weight loss and loss of appetite"],
            treatment: ["A combination of four antibiotics (Rifampin, Isoniazid, Pyrazinamide, Ethambutol) for at least 6 months", "Regular sputum tests to monitor bacterial clearance", "Directly Observed Therapy (DOTS) to ensure treatment compliance", "Infection control and masking in shared environments"],
            advice: "Complete the entire course of medication without skipping a single dose. Stay in well-ventilated rooms and cover your mouth when sneezing or coughing.",
            warning: "Skipping or stopping TB medications early is highly dangerous; it can lead to Multi-Drug Resistant TB (MDR-TB), which is extremely difficult to treat and can be fatal."
        },
        ar: {
            title: "السل / الدرن (Tuberculosis)",
            desc: "مرض بكتيري معدٍ للغاية تسببه المتفطرة السلية (Mycobacterium tuberculosis)، يصيب الرئتين بشكل رئيسي وينتقل عن طريق الهواء من شخص لآخر.",
            symptoms: ["سعال مستمر يستمر لمدة 3 أسابيع أو أكثر", "سعال مصحوب بدم أو بلغم مخاطي", "تعرق ليلي شديد (الاستيقاظ غارقاً في العرق)", "ألم في الصدر عند التنفس العميق أو السعال", "فقدان وزن كبير غير مبرر وفقدان الشهية"],
            treatment: ["مزيج من أربعة مضادات حيوية (ريفامبين، إيزونيازيد، بيرازيناميد، إيثامبوتول) لمدة 6 أشهر على الأقل", "فحوصات منتظمة للبلغم لمراقبة زوال البكتيريا", "العلاج تحت الملاحظة المباشرة (DOTS) لضمان الالتزام بالعلاج", "التحكم في العدوى وارتداء الكمامات في البيئات المشتركة"],
            advice: "أكمل كورس العلاج بالكامل دون تفويت أي جرعة. ابقَ في غرف جيدة التهوية وغطِ فمك عند السعال.",
            warning: "تخطي أدوية السل أو إيقافها مبكراً أمر خطير للغاية؛ فقد يؤدي إلى السل المقاوم للأدوية المتعددة (MDR-TB)، وهو علاج صعب جداً وقد يكون مميتاً."
        }
    },
    {
        id: 1120,
        ku: {
            title: "گەشکە یان فێ (Epilepsy)",
            desc: "تێکچوونێکی دەماری ناوەندی مێشکە کە تێیدا چالاکی کارەبایی مێشک نائاسایی دەبێت، ئەمەش دەبێتە هۆی دروستبوونی گەشکە و ڕەفتاری نائاسایی.",
            symptoms: ["گرژبوون و لەرزینی توندی قاچ و دەستەکان لەپڕدا", "لەدەستدانی تەواو یان کاتیی هۆش و ئاگایی", "سەیرکردنی بێ ئامانج بۆ ماوەی چەند چرکەیەک (Absence seizure)", "سەختی لە قسەکردن و تێنەگەیشتن لە چواردەور", "جوڵەی دووبارەبووەوەی ناپێویست وەک جوینی لێو یان توندکردنی دەستەکان"],
            treatment: ["بەکارهێنانی دەرمانی ڕێگریکەر لە گەشکە (وەک کاربامازیپین یان ڤالپرۆیک ئەسید)", "پابەندبوونی توند بە پارێزی کیتۆجینیک (لە هەندێک دۆخدا)", "نەشتەرگەری لادانی ئەو بەشەی مێشک کە نائاساییە", "چاندنی ئامێری هاندەری دەماری ڤاگوس (VNS)"],
            advice: "دەرمانەکانت لە هەمان کاتی دیاریکراودا ڕۆژانە بخۆ. لە کەمخەوی، ماندوێتی توند، و سترێسی دەروونی زۆر دوور بکەوەرەوە.",
            warning: "ئەگەر گەشکەیەک زیاتر لە ٥ خولەک بەردەوام بوو، یان نەخۆشەکە دوو گەشکەی لەسەریەک لێدا بەبێ ئەوەی هۆشی بێتەوە، ئەمە حاڵەتێکی زۆر مەترسیداری فریاکەوتنە (Status Epilepticus)."
        },
        en: {
            title: "Epilepsy",
            desc: "A central nervous system (neurological) disorder in which brain activity becomes abnormal, causing seizures or periods of unusual behavior, sensations, and sometimes loss of awareness.",
            symptoms: ["Temporary confusion or staring spells", "Uncontrollable jerking movements of the arms and legs (convulsions)", "Loss of consciousness or awareness", "Psychic symptoms such as fear, anxiety, or deja vu", "Repetitive movements like lip-smacking or hand-rubbing"],
            treatment: ["Anti-epileptic drugs (AEDs like Carbamazepine, Valproic Acid, or Levetiracetam)", "Ketogenic diet (high fat, low carb) for medication-resistant cases", "Surgical removal of the specific brain area causing seizures", "Vagus nerve stimulation (VNS) device implantation"],
            advice: "Take prescribed medications at the exact same times daily. Get adequate, consistent sleep, manage stress, and avoid flashing lights or other known triggers.",
            warning: "A seizure lasting longer than 5 minutes, or multiple seizures in a row without regaining consciousness, is a medical emergency known as Status Epilepticus."
        },
        ar: {
            title: "الصرع (Epilepsy)",
            desc: "اضطراب في الجهاز العصبي المركزي (عصبي) يصبح فيه نشاط الدماغ غير طبيعي، مما يسبب نوبات أو فترات من السلوك غير المعتاد، والأحاسيس، وفقدان الوعي أحياناً.",
            symptoms: ["ارتباك مؤقت أو نوبات من التحديق في الفراغ", "حركات ارتجافية لا يمكن السيطرة عليها في الذراعين والساقين (تشنجات)", "فقدان الوعي أو الإدراك بالكامل", "أعراض نفسية مثل الخوف، القلق، أو الارتياب", "حركات متكررة مثل المضغ أو فرك اليدين"],
            treatment: ["الأدوية المضادة للصرع (مثل كاربامازيبين، حمض الفالبرويك)", "النظام الغذائي الكيتوني (عالي الدهون، منخفض الكربوهيدرات) للحالات المقاومة للأدوية", "الاستئصال الجراحي للمنطقة الدماغية المسببة للنوبات", "تحفيز العصب المبهم (VNS) عن طريق زرع جهاز خاص"],
            advice: "تناول الأدوية الموصوفة في نفس الأوقات يومياً وبدقة. احصل على قسط كافٍ ومنتظم من النوم، وتجنب الإجهاد والأضواء الوامضة.",
            warning: "النوبة التي تستمر لأكثر من 5 دقائق، أو النوبات المتكررة دون استعادة الوعي بينها، هي حالة طوارئ طبية خطيرة تُعرف بالحالة الصرعية."
        }
    },
    {
        id: 1121,
        ku: {
            title: "هەوکردنی ڕێڕەوی میز (UTI)",
            desc: "هەوکردنێکی بەکتریایی باوە لە هەر بەشێکی کۆئەندامی میزدا (گورچیلەکان، بۆری میز، یان میزەڵدان)، بەتایبەت لە میزەڵداندا زۆرترە.",
            symptoms: ["هەستکردن بە سووتانەوە و ئازاری توند لە کاتی میزکردندا", "حەزێکی بەردەوام و لەپڕ و خێرا بۆ میزکردن", "میزکردنی کەم بەڵام بەردەوام لە ناو کورتە کاتدا", "بوونی میزی لێڵ، سوورباو یان بۆندار", "ئازاری بەشی خوارەوەی سک یان لە دەوری حەوزدا"],
            treatment: ["وەرگرتنی دژەبەکتریا (Antibiotics وەک Nitrofurantoin یان Ciprofloxacin)", "بەکارهێنانی دەرمانی کەمکەرەوەی ئازاری بۆری میز (Phenazopyridine)", "خواردنەوەی ئاوی زۆر بۆ شوشتنەوەی بەکتریاکان", "چارەسەری هۆرمۆنی بۆ ژنان دوای تەمەنی نائومێدی ئەگەر دووبارە ببێتەوە"],
            advice: "بۆ خۆپاراستن بڕێکی زۆر ئاو بخوەرەوە ڕۆژانە. پاکوخاوێنی شوێنی میز بە تەواوی بپارێزە و دوای سەرجێیی ڕاستەوخۆ میز بکە.",
            warning: "ئەگەر هەوکردنەکە لەگەڵیدا ئازاری پشت، تای بەرز، لەرز، و دڵتێکچوونی هەبوو، نیشانەی گەیشتنی بەکتریایە بە گورچیلەکان و پێویستی بە پزیشک هەیە."
        },
        en: {
            title: "Urinary Tract Infection (UTI)",
            desc: "An infection in any part of your urinary system, including your kidneys, ureters, bladder, and urethra, most commonly involving the lower urinary tract.",
            symptoms: ["A strong, persistent urge to urinate", "A burning or painful sensation during urination", "Passing frequent, small amounts of urine", "Urine that appears cloudy, red, pink, or has a strong odor", "Pelvic pain in women, especially in the center of the pelvis"],
            treatment: ["Antibiotic therapy (such as Nitrofurantoin, Trimethoprim, or Ciprofloxacin)", "Urinary analgesics (like Phenazopyridine) to relieve burning pain", "Increased oral hydration to flush out bacteria", "Vaginal estrogen therapy for recurrent UTIs in postmenopausal women"],
            advice: "Drink plenty of water daily to dilute your urine and ensure frequent voiding. Wipe from front to back after using the toilet, and urinate soon after intercourse.",
            warning: "If symptoms progress to include upper back and side pain, high fever, shaking chills, or vomiting, you may have a serious kidney infection (pyelonephritis)."
        },
        ar: {
            title: "التهاب المسالك البولية (UTI)",
            desc: "عدوى تصيب أي جزء من الجهاز البولي، بما في ذلك الكليتان، الحالبان، المثانة، والإحليل، وغالباً ما تشمل الجزء السفلي من المسالك البولية.",
            symptoms: ["رغبة قوية ومستمرة في التبول", "شعور بالحرقان أو ألم أثناء التبول", "تبول كميات صغيرة ومتكررة من البول", "بول يبدو عكراً، أو أحمر، أو وردياً، أو ذو رائحة قوية", "ألم في الحوض لدى النساء، خاصة في وسط الحوض"],
            treatment: ["مضادات حيوية (مثل نيتروفورانتوين، تريميثوبريم، أو سيبروفلوكساسين)", "مسكنات خاصة للمسالك البولية (مثل فينازوبيريدين) لتخفيف ألم الحرقان", "زيادة شرب الماء للمساعدة في طرد البكتيريا من المجرى البولي", "العلاج بالإستروجين المهبلي للواتي يعانين من التهابات متكررة بعد انقطاع الطمث"],
            advice: "اشرب الكثير من الماء يومياً. امسح من الأمام إلى الخلف بعد استخدام المرحاض لمنع انتشار البكتيريا، وتبول بعد الجماع مباشرة.",
            warning: "إذا تطورت الأعراض لتشمل ألم في الجزء العلوي من الظهر والجانب، أو حمى مرتفعة، أو قشعريرة، أو قيء، فقد يشير ذلك إلى التهاب الكلى الحاد."
        }
    },
    {
        id: 1122,
        ku: {
            title: "زەهایمەر یان لەبیرچوونەوە (Alzheimer's Disease)",
            desc: "تێکچوونێکی دەماری پێشکەوتووی مێشکە کە دەبێتە هۆی بچوکبوونەوەی خانەکانی مێشک و تێکچوونی بیرەوەری، توانای عەقڵی و ڕەفتاری کەسەکە.",
            symptoms: ["لەبیرچوونەوەی بەردەوامی زانیارییە نوێیەکان و پرسیارکردنی دووبارە", "سەختی لە پلاندانان، شیکارکردنی کێشەکان و ژماردنی پارەدا", "تێکچوونی کات و شوێن (ونبوون لەو شوێنانەی پێشتر ناسراو بوون)", "سەختی لە دۆزینەوەی وشەی گونجاو لە کاتی قسەکردندا", "گۆڕانی خێرا لە هەڵسوکەوت، گۆشەگیری، و نەمانی متمانە بە چواردەور"],
            treatment: ["بەکارهێنانی دەرمانی ڕێکخەری هۆرمۆنە دەمارییەکان (وەک Donepezil یان Memantine)", "چارەسەری ڕەفتاری و مەشقی فیکری بۆ هێشتنەوەی توانای عەقڵی", "دابینکردنی ژینگەیەکی سەلامەت و ڕێکخراو لە ماڵەوە", "بەکارهێنانی دەرمانی دژە دڵەڕاوکێ و خەمۆکی لە کاتی بوونی توڕەیی تونددا"],
            advice: "نەخۆشەکە بە دوور بگرە لە دڵەڕاوکێ و گۆڕینی بەردەوامی ژینگەکەی. هانی بدە یارییە عەقڵییەکان (کوتان، یاری وشە) بکات و ناونیشانی خۆی لە گیرفاندا بێت.",
            warning: "ونبوون و سەرگەردانی نەخۆش بە هۆکاری دەرچوونی لە ماڵ یەکێکە لە مەترسییە گەورەکان. دەرگاکان دابخە و چاودێری بەردەوامی بکە."
        },
        en: {
            title: "Alzheimer's Disease",
            desc: "A progressive neurologic disorder that causes the brain to shrink (atrophy) and brain cells to die, leading to a continuous decline in memory, thinking, and social skills.",
            symptoms: ["Persistent memory loss affecting daily life (forgetting recent events, conversations)", "Difficulty planning, problem-solving, or working with numbers", "Confusion about time or place (getting lost in familiar neighborhoods)", "Trouble finding the right words while speaking or writing", "Changes in mood, personality, increased paranoia, or social withdrawal"],
            treatment: ["Cholinesterase inhibitors (e.g., Donepezil, Rivastigmine) to aid neurotransmission", "NMDA receptor antagonists (e.g., Memantine) to protect brain cells", "Cognitive stimulation therapy and physical exercise", "Medications to manage behavioral symptoms (anxiety, agitation, insomnia)"],
            advice: "Maintain a structured, calm, and safe daily routine. Use written memory aids like calendars and lists. Encourage social engagement and mental activities.",
            warning: "Wandering is a common and dangerous behavior in Alzheimer's patients. Ensure the home is secure, and place an ID bracelet or tracker on the patient."
        },
        ar: {
            title: "مرض ألزهايمر (Alzheimer's)",
            desc: "اضطراب عصبي تدريجي يؤدي إلى انكماش الدماغ (ضمور) وموت خلاياه، مما يتسبب في تراجع مستمر في الذاكرة والتفكير والمهارات الاجتماعية.",
            symptoms: ["فقدان الذاكرة المستمر الذي يؤثر على الحياة اليومية (نسيان الأحداث الأخيرة)", "صعوبة في التخطيط، وحل المشكلات، أو التعامل مع الأرقام", "ارتباك بشأن الوقت أو المكان (الضياع في الأماكن المألوفة)", "صعوبة في العثور على الكلمات المناسبة أثناء التحدث أو الكتابة", "تغيرات في المزاج، الشخصية، زيادة الشك، أو الانسحاب الاجتماعي"],
            treatment: ["مثبطات الكولينستيراز (مثل دونيبزيل) للمساعدة في نقل الإشارات العصبية", "مضادات مستقبلات NMDA (مثل ميمانتين) لحماية خلايا الدماغ", "العلاج بالتحفيز المعرفي والتمارين البدنية المناسبة", "أدوية للتحكم في الأعراض السلوكية (القلق، التهيج، الأرق)"],
            advice: "حافظ على روتين يومي منظم وهادئ وآمن. استخدم أدوات مساعدة للذاكرة مثل التقويمات والقوائم المكتوبة. شجع الأنشطة العقلية.",
            warning: "التجوال والضياع سلوك شائع وخطير لدى مرضى ألزهايمر. تأكد من تأمين المنزل وضع سوار تعريفي أو جهاز تتبع للمريض."
        }
    },
    {
        id: 1123,
        ku: {
            title: "شێرپەنجەی سنگ (Breast Cancer)",
            desc: "گەشەکردنێکی نائاسایی و بێ کۆنترۆڵی خانەکانی سنگی ژنان (یان پیاوان بە ڕێژەیەکی کەم) کە گرێی بەدکار دروست دەکەن.",
            symptoms: ["دەرکەوتنی گرێیەکی ڕەقی بێ ئازار یان بە ئازار لە سنگ یان بن باڵدا", "گۆڕانی شێوە، قەبارە یان دیمەنی پێستی سنگ (چرچبوون یان هاوشێوەی پێستی پرتەقاڵ)", "چوونە ناوەوەی گۆی مەمک بەرەو ناوەوە", "دەردراوی نائاسایی یان خوێناوی لە گۆی مەمکەوە", "سووربوونەوە، گەرمبوون یان کڕانەوەی بەردەوامی پێستی مەمک"],
            treatment: ["لادانی گرێیەکە یان هەموو مەمکەکە بە نەشتەرگەری (Mastectomy)", "چارەسەر بە دەرمانی کیمیایی (Chemotherapy) بۆ کوشتنی خانە شێرپەنجەییەکان", "تیشکدانەوەی پزیشکی (Radiotherapy) بۆ لەناوبردنی خانە ماوەکان", "چارەسەری هۆرمۆنی بۆ ئەو شێرپەنجانەی بەهۆی هۆرمۆنەوە گەشە دەکەن"],
            advice: "مانگانە پشکنینی خودی بۆ سنگت بکە. دوای تەمەنی ٤٠ ساڵی، ساڵانە پشکنینی مامۆگرافی ئەنجام بدە بۆ دۆزینەوەی پێشوەختە.",
            warning: "هەر گرێیەک یان گۆڕانکارییەک لە سنگتدا بینی، پێویستە بە خێرایی سەردانی پزیشک بکەیت؛ دۆزینەوەی پێشوەختە شێرپەنجە بە تەواوی چاک دەکاتەوە."
        },
        en: {
            title: "Breast Cancer",
            desc: "A type of cancer that forms in the cells of the breasts, predominantly affecting women, but can also occur in men.",
            symptoms: ["A breast lump or thickening that feels different from the surrounding tissue", "Change in the size, shape, or appearance of a breast", "Newly inverted or pulled-in nipple", "Unexplained, clear, or bloody discharge from the nipple", "Dimpling, redness, or pitting of the skin over the breast (resembling orange peel)"],
            treatment: ["Surgical removal of the tumor (lumpectomy) or the entire breast (mastectomy)", "Chemotherapy to destroy rapidly growing cancer cells", "Radiation therapy using high-energy beams to kill remaining cancer cells", "Hormone or targeted therapy depending on the tumor's receptor status"],
            advice: "Perform a monthly breast self-exam 3-5 days after your period ends. Schedule regular clinical breast exams and annual mammograms starting at age 40.",
            warning: "Any new breast lump, skin changes, or nipple discharge should be promptly evaluated by a healthcare professional. Early detection significantly improves survival rates."
        },
        ar: {
            title: "سرطان الثدي (Breast Cancer)",
            desc: "نوع من السرطان ينشأ في خلايا الثدي، ويصيب النساء بشكل رئيسي، ولكنه يمكن أن يحدث أيضاً لدى الرجال بنسب منخفضة جداً.",
            symptoms: ["كتلة أو سماكة في الثدي تختلف عن الأنسجة المحيطة به", "تغير في حجم الثدي أو شكله أو مظهره الخارجي", "انقلاب حلمة الثدي حديثاً أو تراجعها إلى الداخل", "إفرازات غير طبيعية، صافية أو دموية من الحلمة", "تنقير، احمرار، أو قشرة في الجلد فوق الثدي (يشبه قشر البرتقال)"],
            treatment: ["الاستئصال الجراحي للورم (استئصال الكتلة) أو الثدي بالكامل (استئصال الثدي)", "العلاج الكيميائي لتدمير خلايا السرطان سريعة النمو", "العلاج الإشعاعي باستخدام حزم طاقة عالية لقتل الخلايا المتبقية", "العلاج الهرموني أو الموجه بناءً على نوع مستقبلات الورم"],
            advice: "أجري فحصاً ذاتياً شهرياً للثدي بعد 3 إلى 5 أيام من انتهاء الدورة الشهرية. حددي موعداً لإجراء فحص الماموجرام السنوي بدءاً من سن 40.",
            warning: "يجب تقييم أي كتلة جديدة بالثدي، أو تغيرات في الجلد، أو إفرازات من الحلمة من قبل الطبيب فوراً. التشخيص المبكر ينقذ الأرواح."
        }
    },
    {
        id: 1124,
        ku: {
            title: "قەبزی (Constipation)",
            desc: "تێکچوونی سیستمی هەرسە کە تێیدا دەرچوونی پیسایی زۆر قورس دەبێت، یان ژمارەی پیسایی کەم دەبێتەوە بۆ کەمتر لە سێ جار لە هەفتەیەکدا.",
            symptoms: ["کەم میز و پیسایی کردن (کەمتر لە ٣ جار لە هەفتەیەکدا)", "پیسایی زۆر ڕەق، وشک، و تیکە تیکە", "ئازاری سک، غازات، و هەستکردن بە قورسی لە کۆئەندامی هەرسدا", "پێویستی بە هێز و گوشارێکی زۆر بۆ پیسایی کردن", "هەستکردن بەوەی پیسایی بە تەواوی دەرنەچووە"],
            treatment: ["بەکارهێنانی دەرمانی نەرمکەرەوەی پیسایی (Laxatives وەک Lactulose)", "بەکارهێنانی حەبی ملوولە یان مۆم (Suppositories) بۆ حاڵەتی بەپەلە", "بەکارهێنانی حەبی تەڕکەرەوەی پیسایی بۆ ماوەیەک", "چارسەکردنی نەخۆشییە بنەڕەتییەکانی هەرس (بۆ نموونە تەمەڵی ڕێخۆڵە)"],
            advice: "بڕێکی زۆر شلەمەنی و ئاو بخوەرەوە (ڕۆژانە ٨ پەرداخ). خۆراکی پڕ لە ڕیشاڵ بخۆ (سەوزە، میوە، جۆ). چالاکی جەستەیی بکە بۆ هاندانی ڕێخۆڵە.",
            warning: "ئەگەر قەبزییەکە بۆ ماوەی درێژ بەردەوام بوو و لەگەڵیدا ئازاری توندی سک، ڕشانەوە، یان بوونی خوێنی لێهات، پێویستی بە پشکنینی پزیشکی بەپەلە هەیە."
        },
        en: {
            title: "Constipation",
            desc: "A common condition characterized by difficult, infrequent, or incomplete bowel movements, typically fewer than three times a week.",
            symptoms: ["Passing fewer than three stools a week", "Stools that are hard, dry, lumpy, and difficult to pass", "Abdominal pain, bloating, cramping, and fullness", "Straining excessively during bowel movements", "Feeling as though there is a blockage preventing complete bowel movements"],
            treatment: ["Bulk-forming, osmotic, or stimulant laxatives (e.g., Lactulose, Senna)", "Stool softeners (such as Docusate Sodium) to prevent straining", "Glycerin suppositories or enemas for immediate acute relief", "Treating underlying digestive conditions affecting motility"],
            advice: "Increase dietary fiber intake (whole grains, beans, fresh fruits, vegetables). Drink at least 2-2.5 liters of water daily, and exercise regularly.",
            warning: "Chronic constipation accompanied by severe abdominal pain, vomiting, inability to pass gas, or blood in the stool requires urgent medical evaluation."
        },
        ar: {
            title: "الإمساك (Constipation)",
            desc: "حالة شائعة تتميز بصعوبة إخراج البراز، أو قلة عدد مرات التبرز (عادة أقل من ثلاث مرات في الأسبوع)، أو الشعور بعدم الإفراغ الكامل.",
            symptoms: ["إخراج البراز أقل من ثلاث مرات في الأسبوع", "براز صلب، جاف، متكتل، وصعب الإخراج", "ألم في البطن، انتفاخ، تقلصات، وشعور بالامتلاء", "بذل مجهود وضغط شديد أثناء تبرز البراز", "الشعور بوجود انسداد يمنع الإخلاء الكامل للأمعاء"],
            treatment: ["الملينات المكونة للكتلة، أو الملينات الاسموزية أو المنشطة (مثل لاكتولوز)", "ملينات البراز (مثل دوكوسات الصوديوم) لمنع الإجهاد", "تحاميل الجلسرين أو الحقن الشرجية للإغاثة الفورية", "علاج المشاكل الهضمية الكامنة التي تؤثر على حركة الأمعاء"],
            advice: "زد من تناول الألياف الغذائية (الحبوب الكاملة، الخضار، الفواكه). اشرب ما لا يقل عن 2 لتر من الماء يومياً، ومارس الرياضة بانتظام.",
            warning: "الإمساك المزمن المصحوب بألم شديد في البطن، أو قيء، أو عدم القدرة على تمرير الغازات، أو وجود دم في البراز يتطلب تقييماً طبياً عاجلاً."
        }
    },
    {
        id: 1125,
        ku: {
            title: "دڵەکزێ و گەڕانەوەی ترشەڵۆک (GERD)",
            desc: "تێکچوونێکی درێژخایەنی کۆئەندامی هەرسە کە تێیدا ترشەڵۆکی گەدە بەردەوام دەگەڕێتەوە بۆ سەرەوە بۆ ناو بۆری خۆراک (سۆندە) و دەبێتە هۆی سووتانی ناوپۆشەکەی.",
            symptoms: ["سووتانەوەیەک لە ناو سنگدا (دڵەکزێ) بەتایبەت دوای نانخواردن کە لە شەواندا خراپتر دەبێت", "تەقینی ترشەڵۆک یان هێنانەوەی خۆراکی تاڵ بۆ دەم", "ئازاری سنگ یان قورسی لە قووتدانی خۆراکدا (Dysphagia)", "کۆکەی وشکی بەردەوام و زبربوونی دەنگ", "هەستکردن بە بوونی گرێ لە ناو قوڕگدا"],
            treatment: ["بەکارهێنانی دەرمانی دژە ترش (Antacids) بۆ کەمکردنەوەی خێرای ترشەڵۆک", "بەکارهێنانی دەرمانی H2 blockers (وەک فامۆتیدین)", "بەکارهێنانی دەرمانی بەهێزی PPIs (وەک ئۆمێپرازۆڵ یان ئیسۆمێپرازۆڵ)", "نەشتەرگەری پتەوکردنی زمانەی گەدە (Fundoplication) بۆ دۆخی زۆر توند"],
            advice: "دوای نانخواردن بۆ ماوەی ٣ کاتژمێر پاڵمەکەوە. سەری سەرینەکەت بەرز بکەرەوە لە کاتی خەودا. لە خۆراکی چەور، توند، نەعنا، شوکولاتە و کافایین دوور بکەوەرەوە.",
            warning: "دڵەکزێی بەردەوام و چارەسەرنەکراو لە ماوەی چەندین ساڵدا دەبێتە هۆی برینداربوونی بۆری خۆراک، تەسکبوونەوەی بۆرییەکە یان تێکچوونی خانەکان و دروستبوونی حاڵەتی (Barrett's esophagus) کە زەمینەخۆشکەرە بۆ شێرپەنجە."
        },
        en: {
            title: "GERD (Gastroesophageal Reflux Disease)",
            desc: "A chronic digestive disease that occurs when stomach acid or, occasionally, stomach content, flows back into your food pipe (esophagus), irritating the lining.",
            symptoms: ["A burning sensation in your chest (heartburn), usually after eating, which might be worse at night", "Regurgitation of food or sour liquid into your throat or mouth", "Difficulty swallowing (dysphagia) or chest pain", "Chronic dry cough, hoarseness, or sore throat", "Sensation of a lump in your throat"],
            treatment: ["Antacids for quick, temporary acid neutralization", "H2 blockers (like Famotidine) to reduce acid production", "Proton Pump Inhibitors (PPIs like Omeprazole, Esomeprazole) for healing", "Surgery (e.g., Nissen Fundoplication) to reinforce the lower esophageal sphincter"],
            advice: "Avoid lying down within 3 hours after eating. Elevate the head of your bed. Limit trigger foods (fatty, spicy, mint, chocolate, caffeine) and lose excess weight.",
            warning: "Chronic, untreated GERD can cause severe complications, including esophageal stricture (narrowing), open sores (ulcers), or a precancerous condition called Barrett's Esophagus."
        },
        ar: {
            title: "ارتجاع المريء / الارتداد المعدي المريئي (GERD)",
            desc: "مرض هضمي مزمن يحدث عندما تتدفق أحماض المعدة أو محتوياتها بشكل متكرر إلى أنبوب الطعام (المريء)، مما يؤدي إلى تهيج بطانته.",
            symptoms: ["شعور بالحرقان في صدرك (حرقة المعدة)، عادة بعد تناول الطعام، وقد يزداد سوءاً في الليل", "ارتجاع الطعام أو سائل حامض إلى حلقك أو فمك", "صعوبة في البلع (عسر البلع) أو ألم في الصدر", "سعال جاف مزمن، بحة في الصوت، أو التهاب الحلق", "الشعور بوجود كتلة في حلقك"],
            treatment: ["مضادات الحموضة لتحييد أحماض المعدة بشكل مؤقت وسريع", "حاصرات H2 (مثل فاموتيدين) لتقليل إنتاج حمض المعدة", "مثبطات مضخة البروتون (مثل أوميبرازول أو إيسوميبرازول) لشفاء المريء", "الجراحة (مثل تثنية القاع لنيسين) لتقوية العضلة العاصرة المريئية السفلى"],
            advice: "تجنب الاستلقاء خلال 3 ساعات بعد تناول الطعام. ارفع رأس سريرك. حد من الأطعمة المهيجة (الدهنية، الحارة، النعناع، الشوكولاتة، الكافيين) وانقص وزنك.",
            warning: "يمكن أن يسبب ارتجاع المريء المزمن غير المعالج مضاعفات خطيرة، بما في ذلك تضيق المريء، قروح مفتوحة، أو حالة ما قبل السرطان تسمى مريء باريت."
        }
    }
];
