const womensData = [
    { 
        id: 1101, 
        ku: { 
            title: "کیسی هێلکەدان (PCOS)", 
            desc: "تێکچوونی هۆرمۆنەکانە لە ئافرەتاندا کە دەبێتە هۆی دروستبوونی کیسی بچووک لەسەر هێلکەدان.", 
            symptoms: ["تێکچوونی سووڕی مانگانە", "زیادبوونی مووی دەموچاو و لەش", "زیادبوونی کێش", "دروستبوونی زیپکە"], 
            treatment: ["ڕێکخستنی کێش و وەرزشکردن", "حەبی ڕێگریکردن لە سکپڕی (بۆ ڕێکخستنی هۆرمۆن)", "دەرمانی میتفۆرمین (بۆ شەکرە)"], 
            advice: "خۆراکی تەندروست و کەمکردنەوەی شەکر زۆر گرنگە بۆ کۆنتڕۆڵکردنی ئەم حاڵەتە." 
        }, 
        en: { 
            title: "Polycystic Ovary Syndrome (PCOS)", 
            desc: "A hormonal disorder causing enlarged ovaries with small cysts on the outer edges.", 
            symptoms: ["Irregular periods", "Excess hair growth", "Weight gain", "Acne"], 
            treatment: ["Weight management and exercise", "Birth control pills (hormone regulation)", "Metformin"], 
            advice: "A healthy diet and reducing sugar intake are crucial for managing this condition." 
        }, 
        ar: { 
            title: "تكيس المبايض (PCOS)", 
            desc: "اضطراب هرموني يسبب تضخم المبايض وتكون أكياس صغيرة على الحواف الخارجية.", 
            symptoms: ["عدم انتظام الدورة الشهرية", "نمو شعر زائد", "زيادة الوزن", "حب الشباب"], 
            treatment: ["تنظيم الوزن وممارسة الرياضة", "حبوب منع الحمل (لتنظيم الهرمونات)", "الميتفورمين"], 
            advice: "اتباع نظام غذائي صحي وتقليل السكر مهم جداً للسيطرة على هذه الحالة." 
        } 
    },
    { 
        id: 1102, 
        ku: { 
            title: "هەوکردنی کەڕوویی زێ (Yeast Infection)", 
            desc: "هەوکردنێکی باوە بەهۆی زۆربوونی کەڕووی کاندیدا لە زێدا.", 
            symptoms: ["خورانی توند لە ناوچەی زێ", "دەردراوی سپی وەکو پەنیر", "ئازار لە کاتی میزکردن"], 
            treatment: ["کرێم یان حەبی دژە کەڕوو (وەک Fluconazole)", "بەکارهێنانی تەحامیل بۆ زێ"], 
            advice: "جلوبەرگی لۆکە (پەمۆ) لەبەر بکە و خۆت بپارێزە لە سابوونی بۆندار لەو ناوچەیەدا." 
        }, 
        en: { 
            title: "Vaginal Yeast Infection", 
            desc: "A common fungal infection caused by the overgrowth of Candida.", 
            symptoms: ["Intense vaginal itching", "Thick, white, cottage cheese-like discharge", "Pain during urination"], 
            treatment: ["Antifungal creams or pills (e.g., Fluconazole)", "Vaginal suppositories"], 
            advice: "Wear cotton underwear and avoid using scented soaps in the genital area." 
        }, 
        ar: { 
            title: "عدوى الخميرة المهبلية", 
            desc: "عدوى فطرية شائعة ناتجة عن فرط نمو فطر الكانديدا.", 
            symptoms: ["حكة شديدة في المهبل", "إفرازات بيضاء سميكة", "ألم عند التبول"], 
            treatment: ["كريمات أو حبوب مضادة للفطريات (مثل فلوكونازول)", "تحاميل مهبلية"], 
            advice: "ارتدي ملابس داخلية قطنية وتجنبي الصابون المعطر في تلك المنطقة." 
        } 
    },
    { 
        id: 1103, 
        ku: { 
            title: "هەوکردنی بۆڕییەکانی میز (UTI)", 
            desc: "هەوکردنێکە بەهۆی بەکتریاوە کە دەچێتە ناو بۆڕییەکانی میز و میزڵدان.", 
            symptoms: ["هەستکردن بە سووتانەوە لە کاتی میزکردن", "ئارەزووی بەردەوامی میزکردن", "گۆڕانی ڕەنگی میز"], 
            treatment: ["دژە بەکتریا (Antibiotics)", "خواردنەوەی بڕێکی زۆر لە ئاو"], 
            advice: "پاش میزکردن هەمیشە لە پێشەوە بۆ دواوە خۆت پاک بکەرەوە بۆ ڕێگریکردن لە گواستنەوەی بەکتریا." 
        }, 
        en: { 
            title: "Urinary Tract Infection (UTI)", 
            desc: "An infection caused by bacteria entering the urinary tract and bladder.", 
            symptoms: ["Burning sensation during urination", "Frequent urge to urinate", "Cloudy or off-color urine"], 
            treatment: ["Antibiotics", "Drinking plenty of water"], 
            advice: "Always wipe from front to back after urinating to prevent bacteria transfer." 
        }, 
        ar: { 
            title: "التهاب المسالك البولية (UTI)", 
            desc: "عدوى بكتيرية تصيب المسالك البولية والمثانة.", 
            symptoms: ["حرقة أثناء التبول", "رغبة متكررة في التبول", "تغير لون البول"], 
            treatment: ["المضادات الحيوية", "شرب كميات كبيرة من الماء"], 
            advice: "امسحي دائماً من الأمام إلى الخلف بعد التبول لمنع انتقال البكتيريا." 
        } 
    },
    { 
        id: 1104, 
        ku: { 
            title: "هەوکردنی ناوپۆشی منداڵدان (Endometriosis)", 
            desc: "حاڵەتێکە کە تێیدا شانەی هاوشێوەی ناوپۆشی منداڵدان لە دەرەوەی منداڵدان گەشە دەکات.", 
            symptoms: ["ئازاری زۆر توندی حەوز پێش یان لە کاتی سووڕی مانگانە", "ئازار لە کاتی سەرجێی", "خوێنبەربوونی زۆر"], 
            treatment: ["دەرمانی ئازارشکێن", "چارەسەری هۆرمۆنی", "نەشتەرگەری لە حاڵەتی قورسدا"], 
            advice: "ئەگەر ئازارەکە ڕێگری لە کاری ڕۆژانەت کرد، پێویستە ڕاوێژ بە پزیشکی پسپۆڕ بکەیت." 
        }, 
        en: { 
            title: "Endometriosis", 
            desc: "A condition where tissue similar to the lining of the uterus grows outside the uterus.", 
            symptoms: ["Severe pelvic pain before/during periods", "Pain during intercourse", "Heavy bleeding"], 
            treatment: ["Pain relievers", "Hormonal therapy", "Surgery in severe cases"], 
            advice: "If the pain interferes with your daily life, consult a specialist." 
        }, 
        ar: { 
            title: "بطانة الرحم المهاجرة (Endometriosis)", 
            desc: "حالة ينمو فيها نسيج مشابه لبطانة الرحم خارج الرحم.", 
            symptoms: ["ألم شديد في الحوض قبل/أثناء الدورة", "ألم أثناء الجماع", "نزيف غزير"], 
            treatment: ["مسكنات الألم", "العلاج الهرموني", "الجراحة في الحالات الشديدة"], 
            advice: "إذا كان الألم يعيق حياتك اليومية، يجب استشارة طبيب مختص." 
        } 
    },
    { 
        id: 1105, 
        ku: { 
            title: "گرێی ڕیشاڵی منداڵدان (Uterine Fibroids)", 
            desc: "گرێی سەلامەت (شێرپەنجەیی نین) کە لەسەر دیواری منداڵدان دروست دەبن.", 
            symptoms: ["خوێنبەربوونی زۆر و درێژخایەنی سووڕی مانگانە", "ئازاری پشتی خوارەوە", "زیادبوونی قەبارەی سک"], 
            treatment: ["چاودێریکردن ئەگەر بچووک بن", "دەرمانی هۆرمۆنی بۆ بچووککردنەوەیان", "نەشتەرگەری"], 
            advice: "پشکنینی سۆنەر گرنگە بۆ دیاریکردنی قەبارە و شوێنی گرێکان." 
        }, 
        en: { 
            title: "Uterine Fibroids", 
            desc: "Noncancerous growths of the uterus that often appear during childbearing years.", 
            symptoms: ["Heavy/prolonged menstrual bleeding", "Lower back pain", "Enlarged abdomen"], 
            treatment: ["Watchful waiting if small", "Hormonal medications to shrink them", "Surgery"], 
            advice: "An ultrasound is important to determine the size and location of the fibroids." 
        }, 
        ar: { 
            title: "الأورام الليفية الرحمية", 
            desc: "أورام غير سرطانية تظهر في الرحم غالبًا خلال سنوات الإنجاب.", 
            symptoms: ["نزيف دورة شهرية غزير/طويل", "ألم في أسفل الظهر", "كبر حجم البطن"], 
            treatment: ["المراقبة إذا كانت صغيرة", "أدوية هرمونية لتصغيرها", "الجراحة"], 
            advice: "فحص السونار مهم لتحديد حجم وموقع الأورام." 
        } 
    },
    { 
        id: 1106, 
        ku: { 
            title: "هەوکردنی حەوز (PID)", 
            desc: "هەوکردنێکی بەکتیریایە لە ئەندامەکانی زاوزێی ئافرەت، زۆرجار بەهۆی نەخۆشییە گوازراوەکانی سێکسەوە دەبێت.", 
            symptoms: ["ئازاری خوارەوەی سک و حەوز", "دەردراوی نائاسایی و بۆن ناخۆشی زێ", "تا و لەرز"], 
            treatment: ["کۆرسی دژە بەکتریا بۆ هەردوو هاوسەر", "پشوودان"], 
            advice: "چارەسەرنەکردنی دەبێتە هۆی کێشەی نەزۆکی لە داهاتوودا، بۆیە زوو چارەسەری بکە." 
        }, 
        en: { 
            title: "Pelvic Inflammatory Disease (PID)", 
            desc: "An infection of the female reproductive organs, often caused by sexually transmitted bacteria.", 
            symptoms: ["Pain in lower abdomen/pelvis", "Unusual or heavy vaginal discharge with an odor", "Fever and chills"], 
            treatment: ["Antibiotics for both partners", "Rest"], 
            advice: "Untreated PID can lead to infertility, so seek prompt treatment." 
        }, 
        ar: { 
            title: "مرض التهاب الحوض (PID)", 
            desc: "عدوى تصيب الأعضاء التناسلية الأنثوية، غالباً بسبب بكتيريا منتقلة جنسياً.", 
            symptoms: ["ألم في أسفل البطن والحوض", "إفرازات مهبلية غير عادية وذات رائحة", "حمى وقشعريرة"], 
            treatment: ["مضادات حيوية لكلا الزوجين", "الراحة"], 
            advice: "عدم علاجه قد يؤدي إلى العقم مستقبلاً، لذا يجب علاجه مبكراً." 
        } 
    },
    { 
        id: 1107, 
        ku: { 
            title: "ئازاری توندی سووڕی مانگانە (Dysmenorrhea)", 
            desc: "ئازار و گرژبوونی بەهێزی سک و پشت لە کاتی سووڕی مانگانە.", 
            symptoms: ["گرژبوونی توندی خوارەوەی سک", "ئازار دەگاتە ڕان و پشت", "سەرئێشە و دڵتێکەڵهاتن"], 
            treatment: ["حەبی ئازارشکێن (وەک ئایبۆپرۆفین)", "دانانی جەوەنەی گەرم لەسەر سک", "پشوودان"], 
            advice: "خواردنەوەی چای گیایی وەکو بەیبون و نەعنا دەتوانێت ئازارەکە کەم بکاتەوە." 
        }, 
        en: { 
            title: "Menstrual Cramps (Dysmenorrhea)", 
            desc: "Throbbing or cramping pains in the lower abdomen during periods.", 
            symptoms: ["Severe lower abdominal cramps", "Pain radiating to back and thighs", "Headache and nausea"], 
            treatment: ["Pain relievers (e.g., Ibuprofen)", "Applying a heating pad", "Rest"], 
            advice: "Drinking herbal teas like chamomile or mint can help soothe the cramps." 
        }, 
        ar: { 
            title: "عسر الطمث (آلام الدورة)", 
            desc: "آلام وتشنجات قوية في أسفل البطن أثناء الدورة الشهرية.", 
            symptoms: ["تشنجات قوية في أسفل البطن", "ألم يمتد للظهر والفخذين", "صداع وغثيان"], 
            treatment: ["مسكنات الألم (مثل الإيبوبروفين)", "وضع كمادات دافئة", "الراحة"], 
            advice: "شرب شاي الأعشاب مثل البابونج والنعناع يمكن أن يساعد في تخفيف الألم." 
        } 
    },
    { 
        id: 1108, 
        ku: { 
            title: "شێرپەنجەی مەمک (Breast Cancer)", 
            desc: "دروستبوونی خانەی شێرپەنجەیی لە شانەکانی مەمکدا، باوترین جۆری شێرپەنجەیە لە ئافرەتاندا.", 
            symptoms: ["دەرکەوتنی گرێ یان ڕەقبوون لە مەمک", "گۆڕان لە شێوە و قەبارەی مەمک", "گۆڕان لە سەرەگۆی مەمک"], 
            treatment: ["نەشتەرگەری", "چارەسەری کیمیایی", "چارەسەری تیشکی"], 
            advice: "پشکنینی مانگانەی مەمک لەلایەن خۆتەوە و ئەنجامدانی مامۆگراف دوای تەمەنی ٤٠ ساڵی زۆر گرنگە." 
        }, 
        en: { 
            title: "Breast Cancer", 
            desc: "Cancer that forms in the cells of the breasts. The most common cancer in women.", 
            symptoms: ["A breast lump or thickening", "Change in size or shape of breast", "Changes to the nipple"], 
            treatment: ["Surgery", "Chemotherapy", "Radiation therapy"], 
            advice: "Monthly self-exams and getting mammograms after age 40 are crucial." 
        }, 
        ar: { 
            title: "سرطان الثدي", 
            desc: "سرطان يتشكل في خلايا الثدي، وهو الأكثر شيوعاً بين النساء.", 
            symptoms: ["ظهور كتلة أو سماكة في الثدي", "تغير في حجم أو شكل الثدي", "تغيرات في الحلمة"], 
            treatment: ["الجراحة", "العلاج الكيميائي", "العلاج الإشعاعي"], 
            advice: "الفحص الذاتي الشهري وإجراء الماموجرام بعد سن الأربعين مهم جداً." 
        } 
    },
    { 
        id: 1109, 
        ku: { 
            title: "شێرپەنجەی ملی منداڵدان (Cervical Cancer)", 
            desc: "جۆرێکە لە شێرپەنجە کە لە بەشی خوارەوەی منداڵدان دروست دەبێت، زۆرجار بەهۆی ڤایرۆسی (HPV)ەوەیە.", 
            symptoms: ["خوێنبەربوونی نائاسایی زێ", "دەردراوی زێ بە بۆنێکی ناخۆش و تێکەڵ بە خوێن", "ئازاری حەوز"], 
            treatment: ["نەشتەرگەری", "تیشک و کیمیاوی"], 
            advice: "وەرگرتنی ڤاکسینی HPV پێش شووکردن و پشکنینی پاپ سمیر (Pap smear) باشترین ڕێکارن بۆ خۆپاراستن." 
        }, 
        en: { 
            title: "Cervical Cancer", 
            desc: "A type of cancer that occurs in the cells of the cervix, mostly caused by HPV.", 
            symptoms: ["Unusual vaginal bleeding", "Watery, bloody vaginal discharge with foul odor", "Pelvic pain"], 
            treatment: ["Surgery", "Radiation and Chemotherapy"], 
            advice: "Getting the HPV vaccine and regular Pap smear tests are the best prevention methods." 
        }, 
        ar: { 
            title: "سرطان عنق الرحم", 
            desc: "نوع من السرطان يحدث في خلايا عنق الرحم، وغالباً ما يسببه فيروس (HPV).", 
            symptoms: ["نزيف مهبلي غير طبيعي", "إفرازات مهبلية مدممة وذات رائحة", "ألم في الحوض"], 
            treatment: ["الجراحة", "العلاج الإشعاعي والكيميائي"], 
            advice: "أخذ لقاح HPV وإجراء مسحة عنق الرحم (Pap smear) بانتظام هي أفضل طرق الوقاية." 
        } 
    },
    { 
        id: 1110, 
        ku: { 
            title: "نیشانەکانی نەمانی سووڕی مانگانە (Menopause)", 
            desc: "قۆناغێکی ئاسایی ژیانە کاتێک ئافرەت سووڕی مانگانەی بۆ یەکجاری دەوەستێت (زۆرجار ٤٥-٥٥ ساڵی).", 
            symptoms: ["تای کتوپڕ و گەرمبوونی لەش (Hot flashes)", "تێکچوونی خەو و ئارەقکردنەوەی شەوانە", "وشکبوونەوەی زێ و گۆڕانی مەزاج"], 
            treatment: ["چارەسەری جێگرەوەی هۆرمۆن (HRT)", "ڤیتامین D و کالسیۆم", "وەرزش و ڕێکخستنی خەو"], 
            advice: "خواردنی تەندروست و وەرزشکردن یارمەتیدەرێکی زۆر باشە بۆ کەمکردنەوەی نیشانەکان." 
        }, 
        en: { 
            title: "Menopause", 
            desc: "A natural biological process marking the end of menstrual cycles (usually ages 45-55).", 
            symptoms: ["Hot flashes", "Sleep disturbances & night sweats", "Vaginal dryness & mood changes"], 
            treatment: ["Hormone Replacement Therapy (HRT)", "Vitamin D & Calcium", "Exercise & sleep management"], 
            advice: "A healthy diet and regular exercise are excellent for alleviating symptoms." 
        }, 
        ar: { 
            title: "انقطاع الطمث (سن اليأس)", 
            desc: "عملية بيولوجية طبيعية تمثل نهاية دورات الحيض (عادة 45-55 سنة).", 
            symptoms: ["الهبات الساخنة", "اضطراب النوم والتعرق الليلي", "جفاف المهبل وتقلبات المزاج"], 
            treatment: ["العلاج بالهرمونات البديلة (HRT)", "فيتامين د والكالسيوم", "الرياضة وتنظيم النوم"], 
            advice: "الأكل الصحي وممارسة الرياضة يساعدان بشكل كبير في تخفيف الأعراض." 
        } 
    },
    { 
        id: 1111, 
        ku: { 
            title: "نیشانەکانی پێش سووڕی مانگانە (PMS)", 
            desc: "کۆمەڵێک نیشانەی جەستەیی و دەروونییە کە چەند ڕۆژێک پێش سووڕی مانگانە دەردەکەون.", 
            symptoms: ["گۆڕانی مەزاج و بێتاقەتی", "ئاوسانی مەمک و سک", "سەرئێشە و ماندووێتی", "ئارەزووی زۆر بۆ خواردن"], 
            treatment: ["خواردنی تەندروست و کەمکردنەوەی خوێ و شەکر", "وەرزشی سووک وەکو پیاسەکردن", "حەبی ئازارشکێن بۆ کەمکردنەوەی ئازار"], 
            advice: "خەوی باش و خواردنەوەی بڕی پێویست لە ئاو دەتوانێت نیشانەکان زۆر کەم بکاتەوە." 
        }, 
        en: { 
            title: "Premenstrual Syndrome (PMS)", 
            desc: "A group of physical and emotional symptoms that occur before a menstrual period.", 
            symptoms: ["Mood swings and irritability", "Breast tenderness and bloating", "Headache and fatigue", "Food cravings"], 
            treatment: ["Healthy diet (less salt/sugar)", "Light exercise like walking", "Pain relievers for discomfort"], 
            advice: "Adequate sleep and hydration can significantly reduce the severity of symptoms." 
        }, 
        ar: { 
            title: "متلازمة ما قبل الحيض (PMS)", 
            desc: "مجموعة من الأعراض الجسدية والنفسية التي تسبق الدورة الشهرية بأيام.", 
            symptoms: ["تقلبات المزاج والعصبية", "احتقان الثدي وانتفاخ البطن", "صداع وإرهاق", "رغبة شديدة في الأكل"], 
            treatment: ["نظام غذائي صحي (تقليل الملح/السكر)", "رياضة خفيفة كالمشي", "مسكنات لتخفيف الألم"], 
            advice: "النوم الجيد وشرب الماء بكميات كافية يمكن أن يقلل من حدة الأعراض بشكل كبير." 
        } 
    }
];
