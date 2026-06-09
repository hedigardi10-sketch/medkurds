const signlanguageData = [
    {
        id: 3001,
        ku: { title: "ئازارت هەیە؟", desc: "چۆنیەتی ئاماژە: دەستی ڕاستت بکەرە شێوەی مستەکۆڵە و پەنجەی دۆشاوەمژەت دەربهێنە، پاشان بەرەو سکت یان شوێنی ئازارەکە ئاماژەی پێ بکە لەگەڵ پیشاندانی نیشانەی ئازار لەسەر ڕووخسارت.", symptoms: ["گرژبوونی دەموچاو", "ئاڕەقکردنەوە", "خێرا لێدانی دڵ لە کاتی ئازاری زۆردا"], treatment: ["پێدانی ئازارشکێنی گونجاو بەپێی ڕێنمایی پزیشک", "ئارامکردنەوەی نەخۆشەکە و دۆزینەوەی هۆکاری ئازارەکە"] },
        en: { title: "Are you in pain?", desc: "How to sign: Point your index fingers toward each other and tap them together twice, or point to the area of pain.", symptoms: ["Facial grimacing", "Sweating", "Increased heart rate"], treatment: ["Administer prescribed analgesics", "Identify the source of pain and reassure the patient"] },
        ar: { title: "هل تتألم؟", desc: "كيفية الإشارة: أشر بإصبعك السبابة نحو مكان الألم مع إظهار تعبيرات وجه تدل على الانزعاج.", symptoms: ["تقطيب الوجه", "التعرق", "تسارع ضربات القلب عند الألم الشديد"], treatment: ["إعطاء مسكنات الألم المناسبة حسب وصفة الطبيب", "تهدئة المريض وتحديد سبب الألم"] }
    },
    {
        id: 3002,
        ku: { title: "سەرئێشە", desc: "چۆنیەتی ئاماژە: هەردوو دەستت بە شێوەی کراوە بهێنە نزیک سەرت و کەمێک پێستی سەرت مەساج بکە، یان پەنجەی دۆشاوەمژەت بخەرە سەر ناوچەوانت و دەموچاوت گرژ بکە.", symptoms: ["ئازار لە بەشی پێشەوە یان دواوەی سەر", "هەستیاری بە ڕووناکی و دەنگ", "دڵتێکەڵهاتن لە هەندێک جۆری وەک شەقیقە"], treatment: ["خواردنی پاراسیتامۆڵ یان پرۆفین", "پشوودان لە ژوورێکی تاریک و بێدەنگدا", "خواردنەوەی ئاوی پێویست"] },
        en: { title: "Headache", desc: "How to sign: Bring your index fingers near your forehead and point to your head while slightly wincing.", symptoms: ["Pain in the head", "Sensitivity to light/sound", "Nausea (in migraines)"], treatment: ["Pain relievers (Paracetamol/Ibuprofen)", "Rest in a quiet, dark room", "Adequate hydration"] },
        ar: { title: "صداع / ألم في الرأس", desc: "كيفية الإشارة: ضع إصبعك السبابة على جبهتك أو رأسك مع تقطيب حاجبيك.", symptoms: ["ألم في الرأس", "حساسية للضوء والصوت", "غثيان (في حالات الشقيقة)"], treatment: ["تناول مسكنات الألم (باراسيتامول/ايبوبروفين)", "الراحة في غرفة مظلمة وهادئة", "شرب كميات كافية من الماء"] }
    },
    {
        id: 3003,
        ku: { title: "هەناسەتەنگی / سنگ ئێشە", desc: "چۆنیەتی ئاماژە: هەردوو دەستت بخەرە سەر سنگت و جوڵەیەک بکە وەک ئەوەی سنگت قورس بووبێت، پاشان هەناسەیەکی قووڵ هەڵمژە بە سەختی.", symptoms: ["تەنگەنەفەسی و خێرا هەناسەدان", "هەستکردن بە قورسایی لەسەر سنگ", "شینبوونی لێو و پەنجەکان لە کاتی کەمی ئۆکسجین"], treatment: ["دانانی نەخۆش لە باری دانیشتن (Semi-Fowler's)", "پێدانی ئۆکسجین ئەگەر پێویست بوو", "پەیوەندیکردن بە فریاگوزاری بەپەلە"] },
        en: { title: "Shortness of Breath / Chest Pain", desc: "How to sign: Place your flat hand on your chest and move it up and down while simulating heavy breathing.", symptoms: ["Difficulty breathing", "Chest heaviness", "Cyanosis (bluish lips) if severe"], treatment: ["Position patient in Semi-Fowler's", "Administer oxygen if needed", "Call for emergency medical help"] },
        ar: { title: "ضيق تنفس / ألم في الصدر", desc: "كيفية الإشارة: ضع يدك المسطحة على صدرك وقم بتمثيل صعوبة التنفس.", symptoms: ["صعوبة وسرعة في التنفس", "شعور بثقل في الصدر", "ازرقاق الشفاه في الحالات الشديدة"], treatment: ["وضع المريض في وضعية الجلوس", "إعطاء الأكسجين إذا لزم الأمر", "الاتصال بالطوارئ فوراً"] }
    },
    {
        id: 3004,
        ku: { title: "خوێن وەرگرتن / دەرزی", desc: "چۆنیەتی ئاماژە: پەنجەی دۆشاوەمژەت وەک دەرزییەک بەکاربهێنە و ئاماژە بە قۆڵت یان دەماری دەستت بکە.", symptoms: ["ترس یان دڵەڕاوکێ لای نەخۆش (فۆبیای دەرزی)", "ئازارێکی کورت لە کاتی لێدانی دەرزییەکە"], treatment: ["بەکارهێنانی تەکنیکی دروست بۆ دۆزینەوەی دەمار", "پاککردنەوەی شوێنەکە بە کحول", "دڵدانەوەی نەخۆشەکە و پێگرتنی لۆکە دوای وەرگرتنی خوێن"] },
        en: { title: "Blood Test / Injection", desc: "How to sign: Use your index finger to simulate holding a syringe, and tap your inner arm.", symptoms: ["Anxiety or fear of needles", "Brief sharp pain at the site"], treatment: ["Use proper technique to locate the vein", "Clean the site with alcohol swab", "Reassure patient and apply pressure afterward"] },
        ar: { title: "سحب دم / إبرة", desc: "كيفية الإشارة: استخدم إصبعك السبابة كمحقنة وقم بالإشارة إلى ذراعك من الداخل.", symptoms: ["خوف أو قلق المريض من الإبر", "ألم قصير ومفاجئ عند الوخز"], treatment: ["استخدام التقنية الصحيحة للعثور على الوريد", "تعقيم المكان بالكحول", "طمأنة المريض والضغط بقطنة بعد السحب"] }
    },
    {
        id: 3005,
        ku: { title: "خواردنی دەرمان / حەب", desc: "چۆنیەتی ئاماژە: دەستت بکەرە شێوەی ئەوەی حەبێک دەگریت و بیبە بۆ لای دەمت، دواتر جوڵەی قوتدان بکە.", symptoms: ["وشکبوونی دەم لە کاتی قوتدانی دەرمان", "تاڵبوونی دەم یان تێکچوونی گەدە ئەگەر لەسەر سکی ناشتا بخورێت"], treatment: ["خواردنەوەی پەرداخێک ئاوی تەواو لەگەڵ حەبەکە", "وەرگرتنی لە کاتی دیاریکراوی خۆیدا", "دڵنیابوونەوە لە قوتدانی حەبەکە لەلایەن نەخۆشەوە"] },
        en: { title: "Taking Medicine / Pills", desc: "How to sign: Pinch your thumb and index finger together, bring it to your mouth, and pretend to swallow.", symptoms: ["Dry mouth when swallowing", "Stomach upset if taken on an empty stomach"], treatment: ["Drink a full glass of water with the pill", "Take it at the prescribed time", "Ensure the patient actually swallows the medication"] },
        ar: { title: "أخذ الدواء / حبوب", desc: "كيفية الإشارة: ضم إصبعي الإبهام والسبابة، وضعها قرب فمك ثم قم بحركة البلع.", symptoms: ["جفاف الفم عند البلع", "اضطراب المعدة إذا أخذ على معدة فارغة"], treatment: ["شرب كوب كامل من الماء مع الحبة", "أخذ الدواء في وقته المحدد", "التأكد من أن المريض قد ابتلع الدواء فعلياً"] }
    },
    {
        id: 3006,
        ku: { title: "پەستانی خوێن (زەخت)", desc: "چۆنیەتی ئاماژە: دەستت بکێشە بە قۆڵی سەرەوەتدا و بە دەستەکەی ترت جوڵەی پەمپکردن بکە.", symptoms: ["لە زەختی بەرز: سەرئێشە، لێڵبوونی چاو، گێژبوون", "لە زەختی نزم: بێهێزی، ساردبوونی دەست و قاچ، بورانەوە"], treatment: ["بۆ زەختی بەرز: پێدانی دەرمانی دابەزاندنی زەخت و کەمکردنەوەی خوێ", "بۆ زەختی نزم: بەرزکردنەوەی قاچەکان و پێدانی شلەمەنی یان موغەزی"] },
        en: { title: "Blood Pressure", desc: "How to sign: Wrap one hand around your upper arm and use the other hand to mimic pumping the bulb.", symptoms: ["High BP: Headache, blurred vision", "Low BP: Dizziness, weakness, fainting"], treatment: ["High BP: Administer antihypertensives, reduce salt", "Low BP: Elevate legs, administer IV fluids"] },
        ar: { title: "قياس ضغط الدم", desc: "كيفية الإشارة: ضع يدك حول أعلى ذراعك واستخدم يدك الأخرى لتمثيل حركة ضخ الهواء.", symptoms: ["الضغط المرتفع: صداع، تشوش الرؤية", "الضغط المنخفض: دوار، ضعف، إغماء"], treatment: ["الضغط المرتفع: أدوية خفض الضغط، تقليل الملح", "الضغط المنخفض: رفع الساقين، إعطاء سوائل وريدية"] }
    },
    {
        id: 3007,
        ku: { title: "دڵتێکەڵهاتن و ڕشانەوە", desc: "چۆنیەتی ئاماژە: دەستت بخەرە سەر گەدەت و بە هێواشی بیشێلە، پاشان دەستت بهێنە بۆ لای دەمت بە شێوەی ڕشانەوە.", symptoms: ["ئارەقکردنەوەی سارد", "زۆر دەردانی لیک", "ئازاری گەدە و هاتنەدەرەوەی ناوەڕۆکی گەدە"], treatment: ["پێدانی دەرمانی دژە ڕشانەوە (وەک پلاسیل یان ئۆندانسێترۆن)", "قەرەبووکردنەوەی شلەمەنی بە موغەزی بۆ ڕێگری لە وشکبوونەوە", "مانەوە لەسەر لای ڕاست بۆ ڕێگری لە خنکان"] },
        en: { title: "Nausea and Vomiting", desc: "How to sign: Place a hand on your stomach in a circular motion, then bring your hand up to your mouth.", symptoms: ["Cold sweats", "Excessive salivation", "Expulsion of stomach contents"], treatment: ["Administer antiemetics (e.g., Plasil, Ondansetron)", "IV fluids to prevent dehydration", "Keep patient in lateral position to prevent aspiration"] },
        ar: { title: "غثيان وتقيؤ", desc: "كيفية الإشارة: ضع يدك على معدتك بحركة دائرية، ثم ارفع يدك نحو فمك.", symptoms: ["تعرق بارد", "زيادة إفراز اللعاب", "خروج محتويات المعدة"], treatment: ["إعطاء مضادات التقيؤ (مثل بلازيل)", "تعويض السوائل بالوريد لمنع الجفاف", "وضع المريض على جانبه لمنع الاختناق"] }
    },
    {
        id: 3008,
        ku: { title: "هێمن بەوە / مەترسە", desc: "چۆنیەتی ئاماژە: هەردوو دەستت بە کراوەیی (بەرەو خوارەوە) بهێنە خوارەوە بە هێواشی لە ئاستی سنگتەوە، لەگەڵ زەردەخەنەیەکی ئارامبەخش.", symptoms: ["دڵەڕاوکێی زۆر (Panic)", "هەناسەدانی خێرا (Hyperventilation)", "لەرزینی دەستەکان"], treatment: ["ڕاهێنانی هەناسەدانی قووڵ (وەک هەناسەدان بۆ ناو کیسی کاغەز)", "دڵدانەوەی نەخۆش بە قسەی ئارامکەرەوە", "لە کاتی زۆر پێویستدا پێدانی دەرمانی هێمنکەرەوە"] },
        en: { title: "Calm Down / Don't Worry", desc: "How to sign: Hold both hands flat, palms facing down, and slowly move them downward.", symptoms: ["Panic attacks", "Hyperventilation", "Tremors/shaking"], treatment: ["Guided deep breathing exercises", "Verbal reassurance", "Administer sedatives only if strictly necessary"] },
        ar: { title: "اهدأ / لا تقلق", desc: "كيفية الإشارة: افرد كلتا يديك بحيث يكون باطن الكف لأسفل، وحركهما ببطء نحو الأسفل.", symptoms: ["نوبات هلع", "فرط التنفس", "ارتجاف اليدين"], treatment: ["تمارين التنفس العميق", "الطمأنة اللفظية", "إعطاء المهدئات عند الضرورة القصوى فقط"] }
    },
    {
        id: 3009,
        ku: { title: "ئازاری گەدە / سک ئێشە", desc: "چۆنیەتی ئاماژە: هەردوو دەستت بخەرە سەر سکت و دەموچاوت گرژ بکە.", symptoms: ["ئازار و پێچ لە سکدا", "دڵتێکەڵهاتن یان سکچوون", "هەستکردن بە غازات"], treatment: ["پێدانی دەرمانی ئازارشکێنی سک", "دانانی پەڕۆی گەرم لەسەر سک", "خواردنەوەی شلەمەنی گەرم"] },
        en: { title: "Stomach ache", desc: "How to sign: Place both hands on your stomach and grimace.", symptoms: ["Abdominal cramps", "Nausea or diarrhea", "Bloating"], treatment: ["Administer antispasmodics", "Apply a warm compress", "Drink warm fluids"] },
        ar: { title: "ألم المعدة / مغص", desc: "كيفية الإشارة: ضع كلتا يديك على بطنك مع تقطيب وجهك.", symptoms: ["مغص في البطن", "غثيان أو إسهال", "انتفاخ وغازات"], treatment: ["إعطاء مضادات التشنج", "وضع كمادة دافئة على البطن", "شرب سوائل دافئة"] }
    },
    {
        id: 3010,
        ku: { title: "تا و لەرز", desc: "چۆنیەتی ئاماژە: دەستێک بخەرە سەر ناوچەوانت و باوەش بە خۆتدا بکە بۆ پیشاندانی لەرزین.", symptoms: ["بەرزبوونەوەی پلەی گەرمی", "لەرزین و هەستکردن بە سەرما", "ئارەقکردنەوە"], treatment: ["خواردنی پاراسیتامۆڵ", "کەمکردنەوەی جلی نەخۆش", "پێدانی شلەمەنی زۆر"] },
        en: { title: "Fever and Chills", desc: "How to sign: Place one hand on your forehead and hug yourself shivering.", symptoms: ["High body temperature", "Shivering and feeling cold", "Sweating"], treatment: ["Administer Paracetamol", "Remove heavy clothing", "Increase fluid intake"] },
        ar: { title: "حمى وقشعريرة", desc: "كيفية الإشارة: ضع يداً على جبهتك وعانق نفسك كأنك ترتجف.", symptoms: ["ارتفاع درجة الحرارة", "ارتجاف وشعور بالبرد", "تعرق"], treatment: ["إعطاء باراسيتامول", "تخفيف ملابس المريض", "زيادة شرب السوائل"] }
    },
    {
        id: 3011,
        ku: { title: "گێژبوون و بورانەوە", desc: "چۆنیەتی ئاماژە: پەنجەی دۆشاوەمژەت بە شێوەی بازنەیی لە دەوری سەرت بسووڕێنەوە و چاوەکانت دابخە.", symptoms: ["لێڵبوونی چاو", "هەستکردن بە سووڕانەوەی دەوروبەر", "لەدەستدانی هاوسەنگی"], treatment: ["پاڵخستنی نەخۆش و بەرزکردنەوەی قاچەکانی", "دابینکردنی هەوای پاک", "پشکنینی زەخت و شەکری خوێن"] },
        en: { title: "Dizziness and Fainting", desc: "How to sign: Move your index finger in a circular motion around your head and close your eyes.", symptoms: ["Blurred vision", "Vertigo", "Loss of balance"], treatment: ["Lay patient down and elevate legs", "Provide fresh air", "Check BP and blood sugar"] },
        ar: { title: "دوار وإغماء", desc: "كيفية الإشارة: حرك إصبعك السبابة بشكل دائري حول رأسك وأغمض عينيك.", symptoms: ["تشوش الرؤية", "الشعور بدوران المكان", "فقدان التوازن"], treatment: ["استلقاء المريض ورفع ساقيه", "توفير هواء نقي", "فحص الضغط والسكر"] }
    },
    {
        id: 3012,
        ku: { title: "سکچوون", desc: "چۆنیەتی ئاماژە: دەست بخەرە سەر سکت و بە پەنجەکانت ئاماژەی خێرا چوونە خوارەوە بکە بە ئاراستەی خوارەوە.", symptoms: ["دەرچوونی پاشەڕۆی شل", "پێچی سک", "وشکبوونەوەی جەستە"], treatment: ["پێدانی گیراوەی ORS", "پێدانی دەرمانی دژە سکچوون", "خواردنەوەی ئاوی زۆر"] },
        en: { title: "Diarrhea", desc: "How to sign: Hold your stomach and point downward quickly with your fingers.", symptoms: ["Loose watery stools", "Abdominal cramps", "Dehydration"], treatment: ["Provide ORS (Oral Rehydration Salts)", "Administer antidiarrheal", "Drink plenty of water"] },
        ar: { title: "إسهال", desc: "كيفية الإشارة: ضع يدك على بطنك وأشر بأصابعك بسرعة نحو الأسفل.", symptoms: ["براز سائل", "مغص", "جفاف"], treatment: ["إعطاء محلول الجفاف ORS", "إعطاء دواء مضاد للإسهال", "شرب الكثير من الماء"] }
    },
    {
        id: 3013,
        ku: { title: "خوێنبەربوون", desc: "چۆنیەتی ئاماژە: دەستێک بخەرە سەر شوێنی برینەکە و بە دەستەکەی ترت نیشانەی قەترەی خوێن بکە کە دەکەوێتە خوارەوە.", symptoms: ["دەرچوونی خوێن بەردەوام", "زەردبوونی ڕەنگی پێست", "دابەزینی زەخت"], treatment: ["گوشار خستنە سەر برینەکە", "بەرزکردنەوەی شوێنی برینەکە", "بەستنی برینپێچ (باندج)"] },
        en: { title: "Bleeding", desc: "How to sign: Hold the injured area and use the other hand to mimic blood drops falling.", symptoms: ["Continuous blood loss", "Pale skin", "Drop in BP"], treatment: ["Apply direct pressure", "Elevate the injured area", "Apply a bandage"] },
        ar: { title: "نزيف", desc: "كيفية الإشارة: ضع يداً على مكان الإصابة ومثل باليد الأخرى قطرات دم تتساقط.", symptoms: ["خروج دم مستمر", "شحوب الجلد", "انخفاض الضغط"], treatment: ["الضغط المباشر على الجرح", "رفع الجزء المصاب", "وضع ضمادة"] }
    },
    {
        id: 3014,
        ku: { title: "شکانی ئێسک", desc: "چۆنیەتی ئاماژە: هەردوو دەستت وەک دارێک بگرە و بیشکێنەوە لەگەڵ نیشاندانی دەموچاوی پڕ ئازار.", symptoms: ["ئازاری زۆر لە کاتی جوڵە", "ئاوسان و شینبوونەوە", "شێواویی شێوەی ئەندامەکە"], treatment: ["نەجوڵاندنی ئەندامە شکاوەکە", "دانانی تەختەبەند (Splint)", "گرتنی تیشکی ئێکس (X-ray)"] },
        en: { title: "Bone Fracture", desc: "How to sign: Hold your hands like a stick and snap it, making a pained face.", symptoms: ["Severe pain upon movement", "Swelling and bruising", "Deformity of the limb"], treatment: ["Immobilize the limb", "Apply a splint", "Take an X-ray"] },
        ar: { title: "كسر العظم", desc: "كيفية الإشارة: أمسك يديك كعصا واكسرها مع إظهار ملامح ألم.", symptoms: ["ألم شديد عند الحركة", "تورم وكدمات", "تشوه شكل الطرف"], treatment: ["تثبيت الطرف المصاب", "وضع جبيرة", "أخذ أشعة سينية"] }
    },
    {
        id: 3015,
        ku: { title: "سووتان", desc: "چۆنیەتی ئاماژە: دەستت وەک بڵێسەی ئاگر بجوڵێنە و پاشان فوو لە دەست یان شوێنی سووتاوییەکە بکە.", symptoms: ["سووربوونەوەی پێست", "دروستبوونی بڵق", "ئازاری زۆر یان لەدەستدانی هەست"], treatment: ["ساردکردنەوەی شوێنەکە بە ئاوی ئاسایی (نەک سەهۆڵ)", "بەکارهێنانی مەرهەمی سووتان", "داپۆشینی بە پەڕۆی پاک و وشک"] },
        en: { title: "Burn", desc: "How to sign: Move your hand like flickering flames, then blow on your hand or arm.", symptoms: ["Redness of skin", "Blistering", "Severe pain or numbness"], treatment: ["Cool the area with tap water (no ice)", "Apply burn ointment", "Cover with a clean dry dressing"] },
        ar: { title: "حرق", desc: "كيفية الإشارة: حرك يدك كألسنة اللهب ثم انفخ على يدك أو مكان الإصابة.", symptoms: ["احمرار الجلد", "تكون فقاعات", "ألم شديد أو تنميل"], treatment: ["تبريد المكان بماء الصنبور (لا تستخدم الثلج)", "وضع مرهم للحروق", "تغطية الجرح بضمادة نظيفة وجافة"] }
    },
    {
        id: 3016,
        ku: { title: "کۆکە و قورگ ئێشە", desc: "چۆنیەتی ئاماژە: دەستت بخەرە سەر قورگت و چەند جارێک نیشانەی کۆکین بکە.", symptoms: ["کۆکەی وشک یان تەڕ", "ئازار لە کاتی قووتدان", "تێگیرانی دەنگ"], treatment: ["خواردنەوەی شلەمەنی گەرم", "بەکارهێنانی شروبی کۆکە", "دەرمانی ئازارشکێن و دژەهەوکردن"] },
        en: { title: "Cough and Sore Throat", desc: "How to sign: Put your hand on your throat and fake a few coughs.", symptoms: ["Dry or wet cough", "Pain when swallowing", "Hoarseness"], treatment: ["Drink warm fluids", "Use cough syrup", "Analgesics and anti-inflammatories"] },
        ar: { title: "سعال وألم حنجرة", desc: "كيفية الإشارة: ضع يدك على حلقك ومثل أنك تسعل.", symptoms: ["سعال جاف أو رطب", "ألم عند البلع", "بحة في الصوت"], treatment: ["شرب سوائل دافئة", "استخدام شراب السعال", "مسكنات ومضادات التهاب"] }
    },
    {
        id: 3017,
        ku: { title: "ئازاری پشت", desc: "چۆنیەتی ئاماژە: دەستەکانت بخەرە سەر بەشی خوارەوەی پشتت و کەمێک خۆت بچەمێنەوە بە ئازارەوە.", symptoms: ["ئازار لە کاتی چەمینەوە", "ڕەقبوونی ماسولکەی پشت", "ئازار کە دادەبەزێت بۆ قاچ (سایەتیکا)"], treatment: ["پشوودان بۆ ماوەیەکی کورت", "بەکارهێنانی مەرهەمی ئازارشکێن", "دەرمانی خاوکەرەوەی ماسولکە"] },
        en: { title: "Back Pain", desc: "How to sign: Place your hands on your lower back and bend slightly in pain.", symptoms: ["Pain when bending", "Stiff back muscles", "Radiating pain to the leg (sciatica)"], treatment: ["Short-term rest", "Apply analgesic ointment", "Muscle relaxants"] },
        ar: { title: "ألم الظهر", desc: "كيفية الإشارة: ضع يديك على أسفل ظهرك وانحنِ قليلاً متألماً.", symptoms: ["ألم عند الانحناء", "تصلب عضلات الظهر", "ألم يمتد للساق (عرق النسا)"], treatment: ["راحة قصيرة الأمد", "استخدام مرهم مسكن", "مرخيات عضلية"] }
    },
    {
        id: 3018,
        ku: { title: "ئازاری ددان", desc: "چۆنیەتی ئاماژە: پەنجەت بخەرە سەر ڕوومەتت لە لای ددانە ئازاردارەکە و دەموچاوت گرژ بکە.", symptoms: ["ئازار لە کاتی جوین", "هەستیاری بە گەرمی و ساردی", "ئاوسانی پووک یان ڕوومەت"], treatment: ["پێدانی ئازارشکێن (وەک پرۆفین)", "بەکارهێنانی قەترەی ددان", "سەردانی پزیشکی ددان"] },
        en: { title: "Toothache", desc: "How to sign: Put your finger on your cheek over the painful tooth and grimace.", symptoms: ["Pain when chewing", "Hot/cold sensitivity", "Swelling of gums or cheek"], treatment: ["Give painkillers (e.g., Ibuprofen)", "Apply tooth drops", "Visit a dentist"] },
        ar: { title: "ألم الأسنان", desc: "كيفية الإشارة: ضع إصبعك على خدك جهة السن المؤلم وقطّب وجهك.", symptoms: ["ألم عند المضغ", "حساسية للحرارة والبرودة", "تورم اللثة أو الخد"], treatment: ["إعطاء مسكنات (مثل ايبوبروفين)", "استخدام قطرات أسنان", "زيارة طبيب الأسنان"] }
    },
    {
        id: 3019,
        ku: { title: "هەستیاری (حەساسیەت)", desc: "چۆنیەتی ئاماژە: بە خێرایی قۆڵ و دەستت بخورێنە و نیشانەی ئەوە بکە کە پێستت سوور بووەتەوە.", symptoms: ["خورانی پێست و سووربوونەوە", "پژمین و تەڕبوونی چاو", "تەنگەنەفەسی لە باری قورسدا"], treatment: ["پێدانی دەرمانی دژە هێستامین", "دوورکەوتنەوە لە هۆکاری هەستیارییەکە", "دەرزی ئەدریناڵین بۆ شۆکی حەساسیەت"] },
        en: { title: "Allergy", desc: "How to sign: Quickly scratch your arms and hands, indicating an itch.", symptoms: ["Itchy red skin", "Sneezing and watery eyes", "Shortness of breath (severe)"], treatment: ["Administer antihistamines", "Avoid the allergen", "Adrenaline auto-injector for anaphylaxis"] },
        ar: { title: "حساسية", desc: "كيفية الإشارة: حك ذراعيك ويديك بسرعة دلالة على الحكة.", symptoms: ["حكة واحمرار الجلد", "عطس وتدميع العينين", "ضيق تنفس في الحالات الشديدة"], treatment: ["إعطاء مضادات الهيستامين", "الابتعاد عن مسبب الحساسية", "إبرة أدرينالين في صدمة الحساسية"] }
    },
    {
        id: 3020,
        ku: { title: "ڕەبۆ (تەنگەنەفەسی)", desc: "چۆنیەتی ئاماژە: دەستت بخەرە بەر دەمت و نیشانەی بەکارهێنانی پەمپی هەناسەدان بکە.", symptoms: ["خیزەی سنگ", "کۆکە لە کاتی شەودا", "تەنگەنەفەسی"], treatment: ["بەکارهێنانی پەمپی سالبووتامۆڵ", "پێدانی ئۆکسجین", "دانیشتن بە شێوەی ڕاست"] },
        en: { title: "Asthma", desc: "How to sign: Bring your hand to your mouth and mimic using an asthma inhaler.", symptoms: ["Wheezing", "Nighttime cough", "Shortness of breath"], treatment: ["Use Salbutamol inhaler", "Administer oxygen", "Sit in an upright position"] },
        ar: { title: "ربو (أزمة تنفسية)", desc: "كيفية الإشارة: قرّب يدك من فمك ومثل استخدام بخاخ الربو.", symptoms: ["صفير في الصدر", "سعال ليلي", "ضيق تنفس"], treatment: ["استخدام بخاخ سالبوتامول", "إعطاء الأكسجين", "الجلوس بوضعية مستقيمة"] }
    },
    {
        id: 3021,
        ku: { title: "جەڵتەی دڵ", desc: "چۆنیەتی ئاماژە: دەستی چەپت بە توندی بنێ بە سنگی چەپتەوە و ئاماژە بە ئازارێک بکە کە دەچێت بۆ قۆڵی چەپ.", symptoms: ["ئازارێکی توندی پەستێنەر لە سنگ", "ئازار بڵاودەبێتەوە بۆ مل و قۆڵی چەپ", "ئارەقەی سارد"], treatment: ["خواردنی حەبی ژێرزمانی و ئەسپرین", "پەیوەندیکردنی خێرا بە ئەمبولانس", "ئامادەبوون بۆ CPR"] },
        en: { title: "Heart Attack", desc: "How to sign: Clutch your left chest tightly and indicate pain traveling down your left arm.", symptoms: ["Severe crushing chest pain", "Pain radiating to jaw or left arm", "Cold sweats"], treatment: ["Take sublingual nitroglycerin and aspirin", "Call ambulance immediately", "Prepare for CPR"] },
        ar: { title: "نوبة قلبية", desc: "كيفية الإشارة: أمسك صدرك الأيسر بقوة وأشر لألم يمتد لذراعك الأيسر.", symptoms: ["ألم شديد ضاغط في الصدر", "ألم يمتد للفك والذراع الأيسر", "تعرق بارد"], treatment: ["أخذ حبة تحت اللسان وأسبرين", "الاتصال بالإسعاف فوراً", "الاستعداد للإنعاش القلبي"] }
    },
    {
        id: 3022,
        ku: { title: "دابەزینی شەکرە (Hypoglycemia)", desc: "چۆنیەتی ئاماژە: پەنجەت بخەرە سەر زمانت وەک ئەوەی شتێکی شیرین بخۆیت و پاشان دەستت بلەرزێنە.", symptoms: ["لەرزین و بێهێزی", "برسێتی زۆر و ئارەقکردنەوە", "گێژبوون و لێڵبوونی چاو"], treatment: ["خواردنی شتێکی شیرین یان شەربەت", "پێدانی موغەزی گلۆکۆز لە نەخۆشخانە", "چاودێریکردنی ڕێژەی شەکر"] },
        en: { title: "Hypoglycemia (Low Blood Sugar)", desc: "How to sign: Tap your tongue indicating sweet food, then let your hands tremble.", symptoms: ["Trembling and weakness", "Extreme hunger and sweating", "Dizziness and blurred vision"], treatment: ["Eat something sweet or drink juice", "IV glucose in hospital", "Monitor blood sugar"] },
        ar: { title: "انخفاض السكر", desc: "كيفية الإشارة: المس لسانك كأنك تتذوق حلاوة ثم اجعل يديك ترتجفان.", symptoms: ["ارتجاف وضعف", "جوع شديد وتعرق", "دوار وتشوش الرؤية"], treatment: ["أكل شيء حلو أو شرب عصير", "إعطاء جلوكوز وريدي بالمستشفى", "مراقبة نسبة السكر"] }
    },
    {
        id: 3023,
        ku: { title: "بەرزبوونەوەی شەکرە (Hyperglycemia)", desc: "چۆنیەتی ئاماژە: دەستت وەک پەرداخێک بگرە و نیشانەی ئاو خواردنەوەی زۆر و چوونە تەوالێت بکە.", symptoms: ["تینوێتی زۆر", "زۆر میزکردن", "ماندووێتی و بێهێزی"], treatment: ["لێدانی ئەنسۆلین", "پێدانی موغەزی نۆرمەڵ سەلاین", "پشکنینی بەردەوامی شەکرە"] },
        en: { title: "Hyperglycemia (High Blood Sugar)", desc: "How to sign: Mimic holding a cup and drinking heavily, then point as if going to the toilet.", symptoms: ["Excessive thirst", "Frequent urination", "Fatigue and weakness"], treatment: ["Administer insulin", "IV Normal Saline", "Frequent blood sugar monitoring"] },
        ar: { title: "ارتفاع السكر", desc: "كيفية الإشارة: مثل شرب الماء بكثرة ثم أشر كأنك تذهب للحمام.", symptoms: ["عطش شديد", "تبول متكرر", "تعب وإرهاق"], treatment: ["حقن الإنسولين", "محلول ملحي وريدي", "مراقبة السكر باستمرار"] }
    },
    {
        id: 3024,
        ku: { title: "هەوکردنی گوێ", desc: "چۆنیەتی ئاماژە: پەنجەت بخەرە ناو یان نزیک گوێت و دەموچاوت گرژ بکە بۆ نیشاندانی ئازار.", symptoms: ["ئازاری گوێ (بەتایبەت لە کاتی پاڵکەوتن)", "دەرچوونی شلەی زەرد یان کێم", "کەمبوونەوەی بیستن"], treatment: ["قەترەی گوێ و ئازارشکێن", "دەرمانی دژە بەکتریا (ئەنتی بایۆتیک)", "خاوێن ڕاگرتنی گوێ"] },
        en: { title: "Ear Infection", desc: "How to sign: Point your finger at or slightly inside your ear and wince.", symptoms: ["Ear pain (especially lying down)", "Drainage of yellow fluid or pus", "Reduced hearing"], treatment: ["Ear drops and painkillers", "Antibiotics", "Keep the ear dry and clean"] },
        ar: { title: "التهاب الأذن", desc: "كيفية الإشارة: ضع إصبعك عند أذنك وقطّب ملامحك للألم.", symptoms: ["ألم بالأذن (خاصة عند الاستلقاء)", "إفرازات صفراء أو صديد", "ضعف السمع"], treatment: ["قطرات أذن ومسكنات", "مضادات حيوية", "الحفاظ على جفاف ونظافة الأذن"] }
    },
    {
        id: 3025,
        ku: { title: "ئازاری چاو", desc: "چۆنیەتی ئاماژە: پەنجەکانت نزیک چاوەکانت بکەرەوە و چاوت دابخە وەک ئەوەی ڕووناکی ئازاریت بدات.", symptoms: ["سووربوونەوەی چاو", "ئاوکردنی چاو", "هەستیاری بە ڕووناکی"], treatment: ["شۆردنی چاو بە ئاوی پاک", "بەکارهێنانی قەترەی چاو", "لەچاوکردنی چاویلکەی تاریک"] },
        en: { title: "Eye Pain", desc: "How to sign: Bring fingers near your eyes and squint or close them as if avoiding bright light.", symptoms: ["Redness of the eye", "Watery eyes", "Light sensitivity"], treatment: ["Flush eyes with clean water", "Use eye drops", "Wear dark sunglasses"] },
        ar: { title: "ألم العين", desc: "كيفية الإشارة: قرب أصابعك من عينيك وأغمضهما كأنك تتجنب الضوء الساطع.", symptoms: ["احمرار العين", "تدميع العين", "حساسية للضوء"], treatment: ["غسل العين بماء نظيف", "استخدام قطرات عين", "ارتداء نظارة شمسية داكنة"] }
    },
    {
        id: 3026,
        ku: { title: "ئازاری جومگەکان", desc: "چۆنیەتی ئاماژە: بە دەستێک ئەژنۆ یان ئەنیشکت بگرە و بە هێواشی بیشێلە.", symptoms: ["ئاوسان و سووربوونەوەی جومگە", "ئازار لە کاتی جوڵە", "ڕەقبوونی جومگەکان لە بەیانیاندا"], treatment: ["پشوودانی جومگەکە", "بەکارهێنانی مەرهەمی دژەهەوکردن", "گەرمکردن یان ساردکردنەوەی شوێنەکە"] },
        en: { title: "Joint Pain", desc: "How to sign: Hold your knee or elbow with one hand and rub it gently.", symptoms: ["Swelling and redness of the joint", "Pain upon movement", "Morning joint stiffness"], treatment: ["Rest the joint", "Use anti-inflammatory ointments", "Apply heat or cold packs"] },
        ar: { title: "ألم المفاصل", desc: "كيفية الإشارة: أمسك ركبتك أو مرفقك وافركه بلطف.", symptoms: ["تورم واحمرار المفصل", "ألم عند الحركة", "تصلب المفاصل الصباحي"], treatment: ["إراحة المفصل", "استخدام مراهم مضادة للالتهاب", "وضع كمادات حارة أو باردة"] }
    },
    {
        id: 3027,
        ku: { title: "کێشەی میزکردن", desc: "چۆنیەتی ئاماژە: دەستت بخەرە سەر بەشی خوارەوەی سکت (میزڵدان) و نیشانەی ئازار یان سووتانەوە بکە.", symptoms: ["سوتانەوە لە کاتی میزکردن", "میزکردنی زۆر و بەردەوام", "گۆڕانی ڕەنگی میز"], treatment: ["خواردنەوەی ئاوی زۆر", "پێدانی دەرمانی دژەهەوکردنی میزڵدان", "پشکنینی میز"] },
        en: { title: "Urination Problems", desc: "How to sign: Place your hand over your lower abdomen (bladder) and indicate burning pain.", symptoms: ["Burning sensation during urination", "Frequent urination", "Change in urine color"], treatment: ["Drink plenty of water", "Administer UTI antibiotics", "Urinalysis"] },
        ar: { title: "مشاكل التبول", desc: "كيفية الإشارة: ضع يدك على أسفل بطنك (المثانة) ومثل الشعور بحرقة أو ألم.", symptoms: ["حرقة عند التبول", "التبول المتكرر", "تغير لون البول"], treatment: ["شرب ماء وفير", "إعطاء مضادات التهاب المسالك", "فحص البول"] }
    },
    {
        id: 3028,
        ku: { title: "ئازاری سوڕی مانگانە", desc: "چۆنیەتی ئاماژە: دەستەکانت بخەرە سەر سکت لە خوارەوە و بە ئازارەوە خۆت بچەمێنەوە.", symptoms: ["پێچ و گرژبوونی خوارەوەی سک", "ئازاری پشت", "بێهێزی و سەرئێشە"], treatment: ["بەکارهێنانی جەوەنەی گەرم", "حەبی ئازارشکێن (وەک پۆنستان)", "خواردنەوەی چای ڕووەکی"] },
        en: { title: "Menstrual Cramps", desc: "How to sign: Place hands on lower abdomen and double over slightly in pain.", symptoms: ["Lower abdominal cramps", "Lower back pain", "Fatigue and headache"], treatment: ["Use a heating pad", "Painkillers (e.g., Ponstan/Mefenamic acid)", "Drink herbal tea"] },
        ar: { title: "آلام الدورة الشهرية", desc: "كيفية الإشارة: ضع يديك أسفل بطنك وانحنِ للأمام قليلاً متألماً.", symptoms: ["تقلصات أسفل البطن", "ألم أسفل الظهر", "تعب وصداع"], treatment: ["استخدام كمادة دافئة", "مسكنات (مثل بونستان)", "شرب شاي أعشاب دافئ"] }
    },
    {
        id: 3029,
        ku: { title: "دووگیانی", desc: "چۆنیەتی ئاماژە: هەردوو دەستت بە شێوەی کەوانەیی بخەرە سەر سکت بۆ نیشاندانی سکی گەورە.", symptoms: ["نەمانی سوڕی مانگانە", "دڵتێکەڵهاتنی بەیانیان", "گۆڕانی ئارەزووی خواردن"], treatment: ["سەردانی پزیشکی ئافرەتان", "پشکنینی سەلامەتی کۆرپەلە", "وەرگرتنی ڤیتامین و فۆلیک ئەسید"] },
        en: { title: "Pregnancy", desc: "How to sign: Place both hands in a semi-circle over your stomach to outline a baby bump.", symptoms: ["Missed period", "Morning sickness", "Changes in appetite"], treatment: ["Visit an obstetrician", "Fetal ultrasound", "Take prenatal vitamins and folic acid"] },
        ar: { title: "حمل", desc: "كيفية الإشارة: ضع يديك بشكل مقوس على بطنك لتمثيل بطن الحامل.", symptoms: ["انقطاع الدورة الشهرية", "غثيان الصباح", "تغير الشهية"], treatment: ["زيارة طبيبة نسائية", "فحص الموجات الصوتية للجنين", "أخذ فيتامينات وحمض الفوليك"] }
    },
    {
        id: 3030,
        ku: { title: "گرژبوونی ماسولکە", desc: "چۆنیەتی ئاماژە: بە توندی ماسولکەی قۆڵ یان قاچت بگرە و دەموچاوت گرژ بکە.", symptoms: ["ئازاری کتوپڕ لە ماسولکە", "ڕەقبوونی ماسولکەکە", "نەتوانینی جوڵاندن بۆ ماوەیەک"], treatment: ["ڕاکێشان و مەساجکردنی ماسولکەکە", "بەکارهێنانی گەرمی", "خواردنەوەی ئاو و خوێی پێویست"] },
        en: { title: "Muscle Cramp", desc: "How to sign: Grip your arm or leg muscle tightly and wince in pain.", symptoms: ["Sudden sharp muscle pain", "Muscle stiffness", "Temporary inability to move the muscle"], treatment: ["Stretch and massage the muscle", "Apply heat", "Hydrate and restore electrolytes"] },
        ar: { title: "تشنج عضلي", desc: "كيفية الإشارة: أمسك عضلة ذراعك أو ساقك بقوة وقطّب وجهك ألماً.", symptoms: ["ألم عضلي مفاجئ", "تصلب العضلة", "عدم القدرة المؤقتة على الحركة"], treatment: ["إطالة وتدليك العضلة", "استخدام كمادة دافئة", "شرب ماء وأملاح كافية"] }
    },
    {
        id: 3031,
        ku: { title: "سەرمابوون (پەتای وەرزی)", desc: "چۆنیەتی ئاماژە: بە کلینیکسێک لووتت بسڕە و چەند جارێک بپژمە.", symptoms: ["لووت گیران یان تەڕبوونی لووت", "پژمین و کۆکە", "کەمێک تا و بێهێزی"], treatment: ["خواردنی حەبی پەتا و ڤیتامین C", "پشوودان", "خواردنەوەی شلەمەنی گەرم"] },
        en: { title: "Common Cold", desc: "How to sign: Mimic blowing your nose with a tissue and sneeze.", symptoms: ["Stuffy or runny nose", "Sneezing and coughing", "Mild fever and fatigue"], treatment: ["Cold medicine and Vitamin C", "Rest", "Drink warm fluids"] },
        ar: { title: "زكام (برد)", desc: "كيفية الإشارة: مثل مسح أنفك بمنديل مع العطس.", symptoms: ["انسداد أو سيلان الأنف", "عطس وسعال", "حمى خفيفة وتعب"], treatment: ["أدوية الزكام وفيتامين سي", "الراحة", "شرب سوائل دافئة"] }
    },
    {
        id: 3032,
        ku: { title: "خەوزڕان", desc: "چۆنیەتی ئاماژە: هەردوو چاوت بە کراوەیی بهێڵەوە، پەنجەکانت بخەرە سەر چاوت وەک ئەوەی بڵێی خەوم لێناکەوێت.", symptoms: ["نەتوانینی خەوتن شەوانە", "زوو خەبەربوونەوە", "ماندووێتی ڕۆژانە"], treatment: ["ڕێکخستنی کاتی خەوتن", "دوورکەوتنەوە لە مۆبایل پێش خەو", "خواردنەوەی چای بەیبوون"] },
        en: { title: "Insomnia", desc: "How to sign: Keep your eyes wide open, tap under your eyes indicating lack of sleep.", symptoms: ["Inability to fall asleep", "Waking up early", "Daytime fatigue"], treatment: ["Regulate sleep schedule", "Avoid screens before bed", "Drink chamomile tea"] },
        ar: { title: "أرق", desc: "كيفية الإشارة: أبقِ عينيك مفتوحتين وأشر تحت عينيك دلالة على السهر.", symptoms: ["صعوبة النوم ليلاً", "الاستيقاظ المبكر", "تعب أثناء النهار"], treatment: ["تنظيم جدول النوم", "تجنب الشاشات قبل النوم", "شرب بابونج"] }
    },
    {
        id: 3033,
        ku: { title: "شۆکی کارەبایی", desc: "چۆنیەتی ئاماژە: جەستەت بە خێرایی بلەرزێنە وەک ئەوەی کارەبا لێتبدات.", symptoms: ["سووتانی شوێنی بەرکەوتنەکان", "گرژبوونی توندی ماسولکەکان", "ناڕێکی یان وەستانی لێدانی دڵ"], treatment: ["پچڕاندنی سەرچاوەی کارەباکە پێش دەستدان لە نەخۆش", "پشکنینی دڵ و هەناسەدان", "گواستنەوەی خێرا بۆ نەخۆشخانە"] },
        en: { title: "Electric Shock", desc: "How to sign: Shake your body rapidly mimicking being electrocuted.", symptoms: ["Burns at entry/exit points", "Severe muscle contractions", "Irregular heart rhythm or arrest"], treatment: ["Cut power source before touching patient", "Check ABCs (Airway, Breathing, Circulation)", "Rush to hospital"] },
        ar: { title: "صعقة كهربائية", desc: "كيفية الإشارة: ارتجف بسرعة كأن تياراً كهربائياً يمر بجسدك.", symptoms: ["حروق في نقاط الدخول والخروج", "انقباضات عضلية شديدة", "اضطراب أو توقف القلب"], treatment: ["فصل مصدر الكهرباء قبل لمس المريض", "فحص التنفس والقلب", "نقل سريع للمستشفى"] }
    },
    {
        id: 3034,
        ku: { title: "ژەهراویبوون بە خۆراک", desc: "چۆنیەتی ئاماژە: ئاماژە بە خواردنێک بکە بە دەمەوە، پاشان دەست بخەرە سەر سک و نیشانەی ڕشانەوە بکە.", symptoms: ["دڵتێکەڵهاتن و ڕشانەوە", "سکچوون و پێچی سک", "تا و سەرئێشە"], treatment: ["نەخواردنی خواردنی قورس بۆ چەند کاتژمێرێک", "قەرەبووکردنەوەی شلەمەنییەکان (ORS)", "پەنابردن بۆ پزیشک ئەگەر تا و خوێن لە پیساییدا هەبوو"] },
        en: { title: "Food Poisoning", desc: "How to sign: Point to eating food, then grab your stomach and mimic vomiting.", symptoms: ["Nausea and vomiting", "Diarrhea and stomach cramps", "Fever and headache"], treatment: ["Avoid solid food for a few hours", "Rehydration (ORS)", "See a doctor if severe symptoms or bloody stools"] },
        ar: { title: "تسمم غذائي", desc: "كيفية الإشارة: مثل أنك تأكل طعاماً، ثم امسك بطنك ومثل التقيؤ.", symptoms: ["غثيان وتقيؤ", "إسهال ومغص", "حمى وصداع"], treatment: ["تجنب الأكل الثقيل لعدة ساعات", "تعويض السوائل بالمحاليل", "مراجعة الطبيب عند وجود حمى أو دم بالبراز"] }
    },
    {
        id: 3035,
        ku: { title: "گیرانی بۆری هەناسە (خنکان)", desc: "چۆنیەتی ئاماژە: هەردوو دەستت بخەرە سەر گەردنت بە نیشانەی خنکان.", symptoms: ["نەتوانینی قسەکردن یان کۆکین", "شینبوونی پێست و لێوەکان", "هەوڵدانی زۆر بۆ هەناسەدان"], treatment: ["ئەنجامدانی مانۆڕی هێملیک (Heimlich Maneuver)", "لێدان لە نێوان هەردوو شانی", "ئەگەر بێهۆش بوو، دەستپێکردنی بوژاندنەوەی دڵ و سییەکان (CPR)"] },
        en: { title: "Choking", desc: "How to sign: Grab your throat with both hands (Universal choking sign).", symptoms: ["Inability to talk or cough", "Cyanosis (blue lips/skin)", "Desperate struggle to breathe"], treatment: ["Perform Heimlich Maneuver", "Give back blows", "Start CPR if patient becomes unconscious"] },
        ar: { title: "غصة / اختناق", desc: "كيفية الإشارة: أمسك رقبتك بكلتا يديك (العلامة العالمية للاختناق).", symptoms: ["عدم القدرة على الكلام أو السعال", "ازرقاق الشفاه والجلد", "محاولة يائسة للتنفس"], treatment: ["إجراء مناورة هايمليخ", "ضربات على الظهر", "بدء الإنعاش القلبي الرئوي إذا فقد الوعي"] }
    },
    {
        id: 3036,
        ku: { title: "پێوەدانی مێروو / دووپشک", desc: "چۆنیەتی ئاماژە: بە پەنجەکانت شێوەی ڕۆیشتنی مێروو بکە لەسەر دەستت و پاشان نیشانەی پێوەدان بکە.", symptoms: ["ئازار و سووربوونەوەی شوێنەکە", "ئاوسان و خورانی توند", "هەستیاری شدید لە هەندێک کەسدا"], treatment: ["سەهۆڵ دانان لەسەر شوێنەکە", "بەکارهێنانی مەرهەمی دژە هەستیاری", "سەردانی خێرای نەخۆشخانە بۆ دووپشک"] },
        en: { title: "Insect / Scorpion Sting", desc: "How to sign: Walk your fingers like a bug on your arm, then pinch your skin to show a sting.", symptoms: ["Pain and redness at the site", "Swelling and intense itching", "Anaphylaxis in allergic individuals"], treatment: ["Apply ice to the site", "Use antihistamine cream", "Rush to ER for scorpion stings"] },
        ar: { title: "لدغة حشرة / عقرب", desc: "كيفية الإشارة: مشّ أصابعك كحشرة على ذراعك ثم اقرص الجلد كأنه لدغة.", symptoms: ["ألم واحمرار المكان", "تورم وحكة شديدة", "حساسية مفرطة لبعض الأشخاص"], treatment: ["وضع ثلج على المكان", "استخدام مرهم مضاد للحساسية", "الذهاب للمستشفى فوراً للدغة العقرب"] }
    },
    {
        id: 3037,
        ku: { title: "پێوەدانی مار", desc: "چۆنیەتی ئاماژە: دەستت وەک سەری مار دروست بکە و بە خێرایی بیجوڵێنە وەک ئەوەی پێوە بدات.", symptoms: ["دوو کونی بچووک لە شوێنی پێوەدانەکە", "ئازار و ئاوسانی خێرا", "گێژبوون، هێڵنج، یان بورانەوە"], treatment: ["نەجوڵاندنی ئەندامەکە و هێشتنەوەی لە خوار ئاستی دڵ", "نەبەستنی توندی قۆڵ یان قاچ", "پەلەکردن بۆ نەخۆشخانە بۆ وەرگرتنی دژەژەهر"] },
        en: { title: "Snake Bite", desc: "How to sign: Form a snake head with your hand and strike rapidly.", symptoms: ["Two puncture wounds", "Rapid swelling and pain", "Dizziness, nausea, or fainting"], treatment: ["Immobilize the limb and keep it below heart level", "Do NOT apply a tight tourniquet", "Rush to hospital for antivenom"] },
        ar: { title: "لدغة أفعى", desc: "كيفية الإشارة: شكل يدك كرأس ثعبان ومثل حركة اللدغ السريعة.", symptoms: ["أثر نابين في الجلد", "ألم وتورم سريع", "دوار، غثيان، أو إغماء"], treatment: ["تثبيت الطرف وإبقائه تحت مستوى القلب", "عدم ربط الطرف بقوة", "النقل السريع للمستشفى لأخذ المصل"] }
    },
    {
        id: 3038,
        ku: { title: "بەرکەوتنی زەبر بە سەر", desc: "چۆنیەتی ئاماژە: بە مستەکۆڵە یەک لێدانی هێواش بدە لە سەرت و پاشان چاوەکانت بسووڕێنەوە (گێژبوون).", symptoms: ["سەرئێشە و گێژبوون", "ڕشانەوە دوای زەبرەکە", "لێڵبوونی چاو یان لەدەستدانی هۆش بۆ ماوەیەک"], treatment: ["پشکنینی چاو و ئاستی هۆشیاری", "ئەنجامدانی سیتی سکان (CT Scan)", "چاودێریکردنی نەخۆش بۆ ٢٤ کاتژمێر"] },
        en: { title: "Head Trauma", desc: "How to sign: Tap your head lightly with a fist, then roll your eyes indicating dizziness.", symptoms: ["Headache and dizziness", "Vomiting after the injury", "Blurred vision or brief loss of consciousness"], treatment: ["Check pupils and consciousness level", "Perform CT Scan", "Observe patient for 24 hours"] },
        ar: { title: "صدمة في الرأس", desc: "كيفية الإشارة: اضرب رأسك بخفة بقبضتك ثم حرك عينيك دلالة على الدوار.", symptoms: ["صداع ودوار", "قيء بعد الإصابة", "تشوش الرؤية أو فقدان وعي مؤقت"], treatment: ["فحص البؤبؤ ومستوى الوعي", "إجراء تصوير مقطعي", "مراقبة المريض لمدة 24 ساعة"] }
    },
    {
        id: 3039,
        ku: { title: "کەمخوێنی (Anemia)", desc: "چۆنیەتی ئاماژە: پەنجەت بە ڕوومەتتدا بهێنە بۆ نیشاندانی ڕەنگپەڕینی پێست، و ئاماژە بە ماندووێتی بکە.", symptoms: ["زەردبوون و ڕەنگپەڕینی پێست", "ماندووێتی خێرا", "دڵەکوتێ"], treatment: ["پشکنینی خوێن (CBC)", "پێدانی حەبی ئاسن و ڤیتامین", "خواردنی گۆشت و سپێناخ"] },
        en: { title: "Anemia", desc: "How to sign: Rub your cheek to indicate pale skin, then sign exhaustion.", symptoms: ["Pale or yellowish skin", "Easy fatigue", "Heart palpitations"], treatment: ["Blood test (CBC)", "Iron pills and vitamins", "Eat meat and spinach"] },
        ar: { title: "فقر الدم", desc: "كيفية الإشارة: مرر إصبعك على خدك لتمثيل شحوب اللون، ثم أشر للتعب.", symptoms: ["شحوب واصفرار الجلد", "تعب سريع", "خفقان القلب"], treatment: ["فحص دم (CBC)", "إعطاء حبوب حديد وفيتامينات", "تناول اللحوم والسبانخ"] }
    },
    {
        id: 3040,
        ku: { title: "هەوکردنی میزڵدان (UTI)", desc: "چۆنیەتی ئاماژە: دەست بخەرە سەر ناوک و بەشی خوارەوەی سک، و نیشانەی ئازار لە کاتی چوونە تەوالێت بکە.", symptoms: ["سووتانەوە لە کاتی میزکردن", "هەستکردن بە میزکردنی بەردەوام", "میزی لێڵ یان بۆن ناخۆش"], treatment: ["خواردنەوەی ئاوی زۆر", "پشکنینی میز", "بەکارھێنانی ئەنتی بایۆتیک"] },
        en: { title: "Urinary Tract Infection", desc: "How to sign: Hand on lower abdomen and signal pain during bathroom use.", symptoms: ["Burning urination", "Frequent urge to urinate", "Cloudy or foul-smelling urine"], treatment: ["Drink plenty of water", "Urine test", "Antibiotics"] },
        ar: { title: "التهاب المسالك البولية", desc: "كيفية الإشارة: ضع يدك أسفل بطنك ومثل ألم عند استخدام الحمام.", symptoms: ["حرقة في البول", "إلحاح متكرر للتبول", "بول عكر أو كريه الرائحة"], treatment: ["شرب ماء بكثرة", "فحص بول", "مضادات حيوية"] }
    },
    {
        id: 3041,
        ku: { title: "ئازاری گورچیلە", desc: "چۆنیەتی ئاماژە: هەردوو دەستت بخەرە سەر پشتت لە کەمەرتەوە، و بە ئازارەوە خۆت بچەمێنەوە.", symptoms: ["ئازاری توند لە کەمەر کە دەڕوات بۆ خوارەوە", "بوونی خوێن لە میزدا", "ڕشانەوە"], treatment: ["ئەنجامدانی سۆنەر", "پێدانی ئازارشکێنی بەهێز لە دەمارەوە", "خواردنەوەی ئاوی زۆر"] },
        en: { title: "Kidney Pain", desc: "How to sign: Place hands on your flanks (mid-back) and double over in pain.", symptoms: ["Severe flank pain radiating downward", "Blood in urine", "Vomiting"], treatment: ["Perform an ultrasound", "IV strong painkillers", "Hydration"] },
        ar: { title: "ألم الكلى", desc: "كيفية الإشارة: ضع يديك على خاصرتيك وانحنِ من الألم.", symptoms: ["ألم شديد في الخاصرة يمتد للأسفل", "دم في البول", "قيء"], treatment: ["إجراء سونار", "إعطاء مسكنات قوية بالوريد", "شرب ماء وفير"] }
    },
    {
        id: 3042,
        ku: { title: "بەردی زراو", desc: "چۆنیەتی ئاماژە: دەستی ڕاستت بخەرە سەر بەشی سەرەوەی ڕاستی سکت و نیشانەی ئازارێکی تیژ بکە.", symptoms: ["ئازاری کتوپڕ لە لای ڕاستی سەرەوەی سک", "ئازار دەگوازرێتەوە بۆ شانی ڕاست", "هێڵنج و تا"], treatment: ["پێدانی ئازارشکێن و دژە ڕشانەوە", "سۆنەری سک", "نەشتەرگەری بۆ لابردنی زراو ئەگەر پێویست بوو"] },
        en: { title: "Gallstones", desc: "How to sign: Place right hand over the upper right quadrant of your abdomen and indicate sharp pain.", symptoms: ["Sudden upper right abdominal pain", "Pain radiating to right shoulder", "Nausea and fever"], treatment: ["Painkillers and antiemetics", "Abdominal ultrasound", "Surgical removal of gallbladder if necessary"] },
        ar: { title: "حصى المرارة", desc: "كيفية الإشارة: ضع يدك اليمنى أعلى يمين بطنك وأشر لألم حاد.", symptoms: ["ألم مفاجئ أعلى يمين البطن", "ألم يمتد للكتف الأيمن", "غثيان وحمى"], treatment: ["مسكنات ومضادات قيء", "سونار للبطن", "استئصال المرارة جراحياً عند اللزوم"] }
    },
    {
        id: 3043,
        ku: { title: "ئازاری مل", desc: "چۆنیەتی ئاماژە: بە دەستێک ملت بگرە و هەوڵبدە سەرت بسوڕێنیت بە سەختی.", symptoms: ["ڕەقبوونی ماسولکەی مل", "ئازار لە کاتی سووڕاندنی سەر", "سەرئێشە لە بەشی دواوەی سەر"], treatment: ["بەکارهێنانی مەرهەمی گەرمکەرەوە", "مەساجکردن بە هێواشی", "پشوودان و ڕێکخستنی شێوازی خەوتن"] },
        en: { title: "Neck Pain", desc: "How to sign: Hold your neck with one hand and attempt to turn your head with difficulty.", symptoms: ["Stiff neck muscles", "Pain when turning the head", "Headache at the back of the head"], treatment: ["Apply heat ointment", "Gentle massage", "Rest and correct sleeping posture"] },
        ar: { title: "ألم الرقبة", desc: "كيفية الإشارة: أمسك رقبتك بيد واحدة وحاول تدوير رأسك بصعوبة.", symptoms: ["تصلب عضلات الرقبة", "ألم عند تدوير الرأس", "صداع في مؤخرة الرأس"], treatment: ["استخدام مرهم تدفئة", "تدليك خفيف", "راحة وتصحيح وضعية النوم"] }
    },
    {
        id: 3044,
        ku: { title: "ئازاری شان", desc: "چۆنیەتی ئاماژە: دەستی چەپت بخەرە سەر شانی ڕاستت و قۆڵی ڕاستت بە هێواشی بجوڵێنە.", symptoms: ["ئازار لە کاتی بەرزکردنەوەی قۆڵ", "ڕەقبوونی جومگەی شان", "ئاوسان یان سوربوونەوە"], treatment: ["پشوودانی شانی تووشبوو", "بەکارهێنانی سەهۆڵ لە کاتی پێکاندا", "دەرمانی دژەهەوکردن"] },
        en: { title: "Shoulder Pain", desc: "How to sign: Place your left hand on your right shoulder and slowly move your right arm.", symptoms: ["Pain when lifting the arm", "Stiff shoulder joint", "Swelling or redness"], treatment: ["Rest the affected shoulder", "Apply ice if injured", "Anti-inflammatory drugs"] },
        ar: { title: "ألم الكتف", desc: "كيفية الإشارة: ضع يدك اليسرى على كتفك الأيمن وحرك ذراعك الأيمن ببطء.", symptoms: ["ألم عند رفع الذراع", "تصلب مفصل الكتف", "تورم أو احمرار"], treatment: ["إراحة الكتف المصاب", "وضع ثلج في حالة الإصابة", "أدوية مضادة للالتهاب"] }
    },
    {
        id: 3045,
        ku: { title: "هەوکردنی پێست (لیپکە)", desc: "چۆنیەتی ئاماژە: بە خێرایی پێستی قۆڵت بخورێنە و نیشانەی پەڵەی سوور لەسەر پێستت بکە.", symptoms: ["خورانی توند", "دروستبوونی پەڵەی سوور یان بڵق", "گەرمبوونی شوێنەکە"], treatment: ["کەمکردنەوەی خوراندن", "بەکارهێنانی مەرهەمی ستیرۆید", "دەرمانی دژە هەستیاری"] },
        en: { title: "Skin Rash / Infection", desc: "How to sign: Scratch your arm quickly and point to imaginary red spots.", symptoms: ["Severe itching", "Red patches or blisters", "Warmth in the area"], treatment: ["Avoid scratching", "Apply topical steroid cream", "Antihistamines"] },
        ar: { title: "التهاب الجلد / طفح", desc: "كيفية الإشارة: حك ذراعك بسرعة وأشر لبقع حمراء وهمية.", symptoms: ["حكة شديدة", "بقع حمراء أو بثور", "سخونة في المكان"], treatment: ["تجنب الحك", "استخدام مرهم ستيرويد", "مضادات حساسية"] }
    },
    {
        id: 3046,
        ku: { title: "کێشەی قووتدان", desc: "چۆنیەتی ئاماژە: دەستت بخەرە سەر قوڕگت و نیشانەی قوتدانی بەئازار بکە.", symptoms: ["ئازار لە کاتی قوتدانی خواردن یان ئاو", "هەستکردن بە گیرانی شتێک لە قورگ", "کۆکە لە کاتی نانخواردندا"], treatment: ["خواردنی نەرم و شلەمەنی", "خواردنەوەی ئاوی هێواش", "پشکنینی قوڕگ لای پزیشک"] },
        en: { title: "Difficulty Swallowing", desc: "How to sign: Put your hand on your throat and mimic painful swallowing.", symptoms: ["Pain when swallowing food or water", "Feeling of something stuck in throat", "Coughing while eating"], treatment: ["Eat soft foods and liquids", "Sip water slowly", "Throat exam by a doctor"] },
        ar: { title: "صعوبة البلع", desc: "كيفية الإشارة: ضع يدك على حلقك ومثل بلعاً مؤلماً.", symptoms: ["ألم عند بلع الطعام أو الماء", "شعور بشيء عالق في الحلق", "سعال أثناء الأكل"], treatment: ["تناول أطعمة لينة وسوائل", "شرب الماء ببطء", "فحص الحنجرة عند الطبيب"] }
    },
    {
        id: 3047,
        ku: { title: "بێهێزی گشتی", desc: "چۆنیەتی ئاماژە: شانت شۆڕ بکەرەوە و بە هێواشی هەناسە بدە بۆ نیشاندانی تاقەت نەمان.", symptoms: ["نەبوونی وزە", "خەواڵوویی بەردەوام", "ئازاری گشتی ماسولکەکان"], treatment: ["پشوودانی تەواو", "خواردنی تەندروست", "پشکنینی ڤیتامینەکان و خوێن"] },
        en: { title: "General Weakness", desc: "How to sign: Slump your shoulders and sigh heavily to show lack of energy.", symptoms: ["Lack of energy", "Constant sleepiness", "General muscle aching"], treatment: ["Adequate rest", "Healthy diet", "Blood and vitamin tests"] },
        ar: { title: "ضعف عام", desc: "كيفية الإشارة: أرخِ كتفيك وتنفس ببطء دلالة على الإرهاق.", symptoms: ["انعدام الطاقة", "نعاس مستمر", "آلام عضلية عامة"], treatment: ["راحة تامة", "غذاء صحي", "فحوصات للدم والفيتامينات"] }
    },
    {
        id: 3048,
        ku: { title: "ئازاری قاچ", desc: "چۆنیەتی ئاماژە: بە دەستت مەساجی بەشی خوارەوەی قاچت یان ڕانت بکە.", symptoms: ["ئازار دوای ڕۆیشتنی زۆر", "ئاوسانی قاچەکان", "گرژبوونی ماسولکەی قاچ بە شەوان"], treatment: ["بەرزکردنەوەی قاچ لە کاتی دانیشتن", "مەساجکردن و گەرمکردنی", "لەپێکردنی گۆرەویی پەستانی پزیشکی"] },
        en: { title: "Leg Pain", desc: "How to sign: Rub or massage your calf or thigh.", symptoms: ["Pain after prolonged walking", "Swollen legs", "Nighttime leg cramps"], treatment: ["Elevate legs when sitting", "Massage and apply heat", "Wear compression stockings"] },
        ar: { title: "ألم الساق", desc: "كيفية الإشارة: دلك بطة ساقك أو فخذك بيدك.", symptoms: ["ألم بعد المشي الطويل", "تورم الساقين", "تشنجات الساق الليلية"], treatment: ["رفع الساقين عند الجلوس", "تدليك وتدفئة", "ارتداء جوارب ضاغطة"] }
    },
    {
        id: 3049,
        ku: { title: "تینوێتی زۆر", desc: "چۆنیەتی ئاماژە: دەستت وەک پەرداخێک بگرە و بیبە بەر دەمت و نیشانەی وشکبوونی زمانت بکە.", symptoms: ["وشکبوونی دەم و زمان", "هەستکردن بە تینوێتی بەردەوام", "کەمبوونەوەی میزکردن"], treatment: ["خواردنەوەی ئاو بە بڕی پێویست", "پشکنینی شەکری خوێن", "پێدانی موغەزی ئەگەر وشکبوونەوەی توند هەبوو"] },
        en: { title: "Extreme Thirst", desc: "How to sign: Pretend to drink from a cup, then point to a dry mouth/tongue.", symptoms: ["Dry mouth and tongue", "Constant feeling of thirst", "Decreased urination"], treatment: ["Drink adequate water", "Check blood sugar", "IV fluids for severe dehydration"] },
        ar: { title: "عطش شديد", desc: "كيفية الإشارة: مثل شرب الماء من كوب وأشر لجفاف فمك.", symptoms: ["جفاف الفم واللسان", "شعور مستمر بالعطش", "قلة التبول"], treatment: ["شرب الماء الكافي", "فحص سكر الدم", "مغذي وريدي في حالات الجفاف الشديد"] }
    },
    {
        id: 3050,
        ku: { title: "خەمۆکی و دڵەڕاوکێ", desc: "چۆنیەتی ئاماژە: سەرت داخە و دەستت بخەرە سەر ناوچەوانت بۆ نیشاندانی خەمباری.", symptoms: ["دابڕان لە خەڵک", "گریانی بێ هۆکار", "ترس و دڵەڕاوکێی بەردەوام"], treatment: ["دانیشتن و قسەکردن لەگەڵ نەخۆشەکە", "سەردانی پزیشکی دەروونی", "ڕاهێنانی خاوکردنەوەی دەروونی"] },
        en: { title: "Depression and Anxiety", desc: "How to sign: Bow your head and place a hand on your forehead showing sadness.", symptoms: ["Social withdrawal", "Unexplained crying", "Constant fear and anxiety"], treatment: ["Talk and listen to the patient", "Refer to a psychiatrist", "Relaxation techniques"] },
        ar: { title: "اكتئاب وقلق", desc: "كيفية الإشارة: اخفض رأسك وضع يدك على جبهتك لتمثيل الحزن.", symptoms: ["الانعزال عن الناس", "بكاء بدون سبب", "خوف وقلق مستمر"], treatment: ["الجلوس والتحدث مع المريض", "زيارة طبيب نفسي", "تقنيات الاسترخاء"] }
    }
];

if (typeof window !== 'undefined') {
    window.signlanguageData = signlanguageData;
}
