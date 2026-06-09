const vaccinationsData = [
    {
        id: "vac_bcg",
        img: "https://img.icons8.com/color/512/lungs.png",
        ku: {
            title: "پێکوتەی دەردەباریکە (BCG)",
            desc: "ئەم پێکوتەیە دەدرێت بۆ پاراستنی منداڵ لە نەخۆشی سیل (Tuberculosis).",
            dosage: "بە شێوەی دەرزی لە ژێر پێستی شانی چەپ (Intradermal) دەدرێت لە کاتی لەدایکبوون.",
            advice: "ئاساییە شوێنی دەرزییەکە دوای چەند هەفتەیەک سوور ببێتەوە، کێم بکات، و ببێتە برینێکی بچووک. هیچ مەرهەم و دەرمانێکی لێ مەدە.",
            warning: "ئەگەر برینەکە زۆر گەورە بوو یان ئازاری هەبوو، پێویستە پزیشک بیبینێت.",
            tips: ["تەنها یەک جار دەدرێت لە ژیاندا بۆ زۆربەی خەڵک."]
        },
        en: {
            title: "BCG (Tuberculosis)",
            desc: "Vaccine used primarily against tuberculosis (TB).",
            dosage: "Intradermal injection in the left arm, usually at birth.",
            advice: "It is normal for a small red blister to form at the injection site 2-6 weeks later. Do not put any ointment on it.",
            warning: "Consult a doctor if the sore becomes too large or painful.",
            tips: ["Usually given only once at birth."]
        },
        ar: {
            title: "لقاح السل (BCG)",
            desc: "لقاح يستخدم بشكل أساسي للوقاية من مرض السل.",
            dosage: "إبرة تحت الجلد في الكتف الأيسر عند الولادة.",
            advice: "من الطبيعي أن يظهر تقرح صغير في مكان الحقن بعد أسابيع. لا تضع أي مرهم عليه.",
            warning: "استشر الطبيب إذا أصبح الجرح كبيراً جداً.",
            tips: ["يعطى عادة مرة واحدة عند الولادة."]
        }
    },
    {
        id: "vac_hepb",
        img: "https://img.icons8.com/color/512/liver.png",
        ku: {
            title: "هەوکردنی جگەری جۆری بی (Hep B)",
            desc: "بۆ پاراستنە لە ڤایرۆسی هەوکردنی جگەر (Hepatitis B) کە دەبێتە هۆی تێکچوونی جگەر.",
            dosage: "لە شێوەی دەرزی لە ڕانی منداڵ (ماسولکە - IM) دەدرێت.",
            action: ["کاتی لەدایکبوون", "دوو مانگ", "شەش مانگ"],
            tips: ["پارێزگارییەکی هەمیشەیی دروست دەکات بۆ جگەر."]
        },
        en: {
            title: "Hepatitis B (Hep B)",
            desc: "Protects against Hepatitis B virus, which causes serious liver disease.",
            dosage: "Intramuscular (IM) injection in the thigh.",
            action: ["At birth", "2 months", "6 months"],
            tips: ["Provides lifelong protection."]
        },
        ar: {
            title: "التهاب الكبد ب (Hep B)",
            desc: "يحمي من فيروس التهاب الكبد B الذي يسبب أمراض الكبد الخطيرة.",
            dosage: "إبرة عضلية (IM) في الفخذ.",
            action: ["عند الولادة", "شهران", "6 أشهر"],
            tips: ["يوفر حماية مدى الحياة."]
        }
    },
    {
        id: "vac_hepa",
        img: "https://img.icons8.com/color/512/liver.png",
        ku: {
            title: "هەوکردنی جگەری جۆری ئەی (Hep A)",
            desc: "پێکوتەیەکە دژی ڤایرۆسی هەوکردنی جگەری جۆری ئەی کە بەهۆی خۆراک و ئاوی پیسەوە دەگوازرێتەوە.",
            dosage: "٢ ژەم دەدرێت بە دەرزی، یەکەمیان لە تەمەنی ١ ساڵی، دووەمیان ٦ مانگ دواتر.",
            tips: ["ڕێگری دەکات لە زەردوو (Jaundice) بەهۆی پیسبوونەوە."]
        },
        en: {
            title: "Hepatitis A (Hep A)",
            desc: "Protects against Hepatitis A virus, transmitted through contaminated food and water.",
            dosage: "2 doses via IM injection, starting at 1 year of age, separated by 6 months.",
            tips: ["Prevents food/water-borne jaundice."]
        },
        ar: {
            title: "التهاب الكبد أ (Hep A)",
            desc: "يحمي من فيروس التهاب الكبد أ الذي ينتقل عبر الطعام والماء الملوثين.",
            dosage: "جرعتان إبرة، تبدأ عند عمر سنة وتفصل بينهما 6 أشهر.",
            tips: ["يمنع اليرقان الناتج عن التلوث."]
        }
    },
    {
        id: "vac_opv",
        img: "https://img.icons8.com/color/512/water.png",
        ku: {
            title: "قەترەی ئیفلیجی منداڵان (OPV)",
            desc: "پێکوتەی زارەکی بۆ پاراستن لە ڤایرۆسی ئیفلیجی منداڵان (Polio).",
            dosage: "٢ دڵۆپ دەکرێتە ناو دەمی منداڵەکەوە.",
            action: ["لەدایکبوون", "دوو مانگ", "چوار مانگ", "شەش مانگ", "١٨ مانگ", "٤-٦ ساڵ"],
            advice: "ئەگەر منداڵەکە یەکسەر دوای قەترەکە ڕشایەوە، پێویستە ژەمێکی تری پێ بدرێتەوە."
        },
        en: {
            title: "Oral Polio Vaccine (OPV)",
            desc: "Oral vaccine to protect against the Poliovirus.",
            dosage: "2 drops administered orally.",
            action: ["At birth", "2 months", "4 months", "6 months", "18 months", "4-6 years"],
            advice: "If the baby vomits immediately after, the dose should be repeated."
        },
        ar: {
            title: "قطرات شلل الأطفال (OPV)",
            desc: "لقاح فموي للوقاية من فيروس شلل الأطفال.",
            dosage: "قطرتان في الفم.",
            action: ["عند الولادة", "شهران", "4 أشهر", "6 أشهر", "18 شهر", "4-6 سنوات"],
            advice: "إذا تقيأ الطفل فوراً، يجب إعادة الجرعة."
        }
    },
    {
        id: "vac_ipv",
        img: "https://img.icons8.com/color/512/syringe.png",
        ku: {
            title: "دەرزی ئیفلیجی منداڵان (IPV)",
            desc: "ڤێرژنی کوژراوی ڤایرۆسی ئیفلیجییە کە بە دەرزی دەدرێت بۆ دروستکردنی بەرگرییەکی بەهێزتر لە خوێندا.",
            dosage: "وەک بەشێک لە پێکوتەی شەشینە دەدرێت لە (٢، ٤، ٦ مانگ).",
            tips: ["زۆرجار لەگەڵ قەترەکە پێکەوە بەکاردێن."]
        },
        en: {
            title: "Inactivated Polio Vaccine (IPV)",
            desc: "Killed version of the poliovirus given as an injection for strong blood immunity.",
            dosage: "Given as part of the Hexavalent vaccine at 2, 4, and 6 months.",
            tips: ["Often used in combination with OPV."]
        },
        ar: {
            title: "إبرة شلل الأطفال (IPV)",
            desc: "نسخة ميتة من فيروس شلل الأطفال تعطى كإبرة.",
            dosage: "تعطى كجزء من اللقاح السداسي في عمر 2، 4، و 6 أشهر.",
            tips: ["تستخدم غالباً بالتزامن مع القطرات الفموية."]
        }
    },
    {
        id: "vac_dtap",
        img: "https://img.icons8.com/color/512/bacteria.png",
        ku: {
            title: "سیانەی بەکتریا (DTaP)",
            desc: "بۆ پاراستنی منداڵ لە سێ نەخۆشی مەترسیدار: دەردەخەنکە (Diphtheria)، دەردەگۆڕ (Tetanus)، کۆکەڕەشە (Pertussis).",
            dosage: "دەرزییە لە ماسولکەی ڕان.",
            warning: "زۆرجار دەبێتە هۆی تا (Fever) و ئازاری شوێنی دەرزییەکە و گریان بۆ چەند کاتژمێرێک.",
            action: ["بەردەوام شیری پێ بدە", "تەنها ئەگەر تای هەبوو پاراسیتامۆڵی پێ بدە"]
        },
        en: {
            title: "DTaP Vaccine",
            desc: "Protects against Diphtheria, Tetanus, and Pertussis (Whooping cough).",
            dosage: "Intramuscular injection in the thigh.",
            warning: "Commonly causes mild fever, local pain, and irritability.",
            action: ["Keep baby hydrated", "Give Paracetamol ONLY if fever occurs"]
        },
        ar: {
            title: "الثلاثي البكتيري (DTaP)",
            desc: "يحمي من الخناق، الكزاز، والسعال الديكي.",
            dosage: "إبرة عضلية في الفخذ.",
            warning: "يسبب غالباً حمى خفيفة وألماً موضعياً وبكاءً.",
            action: ["استمر في الإرضاع", "أعطِ الباراسيتامول فقط عند وجود حمى"]
        }
    },
    {
        id: "vac_tdap",
        img: "https://img.icons8.com/color/512/shield.png",
        ku: {
            title: "بەهێزکەری سیانە (Tdap / Td)",
            desc: "ژەمێکی بەهێزکەری پێکوتەی (دەردەخەنکە، دەردەگۆڕ، کۆکەڕەشە)ـیە بۆ هەرزەکاران و گەورەکان.",
            dosage: "دەبێت هەموو ١٠ ساڵ جارێک دووبارە بکرێتەوە، یان لە کاتی برینداربوونی پیس بە ژەنگ.",
            tips: ["بۆ ژنانی دووگیانیش پێویستە بۆ پاراستنی کۆرپەلە لە کۆکەڕەشە."]
        },
        en: {
            title: "Tdap / Td Booster",
            desc: "Booster shot for Tetanus, Diphtheria, and Pertussis for adolescents and adults.",
            dosage: "Recommended every 10 years, or after a dirty wound.",
            tips: ["Also given during pregnancy to protect the baby from whooping cough."]
        },
        ar: {
            title: "الجرعة المنشطة (Tdap / Td)",
            desc: "جرعة منشطة للكزاز والخناق والسعال الديكي للبالغين.",
            dosage: "يوصى بها كل 10 سنوات، أو بعد جرح ملوث.",
            tips: ["تعطى أيضاً للحوامل لحماية المولود من السعال الديكي."]
        }
    },
    {
        id: "vac_hib",
        img: "https://img.icons8.com/color/512/brain.png",
        ku: {
            title: "هیمۆفیلەس ئەنفلۆنزا (Hib)",
            desc: "ڕێگری دەکات لە جۆرێکی بەکتریای مەترسیدار کە دەبێتە هۆی هەوکردنی پەردەی مێشک (Meningitis) و هەوکردنی سییەکان لە منداڵاندا.",
            dosage: "زۆرجار تێکەڵکراوە لەناو پێکوتەی شەشینە (٢، ٤، ٦ مانگ).",
            tips: ["نەخۆشییەکە هیچ پەیوەندییەکی بە ڤایرۆسی ئەنفلۆنزا (Flu) وە نییە، بەڵکو بەکتریایە."]
        },
        en: {
            title: "Hib Vaccine",
            desc: "Protects against Haemophilus influenzae type b, a major cause of bacterial meningitis.",
            dosage: "Given as part of the Hexavalent vaccine at 2, 4, 6 months.",
            tips: ["Despite the name, it does NOT cause the flu."]
        },
        ar: {
            title: "المستدمية النزلية (Hib)",
            desc: "يحمي من بكتيريا تسبب التهاب السحايا والالتهاب الرئوي عند الأطفال.",
            dosage: "يعطى ضمن اللقاح السداسي في عمر 2، 4، 6 أشهر.",
            tips: ["رغم اسمه، إلا أنه لا علاقة له بفيروس الإنفلونزا المعتاد."]
        }
    },
    {
        id: "vac_pcv",
        img: "https://img.icons8.com/color/512/lungs.png",
        ku: {
            title: "پێکوتەی سییەکان (PCV)",
            desc: "دژی بەکتریای نیومۆکۆکەڵە، کە هۆکاری سەرەکییە بۆ هەوکردنی گوێچکەی ناوەڕاست، هەوکردنی سییەکان (Pneumonia) و پەردەی مێشک.",
            dosage: "لە تەمەنی ٢، ٤، ٦ مانگی بە دەرزی دەدرێت.",
            action: ["لەوانەیە کەمێک تا دروست بکات."],
            tips: ["بەساڵاچووانی سەروو ٦٥ ساڵیش پێویستیان پێیەتی."]
        },
        en: {
            title: "Pneumococcal Conjugate (PCV)",
            desc: "Protects against pneumococcal bacteria causing ear infections, pneumonia, and meningitis.",
            dosage: "Given via injection at 2, 4, and 6 months.",
            action: ["May cause mild fever."],
            tips: ["Also recommended for adults over 65."]
        },
        ar: {
            title: "المكورات الرئوية (PCV)",
            desc: "يحمي من بكتيريا تسبب التهاب الأذن الوسطى، الالتهاب الرئوي، والتهاب السحايا.",
            dosage: "إبرة في عمر 2، 4، 6 أشهر.",
            action: ["قد يسبب حمى خفيفة."],
            tips: ["يوصى به أيضاً لكبار السن فوق 65 عاماً."]
        }
    },
    {
        id: "vac_rotavirus",
        img: "https://cdn-icons-png.flaticon.com/512/3039/3039014.png",
        ku: {
            title: "ڕۆتا ڤایرۆس (Rotavirus)",
            desc: "پارێزگاری لە منداڵ دەکات دژی ڤایرۆسی ڕۆتا کە دەبێتە هۆی سکچوون و ڕشانەوەی توند و وشکبوونەوە.",
            dosage: "تەنها بە ڕێگەی دەم دەدرێت (قەترەیە).",
            action: ["لە ٢ مانگ و ٤ مانگ (و هەندێک جۆر لە ٦ مانگیش) دەدرێت."],
            warning: "دەبێت پێش تەمەنی ٨ مانگی تەواو بکرێت."
        },
        en: {
            title: "Rotavirus",
            desc: "Protects against rotavirus, the leading cause of severe diarrhea and dehydration in infants.",
            dosage: "Given orally (liquid drops).",
            action: ["Administered at 2, 4, (and sometimes 6) months."],
            warning: "Must be completed before the baby is 8 months old."
        },
        ar: {
            title: "فيروس الروتا (Rotavirus)",
            desc: "يحمي من فيروس الروتا المسبب الرئيسي للإسهال الشديد والجفاف عند الرضع.",
            dosage: "يعطى عن طريق الفم (قطرات).",
            action: ["يُعطى في عمر 2، 4، وأحياناً 6 أشهر."],
            warning: "يجب إكماله قبل أن يبلغ الطفل 8 أشهر."
        }
    },
    {
        id: "vac_measles",
        ku: {
            title: "سوورێژە (Measles)",
            desc: "نەخۆشییەکی ڤایرۆسی زۆر درم و مەترسیدارە کە دەبێتە هۆی لیرک (سووربوونەوەی پێست)، تا، و هەوکردنی سییەکان.",
            dosage: "ژەمی یەکەم لە ٩ مانگی دەدرێت بەتەنیا (ژێر پێست).",
            tips: ["لەگەڵ ئەم پێکوتەیە زۆرجار ڤیتامین A یش دەدرێت."]
        },
        en: {
            title: "Measles",
            desc: "Highly contagious viral illness causing rash, high fever, and potentially severe complications.",
            dosage: "First dose given alone at 9 months (Subcutaneous).",
            tips: ["Often given along with Vitamin A drops."]
        },
        ar: {
            title: "الحصبة (Measles)",
            desc: "مرض فيروسي شديد العدوى يسبب طفح جلدي، حمى عالية، ومضاعفات خطيرة.",
            dosage: "الجرعة الأولى تعطى منفردة في عمر 9 أشهر (تحت الجلد).",
            tips: ["غالباً ما يُعطى مع قطرات فيتامين أ."]
        }
    },
    {
        id: "vac_mmr",
        img: "https://img.icons8.com/color/512/virus.png",
        ku: {
            title: "سیانەی ڤایرۆسی (MMR)",
            desc: "پێکوتەیەکی هاوبەشە دژی سێ نەخۆشی: سوورێژە (Measles)، ملەخڕێ (Mumps)، و سوورێژەی ئەڵمانی (Rubella).",
            dosage: "لە تەمەنی ١٥ مانگی دەدرێت، وە ژەمی دووەم (بەهێزکەر) لە ٤-٦ ساڵی.",
            warning: "ئەم پێکوتەیە زیندووی لاوازکراوە، زۆرجار دوای ٧ تا ١٠ ڕۆژ لە کوتانەکە دەبێتە هۆی تا (پەتا)، نەک ڕاستەوخۆ.",
            tips: ["ڕێگری دەکات لە مەترسی لەبارچوونی منداڵ لای ئافرەتان بەهۆی سوورێژەی ئەڵمانییەوە."]
        },
        en: {
            title: "MMR Vaccine",
            desc: "Combined vaccine against Measles, Mumps, and Rubella.",
            dosage: "First dose at 15 months, second booster dose at 4-6 years.",
            warning: "It is a live-attenuated vaccine. It may cause a fever 7 to 10 days AFTER the injection, not immediately.",
            tips: ["Protects against congenital rubella syndrome in future pregnancies."]
        },
        ar: {
            title: "الثلاثي الفيروسي (MMR)",
            desc: "لقاح مشترك ضد الحصبة، النكاف، والحصبة الألمانية.",
            dosage: "الجرعة الأولى في عمر 15 شهراً، والمنشطة في 4-6 سنوات.",
            warning: "لقاح حي مضعف. قد يسبب حمى بعد 7-10 أيام من الحقنة، وليس فوراً.",
            tips: ["يمنع متلازمة الحصبة الألمانية الخلقية في حالات الحمل المستقبلية."]
        }
    },
    {
        id: "vac_varicella",
        img: "https://img.icons8.com/color/512/baby.png",
        ku: {
            title: "ئاوڵەی مریشک (Chickenpox - Varicella)",
            desc: "بۆ ڕێگریکردن لە پەتا و زیپکە و ئازاری ئاوڵەی مریشک کە زۆر بڵاوە لەناو منداڵان.",
            dosage: "٢ ژەم دەدرێت: یەکەم لە ١٢-١٥ مانگی، دووەم لە ٤-٦ ساڵی.",
            tips: ["ئەو کەسانەی پێکوتەکەیان وەرگرتووە زۆر بە دەگمەن تووشی نەخۆشییەکە دەبن، یان زۆر بە سووکی دەیگرن."]
        },
        en: {
            title: "Varicella (Chickenpox)",
            desc: "Prevents chickenpox, a common and itchy viral infection.",
            dosage: "2 doses: First at 12-15 months, second at 4-6 years.",
            tips: ["Vaccinated individuals rarely get the disease, or experience a very mild form."]
        },
        ar: {
            title: "الجدري المائي (Varicella)",
            desc: "يمنع جدري الماء، وهو عدوى فيروسية شائعة تسبب حكة شديدة.",
            dosage: "جرعتان: الأولى 12-15 شهراً، والثانية 4-6 سنوات.",
            tips: ["الأشخاص الملقحون نادراً ما يصابون بالمرض، أو يصابون بنسخة خفيفة جداً."]
        }
    },
    {
        id: "vac_hpv",
        img: "https://img.icons8.com/color/512/uterus.png",
        ku: {
            title: "شێرپەنجەی منداڵدان (HPV)",
            desc: "پێکوتەی Human Papillomavirus کە دەبێتە هۆی پاراستنی ئافرەتان لە شێرپەنجەی ملی منداڵدان و زیپکەی زاوزێ.",
            dosage: "بۆ کچان (و کوڕانیش) لە تەمەنی ١١-١٢ ساڵی پێشنیار دەکرێت. لە ٢ یان ٣ ژەم پێکدێت.",
            action: ["بەهێزترین پارێزەرە دژی شێرپەنجە کە بە ڤایرۆس دروست دەبێت."]
        },
        en: {
            title: "HPV Vaccine",
            desc: "Protects against Human Papillomavirus, the main cause of cervical cancer and genital warts.",
            dosage: "Recommended for pre-teens (11-12 years). Given in 2 or 3 doses.",
            action: ["The most effective vaccine against a virus that causes cancer."]
        },
        ar: {
            title: "فيروس الورم الحليمي البشري (HPV)",
            desc: "يحمي من الفيروس المسبب الرئيسي لسرطان عنق الرحم والثآليل التناسلية.",
            dosage: "يوصى به للأعمار 11-12 سنة. يعطى على جرعتين أو 3.",
            action: ["أقوى لقاح يمنع السرطان الناتج عن عدوى فيروسية."]
        }
    },
    {
        id: "vac_influenza",
        img: "https://cdn-icons-png.flaticon.com/512/2966/2966327.png",
        ku: {
            title: "ئەنفلۆنزای وەرزی (Flu Shot)",
            desc: "پێکوتەی ساڵانە دژی ڤایرۆسی ئەنفلۆنزا.",
            dosage: "ساڵانە جارێک دەدرێت لە سەرەتای وەرزی پایز (مانگی ٩ و ١٠).",
            tips: ["بۆ کەسانی سەروو ٦٥ ساڵ، ئافرەتی دووگیان، و ئەوانەی ڕەبۆ یان شەکرەیان هەیە زۆر پێویستە."],
            warning: "هەرگیز مرۆڤ تووشی ئەنفلۆنزا ناکات، بەڵکو پارێزگاری لێ دەکات."
        },
        en: {
            title: "Influenza (Flu Shot)",
            desc: "Annual vaccine against the seasonal flu.",
            dosage: "Given once a year, preferably in early autumn.",
            tips: ["Highly recommended for elderly, pregnant women, and asthmatics."],
            warning: "The vaccine does NOT give you the flu."
        },
        ar: {
            title: "الإنفلونزا الموسمية (Flu Shot)",
            desc: "لقاح سنوي ضد فيروس الإنفلونزا.",
            dosage: "يُعطى مرة واحدة سنوياً في بداية الخريف.",
            tips: ["ضروري جداً لكبار السن، الحوامل، ومرضى الربو والسكري."],
            warning: "هذا اللقاح لا يصيبك بالإنفلونزا أبداً."
        }
    },
    {
        id: "vac_meningococcal",
        img: "https://img.icons8.com/color/512/brain.png",
        ku: {
            title: "هەوکردنی پەردەی مێشک (Meningococcal)",
            desc: "دەپارێزێت لە بەکتریای نایسیریا کە هۆکاری سەرەکییە بۆ هەوکردنی کوشندەی پەردەی مێشک (سحایا).",
            dosage: "لە هەرزەکاران (١١-١٢ ساڵ) دەدرێت لەگەڵ ژەمێکی بەهێزکەر لە ١٦ ساڵی.",
            tips: ["لە کاتی چوون بۆ حەج و عەمرە ئەم پێکوتەیە مەرجە بۆ هەموو کەسێک."]
        },
        en: {
            title: "Meningococcal",
            desc: "Protects against Neisseria meningitidis, a deadly cause of bacterial meningitis.",
            dosage: "Given at 11-12 years with a booster at 16 years.",
            tips: ["Mandatory vaccine for travelers going to Hajj or Umrah."]
        },
        ar: {
            title: "المكورات السحائية (Meningococcal)",
            desc: "يحمي من بكتيريا النيسيرية المسببة لالتهاب السحايا القاتل.",
            dosage: "يُعطى للمراهقين (11-12 سنة) مع جرعة منشطة في 16 سنة.",
            tips: ["هذا اللقاح إلزامي لجميع المسافرين لأداء الحج أو العمرة."]
        }
    },
    {
        id: "vac_rabies",
        img: "https://img.icons8.com/color/512/dog.png",
        ku: {
            title: "پێکوتەی هاری (Rabies)",
            desc: "پێکوتەیەکی ژیان ڕزگارکەرە دوای ئەوەی سەگ، پشیلە، یان ئاژەڵێکی کێوی گاز لە مرۆڤ دەگرێت.",
            dosage: "کۆرسێکە لە ٤ بۆ ٥ دەرزی کە لە ماوەی مانگێکدا لە ماسولکە دەدرێت (ڕۆژەکانی ٠، ٣، ٧، ١٤، ٢٨).",
            warning: "نەخۆشی هاری هیچ چارەسەرێکی نییە ئەگەر نیشانەکانی دەرکەوت و ١٠٠٪ کوشندەیە، بۆیە دەبێت پێکوتەکە ڕاستەوخۆ دوای گازگرتنەکە وەربگیرێت."
        },
        en: {
            title: "Rabies Vaccine",
            desc: "Life-saving vaccine given after a bite from a dog, bat, or wild animal.",
            dosage: "A course of 4 to 5 IM injections given over a month (Days 0, 3, 7, 14, 28).",
            warning: "Rabies is 100% fatal once symptoms appear. The vaccine MUST be given immediately after the bite."
        },
        ar: {
            title: "لقاح داء الكلب (Rabies)",
            desc: "لقاح منقذ للحياة يُعطى بعد التعرض لعضة كلب أو قطة أو حيوان بري.",
            dosage: "دورة من 4 إلى 5 حقن عضلية خلال شهر (الأيام 0، 3، 7، 14، 28).",
            warning: "داء الكلب مميت بنسبة 100% بمجرد ظهور الأعراض، لذا يجب أخذ اللقاح فوراً بعد العضة."
        }
    },
    {
        id: "vac_tetanus",
        img: "https://img.icons8.com/color/512/bandage.png",
        ku: {
            title: "دەردەگۆڕ (Tetanus Toxoid - TT)",
            desc: "بۆ پاراستن لە بەکتریای کڵۆستریدیۆم تێتانی کە لەناو خۆڵ و تەنە ژەنگاوییەکاندایە و دەبێتە هۆی ڕەقبوونی ماسولکەکان.",
            dosage: "بۆ ئافرەتی دووگیان (مانگی ٤ و ٥) دەدرێت. بۆ کەسانی تریش لە کاتی برینداربوون بە ئاسنی ژەنگاوی.",
            tips: ["هەرگیز نابێت برینی پیس بدوورێتەوە (تەقەڵ بکرێت) بەبێ وەرگرتنی ئەم پێکوتەیە."]
        },
        en: {
            title: "Tetanus Toxoid (TT)",
            desc: "Protects against Clostridium tetani bacteria found in soil and rust, causing lockjaw/muscle stiffness.",
            dosage: "Given to pregnant women to protect newborns, and to adults after dirty/rusty wounds.",
            tips: ["Never suture a dirty wound without ensuring tetanus prophylaxis."]
        },
        ar: {
            title: "ذيفان الكزاز (Tetanus - TT)",
            desc: "يحمي من بكتيريا الكزاز الموجودة في التربة والصدأ والتي تسبب تشنج العضلات.",
            dosage: "يعطى للحوامل في الشهر 4 و 5، ولأي شخص يتعرض لجرح ملوث أو بحديدة صدئة.",
            tips: ["لا تقم بخياطة جرح ملوث أبداً دون أخذ هذا اللقاح."]
        }
    },
    {
        id: "vac_typhoid",
        img: "https://img.icons8.com/color/512/thermometer.png",
        ku: {
            title: "تیفۆئید - حومەی تیفۆ (Typhoid)",
            desc: "بۆ ڕێگریکردن لە بەکتریای سالمۆنێلا تیفی کە بەهۆی خواردن و ئاوی پیسەوە بڵاو دەبێتەوە.",
            dosage: "بە شێوەی حەپ (زارەکی) یان دەرزی دەدرێت بۆ ئەو کەسانەی گەشت دەکەن بۆ ناوچە هەژارەکان.",
            tips: ["بەرگرییەکە تەنها بۆ ٣ تا ٥ ساڵ دەمێنێتەوە."]
        },
        en: {
            title: "Typhoid",
            desc: "Prevents infection from Salmonella typhi bacteria spread through contaminated food/water.",
            dosage: "Available as oral capsules or injection. Often used for travel.",
            tips: ["Immunity lasts only 3 to 5 years."]
        },
        ar: {
            title: "حمى التيفوئيد (Typhoid)",
            desc: "يمنع الإصابة ببكتيريا السالمونيلا التيفية التي تنتشر عبر الطعام والماء الملوثين.",
            dosage: "متوفر كحبوب فموية أو إبرة، ويستخدم غالباً للمسافرين.",
            tips: ["المناعة تدوم من 3 إلى 5 سنوات فقط."]
        }
    },
    {
        id: "vac_cholera",
        img: "https://img.icons8.com/color/512/water.png",
        ku: {
            title: "کۆلێرا (Cholera)",
            desc: "نەخۆشییەکی بەکتریاییە دەبێتە هۆی سکچوونێکی زۆر توند و ئاوی و وشکبوونەوەی خێرا.",
            dosage: "پێکوتەیەکە دەکرێتە ناو ئاوەوە و دەخورێتەوە (Oral).",
            action: ["بەزۆری لە کاتی بوونی پەتای گەورە (Outbreak) لە شارەکاندا بەکاردێت."]
        },
        en: {
            title: "Cholera",
            desc: "Bacterial disease causing extremely severe, watery diarrhea and rapid dehydration.",
            dosage: "An oral vaccine dissolved in water.",
            action: ["Usually deployed during major outbreaks or for travelers to high-risk areas."]
        },
        ar: {
            title: "الكوليرا (Cholera)",
            desc: "مرض بكتيري يسبب إسهالاً مائياً شديداً وجفافاً سريعاً.",
            dosage: "لقاح فموي يذاب في الماء.",
            action: ["يستخدم عادة أثناء تفشي الأوبئة في المدن أو للمسافرين لمناطق الخطر."]
        }
    },
    {
        id: "vac_yellowfever",
        img: "https://cdn-icons-png.flaticon.com/512/822/822092.png",
        ku: {
            title: "تای زەرد (Yellow Fever)",
            desc: "نەخۆشییەکی ڤایرۆسی کوشندەیە کە بەهۆی پێوەدانی مێشوولەوە دەگوازرێتەوە (لە ئەفریقا و ئەمریکای باشوور).",
            dosage: "تەنها یەک ژەم دەدرێت و بەرگری بۆ تەواوی ژیان دروست دەکات.",
            warning: "وەرگرتنی ئەم پێکوتەیە مەرجی ڤیزایە بۆ گەشتکردن بۆ وڵاتانی ئەفریقا."
        },
        en: {
            title: "Yellow Fever",
            desc: "Deadly viral disease transmitted by mosquitoes (in Africa and South America).",
            dosage: "A single dose provides lifelong immunity.",
            warning: "Proof of vaccination is legally required to enter certain countries."
        },
        ar: {
            title: "الحمى الصفراء (Yellow Fever)",
            desc: "مرض فيروسي قاتل ينتقل عن طريق لدغ البعوض (في أفريقيا وأمريكا الجنوبية).",
            dosage: "جرعة واحدة توفر مناعة مدى الحياة.",
            warning: "شهادة أخذ هذا اللقاح شرط أساسي للسفر إلى دول أفريقية معينة."
        }
    },
    {
        id: "vac_covid19",
        img: "https://cdn-icons-png.flaticon.com/512/3209/3209867.png",
        ku: {
            title: "کۆرۆنا (COVID-19)",
            desc: "پێکوتەی دژی ڤایرۆسی سارس کۆڤید-٢ کە هۆکاری نەخۆشی کۆرۆنایە.",
            dosage: "بەپێی جۆرەکەی (پفایزەر، ئەسترازێنیکا، سینۆفارم) ٢ ژەم دەدرێت لەگەڵ ژەمی بەهێزکەر (Booster).",
            action: ["ڕێگری ناکات لە تووشبوون بەسەدا سەد، بەڵکو ڕێگری دەکات لە قورس بوونی نەخۆشییەکە و چوونە ژووری بوژانەوە (ICU)."]
        },
        en: {
            title: "COVID-19",
            desc: "Vaccine against the SARS-CoV-2 virus.",
            dosage: "Usually 2 initial doses followed by booster shots (e.g., Pfizer, Moderna, AstraZeneca).",
            action: ["Does not 100% prevent infection, but drastically reduces severe illness and ICU admission."]
        },
        ar: {
            title: "كورونا (COVID-19)",
            desc: "لقاح ضد فيروس سارس كوفيد-2 المسبب لمرض كورونا.",
            dosage: "جرعتان أساسيتان مع جرعات منشطة حسب نوع اللقاح.",
            action: ["لا يمنع الإصابة 100%، ولكنه يمنع تدهور الحالة الصحية ودخول العناية المركزة."]
        }
    },
    {
        id: "vac_shingles",
        img: "https://img.icons8.com/color/512/old-man.png",
        ku: {
            title: "ئاوڵەی پشتێنەیی (Shingles - Zoster)",
            desc: "ڤایرۆسی ئاوڵەی مریشک لەناو دەمارەکاندا دەخەوێت، و لە تەمەنی گەورەییدا هەڵدەستێتەوە و دەبێتە هۆی زیپکەی زۆر بە ئازار لەسەر پێست.",
            dosage: "بۆ کەسانی سەروو ٥٠ ساڵ پێشنیار دەکرێت (٢ ژەم).",
            warning: "ئازاری ئەم نەخۆشییە هێندە زۆرە کە تەنانەت دوای چاکبوونەوەی پێستەکەش مانگها دەمێنێتەوە."
        },
        en: {
            title: "Shingles (Zoster)",
            desc: "Reactivation of the chickenpox virus hiding in nerves, causing a severely painful skin rash.",
            dosage: "Recommended for adults over 50 years old (2 doses).",
            warning: "Nerve pain from Shingles (Postherpetic neuralgia) can last for months or years."
        },
        ar: {
            title: "الحزام الناري (Shingles)",
            desc: "إعادة تنشيط لفيروس جدري الماء النائم في الأعصاب، يسبب طفحاً جلدياً شديد الألم.",
            dosage: "يوصى به للبالغين فوق 50 سنة (جرعتان).",
            warning: "ألم الأعصاب الناتج عنه قد يستمر لأشهر أو سنوات حتى بعد شفاء الجلد."
        }
    }
];
