const nutritionData = [
    { 
        id: 1001, 
        ku: { title: "پڕۆتین (Protein)", desc: "بناغەی دروستکردنی ماسولکە و پێست.", benefit: "بۆ چاکبوونەوەی خانەکان و گەشەی ماسولکە پێویستە.", warning: "زیادەڕۆیی تێیدا فشار دەخاتە سەر گورچیلە.", tips: ["دابەشکردنی بەسەر ژەمەکاندا"], foods: ["گۆشت", "هێلکە", "پاقلەمەنی"] }, 
        en: { title: "Protein", desc: "Building block for muscle and skin.", benefit: "Essential for cell repair and muscle growth.", warning: "Excessive intake stresses kidneys.", tips: ["Distribute throughout meals"], foods: ["Meat", "Eggs", "Legumes"] }, 
        ar: { title: "البروتين", desc: "حجر الأساس للعضلات والجلد.", benefit: "ضروري لإصلاح الخلايا ونمو العضلات.", warning: "الإفراط يجهد الكلى.", tips: ["توزيعه على الوجبات"], foods: ["اللحوم", "البيض", "البقوليات"] } 
    },
    { 
        id: 1002, 
        ku: { title: "کاربۆهیدرات (Carbohydrates)", desc: "سەرچاوەی سەرەکی وزە.", benefit: "وزە بۆ مێشک و چالاکی جەستەیی دابین دەکات.", warning: "کاربۆهیدراتی سادە (شەکر) کێش زیاد دەکات.", tips: ["هەڵبژاردنی جۆری ئاڵۆز وەک شۆڤان"], foods: ["برنج", "پەتاتە", "شۆڤان"] }, 
        en: { title: "Carbohydrates", desc: "Main energy source.", benefit: "Provides energy for brain and physical activity.", warning: "Simple carbs (sugar) cause weight gain.", tips: ["Choose complex types like oats"], foods: ["Rice", "Potatoes", "Oats"] }, 
        ar: { title: "الكربوهيدرات", desc: "المصدر الرئيسي للطاقة.", benefit: "توفر الطاقة للدماغ والنشاط البدني.", warning: "السكريات تزيد الوزن.", tips: ["اختيار الأنواع المعقدة كالشوفان"], foods: ["الأرز", "البطاطس", "الشوفان"] } 
    },
    { 
        id: 1003, 
        ku: { title: "چەورییە تەندروستەکان (Healthy Fats)", desc: "بۆ مێشک و هۆرمۆنەکان.", benefit: "دڵ دەپارێزێت و یارمەتی مژینی ڤیتامینەکان دەدات.", warning: "دوورکەوتنەوە لە چەورییە دەستکردەکان.", tips: ["بەکارهێنانی زەیتی زەیتوون"], foods: ["ئەڤۆکادۆ", "زەیتی زەیتوون", "گوێز"] }, 
        en: { title: "Healthy Fats", desc: "For brain and hormones.", benefit: "Protects heart and aids vitamin absorption.", warning: "Avoid trans fats.", tips: ["Use olive oil"], foods: ["Avocado", "Olive Oil", "Walnuts"] }, 
        ar: { title: "الدهون الصحية", desc: "للدماغ والهرمونات.", benefit: "تحمي القلب وتساعد في امتصاص الفيتامينات.", warning: "تجنب الدهون المتحولة.", tips: ["استخدام زيت الزيتون"], foods: ["الأفوكادو", "زيت الزيتون", "الجوز"] } 
    },
    { 
        id: 1004, 
        ku: { title: "ڕیشاڵ (Fiber)", desc: "بۆ هەرسێکی تەندروست.", benefit: "ڕێگری لە قەبزی دەکات و کۆلیسترۆڵ ڕێکدەخات.", warning: "پێویستە ئاوی زۆری لەگەڵ بخورێتەوە.", tips: ["خواردنی سەوزە لە هەموو ژەمێکدا"], foods: ["سەوزە", "میوە", "دانەوێڵە"] }, 
        en: { title: "Fiber", desc: "For healthy digestion.", benefit: "Prevents constipation and regulates cholesterol.", warning: "Drink plenty of water with it.", tips: ["Eat vegetables with every meal"], foods: ["Vegetables", "Fruits", "Grains"] }, 
        ar: { title: "الألياف", desc: "لهضم صحي.", benefit: "تمنع الإمساك وتنظم الكوليسترول.", warning: "يجب شرب الكثير من الماء معها.", tips: ["تناول الخضروات مع كل وجبة"], foods: ["الخضروات", "الفواكه", "الحبوب"] } 
    },
    { 
        id: 1005, 
        ku: { title: "ئاو (Water)", desc: "گرنگترین پێکهاتەی جەستە.", benefit: "پلەی گەرمی ڕێکدەخات و ژەهر فڕێ دەداتە دەرەوە.", warning: "کەمی ئاو دەبێتە هۆی وشکبوونەوە و سەرئێشە.", tips: ["خواردنەوەی ٨ پەرداخ ڕۆژانە"], foods: ["ئاو", "خەیار", "شوتی"] }, 
        en: { title: "Water", desc: "Most vital component of the body.", benefit: "Regulates temp and flushes toxins.", warning: "Lack of water causes dehydration and headaches.", tips: ["Drink 8 glasses daily"], foods: ["Water", "Cucumber", "Watermelon"] }, 
        ar: { title: "الماء", desc: "أهم مكون للجسم.", benefit: "ينظم الحرارة ويطرد السموم.", warning: "نقص الماء يسبب الجفاف والصداع.", tips: ["شرب 8 أكواب يومياً"], foods: ["الماء", "الخيار", "البطيخ"] } 
    },
    { 
        id: 1006, 
        ku: { title: "ڤیتامین D", desc: "بۆ ئێسک و بەرگری.", benefit: "یارمەتی مژینی کالسیۆم دەدات.", warning: "کەمی ئەم ڤیتامینە لە کوردستان باوە.", tips: ["چوونە بەر خۆر لە بەیانیاندا"], foods: ["هێلکە", "ماسی", "شیر"] }, 
        en: { title: "Vitamin D", desc: "For bones and immunity.", benefit: "Helps calcium absorption.", warning: "Deficiency is common.", tips: ["Morning sun exposure"], foods: ["Eggs", "Fish", "Milk"] }, 
        ar: { title: "فيتامين D", desc: "للعظام والمناعة.", benefit: "يساعد في امتصاص الكالسيوم.", warning: "نقصه شائع جداً.", tips: ["التعرض لشمس الصباح"], foods: ["البيض", "الأسماك", "الحليب"] } 
    },
    { 
        id: 1007, 
        ku: { title: "کالسیۆم (Calcium)", desc: "بۆ ئێسک و ددان.", benefit: "بناغەی ئێسکەکانە.", warning: "کەمی کالسیۆم دەبێتە هۆی پوکانەوەی ئێسک.", tips: ["شیرەمەنییەکان سەرچاوەی سەرەکین"], foods: ["پەنیر", "ماست", "کونجی"] }, 
        en: { title: "Calcium", desc: "For bones and teeth.", benefit: "The foundation of bone health.", warning: "Deficiency leads to osteoporosis.", tips: ["Dairy is a primary source"], foods: ["Cheese", "Yogurt", "Sesame"] }, 
        ar: { title: "الكالسيوم", desc: "للعظام والأسنان.", benefit: "أساس صحة العظام.", warning: "نقصه يؤدي لهشاشة العظام.", tips: ["الألبان هي المصدر الأساسي"], foods: ["الجبن", "اللبن", "السمسم"] } 
    },
    { 
        id: 1008, 
        ku: { title: "ئاسن (Iron)", desc: "بۆ دروستکردنی خوێن.", benefit: "ئۆکسجین بۆ خانەکان دەگوازێتەوە.", warning: "کەمی ئاسن دەبێتە هۆی کەمخوێنی و بێهێزی.", tips: ["خواردنی لەگەڵ ڤیتامین C بۆ مژینی باشتر"], foods: ["گۆشتی سوور", "نیسک", "سپێناخ"] }, 
        en: { title: "Iron", desc: "For blood production.", benefit: "Carries oxygen to cells.", warning: "Deficiency causes anemia and fatigue.", tips: ["Consume with Vitamin C for better absorption"], foods: ["Red Meat", "Lentils", "Spinach"] }, 
        ar: { title: "الحديد", desc: "لإنتاج الدم.", benefit: "ينقل الأكسجين للخلايا.", warning: "نقصه يسبب فقر الدم والتعب.", tips: ["تناوله مع فيتامين C لامتصاص أفضل"], foods: ["اللحم الأحمر", "العدس", "السبانخ"] } 
    },
    { 
        id: 1009, 
        ku: { title: "مەگنیسیۆم (Magnesium)", desc: "بۆ پشوودانی ماسولکە.", benefit: "یارمەتی خەو و کەمکردنەوەی سترێس دەدات.", warning: "کەمی مەگنیسیۆم دەبێتە هۆی گرژبوونی ماسولکە.", tips: ["خواردنی پێش خەوتن سوودی هەیە"], foods: ["شکۆڵاتەی تاڵ", "مۆز", "گوێز"] }, 
        en: { title: "Magnesium", desc: "For muscle relaxation.", benefit: "Helps sleep and reduces stress.", warning: "Deficiency causes muscle cramps.", tips: ["Useful when taken before sleep"], foods: ["Dark Chocolate", "Bananas", "Walnuts"] }, 
        ar: { title: "المغنيسيوم", desc: "لاسترخاء العضلات.", benefit: "يساعد في النوم وتقليل التوتر.", warning: "نقصه يسبب تشنجات عضلية.", tips: ["مفيد عند تناوله قبل النوم"], foods: ["الشوكولاتة الداكنة", "الموز", "الجوز"] } 
    },
    { 
        id: 1010, 
        ku: { title: "ئۆمیگا ٣ (Omega 3)", desc: "بۆ مێشک و دڵ.", benefit: "هەوکردن کەم دەکاتەوە و زیرەکی زیاد دەکات.", warning: "گرنگە بۆ تەندروستی چاویش.", tips: ["هەفتەی دووجار ماسی بخۆن"], foods: ["ماسی سەلەمون", "تۆوی چیا", "گوێز"] }, 
        en: { title: "Omega 3", desc: "For brain and heart.", benefit: "Reduces inflammation and boosts intelligence.", warning: "Important for eye health too.", tips: ["Eat fish twice a week"], foods: ["Salmon", "Chia seeds", "Walnuts"] }, 
        ar: { title: "أوميغا 3", desc: "للدماغ والقلب.", benefit: "يقلل الالتهابات ويزيد الذكاء.", warning: "مهم لصحة العين أيضاً.", tips: ["تناول السمك مرتين أسبوعياً"], foods: ["السلمون", "بذور الشيا", "الجوز"] } 
    },
    { 
        id: 1011, 
        ku: { title: "دژە ئۆکسانەکان (Antioxidants)", desc: "بۆ پاراستنی خانەکان.", benefit: "ڕێگری لە پیربوون و نەخۆشی دەکەن.", warning: "لە میوە ڕەنگاوڕەنگەکاندا زۆرە.", tips: ["خواردنی هەمەجۆری میوەکان"], foods: ["تووتڕک", "چاوی شین", "هەنار"] }, 
        en: { title: "Antioxidants", desc: "For cell protection.", benefit: "Prevents aging and diseases.", warning: "Abundant in colorful fruits.", tips: ["Eat a variety of fruits"], foods: ["Blueberries", "Raspberries", "Pomegranate"] }, 
        ar: { title: "مضادات الأكسدة", desc: "لحماية الخلايا.", benefit: "تمنع الشيخوخة والأمراض.", warning: "توجد بكثرة في الفواكه الملونة.", tips: ["تنويع تناول الفواكه"], foods: ["التوت", "العنب البري", "الرمان"] } 
    },
    { 
        id: 1012, 
        ku: { title: "پڕۆبایۆتیک (Probiotics)", desc: "بەکتریا بەسوودەکان.", benefit: "بۆ تەندروستی ڕیخۆڵە و بەرگری گرنگن.", warning: "پاش خواردنی دژەبەکتریا پێویستە.", tips: ["ماست باشترین سەرچاوەیە"], foods: ["ماست", "کەفیر", "ترشیات"] }, 
        en: { title: "Probiotics", desc: "Good bacteria.", benefit: "Crucial for gut health and immunity.", warning: "Needed after taking antibiotics.", tips: ["Yogurt is the best source"], foods: ["Yogurt", "Kefir", "Pickles"] }, 
        ar: { title: "البروبيوتيك", desc: "البكتيريا النافعة.", benefit: "مهمة لصحة الأمعاء والمناعة.", warning: "مطلوبة بعد تناول المضادات الحيوية.", tips: ["الزبادي أفضل مصدر"], foods: ["الزبادي", "الكفير", "المخللات"] } 
    },
    { 
        id: 1013, 
        ku: { title: "ڤیتامین C", desc: "بۆ بەرگری و پێست.", benefit: "یارمەتی دروستبوونی کۆلاجین دەدات.", warning: "لە کاتی هەڵامەتدا زۆر بەسوودە.", tips: ["میوە ترشەکان بخۆن"], foods: ["پرتەقاڵ", "لیمۆ", "بیبەر"] }, 
        en: { title: "Vitamin C", desc: "For immunity and skin.", benefit: "Helps collagen production.", warning: "Very useful during colds.", tips: ["Eat citrus fruits"], foods: ["Oranges", "Lemons", "Peppers"] }, 
        ar: { title: "فيتامين C", desc: "للمناعة والجلد.", benefit: "يساعد في إنتاج الكولاجين.", warning: "مفيد جداً أثناء الزكام.", tips: ["تناول الحمضيات"], foods: ["البرتقال", "الليمون", "الفلفل"] } 
    },
    { 
        id: 1014, 
        ku: { title: "پۆتاسیۆم (Potassium)", desc: "بۆ زەخت و دڵ.", benefit: "هاوسەنگی خوێ ڕادەگرێت.", warning: "کەمی پۆتاسیۆم دەبێتە هۆی بێهێزی ماسولکە.", tips: ["مۆز پڕە لە پۆتاسیۆم"], foods: ["مۆز", "پەتاتە", "سپێناخ"] }, 
        en: { title: "Potassium", desc: "For BP and heart.", benefit: "Balances salt levels.", warning: "Deficiency causes muscle weakness.", tips: ["Bananas are rich in potassium"], foods: ["Bananas", "Potatoes", "Spinach"] }, 
        ar: { title: "البوتاسيوم", desc: "للضغط والقلب.", benefit: "يوازن مستويات الملح.", warning: "نقصه يسبب ضعف العضلات.", tips: ["الموز غني بالبوتاسيوم"], foods: ["الموز", "البطاطس", "السبانخ"] } 
    },
    { 
        id: 1015, 
        ku: { title: "زینک (Zinc)", desc: "بۆ گەشە و بەرگری.", benefit: "بۆ چاکبوونەوەی برین زۆر گرنگە.", warning: "پێویستە بۆ تەندروستی قژ و نینۆک.", tips: ["لە زۆربەی گۆشتەکاندا هەیە"], foods: ["گۆشتی مریشک", "چەرەسات", "پاقلە"] }, 
        en: { title: "Zinc", desc: "For growth and immunity.", benefit: "Vital for wound healing.", warning: "Needed for hair and nail health.", tips: ["Found in most meats"], foods: ["Chicken", "Nuts", "Beans"] }, 
        ar: { title: "الزنك", desc: "للنمو والمناعة.", benefit: "حيوي لالتئام الجروح.", warning: "مطلوب لصحة الشعر والأظافر.", tips: ["موجود في معظم اللحوم"], foods: ["الدجاج", "المكسرات", "الفول"] } 
    },
    { 
        id: 1016, 
        ku: { title: "یۆد (Iodine)", desc: "بۆ غودە (Thyroid).", benefit: "بەرپرسە لە میتابۆلیزم و وزە.", warning: "کەمی یۆد دەبێتە هۆی گەورەبوونی غودە.", tips: ["خوێی یۆدکراو بەکاربهێنە"], foods: ["خواردنی دەریایی", "خوێ", "شیر"] }, 
        en: { title: "Iodine", desc: "For thyroid health.", benefit: "Responsible for metabolism and energy.", warning: "Deficiency causes goiter.", tips: ["Use iodized salt"], foods: ["Seafood", "Salt", "Milk"] }, 
        ar: { title: "اليود", desc: "للغدة الدرقية.", benefit: "مسؤول عن التمثيل الغذائي والطاقة.", warning: "نقصه يسبب تضخم الغدة.", tips: ["استخدام الملح المدعم باليود"], foods: ["المأكولات البحرية", "الملح", "الحليب"] } 
    },
    { 
        id: 1017, 
        ku: { title: "سیلینیۆم (Selenium)", desc: "دژە ئۆکسانی بەهێز.", benefit: "دڵ و سیستەمی بەرگری دەپارێزێت.", warning: "لە هەندێک جۆری گوێزدا زۆرە.", tips: ["تەنها ٢ دەنک گوێزی بەڕازیلی بەسە"], foods: ["گوێزی بەڕازیلی", "ماسی", "هێلکە"] }, 
        en: { title: "Selenium", desc: "Strong antioxidant.", benefit: "Protects heart and immune system.", warning: "High in some nuts.", tips: ["Just 2 Brazil nuts are enough"], foods: ["Brazil nuts", "Fish", "Eggs"] }, 
        ar: { title: "السيلينيوم", desc: "مضاد أكسدة قوي.", benefit: "يحمي القلب وجهاز المناعة.", warning: "عالي في بعض المكسرات.", tips: ["حبتان من الجوز البرازيلي تكفيان"], foods: ["الجوز البرازيلي", "الأسماك", "البيض"] } 
    },
    { 
        id: 1018, 
        ku: { title: "ڤیتامین B12", desc: "بۆ دەمار و مێشک.", benefit: "بۆ دروستبوونی خڕۆکە سوورەکان پێویستە.", warning: "ڕووەکخۆرەکان زۆرجار کەمیان هەیە.", tips: ["پشکنینی ساڵانە بکە"], foods: ["گۆشتی سوور", "جەرگ", "ماسی"] }, 
        en: { title: "Vitamin B12", desc: "For nerves and brain.", benefit: "Needed for red blood cell formation.", warning: "Vegetarians often have deficiency.", tips: ["Do annual checkups"], foods: ["Red Meat", "Liver", "Fish"] }, 
        ar: { title: "فيتامين B12", desc: "للأعصاب والدماغ.", benefit: "مطلوب لتكوين خلايا الدم الحمراء.", warning: "النباتيون غالباً ما يعانون من نقصه.", tips: ["إجراء فحص سنوي"], foods: ["اللحم الأحمر", "الكبد", "الأسماك"] } 
    },
    { 
        id: 1019, 
        ku: { title: "ڤیتامین A", desc: "بۆ بینین و گەشە.", benefit: "بۆ تەندروستی چاو لە شەودا گرنگە.", warning: "زیادەڕۆیی تێیدا ژەهراوییە.", tips: ["گێزەر بۆ چاو باشە"], foods: ["گێزەر", "سپێناخ", "پەتاتەی شیرین"] }, 
        en: { title: "Vitamin A", desc: "For vision and growth.", benefit: "Important for night vision.", warning: "Excess can be toxic.", tips: ["Carrots are good for eyes"], foods: ["Carrots", "Spinach", "Sweet Potato"] }, 
        ar: { title: "فيتامين A", desc: "للبصر والنمو.", benefit: "مهم للرؤية الليلية.", warning: "الإفراط قد يكون ساماً.", tips: ["الجزر مفيد للعين"], foods: ["الجزر", "السبانخ", "البطاطا الحلوة"] } 
    },
    { 
        id: 1020, 
        ku: { title: "فۆلیک ئەسید (Folic Acid)", desc: "بۆ گەشەی خانە.", benefit: "بۆ ئافرەتی دووگیان زۆر گرنگە.", warning: "ڕێگری لە ناتەواوی زگماک دەکات.", tips: ["پێش دووگیانیش پێویستە"], foods: ["سەوزە گەڵادارەکان", "پاقلەمەنی", "پرتەقاڵ"] }, 
        en: { title: "Folic Acid", desc: "For cell growth.", benefit: "Crucial for pregnant women.", warning: "Prevents birth defects.", tips: ["Needed even before pregnancy"], foods: ["Leafy greens", "Legumes", "Oranges"] }, 
        ar: { title: "حمض الفوليك", desc: "لنمو الخلايا.", benefit: "ضروري جداً للحوامل.", warning: "يمنع التشوهات الخلقية.", tips: ["مطلوب حتى قبل الحمل"], foods: ["الخضروات الورقية", "البقوليات", "البرتقال"] } 
    },
    { 
        id: 1021, 
        ku: { title: "سۆدیۆم (Sodium)", desc: "بۆ هاوسەنگی ئاو.", benefit: "پەستانی خوێن ڕادەگرێت.", warning: "خواردنی زۆری خوێ زەخت بەرز دەکاتەوە.", tips: ["خوێ کەم بکەرەوە"], foods: ["خوێ", "نانی سپی", "پەنیر"] }, 
        en: { title: "Sodium", desc: "For fluid balance.", benefit: "Maintains blood pressure.", warning: "Too much salt causes hypertension.", tips: ["Reduce salt intake"], foods: ["Salt", "White bread", "Cheese"] }, 
        ar: { title: "الصوديوم", desc: "لتوازن السوائل.", benefit: "يحافظ على ضغط الدم.", warning: "الملح الزائد يرفع الضغط.", tips: ["قلل من الملح"], foods: ["الملح", "الخبز الأبيض", "الجبن"] } 
    },
    { 
        id: 1022, 
        ku: { title: "ڤیتامین E", desc: "دژە پیربوون.", benefit: "پێست و قژ دەپارێزێت.", warning: "خوێن تەنک دەکاتەوە ئەگەر زۆر بخورێت.", tips: ["چەرەسات سەرچاوەی باشن"], foods: ["بادەم", "ئەڤۆکادۆ", "زەیتی گوڵەبەڕۆژە"] }, 
        en: { title: "Vitamin E", desc: "Anti-aging.", benefit: "Protects skin and hair.", warning: "Thins blood in high doses.", tips: ["Nuts are good sources"], foods: ["Almonds", "Avocado", "Sunflower oil"] }, 
        ar: { title: "فيتامين E", desc: "مضاد للشيخوخة.", benefit: "يحمي الجلد والشعر.", warning: "يسبب تميع الدم بجرعات عالية.", tips: ["المكسرات مصدر جيد"], foods: ["اللوز", "الأفوكادو", "زيت دوار الشمس"] } 
    },
    { 
        id: 1023, 
        ku: { title: "ڤیتامین K", desc: "بۆ مەیینی خوێن.", benefit: "ڕێگری لە خوێنبەربوون دەکات.", warning: "کاریگەری پێچەوانەی هەیە لەگەڵ وارفارین.", tips: ["لە سەوزەدا زۆرە"], foods: ["بڕۆکلی", "کەلەرم", "سپێناخ"] }, 
        en: { title: "Vitamin K", desc: "For blood clotting.", benefit: "Prevents excessive bleeding.", warning: "Interacts with blood thinners.", tips: ["High in green vegetables"], foods: ["Broccoli", "Cabbage", "Spinach"] }, 
        ar: { title: "فيتامين K", desc: "لتجلط الدم.", benefit: "يمنع النزيف المفرط.", warning: "يتداخل مع مميعات الدم.", tips: ["عالٍ في الخضروات الخضراء"], foods: ["البروكلي", "الملفوف", "السبانخ"] } 
    },
    { 
        id: 1024, 
        ku: { title: "مس (Copper)", desc: "بۆ مژینی ئاسن.", benefit: "یارمەتی دروستبوونی وزە دەدات.", warning: "کەمی مس دەبێتە هۆی کێشەی دەمار.", tips: ["لە شکۆڵاتەی تاڵدا هەیە"], foods: ["جەرگ", "گوێز", "شکۆڵاتەی تاڵ"] }, 
        en: { title: "Copper", desc: "For iron absorption.", benefit: "Helps in energy production.", warning: "Deficiency causes nerve issues.", tips: ["Found in dark chocolate"], foods: ["Liver", "Walnuts", "Dark chocolate"] }, 
        ar: { title: "النحاس", desc: "لامتصاص الحديد.", benefit: "يساعد في إنتاج الطاقة.", warning: "نقصه يسبب مشاكل عصبية.", tips: ["موجود في الشوكولاتة الداكنة"], foods: ["الكبد", "الجوز", "الشوكولاتة الداكنة"] } 
    },
    { 
        id: 1025, 
        ku: { title: "مەنگەنیز (Manganese)", desc: "بۆ میتابۆلیزم.", benefit: "بۆ تەندروستی ئێسک و مێشک گرنگە.", warning: "یارمەتی مەیینی خوێن دەدات.", tips: ["لە چادا هەیە"], foods: ["چای سەوز", "دانەوێڵە", "چەرەسات"] }, 
        en: { title: "Manganese", desc: "For metabolism.", benefit: "Important for bone and brain health.", warning: "Helps with blood clotting.", tips: ["Found in tea"], foods: ["Green tea", "Whole grains", "Nuts"] }, 
        ar: { title: "المنغنيز", desc: "للتمثيل الغذائي.", benefit: "مهم لصحة العظام والدماغ.", warning: "يساعد في تجلط الدم.", tips: ["موجود في الشاي"], foods: ["الشاي الأخضر", "الحبوب الكاملة", "المكسرات"] } 
    },
    { 
        id: 1026, 
        ku: { title: "فۆسفۆر (Phosphorus)", desc: "بۆ وزەی خانە.", benefit: "لەگەڵ کالسیۆم ئێسک دروست دەکات.", warning: "زۆری فۆسفۆر بۆ گورچیلە خراپە.", tips: ["لە زۆربەی پڕۆتینەکاندایە"], foods: ["مریشک", "ماسی", "شیرەمەنی"] }, 
        en: { title: "Phosphorus", desc: "For cellular energy.", benefit: "Works with calcium for bones.", warning: "Too much is bad for kidneys.", tips: ["Found in most proteins"], foods: ["Chicken", "Fish", "Dairy"] }, 
        ar: { title: "الفوسفور", desc: "لطاقة الخلايا.", benefit: "يعمل مع الكالسيوم للعظام.", warning: "الزيادة تضر الكلى.", tips: ["موجود في معظم البروتينات"], foods: ["الدجاج", "الأسماك", "الألبان"] } 
    },
    { 
        id: 1027, 
        ku: { title: "کرۆمیۆم (Chromium)", desc: "بۆ ڕێکخستنی شەکر.", benefit: "کاریگەری ئەنسۆلین باشتر دەکات.", warning: "بۆ نەخۆشی شەکرە بەسوودە.", tips: ["لە بڕۆکلیدا هەیە"], foods: ["بڕۆکلی", "گوێز", "سیری کوڵاو"] }, 
        en: { title: "Chromium", desc: "For sugar regulation.", benefit: "Improves insulin sensitivity.", warning: "Beneficial for diabetes.", tips: ["Found in broccoli"], foods: ["Broccoli", "Walnuts", "Cooked garlic"] }, 
        ar: { title: "الكروم", desc: "لتنظيم السكر.", benefit: "يحسن حساسية الأنسولين.", warning: "مفيد لمرضى السكري.", tips: ["موجود في البروكلي"], foods: ["البروكلي", "الجوز", "الثوم المطبوخ"] } 
    },
    { 
        id: 1028, 
        ku: { title: "فلۆراید (Fluoride)", desc: "بۆ ددان.", benefit: "ڕێگری لە کلۆربوونی ددان دەکات.", warning: "لە زۆربەی ئاوەکاندا هەیە.", tips: ["ئاو زۆر بخۆرەوە"], foods: ["ئاو", "چای ڕەش", "ماسی دەریایی"] }, 
        en: { title: "Fluoride", desc: "For teeth.", benefit: "Prevents tooth decay.", warning: "Found in most water supplies.", tips: ["Drink plenty of water"], foods: ["Water", "Black tea", "Seafood"] }, 
        ar: { title: "الفلورايد", desc: "للأسنان.", benefit: "يمنع تسوس الأسنان.", warning: "موجود في معظم مصادر المياه.", tips: ["اشرب الكثير من الماء"], foods: ["الماء", "الشاي الأسود", "المأكولات البحرية"] } 
    },
    { 
        id: 1029, 
        ku: { title: "بایۆتین (Biotin)", desc: "ڤیتامین بۆ جوانی.", benefit: "بۆ گەشەی قژ و نینۆک زۆر باشە.", warning: "بە ڤیتامین B7 یش دەوترێت.", tips: ["بۆ کەوتنی قژ باشە"], foods: ["هێلکە", "جەرگ", "گوێز"] }, 
        en: { title: "Biotin", desc: "Beauty vitamin.", benefit: "Great for hair and nail growth.", warning: "Also known as Vitamin B7.", tips: ["Good for hair loss"], foods: ["Eggs", "Liver", "Walnuts"] }, 
        ar: { title: "البيوتين", desc: "فيتامين الجمال.", benefit: "رائع لنمو الشعر والأظافر.", warning: "يعرف أيضاً بفيتامين B7.", tips: ["مفيد لتساقط الشعر"], foods: ["البيض", "الكبد", "الجوز"] } 
    },
    { 
        id: 1030, 
        ku: { title: "کۆلاین (Choline)", desc: "بۆ مێشک و جگەر.", benefit: "بۆ بیرەوەری و میتابۆلیزم گرنگە.", warning: "گرنگە بۆ مێشکی کۆرپەلە.", tips: ["لە هێلکەدا زۆرە"], foods: ["زەردێنەی هێلکە", "مریشک", "بڕۆکلی"] }, 
        en: { title: "Choline", desc: "For brain and liver.", benefit: "Important for memory and metabolism.", warning: "Crucial for fetal brain development.", tips: ["Abundant in eggs"], foods: ["Egg yolk", "Chicken", "Broccoli"] }, 
        ar: { title: "الكولين", desc: "للدماغ والكبد.", benefit: "مهم للذاكرة والتمثيل الغذائي.", warning: "حيوي لتطور دماغ الجنين.", tips: ["متوفر بكثرة في البيض"], foods: ["صفار البيض", "الدجاج", "البروكلي"] } 
    }
];
