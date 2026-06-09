const herbalData = [
    {
        id: 301,
        img: "img/herbal/301.jpg",
        ku: { title: "زەنجەفیل (Ginger)", desc: "زەنجەفیل ڕەگێکی ڕووەکییە کە چەندین سەدەیە وەک چارەسەری سروشتی بەکاردێت.", benefit: "بۆ چارەسەری هێڵنجدان، دڵتێکچوون، و کەمکردنەوەی هەوکردن زۆر باشە.", warning: "نابێت زیادەڕۆیی تێدا بکرێت ئەگەر نەخۆشی دڵت هەیە یان دەرمانی ڕوونکردنەوەی خوێن بەکاردێنیت.", tips: ["ڕۆژانە پارچەیەکی بچووک بەکاربهێنە.", "دەتوانیت وەک چا بەکاریبهێنیت."] },
        en: { title: "Ginger", desc: "Ginger is a flowering plant whose rhizome is widely used as a spice and a folk medicine.", benefit: "Effective against nausea, muscle pain, and lower blood sugar.", warning: "Avoid excessive intake if you have heart conditions or use blood thinners.", tips: ["Use small pieces daily.", "Can be consumed as tea."] },
        ar: { title: "الزنجبيل", desc: "الزنجبيل نبات جذري يستخدم منذ قرون كعلاج طبيعي وللتوابل.", benefit: "فعال جداً في علاج الغثيان، آلام العضلات، وتقليل الالتهابات.", warning: "تجنب الإفراط في تناوله إذا كنت تعاني من أمراض القلب أو تستخدم مسيلات الدم.", tips: ["استخدم قطعاً صغيرة يومياً.", "يمكن تناوله كشاي."] }
    },
    {
        id: 302,
        img: "img/herbal/302.jpg",
        ku: { title: "سیر (Garlic)", desc: "سیر یەکێکە لە بەهێزترین دژە-بەکتریا سروشتییەکان.", benefit: "بۆ دابەزاندنی پەستانی خوێن و کۆلیستڕۆڵ و بەهێزکردنی بەرگری جەستە بەسوودە.", warning: "لەوانەیە ببێتە هۆی دڵەکزێ و ناخۆشبوونی بۆنی دەم.", tips: ["باشترە بە خاوی بخورێت بۆ ئەوەی سوودە پزیشکییەکانی بمێنێت.", "ڕۆژانە یەک دەنک بەسە."] },
        en: { title: "Garlic", desc: "Garlic is a plant in the Onion family, known for its strong aroma and health benefits.", benefit: "Lowers blood pressure, cholesterol, and boosts the immune system.", warning: "May cause heartburn and bad breath.", tips: ["Eat raw for maximum benefits.", "One clove a day is usually enough."] },
        ar: { title: "الثوم", desc: "الثوم من أقوى المضادات الحيوية الطبيعية ويستخدم في الطهي والعلاج.", benefit: "يخفض ضغط الدم والكوليسترول ويعزز جهاز المناعة.", warning: "قد يسبب حموضة المعدة ورائحة نفس كريهة.", tips: ["يفضل تناوله خاماً للحفاظ على فوائده.", "فص واحد يومياً كافٍ."] }
    },
    {
        id: 303,
        img: "img/herbal/303.jpg",
        ku: { title: "زەردەچەوە (Turmeric)", desc: "زەردەچەوە ماددەی (Curcumin) ی تێدایە کە دژە-هەوکردنێکی زۆر بەهێزە.", benefit: "بۆ ئازاری جومگەکان، تەندروستی مێشک، و پاراستنی جەرگ زۆر بەسوودە.", warning: "ئەو کەسانەی بەردی گورچیلەیان هەیە دەبێت بە وریایی بەکاریبهێنن.", tips: ["لەگەڵ کەمێک بیبەری ڕەش بەکاریبهێنە بۆ ئەوەی باشتر هەڵمژرێت.", "دەتوانیت لەناو شیردا تێکەڵی بکەیت."] },
        en: { title: "Turmeric", desc: "Turmeric contains curcumin, a substance with powerful anti-inflammatory properties.", benefit: "Great for joint pain, brain health, and liver protection.", warning: "People with kidney stones should use it with caution.", tips: ["Mix with black pepper for better absorption.", "Can be taken with milk (Golden Milk)."] },
        ar: { title: "الكركم", desc: "يحتوي الكركم على مادة الكركمين، وهي مضاد التهاب قوي جداً.", benefit: "مفيد لآلام المفاصل، صحة الدماغ، وحماية الكبد.", warning: "يجب على المصابين بحصى الكلى استخدامه بحذر.", tips: ["استخدمه مع الفلفل الأسود لزيادة الامتصاص.", "يمكن خلطه مع الحليب."] }
    },
    {
        id: 304,
        img: "img/herbal/304.jpg",
        ku: { title: "نەعنا (Peppermint)", desc: "نەعنا ڕووەکێکی بۆنخۆشە و کاریگەری هێورکەرەوەی هەیە.", benefit: "بۆ تێکچوونی گەدە، غازات، و سەرئێشە زۆر باشە.", warning: "بۆ ئەو کەسانەی کێشەی (Gastroesophageal Reflux) یان هەیە لەوانەیە نیشانەکان زیاد بکات.", tips: ["وەک چا دوای نان بخورێتەوە بۆ هەرەس پێکردنی خۆراک.", "زەیتی نەعنا بۆ سەرئێشە بەسوودە."] },
        en: { title: "Peppermint", desc: "Peppermint is an aromatic herb with calming and cooling effects.", benefit: "Excellent for indigestion, gas, and headaches.", warning: "May worsen symptoms of GERD (Acid Reflux).", tips: ["Drink as tea after meals for digestion.", "Peppermint oil can be used for tension headaches."] },
        ar: { title: "النعناع", desc: "النعناع عشب عطري له تأثير مهدئ ومنعش.", benefit: "ممتاز لعسر الهضم، الغازات، والصداع.", warning: "قد يزيد من أعراض ارتجاع المريء.", tips: ["يشرب كشاي بعد الأكل لتحسين الهضم.", "زيت النعناع مفيد لتخفيف الصداع."] }
    },
    {
        id: 305,
        img: "img/herbal/305.jpg",
        ku: { title: "بەیبوون (Chamomile)", desc: "بەیبوون یەکێکە لە کۆنترین ڕووەکە پزیشکییەکان بۆ هێورکردنەوە.", benefit: "بۆ چارەسەری بێخەوی، دڵەڕاوکێ، و هەوکردنی پێست بەکاردێت.", warning: "هەندێک کەس هەستیارییان پێی هەیە، بەتایبەت ئەوانەی بە گوڵەبەڕۆژە هەستیارن.", tips: ["پێش خەوتن وەک چا بخورێتەوە.", "کیسی چای بەیبوون بۆ ئاوسانی چاو باشە."] },
        en: { title: "Chamomile", desc: "Chamomile is one of the oldest medicinal herbs used for its calming properties.", benefit: "Used to treat insomnia, anxiety, and skin irritation.", warning: "Some people may have allergic reactions to it.", tips: ["Drink as tea before bedtime.", "Chamomile tea bags can help with puffy eyes."] },
        ar: { title: "البابونج", desc: "البابونج من أقدم الأعشاب الطبية المعروفة بخصائصها المهدئة.", benefit: "يستخدم لعلاج الأرق، القلق، والتهابات الجلد.", warning: "قد يسبب حساسية لبعض الأشخاص.", tips: ["يشرب كشاي دافئ قبل النوم.", "كمادات البابونج مفيدة لانتفاخ العين."] }
    },
    {
        id: 306,
        img: "img/herbal/306.jpg",
        ku: { title: "ئەلۆڤێرا (Aloe Vera)", desc: "ئەلۆڤێرا ڕووەکێکی گۆشتنە کە ماددەیەکی جێڵی تێدایە.", benefit: "بۆ سووتاوی پێست، برین، و وشکی پێست نایابە.", warning: "خواردنی جێڵەکەی بە بڕی زۆر مەترسیدارە و دەبێتە هۆی سکچوونی توند.", tips: ["جێڵە تازەکە ڕاستەوخۆ لە پێست بدە.", "وەک ماسکی قژ بەکاردێت."] },
        en: { title: "Aloe Vera", desc: "Aloe Vera is a succulent plant species containing a clear gel.", benefit: "Excellent for skin burns, wounds, and dry skin.", warning: "Ingesting the gel in large amounts can be dangerous.", tips: ["Apply fresh gel directly to the skin.", "Can be used as a hair mask."] },
        ar: { title: "الألوفيرا", desc: "الألوفيرا نبات عصاري يحتوي على جل شفاف غني بالفوائد.", benefit: "ممتاز لحروق الجلد، الجروح، وجفاف البشرة.", warning: "تناول الجل بجرعات كبيرة قد يسبب إسهالاً حاداً.", tips: ["ضع الجل الطازج مباشرة على الجلد.", "يستخدم كقناع مغذٍ للشعر."] }
    },
    {
        id: 307,
        img: "img/herbal/307.jpg",
        ku: { title: "جینسیینگ (Ginseng)", desc: "جینسیینگ ڕەگێکی بەناوبانگی چینییە بۆ زیادکردنی وزە.", benefit: "بەرگری جەستە بەهێز دەکات، توانای مێشک زیاد دەکات و ماندوێتی کەمدەکاتەوە.", warning: "لەوانەیە ببێتە هۆی خەوزڕان و بەرزبوونەوەی پەستانی خوێن.", tips: ["بەیانیان بەکاریبهێنە بۆ ئەوەی کار نەکاتە سەر خەوت.", "نابێت بۆ ماوەیەکی زۆر بە بەردەوامی بەکاربێت."] },
        en: { title: "Ginseng", desc: "Ginseng is a famous herbal root used to boost energy levels.", benefit: "Strengthens immunity, improves brain function, and reduces fatigue.", warning: "May cause insomnia and high blood pressure.", tips: ["Take in the morning to avoid sleep disruption.", "Avoid long-term continuous use without breaks."] },
        ar: { title: "الجينسنغ", desc: "الجينسنغ جذر عشبي مشهور بقدرته على زيادة الطاقة.", benefit: "يقوي المناعة، يحسن وظائف الدماغ، ويقلل التعب.", warning: "قد يسبب الأرق وارتفاع ضغط الدم.", tips: ["تناوله صباحاً لتجنب اضطراب النوم.", "لا ينصح باستخدامه لفترات طويلة جداً دون انقطاع."] }
    },
    {
        id: 308,
        img: "img/herbal/308.jpg",
        ku: { title: "ئێکیناسیا (Echinacea)", desc: "ئێکیناسیا ڕووەکێکە کە زیاتر بۆ چارەسەری سەرمابوون بەکاردێت.", benefit: "یارمەتی کەمکردنەوەی ماوەی سەرمابوون و هەڵامەت دەدات.", warning: "بۆ ئەو کەسانەی نەخۆشی بەرگری خۆییان (Autoimmune) هەیە گونجاو نییە.", tips: ["لە سەرەتای نیشانەکانی هەڵامەتدا دەست بە خواردنی بکە.", "وەک قەترە یان چا بەردەستە."] },
        en: { title: "Echinacea", desc: "Echinacea is a herb widely used to treat and prevent the common cold.", benefit: "Helps shorten the duration of colds and flu.", warning: "Not recommended for people with autoimmune diseases.", tips: ["Start taking it at the first sign of a cold.", "Available as supplements or tea."] },
        ar: { title: "إشنسا", desc: "الإشنسا عشب يستخدم على نطاق واسع لعلاج نزلات البرد.", benefit: "يساعد في تقليل مدة الإصابة بالبرد والإنفلونزا.", warning: "غير مناسب للمصابين بأمراض المناعة الذاتية.", tips: ["ابدأ بتناوله عند ظهور أولى علامات البرد.", "متوفر كمكملات غذائية أو شاي."] }
    },
    {
        id: 309,
        img: "img/herbal/309.jpg",
        ku: { title: "لاڤێندەر (Lavender)", desc: "لاڤێندەر یەکێکە لە بۆنخۆشترین ڕووەکەکان کە کاریگەری هێورکەرەوەی هەیە.", benefit: "بۆ دڵەڕاوکێ، سەرئێشە، و باشترکردنی خەو نایابە.", warning: "نابێت زەیتی لاڤێندەر بخورێت، تەنها بۆ بۆنکردن و مەساجە.", tips: ["کەمێک لە زەیتەکەی بدە لە سەرینەکەت بۆ خەوێکی باش.", "وەک چا بۆ هێوربوونەوە بخورێتەوە."] },
        en: { title: "Lavender", desc: "Lavender is a highly aromatic plant known for its soothing fragrance.", benefit: "Great for anxiety, headaches, and improving sleep quality.", warning: "Lavender oil should not be ingested; use for aromatherapy only.", tips: ["Put a few drops on your pillow for better sleep.", "Drink as tea to relax after a stressful day."] },
        ar: { title: "اللافندر", desc: "اللافندر (الخزامى) نبات عطري معروف برائحته المهدئة.", benefit: "ممتاز للقلق، الصداع، وتحسين جودة النوم.", warning: "لا يجب تناول زيت اللافندر؛ يستخدم للشم أو التدليك فقط.", tips: ["ضع بضع قطرات على الوسادة لنوم هادئ.", "يشرب كشاي للاسترخاء."] }
    },
    {
        id: 310,
        img: "img/herbal/310.jpg",
        ku: { title: "دارچینی (Cinnamon)", desc: "دارچینی بەهاراتێکی خۆشە و سوودی تەندروستی زۆرە.", benefit: "بۆ ڕێکخستنی شەکرەی خوێن و کەمکردنەوەی هەوکردن بەسوودە.", warning: "بەکارهێنانی بڕێکی زۆر لە (Cassia Cinnamon) زیان بە جەرگ دەگەیەنێت.", tips: ["دەتوانیت بیکەیتە ناو قاوە یان چا.", "نیو کەوچکی چا ڕۆژانە بەسە."] },
        en: { title: "Cinnamon", desc: "Cinnamon is a delicious spice with impressive health benefits.", benefit: "Helps regulate blood sugar levels and reduce inflammation.", warning: "High amounts of Cassia cinnamon can be toxic to the liver.", tips: ["Add it to your coffee or tea.", "Half a teaspoon daily is sufficient."] },
        ar: { title: "القرفة", desc: "القرفة من التوابل اللذيذة ولها فوائد صحية مذهلة.", benefit: "تساعد في تنظيم مستويات السكر في الدم وتقليل الالتهابات.", warning: "الاستهلاك المفرط لنوع (Cassia) قد يضر الكبد.", tips: ["أضفها إلى القهوة أو الشاي.", "نصف ملعقة صغيرة يومياً كافية."] }
    },
    {
        id: 311,
        img: "img/herbal/311.jpg",
        ku: { title: "هەنگوین و لیمۆ (Honey & Lemon)", desc: "تێکەڵەیەکی سروشتی کلاسیک بۆ تەندروستی.", benefit: "بۆ چارەسەری کۆکە، قوڕگ ئێشە و بەهێزکردنی بەرگری نایابە.", warning: "نابێت هەنگوین بدرێت بە منداڵی خوار تەمەن یەک ساڵ.", tips: ["لەناو ئاوی شلەتێن تێکەڵی بکە و بەیانیان بیخۆرەوە.", "لیمۆی تازە بەکاربهێنە."] },
        en: { title: "Honey & Lemon", desc: "A classic natural combination for overall health.", benefit: "Excellent for coughs, sore throats, and boosting immunity.", warning: "Do not give honey to children under one year old.", tips: ["Mix in warm water and drink in the morning.", "Always use fresh lemon juice."] },
        ar: { title: "العسل والليمون", desc: "مزيج طبيعي كلاسيكي للصحة العامة.", benefit: "ممتاز لعلاج السعال، آلام الحلق، وتعزيز المناعة.", warning: "لا يعطى العسل للأطفال دون سن السنة الواحدة.", tips: ["يخلط بالماء الدافئ ويشرب صباحاً.", "استخدم عصير الليمون الطازج."] }
    },
    {
        id: 312,
        img: "img/herbal/312.jpg",
        ku: { title: "چای سەوز (Green Tea)", desc: "چای سەوز دەوڵەمەندە بە دژە-ئۆکسانەکان.", benefit: "یارمەتی دابەزاندنی کێش دەدات و تەندروستی دڵ دەپارێزێت.", warning: "کافایینی تێدایە، نابێت زیادەڕۆیی تێدا بکرێت ئەگەر دڵەڕاوکێت هەیە.", tips: ["ڕۆژانە ٢ بۆ ٣ کوپ بخۆرەوە.", "نابێت ئاوەکە زۆر بکوڵێت بۆ ئەوەی تامەکەی ناخۆش نەبێت."] },
        en: { title: "Green Tea", desc: "Green tea is packed with antioxidants and health benefits.", benefit: "Aids weight loss and protects heart health.", warning: "Contains caffeine; avoid excessive intake if you have anxiety.", tips: ["Drink 2-3 cups per day.", "Don't use boiling water to avoid a bitter taste."] },
        ar: { title: "الشاي الأخضر", desc: "الشاي الأخضر غني بمضادات الأكسدة والفوائد الصحية.", benefit: "يساعد في إنقاص الوزن ويحمي صحة القلب.", warning: "يحتوي على الكافيين؛ تجنب الإفراط إذا كنت تعاني من القلق.", tips: ["اشرب 2-3 أكواب يومياً.", "لا تستخدم الماء المغلي جداً لتجنب الطعم المر."] }
    },
    {
        id: 313,
        img: "img/herbal/313.jpg",
        ku: { title: "شەمەلیلی (Fenugreek)", desc: "ڕووەکێکی پزیشکییە کە تۆو و گەڵاکەی بەکاردێت.", benefit: "بۆ زیادکردنی شیری دایک و ڕێکخستنی شەکرە بەسوودە.", warning: "لەوانەیە بۆنی ئارەق و میز بگۆڕێت بۆ بۆنی هاوشێوەی دۆشاو.", tips: ["تۆوەکەی دەکرێتە ناو ئاو و شەو تا بەیانی دەمێنێتەوە.", "بۆ چارەسەری کێشەی پێستیش بەکاردێت."] },
        en: { title: "Fenugreek", desc: "A herb whose seeds and leaves are used for medicinal purposes.", benefit: "Increases milk production in nursing mothers and helps control blood sugar.", warning: "May cause sweat and urine to smell like maple syrup.", tips: ["Soak seeds overnight and drink the water.", "Can also be used topically for skin issues."] },
        ar: { title: "الحلبة", desc: "عشب طبي تستخدم بذوره وأوراقه في العلاج والطهي.", benefit: "تزيد من إدرار حليب الأم وتساعد في ضبط السكر.", warning: "قد تغير رائحة العرق والبول لرائحة تشبه القيقب.", tips: ["تنقع البذور ليلاً ويشرب ماؤها صباحاً.", "تستخدم أيضاً موضعياً لبعض مشاكل الجلد."] }
    },
    {
        id: 314,
        img: "img/herbal/314.jpg",
        ku: { title: "کەجەرات (Hibiscus)", desc: "گوڵێکی سوورە کە چایەکی ترشی لێ دروست دەکرێت.", benefit: "بۆ دابەزاندنی پەستانی خوێنی بەرز زۆر کاریگەرە.", warning: "نابێت لەگەڵ دەرمانی پەستانی خوێن بە بڕی زۆر بخورێت.", tips: ["بە گەرمی یان بە ساردی دەخورێتەوە.", "تامێکی ترش و خۆشی هەیە."] },
        en: { title: "Hibiscus", desc: "A flowering plant used to make a tart, refreshing tea.", benefit: "Very effective at lowering high blood pressure.", warning: "Consult your doctor if you are already taking blood pressure medication.", tips: ["Can be enjoyed hot or cold.", "Has a naturally sour and pleasant taste."] },
        ar: { title: "الكركديه", desc: "نبات زهري يستخدم لصنع شاي منعش وبارد أو ساخن.", benefit: "فعال جداً في خفض ضغط الدم المرتفع.", warning: "يجب الحذر عند تناوله مع أدوية ضغط الدم.", tips: ["يمكن شربه بارداً أو ساخناً.", "له طعم حامض ومنعش."] }
    },
    {
        id: 315,
        img: "img/herbal/315.jpg",
        ku: { title: "ڕۆزماری (Rosemary)", desc: "ڕۆزماری ڕووەکێکی بۆنخۆشە و گەڵاکانی وەک دەرزی وان.", benefit: "بۆ بەهێزکردنی بیرەوەری و گەشەی قژ زۆر باشە.", warning: "نابێت زەیتی ڕۆزماری ڕاستەوخۆ بە بێ تێکەڵکردن بدرێت لە پێست.", tips: ["زەیتەکەی بۆ مەساجی پێستی سەر نایابە.", "لە خواردندا وەک بەهارات بەکاردێت."] },
        en: { title: "Rosemary", desc: "An aromatic evergreen herb with needle-like leaves.", benefit: "Improves memory, focus, and promotes hair growth.", warning: "Do not apply undiluted rosemary essential oil directly to the skin.", tips: ["Massage diluted oil into the scalp for hair health.", "Commonly used as a culinary herb."] },
        ar: { title: "إكليل الجبل", desc: "إكليل الجبل (الروزماري) عشب عطري دائم الخضرة.", benefit: "يحسن الذاكرة والتركيز ويعزز نمو الشعر.", warning: "لا يوضع زيت الروزماري المركز مباشرة على الجلد دون تخفيف.", tips: ["تدليك فروة الرأس بالزيت المخفف مفيد جداً.", "يستخدم كمنكه رائع في الطهي."] }
    },
    {
        id: 316,
        img: "img/herbal/316.jpg",
        ku: { title: "کوتک / ئۆریگانۆ (Thyme)", desc: "ڕووەکێکی کێوییە و بۆنی زۆر بەهێزە.", benefit: "بۆ چارەسەری کۆکە و هەوکردنی سنگ و گەدە بەسوودە.", warning: "نابێت لە کاتی دووگیانیدا بە بڕی زۆر بەکاربێت.", tips: ["وەک چا لەگەڵ هەنگوین بخورێتەوە بۆ کۆکە.", "دژە-بەکتریا و دژە-کەڕووە."] },
        en: { title: "Thyme", desc: "A versatile herb with strong antimicrobial properties.", benefit: "Helps treat coughs, chest infections, and indigestion.", warning: "Avoid medicinal amounts during pregnancy.", tips: ["Drink as tea with honey for cough relief.", "Has strong antibacterial and antifungal properties."] },
        ar: { title: "الزعتر", desc: "عشب عطري قوي يشتهر بخصائصه المطهرة.", benefit: "يساعد في علاج السعال، التهابات الصدر، وعسر الهضم.", warning: "تجنب الجرعات الكبيرة أثناء الحمل.", tips: ["يشرب كشاي مع العسل لتهدئة السعال.", "يعتبر مضاداً قوياً للبكتيريا والفطريات."] }
    },
    {
        id: 317,
        img: "img/herbal/317.jpg",
        ku: { title: "مەریمیە (Sage)", desc: "مەریمیە ڕووەکێکە کە گەڵاکانی ڕەنگی خۆڵەمێشی-سەوزن.", benefit: "بۆ باشترکردنی بیرەوەری و کەمکردنەوەی ئارەقکردنەوەی شەوانە بەسوودە.", warning: "نابێت لە کاتی شیرپێداندا بخورێت چونکە شیر کەمدەکاتەوە.", tips: ["بۆ غەرغەرەی دەم و قوڕگ بەکاردێت.", "وەک چا تامی زۆر خۆشە."] },
        en: { title: "Sage", desc: "Sage is a herb known for its grayish-green leaves and medicinal use.", benefit: "Improves memory and helps reduce night sweats.", warning: "Not for nursing mothers as it can reduce milk supply.", tips: ["Use as a mouthwash or gargle for sore throats.", "Makes a delicious herbal tea."] },
        ar: { title: "الميرمية", desc: "الميرمية عشب معروف بأوراقه الرمادية المخضرة وفوائده الكبيرة.", benefit: "تحسن الذاكرة وتساعد في تقليل التعرق الليلي.", warning: "لا تنصح بها للمرضعات لأنها قد تقلل إدرار الحليب.", tips: ["تستخدم كغرغرة للفم والحلق.", "تشرب كشاي مهدئ ومفيد."] }
    },
    {
        id: 318,
        img: "img/herbal/318.jpg",
        ku: { title: "بێخە مەکۆ (Licorice)", desc: "ڕەگێکی ڕووەکییە کە تامێکی شیرینی تایبەتی هەیە.", benefit: "بۆ دڵەکزێ، کۆکە و برینی گەدە بەسوودە.", warning: "بەکارهێنانی زۆر پەستانی خوێن بەرز دەکاتەوە.", tips: ["بۆ ماوەیەکی درێژ بەکاری مەهێنە.", "لە زۆربەی شیرینییەکاندا بەکاردێت."] },
        en: { title: "Licorice Root", desc: "A root known for its sweet flavor and soothing properties.", benefit: "Helps with heartburn, coughs, and stomach ulcers.", warning: "Excessive use can raise blood pressure significantly.", tips: ["Avoid long-term daily consumption.", "Often used in candies and herbal blends."] },
        ar: { title: "عرق السوس", desc: "جذر نباتي معروف بطعمه الحلو وخصائصه المهدئة.", benefit: "يساعد في علاج حموضة المعدة، السعال، وقرحة المعدة.", warning: "الاستهلاك الزائد يرفع ضغط الدم بشكل كبير.", tips: ["تجنب تناوله لفترات طويلة يومياً.", "يدخل في صناعة العديد من الحلويات والمشروبات."] }
    },
    {
        id: 319,
        img: "img/herbal/319.jpg",
        ku: { title: "خار مریەم (Milk Thistle)", desc: "ڕووەکێکی دڕکاوییە کە بۆ پاراستنی جەرگ بەناوبانگە.", benefit: "باشترین چارەسەری سروشتییە بۆ چەوری جەرگ و پاککردنەوەی جەرگ.", warning: "لەوانەیە ببێتە هۆی سکچوون لە هەندێک کەسدا.", tips: ["زیاتر وەک کەپسول بەردەستە.", "بۆ ئەو کەسانەی مەی دەخۆنەوە زۆر گرنگە."] },
        en: { title: "Milk Thistle", desc: "A flowering herb related to the daisy and ragweed family.", benefit: "The best natural remedy for liver health and fatty liver.", warning: "May cause a mild laxative effect in some people.", tips: ["Mostly available in capsule form.", "Highly recommended for liver detoxification."] },
        ar: { title: "خار مريم", desc: "عشب زهري مشهور بقدرته العالية على حماية الكبد.", benefit: "أفضل علاج طبيعي للكبد الدهني وتنظيف الكبد من السموم.", warning: "قد يسبب تأثيراً مليناً بسيطاً لدى البعض.", tips: ["متوفر غالباً على شكل كبسولات مكملات غذائية.", "ينصح به جداً لدعم وظائف الكبد."] }
    },
    {
        id: 320,
        img: "img/herbal/320.jpg",
        ku: { title: "ڕەگی ڤالێریان (Valerian Root)", desc: "ڕووەکێکە کە بۆنی ڕەگەکەی زۆر توند و تایبەتە.", benefit: "بۆ چارەسەری خەوزڕان و دڵەڕاوکێ وەک 'حەبی خەو' ی سروشتی وایە.", warning: "نابێت لەگەڵ دەرمانی هێورکەرەوەی تر بەکاربێت.", tips: ["٣٠ خولەک پێش خەوتن بەکاریبهێنە.", "بۆنەکەی کەمێک ناخۆشە بەڵام کاریگەرە."] },
        en: { title: "Valerian Root", desc: "A herb known for its strong-smelling root and sedative properties.", benefit: "Acts as a natural 'sleeping pill' for insomnia and anxiety.", warning: "Do not combine with other sedatives or alcohol.", tips: ["Take 30-60 minutes before bedtime.", "The smell is strong, but it is very effective."] },
        ar: { title: "جذر الفاليريان", desc: "عشب معروف بجذوره ذات الرائحة القوية وخصائصه المنومة.", benefit: "يعتبر 'منوماً طبيعياً' فعالاً للأرق والقلق.", warning: "لا يخلط مع مهدئات أخرى أو كحول.", tips: ["يتناول قبل النوم بـ 30-60 دقيقة.", "رائحته قوية لكن مفعوله ممتاز."] }
    },
    {
        id: 321,
        img: "img/herbal/321.jpg",
        ku: { title: "گوڵی سێپەڕە (St. John's Wort)", desc: "ڕووەکێکی گوڵ زەردە کە بۆ باری دەروونی بەکاردێت.", benefit: "بۆ چارەسەری خەمۆکی سوک و مامناوەند کاریگەرە.", warning: "کارلێک لەگەڵ زۆرێک لە دەرمانەکان دەکات، پێش بەکارهێنان لە پزیشک بپرسە.", tips: ["نابێت لەگەڵ دەرمانی دژە-خەمۆکی تر بخورێت.", "پێست بە تیشکی خۆر هەستیار دەکات."] },
        en: { title: "St. John's Wort", desc: "A flowering plant used primarily as a dietary supplement for mood.", benefit: "Effective for mild to moderate depression.", warning: "Interacts with many medications; consult a doctor before use.", tips: ["Do not take with other antidepressants.", "May increase skin sensitivity to sunlight."] },
        ar: { title: "عشب سانت جون", desc: "نبات زهري يستخدم كعلاج طبيعي للمزاج والاكتئاب.", benefit: "فعال في حالات الاكتئاب الخفيف إلى المتوسط.", warning: "يتداخل مع العديد من الأدوية؛ استشر الطبيب أولاً.", tips: ["لا يؤخذ مع مضادات اكتئاب أخرى.", "قد يزيد من حساسية الجلد لأشعة الشمس."] }
    },
    {
        id: 322,
        img: "img/herbal/322.jpg",
        ku: { title: "جینکۆ بیلۆبا (Ginkgo Biloba)", desc: "یەکێکە لە کۆنترین جۆرەکانی دار لە جیهاندا.", benefit: "بۆ بەهێزکردنی بیرەوەری و سوڕی خوێن لە مێشکدا بەسوودە.", warning: "مەترسی خوێنبەربوون زیاد دەکات ئەگەر لەگەڵ ئەسپرین بخورێت.", tips: ["زیاتر بۆ کەسانی بەتەمەن پێشنیار دەکرێت.", "وەک کەپسول یان چا بەردەستە."] },
        en: { title: "Ginkgo Biloba", desc: "One of the oldest living tree species in the world.", benefit: "Improves cognitive function and blood circulation to the brain.", warning: "May increase bleeding risk if taken with blood thinners.", tips: ["Commonly recommended for age-related memory loss.", "Available in capsules or tea form."] },
        ar: { title: "جنكو بيلوبا", desc: "من أقدم فصائل الأشجار في العالم وتستخدم أوراقها طبياً.", benefit: "تحسن الوظائف الإدراكية والدورة الدموية في الدماغ.", warning: "قد تزيد من خطر النزيف إذا أخذت مع مسيلات الدم.", tips: ["تنصح غالباً لكبار السن لتقوية الذاكرة.", "متوفرة كمكملات غذائية."] }
    },
    {
        id: 323,
        img: "img/herbal/323.jpg",
        ku: { title: "گوڵە زەردە (Dandelion)", desc: "ڕووەکێکی کێوییە کە زۆر کەس وەک گژوگیای بێسوود دەیبینن.", benefit: "بۆ میزپێکردن و پاککردنەوەی گورچیلە و جەرگ بەسوودە.", warning: "ئەوانەی کێشەی میزڵدانیان هەیە دەبێت وریابن.", tips: ["گەڵاکانی دەکرێتە ناو زەڵاتە.", "ڕەگەکەی وەک قاوە بەکاردێت."] },
        en: { title: "Dandelion", desc: "A common wild plant often mistaken for a simple weed.", benefit: "Acts as a natural diuretic and supports liver/kidney detox.", warning: "Consult a doctor if you have gallbladder issues.", tips: ["Leaves can be added to salads.", "Roasted roots can be used as a coffee substitute."] },
        ar: { title: "الهندباء", desc: "نبات بري شائع يمتلك فوائد طبية كبيرة في جذوره وأوراقه.", benefit: "مدر طبيعي للبول ويدعم تنظيف الكبد والكلى.", warning: "استشر الطبيب إذا كنت تعاني من مشاكل في المرارة.", tips: ["يمكن إضافة الأوراق الطازجة للسلطة.", "الجذور المحمصة تستخدم كبديل للقهوة."] }
    },
    {
        id: 324,
        img: "img/herbal/324.jpg",
        ku: { title: "گەزنە (Nettle)", desc: "ڕووەکێکە کە گەڵاکانی دەسوتێنن کاتێک دەستیان لێ دەدەیت.", benefit: "بۆ هەستیاری وەرز، ئازاری جومگە و پڕۆستات بەسوودە.", warning: "دەبێت وریابیت لە کاتی لێکردنەوەی چونکە پێست دەسوتێنێت.", tips: ["وەک چا بخورێتەوە بۆ کەمکردنەوەی نیشانەکانی هەستیاری.", "دەوڵەمەندە بە ئاسن."] },
        en: { title: "Nettle", desc: "A plant with stinging hairs on its leaves and stems.", benefit: "Helps with seasonal allergies, joint pain, and prostate health.", warning: "Handle with gloves as it causes skin irritation when fresh.", tips: ["Drink as tea to reduce hay fever symptoms.", "Very high in iron content."] },
        ar: { title: "القراص", desc: "نبات معروف بشعيراته التي تسبب لسعاً عند لمسها.", benefit: "مفيد لحساسية الربيع، آلام المفاصل، وصحة البروستاتا.", warning: "يجب الحذر عند قطفه لأنه يسبب تهيجاً للجلد.", tips: ["يشرب كشاي لتخفيف أعراض الحساسية الموسمية.", "غني جداً بعنصر الحديد."] }
    },
    {
        id: 325,
        img: "img/herbal/325.jpg",
        ku: { title: "میوەی گوڵەباخ (Rosehip)", desc: "میوەیەکە کە دوای وەرینی گوڵی باخ دروست دەبێت.", benefit: "دەوڵەمەندترین سەرچاوەی ڤیتامین C یە و بۆ بەرگری نایابە.", warning: "بەکارهێنانی زۆر لەوانەیە ببێتە هۆی بەردی گورچیلە.", tips: ["وەک چا یان مرەبا بەکاردێت.", "بۆ پێست وەک زەیت زۆر بەناوبانگە."] },
        en: { title: "Rosehip", desc: "The round portion of the rose flower just below the petals.", benefit: "Extremely high in Vitamin C and boosts the immune system.", warning: "High doses might increase the risk of kidney stones.", tips: ["Commonly used in teas, jams, and syrups.", "Rosehip oil is very popular for skincare."] },
        ar: { title: "ثمر الورد", desc: "الثمار التي تتكون بعد سقوط بتلات الورد.", benefit: "مصدر غني جداً بفيتامين C ويعزز جهاز المناعة.", warning: "الجرعات العالية قد تزيد من خطر حصى الكلى.", tips: ["يستخدم في الشاي، المربى، والشراب.", "زيت ثمر الورد مشهور جداً للعناية بالبشرة."] }
    },
    {
        id: 326,
        img: "img/herbal/326.jpg",
        ku: { title: "ئێڵدێربێری (Elderberry)", desc: "میوەیەکی ڕەنگ مۆری تۆخە.", benefit: "بۆ ڕێگری و چارەسەری هەڵامەت و ئەنفلۆنزا زۆر کاریگەرە.", warning: "نابێت بە خاوی بخورێت چونکە ژەهراوییە، تەنها بە کوڵاوی.", tips: ["زیاتر وەک شەرەب (Syrup) بەکاردێت.", "دژە-ڤایرۆسێکی بەهێزە."] },
        en: { title: "Elderberry", desc: "Dark purple berries from the European elder tree.", benefit: "Highly effective at preventing and treating cold and flu.", warning: "Never eat raw berries as they are toxic; must be cooked.", tips: ["Commonly taken as a syrup or supplement.", "Acts as a powerful natural antiviral."] },
        ar: { title: "البلسان", desc: "ثمار أرجوانية داكنة تنمو على أشجار البلسان.", benefit: "فعالة جداً في الوقاية وعلاج نزلات البرد والإنفلونزا.", warning: "لا تؤكل الثمار خاماً لأنها سامة؛ يجب طهيها أولاً.", tips: ["تؤخذ غالباً على شكل شراب مركز.", "تعتبر مضاداً طبيعياً قوياً للفيروسات."] }
    },
    {
        id: 327,
        img: "img/herbal/327.jpg",
        ku: { title: "ئەستراگالوس (Astragalus)", desc: "ڕەگی ڕووەکێکە کە لە طبینیدا بەکاردێت.", benefit: "بۆ بەهێزکردنی دڵ و درێژکردنەوەی تەمەنی خانەکان بەسوودە.", warning: "لەوانەیە کارلێک لەگەڵ دەرمانی بەرگری جەستە بکات.", tips: ["بۆ ماوەیەکی درێژ بەکاردێت بۆ بەهێزبوونی گشتی.", "لە شۆربادا دەکوڵێنرێت."] },
        en: { title: "Astragalus", desc: "A root used in traditional Chinese medicine for longevity.", benefit: "Supports heart health and boosts the overall immune system.", warning: "May interact with immunosuppressant medications.", tips: ["Used long-term for general strengthening.", "Roots can be added to soups and broths."] },
        ar: { title: "أستراغالوس", desc: "جذر يستخدم في الطب الصيني التقليدي لتعزيز الحيوية.", benefit: "يدعم صحة القلب ويعزز جهاز المناعة بشكل عام.", warning: "قد يتداخل مع الأدوية المثبطة للمناعة.", tips: ["يستخدم لفترات طويلة للتقوية العامة.", "يمكن إضافة الجذور للحساء."] }
    },
    {
        id: 328,
        img: "img/herbal/328.jpg",
        ku: { title: "ئاشواگاندا (Ashwagandha)", desc: "ڕووەکێکی بەناوبانگی هیندییە (Adaptogen).", benefit: "بۆ کەمکردنەوەی فشار (Stress) و دڵەڕاوکێ و بەهێزی ماسولکە نایابە.", warning: "نابێت لە کاتی دووگیانیدا بەکاربێت.", tips: ["شەوان پێش خەوتن لەگەڵ شیر بخورێتەوە.", "یارمەتی هاوسەنگی هۆرمۆنەکان دەدات."] },
        en: { title: "Ashwagandha", desc: "An ancient medicinal herb known as an adaptogen.", benefit: "Excellent for reducing stress, anxiety, and improving strength.", warning: "Do not use during pregnancy.", tips: ["Mix with warm milk before bed for better results.", "Helps balance hormones and cortisol levels."] },
        ar: { title: "أشواغاندا", desc: "عشب طبي قديم معروف بقدرته على مساعدة الجسم على التكيف مع التوتر.", benefit: "ممتازة لتقليل التوتر، القلق، وتحسين القوة البدنية.", warning: "يمنع استخدامها أثناء الحمل.", tips: ["تخلط مع الحليب الدافئ قبل النوم.", "تساعد في توازن الهرمونات ومستويات الكورتيزول."] }
    },
    {
        id: 329,
        img: "img/herbal/329.jpg",
        ku: { title: "کالێندولا (Calendula)", desc: "گوڵێکی زەرد یان پرتەقاڵییە.", benefit: "بۆ چاکبوونەوەی برین، سووتاوی و هەوکردنی پێست نایابە.", warning: "تەنها بۆ بەکارهێنانی دەرەکی (سەر پێست) باشترینە.", tips: ["وەک کرێم یان زەیت بەکاردێت.", "بۆ سووتانەوەی دایبی منداڵ زۆر باشە."] },
        en: { title: "Calendula", desc: "A bright yellow or orange flower often called Pot Marigold.", benefit: "Excellent for healing wounds, burns, and skin inflammation.", warning: "Best for external topical use.", tips: ["Used in salves, creams, and oils.", "Very effective for baby diaper rash."] },
        ar: { title: "کاليندولا", desc: "زهرة صفراء أو برتقالية مشرقة تعرف أيضاً بآذريون الحدائق.", benefit: "ممتازة لالتئام الجروح، الحروق، والتهابات الجلد.", warning: "يفضل استخدامها موضعياً على الجلد.", tips: ["تستخدم في المراهم والكريمات والزيوت.", "فعالة جداً لالتهاب الحفاضات عند الأطفال."] }
    },
    {
        id: 330,
        img: "img/herbal/330.jpg",
        ku: { title: "ئۆریگانۆ (Oregano)", desc: "بەهاراتێکی بەناوبانگە بەڵام سوودی پزیشکی زۆری هەیە.", benefit: "بەهێزترین دژە-بەکتریا و دژە-کەڕووی سروشتییە.", warning: "زەیتی ئۆریگانۆ زۆر توندە و دەبێت هەمیشە تێکەڵ بکرێت.", tips: ["بۆ هەوکردنی سینۆزایتس و قوڕگ باشە.", "لە پیتزا و مەعکەرۆنەشدا بەکاردێت."] },
        en: { title: "Oregano", desc: "A popular culinary herb with powerful medicinal properties.", benefit: "A very strong natural antibacterial and antifungal agent.", warning: "Oregano oil is very potent and must be diluted.", tips: ["Good for sinus and throat infections.", "Widely used in Mediterranean cooking."] },
        ar: { title: "الأوريغانو", desc: "عشب طهي شهير يمتلك خصائص طبية قوية جداً.", benefit: "يعتبر مضاداً قوياً جداً للبكتيريا والفطريات.", warning: "زيت الأوريغانو مركز جداً ويجب تخفيفه دائماً.", tips: ["مفيد لالتهابات الجيوب الأنفية والحلق.", "يستخدم بكثرة في المطبخ المتوسطي."] }
    }
];
