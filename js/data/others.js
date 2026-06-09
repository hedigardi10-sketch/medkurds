const vitaminsData = [
    { 
        id: 601, 
        ku: { 
            title: "ڤیتامین A (Retinol)", 
            desc: "پێویستە بۆ بینین و پێست و گەشە.", 
            benefit: "بۆ تەندروستی چاو و بینین لە شەودا، بەهێزکردنی کۆئەندامی بەرگری، و پاراستنی خانەکانی پێست.",
            sources: "گێزەر، سپێناخ، جەرگ، هێلکە، بیبەری سوور.",
            sideEffects: "بەکارهێنانی زۆر (Overdose) دەبێتە هۆی سەرئێشە، تێکچوونی بینین، و زیان گەیاندن بە جەرگ."
        }, 
        en: { 
            title: "Vitamin A", 
            desc: "Essential for vision and skin.", 
            benefit: "Eye health, immunity, and skin protection.",
            sources: "Carrots, spinach, liver, eggs, red peppers.",
            sideEffects: "Excessive use can cause headaches, blurred vision, and liver damage."
        }, 
        ar: { 
            title: "فيتامين A", 
            desc: "ضروري للبصر والجلد.", 
            benefit: "صحة العين، المناعة، وحماية الجلد.",
            sources: "جزر، سبانخ، كبد، بيض، فلفل أحمر.",
            sideEffects: "الاستخدام المفرط قد يسبب صداع، تشوش الرؤية، وتضرر الكبد."
        } 
    },
    { 
        id: 610, 
        ku: { 
            title: "ڤیتامین C (Ascorbic Acid)", 
            desc: "دژە ئۆکسانێکی بەهێز بۆ بەرگری.", 
            benefit: "چاککردنەوەی برین، دروستکردنی کۆلاجین، و پاراستنی جەستە لە هەوکردن.",
            sources: "پرتەقاڵ، لیمۆ، کێوی، بیبەری سەوز، شیلیک.",
            sideEffects: "بەکارهێنانی زۆر لە شێوەی حەب دەبێتە هۆی تێکچوونی گەدە و دروستبوونی بەردی گورچیلە."
        }, 
        en: { 
            title: "Vitamin C", 
            desc: "Strong antioxidant for immunity.", 
            benefit: "Wound healing, collagen production, and infection protection.",
            sources: "Oranges, lemons, kiwi, green peppers, strawberries.",
            sideEffects: "High doses can cause stomach upset and kidney stones."
        }, 
        ar: { 
            title: "فيتامين C", 
            desc: "مضاد أكسدة قوي للمناعة.", 
            benefit: "التئام الجروح، إنتاج الكولاجين، والحماية من الالتهابات.",
            sources: "برتقال، ليمون، كيوي، فلفل أخضر، فراولة.",
            sideEffects: "الجرعات العالية قد تسبب اضطراب المعدة وحصى الكلى."
        } 
    },
    { 
        id: 611, 
        ku: { 
            title: "ڤیتامین D (Calciferol)", 
            desc: "ڤیتامینی خۆر بۆ ئێسکەکان.", 
            benefit: "یارمەتی مژینی کالسیۆم دەدات، بۆ بەهێزی ئێسک و ددان و مێشک پێویستە.",
            sources: "خۆر، ماسی، زەیتی جگەری ماسی، هێلکە.",
            sideEffects: "زیادەڕۆیی لە خواردنی دەبێتە هۆی بەرزبوونەوەی کالسیۆم لە خوێندا و تێکچوونی گورچیلە."
        }, 
        en: { 
            title: "Vitamin D", 
            desc: "Sunshine vitamin for bones.", 
            benefit: "Helps calcium absorption, essential for bone, teeth, and brain health.",
            sources: "Sunlight, fish, cod liver oil, eggs.",
            sideEffects: "Overuse can lead to hypercalcemia and kidney issues."
        }, 
        ar: { 
            title: "فيتامين D", 
            desc: "فيتامين الشمس للعظام.", 
            benefit: "يساعد في امتصاص الكالسيوم، ضروري لصحة العظام والأسنان والدماغ.",
            sources: "أشعة الشمس، سمك، زيت كبد الحوت، بيض.",
            sideEffects: "الإفراط قد يؤدي إلى ارتفاع الكالسيوم في الدم ومشاكل في الكلى."
        } 
    },
    { 
        id: 609, 
        ku: { 
            title: "ڤیتامین B12", 
            desc: "بۆ دروستکردنی خوێن و مێشک.", 
            benefit: "پێویستە بۆ دروستکردنی DNA و خڕۆکە سوورەکان و پاراستنی دەمارەکان.",
            sources: "گۆشتی سوور، شیر، پەنیر، هێلکە، ماسی.",
            sideEffects: "بە گشتی بێ زیانە بەڵام لە هەندێک کەسدا دەبێتە هۆی تێکچوونی پێست یان سەرئێشە."
        }, 
        en: { 
            title: "Vitamin B12", 
            desc: "For blood and brain function.", 
            benefit: "Essential for DNA synthesis, RBCs, and nerve protection.",
            sources: "Red meat, milk, cheese, eggs, fish.",
            sideEffects: "Generally safe, but can cause skin issues or headache in some cases."
        }, 
        ar: { 
            title: "فيتامين B12", 
            desc: "للدماغ وتكوين الدم.", 
            benefit: "ضروري لتكوين DNA وكريات الدم الحمراء وحماية الأعصاب.",
            sources: "لحم أحمر، حليب، جبن، بيض، سمك.",
            sideEffects: "آمن عموماً، لكن قد يسبب مشاكل جلدية أو صداعاً لدى البعض."
        } 
    },
    { 
        id: 612, 
        ku: { 
            title: "ڤیتامین E (Tocopherol)", 
            desc: "بۆ پاراستنی خانەکان و پێست.", 
            benefit: "دژە ئۆکسانێکی بەهێزە، خانەکان لە پیربوون دەپارێزێت، بۆ تەندروستی قژ و پێست و بەهێزی بەرگری پێویستە.",
            sources: "بادەم، زەیتوون، ئەڤۆکادۆ، تۆوی گوڵەبەڕۆژە، سپێناخ.",
            sideEffects: "بەکارهێنانی زۆر دەبێتە هۆی تەنکبوونەوەی خوێن و زیادبوونی مەترسی خوێنبەربوون."
        }, 
        en: { 
            title: "Vitamin E", 
            desc: "Protects skin and cells.", 
            benefit: "Strong antioxidant, anti-aging, essential for hair and skin health.",
            sources: "Almonds, olives, avocado, sunflower seeds, spinach.",
            sideEffects: "High doses can thin the blood and increase bleeding risk."
        }, 
        ar: { 
            title: "فيتامين E", 
            desc: "لحماية الخلايا والجلد.", 
            benefit: "مضاد أكسدة قوي، يحمي الخلايا من الشيخوخة، ضروري لصحة الشعر والجلد.",
            sources: "لوز، زيتون، أفوكادو، بذور دوار الشمس، سبانخ.",
            sideEffects: "الجرعات العالية قد تسبب تميع الدم وزيادة خطر النزيف."
        } 
    },
    { 
        id: 613, 
        ku: { 
            title: "ڤیتامین K", 
            desc: "بۆ مەیینی خوێن و ئێسک.", 
            benefit: "ڕۆڵێکی سەرەکی دەگێڕێت لە مەیینی خوێن بۆ وەستاندنی خوێنبەربوون و پاراستنی چڕی ئێسک.",
            sources: "بڕۆکلی، کەلەرم، سپێناخ، سەوزە گەڵادارەکان، مریشک.",
            sideEffects: "کاریگەری پێچەوانەی هەیە لەگەڵ دەرمانی مەیینی خوێن (وەک وارفرین)."
        }, 
        en: { 
            title: "Vitamin K", 
            desc: "For blood clotting and bones.", 
            benefit: "Key role in blood clotting to stop bleeding and maintaining bone density.",
            sources: "Broccoli, cabbage, spinach, leafy greens, chicken.",
            sideEffects: "Can interfere with blood-thinning medications like Warfarin."
        }, 
        ar: { 
            title: "فيتامين K", 
            desc: "لتجلط الدم والعظام.", 
            benefit: "يلعب دوراً رئيسياً في تجلط الدم لوقف النزيف والحفاظ على كثافة العظام.",
            sources: "بروكلي، ملفوف، سبانخ، خضروات ورقية، دجاج.",
            sideEffects: "يتداخل مع الأدوية المميعة للدم مثل الوارفارين."
        } 
    },
    { 
        id: 614, 
        ku: { 
            title: "کالسیۆم (Calcium)", 
            desc: "بۆ بەهێزی ئێسک و ددان.", 
            benefit: "بناغەی ئێسک و ددانەکانە، هەروەها بۆ گرژبوونی ماسولکەکان و لێدانی دڵ پێویستە.",
            sources: "شیر، پەنیر، ماست، کونجی، بڕۆکلی.",
            sideEffects: "بەکارهێنانی زۆری تەواوکەرەکان دەبێتە هۆی بەردی گورچیلە و قەبزی."
        }, 
        en: { 
            title: "Calcium", 
            desc: "For bone and teeth strength.", 
            benefit: "Foundation of bones and teeth, essential for muscle contraction and heart rhythm.",
            sources: "Milk, cheese, yogurt, sesame, broccoli.",
            sideEffects: "Over-supplementation can lead to kidney stones and constipation."
        }, 
        ar: { 
            title: "الكالسيوم", 
            desc: "لقوة العظام والأسنان.", 
            benefit: "أساس العظام والأسنان، ضروري لتقلص العضلات ونبض القلب.",
            sources: "حليب، جبن، لبن، سمسم، بروكلي.",
            sideEffects: "المبالغة في المكملات قد تسبب حصى الكلى والإمساك."
        } 
    },
    { 
        id: 615, 
        ku: { 
            title: "ئاسن (Iron)", 
            desc: "دروستکەری خوێن و وزە.", 
            benefit: "بۆ دروستکردنی هیمۆگلۆبین پێویستە کە ئۆکسجین دەگوازێتەوە، ڕێگری لە کەمخوێنی و بێهێزی دەکات.",
            sources: "گۆشتی سوور، جەرگ، نیسک، سپێناخ، پاقلەمەنییەکان.",
            sideEffects: "بەکارهێنانی زۆر دەبێتە هۆی تێکچوونی گەدە، هێڵنج، و ڕەشی پاشەڕۆ."
        }, 
        en: { 
            title: "Iron", 
            desc: "For blood and energy.", 
            benefit: "Essential for making hemoglobin to carry oxygen, prevents anemia and fatigue.",
            sources: "Red meat, liver, lentils, spinach, legumes.",
            sideEffects: "Excessive intake causes stomach upset, nausea, and black stools."
        }, 
        ar: { 
            title: "الحديد", 
            desc: "لبناء الدم والطاقة.", 
            benefit: "ضروري لصنع الهيموجلوبين لنقل الأكسجين، يمنع فقر الدم والتعب.",
            sources: "لحم أحمر، كبد، عدس، سبانخ، بقوليات.",
            sideEffects: "الاستهلاك المفرط يسبب اضطراب المعدة، الغثيان، وبراز أسود."
        } 
    },
    { 
        id: 616, 
        ku: { 
            title: "مەگنیسیۆم (Magnesium)", 
            desc: "بۆ ماسولکە و دەمارەکان.", 
            benefit: "بۆ زیاتر لە ٣٠٠ کارلێکی جەستە پێویستە، یارمەتی پشوودانی ماسولکە دەدات و سترێس کەم دەکاتەوە.",
            sources: "گوێز، شکۆڵاتەی تاڵ، مۆز، تۆوی کولەکە، سپێناخ.",
            sideEffects: "بەکارهێنانی زۆر دەبێتە هۆی سکچوون و دابەزینی زەختی خوێن."
        }, 
        en: { 
            title: "Magnesium", 
            desc: "For muscles and nerves.", 
            benefit: "Required for over 300 reactions, helps muscle relaxation and reduces stress.",
            sources: "Walnuts, dark chocolate, bananas, pumpkin seeds, spinach.",
            sideEffects: "Excessive intake can cause diarrhea and low blood pressure."
        }, 
        ar: { 
            title: "المغنيسيوم", 
            desc: "للعضلات والأعصاب.", 
            benefit: "مطلوب لأكثر من 300 تفاعل حيوي، يساعد على استرخاء العضلات وتقليل التوتر.",
            sources: "جوز، شوكولاتة داكنة، موز، بذور قرع، سبانخ.",
            sideEffects: "الجرعات العالية قد تسبب الإسهال وانخفاض ضغط الدم."
        } 
    },
    { 
        id: 617, 
        ku: { 
            title: "زینک (Zinc)", 
            desc: "بۆ بەرگری و چاکبوونەوەی برین.", 
            benefit: "بەرگری جەستە دژی ڤایرۆس بەهێز دەکات، یارمەتی چاکبوونەوەی برین و تەندروستی پێست دەدات.",
            sources: "گۆشتی سوور، نۆک، گوێز، تۆوی کولەکە، پاقلەمەنییەکان.",
            sideEffects: "زیادەڕۆیی تێیدا دەبێتە هۆی تامکردنی کانزایی لە دەم و کەمبوونەوەی مژینی مس (Copper)."
        }, 
        en: { 
            title: "Zinc", 
            desc: "For immunity and wound healing.", 
            benefit: "Boosts immune system against viruses, helps wound healing and skin health.",
            sources: "Red meat, chickpeas, walnuts, pumpkin seeds, legumes.",
            sideEffects: "Overuse can cause a metallic taste and interfere with copper absorption."
        }, 
        ar: { 
            title: "الزنك", 
            desc: "للمناعة والنمو.", 
            benefit: "يقوي المناعة ضد الفيروسات، يساعد في التئام الجروح وصحة الجلد.",
            sources: "لحم أحمر، حمص، جوز، بذور قرع، بقوليات.",
            sideEffects: "الإفرط يسبب طعماً معدنياً في الفم ويقلل امتصاص النحاس."
        } 
    },
    { 
        id: 618, 
        ku: { 
            title: "پۆتاسیۆم (Potassium)", 
            desc: "بۆ کۆنترۆڵی پەستانی خوێن.", 
            benefit: "هاوسەنگی شلەمەنییەکان ڕادەگرێت، بۆ کاری دڵ و ماسولکە و دەمارەکان زۆر گرنگە.",
            sources: "مۆز، پەتاتە، تەماتە، ئەڤۆکادۆ، سێو.",
            sideEffects: "بەرزی و نزمی پۆتاسیۆم هەردووکیان مەترسیدارن بۆ لێدانی دڵ و دەبێت پشکنین بکرێت."
        }, 
        en: { 
            title: "Potassium", 
            desc: "For BP control.", 
            benefit: "Maintains fluid balance, crucial for heart, muscle, and nerve function.",
            sources: "Bananas, potatoes, tomatoes, avocado, apples.",
            sideEffects: "Both high and low potassium levels are dangerous for heart rhythm."
        }, 
        ar: { 
            title: "البوتاسيوم", 
            desc: "لضبط ضغط الدم.", 
            benefit: "يحافظ على توازن السوائل، حيوي لوظائف القلب والعضلات والأعصاب.",
            sources: "موز، بطاطس، طماطم، أفوكادو، تفاح.",
            sideEffects: "ارتفاع أو انخفاض البوتاسيوم كلاهما يشكل خطراً على نبض القلب."
        } 
    },
    { 
        id: 619, 
        ku: { 
            title: "ئۆمیگا ٣ (Omega 3)", 
            desc: "چەوری بەسوود بۆ مێشک و دڵ.", 
            benefit: "تەندروستی مێشک و بیرەوەری باش دەکات، هەوکردن کەم دەکاتەوە و دڵ لە نەخۆشی دەپارێزێت.",
            sources: "ماسی (سەلەمون)، گوێز، تۆوی کەتان، تۆوی چیا.",
            sideEffects: "لە بڕی زۆردا دەبێتە هۆی دڵەکزێ و ڕەنگە خوێن کەمێک تەنک بکاتەوە."
        }, 
        en: { 
            title: "Omega 3", 
            desc: "Healthy fats for brain and heart.", 
            benefit: "Improves brain health and memory, reduces inflammation and protects the heart.",
            sources: "Fish (salmon), walnuts, flaxseed, chia seeds.",
            sideEffects: "In high doses, it can cause heartburn and potentially thin the blood."
        }, 
        ar: { 
            title: "أوميغا 3", 
            desc: "دهون صحية للدماغ والقلب.", 
            benefit: "يحسن صحة الدماغ والذاكرة، يقلل الالتهابات ويحمي القلب.",
            sources: "سمك (سلمون)، جوز، بذور كتان، بذور شيا.",
            sideEffects: "الجرعات العالية قد تسبب حرقة المعدة وقد تزيد تميع الدم."
        } 
    },
    { 
        id: 620, 
        ku: { 
            title: "سۆدیۆم (Sodium)", 
            desc: "بۆ هاوسەنگی شلەمەنی و دەمار.", 
            benefit: "ڕۆڵێکی گرنگی هەیە لە ڕاگرتنی پەستانی خوێن، هاوسەنگی ئاو لە جەستەدا، و گواستنەوەی نامە دەمارییەکان.",
            sources: "خوێی چێشت، سەوزەوات، شیر، نان.",
            sideEffects: "بەکارهێنانی زۆر دەبێتە هۆی بەرزبوونەوەی پەستانی خوێن و زیادبوونی مەترسی جەڵتەی دڵ."
        }, 
        en: { 
            title: "Sodium", 
            desc: "For fluid balance and nerves.", 
            benefit: "Crucial for blood pressure regulation, water balance, and nerve signaling.",
            sources: "Table salt, vegetables, milk, bread.",
            sideEffects: "Excessive intake leads to high blood pressure and increased heart stroke risk."
        }, 
        ar: { 
            title: "الصوديوم", 
            desc: "لتوازن السوائل والأعصاب.", 
            benefit: "يلعب دوراً حيوياً في تنظيم ضغط الدم وتوازن السوائل ونقل الإشارات العصبية.",
            sources: "ملح الطعام، خضروات، حليب، خبز.",
            sideEffects: "الاستهلاك العالي يؤدي لارتفاع ضغط الدم وزيادة خطر السكتات القلبية."
        } 
    },
    { 
        id: 621, 
        ku: { 
            title: "یۆد (Iodine)", 
            desc: "بۆ هۆرمۆنەکانی غودە.", 
            benefit: "پێویستە بۆ غودەی دەرەقی بۆ بەرهەمهێنانی هۆرمۆنەکانی میتابۆلیزم و گەشەی مێشک.",
            sources: "خوێی یۆددار، ماسی، قەوزەی دەریایی، هێلکە، شیر.",
            sideEffects: "کەمی یۆد دەبێتە هۆی ئاوسانی غودە و زۆریشی دەبێتە هۆی تێکچوونی چالاکی غودە."
        }, 
        en: { 
            title: "Iodine", 
            desc: "For thyroid hormones.", 
            benefit: "Required by the thyroid to produce hormones for metabolism and brain development.",
            sources: "Iodized salt, fish, seaweed, eggs, milk.",
            sideEffects: "Deficiency causes goiter, while excess can also disrupt thyroid function."
        }, 
        ar: { 
            title: "اليود", 
            desc: "لهرمونات الغدة الدرقية.", 
            benefit: "ضروري للغدة الدرقية لإنتاج هرمونات الأيض وتطور الدماغ.",
            sources: "ملح ميودن، سمك، أعشاب بحرية، بيض، حليب.",
            sideEffects: "نقصه يسبب تضخم الغدة، وزيادته قد تعطل وظائفها أيضاً."
        } 
    },
    { 
        id: 622, 
        ku: { 
            title: "فۆسفۆڕ (Phosphorus)", 
            desc: "بۆ ئێسک و بەرهەمهێنانی وزە.", 
            benefit: "دووەم فراوانترین کانزایە لە جەستەدا، بۆ بەهێزی ئێسک و ددان و هەڵگرتنی وزە (ATP) پێویستە.",
            sources: "گۆشت، مریشک، ماسی، شیرەمەنی، دانەوێڵە.",
            sideEffects: "بەرزی ڕێژەکەی لە خوێندا دەبێتە هۆی کێشەی گورچیلە و کەمکردنەوەی کالسیۆم لە ئێسکدا."
        }, 
        en: { 
            title: "Phosphorus", 
            desc: "For bones and energy production.", 
            benefit: "Second most abundant mineral, essential for strong bones, teeth, and ATP storage.",
            sources: "Meat, poultry, fish, dairy, whole grains.",
            sideEffects: "High blood levels can cause kidney issues and pull calcium from bones."
        }, 
        ar: { 
            title: "الفوسفور", 
            desc: "للعظام وإنتاج الطاقة.", 
            benefit: "ثاني أكثر المعادن وفرة، ضروري لقوة العظام والأسنان وتخزين الطاقة.",
            sources: "لحم، دواجن، سمك، ألبان، حبوب.",
            sideEffects: "ارتفاع مستواه في الدم قد يسبب مشاكل الكلى ويسحب الكالسيوم من العظام."
        } 
    },
    { 
        id: 623, 
        ku: { 
            title: "سێلینیۆم (Selenium)", 
            desc: "دژە ئۆکسان و تەندروستی غودە.", 
            benefit: "خانەکان لە تێكچوون دەپارێزێت، بۆ کاری غودەی دەرەقی و بەهێزی بەرگری زۆر گرنگە.",
            sources: "گوێزی بەڕازیلی، ماسی، هێلکە، مریشک.",
            sideEffects: "بەکارهێنانی زۆر دەبێتە هۆی وەرینی قژ، تێکچوونی نینۆک، و هەناسەیەک کە بۆنی سیر دەدات."
        }, 
        en: { 
            title: "Selenium", 
            desc: "Antioxidant and thyroid health.", 
            benefit: "Protects cells from damage, crucial for thyroid function and immune strength.",
            sources: "Brazil nuts, fish, eggs, poultry.",
            sideEffects: "Toxicity causes hair loss, nail changes, and garlic-smelling breath."
        }, 
        ar: { 
            title: "السيلينيوم", 
            desc: "مضاد أكسدة وصحة الغدة.", 
            benefit: "يحمي الخلايا من التلف، حيوي لوظائف الغدة الدرقية وقوة المناعة.",
            sources: "جوز برازيلي، سمك، بيض، دواجن.",
            sideEffects: "السمية تسبب تساقط الشعر، تغيرات الأظافر، ورائحة ثوم في النفس."
        } 
    },
    { 
        id: 624, 
        ku: { 
            title: "کۆپەر - مس (Copper)", 
            desc: "بۆ بەرهەمهێنانی خوێن و دەمار.", 
            benefit: "یارمەتی مژینی ئاسن دەدات، بۆ دروستکردنی خڕۆکە سوورەکان و پاراستنی دەمارەکان پێویستە.",
            sources: "جەرگ، قارچک، بادەم، شکۆڵاتەی تاڵ، پاقلەمەنییەکان.",
            sideEffects: "بەکارهێنانی زۆر لە شێوەی تەواوکەر دەبێتە هۆی سەرئێشە، هێڵنج، و تێکچوونی جەرگ."
        }, 
        en: { 
            title: "Copper", 
            desc: "For blood and nerve production.", 
            benefit: "Helps iron absorption, essential for red blood cell formation and nerve protection.",
            sources: "Liver, mushrooms, almonds, dark chocolate, legumes.",
            sideEffects: "Excessive supplementation can cause headache, nausea, and liver damage."
        }, 
        ar: { 
            title: "النحاس", 
            desc: "لإنتاج الدم والأعصاب.", 
            benefit: "يساعد في امتصاص الحديد، ضروري لتكوين كريات الدم الحمراء وحماية الأعصاب.",
            sources: "كبد, فطر, لوز, شوكولاتة داكنة, بقوليات.",
            sideEffects: "المبالغة في المكملات تسبب الصداع، الغثيان، وتضرر الكبد."
        } 
    },
    { 
        id: 625, 
        ku: { 
            title: "کۆلاجین (Collagen)", 
            desc: "پڕۆتینی پێست و جومگەکان.", 
            benefit: "بەرپرسە لە توندی و گەنجی پێست، بەهێزکردنی جومگەکان و کڕکڕاگەکان.",
            sources: "شۆربای ئێسک، مریشک، ماسی، هێلکە، میوە ترشەکان.",
            sideEffects: "بە گشتی سەلامەتە بەڵام ڕەنگە لە هەندێک کەسدا هەستیاری یان تێچوونی گەدە دروست بکات."
        }, 
        en: { 
            title: "Collagen", 
            desc: "Protein for skin and joints.", 
            benefit: "Responsible for skin elasticity and youthfulness, strengthens joints and cartilage.",
            sources: "Bone broth, chicken, fish, eggs, citrus fruits.",
            sideEffects: "Generally safe, but can cause digestive upset or allergies in some."
        }, 
        ar: { 
            title: "الكولاجين", 
            desc: "بروتين الجلد والمفاصل.", 
            benefit: "مسؤول عن مرونة وشباب الجلد، يقوي المفاصل والغضاريف.",
            sources: "مرق العظام، دجاج، سمك، بيض، حمضيات.",
            sideEffects: "آمن عموماً، لكن قد يسبب اضطراب الهضم أو حساسية لدى البعض."
        } 
    }
];


const equipmentData = [
    { id: 701, img: "img/equipment/701.jpg", ku: { title: "Stethoscope (بیستۆک)", desc: "ئامێرێکی بنەڕەتییە بۆ گوێگرتن لە دەنگەکانی ناوەوەی جەستە (دڵ، سییەکان، ڕیخۆڵە).", use: ["بیستنی لێدانی دڵ", "پشکنینی هەناسەدان", "پشکنینی دەنگی گەدە"], steps: ["دڵنیابە لە پاکی گوێچکەکانی ئامێرەکە و بیانکە گوێت.", "سەری بیستۆکەکە (دیالفرام یان زەنگ) بخەرە سەر سنگی نەخۆشەکە.", "داوا لە نەخۆشەکە بکە هەناسەیەکی قووڵ بدات.", "بە وردی گوێ لە دەنگی سییەکان یان لێدانی دڵ بگرە و ئەنجامەکە شیبکەرەوە."] }, en: { title: "Stethoscope", desc: "Medical listening device.", use: ["Heart", "Breathing"] }, ar: { title: "سماعة طبيب", desc: "جهاز استماع طبي.", use: ["القلب", "التنفس"] } },
    { id: 702, img: "img/equipment/702.png", ku: { title: "BP Monitor (ئامێری زەخت)", desc: "ئامێرێکە بۆ پێوانەکردنی پەستانی خوێنی نەخۆش.", use: ["زانینی بەرزی و نزمی پەستانی خوێن", "چاودێریکردنی نەخۆشی دڵ"], steps: ["قۆڵی نەخۆشەکە بە ڕووتی ئامادە بکە.", "لەفافی ئامێرەکە (Cuff) لە دەوری قۆڵی بپێچە، نزیکەی ٢-٣ سم لە سەرووی ئەنیشک.", "ئامێرەکە دابگیرە بۆ دەستپێکردن.", "چاوەڕێ بکە تا هەواکە بەتاڵ دەبێتەوە و ئەنجامەکە تۆمار بکە."] }, en: { title: "Sphygmomanometer", desc: "BP machine.", use: ["Blood pressure"] }, ar: { title: "جهاز الضغط", desc: "مقياس الضغط.", use: ["ضغط الدم"] } },
    { id: 703, img: "img/equipment/703.jpg", ku: { title: "Glucometer (ئامێری شەکرە)", desc: "ئامێرێکی بچووکە بۆ زانینی ڕێژەی شەکری ناو خوێن بە خێرایی.", use: ["پشکنینی شەکرە", "چاودێریکردنی نەخۆشانی شەکرە"], steps: ["دەستی نەخۆشەکە بە کحول پاکبکەرەوە و با وشک ببێتەوە.", "دەرزییەکە (Lancet) بەکاربهێنە بۆ کونکردنی سەری پەنجە.", "دڵۆپێک خوێن بخەرە سەر شریتی ئامێرەکە (Test strip).", "دوای چەند چرکەیەک ئەنجامەکە لەسەر شاشەکە دەخوێنرێتەوە."] }, en: { title: "Glucometer", desc: "Sugar checker.", use: ["Blood sugar test"] }, ar: { title: "جهاز السكري", desc: "مقياس السكر.", use: ["فحص السكر"] } },
    { id: 704, img: "img/equipment/704.png", ku: { title: "Pulse Oximeter (ئۆکسجین پێو)", desc: "ئامێرێکە دەخرێتە پەنجە بۆ پێوانەکردنی ڕێژەی ئۆکسجینی خوێن و لێدانی دڵ.", use: ["پێوانەکردنی ئۆکسجین (SpO2)", "زانینی خێرایی لێدانی دڵ"], steps: ["پەنجەی نەخۆشەکە پاک بکەرەوە و دڵنیابە نینۆکی بۆیە نەکراوە.", "ئامێرەکە بکەرەوە و بیخە سەر پەنجەی نەخۆشەکە.", "چاوەڕێی چەند چرکەیەک بکە تا ژمارەکان جێگیر دەبن.", "ڕێژەی ئۆکسجین و لێدانی دڵەکە تۆمار بکە."] }, en: { title: "Pulse Oximeter", desc: "Finger oxygen device.", use: ["Oxygen level", "Heart rate"] }, ar: { title: "جهاز الأكسجين", desc: "مقياس أكسجين الإصبع.", use: ["مستوى الأكسجين", "نبض"] } },
    { id: 705, img: "img/equipment/705.jpg", ku: { title: "Nebulizer (ئامێری تەبخیری)", desc: "دەرمان دەگۆڕێت بۆ هەڵم بۆ ئەوەی بە ئاسانی هەڵبمژرێت بۆ ناو سییەکان.", use: ["چارەسەری ڕەبۆ (Asthma)", "کردنەوەی بۆرییەکانی هەناسە"], steps: ["دەرمانە دیاریکراوەکە بکەرە ناو پەرداخۆکەی ئامێرەکە.", "ماسکەکە بخەرە سەر دەم و لووتی نەخۆشەکە.", "ئامێرەکە دابگیرە تا هەڵمەکە دروست دەبێت.", "داوا لە نەخۆشەکە بکە بە قووڵی هەناسە بدات تا دەرمانەکە تەواو دەبێت."] }, en: { title: "Nebulizer", desc: "Vapor machine.", use: ["Asthma", "Breathing"] }, ar: { title: "جهاز تبخير", desc: "جهاز الرذاذ.", use: ["الربو", "ضيق التنفس"] } },
    { id: 706, img: "img/equipment/706.jpg", ku: { title: "ECG (هێڵکاری دڵ)", desc: "ئامێرێکە بۆ تۆمارکردنی چالاکیی کارەبایی دڵ.", use: ["پشکنینی دڵ", "دۆزینەوەی جەڵتەی دڵ"], steps: ["نەخۆشەکە با پاڵکەوێت و سینگی ڕووت بکاتەوە.", "وایەرەکانی ئامێرەکە بە تەواوی لەسەر سینگ و قاچ و دەستی جێگیر بکە.", "ئامێرەکە پێبکە و دڵنیابە نەخۆشەکە ناگۆڕێت و قسە ناکات.", "هێڵکارییەکە چاپ بکە و پیشانی پزیشکی بدە."] }, en: { title: "ECG Machine", desc: "Heart activity recorder.", use: ["Heart check"] }, ar: { title: "تخطيط القلب", desc: "مسجل نشاط القلب.", use: ["فحص القلب"] } },
    { id: 707, img: "img/equipment/707.png", ku: { title: "Thermometer (گەرمی پێو)", desc: "ئامێرێکە بۆ پێوانەکردنی پلەی گەرمی جەستە.", use: ["پێوانەکردنی تا", "چاودێریکردنی هەوکردن"], steps: ["دڵنیابە لە خاوێنی ئامێرەکە و سفری بکەرەوە.", "بیخەرە ژێر باڵ، ژێر زمان، یان ناو گوێی نەخۆشەکە.", "چاوەڕێ بکە تا ئامێرەکە دەنگ دەدات.", "ئەنجامەکە بخوێنەوە و تۆماری بکە."] }, en: { title: "Thermometer", desc: "Temp measurer.", use: ["Fever check"] }, ar: { title: "ميزان حرارة", desc: "مقياس حرارة.", use: ["فحص الحمى"] } },
    { id: 708, img: "img/equipment/708.jpg", ku: { title: "Wheelchair (عەرەبانەی نەخۆش)", desc: "بۆ گواستنەوەی ئەو نەخۆشانە بەکاردێت کە ناتوانن بڕۆن.", use: ["گواستنەوەی نەخۆش"], steps: ["عەرەبانەکە بێنە نزیک نەخۆشەکە و برێکەکانی بگرە.", "یارمەتی نەخۆشەکە بدە دابنیشێت بە سەلامەتی.", "پێیەکانی بخەرە سەر شوێنی تایبەت بە قاچ.", "برێکەکان بەرە زۆ بە هێواشی نەخۆشەکە بگوازەوە."] }, en: { title: "Wheelchair", desc: "Mobility chair.", use: ["Patient transport"] }, ar: { title: "كرسي متحرك", desc: "كرسي تنقل.", use: ["نقل المريض"] } },
    { id: 709, img: "img/equipment/709.jpg", ku: { title: "Suction (ئامێری هەڵمژین)", desc: "بۆ هەڵمژین و پاککردنەوەی بەڵغەم و دەردراوەکانی ناو قورگ یان برین بەکاردێت.", use: ["مژینی بەڵغەم", "لابردنی خوێن لە نەشتەرگەری"], steps: ["ئامێرەکە پێبکە و پەستانەکەی ڕێکبخە.", "سۆندە پاکەکە بکەرە ناو دەم یان قورگی نەخۆشەکە.", "بە هێواشی دەردراوەکان هەڵبمژە بۆ ماوەیەکی کورت (١٠-١٥ چرکە).", "سۆندەکە دەربهێنە و فڕێی بدە یان خاوێنی بکەرەوە."] }, en: { title: "Suction", desc: "Vacuum device.", use: ["Fluid suction"] }, ar: { title: "جهاز شفط", desc: "جهاز سحب.", use: ["شفط السوائل"] } },
    { id: 710, img: "img/equipment/710.jpg", ku: { title: "Ventilator (هەناسەی دەستکرد)", desc: "ئامێرێکی پێشکەوتووە بۆ یارمەتیدانی یان جێگرتنەوەی هەناسەدانی نەخۆش.", use: ["نەخۆشانی چاودێری چڕ (ICU)", "بێهۆشکردنی گشتی"], steps: ["بۆرییەکە (Endotracheal tube) بە سەرکەوتوویی دەخرێتە ناو قورگی نەخۆش.", "ئامێرەکە بە بۆرییەکەوە دەبەسترێتەوە.", "ڕێژەی ئۆکسجین و پەستانەکە لەلایەن پزیشکەوە ڕێکدەخرێت.", "بەردەوام چاودێری نیشانە زیندەگییەکانی نەخۆشەکە دەکرێت."] }, en: { title: "Ventilator", desc: "Breathing support.", use: ["ICU"] }, ar: { title: "جهاز تنفس", desc: "دعم تنفس صناعي.", use: ["العناية المركزة"] } },
    { id: 711, img: "img/equipment/711.jpg", ku: { title: "Defibrillator (شۆکی کارەبایی)", desc: "لێدانی کارەبایی دەدات بە دڵ بۆ گەڕاندنەوەی لێدانی ئاسایی لە کاتی وەستانی دڵ.", use: ["بوژاندنەوەی دڵ (CPR)", "وەستانی کتوپڕی دڵ"], steps: ["ئامێرەکە پێبکە و پادەکان بخەرە سەر سینگی نەخۆشەکە.", "ئامێرەکە شیکاری لێدانی دڵەکە دەکات.", "ئەگەر پێویست بوو، هەموان لە نەخۆشەکە دووربخەرەوە.", "دوگمەی شۆکەکە دابگرە بۆ پێدانی تەزووەکە."] }, en: { title: "Defibrillator", desc: "Heart shock device.", use: ["Cardiac arrest"] }, ar: { title: "جهاز صدمات", desc: "صاعق القلب.", use: ["توقف القلب"] } },
    { id: 712, img: "img/equipment/712.png", ku: { title: "Syringe Pump (مضخەی دەرمان)", desc: "ئامێرێکە بۆ پێدانی دەرمان بە شێوەیەکی زۆر ورد و هێواش لە ڕێگەی دەمارەوە.", use: ["پێدانی دەرمانی مەترسیدار", "چاودێری چڕ"], steps: ["سرنجی دەرمانەکە ئامادە بکە و بیخەرە ناو ئامێرەکە.", "خێرایی پێدانی دەرمانەکە ڕێکبخە (بۆ نموونە 5ml/hour).", "سۆندەی سرنجەکە ببەستە بە کانیۆلای نەخۆشەکەوە.", "ئامێرەکە پێبکە و دڵنیابە دەرمانەکە بە دروستی دەڕوات."] }, en: { title: "Syringe Pump", desc: "Slow drug injector.", use: ["Precise dosing"] }, ar: { title: "مضخة حقن", desc: "مضخة دواء.", use: ["جرعات دقيقة"] } },
    { id: 713, img: "img/equipment/713.jpg", ku: { title: "IV Stand (ستاندی مەغەزی)", desc: "ستاندێکی ئاسنینە بۆ هەڵواسینی کیسەی مەغەزی و دەرمان.", use: ["هەڵواسینی شلەمەنی", "خوێن تێکردن"], steps: ["ستاندەکە بهێنە نزیک قەرەوێڵەی نەخۆشەکە.", "کیسەی مەغەزییەکە بە قولاپی ستاندەکەوە هەڵواسە.", "بەرزییەکەی ڕێکبخە تا شلەکە بە ئاسانی بڕواتە ناو دەمارەکە.", "دڵنیابە لەوەی ستاندەکە جێگیرە و ناکەوێت."] }, en: { title: "IV Stand", desc: "Fluid hanger.", use: ["Hanging IV fluids"] }, ar: { title: "حامل محاليل", desc: "حامل سوائل.", use: ["تعليق المحاليل"] } },
    { id: 714, img: "img/equipment/714.jpg", ku: { title: "Oxygen Cylinder (بتڵی ئۆکسجین)", desc: "قەپیلکەیەکی پڕ لە ئۆکسجین بۆ ئەو نەخۆشانەی کێشەی هەناسەیان هەیە.", use: ["پێدانی ئۆکسجین", "گواستنەوەی نەخۆش"], steps: ["سەری بتڵەکە بکەرەوە بە بەکارهێنانی کلیلێکی تایبەت.", "ڕێژەی لێشاوی ئۆکسجینەکە (Flow rate) ڕێکبخە بەپێی ڕێنمایی پزیشک.", "ماسک یان بۆرییەکە بخەرە سەر لووتی نەخۆشەکە.", "هەمیشە چاودێری ڕێژەی ئۆکسجینی ناو بتڵەکە بکە."] }, en: { title: "Oxygen Cylinder", desc: "Oxygen tank.", use: ["Breathing support"] }, ar: { title: "أسطوانة أكسجين", desc: "خزان أكسجين.", use: ["دعم التنفس"] } },
    { id: 715, img: "img/equipment/715.jpg", ku: { title: "Otoscope (پشکنەری گوێ)", desc: "ئامێرێکە گلۆپ و عەدەسەیەکی گەورەکردنی تێدایە بۆ بینینی ناوەوی گوێ.", use: ["پشکنینی پەردەی گوێ", "دۆزینەوەی هەوکردن"], steps: ["سەرێکی خاوێن (Speculum) بخەرە سەر ئامێرەکە.", "ئامێرەکە پێبکە و گوێچکەی نەخۆشەکە کەمێک ڕابکێشە بۆ سەرەوە و دواوە.", "بە وریاییەوە ئامێرەکە بخەرە ناو کونی گوێیەکە.", "سەیری پەردەی گوێ بکە و ئەنجامەکە دیاری بکە."] }, en: { title: "Otoscope", desc: "Ear examiner.", use: ["Ear check"] }, ar: { title: "منظار أذن", desc: "فاحص الأذن.", use: ["فحص الأذن"] } },
    { id: 716, img: "img/equipment/716.png", ku: { title: "Ophthalmoscope (پشکنەری چاو)", desc: "بۆ سەیرکردنی بەشی دواوەی ناوەوەی چاو (تۆڕی چاو) بەکاردێت.", use: ["پشکنینی چاو", "بینینی دەمارەکانی چاو"], steps: ["ژوورەکە کەمێک تاریک بکە بۆ ئەوەی بیلبیلەی چاو گەورە بێت.", "ئامێرەکە پێبکە و نزیک بپەرەوە لە چاوی نەخۆشەکە.", "سەرنج بدەرە ناو بیلبیلەی چاوەکە بۆ بینینی تۆڕی چاو و دەمارەکان.", "هەمان کار بۆ چاوەکەی تریش دووبارە بکەرەوە."] }, en: { title: "Ophthalmoscope", desc: "Eye examiner.", use: ["Eye check"] }, ar: { title: "منظار عين", desc: "فاحص العين.", use: ["فحص شبكية العين"] } },
    { id: 717, img: "img/equipment/717.jpg", ku: { title: "Tuning Fork (چەتاڵی دەنگ)", desc: "ئامرازێکی کانزاییە کە لەریدنەوە دروست دەکات کاتێک لێی دەدەیت.", use: ["پشکنینی بیستن", "پشکنینی هەستی دەمار"], steps: ["لێدانێک لە چەتاڵەکە بدە بۆ ئەوەی دەنگ دروست بکات.", "چەتاڵەکە ببرە نزیک گوێی نەخۆشەکە یان بیخەرە سەر ئێسکی سەری.", "لە نەخۆشەکە بپرسە ئایا هەست بە دەنگەکە یان لەرزینەکە دەکات.", "ئەنجامەکە بەراورد بکە لە نێوان هەردوو لایەکی جەستەدا."] }, en: { title: "Tuning Fork", desc: "Sound fork.", use: ["Hearing test"] }, ar: { title: "رنانة", desc: "شوكة رنانة.", use: ["فحص السمع"] } },
    { id: 718, img: "img/equipment/718.jpg", ku: { title: "Reflex Hammer (چەکوشی دەمار)", desc: "چەکوشێکی بچووکە سەری لاستیکە بۆ پشکنینی پەرچەکرداری دەمارەکان.", use: ["پشکنینی پەرچەکردار (Reflexes)"], steps: ["داوا لە نەخۆشەکە بکە ئارام بێتەوە و ماسولکەکانی خاو بکاتەوە.", "بە بەکارهێنانی چەکوشەکە، لێدانێکی سووک بدە لە ژێی ماسولکەی دیاریکراو (وەک ئەژنۆ).", "سەرنجی جووڵەی ماسولکەکە بدە.", "دڵنیابە لەوەی پەرچەکردارەکە لە هەردوو لایەکی جەستەدا وەک یەکە."] }, en: { title: "Reflex Hammer", desc: "Nerve hammer.", use: ["Reflex test"] }, ar: { title: "مطرقة منعكسات", desc: "مطرقة عصبية.", use: ["فحص المنعكسات"] } },
    { id: 719, img: "img/equipment/719.jpg", ku: { title: "Crutches (دارشەق)", desc: "ئامرازێکە بۆ یارمەتیدانی ئەو کەسانەی ناتوانن کێشی خۆیان بخەنە سەر قاچێکیان.", use: ["یارمەتیدانی ڕۆیشتن", "پاش شکان و نەشتەرگەری"], steps: ["بەرزی دارشەقەکە ڕێکبخە بەپێی باڵای نەخۆشەکە.", "دڵنیابە کە بەشی سەرەوەی دارشەقەکە نزیکەی ٢ سم لە ژێر باڵی نەخۆشەکەدایە (نەک چەسپاو بە باڵەوە).", "دەستەکان بخەرە سەر شوێنی گرتنەکە بە گۆشەیەکی گونجاو.", "دارشەقەکان بدە پێش خۆت, پاشان قاچە ساغەکە ببە بۆ پێشەوە."] }, en: { title: "Crutches", desc: "Walking aid.", use: ["Walking support"] }, ar: { title: "عكازات", desc: "عكاز للمشي.", use: ["مساعدة المشي"] } },
    { id: 720, img: "img/equipment/720.jpg", ku: { title: "Patient Bed (قەرەوێڵەی پزیشکی)", desc: "قەرەوێڵەیەکی تایبەتە کە بەشەکانی بەرز و نزم دەکرێنەوە بۆ ئاسوودەیی نەخۆش.", use: ["خەواندنی نەخۆش", "چاودێریکردن"], steps: ["بەرزی قەرەوێڵەکە ڕێکبخە بۆ ئەوەی بۆ پەرستارەکەش ئاسان بێت.", "دەسکی تەنیشتەکان (Side rails) بەرز بکەرەوە بۆ پاراستنی نەخۆشەکە لە کەوتن.", "بەشی سەرەوە یان خوارەوەی قەرەوێڵەکە بە پێی پێویستی نەخۆشەکە بەرز بکەرەوە.", "دڵنیابە کە تایەکانی قەرەوێڵەکە قفڵ کراون."] }, en: { title: "Patient Bed", desc: "Medical bed.", use: ["Patient resting"] }, ar: { title: "سرير طبي", desc: "سرير المريض.", use: ["نوم المريض"] } },
    { id: 721, img: "img/equipment/721.jpg", ku: { title: "Tourniquet (تۆرنیکێت)", desc: "قایشێکی لاستیکییە لە دەوری قۆڵ دەبەسترێت بۆ دەرخستنی دەمارەکان.", use: ["دەرخستنی دەمار بۆ دەرزی لێدان", "وەستاندنی خوێنبەربوونی سەخت"], steps: ["تۆرنیکێتەکە لە دەوری قۆڵی نەخۆشەکە بپێچە.", "بە توندی بیبەستە بەڵام نەک زۆر توند کە ئازاری هەبێت.", "داوا لە نەخۆشەکە بکە دەستی بنوقێنێت تا دەمارەکە دەردەکەوێت.", "دوای کارەکە (یان دوای چەند خولەکێک) خێرا تۆرنیکێتەکە بکەرەوە."] }, en: { title: "Tourniquet", desc: "Vein binder.", use: ["Stop bleeding"] }, ar: { title: "تورنيكيت", desc: "رابط الأوردة.", use: ["إيقاف النزيف"] } },
    { id: 722, img: "img/equipment/722.jpg", ku: { title: "Gauze (گۆز - لۆکەی پزیشکی)", desc: "پارچە قوماشێکی تەنکی سترایڵە (پاکە) بۆ داپۆشینی برین یان وەستاندنی خوێن.", use: ["پاککردنەوەی برین", "داپۆشینی برین"], steps: ["دەستکێشی پاک لەبەر بکە.", "گۆزەکە بخەرە سەر گیراوەی پاککەرەوە (وەک پۆڤیدۆن یان ئەلکحول).", "برینەکەی پێ پاک بکەرەوە بە شێوەیەکی نەرم.", "گۆزێکی نوێی وشک بخەرە سەر برینەکە و بە پلاستەر جێگیری بکە."] }, en: { title: "Gauze", desc: "Medical cotton.", use: ["Wound cleaning"] }, ar: { title: "شاش معقم", desc: "قطن طبي.", use: ["تنظيف الجروح"] } },
    { id: 723, img: "img/equipment/723.jpg", ku: { title: "Scalpel (چەقۆی نەشتەرگەری)", desc: "چەقۆیەکی زۆر تیژە کە بۆ بڕینی شانەکانی جەستە لە کاتی نەشتەرگەریدا بەکاردێت.", use: ["بڕینی پێست", "لابردنی گرێ", "کردنەوەی جەستە لە نەشتەرگەری"], steps: ["دەستکێشی نەشتەرگەری لەبەر بکە و شوێنی بڕینەکە بەباشی پاکبکەرەوە.", "قەراغی چەقۆکە بە وریاییەوە بخەرە سەر شوێنی مەبەست.", "پەستانێکی کەم بخەرە سەر چەقۆکە بۆ دروستکردنی بڕینێکی ڕێک.", "دوای تەواوبوون، ڕاستەوخۆ چەقۆکە فڕێبدە ناو سندوقی دەرزی و تیغ (Sharps Box)."] }, en: { title: "Scalpel", desc: "Surgical knife.", use: ["Surgery"] }, ar: { title: "مشرط", desc: "مشرط جراحي.", use: ["جراحة"] } },
    { id: 724, img: "img/equipment/724.png", ku: { title: "Scissors & Forceps (مقەست و مەڵقەت)", desc: "ئامرازی زۆر گرنگن بۆ گرتنی شانەکان، بڕینی دەزووی نەشتەرگەری، و بڕینی شانەی مردوو.", use: ["بڕینی باندج و دەزوو", "گرتنی شانە بۆ دوورینەوە", "ڕاگرتنی خوێنبەربوون (وەک کلامپ)"], steps: ["ئامێرەکە بە تەواوی سترایڵ (پاک) بکەرەوە پێش بەکارهێنان.", "ئەگەر مقەستە، بە وریاییەوە تەنها ئەو بەشە ببڕە کە دیاریکراوە بێ ئەوەی زیان بە پێستی ساغ بگەیەنیت.", "ئەگەر مەڵقەتە، بە نەرمی شانەکە بگرە بۆ ئەوەی ڕێگربیت لە خزین لە کاتی دوورینەوە.", "دوای بەکارهێنان بە گیراوەی تایبەت بیقەسێنە و بینێرە بۆ بەشی ئۆتۆکلەیڤ (Autoclave) بۆ پاککردنەوەی تەواو."] }, en: { title: "Forceps", desc: "Medical tweezers.", use: ["Holding tissue"] }, ar: { title: "ملقط جراحي", desc: "ملقط طبي.", use: ["إمساك الأنسجة"] } },
    { id: 725, img: "img/equipment/725.jpg", ku: { title: "Cannula (کانیۆلا)", desc: "بۆرییەکی پلاستیکی بچووکە دەخرێتە ناو دەمار بۆ پێدانی شلەمەنی یان دەرمان یان کێشانی خوێن.", use: ["پێدانی مەغەزی", "پێدانی دەرمانی ناو دەمار", "وەرگرتنی خوێن"], steps: ["دەست شوشتن و لەبەرکردنی دەستکێش.", "دۆزینەوەی دەمارێکی گونجاو و بەستنی تۆرنیکێت.", "پاککردنەوەی شوێنەکە بە کحول بە شێوەی بازنەیی.", "داخڵکردنی نیدڵەکە بە گۆشەی ١٥-٣٠ پلە تا خوێن دەردەکەوێت.", "کێشانەوەی نیدڵەکە بۆ دواوە و پاڵنانی پلاستیکەکە بۆ پێشەوە.", "کردنەوەی تۆرنیکێتەکە و جێگیرکردنی کانیۆلا بە پلاستەر."] }, en: { title: "IV Cannula", desc: "Vein tube.", use: ["IV fluids"] }, ar: { title: "كانيولا", desc: "إبرة وريدية.", use: ["إعطاء السوائل"] } }
];

const skincareData = [
    { 
        id: 1201, 
        ku: { 
            title: "دژە خۆر (Sunscreen)", 
            desc: "گرنگترین هەنگاو بۆ پاراستنی پێست لە تیشکی سەروو بنەوشەیی (UV).", 
            benefit: "پێست لە سووتان، دروستبوونی پەڵە، پیربوونی پێشوەختە، و مەترسی شێرپەنجەی پێست دەپارێزێت.",
            warning: "ئەو کەسانەی پێستیان زۆر هەستیارە یان زیپکەیان هەیە، باشترە جۆری (Mineral) بەکاربهێنن نەک (Chemical).",
            tips: ["هەموو ڕۆژێک بەکاریبهێنە تەنانەت ئەگەر هەوریش بێت.", "٢٠ خولەک پێش چوونە دەرەوە لێی بدە.", "هەموو ٢ کاتژمێرێک دووبارەی بکەرەوە ئەگەر لەژێر خۆردا بوویت."] 
        }, 
        en: { 
            title: "Sunscreen", 
            desc: "The most important step to protect skin from UV rays.", 
            benefit: "Prevents sunburn, dark spots, premature aging, and skin cancer risk.",
            warning: "People with very sensitive or acne-prone skin should use Mineral sunscreens instead of Chemical ones.",
            tips: ["Use daily even on cloudy days.", "Apply 20 minutes before going out.", "Reapply every 2 hours under direct sun."] 
        }, 
        ar: { 
            title: "واقي الشمس", 
            desc: "أهم خطوة لحماية البشرة من أشعة الشمس فوق البنفسجية.", 
            benefit: "يحمي من الحروق، التصبغات، الشيخوخة المبكرة، وخطر سرطان الجلد.",
            warning: "أصحاب البشرة الحساسة جداً أو المعرضة للحبوب يفضل استخدام الواقي الفيزيائي (Mineral).",
            tips: ["استخدمه يومياً حتى في الأيام الغائمة.", "ضعه قبل الخروج بـ 20 دقيقة.", "جدده كل ساعتين إذا كنت تحت الشمس."] 
        } 
    },
    { 
        id: 1202, 
        ku: { 
            title: "شێدارکەرەوە (Moisturizer)", 
            desc: "پاراستنی ئاستی شێی سروشتی پێست و ڕێگری لە وشکبوونەوە.", 
            benefit: "پێست بە نەرمی دەهێڵێتەوە، ڕێگری لە درزبردن و توێژبوونی پێست دەکات و بەربەستی پارێزەری پێست بەهێز دەکات.",
            warning: "بەکارهێنانی شێدارکەرەوەی زۆر چەور بۆ پێستی چەور دەبێتە هۆی گیرانی کونی پێست و دروستبوونی زیپکە.",
            tips: ["دوای هەموو شوشتنێکی دەموچاو بەکاریبهێنە کاتێک پێستەکە هێشتا کەمێک تەڕە.", "جۆرەکەی بەپێی جۆری پێستت هەڵبژێرە (کرێم بۆ وشک، جێڵ بۆ چەور)."] 
        }, 
        en: { 
            title: "Moisturizer", 
            desc: "Maintains skin moisture levels and prevents dryness.", 
            benefit: "Keeps skin soft, prevents cracking/flaking, and strengthens the skin barrier.",
            warning: "Using heavy oil-based moisturizers on oily skin can clog pores and cause acne.",
            tips: ["Apply after washing while skin is still slightly damp.", "Choose the right texture: Cream for dry skin, Gel for oily skin."] 
        }, 
        ar: { 
            title: "مرطب", 
            desc: "يحافظ على مستويات الرطوبة الطبيعية ويمنع الجفاف.", 
            benefit: "يحافظ على نعومة البشرة، يمنع التشقق والقشور، ويقوي حاجز البشرة.",
            warning: "استخدام المرطبات الثقيلة جداً للبشرة الدهنية قد يسد المسام ويسبب الحبوب.",
            tips: ["استخدمه بعد غسل الوجه مباشرة والبشرة لا تزال رطبة.", "اختر القوام المناسب: كريم للبشرة الجافة، وجل للبشرة الدهنية."] 
        } 
    },
    { 
        id: 1203, 
        ku: { 
            title: "پاککەرەوە (Cleanser)", 
            desc: "لابردنی پیسی، ئارەق، و پاشماوەی مەیکئەپ لەسەر پێست.", 
            benefit: "پێست خاوێن دەکاتەوە و ئامادەی دەکات بۆ هەڵمژینی بەرهەمەکانی تر، ڕێگری لە هەوکردن و زیپکە دەکات.",
            warning: "هەرگیز سابوونی ئاسایی بۆ دەموچاو بەکارمەهێنە چونکە هاوسەنگی (pH) تێکدەدات و پێست زۆر وشک دەکاتەوە.",
            tips: ["بەیانیان و شەوان پێش خەوتن بەکاریبهێنە.", "بە ئاوی شلەتێن دەموچاو بشۆ، نە زۆر سارد و نە زۆر گەرم."] 
        }, 
        en: { 
            title: "Cleanser", 
            desc: "Removes dirt, sweat, and makeup residue from the skin.", 
            benefit: "Cleanses pores and prepares skin for other products, prevents infections and acne.",
            warning: "Never use regular body soap on your face as it disrupts pH balance and causes extreme dryness.",
            tips: ["Use every morning and before bed.", "Wash with lukewarm water, avoid very hot or very cold water."] 
        }, 
        ar: { 
            title: "غسول", 
            desc: "إزالة الأوساخ، العرق، وبقايا المكياج من على البشرة.", 
            benefit: "ينظف المسام ويهيئ البشرة لامتصاص المحتويات، يمنع الالتهابات وحب الشباب.",
            warning: "لا تستخدم الصابون العادي للوجه أبداً لأنه يخل بتوازن الحموضة ويجفف البشرة بشدة.",
            tips: ["استخدمه كل صباح وقبل النوم.", "اغسل بماء فاتر، وتجنب الماء الساخن جداً أو البارد جداً."] 
        } 
    },
    { 
        id: 1204, 
        ku: { 
            title: "کۆلاجین (Collagen)", 
            desc: "پڕۆتینێکی بنەڕەتییە بۆ توندوتۆڵی و گەنجی پێست.", 
            benefit: "پێست لە چرچی دەپارێزێت، توندی پێست زیاد دەکات و یارمەتی چاکبوونەوەی برینەکان دەدات.",
            warning: "تەواوکەری کۆلاجین ڕەنگە لە هەندێک کەسدا هەستیاری دروست بکات، پێش بەکارهێنان پشکنین بکە.",
            tips: ["بەکارهێنانی کرێم و سیرەمی کۆلاجین بۆ دەرەوەی پێست.", "خواردنی شۆربای ئێسک و میوە ترشەکان بۆ هاندانی دروستبوونی کۆلاجین لە ناوەوە."] 
        }, 
        en: { 
            title: "Collagen", 
            desc: "Essential protein for skin firmness and youthfulness.", 
            benefit: "Prevents wrinkles, increases skin elasticity, and aids in wound healing.",
            warning: "Collagen supplements may cause allergies in some people; test before full use.",
            tips: ["Use collagen creams/serums for topical benefits.", "Consume bone broth and citrus fruits to boost internal production."] 
        }, 
        ar: { 
            title: "الكولاجين", 
            desc: "بروتين أساسي لشد البشرة وشبابها.", 
            benefit: "يمنع التجاعيد، يزيد مرونة الجلد، ويساعد في التئام الجروح.",
            warning: "مكملات الكولاجين قد تسبب حساسية لدى البعض، تأكد قبل الاستخدام المكثف.",
            tips: ["استخدم كريمات وسيرومات الكولاجين للفوائد الخارجية.", "تناول مرق العظام والحمضيات لتحفيز الإنتاج الداخلي."] 
        } 
    },
    { 
        id: 1205, 
        ku: { 
            title: "لابەری پێستی مردوو (Exfoliator)", 
            desc: "پرۆسەی لادانی خانە مردووەکان لەسەر ڕووی پێست.", 
            benefit: "پێست گەشاوە و نەرم دەکات، کونی پێست پاک دەکاتەوە و یارمەتی مژینی باشتر بۆ کرێمەکان دەدات.",
            warning: "زیادەڕۆیی لە لابردنی پێست (زیاتر لە ٣ جار لە هەفتەیەکدا) دەبێتە هۆی سووربوونەوە و تێکچوونی بەربەستی پارێزەری پێست.",
            tips: ["بە هێواشی و بە جوڵەی بازنەیی بەکاریبهێنە.", "هەمیشە دوای لابردنی پێستی مردوو، شێدارکەرەوە بەکاربهێنە."] 
        }, 
        en: { 
            title: "Exfoliator", 
            desc: "Process of removing dead skin cells from the surface.", 
            benefit: "Brightens and softens skin, clears pores, and improves product absorption.",
            warning: "Over-exfoliating (more than 3 times a week) can lead to redness and damage the skin barrier.",
            tips: ["Use gently in circular motions.", "Always follow with a moisturizer to soothe the skin."] 
        }, 
        ar: { 
            title: "مقشر", 
            desc: "عملية إزالة خلايا الجلد الميتة من السطح.", 
            benefit: "يفتح ويغذي البشرة، ينظف المسام، ويحسن امتصاص المنتجات الأخرى.",
            warning: "المبالغة في التقشير (أكثر من 3 مرات أسبوعياً) قد تؤدي لاحمرار وتضرر حاجز البشرة.",
            tips: ["استخدمه بلطف بحركات دائرية.", "دائماً اتبع التقشير بمرطب لتهدئة البشرة."] 
        } 
    },
    { 
        id: 1206, 
        ku: { 
            title: "سیرەمی ڤیتامین C", 
            desc: "دژە ئۆکسانێکی بەهێز بۆ درەوشانەوەی پێست.", 
            benefit: "پەڵەی دەموچاو کەم دەکاتەوە، ڕەنگی پێست یەکدەخات و گەشییەکی زۆر بە دەموچاو دەبەخشێت.",
            warning: "ڕەنگە لە سەرەتادا کەمێک هەستی پێبکەیت (داغ بوون)، ئەگەر سووربوونەوەی زۆری دروست کرد وازی لێ بهێنە.",
            tips: ["باشترین کات بۆ بەکارهێنانی بەیانیانە پێش دژەخۆر.", "لە شوێنێکی تاریک و سارد دایبنێ بۆ ئەوەی تێک نەچێت."] 
        }, 
        en: { 
            title: "Vitamin C Serum", 
            desc: "Powerful antioxidant for skin glow.", 
            benefit: "Reduces dark spots, evens skin tone, and provides a healthy glow.",
            warning: "May cause a slight tingling sensation; if severe redness occurs, stop use.",
            tips: ["Best used in the morning before applying sunscreen.", "Store in a cool, dark place to prevent oxidation."] 
        }, 
        ar: { 
            title: "سيروم فيتامين C", 
            desc: "مضاد أكسدة قوي لنضارة البشرة.", 
            benefit: "يقلل التصبغات، يوحد لون البشرة، ويمنحها إشراقة صحية.",
            warning: "قد يسبب وخزاً خفيفاً في البداية؛ إذا حدث احمرار شديد توقف عن استخدامه.",
            tips: ["أفضل وقت للاستخدام هو الصباح قبل واقي الشمس.", "يُحفظ في مكان بارد ومظلم لمنع التأكسد."] 
        } 
    },
    { 
        id: 1207, 
        ku: { 
            title: "تونەر (Toner)", 
            desc: "شلەیەکی پاککەرەوەیە بۆ ڕێکخستنی ترشەڵۆکی پێست (pH).", 
            benefit: "پاشماوەی پیسی لادەبات، کونی پێست بچووک دەکاتەوە و پێست ئامادە دەکات بۆ مژینی کرێمەکان.",
            warning: "ئەگەر پێستت زۆر وشکە، دوورکەوە لەو تونەرانەی کحولیان تێدایە چونکە زیاتر وشکی دەکەنەوە.",
            tips: ["دوای شوشتنی دەموچاو بەکاریبهێنە.", "بە لۆکەیەکی پاک بە هێواشی بەسەر پێستتدا بیهێنە.", "دوای تونەر، هەمیشە شێدارکەرەوە بەکاربهێنە."] 
        }, 
        en: { 
            title: "Toner", 
            desc: "A liquid cleanser that balances the skin's pH level.", 
            benefit: "Removes residue dirt, shrinks pores, and prepares skin for moisturizers.",
            warning: "If you have dry skin, avoid alcohol-based toners as they can cause irritation.",
            tips: ["Use after cleansing your face.", "Apply gently with a clean cotton pad.", "Always follow with a moisturizer."] 
        }, 
        ar: { 
            title: "تونر", 
            desc: "سائل منظف لموازنة حموضة البشرة (pH).", 
            benefit: "يزيل بقايا الأوساخ، يصغر المسام، ويهيئ البشرة لامتصاص المرطبات.",
            warning: "إذا كانت بشرتك جافة، تجنب التونر الذي يحتوي على الكحول لأنه يزيد الجفاف.",
            tips: ["يستخدم بعد غسل الوجه مباشرة.", "ضعه بلطف باستخدام قطعة قطن نظيفة.", "دائماً استخدم المرطب بعد التونر."] 
        } 
    },
    { 
        id: 1208, 
        ku: { 
            title: "زیپکە (Acne Care)", 
            desc: "چۆنیەتی مامەڵەکردن لەگەڵ دروستبوونی زیپکە لەسەر پێست.", 
            benefit: "کەمکردنەوەی هەوکردنی پێست، ڕێگری لە دروستبوونی پەڵەی دوای زیپکە و پاککردنەوەی کونی پێست.",
            warning: "هەرگیز زیپکە مەفەوتێنە (مەتەقێنە)، چونکە دەبێتە هۆی بڵاوبوونەوەی بەکتریا و دروستبوونی چاڵ لە پێستدا.",
            tips: ["بەکارهێنانی ماددەی سالیسیلیک ئەسید (Salicylic Acid).", "دوورکەوتنەوە لە خواردنی چەور و شیرینی زۆر.", "دەست لە دەموچاوت مەدە بەبێ شوشتنی دەستەکانت."] 
        }, 
        en: { 
            title: "Acne Care", 
            desc: "How to handle acne formation on the skin.", 
            benefit: "Reduces inflammation, prevents post-acne scarring, and clears clogged pores.",
            warning: "Never pop your pimples, as it spreads bacteria and causes permanent scarring.",
            tips: ["Use products containing Salicylic Acid.", "Avoid excessive oily foods and sweets.", "Don't touch your face without washing your hands."] 
        }, 
        ar: { 
            title: "حب الشباب", 
            desc: "كيفية التعامل مع ظهور البثور على البشرة.", 
            benefit: "تقليل الالتهاب، منع تصبغات ما بعد الحبوب، وتنظيف المسام المسدودة.",
            warning: "لا تفرقع الحبوب أبداً، لأن ذلك ينشر البكتيريا ويسبب ندبات دائمة.",
            tips: ["استخدام منتجات تحتوي على حمض الساليسيليك.", "تجنب الأطعمة الدهنية والسكريات بكثرة.", "لا تلمس وجهك دون غسل يديك."] 
        } 
    },
    { 
        id: 1209, 
        ku: { 
            title: "ڕەشی ژێر چاو (Dark Circles)", 
            desc: "کێشەی ڕەنگتۆخی پێستی دەوروبەری چاو.", 
            benefit: "گەشاندنەوەی چاوەکان, کەمکردنەوەی پفکردنی ژێر چاو و نەهێشتنی نیشانەکانی ماندوێتی.",
            warning: "بەکارهێنانی کرێمی قورس و نادروست بۆ ژێر چاو ڕەنگە ببێتە هۆی دروستبوونی دەنکۆڵەی سپی (Milia).",
            tips: ["خەوتنی پێویست (٧ بۆ ٨ کاتژمێر).", "بەکارهێنانی کرێمی چاو کە ڤیتامین C یان کافاینی تێدایە.", "دانانی کەمادەی چای سارد یان خەیار."] 
        }, 
        en: { 
            title: "Dark Circles", 
            desc: "Dark pigmentation issues around the eye area.", 
            benefit: "Brightens eyes, reduces under-eye puffiness, and removes signs of fatigue.",
            warning: "Using heavy or incorrect creams around eyes can lead to Milia (small white bumps).",
            tips: ["Get enough sleep (7-8 hours).", "Use eye creams containing Vitamin C or Caffeine.", "Apply cold tea bags or cucumber slices."] 
        }, 
        ar: { 
            title: "هالات سوداء", 
            desc: "مشكلة التصبغ الداكن حول منطقة العين.", 
            benefit: "تفتيح منطقة العين، تقليل الانتفاخ، وإزالة علامات التعب.",
            warning: "استخدام كريمات ثقيلة جداً وغير مناسبة قد يسبب ظهور حبوب بيضاء صغيرة (Milia).",
            tips: ["النوم الكافي (7-8 ساعات).", "استخدام كريمات العين التي تحتوي على فيتامين C أو الكافيين.", "وضع كمادات شاي باردة أو شرائح خيار."] 
        } 
    },
    { 
        id: 1210, 
        ku: { 
            title: "ماسکی دەموچاو (Face Mask)", 
            desc: "چارەسەری چڕ و خێرا بۆ کێشەکانی پێست.", 
            benefit: "خۆراکی زۆر بە پێست دەبەخشێت، شێداری دەکاتەوە و یارمەتی لابردنی ژەهرەکان دەدات.",
            warning: "زیادەڕۆیی لە بەکارهێنانی ماسک (زیاتر لە ٣ جار لە هەفتەیەکدا) دەبێتە هۆی هەستیاری پێست.",
            tips: ["هەڵبژاردنی ماسکی گڵ بۆ پێستی چەور.", "ماسکی شێدارکەرەوە بۆ پێستی وشک.", "هەرگیز ماسک زیاتر لە کاتی دیاریکراو مەهێڵەرەوە."] 
        }, 
        en: { 
            title: "Face Mask", 
            desc: "Intensive and quick treatment for skin issues.", 
            benefit: "Provides deep nourishment, hydrates, and helps detoxify the skin.",
            warning: "Overusing face masks (more than 3 times a week) can cause skin sensitivity.",
            tips: ["Choose clay masks for oily skin.", "Use hydrating masks for dry skin.", "Never leave a mask on longer than the specified time."] 
        }, 
        ar: { 
            title: "قناع الوجه", 
            desc: "علاج مكثف وسريع لمشاكل البشرة.", 
            benefit: "يمنح تغذية عميقة، يرطب البشرة، ويساعد في طرد السموم.",
            warning: "المبالغة في استخدام الأقنعة (أكثر من 3 مرات أسبوعياً) قد يسبب حساسية.",
            tips: ["اختر أقنعة الطين للبشرة الدهنية.", "استخدم الأقنعة المرطبة للبشرة الجافة.", "لا تترك القناع لفترة أطول من الوقت المحدد."] 
        } 
    },
    { 
        id: 1211, 
        ku: { 
            title: "خەو و پێست (Sleep)", 
            desc: "ڕۆڵی خەو لە نوێکردنەوەی خانەکانی پێست.", 
            benefit: "لەکاتی خەودا پێست خۆی نوێ دەکاتەوە، کۆلاجین بەرهەم دەهێنێت و ماندوێتی نامێنێت.",
            warning: "کەمخەوی دەبێتە هۆی پیری پێشوەختە و دروستبوونی چرچی لە دەوری چاو.",
            tips: ["خەوتنی زوو و بە شێوەیەکی ڕێک و پێک.", "بەکارهێنانی بەرگی سەرین (Pillowcase) لە ئاوریشم (Silk) بۆ ڕێگری لە چرچی.", "پاککردنەوەی پێست پێش خەوتن."] 
        }, 
        en: { 
            title: "Sleep & Skin", 
            desc: "The role of sleep in skin cell regeneration.", 
            benefit: "Skin repairs itself during sleep, produces collagen, and removes fatigue.",
            warning: "Lack of sleep causes premature aging and wrinkles around the eyes.",
            tips: ["Sleep early and maintain a consistent schedule.", "Use a silk pillowcase to prevent sleep wrinkles.", "Always cleanse your skin before bed."] 
        }, 
        ar: { 
            title: "النوم والبشرة", 
            desc: "دور النوم في تجديد خلايا البشرة.", 
            benefit: "البشرة ترمم نفسها أثناء النوم، تنتج الكولاجين، وتتخلص من التعب.",
            warning: "قلة النوم تسبب الشيخوخة المبكرة وظهور التجاعيد حول العين.",
            tips: ["النوم مبكراً وبشكل منتظم.", "استخدام غطاء وسادة حريري لمنع تجاعيد النوم.", "تنظيف البشرة جيداً قبل النوم."] 
        } 
    },
    { 
        id: 1212, 
        ku: { 
            title: "خواردنەوەی ئاو (Hydration)", 
            desc: "گرنگی ئاو بۆ شێداری ناوەوەی جەستە و پێست.", 
            benefit: "پێست بە گەشاوەیی و نەرمی دەهێڵێتەوە، ژەهرەکان دەردەکات و ڕێگری لە وشکبوونەوەی توند دەکات.",
            warning: "کەمی ئاو پێست زەرد و بێ ڕەنگ دەکات و چرچییەکان زیاتر دیار دەکات.",
            tips: ["ڕۆژانە ٨ پەرداخ ئاو بخۆرەوە.", "میوە ئاودارەکان بخۆ وەک شوتی و خەیار.", "هەمیشە پەرداخێک ئاو لە تەنیشتت دابنێ."] 
        }, 
        en: { 
            title: "Hydration", 
            desc: "Importance of water for internal body and skin hydration.", 
            benefit: "Keeps skin glowing and soft, flushes toxins, and prevents severe dryness.",
            warning: "Dehydration makes skin look dull, yellow, and emphasizes wrinkles.",
            tips: ["Drink 8 glasses of water daily.", "Eat hydrating fruits like watermelon and cucumber.", "Always keep a water bottle next to you."] 
        }, 
        ar: { 
            title: "الترطيب الداخلي", 
            desc: "أهمية الماء لترطيب الجسم والبشرة من الداخل.", 
            benefit: "يحافظ على نضارة ونعومة البشرة، يطرد السموم، ويمنع الجفاف الشديد.",
            warning: "نقص الماء يجعل البشرة تبدو باهتة وصفراء وتبرز التجاعيد.",
            tips: ["اشرب 8 أكواب من الماء يومياً.", "ناول الفواكه المرطبة مثل البطيخ والخيار.", "احتفظ دائماً بزجاجة ماء بجانبك."] 
        } 
    },
    { 
        id: 1213, 
        ku: { 
            title: "مەیک ئەپ (Makeup Care)", 
            desc: "چۆنیەتی بەکارهێنانی مەیک ئەپ بە بێ زیان گەیاندن بە پێست.", 
            benefit: "داپۆشینی کەموکوڕییەکان بە شێوەیەکی کاتی و بەخشینی جوانییەکی زیاتر.",
            warning: "هەرگیز بە مەیک ئەپەوە مەخەوە، چونکە کونی پێست دەگرێت و دەبێتە هۆی زیپکەی توند و هەوکردن.",
            tips: ["بەکارهێنانی (Double Cleanse) بۆ لابردنی مەیکئەپ (زەیت + غەسول).", "خاوێنکردنەوەی فڵچە و ئیسفەنجەکانی مەیک ئەپ هەفتانە.", "بەکارهێنانی پرایمەر بۆ پاراستنی پێست."] 
        }, 
        en: { 
            title: "Makeup Care", 
            desc: "How to use makeup without damaging your skin.", 
            benefit: "Temporarily covers imperfections and enhances appearance.",
            warning: "Never sleep with makeup on, as it clogs pores and causes severe acne and inflammation.",
            tips: ["Use Double Cleansing to remove makeup (Oil + Water cleanser).", "Wash your makeup brushes and sponges weekly.", "Use a primer to protect your skin barrier."] 
        }, 
        ar: { 
            title: "العناية بالمكياج", 
            desc: "كيفية استخدام المكياج دون الإضرار ببشرتك.", 
            benefit: "يغطي العيوب مؤقتاً ويعزز المظهر الجمالي.",
            warning: "لا تنم بالمكياج أبداً، لأنه يسد المسام ويسبب حبوباً شديدة والتهابات.",
            tips: ["استخدم التنظيف المزدوج لإزالة المكياج (زيت + غسول).", "نظف فُرش وإسفنجات المكياج أسبوعياً.", "استخدم برايمر لحماية حاجز البشرة."] 
        } 
    },
    { 
        id: 1214, 
        ku: { 
            title: "ڕۆتینی بەیانیان (Morning Routine)", 
            desc: "ئامادەکردنی پێست بۆ ڕووبەڕووبوونەوەی ژینگەی دەرەوە.", 
            benefit: "پاراستنی پێست لە پیسی و تیشکی خۆر، هێشتنەوەی پێست بە تازەیی لە درێژایی ڕۆژدا.",
            warning: "تێنەپەڕاندنی هەنگاوی دژەخۆر، چونکە بێ دژەخۆر هەموو ڕۆتینەکەت بێ سوودە.",
            tips: ["هەنگاوەکان: ١. غەسول، ٢. ڤیتامین C، ٣. شێدارکەرەوە، ٤. دژەخۆر."] 
        }, 
        en: { 
            title: "Morning Routine", 
            desc: "Preparing skin for daily environmental exposure.", 
            benefit: "Protects skin from pollution and UV rays, keeps skin fresh throughout the day.",
            warning: "Never skip sunscreen, as without it, your entire routine is ineffective.",
            tips: ["Steps: 1. Cleanser, 2. Vitamin C, 3. Moisturizer, 4. Sunscreen."] 
        }, 
        ar: { 
            title: "روتين الصباح", 
            desc: "تجهيز البشرة لمواجهة العوامل البيئية اليومية.", 
            benefit: "يحمي البشرة من التلوث وأشعة الشمس، ويحافظ على نضارتها طوال اليوم.",
            warning: "لا تتخطى خطوة واقي الشمس أبداً، فبدونه يصبح الروتين غير فعال.",
            tips: ["الخطوات: 1. غسول، 2. فيتامين C، 3. مرطب، 4. واقي شمس."] 
        } 
    },
    { 
        id: 1215, 
        ku: { 
            title: "ڕۆتینی شەوان (Night Routine)", 
            desc: "کاتی زێڕین بۆ چارەسەرکردن و نوێکردنەوەی پێست.", 
            benefit: "لابردنی ماندوێتی ڕۆژ، چارەسەرکردنی کێشەکان (وەک چرچی و پەڵە) لەکاتی خەودا.",
            warning: "بەکارهێنانی ماددە بەهێزەکان (وەک ڕیتینۆڵ) تەنها لە شەودا چونکە پێست بە خۆر هەستیار دەکەن.",
            tips: ["هەنگاوەکان: ١. لابردنی مەیکئەپ، ٢. غەسول، ٣. سیرەمی چارەسەر، ٤. کرێمی شەو."] 
        }, 
        en: { 
            title: "Night Routine", 
            desc: "The golden time for skin repair and regeneration.", 
            benefit: "Removes daily stress, treats issues like wrinkles and spots during sleep.",
            warning: "Use strong actives (like Retinol) only at night as they make skin sun-sensitive.",
            tips: ["Steps: 1. Makeup removal, 2. Cleanser, 3. Treatment serum, 4. Night cream."] 
        }, 
        ar: { 
            title: "روتين المساء", 
            desc: "الوقت الذهبي لترميم وتجديد البشرة.", 
            benefit: "يزيل إجهاد اليوم، يعالج المشاكل مثل التجاعيد والبقع أثناء النوم.",
            warning: "استخدم المواد القوية (مثل الريتينول) ليلاً فقط لأنها تزيد حساسية الشمس.",
            tips: ["الخطوات: 1. إزالة المكياج، 2. غسول، 3. سيروم علاجي، 4. كريم ليلي."] 
        } 
    },
    { 
        id: 1216, 
        ku: { 
            title: "پێستی چەور (Oily Skin)", 
            desc: "پێستێکە کە ڕێژەیەکی زۆر لە چەوری سروشتی (Sebum) بەرهەم دەهێنێت.", 
            benefit: "پێستی چەور درەنگتر پیر دەبێت و چرچی کەمتر تێدا دەردەکەوێت بە بەراورد بە پێستی وشک.",
            warning: "چەوری زۆر دەبێتە هۆی گیرانی کونی پێست و دروستبوونی زیپکەی سەرڕەش و سەر سپی.",
            tips: ["بەکارهێنانی شێدارکەرەوەی ئاوی (Water-based) نەک زەیتی.", "شوشتنی دەموچاو ڕۆژانە ٢ جار بە غەسولی کەفدار.", "بەکارهێنانی ماسکی گڵ (Clay Mask) هەفتانە."] 
        }, 
        en: { 
            title: "Oily Skin", 
            desc: "Skin that produces excessive natural oil (Sebum).", 
            benefit: "Oily skin tends to age slower and shows fewer wrinkles compared to dry skin.",
            warning: "Excess oil leads to clogged pores, blackheads, and whiteheads.",
            tips: ["Use water-based moisturizers instead of oil-based ones.", "Wash your face twice daily with a foaming cleanser.", "Apply clay masks weekly to absorb excess oil."] 
        }, 
        ar: { 
            title: "البشرة الدهنية", 
            desc: "البشرة التي تنتج كميات زائدة من الزيوت الطبيعية (الزهم).", 
            benefit: "البشرة الدهنية تميل للشيخوخة بشكل أبطأ وتظهر فيها تجاعيد أقل.",
            warning: "الزيوت الزائدة تؤدي لانسداد المسام وظهور الرؤوس السوداء والبيضاء.",
            tips: ["استخدم مرطبات مائية بدلاً من الزيتية.", "اغسل وجهك مرتين يومياً بغسول رغوي.", "استخدم أقنعة الطين أسبوعياً لامتصاص الدهون."] 
        } 
    },
    { 
        id: 1217, 
        ku: { 
            title: "پێستی وشک (Dry Skin)", 
            desc: "پێستێکە کە چەوری پێویست و شێی کەمە.", 
            benefit: "کونی پێست لەم جۆرەدا زۆر بچووک و نادیارە و پێستەکە کەمتر چەور دەبێت.",
            warning: "پێستی وشک زووتر تووشی چرچی و توێژبوونی پێست دەبێت، زۆرجار هەستی بە توندی و ناڕەحەتی دەکرێت.",
            tips: ["بەکارهێنانی شێدارکەرەوەی کرێمی قورس.", "دوورکەوتنەوە لە ئاوی زۆر گەرم لەکاتی شوشتندا.", "بەکارهێنانی غەسولی کرێمی و شێدارکەرەوە."] 
        }, 
        en: { 
            title: "Dry Skin", 
            desc: "Skin that lacks sufficient natural oils and moisture.", 
            benefit: "Pores are usually very small and less visible, and the skin rarely looks greasy.",
            warning: "Dry skin is more prone to early wrinkles, flaking, and feeling tight or uncomfortable.",
            tips: ["Use heavy cream-based moisturizers.", "Avoid using very hot water when washing.", "Opt for creamy, hydrating cleansers."] 
        }, 
        ar: { 
            title: "البشرة الجافة", 
            desc: "البشرة التي تفتقر للزيوت الطبيعية والترطيب الكافي.", 
            benefit: "المسام عادة ما تكون صغيرة جداً وغير مرئية، ونادراً ما تبدو البشرة زيتية.",
            warning: "البشرة الجافة أكثر عرضة للتجاعيد المبكرة، التقشر، والشعور بالشد.",
            tips: ["استخدم مرطبات كريمية ثقيلة.", "تجنب استخدام الماء الساخن جداً عند الغسل.", "اختر منظفات كريمية ومرطبة."] 
        } 
    },
    { 
        id: 1218, 
        ku: { 
            title: "هەستیاری پێست (Sensitive Skin)", 
            desc: "پێستێکە کە بە ئاسانی تووشی سووربوونەوە و خورۆ دەبێت بەرامبەر بەرهەمەکان.", 
            benefit: "وات لێدەکات زیاتر ئاگاداری پێکهاتەی بەرهەمەکان بیت و بەرهەمی سروشتیتر بەکاربهێنیت.",
            warning: "بەکارهێنانی بەرهەمی هەڵە دەبێتە هۆی هەوکردنی توند و سووتانەوەی پێست.",
            tips: ["دوورکەوتنەوە لەو بەرهەمانەی بۆن (Fragrance) و کحولیان تێدایە.", "هەمیشە تاقیکردنەوە (Patch Test) بکە پێش بەکارهێنانی هەر بەرهەمێکی نوێ.", "بەکارهێنانی پێکهاتەی ئارامکەرەوە وەک ئالۆڤێرا."] 
        }, 
        en: { 
            title: "Sensitive Skin", 
            desc: "Skin that reacts easily to products with redness, itching, or irritation.", 
            benefit: "Encourages you to be more mindful of ingredients and use natural products.",
            warning: "Using the wrong products can lead to severe inflammation and chemical burns.",
            tips: ["Avoid products containing fragrances and alcohol.", "Always perform a patch test before using new products.", "Use calming ingredients like Aloe Vera and Centella."] 
        }, 
        ar: { 
            title: "البشرة الحساسة", 
            desc: "البشرة التي تتفاعل بسهولة مع المنتجات وتصاب بالاحمرار أو الحكة.", 
            benefit: "تجعلك أكثر حرصاً في اختيار المكونات واستخدام المنتجات الطبيعية.",
            warning: "استخدام منتجات خاطئة قد يؤدي لالتهابات شديدة وحروق جلدية.",
            tips: ["تجنب المنتجات التي تحتوي على عطور وكحول.", "قم دائماً باختبار المنتج على منطقة صغيرة قبل الاستخدام.", "استخدم مكونات مهدئة مثل الألوفيرا."] 
        } 
    },
    { 
        id: 1219, 
        ku: { 
            title: "لابردنی موو (Hair Removal)", 
            desc: "کاریگەری لابردنی مووی دەموچاو و جەستە لەسەر پێست.", 
            benefit: "پێست نەرمتر و پاکتر دەردەکەوێت و مێك ئەپ بە جوانی لەسەری دەنیشێت.",
            warning: "لابردنی موو بە شێوەیەکی نادروست دەبێتە هۆی سووربوونەوە، زیپکە و مووی ناو پێست.",
            tips: ["بەکارهێنانی ئالۆڤێرا یان کرێمی ئارامکەرەوە دوای لابردن.", "پاککردنەوەی پێست و ئامێرەکان پێش و دوای کارەکە.", "ئەنجامدانی (Exfoliation) ٢ ڕۆژ دوای لابردن."] 
        }, 
        en: { 
            title: "Hair Removal", 
            desc: "The impact of removing facial and body hair on the skin.", 
            benefit: "Makes skin look smoother, cleaner, and allows for better makeup application.",
            warning: "Incorrect hair removal can cause redness, irritation, and ingrown hairs.",
            tips: ["Apply Aloe Vera or calming creams immediately after.", "Sanitize tools and skin before and after the process.", "Exfoliate 2 days after hair removal to prevent ingrowns."] 
        }, 
        ar: { 
            title: "إزالة الشعر", 
            desc: "تأثير إزالة شعر الوجه والجسم على البشرة.", 
            benefit: "تجعل البشرة تبدو أكثر نعومة ونظافة وتسمح بوضع المكياج بشكل أفضل.",
            warning: "إزالة الشعر بشكل خاطئ تسبب احمراراً، حبوباً، وشعراً تحت الجلد.",
            tips: ["استخدم الألوفيرا أو كريمات مهدئة بعد الإزالة مباشرة.", "عقم الأدوات والجلد قبل وبعد العملية.", "قم بالتقشير بعد يومين من الإزالة لمنع الشعر تحت الجلد."] 
        } 
    },
    { 
        id: 1220, 
        ku: { 
            title: "ڕیتینۆڵ (Retinol)", 
            desc: "یەکێکە لە بەهێزترین پێکهاتەکان بۆ دژە پیری و نوێکردنەوەی پێست.", 
            benefit: "چرچی کەم دەکاتەوە، پەڵە لادەبات، بەرهەمهێنانی کۆلاجین زیاد دەکات و پێست گەنج دەکاتەوە.",
            warning: "ڕیتینۆڵ نابێت لە کاتی دووگیانیدا بەکاربێت، هەروەها پێست بە تیشکی خۆر زۆر هەستیار دەکات.",
            tips: ["تەنها بە شەوان بەکاریبهێنە.", "بە بڕێکی کەم دەست پێ بکە (١ بۆ ٢ جار لە هەفتەیەکدا).", "بەیانیان بە هیچ شێوەیەک دژەخۆر لەبیر مەکە."] 
        }, 
        en: { 
            title: "Retinol", 
            desc: "One of the most powerful ingredients for anti-aging and skin renewal.", 
            benefit: "Reduces wrinkles, fades dark spots, boosts collagen, and rejuvenates skin.",
            warning: "Retinol should NOT be used during pregnancy and makes skin highly sun-sensitive.",
            tips: ["Use ONLY at night.", "Start slowly (1-2 times a week) to build tolerance.", "Never skip sunscreen the following morning."] 
        }, 
        ar: { 
            title: "الريتينول", 
            desc: "واحد من أقوى المكونات لمكافحة الشيخوخة وتجديد البشرة.", 
            benefit: "يقلل التجاعيد، يزيل البقع الداكنة، يحفز الكولاجين، ويجدد شباب البشرة.",
            warning: "يمنع استخدام الريتينول أثناء الحمل، ويجعل البشرة حساسة جداً للشمس.",
            tips: ["يستخدم ليلاً فقط.", "ابدأ ببطء (1-2 مرة أسبوعياً) لبناء التحمل.", "لا تنسَ واقي الشمس في الصباح التالي أبداً."] 
        } 
    },
    { 
        id: 1221, 
        ku: { 
            title: "کاریگەری شەکر (Sugar & Skin)", 
            desc: "چۆن خواردنی شەکر کار لە تەندروستی پێست دەکات.", 
            benefit: "کەمکردنەوەی شەکر وات لێدەکات پێستت کەمتر چەور بێت و درەوشاوەتر بێت.",
            warning: "شەکری زۆر دەبێتە هۆی پرۆسەی (Glycation) کە کۆلاجین تێکدەدات و دەبێتە هۆی چرچی و زیپکە.",
            tips: ["کەمکردنەوەی شیرینی و خواردنەوە گازییەکان.", "خواردنی میوە و سەوزە لەبری شەکرە دەستکردەکان.", "خواردنەوەی چای سەوز بۆ ڕێگری لە کاریگەری شەکر."] 
        }, 
        en: { 
            title: "Sugar & Skin", 
            desc: "How sugar consumption affects your skin health.", 
            benefit: "Reducing sugar intake makes your skin look less oily and more radiant.",
            warning: "Excess sugar causes Glycation, which damages collagen and leads to wrinkles and acne.",
            tips: ["Reduce sweets and carbonated drinks.", "Eat fresh fruits and vegetables instead of artificial sugars.", "Drink green tea to combat sugar's negative effects."] 
        }, 
        ar: { 
            title: "السكر والبشرة", 
            desc: "كيف يؤثر استهلاك السكر على صحة بشرتك.", 
            benefit: "تقليل السكر يجعل بشرتك تبدو أقل دهنية وأكثر إشراقاً.",
            warning: "السكر الزائد يسبب عملية (Glycation) التي تدمر الكولاجين وتسبب التجاعيد والحبوب.",
            tips: ["قلل من الحلويات والمشروبات الغازية.", "تناول الفواكه والخضروات بدلاً من السكريات المصنعة.", "اشرب الشاي الأخضر لمكافحة آثار السكر."] 
        } 
    },
    { 
        id: 1222, 
        ku: { 
            title: "جگەرەکێشان و پێست", 
            desc: "کاریگەرییە خراپەکانی جگەرە لەسەر جوانی و تەندروستی پێست.", 
            benefit: "وازهێنان لە جگەرە دەبێتە هۆی باشتربوونی ڕەنگی پێست و گەیشتنی ئۆکسجینی زیاتر بە خانەکان.",
            warning: "جگەرەکێشان کۆلاجین تێکدەدات، پێست زەرد و بێ ڕەنگ دەکات و چرچی قووڵ دروست دەکات.",
            tips: ["وازهێنان لە جگەرە باشترین هەنگاوە بۆ جوانیت.", "بەکارهێنانی سیرەمی ڤیتامین C و E بۆ قەرەبووکردنەوەی زیانەکان.", "خواردنی خۆراکی دەوڵەمەند بە دژە ئۆکسان."] 
        }, 
        en: { 
            title: "Smoking & Skin", 
            desc: "The negative impacts of smoking on skin beauty and health.", 
            benefit: "Quitting smoking improves skin tone and allows more oxygen to reach skin cells.",
            warning: "Smoking destroys collagen, makes skin look sallow/yellow, and causes deep wrinkles.",
            tips: ["Quitting is the best beauty treatment you can give yourself.", "Use Vitamin C and E serums to help repair damage.", "Eat a diet rich in antioxidants."] 
        }, 
        ar: { 
            title: "التدخين والبشرة", 
            desc: "الآثار السلبية للتدخين على جمال وصحة البشرة.", 
            benefit: "ترك التدخين يحسن لون البشرة ويسمح بوصول المزيد من الأكسجين للخلايا.",
            warning: "التدخين يدمر الكولاجين، يجعل البشرة تبدو شاحبة، ويسبب تجاعيد عميقة.",
            tips: ["الإقلاع عن التدخين هو أفضل علاج تجميلي لنفسك.", "استخدم سيروم فيتامين C و E للمساعدة في ترميم الضرر.", "تناول غذاءً غنياً بمضادات الأكسدة."] 
        } 
    },
    { 
        id: 1223, 
        ku: { 
            title: "ئاووهەوا و پێست", 
            desc: "چۆن گۆڕانی وەرزەکان کار لە پێست دەکات.", 
            benefit: "گۆڕینی ڕۆتین بەپێی وەرز یارمەتیدەرە پێستت هەمیشە لە باشترین دۆخدا بێت.",
            warning: "هەوای ساردی زستان پێست وشک دەکاتەوە، گەرمای هاوینیش چەوری و زیپکە زیاد دەکات.",
            tips: ["لە زستان کرێمی شێدارکەرەوەی قورستر بەکاربهێنە.", "لە هاوین دژەخۆری بەهێزتر و شێدارکەرەوەی سووکتر.", "هەمیشە پێستت بە شێداری بهێڵەرەوە."] 
        }, 
        en: { 
            title: "Weather & Skin", 
            desc: "How seasonal changes affect your skin condition.", 
            benefit: "Adjusting your routine by season helps keep your skin in optimal health.",
            warning: "Cold winter air dries out skin, while summer heat increases oil and acne.",
            tips: ["Use heavier moisturizers in winter.", "Opt for stronger sunscreen and lighter moisturizers in summer.", "Keep your skin hydrated regardless of the season."] 
        }, 
        ar: { 
            title: "الطقس والبشرة", 
            desc: "كيف تؤثر تغيرات الفصول على حالة بشرتك.", 
            benefit: "تعديل روتينك حسب الموسم يساعد في الحفاظ على صحة بشرتك.",
            warning: "هواء الشتاء البارد يجفف البشرة، بينما حرارة الصيف تزيد الدهون والحبوب.",
            tips: ["استخدم مرطبات أثقل في الشتاء.", "اختر واقي شمس أقوى ومرطبات أخف في الصيف.", "حافظ على ترطيب بشرتك دائماً."] 
        } 
    },
    { 
        id: 1224, 
        ku: { 
            title: "ئارەقەکردنەوە (Sweat)", 
            desc: "کاریگەری ئارەقەکردنەوە لە کاتی وەرزش و گەرمادا.", 
            benefit: "ئارەقەکردنەوە یارمەتی چوونە دەرەوەی هەندێک ژەهر دەدات لە ڕێگەی کونی پێستەوە.",
            warning: "مانەوەی ئارەق لەسەر پێست بۆ ماوەیەکی زۆر کونی پێست دەگرێت و دەبێتە هۆی زیپکە و هەوکردنی قارچکی.",
            tips: ["خۆشوشتن دەستبەجێ دوای وەرزشکردن.", "شوشتنی دەموچاو دوای ئارەقەکردنەوەی زۆر.", "لەبەرکردنی جلی لۆکە (Cotton) بۆ ئەوەی پێست هەناسە بدات."] 
        }, 
        en: { 
            title: "Sweat & Skin", 
            desc: "The impact of sweating during exercise and heat on your skin.", 
            benefit: "Sweating helps flush out some toxins through the skin's pores.",
            warning: "Leaving sweat on skin for too long clogs pores and causes acne or fungal infections.",
            tips: ["Shower immediately after exercise.", "Wash your face after heavy sweating.", "Wear cotton clothes to allow your skin to breathe."] 
        }, 
        ar: { 
            title: "التعرق والبشرة", 
            desc: "تأثير التعرق أثناء الرياضة والحرارة على بشرتك.", 
            benefit: "التعرق يساعد في طرد بعض السموم من خلال مسام الجلد.",
            warning: "ترك العرق على الجلد لفترة طويلة يسد المسام ويسبب الحبوب أو الالتهابات الفطرية.",
            tips: ["استحم مباشرة بعد التمرين.", "اغسل وجهك بعد التعرق الشديد.", "البس ملابس قطنية لتسمح لبشرتك بالتنفس."] 
        } 
    },
    { 
        id: 1225, 
        ku: { 
            title: "ستریس و پێست (Stress)", 
            desc: "پەیوەندی نێوان دۆخی دەروونی و جوانی پێست.", 
            benefit: "ئارامی دەروونی دەبێتە هۆی درەوشانەوەی سروشتی و کەمبوونەوەی کێشەکان.",
            warning: "ستریس هۆرمۆنی کۆرتیزۆڵ زیاد دەکات کە دەبێتە هۆی زیپکە، ئەکزیما و پیری پێشوەختە.",
            tips: ["ئەنجامدانی وەرزشی یۆگا و مێدیتەیشن.", "خەوتنی پێویست و پشوودان.", "خواردنی تەندروست بۆ بەرەنگاربوونەوەی ستریس."] 
        }, 
        en: { 
            title: "Stress & Skin", 
            desc: "The link between your mental state and skin beauty.", 
            benefit: "Mental peace leads to a natural glow and fewer skin flare-ups.",
            warning: "Stress increases Cortisol, which causes acne, eczema, and premature aging.",
            tips: ["Practice yoga or meditation to relax.", "Ensure adequate sleep and rest.", "Eat a healthy diet to combat stress effects."] 
        }, 
        ar: { 
            title: "التوتر والبشرة", 
            desc: "الرابط بين حالتك النفسية وجمال بشرتك.", 
            benefit: "الراحة النفسية تؤدي لإشراق طبيعي وتقليل مشاكل البشرة.",
            warning: "التوتر يزيد هرمون الكورتيزول الذي يسبب الحبوب، الإكزيما والشيخوخة المبكرة.",
            tips: ["مارس اليوغا أو التأمل للاسترخاء.", "احرص على النوم الكافي والراحة.", "تناول غذاءً صحياً لمكافحة آثار التوتر."] 
        } 
    }
];


const hotlinesData = [
    { id: 1, name: "Ambulance", phone: "122", ku: { name: "فریاکەوتنی تەندروستی", desc: "ئەمبوڵانس" }, en: { name: "Ambulance", desc: "Medical Emergency" }, ar: { name: "الإسعاف", desc: "طوارئ طبية" } },
    { id: 2, name: "Police", phone: "104", ku: { name: "پۆلیسی فریاکەوتن", desc: "پۆلیس" }, en: { name: "Police", desc: "Emergency Police" }, ar: { name: "النجدة", desc: "شرطة الطوارئ" } },
    { id: 3, name: "Fire", phone: "115", ku: { name: "بەرگری شارستانی", desc: "ئاگرکوژێنەوە" }, en: { name: "Fire Station", desc: "Fire emergency" }, ar: { name: "الدفاع المدني", desc: "الإطفاء" } },
    { id: 4, name: "Traffic", phone: "188", ku: { name: "پۆلیسی هاتووچۆ", desc: "ڕووداوی هاتووچۆ" }, en: { name: "Traffic Police", desc: "Car accidents" }, ar: { name: "المرور", desc: "حوادث السير" } },
    { id: 5, name: "Asayish", phone: "106", ku: { name: "ئاسایش", desc: "هێزەکانی ئاسایش" }, en: { name: "Security", desc: "Security forces" }, ar: { name: "الأمن", desc: "قوات الأمن" } }
];

const dailyTipsData = {
    ku: [
        "ئاوی زۆر بخۆرەوە بۆ تەندروستی پێست و پاراستنی گورچیلەکان لە دروستبوونی بەرد.",
        "ڕۆژانە لانی کەم ٣٠ خولەک بە خێرایی بڕۆ بۆ پاراستنی دڵ و سووڕی خوێن.",
        "خەوی تەواو لە نێوان ٧ بۆ ٨ کاتژمێر لە شەودا یارمەتی بەهێزکردنی مێشک و بەرگری دەدات.",
        "دوورکەوە لە خواردنی شەکر و شیرینی دەستکرد بۆ ڕێگری لە قەڵەوی و شەکرە.",
        "خواردنی سەوزەوات بە شێوەی ڕۆژانە ڤیتامینە پێویستەکان بۆ بەرگری جەستەت دابین دەکات.",
        "کەمکردنەوەی بەکارهێنانی خوێ لە خواردندا پەستانی خوێنت بە جێگیری دەهێڵێتەوە.",
        "شوشتنی دەستەکان بە دروستی بۆ ماوەی ٢٠ چرکە بە ئاو و سابوون باشترین ڕێگایە بۆ خۆپاراستن لە نەخۆشی.",
        "یاسای ٢٠-٢٠-٢٠ بەکاربهێنە: هەموو ٢٠ خولەکێک بۆ ماوەی ٢٠ چرکە سەیری شتێک بکە کە ٢٠ پێ دوور بێت بۆ حەسانەوەی چاوەکانت.",
        "ڕۆژانە دوو جار ددانەکانت بشۆ و داوی ددان بەکاربهێنە بۆ ڕێگریکردن لە کلۆربوون و هەوکردنی پوک.",
        "وەرزشی قووڵ هەڵکێشانی هەناسە یارمەتی کەمکردنەوەی دڵەڕاوکێ و ڕێکخستنی لێدانی دڵ دەدات.",
        "هەرگیز ژەمی بەیانیان پشتگوێ مەخە، چونکە وزەی پێویست بۆ دەستپێکی ڕۆژەکەت دابین دەکات.",
        "دوورکەوە لە خواردنە پرۆسێسکراو و لەقوتووکراوەکان چونکە ڕێژەیەکی زۆر پارێزەر و ماددەی کیمیاییان تێدایە.",
        "لە هاویناندا دژەخۆر بەکاربهێنە بۆ پاراستنی پێستت لە تیشکی سەروو بنەوشەیی مەترسیدار.",
        "لەکاتی دانیشتن لەبەردەم کۆمپیوتەر پشتی خۆت ڕاست ڕابگرە بۆ ڕێگریکردن لە ئازاری مل و پشت.",
        "هەوڵبدە لە جیاتی بەرزکەرەوە (ئەسانسۆر) پەیژە بەکاربهێنیت بۆ سووتاندنی کالۆری زیاتر.",
        "پێش کڕینی هەر خواردنێک، لیبێڵی پێکهاتەکانی بخوێنەوە بۆ زانینی ڕێژەی چەوری و شەکرەکان.",
        "پەیوەندی کۆمەڵایەتی و قسەکردن لەگەڵ خێزان و هاوڕێیان تەندروستی دەروونیت باشتر دەکات.",
        "دوورکەوە لە کێشانی جگەرە و نێرگەلە، چونکە هۆکاری سەرەکین بۆ نەخۆشییەکانی سی و شێرپەنجە.",
        "دوای کاتژمێر ٦ی ئێوارە لە خواردنەوەی کافایین (چای و قاوە) دوورکەوە بۆ ئەوەی خەوێکی ئارامت هەبێت.",
        "ساڵانە پشکنینی گشتی (Check-up) ئەنجام بدە بۆ دڵنیابوون لە دۆخی تەندروستیت پێش تێکچوونی.",
        "خواردنی چای سەوز یارمەتی خێراکردنی مێتابۆلیزم و پاراستنی خانەکان دەدات بەهۆی دژە ئۆکسانەکانیەوە.",
        "خواردنی دەوڵەمەند بە ڕیشاڵ (فایبەر) وەک دانەوێڵە و میوەکان، کۆئەندامی هەرست چالاک و تەندروست دەکات.",
        "چەورییە تەندروستەکان وەک زەیتی زەیتوون، گوێز و ئەڤۆکادۆ بخۆ بۆ پاڵپشتیکردنی تەندروستی دڵ.",
        "بۆ بەهێزکردنی ئێسکەکانت، خواردنی دەوڵەمەند بە کالسیۆم و ڤیتامین D وەک ماست و شیر بخۆ.",
        "گوێ لە جەستەت بگرە؛ کاتێک هەست بە ماندووبوونی زۆر دەکەیت، پشوو بدە و فشار مەخەرە سەر خۆت.",
        "لەکاتی وەرزشکردندا لە نێوان نێواندا ئاو بخورەوە بۆ ڕێگریکردن لە وشکبوونەوەی جەستە.",
        "دەرمانەکانت لە شوێنێکی وشک و فێنک و دوور لە دەستی منداڵان هەڵبگرە.",
        "مۆبایل و ئامێرە ئەلیکترۆنییەکانت بەردەوام پاک بکەرەوە چونکە ڕێژەیەکی زۆر بەکتریایان پێوە دەنیشێت.",
        "ئەگەر کارەکەت دانیشتنە، هەموو کاتژمێرێک بۆ ماوەی ٥ خولەک هەستە و کەمێک پیاسە بکە.",
        "لانی کەم کاتژمێرێک پێش خەوتن مۆبایلەکەت دابنێ بۆ ئەوەی مێشکت ئامادەی خەو بێت.",
        "خواردنەکانت بە هێواشی بخۆ و باش بیجوو بۆ ئەوەی کێشەی غازات و ئاوسانی گەدەت بۆ دروست نەبێت.",
        "بۆ سووکە ژەمەکان (Snacks)، لە جیاتی چپس و بسکیت، چەرەسات و میوەی وشککراوە بخۆ.",
        "دوای نانخواردن بۆ ماوەی ١٠ خولەک بە هێواشی پیاسە بکە بۆ یارمەتیدانی هەرسکردن.",
        "لە وەرزی سەرماودا لوت و دەمت داپۆشە لە کاتی چوونە دەرەوە بۆ ڕێگری لە هەوکردنی بۆری هەناسە.",
        "خواردنی ماسی لانی کەم هەفتەی جارێک، ترشە چەوری ئۆمێگا-٣ دابین دەکات کە بۆ مێشک پێویستە."
    ],
    en: [
        "Drink plenty of water to hydrate your skin and protect your kidneys from stone formation.",
        "Walk briskly for at least 30 minutes daily to maintain a healthy heart and circulation.",
        "Sleeping 7-8 hours a night helps boost your brain power and immune system.",
        "Avoid artificial sugars and sweets to prevent obesity and reduce diabetes risk.",
        "Eating fresh vegetables daily provides essential vitamins and minerals for immunity.",
        "Reducing salt intake in your meals helps maintain stable blood pressure.",
        "Washing hands properly with soap and water for 20 seconds is key to preventing disease.",
        "Use the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds.",
        "Brush twice daily and use dental floss to prevent cavities and gum disease.",
        "Deep breathing exercises help reduce stress and regulate your heart rate.",
        "Never skip breakfast; it provides the essential energy needed to start your day.",
        "Avoid processed and canned foods due to high preservatives and chemical content.",
        "Apply sunscreen in summer to protect your skin from harmful UV radiation.",
        "Maintain a straight posture while sitting at a computer to prevent neck and back pain.",
        "Try using the stairs instead of the elevator to burn more calories daily.",
        "Read ingredients labels before buying food to monitor fat and sugar levels.",
        "Social connection and talking to loved ones significantly improves mental health.",
        "Avoid smoking and hookahs; they are the primary causes of lung disease and cancer.",
        "Avoid caffeine after 6:00 PM to ensure a restful and deep sleep.",
        "Get an annual general check-up to monitor your health before issues arise.",
        "Drinking green tea boosts metabolism and protects cells with rich antioxidants.",
        "Foods rich in fiber, like whole grains and fruits, keep your digestive system healthy.",
        "Eat healthy fats like olive oil, walnuts, and avocados to support heart health.",
        "For strong bones, consume calcium and Vitamin D rich foods like milk and yogurt.",
        "Listen to your body; rest when you feel exhausted and do not overexert yourself.",
        "Drink water in intervals during exercise to prevent dehydration.",
        "Store your medications in a cool, dry place away from children's reach.",
        "Clean your mobile devices regularly as they accumulate a high amount of bacteria.",
        "If you work a desk job, stand up and walk around for 5 minutes every hour.",
        "Put away mobile screens at least one hour before bed to prepare your brain for sleep.",
        "Eat slowly and chew your food thoroughly to avoid bloating and indigestion.",
        "Choose nuts and dried fruits for snacks instead of chips and processed biscuits.",
        "Take a slow 10-minute walk after meals to aid digestion.",
        "Cover your nose and mouth in cold weather to protect your airways from infection.",
        "Eating fish at least once a week provides Omega-3 fatty acids essential for the brain."
    ],
    ar: [
        "اشرب الكثير من الماء لترطيب بشرتك وحماية كليتيك من تشكل الحصى.",
        "امشِ بنشاط لمدة 30 دقيقة على الأقل يومياً للحفاظ على صحة القلب والدورة الدموية.",
        "النوم لـ 7-8 ساعات ليلاً يساعد في تعزيز قدرات الدماغ وتقوية جهاز المناعة.",
        "تجنب السكريات الاصطناعية والحلويات للوقاية من السمنة وتقليل خطر الإصابة بالسكري.",
        "تناول الخضروات الطازجة يومياً يوفر الفيتامينات والمعادن الضرورية للمناعة.",
        "تقليل كمية الملح في وجباتك يساعد في الحفاظ على ضغط دم مستقر.",
        "غسل اليدين جيداً بالماء والصابون لمدة 20 ثانية هو المفتاح للوقاية من الأمراض.",
        "اتبع قاعدة 20-20-20: كل 20 دقيقة، انظر لشيء يبعد 20 قدماً لمدة 20 ثانية.",
        "نظف أسنانك مرتين يومياً واستخدم خيط الأسنان للوقاية من التسوس وأمراض اللثة.",
        "تمارين التنفس العميق تساعد في تقليل التوتر وتنظيم ضربات القلب.",
        "لا تهمل وجبة الإفطار أبداً؛ فهي توفر الطاقة اللازمة لبدء يومك بنشاط.",
        "تجنب الأطعمة المصنعة والمعلبة لاحتوائها على نسب عالية من المواد الحافظة.",
        "ضع واقي الشمس في الصيف لحماية بشرتك من الأشعة فوق البنفسجية الضارة.",
        "حافظ على استقامة ظهرك أثناء الجلوس أمام الكمبيوتر لتجنب آلام الرقبة والظهر.",
        "حاول استخدام السلالم بدلاً من المصعد لحرق المزيد من السعرات الحرارية يومياً.",
        "اقرأ ملصق المكونات قبل شراء المواد الغذائية لمراقبة مستويات الدهون والسكريات.",
        "التواصل الاجتماعي والحديث مع الأحباء يحسن الصحة النفسية بشكل كبير.",
        "تجنب التدخين والأركيلة؛ فهما المسببان الرئيسيان لأمراض الرئة والسرطان.",
        "تجنب الكافيين بعد الساعة 6 مساءً لضمان نوم هادئ وعميق.",
        "أجرِ فحصاً سنوياً عاماً لمراقبة صحتك واكتشاف أي مشكلة قبل تفاقمها.",
        "شرب الشاي الأخضر يسرع عملية التمثيل الغذائي ويحمي الخلايا بمضادات الأكسدة.",
        "الأطعمة الغنية بالألياف، مثل الحبوب الكاملة والفواكه، تحافظ على صحة الجهاز الهضمي.",
        "تناول الدهون الصحية مثل زيت الزيتون، الجوز، والأفوكادو لدعم صحة القلب.",
        "لتقوية عظامك، تناول الأطعمة الغنية بالكالسيوم وفيتامين D مثل الحليب والزبادي.",
        "استمع لجسدك؛ خذ قسطاً من الراحة عندما تشعر بالإرهاق ولا تضغط على نفسك.",
        "اشرب الماء على فترات أثناء ممارسة الرياضة لتجنب الجفاف.",
        "احفظ أدويتك في مكان بارد وجاف بعيداً عن متناول الأطفال.",
        "نظف أجهزتك المحمولة بانتظام لأنها تتراكم عليها كميات كبيرة من البكتيريا.",
        "إذا كان عملك مكتبياً، اقف وامشِ لمدة 5 دقائق كل ساعة.",
        "ابتعد عن شاشات الهاتف قبل النوم بساعة على الأقل لتهيئة دماغك للنوم.",
        "تناول طعامك ببطء وامضغه جيداً لتجنب الانتفاخ وعسر الهضم.",
        "اختر المكسرات والفواكه المجففة كوجبات خفيفة بدلاً من الرقائق والبسكويت.",
        "امشِ لمدة 10 دقائق ببطء بعد الوجبات للمساعدة في عملية الهضم.",
        "غطّ أنفك وفمك في الطقس البارد لحماية مجاريك التنفسية من الالتهاب.",
        "تناول السمك مرة واحدة على الأقل أسبوعياً يوفر أحماض أوميغا-3 الضرورية للدماغ."
    ]
};


