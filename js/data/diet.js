const dietData = [
    { 
        id: 2001, 
        ku: { 
            title: "ڕێجیمی کیتۆ (Keto Diet)", 
            desc: "ڕێجیمێکە پشت بە چەوری زۆر و کاربۆهیدراتی زۆر کەم دەبەستێت، وا لە جەستە دەکات چەوری بسوتێنێت لەبری شەکر.", 
            benefit: "کێش بە خێرایی دادەبەزێنێت، وزە زیاد دەکات و شەکری خوێن ڕێکدەخات.", 
            warning: "لە سەرەتادا لەوانەیە تووشی بێهێزی یان (کیتۆ فلو) بیت. بۆ کەسانی تووشبوو بە نەخۆشی جگەر یان پەنکریاس گونجاو نییە.", 
            tips: ["ئاو زۆر بخۆرەوە", "خوێی پێویست بەکاربهێنە بۆ قەرەبووکردنەوەی کانزاکان"], 
            foods: ["گۆشت", "هێلکە", "ئەڤۆکادۆ", "چەرەسات", "پەنیر"],
            harm: "ئەگەر بە هەڵە بکرێت دەبێتە هۆی بەرزبوونەوەی کۆلیسترۆڵی خراپ."
        }, 
        en: { 
            title: "Keto Diet", 
            desc: "A high-fat, very low-carb diet that forces the body to burn fat instead of glucose.", 
            benefit: "Rapid weight loss, increased energy, and blood sugar regulation.", 
            warning: "May cause 'keto flu' initially. Not suitable for liver or pancreas conditions.", 
            tips: ["Drink plenty of water", "Consume enough salt to replenish electrolytes"], 
            foods: ["Meat", "Eggs", "Avocado", "Nuts", "Cheese"],
            harm: "May increase bad cholesterol if done incorrectly."
        }, 
        ar: { 
            title: "رجيم الكيتو (Keto)", 
            desc: "نظام يعتمد على نسبة عالية من الدهون وقليلة جداً من الكربوهيدرات، مما يجبر الجسم على حرق الدهون.", 
            benefit: "إنقاص الوزن بسرعة، زيادة الطاقة وتنظيم سكر الدم.", 
            warning: "قد يسبب 'إنفلونزا الكيتو' في البداية. غير مناسب لمرضى الكبد أو البنكرياس.", 
            tips: ["اشرب الكثير من الماء", "استهلك كمية كافية من الملح لتعويض المعادن"], 
            foods: ["اللحوم", "البيض", "الأفوكادو", "المكسرات", "الجبن"],
            harm: "قد يزيد الكوليسترول الضار إذا تم تطبيقه بشكل خاطئ."
        } 
    },
    { 
        id: 2002, 
        ku: { 
            title: "ڕۆژووی پچڕپچڕ (Intermittent Fasting)", 
            desc: "شێوازێکی نانخواردنە کە تێیدا کاتەکانی ڕۆژ دابەش دەکرێت بۆ کاتی نانخواردن و کاتی بەڕۆژووبوون (وەک 16 کاتژمێر ڕۆژوو و 8 کاتژمێر نانخواردن).", 
            benefit: "میتابۆلیزم خێرا دەکات، هەوکردن کەم دەکاتەوە و خانەکان نوێ دەکاتەوە.", 
            warning: "بۆ ئافرەتی دووگیان و کەسانی تووشبوو بە دابەزینی شەکری خوێن گونجاو نییە.", 
            tips: ["لە کاتی ڕۆژووەکەدا دەتوانیت ئاو، چا و قاوەی تاڵ بخۆیتەوە بەبێ شەکر"], 
            foods: ["هەموو خۆراکێکی تەندروست لە کاتی ڕێگەپێدراودا"],
            harm: "بێهێزی و برسیەتی زۆر لە سەرەتادا."
        }, 
        en: { 
            title: "Intermittent Fasting", 
            desc: "An eating pattern that cycles between periods of fasting and eating (e.g., 16 hours fasting, 8 hours eating).", 
            benefit: "Boosts metabolism, reduces inflammation, and promotes cellular repair.", 
            warning: "Not suitable for pregnant women or those with hypoglycemia.", 
            tips: ["During fasting, you can drink water, black tea, and black coffee"], 
            foods: ["Any healthy food during the eating window"],
            harm: "Initial fatigue and intense hunger."
        }, 
        ar: { 
            title: "الصيام المتقطع", 
            desc: "نمط أكل يتبادل بين فترات الصيام والأكل (مثل صيام 16 ساعة وأكل 8 ساعات).", 
            benefit: "يسرع الأيض، يقلل الالتهابات ويجدد الخلايا.", 
            warning: "غير مناسب للحوامل أو من يعانون من هبوط السكر.", 
            tips: ["خلال الصيام يمكنك شرب الماء، الشاي والقهوة السوداء بدون سكر"], 
            foods: ["أي طعام صحي خلال فترة الأكل"],
            harm: "التعب والجوع الشديد في البداية."
        } 
    },
    { 
        id: 2003, 
        ku: { 
            title: "ڕێجیمی دەریای ناوەڕاست (Mediterranean Diet)", 
            desc: "ڕێجیمێکە لەسەر بنەمای خۆراکی وڵاتانی دەوروبەری دەریای ناوەڕاست، پشت بە سەوزە، میوە، زەیتی زەیتوون و ماسی دەبەستێت.", 
            benefit: "تەندروستی دڵ دەپارێزێت و تەمەن درێژ دەکات.", 
            warning: "هیچ مەترسییەکی گەورەی نییە و یەکێکە لە سەلامەتترین ڕێجیمەکان.", 
            tips: ["گۆشتی سوور تەنها مانگی چەند جارێک بخۆ", "زەیتی زەیتوون سەرچاوەی سەرەکی چەورییە"], 
            foods: ["ماسی", "زەیتی زەیتوون", "سەوزە", "دانەوێڵەی تەواو", "چەرەسات"],
            harm: "کێشەکان کەمترن بەڵام پێویستی بە پابەندبوونە."
        }, 
        en: { 
            title: "Mediterranean Diet", 
            desc: "Based on the traditional foods of countries bordering the Mediterranean Sea, focusing on veg, fruits, olive oil, and fish.", 
            benefit: "Protects heart health and promotes longevity.", 
            warning: "Very few risks; one of the safest diets.", 
            tips: ["Limit red meat to a few times a month", "Olive oil should be the primary fat source"], 
            foods: ["Fish", "Olive Oil", "Vegetables", "Whole Grains", "Nuts"],
            harm: "Very few downsides, but requires commitment to fresh foods."
        }, 
        ar: { 
            title: "حمية البحر الأبيض المتوسط", 
            desc: "يعتمد على الأطعمة التقليدية لدول البحر المتوسط، ويركز على الخضار، الفواكه، زيت الزيتون، والأسماك.", 
            benefit: "يحمي صحة القلب ويعزز طول العمر.", 
            warning: "لا توجد مخاطر كبيرة؛ من أكثر الأنظمة أماناً.", 
            tips: ["تناول اللحم الأحمر بضع مرات في الشهر فقط", "زيت الزيتون هو المصدر الرئيسي للدهون"], 
            foods: ["الأسماك", "زيت الزيتون", "الخضروات", "الحبوب الكاملة", "المكسرات"],
            harm: "لا توجد أضرار تذكر، لكنه يحتاج للالتزام."
        } 
    },
    { 
        id: 2004, 
        ku: { 
            title: "ڕێجیمی دابەزاندنی کاربۆهیدرات (Low-Carb Diet)", 
            desc: "کەمکردنەوەی ڕێژەی خواردنی کاربۆهیدرات (وەک برنج و نان) و زیادکردنی پڕۆتین و چەوری.", 
            benefit: "یارمەتی دابەزاندنی کێش دەدات بەبێ ئەوەی هەست بە برسیەتی بکەیت.", 
            warning: "لەوانەیە سەرەتا ببێتە هۆی قەبزی.", 
            tips: ["سەوزەی زۆر بخۆ بۆ قەرەبووی ڕیشاڵ", "دووربکەوەرەوە لە شەکرەکان"], 
            foods: ["گۆشت", "مریشک", "ماسی", "سەوزەی گەڵادار", "هێلکە"],
            harm: "ئەگەر سەوزە نەخورێت دەبێتە هۆی کەمبوونەوەی ڤیتامینەکان."
        }, 
        en: { 
            title: "Low-Carb Diet", 
            desc: "Reducing carbohydrate intake (like rice and bread) and increasing protein and fat.", 
            benefit: "Helps lose weight without feeling hungry.", 
            warning: "May cause constipation initially.", 
            tips: ["Eat plenty of vegetables for fiber", "Avoid all forms of sugar"], 
            foods: ["Meat", "Chicken", "Fish", "Leafy Greens", "Eggs"],
            harm: "Lack of vitamins if vegetables are skipped."
        }, 
        ar: { 
            title: "رجيم قليل الكربوهيدرات (Low-Carb)", 
            desc: "تقليل تناول الكربوهيدرات (كالأرز والخبز) وزيادة البروتين والدهون.", 
            benefit: "يساعد في إنقاص الوزن دون الشعور بالجوع.", 
            warning: "قد يسبب الإمساك في البداية.", 
            tips: ["تناول الكثير من الخضار لتعويض الألياف", "تجنب السكريات تماماً"], 
            foods: ["اللحوم", "الدجاج", "الأسماك", "الخضروات الورقية", "البيض"],
            harm: "نقص الفيتامينات إذا لم يتم تناول الخضار."
        } 
    },
    {
        id: 2005,
        ku: {
            title: "ڕێجیمی ڕووەکی (Vegan Diet)",
            desc: "دوورکەوتنەوە لە هەموو بەرهەمێکی ئاژەڵی، بە گۆشت و شیرەمەنی و هێلکەشەوە.",
            benefit: "باشە بۆ دڵ و ژینگە، ڕێژەی کۆلیسترۆڵ زۆر دادەبەزێنێت.",
            warning: "مەترسی کەمی ڤیتامین B12 و ئاسن و پرۆتینی هەیە.",
            tips: ["پێویستە تەواوکەری ڤیتامین B12 بخۆیت", "سەرچاوەی پرۆتینی ڕووەکی وەک نیسک و پاقلە زۆر بخۆ"],
            foods: ["پاقلەمەنییەکان", "چەرەسات", "سەوزە", "میوە", "تۆوەکان"],
            harm: "کەمی هەندێک ڤیتامینی گرنگ کە تەنها لە ئاژەڵدا هەن."
        },
        en: {
            title: "Vegan Diet",
            desc: "Excludes all animal products, including meat, dairy, and eggs.",
            benefit: "Good for the heart and environment, drastically lowers cholesterol.",
            warning: "Risk of Vitamin B12, iron, and protein deficiency.",
            tips: ["You must take a Vitamin B12 supplement", "Eat plenty of plant-based proteins like lentils"],
            foods: ["Legumes", "Nuts", "Vegetables", "Fruits", "Seeds"],
            harm: "Deficiency in essential vitamins found only in animal products."
        },
        ar: {
            title: "النظام النباتي الصرف (Vegan)",
            desc: "الامتناع عن جميع المنتجات الحيوانية بما فيها اللحوم، الألبان، والبيض.",
            benefit: "مفيد للقلب والبيئة، ويخفض الكوليسترول بشكل كبير.",
            warning: "خطر نقص فيتامين B12، الحديد، والبروتين.",
            tips: ["يجب تناول مكملات فيتامين B12", "الاعتماد على البروتين النباتي كالعدس والفول"],
            foods: ["البقوليات", "المكسرات", "الخضروات", "الفواكه", "البذور"],
            harm: "نقص بعض الفيتامينات المهمة الموجودة فقط في المنتجات الحيوانية."
        }
    },
    {
        id: 2006,
        ku: {
            title: "ڕێجیمی دێش (DASH Diet)",
            desc: "تایبەت کراوە بۆ کەسانی تووشبوو بە بەرزی پەستانی خوێن (زەخت). سەرنج دەخاتە سەر کەمکردنەوەی خوێ.",
            benefit: "پەستانی خوێن ئاسایی دەکاتەوە و مەترسی جەڵتە کەم دەکاتەوە.",
            warning: "زۆر کەمکردنەوەی خوێ لە هەندێک کەسدا لەوانەیە بێهێزی دروست بکات.",
            tips: ["خوێ لە ژەمەکانتدا زۆر کەم بکەرەوە", "خۆراکی دەوڵەمەند بە پۆتاسیۆم بخۆ"],
            foods: ["سەوزە", "میوە", "دانەوێڵەی تەواو", "شیرەمەنی کەم چەوری", "مریشک"],
            harm: "هیچ زیانێکی ئەوتۆی نییە گەر بە دروستی جێبەجێ بکرێت."
        },
        en: {
            title: "DASH Diet",
            desc: "Designed specifically for people with high blood pressure. Focuses on reducing sodium.",
            benefit: "Normalizes blood pressure and reduces stroke risk.",
            warning: "Extreme salt restriction can cause weakness in some.",
            tips: ["Severely limit salt in your meals", "Eat potassium-rich foods"],
            foods: ["Vegetables", "Fruits", "Whole Grains", "Low-fat Dairy", "Chicken"],
            harm: "No significant harm if done correctly."
        },
        ar: {
            title: "حمية داش (DASH)",
            desc: "مصمم خصيصاً لمرضى ارتفاع ضغط الدم. يركز على تقليل الصوديوم (الملح).",
            benefit: "يعيد ضغط الدم لطبيعته ويقلل خطر السكتات.",
            warning: "التقليل الشديد للملح قد يسبب الضعف للبعض.",
            tips: ["قلل الملح في وجباتك بشكل كبير", "تناول الأطعمة الغنية بالبوتاسيوم"],
            foods: ["الخضار", "الفواكه", "الحبوب الكاملة", "الألبان قليلة الدسم", "الدجاج"],
            harm: "لا توجد أضرار كبيرة إذا تم التطبيق بشكل صحيح."
        }
    },
    {
        id: 2007,
        ku: {
            title: "ڕێجیمی پالئۆ (Paleo Diet)",
            desc: "پشت بەو خۆراکانە دەبەستێت کە مرۆڤی سەرەتایی خواردیەتی، وەک گۆشت و میوە و سەوزە، و دوورکەوتنەوە لە دانەوێڵە و شیرەمەنی.",
            benefit: "یارمەتی دابەزاندنی کێش و باشترکردنی شەکری خوێن دەدات.",
            warning: "کەمی کالسیۆم و ڤیتامین D بەهۆی نەخواردنی شیرەمەنییەکانەوە.",
            tips: ["گۆشتی بێ چەوری و ماسی بخۆ", "دووربکەوەرەوە لە هەموو جۆرە شەکرێکی دەستکرد"],
            foods: ["گۆشت", "ماسی", "سەوزە", "میوە", "چەرەسات"],
            harm: "ڕەنگە ببێتە هۆی کەمبوونەوەی وزە لە سەرەتادا بەهۆی نەبوونی کاربۆهیدرات."
        },
        en: {
            title: "Paleo Diet",
            desc: "Focuses on foods early humans ate, like meat, fruits, and veggies, avoiding grains and dairy.",
            benefit: "Helps with weight loss and improves blood sugar levels.",
            warning: "Risk of calcium and vitamin D deficiency due to lack of dairy.",
            tips: ["Eat lean meat and fish", "Avoid all artificial sugars"],
            foods: ["Meat", "Fish", "Vegetables", "Fruits", "Nuts"],
            harm: "May cause low energy initially due to lack of carbs."
        },
        ar: {
            title: "حمية باليو (Paleo)",
            desc: "تعتمد على الأطعمة التي أكلها الإنسان البدائي، كاللحوم والفواكه والخضار، مع تجنب الحبوب والألبان.",
            benefit: "تساعد في فقدان الوزن وتحسين سكر الدم.",
            warning: "نقص الكالسيوم وفيتامين D بسبب عدم تناول الألبان.",
            tips: ["تناول اللحوم الخالية من الدهون والأسماك", "تجنب جميع السكريات الصناعية"],
            foods: ["اللحوم", "الأسماك", "الخضروات", "الفواكه", "المكسرات"],
            harm: "قد تسبب انخفاض الطاقة في البداية بسبب نقص الكربوهيدرات."
        }
    },
    {
        id: 2008,
        ku: {
            title: "ڕێجیمی گۆشتخۆری (Carnivore Diet)",
            desc: "تەنها پشت بە خواردنی گۆشت و بەرهەمە ئاژەڵییەکان دەبەستێت، بەبێ هیچ جۆرە کاربۆهیدرات یان سەوزەیەک.",
            benefit: "دابەزینی زۆری کێش و کەمکردنەوەی هەوکردن بۆ هەندێک کەس.",
            warning: "مەترسی زۆرە بۆ نەخۆشییەکانی دڵ و کەمی ڕیشاڵ و ڤیتامین C.",
            tips: ["دڵنیابە لە خواردنی ئەندامەکانی ناوەوەی ئاژەڵ (وەک جەرگ) بۆ ڤیتامین", "ئاو زۆر بخۆرەوە"],
            foods: ["گۆشتی سوور", "مریشک", "ماسی", "هێلکە", "بەز و چەوری ئاژەڵ"],
            harm: "کەمی ڕیشاڵ دەبێتە هۆی قەبزی زۆر، و مەترسی بۆ سەر گورچیلە هەیە."
        },
        en: {
            title: "Carnivore Diet",
            desc: "Strictly relies on eating meat and animal products, with zero carbs or vegetables.",
            benefit: "Extreme weight loss and reduced inflammation for some.",
            warning: "High risk of heart disease and lack of fiber and Vitamin C.",
            tips: ["Make sure to eat organ meats (like liver) for vitamins", "Drink plenty of water"],
            foods: ["Red Meat", "Chicken", "Fish", "Eggs", "Animal Fat"],
            harm: "Lack of fiber causes severe constipation, and it puts stress on kidneys."
        },
        ar: {
            title: "حمية آكل اللحوم (Carnivore)",
            desc: "تعتمد كلياً على تناول اللحوم والمنتجات الحيوانية، بدون كربوهيدرات أو خضروات.",
            benefit: "فقدان وزن كبير وتقليل الالتهابات لبعض الأشخاص.",
            warning: "خطر كبير لأمراض القلب ونقص الألياف وفيتامين C.",
            tips: ["تأكد من تناول لحوم الأعضاء (كالكبد) للفيتامينات", "اشرب الكثير من الماء"],
            foods: ["اللحم الأحمر", "الدجاج", "الأسماك", "البيض", "الشحم الحيواني"],
            harm: "نقص الألياف يسبب إمساكاً شديداً، ويشكل ضغطاً على الكلى."
        }
    },
    {
        id: 2009,
        ku: {
            title: "ڕێجیمی ڤێجێتێریان (Vegetarian Diet)",
            desc: "دوورکەوتنەوە لە گۆشت، بەڵام ڕێگە بە خواردنی هێلکە و شیرەمەنییەکان دەدات.",
            benefit: "مەترسی نەخۆشییەکانی دڵ و شەکرە کەم دەکاتەوە.",
            warning: "پێویستە دڵنیا بیت لە وەرگرتنی پڕۆتینی تەواو لە ڕووەکەوە.",
            tips: ["نیسک و فاسۆلیا زۆر بخۆ", "خواردنی هێلکە باشترین سەرچاوەی پڕۆتینە بۆت"],
            foods: ["سەوزە", "میوە", "شیرەمەنی", "هێلکە", "پاقلەمەنی"],
            harm: "لەوانەیە ببێتە هۆی کەمخوێنی ئەگەر ئاسن بە باشی وەرنەگیرێت."
        },
        en: {
            title: "Vegetarian Diet",
            desc: "Avoids meat but allows eating eggs and dairy products.",
            benefit: "Reduces risk of heart disease and diabetes.",
            warning: "Must ensure adequate protein intake from plants.",
            tips: ["Eat plenty of lentils and beans", "Eggs are your best protein source"],
            foods: ["Vegetables", "Fruits", "Dairy", "Eggs", "Legumes"],
            harm: "May cause anemia if iron intake is insufficient."
        },
        ar: {
            title: "النظام النباتي المرن (Vegetarian)",
            desc: "الامتناع عن اللحوم، لكن يسمح بتناول البيض ومنتجات الألبان.",
            benefit: "يقلل من خطر أمراض القلب والسكري.",
            warning: "يجب التأكد من الحصول على بروتين كافٍ من النباتات.",
            tips: ["تناول العدس والفاصوليا بكثرة", "البيض هو أفضل مصدر للبروتين لك"],
            foods: ["الخضروات", "الفواكه", "الألبان", "البيض", "البقوليات"],
            harm: "قد يسبب فقر الدم إذا لم يتم تناول كمية كافية من الحديد."
        }
    },
    {
        id: 2010,
        ku: {
            title: "ڕێجیمی دوکان (Dukan Diet)",
            desc: "ڕێجیمێکی چوار قۆناغییە کە پشت بە پڕۆتینی زۆر و کاربۆهیدراتی کەم دەبەستێت، هەنگاو بە هەنگاو خۆراکەکان زیاد دەکاتەوە.",
            benefit: "کێش بە خێرایی لە قۆناغی یەکەمدا دادەبەزێت.",
            warning: "خواردنی پڕۆتینی زۆر فشار دەخاتە سەر گورچیلە.",
            tips: ["لە قۆناغی یەکەمدا ئاو زۆر بخۆرەوە", "ڕۆژانە ڕێپێدان بە ڕۆیشتن بکە"],
            foods: ["گۆشتی بێ چەوری", "هێلکە", "شیرەمەنی بێ چەوری", "کەپەکی شۆڤان"],
            harm: "بێهێزی و سەرگێژخواردن لە سەرەتادا باوە."
        },
        en: {
            title: "Dukan Diet",
            desc: "A 4-phase diet relying on high protein and low carbs, gradually reintroducing foods.",
            benefit: "Rapid weight loss in the first phase.",
            warning: "High protein puts stress on kidneys.",
            tips: ["Drink plenty of water in phase one", "Commit to daily walking"],
            foods: ["Lean meat", "Eggs", "Fat-free dairy", "Oat bran"],
            harm: "Weakness and dizziness are common initially."
        },
        ar: {
            title: "حمية دوكان (Dukan)",
            desc: "نظام من 4 مراحل يعتمد على بروتين عالٍ وكربوهيدرات منخفضة، مع إعادة إدخال الأطعمة تدريجياً.",
            benefit: "فقدان وزن سريع في المرحلة الأولى.",
            warning: "البروتين العالي يجهد الكلى.",
            tips: ["اشرب الكثير من الماء في المرحلة الأولى", "التزم بالمشي يومياً"],
            foods: ["اللحم الخالي من الدهون", "البيض", "الألبان خالية الدسم", "نخالة الشوفان"],
            harm: "الضعف والدوخة شائعان في البداية."
        }
    },
    {
        id: 2011,
        ku: {
            title: "ڕێجیمی ئاتکینز (Atkins Diet)",
            desc: "پشت بە کەمکردنەوەی کاربۆهیدرات دەبەستێت بەڵام ڕێگە بە خواردنی پڕۆتین و چەوری دەدات بە خواستی خۆت.",
            benefit: "کێش بە خێرایی دادەبەزێنێت بەبێ برسیەتی.",
            warning: "بەرزبوونەوەی کۆلیسترۆڵ گەر چەوری ناتەندروست بخورێت.",
            tips: ["سەوزەی زۆر بخۆ بۆ ڕێگریکردن لە قەبزی", "دووربکەوەرەوە لە چەوری گۆڕاو"],
            foods: ["گۆشت", "پەنیر", "هێلکە", "زەیتە سروشتییەکان"],
            harm: "ڕەنگە ببێتە هۆی کێشەی دڵ ئەگەر چەوری خراپ زۆر بخورێت."
        },
        en: {
            title: "Atkins Diet",
            desc: "Focuses on reducing carbs but allows eating protein and fat as desired.",
            benefit: "Rapid weight loss without starvation.",
            warning: "Cholesterol may rise if unhealthy fats are consumed.",
            tips: ["Eat plenty of veggies to prevent constipation", "Avoid trans fats"],
            foods: ["Meat", "Cheese", "Eggs", "Natural oils"],
            harm: "May cause heart issues if bad fats are overconsumed."
        },
        ar: {
            title: "حمية أتكينز (Atkins)",
            desc: "تركز على تقليل الكربوهيدرات لكنها تسمح بتناول البروتين والدهون حسب الرغبة.",
            benefit: "فقدان الوزن بسرعة دون جوع.",
            warning: "قد يرتفع الكوليسترول إذا تم تناول دهون غير صحية.",
            tips: ["تناول الكثير من الخضار لمنع الإمساك", "تجنب الدهون المتحولة"],
            foods: ["اللحوم", "الجبن", "البيض", "الزيوت الطبيعية"],
            harm: "قد يسبب مشاكل في القلب إذا تم تناول الكثير من الدهون السيئة."
        }
    },
    {
        id: 2012,
        ku: {
            title: "ڕێجیمی مایند (MIND Diet)",
            desc: "تێکەڵەیەکە لە ڕێجیمی دەریای ناوەڕاست و دێش، بەتایبەتی بۆ پاراستنی مێشک و ڕێگریکردن لە زەهایمەر دروستکراوە.",
            benefit: "مێشک بەهێز دەکات و یادەوەری دەپارێزێت.",
            warning: "خێرا نییە بۆ دابەزاندنی کێش، زیاتر بۆ تەندروستییە.",
            tips: ["ڕۆژانە سەوزەی گەڵادار بخۆ", "دووربکەوەرەوە لە پەنیر و کەرەی دەستکرد"],
            foods: ["تووتڕک", "چەرەسات", "سەوزە", "ماسی", "زەیتی زەیتوون"],
            harm: "هیچ زیانێکی دیاریکراوی نییە."
        },
        en: {
            title: "MIND Diet",
            desc: "A mix of Mediterranean and DASH diets, specifically created to protect the brain and prevent Alzheimer's.",
            benefit: "Strengthens the brain and preserves memory.",
            warning: "Not meant for rapid weight loss, mainly for health.",
            tips: ["Eat leafy greens daily", "Avoid processed cheese and butter"],
            foods: ["Berries", "Nuts", "Vegetables", "Fish", "Olive Oil"],
            harm: "No specific downsides."
        },
        ar: {
            title: "حمية مايند (MIND)",
            desc: "مزيج بين حمية البحر المتوسط وداش، مصمم خصيصاً لحماية الدماغ والوقاية من ألزهايمر.",
            benefit: "يقوي الدماغ ويحافظ على الذاكرة.",
            warning: "ليس سريعاً لفقدان الوزن، بل يركز على الصحة.",
            tips: ["تناول الخضار الورقية يومياً", "تجنب الجبن المعالج والزبدة"],
            foods: ["التوت", "المكسرات", "الخضروات", "الأسماك", "زيت الزيتون"],
            harm: "لا توجد أضرار محددة."
        }
    },
    {
        id: 2013,
        ku: {
            title: "ڕێجیمی فلێکسیتیریان (Flexitarian)",
            desc: "ڕێجیمێکی ڕووەکی نەرمە، زۆربەی کات ڕووەک دەخۆیت بەڵام هەندێک جاریش ڕێگە بە خواردنی گۆشت دەدرێت.",
            benefit: "ئاسانە بۆ پابەندبوون و تەندروستی دڵ باشتر دەکات.",
            warning: "ئەگەر گۆشت زۆر کەم بکرێتەوە، دەبێت جێگرەوەی پڕۆتین بخورێت.",
            tips: ["هەفتەی دوو ڕۆژ تەرخان بکە بۆ گۆشت", "سەوزە با بەشی سەرەکی قاپەکەت بێت"],
            foods: ["سەوزە", "دانەوێڵە", "پاقلەمەنی", "هەندێکجار گۆشت"],
            harm: "کەمی ئاسن ئەگەر ڕێژەی گۆشت زۆر کەم بێت."
        },
        en: {
            title: "Flexitarian Diet",
            desc: "A flexible vegetarian diet, mostly eating plants but occasionally allowing meat.",
            benefit: "Easy to stick to and improves heart health.",
            warning: "If meat is heavily reduced, protein substitutes are needed.",
            tips: ["Dedicate only two days a week to meat", "Make veggies the main part of your plate"],
            foods: ["Vegetables", "Grains", "Legumes", "Occasional meat"],
            harm: "Iron deficiency if meat intake is too low."
        },
        ar: {
            title: "الحمية المرنة (Flexitarian)",
            desc: "حمية نباتية مرنة، تعتمد غالباً على النباتات ولكن تسمح بتناول اللحوم أحياناً.",
            benefit: "سهلة الالتزام وتحسن صحة القلب.",
            warning: "إذا تم تقليل اللحوم كثيراً، يجب تناول بدائل البروتين.",
            tips: ["خصص يومين في الأسبوع فقط للحوم", "اجعل الخضار الجزء الأساسي من طبقك"],
            foods: ["الخضروات", "الحبوب", "البقوليات", "لحوم أحياناً"],
            harm: "نقص الحديد إذا كان استهلاك اللحوم منخفضاً جداً."
        }
    },
    {
        id: 2014,
        ku: {
            title: "ڕێجیمی قەبارە (Volumetrics)",
            desc: "بیرۆکەی ئەم ڕێجیمە ئەوەیە خۆراکی زۆر بخۆیت کە کالۆری کەمیان تێدایە (وەک شۆربا و سەوزە) بۆ ئەوەی زوو تێر ببیت.",
            benefit: "هەست بە برسیەتی ناکەیت و کێش دادەبەزێنێت.",
            warning: "پێویستە خۆراکەکان بە باشی هەڵبژێریت.",
            tips: ["ژەمەکانت بە شۆربایەک دەست پێ بکە", "میوە کە کالۆری کەمە زۆر بخۆ"],
            foods: ["شۆربای ئاو", "سەوزەی ئاوی وەک خەیار", "میوە", "شیرەمەنی کەم چەوری"],
            harm: "لەوانەیە کێشەی هەرس دروست بکات بەهۆی ڕیشاڵی زۆرەوە."
        },
        en: {
            title: "Volumetrics Diet",
            desc: "The idea is to eat a large volume of low-calorie foods (like soups and veggies) to feel full quickly.",
            benefit: "No feeling of hunger while losing weight.",
            warning: "Must choose foods carefully to get enough nutrients.",
            tips: ["Start your meals with soup", "Eat plenty of low-calorie fruits"],
            foods: ["Broth soups", "Water-rich veggies like cucumber", "Fruits", "Low-fat dairy"],
            harm: "May cause digestive issues due to excess fiber."
        },
        ar: {
            title: "حمية الحجم (Volumetrics)",
            desc: "الفكرة هي تناول كمية كبيرة من الأطعمة منخفضة السعرات (كالشوربة والخضار) للشعور بالشبع بسرعة.",
            benefit: "عدم الشعور بالجوع مع فقدان الوزن.",
            warning: "يجب اختيار الأطعمة بعناية للحصول على الغذاء الكافي.",
            tips: ["ابدأ وجباتك بالشوربة", "تناول الكثير من الفواكه قليلة السعرات"],
            foods: ["الشوربات المائية", "خضار غنية بالماء كالخيار", "الفواكه", "ألبان قليلة الدسم"],
            harm: "قد تسبب مشاكل هضمية بسبب الألياف الزائدة."
        }
    },
    {
        id: 2015,
        ku: {
            title: "هۆڵ ٣٠ (Whole30)",
            desc: "بەرنامەیەکی توندی ٣٠ ڕۆژییە، کە تێیدا شەکر، کهول، دانەوێڵە، پاقلەمەنی و شیرەمەنی قەدەغەیە.",
            benefit: "هەوکردنی جەستە کەم دەکاتەوە و واز لە ئاڵوودەبوونی شەکر دەهێنێت.",
            warning: "زۆر قورسە و نابێت لە ٣٠ ڕۆژ زیاتر بەردەوام بێت.",
            tips: ["تەنها خۆراکی سروشتی و فرێش بخۆ", "دوای ٣٠ ڕۆژەکە، خواردنەکان یەک یەک تاقی بکەرەوە"],
            foods: ["گۆشت", "سەوزە", "میوە بە ڕێژەی کەم", "چەوری سروشتی"],
            harm: "قورسە و لەوانەیە دوای وازهێنان کێش خێرا بگەڕێتەوە."
        },
        en: {
            title: "Whole30 Diet",
            desc: "A strict 30-day program eliminating sugar, alcohol, grains, legumes, and dairy.",
            benefit: "Reduces inflammation and breaks sugar addiction.",
            warning: "Very restrictive; shouldn't be done for more than 30 days.",
            tips: ["Eat only fresh, natural foods", "Reintroduce foods one by one after 30 days"],
            foods: ["Meat", "Vegetables", "Moderate fruit", "Natural fats"],
            harm: "Difficult to sustain and weight may return quickly after stopping."
        },
        ar: {
            title: "حمية هول 30 (Whole30)",
            desc: "برنامج صارم لمدة 30 يوماً يمنع السكر، الكحول، الحبوب، البقوليات والألبان.",
            benefit: "يقلل الالتهابات ويكسر إدمان السكر.",
            warning: "صارم جداً ولا ينبغي الاستمرار فيه لأكثر من 30 يوماً.",
            tips: ["تناول الأطعمة الطبيعية والطازجة فقط", "أعد إدخال الأطعمة واحداً تلو الآخر بعد 30 يوماً"],
            foods: ["اللحوم", "الخضروات", "فواكه باعتدال", "دهون طبيعية"],
            harm: "صعب الاستمرار فيه وقد يعود الوزن بسرعة بعد التوقف."
        }
    },
    {
        id: 2016,
        ku: {
            title: "ڕێجیمی ساوس بیچ (South Beach)",
            desc: "سەرنج دەخاتە سەر کاربۆهیدراتی باش و چەوری تەندروست، بە سێ قۆناغی جیاوازدا تێدەپەڕێت.",
            benefit: "شەکری خوێن ڕێکدەخات و کێش بە خێرایی دادەبەزێنێت.",
            warning: "لە قۆناغی یەکەمدا هیچ میوەیەک ڕێگەپێدراو نییە.",
            tips: ["خواردنەوەی ئاو زۆر گرنگە", "گرنگی بە گۆشتی سپی بدە"],
            foods: ["مریشک", "ماسی", "هێلکە", "سەوزە", "چەرەسات"],
            harm: "بەهۆی نەبوونی کاربۆهیدرات سەرەتا ڕەنگە بێهێز ببیت."
        },
        en: {
            title: "South Beach Diet",
            desc: "Focuses on good carbs and healthy fats, progressing through three phases.",
            benefit: "Regulates blood sugar and causes rapid weight loss.",
            warning: "No fruits are allowed in the first phase.",
            tips: ["Drinking water is crucial", "Focus on white meat"],
            foods: ["Chicken", "Fish", "Eggs", "Vegetables", "Nuts"],
            harm: "Initial weakness due to carb restriction."
        },
        ar: {
            title: "حمية ساوث بيتش (South Beach)",
            desc: "تركز على الكربوهيدرات الجيدة والدهون الصحية، وتمر بثلاث مراحل.",
            benefit: "ينظم سكر الدم ويفقد الوزن بسرعة.",
            warning: "لا يسمح بأي فواكه في المرحلة الأولى.",
            tips: ["شرب الماء مهم جداً", "ركز على اللحوم البيضاء"],
            foods: ["الدجاج", "الأسماك", "البيض", "الخضروات", "المكسرات"],
            harm: "ضعف مبدئي بسبب تقييد الكربوهيدرات."
        }
    },
    {
        id: 2017,
        ku: {
            title: "چاودێریکردنی کێش (Weight Watchers - WW)",
            desc: "سیستمێکە پشت بە پێدانی خاڵ دەبەستێت بە خۆراکەکان. هەر کەسێک بڕێک خاڵی ڕۆژانەی هەیە و دەتوانێت هەرچی بیەوێت بیخوات گەر لە سنووری خاڵەکاندا بێت.",
            benefit: "هیچ خۆراکێک قەدەغە ناکات و ژیانێکی ئاسایی دەبەخشێت.",
            warning: "پێویستی بە ژماردنی خاڵەکان هەیە ڕۆژانە.",
            tips: ["خۆراکە فرێشەکان خاڵیان سفردە و زۆر بخۆ", "شیرینییەکان خاڵی زۆریان هەیە، لێیان دووربکەوەرەوە"],
            foods: ["هەموو خۆراکێک ڕێگەپێدراوە بەپێی خاڵەکان"],
            harm: "ڕەنگە هەندێک کەس تەنها شیرینی بخۆن و خاڵەکانیان بەوە تەواو بکەن کە ئەمەش ناتەندروستە."
        },
        en: {
            title: "Weight Watchers (WW)",
            desc: "A point-based system. Every food has a point value, and you can eat anything as long as it fits your daily points.",
            benefit: "Doesn't ban any foods and promotes a normal lifestyle.",
            warning: "Requires daily point tracking.",
            tips: ["Fresh foods have zero points, eat them freely", "Sweets have high points, avoid them"],
            foods: ["All foods allowed within your points limit"],
            harm: "Some people might spend their points entirely on junk food, which is unhealthy."
        },
        ar: {
            title: "مراقبة الوزن (WW)",
            desc: "نظام يعتمد على النقاط. لكل طعام نقطة، ويمكنك تناول أي شيء طالما كان ضمن نقاطك اليومية.",
            benefit: "لا يمنع أي أطعمة ويوفر نمط حياة طبيعي.",
            warning: "يتطلب تتبع النقاط يومياً.",
            tips: ["الأطعمة الطازجة نقاطها صفر، تناولها بحرية", "الحلويات نقاطها عالية، تجنبها"],
            foods: ["جميع الأطعمة مسموحة ضمن حدود النقاط"],
            harm: "قد ينفق البعض نقاطهم على الأطعمة السريعة فقط وهو أمر غير صحي."
        }
    },
    {
        id: 2018,
        ku: {
            title: "ڕێجیمی زۆن (Zone Diet)",
            desc: "ژەمەکان دابەش دەکات بۆ 40% کاربۆهیدرات، 30% پڕۆتین، و 30% چەوری بۆ کۆنتڕۆڵکردنی هەوکردن و دابەزاندنی کێش.",
            benefit: "هۆرمۆنەکان ڕێکدەخات و تەرکیز زیاد دەکات.",
            warning: "ژماردنی ڕێژەکان قورسە و کاتی دەوێت.",
            tips: ["پێویستە هەموو ژەمێک ئەم ڕێژەیەی تێدا بێت", "کاربۆهیدراتی خێرا (وەک نان) کەم بکەرەوە"],
            foods: ["سەوزە", "مریشک", "زەیتی زەیتوون", "شۆڤان", "میوە"],
            harm: "ڕەنگە بێزارکەر بێت بەهۆی پێویستی بە پێوانەکردنی ژەمەکان."
        },
        en: {
            title: "Zone Diet",
            desc: "Divides meals into 40% carbs, 30% protein, and 30% fat to control inflammation and lose weight.",
            benefit: "Regulates hormones and increases focus.",
            warning: "Calculating macros can be difficult and time-consuming.",
            tips: ["Every meal must have this ratio", "Reduce fast carbs like white bread"],
            foods: ["Vegetables", "Chicken", "Olive oil", "Oats", "Fruits"],
            harm: "Can be annoying due to the need to measure all meals."
        },
        ar: {
            title: "حمية زون (Zone)",
            desc: "تقسم الوجبات إلى 40% كربوهيدرات، 30% بروتين، و 30% دهون للسيطرة على الالتهابات وفقدان الوزن.",
            benefit: "ينظم الهرمونات ويزيد التركيز.",
            warning: "حساب النسب قد يكون صعباً ويستغرق وقتاً.",
            tips: ["يجب أن تحتوي كل وجبة على هذه النسبة", "قلل من الكربوهيدرات السريعة كالخبز"],
            foods: ["الخضروات", "الدجاج", "زيت الزيتون", "الشوفان", "الفواكه"],
            harm: "قد يكون مزعجاً بسبب الحاجة لقياس جميع الوجبات."
        }
    },
    {
        id: 2019,
        ku: {
            title: "ڕێجیمی مایۆ کلینیک (Mayo Clinic Diet)",
            desc: "ئەمە زیاتر شێوازێکی ژیانە نەک ڕێجیمێکی کاتی. تیشک دەخاتە سەر دروستکردنی خووی تەندروست و وازهێنان لە خووی خراپ.",
            benefit: "دابەزینی کێش بە شێوەیەکی تەندروست و نەگەڕانەوەی کێشەکە.",
            warning: "بۆ ئەوانە گونجاو نییە کە دەیانەوێت خێرا کێش دابەزێنن.",
            tips: ["خواردن لەکاتی سەیرکردنی تەلەفزیۆن قەدەغەیە", "ڕۆژانە ٣٠ خولەک وەرزش بکە"],
            foods: ["میوە", "سەوزە", "دانەوێڵە تەواوەکان", "پڕۆتینی بێ چەوری"],
            harm: "هیچ زیانێکی تەندروستی نییە."
        },
        en: {
            title: "Mayo Clinic Diet",
            desc: "More of a lifestyle than a temporary diet. Focuses on building healthy habits and breaking bad ones.",
            benefit: "Healthy weight loss and prevents gaining it back.",
            warning: "Not suitable for those wanting rapid weight loss.",
            tips: ["Eating while watching TV is forbidden", "Exercise for 30 minutes daily"],
            foods: ["Fruits", "Vegetables", "Whole grains", "Lean protein"],
            harm: "No health risks."
        },
        ar: {
            title: "حمية مايو كلينيك (Mayo Clinic)",
            desc: "هو أقرب لنمط حياة من كونه حمية مؤقتة. يركز على بناء عادات صحية وكسر العادات السيئة.",
            benefit: "فقدان وزن صحي ومنع عودته.",
            warning: "غير مناسب لمن يريد فقدان الوزن بسرعة.",
            tips: ["الأكل أثناء مشاهدة التلفاز ممنوع", "مارس الرياضة 30 دقيقة يومياً"],
            foods: ["الفواكه", "الخضروات", "الحبوب الكاملة", "بروتين خالي الدسم"],
            harm: "لا توجد مخاطر صحية."
        }
    },
    {
        id: 2020,
        ku: {
            title: "ڕێجیمی تی ئێڵ سی (TLC Diet)",
            desc: "بۆ کەمکردنەوەی کۆلیسترۆڵ دروستکراوە (Therapeutic Lifestyle Changes)، بەتەواوی چەورییە تێرەکان کەم دەکاتەوە.",
            benefit: "زۆرترین سوودی بۆ دڵ هەیە و کۆلیسترۆڵ زۆر بەخێرایی دادەبەزێنێت.",
            warning: "خواردنی گۆشتی سوور بەتەواوی قەدەغەیە.",
            tips: ["کەرە و چەوری ئاژەڵ مەخۆ", "زیاتر ماسی و مریشکی بێ پێست بخۆ"],
            foods: ["ماسی", "مریشک", "سەوزە", "دانەوێڵە", "زەیتی ڕووەکی"],
            harm: "هیچ زیانێکی نییە، یەکێکە لە باشترینەکان بۆ نەخۆشانی دڵ."
        },
        en: {
            title: "TLC Diet",
            desc: "Designed to lower cholesterol (Therapeutic Lifestyle Changes), completely reducing saturated fats.",
            benefit: "Highly beneficial for the heart and lowers cholesterol very quickly.",
            warning: "Eating red meat is heavily restricted.",
            tips: ["Do not eat butter or animal fats", "Eat more fish and skinless chicken"],
            foods: ["Fish", "Chicken", "Vegetables", "Grains", "Vegetable oils"],
            harm: "No downsides, one of the best for heart patients."
        },
        ar: {
            title: "حمية تغيير نمط الحياة (TLC)",
            desc: "مصممة لخفض الكوليسترول، وتقلل الدهون المشبعة تماماً.",
            benefit: "مفيدة جداً للقلب وتخفض الكوليسترول بسرعة.",
            warning: "تناول اللحوم الحمراء مقيد بشدة.",
            tips: ["لا تتناول الزبدة أو الدهون الحيوانية", "تناول المزيد من الأسماك والدجاج منزوع الجلد"],
            foods: ["الأسماك", "الدجاج", "الخضار", "الحبوب", "الزيوت النباتية"],
            harm: "لا توجد أضرار، من أفضل الأنظمة لمرضى القلب."
        }
    }
];
