const dictionaryData = [
    { 
        id: 801, 
        ku: { word: "Acute (تیژ)", meaning: "نەخۆشییەک یان نیشانەیەک کە بە کتوپڕی دەست پێدەکات و کورتخایەنە بەڵام زۆرجار توندە. نموونە وەک سەرئێشەی کتوپڕ یان شکانی ئێسک، کە پێویستی بە چارەسەری خێرا هەیە بۆ ڕێگری لە خراپتربوونی حاڵەتەکە." }, 
        en: { word: "Acute", meaning: "A medical condition or symptom that starts suddenly and is short-lived but often severe. Examples include acute appendicitis or a sudden injury, requiring immediate medical evaluation." }, 
        ar: { word: "Acute (حاد)", meaning: "حالة طبية أو عرض يبدأ فجأة ويكون قصير الأمد ولكنه غالباً ما يكون شديداً. الأمثلة تشمل التهاب الزائدة الدودية الحاد أو الإصابات المفاجئة، وتتطلب تقييماً طبياً فورياً." } 
    },
    { 
        id: 802, 
        ku: { word: "Chronic (درێژخایەن)", meaning: "نەخۆشییەک کە بۆ ماوەیەکی زۆر (زیاتر لە ٣ مانگ) بەردەوام دەبێت و پێویستی بە چاودێری بەردەوام هەیە. وەک شەکرە، ڕەبۆ، یان بەرزەپەستانی خوێن. ئەم جۆرە نەخۆشییانە زۆرجار بنبڕ ناکرێن بەڵکو تەنها کۆنترۆڵ دەکرێن." }, 
        en: { word: "Chronic", meaning: "A health condition that persists for a long time (typically more than 3 months) and requires ongoing management. Examples include diabetes, asthma, and hypertension. These conditions are usually managed rather than cured." }, 
        ar: { word: "Chronic (مزمن)", meaning: "حالة صحية تستمر لفترة طويلة (عادة أكثر من 3 أشهر) وتتطلب إدارة مستمرة. تشمل الأمثلة السكري، الربو، وارتفاع ضغط الدم. عادة ما يتم التعامل مع هذه الحالات بدلاً من شفائها نهائياً." } 
    },
    { 
        id: 803, 
        ku: { word: "Diagnosis (دەستنیشانکردن)", meaning: "پرۆسەی دیاریکردنی جۆری نەخۆشی یان حاڵەتەکە لە ڕێگەی نیشانەکان، مێژووی پزیشکی، و پشکنینەکانی تاقیگە و تیشک. ئەمە هەنگاوی یەکەم و گرنگترینە بۆ دەستپێکردنی چارەسەری ڕاست." }, 
        en: { word: "Diagnosis", meaning: "The process of identifying a disease or condition through symptoms, medical history, physical exams, and laboratory or imaging tests. It is the crucial first step in determining the correct treatment plan." }, 
        ar: { word: "Diagnosis (تشخيص)", meaning: "عملية تحديد المرض أو الحالة من خلال الأعراض، التاريخ الطبي، الفحوصات البدنية، واختبارات المختبر أو الأشعة. وهي الخطوة الأولى والأهم لتحديد خطة العلاج الصحيحة." } 
    },
    { 
        id: 804, 
        ku: { word: "Infection (هەوکردن/پیسبوون)", meaning: "چوونە ناوەوە و گەشەکردنی میکرۆبی زیانبەخش وەک بەکتریا، ڤایرۆس، قارچک یان مشەخۆرەکان لە ناو جەستەدا. دەبێتە هۆی تێکچوونی خانەکان و دەرکەوتنی نیشانەکانی وەک تا و ئازار." }, 
        en: { word: "Infection", meaning: "The invasion and growth of harmful microorganisms like bacteria, viruses, fungi, or parasites in the body. It leads to cellular damage and symptoms such as fever, swelling, and pain." }, 
        ar: { word: "Infection (عدوى)", meaning: "غزو ونمو الكائنات الحية الدقيقة الضارة مثل البكتيريا، الفيروسات، الفطريات، أو الطفيليات في الجسم. يؤدي ذلك إلى تلف الخلايا وظهور أعراض مثل الحمى والألم." } 
    },
    { 
        id: 805, 
        ku: { word: "Inflammation (ئیلتیهاب)", meaning: "کاردانەوەی سروشتی سیستەمی بەرگری جەستە بۆ برینداری یان هەوکردن. پێنج نیشانەی سەرەکی هەیە: سووربوونەوە، گەرمبوون، ئاوسان، ئازار، و تێکچوونی فەرمانی ئەو ئەندامە. مەبەست لێی پاراستنی جەستەیە لە میکرۆب." }, 
        en: { word: "Inflammation", meaning: "The body's natural immune response to injury or infection. It is characterized by five signs: redness, heat, swelling, pain, and loss of function. Its primary goal is to protect the body and initiate healing." }, 
        ar: { word: "Inflammation (التهاب)", meaning: "استجابة الجهاز المناعي الطبيعية للإصابة أو العدوى. تتميز بخمس علامات: الاحمرار، الحرارة، التورم، الألم، وفقدان الوظيفة. هدفها الأساسي هو حماية الجسم وبدء عملية الشفاء." } 
    },
    { 
        id: 806, 
        ku: { word: "Symptom (نیشانە)", meaning: "هەر گۆڕانکارییەک لە جەستە یان هەستەکاندا کە تەنها نەخۆشەکە خۆی هەستی پێدەکات و ناتوانرێت لەلایەن کەسانی ترەوە بپێورێت، وەک: سەرئێشە، هێڵنج، یان هەستکردن بە ماندوێتی." }, 
        en: { word: "Symptom", meaning: "A subjective change in the body or feelings that only the patient can perceive and cannot be measured by others. Examples include headache, nausea, or fatigue." }, 
        ar: { word: "Symptom (عرض)", meaning: "تغيير شخصي في الجسم أو المشاعر لا يمكن إدراكه إلا من قبل المريض ولا يمكن قياسه من قبل الآخرين. تشمل الأمثلة الصداع، الغثيان، أو التعب." } 
    },
    { 
        id: 807, 
        ku: { word: "Sign (نیشانەی پزیشکی)", meaning: "ئەو نیشانەیەی کە پزیشک یان پەرستار دەتوانێت بیبینێت، بیبیستێت یان بیپێوێت لە کاتی پشکنیندا. وەک: بەرزبوونەوەی پلەی گەرمی، پەستانی خوێن، لێدانی دڵ، یان پەڵەی سەر پێست." }, 
        en: { word: "Sign", meaning: "An objective finding that a healthcare provider observes, hears, or measures during an examination. Examples include fever, high blood pressure, abnormal heart sounds, or a skin rash." }, 
        ar: { word: "Sign (علامة)", meaning: "اكتشاف موضوعي يلاحظه مقدم الرعاية الصحية أو يسمعه أو يقيسه أثناء الفحص. تشمل الأمثلة الحمى، ارتفاع ضغط الدم، أصوات القلب غير الطبيعية، أو الطفح الجلدي." } 
    },
    { 
        id: 808, 
        ku: { word: "Prognosis (پێشبینی)", meaning: "پێشبینیکردنی پزیشک بۆ ئەنجامی کۆتایی نەخۆشییەکە و چەندێتی ئەگەری چاکبوونەوە یان دووبارەبوونەوەی. ئەمە بەندە بە جۆری نەخۆشییەکە و تەمەنی نەخۆشەکە و کاتی دەستپێکردنی چارەسەر." }, 
        en: { word: "Prognosis", meaning: "The clinical prediction of the likely outcome of a disease, including the chances of recovery or recurrence. It depends on the disease type, patient's age, and timing of treatment initiation." }, 
        ar: { word: "Prognosis (مآل المرض)", meaning: "التنبؤ السريري بالنتيجة المحتملة للمرض، بما في ذلك فرص الشفاء أو الانتكاس. يعتمد ذلك على نوع المرض وعمر المريض وتوقيت بدء العلاج." } 
    },
    { 
        id: 809, 
        ku: { word: "Benign (سەلامەت)", meaning: "گرێیەک یان حاڵەتێک کە شێرپەنجەیی نییە. ئەم جۆرە گرێیانە بە هێواشی گەشە دەکەن و بڵاونابنەوە بۆ بەشەکانی تری جەستە، بەڵام ڕەنگە بەهۆی پەستان خستنە سەر ئەندامەکان کێشە دروست بکەن." }, 
        en: { word: "Benign", meaning: "A non-cancerous condition or tumor. Benign tumors grow slowly and do not spread to other parts of the body, although they may cause issues by pressing on nearby organs." }, 
        ar: { word: "Benign (حميد)", meaning: "حالة أو ورم غير سرطاني. تنمو الأورام الحميدة ببطء ولا تنتشر إلى أجزاء أخرى من الجسم، رغم أنها قد تسبب مشاكل بالضغط على الأعضاء المجاورة." } 
    },
    { 
        id: 810, 
        ku: { word: "Malignant (خراپ)", meaning: "گرێیەک یان حاڵەتێکی شێرپەنجەیی. ئەم جۆرە خانانە بە خێرایی و بەبێ کۆنترۆڵ گەشە دەکەن و توانای بڵاوبوونەوەیان هەیە بۆ شانە و ئەندامەکانی دەوروبەر و دوور لە خۆیان (Metastasis)." }, 
        en: { word: "Malignant", meaning: "A cancerous condition or tumor. Malignant cells grow rapidly and uncontrollably, having the ability to invade nearby tissues and spread to distant organs (Metastasis)." }, 
        ar: { word: "Malignant (خبيث)", meaning: "حالة سرطانية أو ورم. تنمو الخلايا الخبيثة بسرعة وبدون رقابة، ولها القدرة على غزو الأنسجة القريبة والانتشار إلى أعضاء بعيدة (النقيلة)." } 
    },
    { 
        id: 811, 
        ku: { word: "Biopsy (وەرگرتنی نموونە)", meaning: "کردارێکی پزیشکییە کە تێیدا پارچەیەکی بچووک لە شانەی جەستە لادەبرێت بۆ ئەوەی لە تاقیگە لەژێر مایکرۆسکۆپ پشکنینی بۆ بکرێت بۆ دڵنیابوونەوە لە هەبوونی نەخۆشی وەک شێرپەنجە." }, 
        en: { word: "Biopsy", meaning: "A medical procedure in which a small sample of tissue is removed from the body to be examined under a microscope in a laboratory, typically to diagnose diseases like cancer." }, 
        ar: { word: "Biopsy (خزعة)", meaning: "إجراء طبي يتم فيه أخذ عينة صغيرة من الأنسجة من الجسم لفحصها تحت المجهر في المختبر، وعادة ما يكون ذلك لتشخيص أمراض مثل السرطان." } 
    },
    { 
        id: 812, 
        ku: { word: "Anesthesia (بێهۆشکردن)", meaning: "بەکارهێنانی دەرمانی تایبەت بۆ نەهێشتنی هەستی ئازار لە کاتی نەشتەرگەری یان کردارە پزیشکییەکان. دەکرێت گشتی بێت (هەموو جەستە) یان ناوچەیی (تەنها بەشێک لە جەستە)." }, 
        en: { word: "Anesthesia", meaning: "The use of specific drugs to prevent pain during surgery or medical procedures. It can be general (affecting the whole body) or local/regional (affecting only a part of the body)." }, 
        ar: { word: "Anesthesia (تخدير)", meaning: "استخدام أدوية محددة لمنع الألم أثناء الجراحة أو الإجراءات الطبية. يمكن أن يكون عاماً (يؤثر على الجسم كله) أو موضعياً/إقليمياً (يؤثر فقط على جزء من الجسم)." } 
    },
    { 
        id: 813, 
        ku: { word: "Hypertension (زەخت)", meaning: "بەرزبوونەوەی پەستانی خوێن لە ناو خوێنبەرەکاندا لە ئاستی ئاسایی زیاتر (زیاتر لە ١٤٠/٩٠). ئەگەر چارەسەر نەکرێت دەبێتە هۆی جەڵتەی دڵ و مێشک و تێکچوونی گورچیلەکان." }, 
        en: { word: "Hypertension", meaning: "High blood pressure in the arteries consistently above normal levels (typically above 140/90). If left untreated, it can lead to heart attack, stroke, and kidney damage." }, 
        ar: { word: "Hypertension (ارتفاع ضغط الدم)", meaning: "ارتفاع ضغط الدم في الشرايين بشكل مستمر فوق المستويات الطبيعية (عادة فوق 140/90). إذا ترك دون علاج، يمكن أن يؤدي إلى نوبة قلبية، سكتة دماغية، وتلف الكلى." } 
    },
    { 
        id: 814, 
        ku: { word: "Hypotension (دابەزینی زەخت)", meaning: "نزمبوونەوەی پەستانی خوێن (کەمتر لە ٩٠/٦٠) کە دەبێتە هۆی گێژبوون، لێڵبوونی بینین، و بێهۆشبوون. دەکرێت بەهۆی وشکبوونەوە یان لەدەستدانی خوێن یان کێشەی دڵەوە بێت." }, 
        en: { word: "Hypotension", meaning: "Abnormally low blood pressure (typically below 90/60) that can cause dizziness, blurred vision, and fainting. It can be caused by dehydration, blood loss, or heart problems." }, 
        ar: { word: "Hypotension (انخفاض ضغط الدم)", meaning: "انخفاض ضغط الدم بشكل غير طبيعي (عادة أقل من 90/60) مما قد يسبب الدوار، زغللة العين، والإغماء. يمكن أن يكون سببه الجفاف، فقدان الدم، أو مشاكل في القلب." } 
    },
    { 
        id: 815, 
        ku: { word: "Anemia (کەمخوێنی)", meaning: "حاڵەتێکە کە تێیدا خڕۆکە سوورەکان یان هیمۆگڵۆبین لە خوێندا کەمدەبنەوە. ئەمەش دەبێتە هۆی ئەوەی ئۆکسجینی پێویست نەگاتە شانەکان و نەخۆش هەست بە ماندوێتی و ڕەنگپەڕیوی دەکات." }, 
        en: { word: "Anemia", meaning: "A condition where there's a deficiency of healthy red blood cells or hemoglobin in the blood. This reduces oxygen delivery to tissues, causing fatigue and paleness." }, 
        ar: { word: "Anemia (فقر الدم)", meaning: "حالة يوجد فيها نقص في خلايا الدم الحمراء السليمة أو الهيموغلوبين في الدم. هذا يقلل من توصيل الأكسجين إلى الأنسجة، مما يسبب التعب والشحوب." } 
    },
    { 
        id: 816, 
        ku: { word: "Edema (ئاوسان)", meaning: "کۆبوونەوەی شلەمەنی زۆر لە ناو شانەکانی جەستەدا کە دەبێتە هۆی ئاوسانی پێست. زۆرجار لە قاچ و پاژنەی پێدا دەردەکەوێت و دەکرێت نیشانەی کێشەی دڵ یان جگەر یان گورچیلە بێت." }, 
        en: { word: "Edema", meaning: "Swelling caused by excess fluid trapped in the body's tissues. It most commonly occurs in the legs and ankles and can be a sign of heart, liver, or kidney problems." }, 
        ar: { word: "Edema (وذمة)", meaning: "تورم ناتج عن احتباس السوائل الزائدة في أنسجة الجسم. غالباً ما يحدث في الساقين والكاحلين ويمكن أن يكون علامة على مشاكل في القلب أو الكبد أو الكلى." } 
    },
    { 
        id: 817, 
        ku: { word: "Sepsis (ژەهراویبوونی خوێن)", meaning: "کاردانەوەیەکی زۆر توند و مەترسیداری جەستەیە بۆ هەوکردنێکی گشتگیر. ئەگەر بە خێرایی چارەسەر نەکرێت دەبێتە هۆی تێکچوونی ئەندامەکان و مردن. بارودۆخێکی فریاکەوتنی پزیشکییە." }, 
        en: { word: "Sepsis", meaning: "A life-threatening medical emergency caused by the body's extreme response to an infection. It can rapidly lead to tissue damage, organ failure, and death if not treated immediately." }, 
        ar: { word: "Sepsis (إنتان الدم)", meaning: "حالة طبية طارئة تهدد الحياة ناتجة عن استجابة الجسم القصوى للعدوى. يمكن أن تؤدي بسرعة إلى تلف الأنسجة وفشل الأعضاء والموت إذا لم يتم علاجها فوراً." } 
    },
    { 
        id: 818, 
        ku: { word: "Atrophy (پوکانەوە)", meaning: "بچووکبوونەوە یان لاوازبوونی ماسولکە یان ئەندامێکی جەستە. زۆرجار بەهۆی بێ بەکارهێنانی (وەک کەسێک کە ناتوانێت بجوڵێت) یان بەهۆی نەخۆشییە دەمارییەکانەوە ڕوودەدات." }, 
        en: { word: "Atrophy", meaning: "The wasting away or reduction in size of a body part or muscle. It often occurs due to disuse (like prolonged bed rest) or as a result of nerve damage and diseases." }, 
        ar: { word: "Atrophy (ضمور)", meaning: "هزال أو نقص في حجم جزء من الجسم أو عضلة. غالباً ما يحدث بسبب عدم الاستخدام (مثل الراحة الطويلة في الفراش) أو نتيجة لتلف الأعصاب والأمراض." } 
    },
    { 
        id: 819, 
        ku: { word: "Cardiology (دڵناسی)", meaning: "بەشێکی زانستی پزیشکییە کە تایبەتە بە لێکۆڵینەوە و چارەسەرکردنی نەخۆشییەکانی دڵ و بۆرییەکانی خوێن. پزیشکی پسپۆڕ لەم بوارە پێی دەوترێت (Cardiologist)." }, 
        en: { word: "Cardiology", meaning: "The medical specialty focusing on the study and treatment of disorders of the heart and blood vessels. A specialist in this field is called a cardiologist." }, 
        ar: { word: "Cardiology (طب القلب)", meaning: "التخصص الطبي الذي يركز على دراسة وعلاج اضطرابات القلب والأوعية الدموية. يسمى الأخصائي في هذا المجال طبيب قلب." } 
    },
    { 
        id: 820, 
        ku: { word: "Dermatology (پێستناسی)", meaning: "بەشێکی پزیشکییە کە گرنگی بە نەخۆشییەکانی پێست و قژ و نینۆک دەدات. لەوانە شێرپەنجەی پێست، زیپکە، و هەستیاری پێست. پزیشکەکەی پێی دەوترێت (Dermatologist)." }, 
        en: { word: "Dermatology", meaning: "The medical field concerned with the diagnosis and treatment of conditions affecting the skin, hair, and nails, including skin cancer, acne, and allergies." }, 
        ar: { word: "Dermatology (طب الجلد)", meaning: "المجال الطبي المعني بتشخيص وعلاج الحالات التي تؤثر على الجلد والشعر والأظافر، بما في ذلك سرطان الجلد، حب الشباب، والحساسية." } 
    },
    { 
        id: 821, 
        ku: { word: "Endoscopy (نازوور)", meaning: "بەکارهێنانی بۆرییەکی باریک کە کامێرای پێوەیە بۆ بینینی ناوەوەی ئەندامەکانی جەستە بەبێ نەشتەرگەری گەورە. وەک نازووری گەدە یان قۆڵۆن بۆ دەستنیشانکردنی برین یان گرێ." }, 
        en: { word: "Endoscopy", meaning: "A non-surgical procedure used to look inside a person's digestive tract or other organs using a flexible tube with a light and camera (endoscope)." }, 
        ar: { word: "Endoscopy (تنظير)", meaning: "إجراء غير جراحي يستخدم للنظر داخل الجهاز الهضمي للشخص أو الأعضاء الأخرى باستخدام أنبوب مرن مزود بضوء وكاميرا (منظار)." } 
    },
    { 
        id: 822, 
        ku: { word: "Fracture (شکان)", meaning: "تێکچوونی بەردەوامی و شکانی ئێسکی جەستە. دەکرێت سادە بێت (تەنها ئێسکەکە) یان ئاڵۆز بێت (بشکێت و بێتە دەرەوەی پێست). پێویستی بە گەچ یان نەشتەرگەری هەیە بۆ چاکبوونەوە." }, 
        en: { word: "Fracture", meaning: "A medical term for a broken bone. Fractures can range from a small crack to a complete break and may require casting or surgery to heal properly." }, 
        ar: { word: "Fracture (كسر)", meaning: "مصطلح طبي لكسر العظام. يمكن أن تتراوح الكسور من صدع صغير إلى كسر كامل وقد تتطلب جبيرة أو جراحة للشفاء بشكل صحيح." } 
    },
    { 
        id: 823, 
        ku: { word: "Hematoma (کۆبوونەوەی خوێن)", meaning: "کۆبوونەوەی خوێن لە دەرەوەی بۆرییەکانی خوێن و لە ناو شانەکانی جەستەدا، زۆرجار بەهۆی برینداری و تێکچوونی بۆرییەکانی خوێنەوە دروست دەبێت (وەک شینبوونەوەی توند)." }, 
        en: { word: "Hematoma", meaning: "A localized collection of blood outside blood vessels, typically in liquid form within tissue. It is usually caused by injury or trauma to the blood vessel walls." }, 
        ar: { word: "Hematoma (تجمع دموي)", meaning: "تجمع موضعي للدم خارج الأوعية الدموية، عادة ما يكون في شكل سائل داخل الأنسجة. يحدث عادة بسبب إصابة أو صدمة لجدران الأوعية الدموية." } 
    },
    { 
        id: 824, 
        ku: { word: "Metabolism (میتابۆلیزم)", meaning: "هەموو ئەو کارلێکە کیمیاییانەی ناو جەستە کە تێیدا خۆراک و شلەمەنییەکان دەگۆڕدرێن بۆ وزە. ئەم کردارە بەردەوامە تەنانەت کاتێک جەستە لە پشوودایە بۆ هێشتنەوەی ژیان." }, 
        en: { word: "Metabolism", meaning: "The set of chemical reactions in the body's cells that convert food into energy. This process is continuous to sustain life, even during rest." }, 
        ar: { word: "Metabolism (تمثيل غذائي)", meaning: "مجموعة التفاعلات الكيميائية في خلايا الجسم التي تحول الغذاء إلى طاقة. هذه العملية مستمرة لاستدامة الحياة، حتى أثناء الراحة." } 
    },
    { 
        id: 825, 
        ku: { word: "Neurology (دەمارناسی)", meaning: "بەشێکی پزیشکییە کە گرنگی دەدات بە مێشک، دڕکەپەتک، و دەمارەکان. چارەسەری نەخۆشییەکانی وەک فێ، جەڵتەی مێشک، و نەخۆشی پارکینسۆن دەکات." }, 
        en: { word: "Neurology", meaning: "The medical specialty dealing with disorders of the nervous system, including the brain, spinal cord, and nerves. Conditions treated include epilepsy, stroke, and Parkinson's." }, 
        ar: { word: "Neurology (طب الأعصاب)", meaning: "التخصص الطبي المعني باضطرابات الجهاز العصبي، بما في ذلك الدماغ والحبل الشوكي والأعصاب. تشمل الحالات المعالجة الصرع، السكتة الدماغية، وپاركنسون." } 
    },
    { 
        id: 826, 
        ku: { word: "Oncology (شێرپەنجەناسی)", meaning: "بەشێکی پزیشکییە کە تایبەتە بە دەستنیشانکردن و چارەسەرکردنی شێرپەنجە. پزیشکی پسپۆڕ لەم بوارە (Oncologist) مامەڵە لەگەڵ جۆرە جیاوازەکانی چارەسەری وەک کیمیایی و تیشکی دەکات." }, 
        en: { word: "Oncology", meaning: "The medical specialty specializing in the diagnosis and treatment of cancer. Oncologists manage various treatments, including chemotherapy and radiation therapy." }, 
        ar: { word: "Oncology (طب الأورام)", meaning: "التخصص الطبي المتخصص في تشخيص وعلاج السرطان. يدير أطباء الأورام علاجات مختلفة، بما في ذلك العلاج الكيميائي والعلاج الإشعاعي." } 
    },
    { 
        id: 827, 
        ku: { word: "Pathology (نەخۆشیی ناسی)", meaning: "لێکۆڵینەوە لە هۆکار و گەشەکردن و کاریگەرییەکانی نەخۆشی لەسەر ئاستی خانە و شانەکان. پزیشکی پاتۆلۆجی پشکنین بۆ پارچە یان شلەمەنییەکانی جەستە دەکات بۆ دیاریکردنی نەخۆشی." }, 
        en: { word: "Pathology", meaning: "The study of the causes and effects of diseases, particularly through the examination of laboratory samples of body tissue and fluids to provide a diagnosis." }, 
        ar: { word: "Pathology (علم الأمراض)", meaning: "دراسة أسباب وآثار الأمراض، لا سيما من خلال فحص عينات مخبرية من أنسجة وسوائل الجسم لتقديم التشخيص." } 
    },
    { 
        id: 828, 
        ku: { word: "Radiology (تیشک ناسی)", meaning: "بەکارهێنانی تیشکی X، سۆنەر، سیتی سکان، و ئێم ئاڕ ئای بۆ دروستکردنی وێنەی ناوەوەی جەستە. یارمەتی پزیشکەکان دەدات بۆ بینینی ئەندامەکان و ئێسکەکان بەبێ بڕین." }, 
        en: { word: "Radiology", meaning: "A medical specialty that uses medical imaging (like X-rays, ultrasound, CT scans, and MRI) to diagnose and guide treatment of diseases within the body." }, 
        ar: { word: "Radiology (الأشعة)", meaning: "تخصص طبي يستخدم التصوير الطبي (مثل الأشعة السينية، الموجات فوق الصوتية، الأشعة المقطعية، والرنين المغناطيسي) لتشخيص وتوجيه علاج الأمراض داخل الجسم." } 
    },
    { 
        id: 829, 
        ku: { word: "Syndrome (کۆ نیشانە)", meaning: "کۆمەڵێک نیشانەی پزیشکی کە پێکەوە دەردەکەون و ئاماژەن بۆ هەبوونی نەخۆشییەکی دیاریکراو. وەک (Down Syndrome) یان (Metabolic Syndrome)." }, 
        en: { word: "Syndrome", meaning: "A group of medical signs and symptoms that consistently occur together and are associated with a specific disease or health condition." }, 
        ar: { word: "Syndrome (متلازمة)", meaning: "مجموعة من العلامات والأعراض الطبية التي تظهر معاً باستمرار وترتبط بمرض معين أو حالة صحية محددة." } 
    },
    { 
        id: 830, 
        ku: { word: "Transfusion (تێکردنی خوێن)", meaning: "گواستنەوەی خوێنی ساغ یان پێکهاتەکانی خوێن لە کەسێکی بەخشەرەوە بۆ ناو خوێنهێنەرەکانی نەخۆشێک. زۆرجار دوای نەشتەرگەری یان لەدەستدانی خوێنی زۆر ئەنجام دەدرێت." }, 
        en: { word: "Transfusion", meaning: "The process of transferring healthy blood or blood components from a donor into a patient's circulation, usually following surgery or significant blood loss." }, 
        ar: { word: "Transfusion (نقل الدم)", meaning: "عملية نقل الدم السليم أو مكونات الدم من متبرع إلى الدورة الدموية للمريض، عادة بعد الجراحة أو فقدان الدم بشكل كبير." } 
    },
    { 
        id: 831, 
        ku: { word: "Vascular (خوێنبەری)", meaning: "هەر شتێک کە پەیوەندی بە بۆرییەکانی خوێن (خوێنبەر و خوێنهێنەر) و سوڕی خوێنەوە هەبێت. نەخۆشییە خوێنبەرییەکان کاریگەری دەکەنە سەر گواستنەوەی خوێن لە ناو جەستەدا." }, 
        en: { word: "Vascular", meaning: "Relating to blood vessels (arteries and veins) and the circulatory system. Vascular diseases affect the way blood is transported throughout the body." }, 
        ar: { word: "Vascular (وعائي)", meaning: "يتعلق بالأوعية الدموية (الشرايين والأوردة) وجهاز الدورة الدموية. تؤثر الأمراض الوعائية على طريقة نقل الدم في جميع أنحاء الجسم." } 
    },
    { 
        id: 832, 
        ku: { word: "Abdomen (سک)", meaning: "بەشی جەستە لە نێوان سنگ و حەوزدا. زۆربەی ئەندامەکانی هەرس وەک گەدە، جگەر، گورچیلەکان، و ڕیخۆڵەکانی تێدایە." }, 
        en: { word: "Abdomen", meaning: "The part of the body between the chest and the pelvis, containing the majority of digestive organs like the stomach, liver, kidneys, and intestines." }, 
        ar: { word: "Abdomen (البطن)", meaning: "جزء الجسم الواقع بين الصدر والحوض، ويحتوي على غالبية أعضاء الهضم مثل المعدة والكبد والكلى والأمعاء." } 
    },
    { 
        id: 833, 
        ku: { word: "Antibiotic (دژە بەکتریا)", meaning: "دەرمانێکە کە تەنها بۆ چارەسەرکردنی هەوکردنی بەکتریایی بەکاردێت. کار دەکات بۆ کوشتنی بەکتریاکان یان وەستاندنی گەشەکردنیان. هیچ سوودێکی نییە بۆ ڤایرۆسەکان (وەک ئەنفلۆنزا)." }, 
        en: { word: "Antibiotic", meaning: "A type of medication used solely to treat bacterial infections by killing or inhibiting their growth. They are ineffective against viral infections (like the flu)." }, 
        ar: { word: "Antibiotic (مضاد حيوي)", meaning: "نوع من الأدوية يستخدم فقط لعلاج العدوى البكتيرية عن طريق قتل البكتيريا أو تثبيط نموها. وهي غير فعالة ضد العدوى الفيروسية (مثل الإنفلونزا)." } 
    },
    { 
        id: 834, 
        ku: { word: "Autoimmune (بەرگری خۆیی)", meaning: "حاڵەتێکە کە تێیدا سیستەمی بەرگری جەستە بە هەڵە هێرش دەکاتە سەر خانە و شانە ساغەکانی جەستەی خۆی، چونکە ناتوانێت جیاوازییان بکات لەگەڵ میکرۆبەکان." }, 
        en: { word: "Autoimmune", meaning: "A condition where the immune system mistakenly attacks and damages the body's own healthy tissues, failing to distinguish them from foreign invaders." }, 
        ar: { word: "Autoimmune (مناعة ذاتية)", meaning: "حالة يهاجم فيها الجهاز المناعي عن طريق الخطأ أنسجة الجسم السليمة ويتلفها، حيث يفشل في تمييزها عن الغزاة الأجانب." } 
    },
    { 
        id: 835, 
        ku: { word: "Congenital (زگماک)", meaning: "هەر حاڵەتێک، ناتەواوییەک یان نەخۆشییەک کە لە کاتی لەدایکبوونەوە هەبێت. دەکرێت بەهۆی بۆماوەیی یان کێشەی کاتی دووگیانییەوە دروست بووبێت." }, 
        en: { word: "Congenital", meaning: "A condition, deformity, or disease that is present at birth, often resulting from genetic factors or issues during prenatal development." }, 
        ar: { word: "Congenital (خلقي)", meaning: "حالة أو تشوه أو مرض يكون موجوداً عند الولادة، وغالباً ما ينتج عن عوامل وراثية أو مشاكل أثناء التطور قبل الولادة." } 
    },
    { 
        id: 836, 
        ku: { word: "Diabetes (شەکرە)", meaning: "نەخۆشییەکی درێژخایەنە کە تێیدا جەستە ناتوانێت ئاستی شەکری خوێن (Glucose) ڕێکبخات. بەهۆی کەمی هۆرمۆنی ئەنسۆلین یان وەڵامنەدانەوەی خانەکان بۆ ئەو هۆرمۆنە دروست دەبێت." }, 
        en: { word: "Diabetes", meaning: "A chronic disease characterized by elevated levels of blood glucose. It occurs when the pancreas doesn't produce enough insulin or when the body cannot effectively use it." }, 
        ar: { word: "Diabetes (السكري)", meaning: "مرض مزمن يتميز بارتفاع مستويات الغلوكوز في الدم. يحدث عندما لا ينتج البنكرياس ما يكفي من الأنسولين أو عندما لا يستطيع الجسم استخدامه بفعالية." } 
    },
    { 
        id: 837, 
        ku: { word: "Electrolytes (ئەلیکترۆلیتەکان)", meaning: "کانزاکانی ناو خوێن و شلەمەنییەکانی تری جەستە کە باری کارەباییان هەڵگرتووە. وەک سۆدیۆم و پۆتاسیۆم. گرنگن بۆ فەرمانی ماسولکەکان و دەمارەکان و هاوسەنگی ئاو لە جەستەدا." }, 
        en: { word: "Electrolytes", meaning: "Minerals in blood and body fluids that carry an electric charge (like sodium and potassium). They are essential for muscle and nerve function and fluid balance." }, 
        ar: { word: "Electrolytes (إلكتروليتات)", meaning: "معادن في الدم وسوائل الجسم تحمل شحنة كهربائية (مثل الصوديوم والبوتاسيوم). وهي ضرورية لوظيفة العضلات والأعصاب وتوازن السوائل." } 
    },
    { 
        id: 838, 
        ku: { word: "Glucose (گلۆکۆز)", meaning: "سەرەکیترین جۆری شەکرە لە ناو خوێندا و سەرچاوەی سەرەکی وزەیە بۆ خانەکانی جەستە. لەو خۆراکانەوە بەدەست دێت کە کاربۆهیدراتیان تێدایە." }, 
        en: { word: "Glucose", meaning: "The main type of sugar in the blood and the major source of energy for the body's cells, derived from the carbohydrates in the food we eat." }, 
        ar: { word: "Glucose (جلوكوز)", meaning: "النوع الرئيسي للسكر في الدم والمصدر الرئيسي للطاقة لخلايا الجسم، ويشتق من الكربوهيدرات الموجودة في الطعام الذي نتناوله." } 
    },
    { 
        id: 839, 
        ku: { word: "Hemorrhage (خوێنبەربوون)", meaning: "لەدەستدانی بڕێکی زۆری خوێن لە ناوەوە یان دەرەوەی جەستە بەهۆی دڕانی بۆرییەکانی خوێن. ئەگەر بە خێرایی ڕانەگیرێت مەترسی لەسەر ژیان دروست دەکات." }, 
        en: { word: "Hemorrhage", meaning: "Heavy or uncontrollable bleeding from a ruptured blood vessel, either internally or externally. It can be life-threatening if not stopped promptly." }, 
        ar: { word: "Hemorrhage (نزيف)", meaning: "نزيف حاد أو لا يمكن السيطرة عليه من وعاء دموي متمزق، إما داخلياً أو خارجياً. يمكن أن يهدد الحياة إذا لم يتم إيقافه على الفور." } 
    },
    { 
        id: 840, 
        ku: { word: "Immunity (بەرگری)", meaning: "سیستەمی پاراستنی جەستە کە یارمەتیدەرە بۆ ڕووبەڕووبوونەوەی میکرۆبەکان و تەنە نامۆکان. دەکرێت سروشتی بێت یان پەیداکراو بێت (وەک لە ڕێگەی کوتانەوە)." }, 
        en: { word: "Immunity", meaning: "The body's protection system that helps resist and fight off infections and foreign substances. It can be innate (natural) or acquired (e.g., through vaccines)." }, 
        ar: { word: "Immunity (مناعة)", meaning: "جهاز الحماية في الجسم الذي يساعد على مقاومة ومكافحة العدوى والمواد الغريبة. يمكن أن تكون طبيعية أو مكتسبة (على سبيل المثال، من خلال اللقاحات)." } 
    },
    { 
        id: 841, 
        ku: { word: "Jaundice (زەردویی)", meaning: "زەردبوونی پێست و سپێنەی چاو بەهۆی بەرزبوونەوەی ماددەی بیلیڕۆبین لە خوێندا. زۆرجار نیشانەی نەخۆشی جگەر، زراو، یان تێکچوونی خڕۆکە سوورەکانە." }, 
        en: { word: "Jaundice", meaning: "Yellowing of the skin and eyes caused by a buildup of bilirubin in the blood, often signaling issues with the liver, gallbladder, or red blood cells." }, 
        ar: { word: "Jaundice (يرقان)", meaning: "اصفرار الجلد والعينين ناتج عن تراكم البيليروبين في الدم، وغالباً ما يشير إلى مشاكل في الكبد أو المرارة أو خلايا الدم الحمراء." } 
    },
    { 
        id: 842, 
        ku: { word: "Lesion (برین/پەڵە)", meaning: "هەر جۆرە گۆڕانکارییەکی نائاسایی لە شانەکانی جەستەدا. دەکرێت برین، پەڵەی سەر پێست، یان تێکچوونی شانە بێت بەهۆی برینداری یان نەخۆشییەوە." }, 
        en: { word: "Lesion", meaning: "An area of abnormal tissue change anywhere in the body, which can be a wound, sore, or damage caused by injury or disease." }, 
        ar: { word: "Lesion (آفة)", meaning: "منطقة من التغير غير الطبيعي في الأنسجة في أي مكان في الجسم، والتي يمكن أن تكون جرحاً أو قرحة أو ضرراً ناتجاً عن إصابة أو مرض." } 
    },
    { 
        id: 843, 
        ku: { word: "Nausea (هێڵنج)", meaning: "هەستکردن بە ناڕەحەتی گەدە و حەزی ڕشانەوە. نیشانەیەکی باوە بۆ زۆر حاڵەت وەک ژەهراویبوونی خۆراک، دووگیانی، یان کاریگەری لاوەکی دەرمان." }, 
        en: { word: "Nausea", meaning: "A feeling of sickness and unease in the stomach with an urge to vomit. It is a common symptom for conditions like food poisoning, pregnancy, or medication side effects." }, 
        ar: { word: "Nausea (غثيان)", meaning: "شعور بالمرض وعدم الارتياح في المعدة مع رغبة في القيء. وهو عرض شائع لحالات مثل التسمم الغذائي، الحمل، أو الآثار الجانبية للأدوية." } 
    },
    { 
        id: 844, 
        ku: { word: "Obesity (قەڵەوی)", meaning: "کۆبوونەوەی چەورییەکی زۆر لە جەستەدا کە کاریگەری خراپ دەکاتە سەر تەندروستی. ئەگەری تووشبوون بە نەخۆشییەکانی دڵ، شەکرە، و هەوکردنی جومگەکان زیاد دەکات." }, 
        en: { word: "Obesity", meaning: "A condition characterized by excessive body fat accumulation that negatively impacts health, increasing the risk of heart disease, diabetes, and joint issues." }, 
        ar: { word: "Obesity (سمنة)", meaning: "حالة تتميز بتراكم الدهون المفرط في الجسم مما يؤثر سلباً على الصحة، ويزيد من خطر الإصابة بأمراض القلب والسكري ومشاكل المفاصل." } 
    },
    { 
        id: 845, 
        ku: { word: "Palpitation (دڵەکوتێ)", meaning: "هەستکردن بە لێدانی دڵ بە شێوەیەکی ناڕێک یان زۆر خێرا. دەکرێت بەهۆی دڵەڕاوکێ، ماندوێتی، خواردنی کافایینی زۆر، یان کێشەی دڵەوە بێت." }, 
        en: { word: "Palpitation", meaning: "The sensation that your heart is beating irregularly, pounding, or racing. It can be caused by anxiety, stress, caffeine, or underlying heart conditions." }, 
        ar: { word: "Palpitation (خفقان)", meaning: "الشعور بأن قلبك ينبض بشكل غير منتظم، أو بقوة، أو بسرعة. يمكن أن يكون سببه القلق، التوتر، الكافيين، أو حالات القلب الكامنة." } 
    },
    { 
        id: 846, 
        ku: { word: "Remission (نیشتنەوە)", meaning: "ماوەیەک لە کاتی نەخۆشییەکی درێژخایەندا (وەک شێرپەنجە) کە تێیدا نیشانەکان کەم دەبنەوە یان بە تەواوی نامێنن. مەرج نییە واتای چاکبوونەوەی تەواو بێت، بەڵکو کۆنترۆڵبوونی نەخۆشییەکەیە." }, 
        en: { word: "Remission", meaning: "A period during a chronic illness (like cancer) where symptoms disappear or significantly decrease. It doesn't always mean a cure, but that the disease is under control." }, 
        ar: { word: "Remission (هجوع المرض)", meaning: "فترة أثناء مرض مزمن (مثل السرطان) تختفي فيها الأعراض أو تقل بشكل كبير. لا يعني ذلك دائماً الشفاء التام، ولكن المرض تحت السيطرة." } 
    },
    { 
        id: 847, 
        ku: { word: "Stable (جێگیر)", meaning: "حاڵەتێکی نەخۆش کە تێیدا نیشانە زیندەگییەکان (پلەی گەرمی، لێدانی دڵ، زەخت) لە ئاستێکی ئاساییدان و گۆڕانکاری مەترسیداریان تێدا نییە." }, 
        en: { word: "Stable", meaning: "A medical state where a patient's vital signs (temperature, heart rate, blood pressure) are within normal limits and not changing in a dangerous way." }, 
        ar: { word: "Stable (مستقر)", meaning: "حالة طبية تكون فيها العلامات الحيوية للمريض (الحرارة، معدل ضربات القلب، ضغط الدم) ضمن الحدود الطبيعية ولا تتغير بطريقة خطيرة." } 
    },
    { 
        id: 848, 
        ku: { word: "Tumor (گرێ)", meaning: "کۆمەڵە خانەیەکی نائاسایی کە پێکەوە گەشە دەکەن و ئاوسان دروست دەکەن. دەکرێت سەلامەت (Benign) یان خراپ و شێرپەنجەیی (Malignant) بێت." }, 
        en: { word: "Tumor", meaning: "An abnormal mass of tissue resulting from excessive cell division. Tumors can be either benign (non-cancerous) or malignant (cancerous)." }, 
        ar: { word: "Tumor (ورم)", meaning: "كتلة غير طبيعية من الأنسجة ناتجة عن انقسام الخلايا المفرط. يمكن أن تكون الأورام إما حميدة (غير سرطانية) أو خبيثة (سرطانية)." } 
    },
    { 
        id: 849, 
        ku: { word: "Ulcer (برین)", meaning: "برینێکی کراوە لە سەر پێست یان پەردەی ناوەوەی جەستە (وەک گەدە). زۆرجار بە هێواشی چاک دەبێتەوە و دەکرێت بەهۆی هەوکردن یان پەستانی زۆرەوە دروست بێت." }, 
        en: { word: "Ulcer", meaning: "An open sore on an external or internal surface of the body, such as the stomach lining. They often heal slowly and can be caused by infection or pressure." }, 
        ar: { word: "Ulcer (قرحة)", meaning: "قرحة مفتوحة على سطح خارجي أو داخلي للجسم، مثل بطانة المعدة. غالباً ما تلتئم ببطء ويمكن أن تكون ناجمة عن عدوى أو ضغط." } 
    },
    { 
        id: 850, 
        ku: { word: "Virus (ڤایرۆس)", meaning: "میکرۆبێکی زۆر بچووک کە توانای گەشەکردنی نییە تەنها لە ناو خانە زیندووەکانی تردا نەبێت. دەبێتە هۆی زۆر نەخۆشی وەک هەڵامەت، کۆرۆنا، و ئایدز. دژە بەکتریاکان کار لە ڤایرۆس ناکەن." }, 
        en: { word: "Virus", meaning: "A tiny infectious agent that can only replicate inside the living cells of an organism. They cause many diseases, from the common cold to COVID-19. Antibiotics do not work on viruses." }, 
        ar: { word: "Virus (فيروس)", meaning: "عامل معدي صغير جداً لا يمكنه التكاثر إلا داخل الخلايا الحية للكائن الحي. تسبب العديد من الأمراض، من نزلات البرد العادية إلى كوفيد-19. المضادات الحيوية لا تعمل على الفيروسات." } 
    },
    { 
        id: 851, 
        ku: { word: "Tachycardia (خێرا لێدانی دڵ)", meaning: "خێرا لێدانی دڵ کە تێیدا لێدانەکان لە ١٠٠ لێدان لە خولەکێکدا زیاترن کاتێک مرۆڤ لە پشوودایە. دەکرێت بەهۆی سترێس یان کێشەی دڵەوە بێت." }, 
        en: { word: "Tachycardia", meaning: "A faster than normal heart rate, usually defined as over 100 beats per minute at rest. It can be caused by stress, exercise, or cardiac conditions." }, 
        ar: { word: "Tachycardia (تسارع القلب)", meaning: "معدل ضربات قلب أسرع من الطبيعي، وعادة ما يعرف بأنه أكثر من 100 نبضة في الدقيقة أثناء الراحة. يمكن أن يكون سببه التوتر، التمارين، أو حالات قلبية." } 
    },
    { 
        id: 852, 
        ku: { word: "Bradycardia (خاو لێدانی دڵ)", meaning: "خاو لێدانی دڵ کە تێیدا لێدانەکان لە ٦٠ لێدان لە خولەکێکدا کەمترن. لە وەرزشواناندا ئاساییە، بەڵام لە کەسانی تردا دەکرێت نیشانەی کێشەی سیستەمی کارەبایی دڵ بێت." }, 
        en: { word: "Bradycardia", meaning: "A slower than normal heart rate, typically fewer than 60 beats per minute. While normal in athletes, it can sometimes signal a problem with the heart's electrical system." }, 
        ar: { word: "Bradycardia (بطء القلب)", meaning: "معدل ضربات قلب أبطأ من الطبيعي، عادة أقل من 60 نبضة في الدقيقة. وبينما هو طبيعي لدى الرياضيين، إلا أنه قد يشير أحياناً إلى مشكلة في النظام الكهربائي للقلب." } 
    },
    { 
        id: 853, 
        ku: { word: "Ischemia (کەمخوێنی ئەندام)", meaning: "کەمبوونەوەی گەیشتنی خوێن و ئۆکسجین بۆ بەشێکی دیاریکراوی جەستە، زۆرجار بەهۆی تەسکبوونەوە یان داخرانی خوێنبەرەکانەوە ڕوودەدات." }, 
        en: { word: "Ischemia", meaning: "An inadequate blood supply to an organ or part of the body, especially the heart muscles, often caused by narrowed or blocked arteries." }, 
        ar: { word: "Ischemia (نقص التروية)", meaning: "عدم كفاية إمدادات الدم إلى عضو أو جزء من الجسم، وخاصة عضلات القلب، وغالباً ما ينتج عن ضيق أو انسداد الشرايين." } 
    },
    { 
        id: 854, 
        ku: { word: "Necrosis (مردنی شانە)", meaning: "مردنی خانە و شانەکانی جەستە بەهۆی برینداری یان نەخۆشی یان کەمبوونی خوێن. کردارێکی نائاساییە و جەستە ناتوانێت ئەو شانانە دووبارە دروست بکاتەوە." }, 
        en: { word: "Necrosis", meaning: "The death of most or all of the cells in an organ or tissue due to disease, injury, or failure of the blood supply. It is an irreversible process." }, 
        ar: { word: "Necrosis (نخر)", meaning: "موت معظم أو كل الخلايا في عضو أو نسيج بسبب مرض أو إصابة أو فشل إمدادات الدم. وهي عملية غير قابلة للانعكاس." } 
    },
    { 
        id: 855, 
        ku: { word: "Hemostasis (وەستاندنی خوێن)", meaning: "کرداری سروشتی جەستە بۆ وەستاندنی خوێنبەربوون دوای برینداری. تێیدا خوێن دەمەێیت و بۆرییەکان تەسک دەبنەوە بۆ پاراستنی بڕی خوێن." }, 
        en: { word: "Hemostasis", meaning: "The process that causes bleeding to stop, keeping blood within a damaged blood vessel. It involves vessel constriction and blood clotting." }, 
        ar: { word: "Hemostasis (إرقاء)", meaning: "العملية التي تؤدي إلى توقف النزيف، مما يحافظ على الدم داخل الوعاء الدموي المتضرر. تتضمن انقباض الوعاء وتخثر الدم." } 
    },
    { 
        id: 856, 
        ku: { word: "Hyperglycemia (بەرزە شەکرە)", meaning: "بەرزبوونەوەی زۆری ئاستی شەکر لە ناو خوێندا. نیشانەیەکی سەرەکییە بۆ نەخۆشی شەکرە کە کۆنترۆڵ نەکراوە." }, 
        en: { word: "Hyperglycemia", meaning: "An abnormally high blood glucose (blood sugar) level, often a hallmark sign of diabetes that is not well-managed." }, 
        ar: { word: "Hyperglycemia (ارتفاع سكر الدم)", meaning: "مستوى غلوكوز (سكر) دم مرتفع بشكل غير طبيعي، وغالباً ما يكون علامة مميزة لمرض السكري الذي لا تتم إدارته بشكل جيد." } 
    },
    { 
        id: 857, 
        ku: { word: "Hypoglycemia (دابەزینی شەکرە)", meaning: "دابەزینی ئاستی شەکر لە ناو خوێندا بۆ کەمتر لە ئاستی پێویست. دەبێتە هۆی گێژبوون، ئارەقەکردن، و لەرزین. حاڵەتێکی کتوپڕە." }, 
        en: { word: "Hypoglycemia", meaning: "An abnormally low blood glucose level, which can cause symptoms like dizziness, sweating, and shaking. It requires immediate correction." }, 
        ar: { word: "Hypoglycemia (انخفاض سكر الدم)", meaning: "مستوى غلوكوز دم منخفض بشكل غير طبيعي، مما قد يسبب أعراضاً مثل الدوار والتعرق والارتعاش. يتطلب تصحيحاً فورياً." } 
    },
    { 
        id: 858, 
        ku: { word: "Orthopedics (ئێسکناسی)", meaning: "بەشێکی پزیشکییە کە گرنگی دەدات بە ئێسک، جومگە، ماسولکە، و بەستەرەکان. چارەسەری شکان و کێشەکانی بڕبڕەی پشت دەکات." }, 
        en: { word: "Orthopedics", meaning: "The branch of medicine dealing with the correction of deformities or functional impairments of the skeletal system, especially the spine and joints." }, 
        ar: { word: "Orthopedics (جراحة العظام)", meaning: "فرع الطب المعني بتصحيح التشوهات أو الضعف الوظيفي للجهاز الهيكلي، وخاصة العمود الفقري والمفاصل." } 
    },
    { 
        id: 859, 
        ku: { word: "Pediatrics (پزیشکی منداڵان)", meaning: "بەشێکی پزیشکییە کە تایبەتە بە چاودێری و چارەسەرکردنی منداڵان لە کاتی لەدایکبوونەوە تا تەمەنی هەرزەکاری." }, 
        en: { word: "Pediatrics", meaning: "The branch of medicine dealing with the health and medical care of infants, children, and adolescents from birth up to the age of 18." }, 
        ar: { word: "Pediatrics (طب الأطفال)", meaning: "فرع الطب المعني بالصحة والرعاية الطبية للرضع والأطفال والمراهقين من الولادة وحتى سن 18 عاماً." } 
    },
    { 
        id: 860, 
        ku: { word: "Obstetrics (پزیشکی ژنان و منداڵبوون)", meaning: "بەشێکی پزیشکییە کە گرنگی بە چاودێری ئافرەتان دەدات لە کاتی دووگیانی، منداڵبوون، و ماوەی دوای منداڵبوون." }, 
        en: { word: "Obstetrics", meaning: "The medical specialty dealing with the care of women during pregnancy, childbirth, and the postpartum period." }, 
        ar: { word: "Obstetrics (طب التوليد)", meaning: "التخصص الطبي المعني برعاية النساء أثناء الحمل والولادة وفترة ما بعد الولادة." } 
    },
    { 
        id: 861, 
        ku: { word: "Gynecology (نەخۆشییەکانی ژنان)", meaning: "بەشێکی پزیشکییە کە تایبەتە بە تەندروستی کۆئەندامی زاوزێی ئافرەتان و چارەسەرکردنی نەخۆشییە تایبەتەکانیان." }, 
        en: { word: "Gynecology", meaning: "The branch of medicine dealing with the health of the female reproductive system and its associated diseases." }, 
        ar: { word: "Gynecology (طب النساء)", meaning: "فرع الطب المعني بصحة الجهاز التناسلي الأنثوي والأمراض المرتبطة به." } 
    },
    { 
        id: 862, 
        ku: { word: "Psychiatry (پزیشکی دەروونی)", meaning: "بەشێکی پزیشکییە کە تایبەتە بە دەستنیشانکردن و چارەسەرکردنی تێکچوونە دەروونییەکان، سۆزدارییەکان، و ڕەفتارییەکان." }, 
        en: { word: "Psychiatry", meaning: "The medical specialty devoted to the diagnosis, prevention, and treatment of mental, emotional, and behavioral disorders." }, 
        ar: { word: "Psychiatry (الطب النفسي)", meaning: "التخصص الطبي المخصص لتشخيص والوقاية وعلاج الاضطرابات العقلية والعاطفية والسلوكية." } 
    },
    { 
        id: 863, 
        ku: { word: "Pharmacology (دەرمانزانی)", meaning: "زانستی لێکۆڵینەوە لە دەرمانەکان و کاریگەرییان لەسەر جەستەی مرۆڤ و چۆنیەتی بەکارهێنانیان بۆ چارەسەری نەخۆشی." }, 
        en: { word: "Pharmacology", meaning: "The branch of medicine and biology concerned with the study of drug action and the effects of medications on living organisms." }, 
        ar: { word: "Pharmacology (علم الصيدلة)", meaning: "فرع الطب وعلم الأحياء المعني بدراسة مفعول الأدوية وآثار الأدوية على الكائنات الحية." } 
    },
    { 
        id: 864, 
        ku: { word: "Toxicology (ژەهرناسی)", meaning: "زانستی لێکۆڵینەوە لە ماددە ژەهراوییەکان و کاریگەرییە خراپەکانیان لەسەر جەستە و چۆنیەتی چارەسەرکردنی کەسی ژەهراویبوو." }, 
        en: { word: "Toxicology", meaning: "The study of the adverse effects of chemical substances on living organisms and the practice of diagnosing and treating exposures to toxins." }, 
        ar: { word: "Toxicology (علم السموم)", meaning: "دراسة الآثار الضارة للمواد الكيميائية على الكائنات الحية وممارسة تشخيص وعلاج التعرض للسموم." } 
    },
    { 
        id: 865, 
        ku: { word: "Epidemiology (پەتاناسی)", meaning: "زانستی لێکۆڵینەوە لەوەی چۆن نەخۆشییەکان بڵاودەبنەوە لە ناو کۆمەڵگادا و چۆن دەتوانرێت کۆنترۆڵ بکرێن." }, 
        en: { word: "Epidemiology", meaning: "The branch of medicine which deals with the incidence, distribution, and possible control of diseases and other factors relating to health." }, 
        ar: { word: "Epidemiology (علم الأوبئة)", meaning: "فرع الطب الذي يتعامل مع حدوث وتوزيع والسيطرة المحتملة على الأمراض والعوامل الأخرى المتعلقة بالصحة." } 
    },
    { 
        id: 866, 
        ku: { word: "Antigen (دژەپەیداکەر)", meaning: "هەر ماددەیەکی نامۆ (وەک بەشێکی بەکتریا یان ڤایرۆس) کە سیستەمی بەرگری جەستە هاندەدات بۆ وەڵامدانەوە و دروستکردنی دژەتەن." }, 
        en: { word: "Antigen", meaning: "A toxin or other foreign substance which induces an immune response in the body, especially the production of antibodies." }, 
        ar: { word: "Antigen (مستضد)", meaning: "سم أو مادة غريبة أخرى تحفز استجابة مناعية في الجسم، وخاصة إنتاج الأجسام المضادة." } 
    },
    { 
        id: 867, 
        ku: { word: "Antibody (دژەتەن)", meaning: "پڕۆتینێکی تایبەتە کە سیستەمی بەرگری دروستی دەکات بۆ ناسینەوە و لەناوبردنی میکرۆبەکان و تەنە نامۆکانی ناو جەستە." }, 
        en: { word: "Antibody", meaning: "A blood protein produced in response to and counteracting a specific antigen, helping the body recognize and destroy pathogens." }, 
        ar: { word: "Antibody (جسم مضاد)", meaning: "بروتين في الدم ينتج استجابة لمستضد معين ولمواجهته، مما يساعد الجسم على التعرف على مسببات الأمراض وتدميرها." } 
    },
    { 
        id: 868, 
        ku: { word: "Enzyme (ئەنزیم)", meaning: "ماددەیەکی پڕۆتینییە کە وەک هاندەر کار دەکات بۆ خێراکردنی کارلێکە کیمیاییەکانی ناو جەستە، وەک ئەنزیمەکانی هەرس." }, 
        en: { word: "Enzyme", meaning: "A substance produced by a living organism which acts as a catalyst to bring about a specific biochemical reaction, such as speeding up digestion." }, 
        ar: { word: "Enzyme (إنزيم)", meaning: "مادة ينتجها كائن حي وتعمل كعامل حفاز لإحداث تفاعل كيميائي حيوي محدد، مثل تسريع عملية الهضم." } 
    },
    { 
        id: 869, 
        ku: { word: "Hormone (هۆرمۆن)", meaning: "ماددەیەکی کیمیاییە کە لەلایەن ڕژێنەکانەوە دەردەدرێت بۆ ناو خوێن و کار دەکات بۆ ڕێکخستنی فەرمانەکانی جەستە وەک گەشە و میتابۆلیزم." }, 
        en: { word: "Hormone", meaning: "Regulatory substances produced in an organism and transported in tissue fluids such as blood to stimulate specific cells or tissues into action." }, 
        ar: { word: "Hormone (هرمون)", meaning: "مواد تنظيمية تنتج في الكائن الحي وتنتقل في سوائل الأنسجة مثل الدم لتحفيز خلايا أو أنسجة معينة على العمل." } 
    },
    { 
        id: 870, 
        ku: { word: "Metastasis (بڵاوبوونەوە)", meaning: "کرداری بڵاوبوونەوەی خانە شێرپەنجەییەکان لە شوێنی سەرەکی خۆیانەوە بۆ بەشەکانی تری جەستە لە ڕێگەی خوێن یان لیمفەوە." }, 
        en: { word: "Metastasis", meaning: "The development of secondary malignant growths at a distance from a primary site of cancer, spreading through blood or lymph systems." }, 
        ar: { word: "Metastasis (نقيلة)", meaning: "تطور نمو خبيث ثانوي في مكان بعيد عن الموقع الأساسي للسرطان، وينتشر عبر أنظمة الدم أو اللمف." } 
    },
    { 
        id: 871, 
        ku: { word: "BP (Blood Pressure)", meaning: "کورتکراوەی پەستانی خوێن. پێوانەی هێزی پاڵنانی خوێنە بۆ سەر دیوارەکانی خوێنبەر." }, 
        en: { word: "BP (Blood Pressure)", meaning: "Abbreviation for Blood Pressure. The measure of the force of blood pushing against blood vessel walls." }, 
        ar: { word: "BP (ضغط الدم)", meaning: "اختصار لضغط الدم. قياس قوة دفع الدم ضد جدران الأوعية الدموية." } 
    },
    { 
        id: 872, 
        ku: { word: "HR (Heart Rate)", meaning: "کورتکراوەی لێدانی دڵ. ژمارەی لێدانەکانی دڵە لە یەک خولەکدا." }, 
        en: { word: "HR (Heart Rate)", meaning: "Abbreviation for Heart Rate. The number of times the heart beats per minute." }, 
        ar: { word: "HR (معدل ضربات القلب)", meaning: "اختصار لمعدل ضربات القلب. عدد مرات خفقان القلب في الدقيقة." } 
    },
    { 
        id: 873, 
        ku: { word: "CPR (Cardiopulmonary Resuscitation)", meaning: "بووژاندنەوەی دڵ و سییەکان. کردارێکی فریاگوزارییە بۆ کەسێک کە دڵ یان هەناسەی وەستاوە." }, 
        en: { word: "CPR", meaning: "Cardiopulmonary Resuscitation. An emergency procedure performed when the heart stops beating or breathing stops." }, 
        ar: { word: "CPR (الإنعاش القلبي الرئوي)", meaning: "إجراء طارئ يتم إجراؤه عندما يتوقف القلب عن النبض أو يتوقف التنفس." } 
    },
    { 
        id: 874, 
        ku: { word: "ICU (Intensive Care Unit)", meaning: "یەکەی چاودێری چڕ. بەشێکی تایبەتە لە نەخۆشخانە بۆ چاودێریکردنی ئەو نەخۆشانەی کە باری تەندروستیان زۆر ناجێگیر و مەترسیدارە." }, 
        en: { word: "ICU (Intensive Care Unit)", meaning: "A special department of a hospital that provides intensive treatment medicine for severe or life-threatening illnesses." }, 
        ar: { word: "ICU (وحدة العناية المركزة)", meaning: "قسم خاص في المستشفى يقدم العلاج المكثف للأمراض الشديدة أو المهددة للحياة." } 
    },
    { 
        id: 875, 
        ku: { word: "MRI (Magnetic Resonance Imaging)", meaning: "وێنەگرتن بە لەرەلەری موگناتیسی. ئامێرێکە کە موگناتیس و شەپۆلی ڕادیۆیی بەکاردەهێنێت بۆ دروستکردنی وێنەی وردی ئەندامەکانی ناوەوەی جەستە." }, 
        en: { word: "MRI", meaning: "Magnetic Resonance Imaging. A medical imaging technique used to form pictures of the anatomy and the physiological processes of the body." }, 
        ar: { word: "MRI (التصوير بالرنين المغناطيسي)", meaning: "تقنية تصوير طبي تستخدم لتكوين صور للتشريح والعمليات الفسيولوجية للجسم." } 
    },
    { 
        id: 876, 
        ku: { word: "CT (Computed Tomography)", meaning: "پشکنینی تیشکی بڕگەیی یان مفراس. جۆرێکە لە تیشکی ئێکس کە وێنەی سێ دووری ئەندامەکانی ناوەوەی جەستە دەگرێت." }, 
        en: { word: "CT scan", meaning: "Computed Tomography. A medical imaging technique that uses computer-processed combinations of multiple X-ray measurements taken from different angles." }, 
        ar: { word: "CT (التصوير المقطعي المحوسب)", meaning: "تقنية تصوير طبي تستخدم مجموعات معالجة بالكمبيوتر لقياسات أشعة سينية متعددة مأخوذة من زوايا مختلفة." } 
    },
    { 
        id: 877, 
        ku: { word: "CBC (Complete Blood Count)", meaning: "پشکنینی گشتی خوێن. پشکنینێکە بۆ پێوانەکردنی ژمارەی خڕۆکە سوورەکان، خڕۆکە سپییەکان و پەڕەکانی خوێن." }, 
        en: { word: "CBC (Complete Blood Count)", meaning: "A blood test used to evaluate your overall health and detect a wide range of disorders, including anemia, infection and leukemia." }, 
        ar: { word: "CBC (تعداد الدم الكامل)", meaning: "اختبار دم يستخدم لتقييم صحتك العامة واكتشاف مجموعة واسعة من الاضطرابات، بما في ذلك فقر الدم والعدوى." } 
    },
    { 
        id: 878, 
        ku: { word: "ECG/EKG (Electrocardiogram)", meaning: "هێڵکاری دڵ. پشکنینێکە کە چالاکی کارەبایی دڵ تۆمار دەکات بۆ دەستنیشانکردنی کێشەکانی دڵ." }, 
        en: { word: "ECG/EKG", meaning: "Electrocardiogram. A test that measures the electrical activity of the heartbeat to detect cardiac problems." }, 
        ar: { word: "ECG/EKG (تخطيط كهربية القلب)", meaning: "اختبار يسجل النشاط الكهربائي للقلب لاكتشاف مشاكل القلب." } 
    },
    { 
        id: 879, 
        ku: { word: "IV (Intravenous)", meaning: "لە ڕێگەی دەمارەوە. ڕێگەیەکە بۆ پێدانی دەرمان یان شلەمەنی ڕاستەوخۆ بۆ ناو خوێنهێنەرەکان." }, 
        en: { word: "IV (Intravenous)", meaning: "Administered into a vein. A method to deliver fluids, medications, or blood directly into the bloodstream." }, 
        ar: { word: "IV (في الوريد)", meaning: "يُعطى في الوريد. طريقة لتوصيل السوائل أو الأدوية أو الدم مباشرة إلى مجرى الدم." } 
    },
    { 
        id: 880, 
        ku: { word: "IM (Intramuscular)", meaning: "لە ڕێگەی ماسولکەوە. دەرزییەک کە ڕاستەوخۆ دەکرێتە ناو ماسولکە بۆ پێدانی دەرمان." }, 
        en: { word: "IM (Intramuscular)", meaning: "Administered into a muscle. An injection given directly into the muscle for medication delivery." }, 
        ar: { word: "IM (في العضل)", meaning: "يُعطى في العضلة. حقنة تعطى مباشرة في العضلة لتوصيل الدواء." } 
    },
    { 
        id: 881, 
        ku: { word: "PO (Per Os / By mouth)", meaning: "لە ڕێگەی دەمەوە. کورتکراوەیەکە بۆ پێدانی دەرمان یان خۆراک لە ڕێگەی دەمەوە." }, 
        en: { word: "PO (Per Os)", meaning: "By mouth. A medical abbreviation instructing that a medication or food should be taken orally." }, 
        ar: { word: "PO (عن طريق الفم)", meaning: "عن طريق الفم. اختصار طبي يشير إلى أنه يجب تناول الدواء أو الطعام عن طريق الفم." } 
    },
    { 
        id: 882, 
        ku: { word: "NPO (Nil Per Os)", meaning: "هیچ نەخواردن لە ڕێگەی دەمەوە. واتە نەخۆشەکە نابێت هیچ شتێک بخوات یان بخواتەوە، زۆرجار پێش نەشتەرگەری." }, 
        en: { word: "NPO", meaning: "Nothing by mouth. A medical instruction to withhold food and fluids, typically before surgery or a medical procedure." }, 
        ar: { word: "NPO (لا شيء عن طريق الفم)", meaning: "تعليمات طبية بالامتناع عن تناول الطعام والسوائل، عادة قبل الجراحة." } 
    },
    { 
        id: 883, 
        ku: { word: "PRN (Pro Re Nata)", meaning: "لە کاتی پێویستدا. دەرمانێک کە تەنها کاتێک دەخورێت کە نەخۆشەکە پێویستی پێیەتی (وەک ئازارشکێن)." }, 
        en: { word: "PRN", meaning: "As needed. A prescription instruction indicating a medication should be taken only when necessary." }, 
        ar: { word: "PRN (عند الحاجة)", meaning: "حسب الحاجة. تعليمات وصفة طبية تشير إلى أنه يجب تناول الدواء فقط عند الضرورة." } 
    },
    { 
        id: 884, 
        ku: { word: "BID (Bis In Die)", meaning: "دووجار لە ڕۆژێکدا. ڕێنمایی پزیشک بۆ بەکارهێنانی دەرمانێک دووجار لە ڕۆژێکدا (هەموو ١٢ کاتژمێرێک)." }, 
        en: { word: "BID", meaning: "Twice a day. A medical abbreviation for prescribing a medication to be taken two times a day (every 12 hours)." }, 
        ar: { word: "BID (مرتين في اليوم)", meaning: "مرتين في اليوم. اختصار طبي لوصف دواء يتم تناوله مرتين يومياً." } 
    },
    { 
        id: 885, 
        ku: { word: "TID (Ter In Die)", meaning: "سێ جار لە ڕۆژێکدا. ڕێنمایی پزیشک بۆ بەکارهێنانی دەرمانێک سێ جار لە ڕۆژێکدا (هەموو ٨ کاتژمێرێک)." }, 
        en: { word: "TID", meaning: "Three times a day. A medical abbreviation for prescribing a medication to be taken three times a day (every 8 hours)." }, 
        ar: { word: "TID (ثلاث مرات في اليوم)", meaning: "ثلاث مرات في اليوم. اختصار لوصف دواء يتم تناوله ثلاث مرات يومياً." } 
    },
    { 
        id: 886, 
        ku: { word: "QID (Quater In Die)", meaning: "چوار جار لە ڕۆژێکدا. ڕێنمایی پزیشک بۆ بەکارهێنانی دەرمانێک چوار جار لە ڕۆژێکدا (هەموو ٦ کاتژمێرێک)." }, 
        en: { word: "QID", meaning: "Four times a day. A medical abbreviation for a medication to be taken four times a day (every 6 hours)." }, 
        ar: { word: "QID (أربع مرات في اليوم)", meaning: "أربع مرات في اليوم. دواء يتم تناوله كل 6 ساعات." } 
    },
    { 
        id: 887, 
        ku: { word: "Rx (Prescription)", meaning: "ڕەچەتەی پزیشک یان وەسفە. هێمایەکە بەکاردێت بۆ ئاماژەدان بەو دەرمانانەی کە پزیشک بۆ نەخۆشی دەنوسێت." }, 
        en: { word: "Rx (Prescription)", meaning: "Medical prescription. A symbol meaning 'take this' or simply referring to the prescribed medication or treatment." }, 
        ar: { word: "Rx (وصفة طبية)", meaning: "وصفة طبية. رمز يستخدم للإشارة إلى الأدوية التي يصفها الطبيب للمريض." } 
    },
    { 
        id: 888, 
        ku: { word: "Dx (Diagnosis)", meaning: "دەستنیشانکردنی نەخۆشی. کورتکراوەیەکە بۆ ئەو ئەنجامەی کە پزیشک پێی گەیشتووە دەربارەی جۆری نەخۆشییەکە." }, 
        en: { word: "Dx (Diagnosis)", meaning: "Abbreviation for diagnosis, referring to the identification of the nature of an illness or other problem by examination of the symptoms." }, 
        ar: { word: "Dx (التشخيص)", meaning: "اختصار للتشخيص، يشير إلى تحديد طبيعة المرض من خلال فحص الأعراض." } 
    },
    { 
        id: 889, 
        ku: { word: "Hx (History)", meaning: "مێژووی نەخۆشی. کۆمەڵێک زانیارییە دەربارەی باری تەندروستی ڕابردوو و ئێستای نەخۆشەکە و خێزانەکەی." }, 
        en: { word: "Hx (History)", meaning: "Medical history. A record of a patient's past and present medical conditions, surgeries, and family health." }, 
        ar: { word: "Hx (التاريخ الطبي)", meaning: "التاريخ الطبي. سجل للحالات الطبية السابقة والحالية للمريض وعائلته." } 
    },
    { 
        id: 890, 
        ku: { word: "Tx (Treatment)", meaning: "چارەسەر. ئەو ڕێکار و دەرمانانەی کە بەکاردێن بۆ باشترکردنی باری تەندروستی نەخۆش." }, 
        en: { word: "Tx (Treatment)", meaning: "Abbreviation for medical treatment or therapy applied to a patient." }, 
        ar: { word: "Tx (العلاج)", meaning: "اختصار للعلاج الطبي المطبق على المريض." } 
    },
    { 
        id: 891, 
        ku: { word: "SOB (Shortness of Breath)", meaning: "تەنگەنەفەسی یان کەمی هەناسەدان. هەستکردن بەوەی کە ناتوانیت هەناسەی تەواو هەڵبمژیت." }, 
        en: { word: "SOB", meaning: "Shortness of Breath (Dyspnea). The sensation of not being able to breathe in enough air." }, 
        ar: { word: "SOB (ضيق التنفس)", meaning: "ضيق في التنفس. الإحساس بعدم القدرة على تنفس كمية كافية من الهواء." } 
    },
    { 
        id: 892, 
        ku: { word: "STAT (Statim)", meaning: "دەستبەجێ یان بەپەلە. ڕێنماییەکە کە دەبێت کردارەکە یان دەرمانەکە ڕاستەوخۆ و بێ دواکەوتن جێبەجێ بکرێت." }, 
        en: { word: "STAT", meaning: "Immediately. A common medical abbreviation denoting that an action or medication administration must be done without delay." }, 
        ar: { word: "STAT (فوراً)", meaning: "فوراً. اختصار طبي يشير إلى أنه يجب القيام بإجراء ما أو إعطاء دواء دون تأخير." } 
    },
    { 
        id: 893, 
        ku: { word: "UTI (Urinary Tract Infection)", meaning: "هەوکردنی کۆئەندامی میز. هەوکردنێکە کە دەکرێت گورچیلە، میزڵدان یان بۆری میز بگرێتەوە بەهۆی بەکتریاوە." }, 
        en: { word: "UTI", meaning: "Urinary Tract Infection. An infection in any part of the urinary system, the kidneys, bladder, or urethra." }, 
        ar: { word: "UTI (التهاب المسالك البولية)", meaning: "التهاب المسالك البولية. عدوى في أي جزء من الجهاز البولي، الكلى، المثانة، أو مجرى البول." } 
    },
    { 
        id: 894, 
        ku: { word: "WBC (White Blood Cell)", meaning: "خڕۆکە سپییەکانی خوێن. خانەکانی بەرگری جەستەن کە شەڕی میکرۆبەکان و هەوکردن دەکەن." }, 
        en: { word: "WBC", meaning: "White Blood Cell. Immune system cells that protect the body against both infectious disease and foreign invaders." }, 
        ar: { word: "WBC (خلايا الدم البيضاء)", meaning: "خلايا الدم البيضاء. خلايا الجهاز المناعي التي تحمي الجسم ضد الأمراض المعدية والغزاة الأجانب." } 
    },
    { 
        id: 895, 
        ku: { word: "RBC (Red Blood Cell)", meaning: "خڕۆکە سوورەکانی خوێن. خانەکانن کە ئۆکسجین هەڵدەگرن بۆ هەموو بەشەکانی جەستە." }, 
        en: { word: "RBC", meaning: "Red Blood Cell. Cells in the blood that transport oxygen from the lungs to the rest of the body." }, 
        ar: { word: "RBC (خلايا الدم الحمراء)", meaning: "خلايا الدم الحمراء. الخلايا في الدم التي تنقل الأكسجين من الرئتين إلى بقية الجسم." } 
    },
    { 
        id: 896, 
        ku: { word: "ER/ED (Emergency Room/Department)", meaning: "بەشی فریاکەوتن لە نەخۆشخانە بۆ چارەسەری نەخۆشییە کتوپڕ و مەترسیدارەکان." }, 
        en: { word: "ER/ED", meaning: "Emergency Room / Emergency Department. A medical treatment facility specializing in emergency medicine." }, 
        ar: { word: "ER/ED (قسم الطوارئ)", meaning: "غرفة أو قسم الطوارئ. منشأة طبية متخصصة في طب الطوارئ وعلاج الحالات العاجلة." } 
    },
    { 
        id: 897, 
        ku: { word: "OR (Operating Room)", meaning: "ژووری نەشتەرگەری. شوێنێکی تایبەت و پاکە لە نەخۆشخانە کە نەشتەرگەری تێدا ئەنجام دەدرێت." }, 
        en: { word: "OR", meaning: "Operating Room. A facility within a hospital where surgical operations are carried out in a sterile environment." }, 
        ar: { word: "OR (غرفة العمليات)", meaning: "غرفة العمليات. منشأة داخل المستشفى يتم فيها إجراء العمليات الجراحية في بيئة معقمة." } 
    },
    { 
        id: 898, 
        ku: { word: "OPD (Outpatient Department)", meaning: "بەشی ڕاوێژکاری یان نەخۆشە دەرەکییەکان. ئەو بەشەی نەخۆشخانەیە کە نەخۆش سەردانی دەکات بۆ پشکنین بەبێ خەواندن." }, 
        en: { word: "OPD", meaning: "Outpatient Department. The part of a hospital designed for the treatment of outpatients, people with health problems who visit the hospital for diagnosis or treatment, but do not require a bed or to be admitted for overnight care." }, 
        ar: { word: "OPD (قسم العيادات الخارجية)", meaning: "قسم العيادات الخارجية. جزء المستشفى المصمم لعلاج المرضى الذين لا يحتاجون إلى التنويم." } 
    },
    { 
        id: 899, 
        ku: { word: "BMI (Body Mass Index)", meaning: "پێوەری بارستەی لەش. ژمارەیەکە لە کێش و باڵای کەسەکە دروست دەکرێت بۆ زانینی ئەوەی کە کێشی ئاساییە یان قەڵەوە." }, 
        en: { word: "BMI", meaning: "Body Mass Index. A value derived from the mass and height of a person to categorize them as underweight, normal weight, overweight, or obese." }, 
        ar: { word: "BMI (مؤشر كتلة الجسم)", meaning: "مؤشر كتلة الجسم. قيمة مشتقة من كتلة وطول الشخص لمعرفة ما إذا كان وزنه طبيعياً أم لا." } 
    },
    { 
        id: 900, 
        ku: { word: "GI (Gastrointestinal)", meaning: "کۆئەندامی هەرس. هەموو ئەو ئەندامانە دەگرێتەوە کە پەیوەندییان بە هەرسکردنی خۆراکەوە هەیە (گەدە و ڕیخۆڵە)." }, 
        en: { word: "GI", meaning: "Gastrointestinal. Relating to the stomach and the intestines (the digestive tract)." }, 
        ar: { word: "GI (الجهاز الهضمي)", meaning: "معدي معوي. يتعلق بالمعدة والأمعاء (الجهاز الهضمي)." } 
    },
    { 
        id: 901, 
        ku: { word: "ENT (Ear, Nose, Throat)", meaning: "قوڕگ و لووت و گوێ. بەشێکی پزیشکییە تایبەت بە نەخۆشییەکانی ئەو سێ ئەندامە." }, 
        en: { word: "ENT", meaning: "Ear, Nose, and Throat. A medical abbreviation for otolaryngology, the branch of medicine focusing on these areas." }, 
        ar: { word: "ENT (الأنف والأذن والحنجرة)", meaning: "الأنف والأذن والحنجرة. تخصص طبي يركز على هذه المناطق." } 
    },
    { 
        id: 902, 
        ku: { word: "CSF (Cerebrospinal Fluid)", meaning: "شلەی مێشک و دڕکەپەتک. شلەیەکی ڕوونە کە مێشک و دڕکەپەتک دەپارێزێت." }, 
        en: { word: "CSF", meaning: "Cerebrospinal Fluid. A clear, colorless body fluid found in the brain and spinal cord that acts as a cushion or buffer." }, 
        ar: { word: "CSF (السائل النخاعي)", meaning: "السائل الدماغي الشوكي. سائل صافٍ يحمي الدماغ والحبل الشوكي." } 
    },
    { 
        id: 903, 
        ku: { word: "CXR (Chest X-Ray)", meaning: "تیشکی سنگ. وێنەگرتنی سییەکان و دڵ بە بەکارهێنانی تیشکی ئێکس." }, 
        en: { word: "CXR", meaning: "Chest X-Ray. A projection radiograph of the chest used to diagnose conditions affecting the chest, its contents, and nearby structures." }, 
        ar: { word: "CXR (أشعة سينية للصدر)", meaning: "أشعة سينية للصدر. تستخدم لتشخيص الحالات التي تؤثر على الصدر ومحتوياته." } 
    },
    { 
        id: 904, 
        ku: { word: "HTN (Hypertension)", meaning: "بەرزەپەستانی خوێن. نەخۆشییەکە کە تێیدا پەستانی خوێن بە شێوەیەکی درێژخایەن بەرز دەبێتەوە." }, 
        en: { word: "HTN", meaning: "Hypertension. The medical abbreviation for high blood pressure." }, 
        ar: { word: "HTN (ارتفاع ضغط الدم)", meaning: "اختصار طبي لارتفاع ضغط الدم." } 
    },
    { 
        id: 905, 
        ku: { word: "DM (Diabetes Mellitus)", meaning: "نەخۆشی شەکرە. کورتکراوەیە بۆ باوترین جۆری نەخۆشی شەکرە." }, 
        en: { word: "DM", meaning: "Diabetes Mellitus. A group of metabolic disorders characterized by a high blood sugar level over a prolonged period of time." }, 
        ar: { word: "DM (داء السكري)", meaning: "مجموعة من الاضطرابات الأيضية تتميز بارتفاع مستوى السكر في الدم لفترة طويلة." } 
    },
    { 
        id: 906, 
        ku: { word: "MI (Myocardial Infarction)", meaning: "جەڵتەی دڵ. کاتێک ڕوودەدات کە خوێن بۆ بەشێکی دڵ ناچێت و خانەکانی دڵ دەمرن." }, 
        en: { word: "MI", meaning: "Myocardial Infarction. Commonly known as a heart attack, occurs when blood flow decreases or stops to a part of the heart." }, 
        ar: { word: "MI (احتشاء عضلة القلب)", meaning: "يُعرف عادة بالنوبة القلبية، ويحدث عندما ينخفض أو يتوقف تدفق الدم إلى جزء من القلب." } 
    },
    { 
        id: 907, 
        ku: { word: "CVA (Cerebrovascular Accident)", meaning: "جەڵتەی مێشک. لەدەستدانی کتوپڕی فەرمانەکانی مێشک بەهۆی وەستانی ڕۆیشتنی خوێن بۆ مێشک." }, 
        en: { word: "CVA", meaning: "Cerebrovascular Accident. The medical term for a stroke, caused by a loss of blood flow to part of the brain." }, 
        ar: { word: "CVA (السكتة الدماغية)", meaning: "المصطلح الطبي للسكتة الدماغية، الناتجة عن فقدان تدفق الدم إلى جزء من الدماغ." } 
    },
    { 
        id: 908, 
        ku: { word: "COPD (Chronic Obstructive Pulmonary Disease)", meaning: "گیرانی درێژخایەنی سییەکان. نەخۆشییەکی هەناسەدانە کە دەبێتە هۆی کێشەی تەنگەنەفەسی، زۆرجار بەهۆی جگەرەکێشانەوەیە." }, 
        en: { word: "COPD", meaning: "Chronic Obstructive Pulmonary Disease. A type of progressive lung disease characterized by long-term breathing problems." }, 
        ar: { word: "COPD (مرض الانسداد الرئوي المزمن)", meaning: "نوع من أمراض الرئة التقدمية يتميز بمشاكل في التنفس على المدى الطويل." } 
    },
    { 
        id: 909, 
        ku: { word: "DVT (Deep Vein Thrombosis)", meaning: "مەیینی خوێنی دەمارە قووڵەکان. کڵۆبوونی خوێن لە دەمارەکانی قاچدا کە مەترسیدارە و دەشێت بچێتە سییەکان." }, 
        en: { word: "DVT", meaning: "Deep Vein Thrombosis. The formation of a blood clot in a deep vein, most commonly in the legs." }, 
        ar: { word: "DVT (جلطة الأوردة العميقة)", meaning: "تكوين جلطة دموية في وريد عميق، وغالباً ما يكون في الساقين." } 
    },
    { 
        id: 910, 
        ku: { word: "PE (Pulmonary Embolism)", meaning: "مەیینی خوێنی سییەکان. گیرانی خوێنبەرەکانی ناو سییەکان بەهۆی کڵۆیەکی خوێنەوە کە لە شوێنێکی ترەوە هاتووە." }, 
        en: { word: "PE", meaning: "Pulmonary Embolism. A blockage of an artery in the lungs by a substance that has moved from elsewhere in the body." }, 
        ar: { word: "PE (الانصمام الرئوي)", meaning: "انسداد شريان في الرئتين بواسطة مادة (جلطة) انتقلت من مكان آخر في الجسم." } 
    },
    { 
        id: 911, 
        ku: { word: "STI/STD", meaning: "نەخۆشییە گوازراوەکانی سێکس. نەخۆشییەک کە لە ڕێگەی سێکسەوە دەگوازرێتەوە (وەک ئایدز، سیفلس)." }, 
        en: { word: "STI/STD", meaning: "Sexually Transmitted Infection/Disease. Infections that are passed from one person to another through sexual contact." }, 
        ar: { word: "STI/STD (الأمراض المنقولة جنسياً)", meaning: "العدوى التي تنتقل من شخص لآخر عن طريق الاتصال الجنسي." } 
    },
    { 
        id: 912, 
        ku: { word: "TB (Tuberculosis)", meaning: "نەخۆشی سیل. نەخۆشییەکی بەکتریایی درمە کە زۆرجار سییەکان تووش دەکات." }, 
        en: { word: "TB", meaning: "Tuberculosis. An infectious disease usually caused by Mycobacterium tuberculosis bacteria, typically affecting the lungs." }, 
        ar: { word: "TB (السل)", meaning: "مرض معدي يسببه بكتيريا المتفطرة السلية، ويؤثر عادة على الرئتين." } 
    },
    { 
        id: 913, 
        ku: { word: "HIV", meaning: "ڤایرۆسی نەمانی بەرگری لەش. ڤایرۆسێکە کە پەلاماری سیستەمی بەرگری دەدات و دەبێتە هۆی ئایدز." }, 
        en: { word: "HIV", meaning: "Human Immunodeficiency Virus. A virus that attacks the body's immune system, potentially leading to AIDS." }, 
        ar: { word: "HIV (فيروس نقص المناعة البشرية)", meaning: "فيروس يهاجم جهاز المناعة في الجسم، مما قد يؤدي إلى مرض الإيدز." } 
    },
    { 
        id: 914, 
        ku: { word: "GCS (Glasgow Coma Scale)", meaning: "پێوەری گلاسگۆ بۆ بێهۆشی. پێوەرێکە بۆ زانینی ئاستی هۆشیاری نەخۆش دوای پێکان لە سەردا." }, 
        en: { word: "GCS", meaning: "Glasgow Coma Scale. A neurological scale which aims to give a reliable and objective way of recording the state of a person's consciousness." }, 
        ar: { word: "GCS (مقياس غلاسكو للغيبوبة)", meaning: "مقياس عصبي يهدف إلى توفير طريقة موثوقة وموضوعية لتسجيل حالة وعي الشخص." } 
    },
    { 
        id: 915, 
        ku: { word: "DOB (Date Of Birth)", meaning: "بەرواری لەدایکبوون. زۆرجار لە فایلە پزیشکییەکاندا وەک کورتکراوە بەکاردێت." }, 
        en: { word: "DOB", meaning: "Date of Birth. Used commonly in medical records to identify the patient." }, 
        ar: { word: "DOB (تاريخ الميلاد)", meaning: "تاريخ الميلاد. يستخدم بشكل شائع في السجلات الطبية للتعرف على المريض." } 
    },
    { 
        id: 916, 
        ku: { word: "ALS (Advanced Life Support)", meaning: "پاڵپشتی پێشکەوتووی ژیان. کۆمەڵێک ڕێکاری پزیشکییە کە بۆ ڕزگارکردنی ژیانی نەخۆشێک بەکاردێت لە کاتی وەستانی دڵ و سییەکان، بە بەکارهێنانی دەرمان و ئامێر." }, 
        en: { word: "ALS", meaning: "Advanced Life Support. A set of life-saving protocols and skills that extend basic life support to further support the circulation and provide an open airway." }, 
        ar: { word: "ALS (دعم الحياة المتقدم)", meaning: "مجموعة من الإجراءات الطبية المتقدمة لإنقاذ حياة المريض في حالات توقف القلب." } 
    },
    { 
        id: 917, 
        ku: { word: "BLS (Basic Life Support)", meaning: "پاڵپشتی سەرەتایی ژیان. فریاگوزارییەکی سەرەتاییە بۆ یارمەتیدانی کەسێک کە دڵی وەستاوە یان هەناسە نادات بەبێ بەکارهێنانی ئامێری پزیشکی." }, 
        en: { word: "BLS", meaning: "Basic Life Support. The level of medical care which is used for victims of life-threatening illnesses or injuries until they can be given full medical care." }, 
        ar: { word: "BLS (دعم الحياة الأساسي)", meaning: "الرعاية الطبية الأولية التي تقدم للمرضى في الحالات الطارئة حتى توفر الرعاية الطبية الكاملة." } 
    },
    { 
        id: 918, 
        ku: { word: "ETT (Endotracheal Tube)", meaning: "سۆندەی ناو بۆری هەناسە. سۆندەیەکە دەخرێتە ناو بۆری هەناسەوە بۆ یارمەتیدانی نەخۆش بۆ هەناسەدان." }, 
        en: { word: "ETT", meaning: "Endotracheal Tube. A specific type of tracheal tube that is nearly always inserted through the mouth or nose." }, 
        ar: { word: "ETT (أنبوب القصبة الهوائية)", meaning: "أنبوب يتم إدخاله في القصبة الهوائية لمساعدة المريض على التنفس." } 
    },
    { 
        id: 919, 
        ku: { word: "NGT (Nasogastric Tube)", meaning: "سۆندەی گەدە. سۆندەیەکە لە ڕێگەی لووتەوە دەکرێتە ناو گەدە بۆ پێدانی خواردن یان دەرهێنانی دەردراوەکانی ناو گەدە." }, 
        en: { word: "NGT", meaning: "Nasogastric Tube. A tube that is passed through the nose and down through the nasopharynx and esophagus into the stomach." }, 
        ar: { word: "NGT (أنبوب أنفي معدي)", meaning: "أنبوب يتم إدخاله من الأنف إلى المعدة لإعطاء الطعام أو الأدوية." } 
    },
    { 
        id: 920, 
        ku: { word: "ABG (Arterial Blood Gas)", meaning: "گازی خوێنی خوێنبەرەکان. پشکنینێکە بۆ پێوانەکردنی ڕێژەی ئۆکسجین و دووەم ئۆکسیدی کاربۆن لە خوێندا." }, 
        en: { word: "ABG", meaning: "Arterial Blood Gas. A blood test that measures the acidity (pH) and the levels of oxygen and carbon dioxide from an artery." }, 
        ar: { word: "ABG (غازات الدم الشرياني)", meaning: "اختبار دم يقيس مستويات الأكسجين وثاني أكسيد الكربون وحموضة الدم." } 
    },
    { 
        id: 921, 
        ku: { word: "LFT (Liver Function Test)", meaning: "پشکنینی فەرمانەکانی جگەر. پشکنینێکی خوێنە بۆ زانینی تەندروستی جگەر." }, 
        en: { word: "LFT", meaning: "Liver Function Test. A group of blood tests that help detect, evaluate, and monitor liver disease or damage." }, 
        ar: { word: "LFT (وظائف الكبد)", meaning: "مجموعة من اختبارات الدم التي تقيم صحة الكبد وتكشف عن الأمراض المتعلقة به." } 
    },
    { 
        id: 922, 
        ku: { word: "KFT/RFT (Kidney Function Test)", meaning: "پشکنینی فەرمانەکانی گورچیلە. بۆ هەڵسەنگاندنی ئاستی کارکردنی گورچیلەکان بەکاردێت." }, 
        en: { word: "KFT/RFT", meaning: "Kidney/Renal Function Test. Blood tests that evaluate how well your kidneys are working." }, 
        ar: { word: "KFT/RFT (وظائف الكلى)", meaning: "اختبارات دم لتقييم مدى كفاءة عمل الكليتين." } 
    },
    { 
        id: 923, 
        ku: { word: "BUN (Blood Urea Nitrogen)", meaning: "یوریای ناو خوێن. پشکنینێکە بۆ پێوانەکردنی بڕی نایترۆجین لە خوێندا کە یارمەتیدەرە بۆ زانینی تەندروستی گورچیلە." }, 
        en: { word: "BUN", meaning: "Blood Urea Nitrogen. A medical test that measures the amount of urea nitrogen found in blood." }, 
        ar: { word: "BUN (نيتروجين يوريا الدم)", meaning: "اختبار يقيس كمية النيتروجين في الدم لتقييم وظائف الكلى." } 
    },
    { 
        id: 924, 
        ku: { word: "ESR (Erythrocyte Sedimentation Rate)", meaning: "خێرایی نیشتنی خڕۆکە سوورەکان. پشکنینێکە بۆ زانینی بوونی هەوکردن لە جەستەدا." }, 
        en: { word: "ESR", meaning: "Erythrocyte Sedimentation Rate. A blood test that can reveal inflammatory activity in the body." }, 
        ar: { word: "ESR (سرعة ترسب الدم)", meaning: "اختبار دم يكشف عن وجود التهاب في الجسم." } 
    },
    { 
        id: 925, 
        ku: { word: "CRP (C-Reactive Protein)", meaning: "پڕۆتینی کارلێککەری C. پشکنینێکە کە ئاستی هەوکردن لەناو لەشدا نیشان دەدات." }, 
        en: { word: "CRP", meaning: "C-Reactive Protein. A blood test to measure the level of inflammation in the body." }, 
        ar: { word: "CRP (بروتين سي التفاعلي)", meaning: "اختبار دم لقياس مستوى الالتهاب في الجسم." } 
    },
    { 
        id: 926, 
        ku: { word: "Hgb / Hb (Hemoglobin)", meaning: "هیمۆگلۆبین. پڕۆتینێکە لەناو خڕۆکە سوورەکاندا کە ئۆکسجین هەڵدەگرێت، کەمییەکەی دەبێتە هۆی کەمخوێنی." }, 
        en: { word: "Hb", meaning: "Hemoglobin. The protein in red blood cells that carries oxygen." }, 
        ar: { word: "Hb (الهيموجلوبين)", meaning: "البروتين الموجود في خلايا الدم الحمراء والذي ينقل الأكسجين." } 
    },
    { 
        id: 927, 
        ku: { word: "Hct (Hematocrit)", meaning: "هیماتۆکریت. ڕێژەی سەدی خڕۆکە سوورەکان لەناو قەبارەی گشتی خوێندا." }, 
        en: { word: "Hct", meaning: "Hematocrit. The proportion, by volume, of the blood that consists of red blood cells." }, 
        ar: { word: "Hct (الهيماتوكريت)", meaning: "نسبة خلايا الدم الحمراء في حجم الدم الكلي." } 
    },
    { 
        id: 928, 
        ku: { word: "PLT (Platelets)", meaning: "پەڕەکانی خوێن. بەشێکن لە خوێن کە یارمەتی مەیینی خوێن دەدەن کاتێک بریندار دەبیت." }, 
        en: { word: "PLT", meaning: "Platelets. Tiny blood cells that help your body form clots to stop bleeding." }, 
        ar: { word: "PLT (الصفائح الدموية)", meaning: "خلايا دموية صغيرة تساعد في تجلط الدم لوقف النزيف." } 
    },
    { 
        id: 929, 
        ku: { word: "FBS (Fasting Blood Sugar)", meaning: "شەکری خوێن لە کاتی برسێتیدا. پشکنینی شەکرە دوای ئەوەی نەخۆشەکە بۆ چەند کاتژمێرێک هیچ نەخوات." }, 
        en: { word: "FBS", meaning: "Fasting Blood Sugar. A test to measure glucose levels in the blood after fasting." }, 
        ar: { word: "FBS (سكر الدم الصائم)", meaning: "اختبار لقياس مستوى الجلوكوز في الدم بعد الصيام." } 
    },
    { 
        id: 930, 
        ku: { word: "RBS (Random Blood Sugar)", meaning: "شەکری خوێنی هەڕەمەکی. پشکنینی شەکرە لە هەر کاتێکی ڕۆژدا بەبێ گوێدانە کاتی نانخواردن." }, 
        en: { word: "RBS", meaning: "Random Blood Sugar. A test to measure glucose levels at any random time." }, 
        ar: { word: "RBS (سكر الدم العشوائي)", meaning: "اختبار لقياس مستوى السكر في الدم في أي وقت عشوائي." } 
    },
    { 
        id: 931, 
        ku: { word: "HbA1c (Glycated Hemoglobin)", meaning: "شەکرەی کەڵەکەبوو. پشکنینێکە بۆ زانینی تێکڕای ئاستی شەکری خوێن لە ماوەی ٣ مانگی ڕابردوودا." }, 
        en: { word: "HbA1c", meaning: "Glycated Hemoglobin. A test showing the average blood sugar level over the past 2 to 3 months." }, 
        ar: { word: "HbA1c (السكر التراكمي)", meaning: "اختبار يوضح متوسط مستوى السكر في الدم خلال الأشهر الثلاثة الماضية." } 
    },
    { 
        id: 932, 
        ku: { word: "LDL (Low-Density Lipoprotein)", meaning: "کۆلیسترۆڵی خراپ. جۆرێکە لە چەوری خوێن کە ئەگەر زۆر بێت دەبێتە هۆی گیرانی بۆرییەکانی خوێن." }, 
        en: { word: "LDL", meaning: "Low-Density Lipoprotein. Often called 'bad cholesterol' because high levels can lead to plaque buildup in arteries." }, 
        ar: { word: "LDL (الكوليسترول الضار)", meaning: "كوليسترول بروتيني دهني منخفض الكثافة، قد يؤدي ارتفاعه إلى انسداد الشرايين." } 
    },
    { 
        id: 933, 
        ku: { word: "HDL (High-Density Lipoprotein)", meaning: "کۆلیسترۆڵی باش. یارمەتی گواستنەوەی چەورییە خراپەکان دەدات بۆ جگەر بۆ ئەوەی لەناوببرێن." }, 
        en: { word: "HDL", meaning: "High-Density Lipoprotein. Known as 'good cholesterol' as it carries cholesterol back to the liver." }, 
        ar: { word: "HDL (الكوليسترول الجيد)", meaning: "كوليسترول بروتيني دهني عالي الكثافة، يساعد على نقل الكوليسترول الزائد إلى الكبد." } 
    },
    { 
        id: 934, 
        ku: { word: "TG (Triglycerides)", meaning: "چەورییە سیانییەکان. جۆرێکە لە چەوری خوێن کە وەک وزە هەڵدەگیرێت، بەڵام بەرزییەکەی مەترسیدارە." }, 
        en: { word: "TG", meaning: "Triglycerides. A type of fat found in your blood that your body uses for energy." }, 
        ar: { word: "TG (الدهون الثلاثية)", meaning: "نوع من الدهون الموجودة في الدم والتي يستخدمها الجسم للطاقة." } 
    },
    { 
        id: 935, 
        ku: { word: "TSH (Thyroid Stimulating Hormone)", meaning: "هۆرمۆنی هاندەری غودە (ڕژێنی دەرەقی). پشکنینێکە بۆ زانینی چۆنیەتی کارکردنی ڕژێنی دەرەقی." }, 
        en: { word: "TSH", meaning: "Thyroid Stimulating Hormone. A hormone that stimulates the thyroid gland to produce its hormones." }, 
        ar: { word: "TSH (الهرمون المنبه للغدة الدرقية)", meaning: "هرمون يحفز الغدة الدرقية لإنتاج هرموناتها." } 
    },
    { 
        id: 936, 
        ku: { word: "T3 / T4", meaning: "هۆرمۆنەکانی ڕژێنی دەرەقی. کە یارمەتی ڕێکخستنی وزە و گەشەی جەستە دەدەن." }, 
        en: { word: "T3 / T4", meaning: "Thyroid hormones (Triiodothyronine and Thyroxine) that regulate metabolism." }, 
        ar: { word: "T3 / T4 (هرمونات الغدة الدرقية)", meaning: "هرمونات تفرزها الغدة الدرقية لتنظيم عمليات الأيض." } 
    },
    { 
        id: 937, 
        ku: { word: "GFR (Glomerular Filtration Rate)", meaning: "تێکڕای پاڵاوتنی گورچیلە. پێوەرێکە بۆ زانینی ئەوەی گورچیلەکان چەند بەباشی کار دەکەن." }, 
        en: { word: "GFR", meaning: "Glomerular Filtration Rate. A test used to check how well the kidneys are working." }, 
        ar: { word: "GFR (معدل الترشيح الكبيبي)", meaning: "اختبار يستخدم للتحقق من مدى كفاءة عمل الكليتين." } 
    },
    { 
        id: 938, 
        ku: { word: "VDRL (Venereal Disease Research Lab)", meaning: "پشکنینی نەخۆشی سفلیس کە نەخۆشییەکی گوازراوەی سێکسییە." }, 
        en: { word: "VDRL", meaning: "A blood test used to screen for syphilis." }, 
        ar: { word: "VDRL", meaning: "اختبار دم يستخدم للكشف عن مرض الزهري." } 
    },
    { 
        id: 939, 
        ku: { word: "HBsAg (Hepatitis B Surface Antigen)", meaning: "پشکنینێکە بۆ زانینی بوونی ڤایرۆسی هەوکردنی جگەری جۆری بی لە خوێندا." }, 
        en: { word: "HBsAg", meaning: "Hepatitis B Surface Antigen. A test to detect the presence of Hepatitis B virus." }, 
        ar: { word: "HBsAg", meaning: "مستضد السطح لالتهاب الكبد ب. اختبار للكشف عن وجود فيروس التهاب الكبد B." } 
    },
    { 
        id: 940, 
        ku: { word: "HCV (Hepatitis C Virus)", meaning: "ڤایرۆسی هەوکردنی جگەری جۆری سی. جۆرێکی تری هەوکردنی جگەرە کە لە ڕێگەی خوێنەوە دەگوازرێتەوە." }, 
        en: { word: "HCV", meaning: "Hepatitis C Virus. An infection caused by a virus that attacks the liver." }, 
        ar: { word: "HCV (فيروس التهاب الكبد سي)", meaning: "عدوى يسببها فيروس يهاجم الكبد." } 
    },
    { 
        id: 941, 
        ku: { word: "EEG (Electroencephalogram)", meaning: "هێڵکاری مێشک. پشکنینێکە بۆ پێوانەکردنی چالاکی کارەبایی مێشک بەکاردێت." }, 
        en: { word: "EEG", meaning: "Electroencephalogram. A test that detects electrical activity in your brain." }, 
        ar: { word: "EEG (تخطيط أمواج الدماغ)", meaning: "اختبار يكشف النشاط الكهربائي في دماغك." } 
    },
    { 
        id: 942, 
        ku: { word: "EMG (Electromyography)", meaning: "هێڵکاری ماسولکە و دەمار. پشکنینێکە بۆ زانینی تەندروستی ماسولکەکان و ئەو دەمارانەی کۆنترۆڵیان دەکەن." }, 
        en: { word: "EMG", meaning: "Electromyography. A diagnostic procedure to assess the health of muscles and the nerve cells that control them." }, 
        ar: { word: "EMG (تخطيط كهربية العضل)", meaning: "إجراء تشخيصي لتقييم صحة العضلات والخلايا العصبية التي تتحكم فيها." } 
    },
    { 
        id: 943, 
        ku: { word: "PFT (Pulmonary Function Test)", meaning: "پشکنینی فەرمانی سییەکان. بۆ زانینی ئەوەی چەندە بەباشی هەناسە دەدەیت و سییەکانت چۆن کاردەکەن." }, 
        en: { word: "PFT", meaning: "Pulmonary Function Test. Noninvasive tests that show how well the lungs are working." }, 
        ar: { word: "PFT (اختبار وظائف الرئة)", meaning: "اختبارات غير جراحية تظهر مدى كفاءة عمل الرئتين." } 
    },
    { 
        id: 944, 
        ku: { word: "BPH (Benign Prostatic Hyperplasia)", meaning: "گەورەبوونی سەلامەتی پرۆستات. گەورەبوونی ڕژێنی پرۆستات لە پیاوانی بەتەمەندا کە نابێتە شێرپەنجە." }, 
        en: { word: "BPH", meaning: "Benign Prostatic Hyperplasia. Prostate gland enlargement that can cause urination difficulty." }, 
        ar: { word: "BPH (تضخم البروستاتا الحميد)", meaning: "تضخم غدة البروستاتا الذي يمكن أن يسبب صعوبة في التبول." } 
    },
    { 
        id: 945, 
        ku: { word: "TURP (Transurethral Resection of the Prostate)", meaning: "نەشتەرگەری لابردنی پرۆستات لە ڕێگەی بۆری میزەوە." }, 
        en: { word: "TURP", meaning: "Transurethral Resection of the Prostate. A surgery used to treat urinary problems due to an enlarged prostate." }, 
        ar: { word: "TURP (استئصال البروستاتا عبر الإحليل)", meaning: "جراحة تستخدم لعلاج مشاكل التبول الناتجة عن تضخم البروستاتا." } 
    },
    { 
        id: 946, 
        ku: { word: "CABG (Coronary Artery Bypass Grafting)", meaning: "نەشتەرگەری چاندنی خوێنبەری دڵ بۆ تێپەڕاندنی ئەو بۆرییانەی کە گیراون." }, 
        en: { word: "CABG", meaning: "Coronary Artery Bypass Grafting. A type of surgery that improves blood flow to the heart." }, 
        ar: { word: "CABG (تطعيم مجازة الشريان التاجي)", meaning: "نوع من الجراحة يحسن تدفق الدم إلى القلب." } 
    },
    { 
        id: 947, 
        ku: { word: "PTCA (Percutaneous Transluminal Coronary Angioplasty)", meaning: "بەلۆن و شەبەکەی دڵ. کردنەوەی بۆرییەکی گیراوی دڵ لە ڕێگەی بەلۆنەوە." }, 
        en: { word: "PTCA", meaning: "A minimally invasive procedure to open up blocked coronary arteries." }, 
        ar: { word: "PTCA (رأب الوعاء التاجي)", meaning: "إجراء طفيف التوغل لفتح الشرايين التاجية المسدودة." } 
    },
    { 
        id: 948, 
        ku: { word: "D&C (Dilation and Curettage)", meaning: "پاککردنەوەی منداڵدان. پرۆسەیەکە بۆ کردنەوەی ملی منداڵدان و پاککردنەوەی ناوەوەی منداڵدان دوای لەبارچوون یان بۆ دەستنیشانکردن." }, 
        en: { word: "D&C", meaning: "Dilation and Curettage. A procedure to remove tissue from inside your uterus." }, 
        ar: { word: "D&C (توسيع وكحت)", meaning: "إجراء لإزالة الأنسجة من داخل الرحم." } 
    },
    { 
        id: 949, 
        ku: { word: "LSCS / C-Section", meaning: "نەشتەرگەری منداڵبوون (قەیسەری). کردنەوەی سکی دایک بۆ دەرهێنانی منداڵ." }, 
        en: { word: "LSCS", meaning: "Lower Segment Caesarean Section. Delivery of a baby through surgical incisions in the abdomen and uterus." }, 
        ar: { word: "LSCS (العملية القيصرية)", meaning: "ولادة طفل من خلال شقوق جراحية في البطن والرحم." } 
    },
    { 
        id: 950, 
        ku: { word: "NVD (Normal Vaginal Delivery)", meaning: "منداڵبوونی سروشتی. لەدایکبوونی منداڵ لە ڕێگەی زێی ئافرەتەوە بەبێ نەشتەرگەری." }, 
        en: { word: "NVD", meaning: "Normal Vaginal Delivery. The birth of babies through the vagina." }, 
        ar: { word: "NVD (ولادة طبيعية المهبل)", meaning: "ولادة طبيعية للأطفال عبر المهبل بدون تدخل جراحي." } 
    },
    { 
        id: 951, 
        ku: { word: "LMP (Last Menstrual Period)", meaning: "یەکەم ڕۆژی کۆتا سووڕی مانگانە. بەکاردێت بۆ دیاریکردنی تەمەنی دووگیانی." }, 
        en: { word: "LMP", meaning: "Last Menstrual Period. Used to calculate the estimated date of delivery in pregnancy." }, 
        ar: { word: "LMP (تاريخ آخر دورة شهرية)", meaning: "يستخدم لحساب موعد الولادة المتوقع." } 
    },
    { 
        id: 952, 
        ku: { word: "EDD (Estimated Date of Delivery)", meaning: "بەرواری چاوەڕوانکراوی منداڵبوون. ئەو ڕۆژەی کە پێشبینی دەکرێت منداڵەکەی تێدا لەدایک ببێت." }, 
        en: { word: "EDD", meaning: "Estimated Date of Delivery. The date that spontaneous onset of labor is expected to occur." }, 
        ar: { word: "EDD (موعد الولادة المتوقع)", meaning: "التاريخ المتوقع لحدوث الولادة." } 
    },
    { 
        id: 953, 
        ku: { word: "NICU (Neonatal Intensive Care Unit)", meaning: "یەکەی چاودێری چڕی تازەلەدایکبووان. بەشێکە تایبەت بەو منداڵانەی کە زوو لەدایک دەبن یان کێشەی تەندروستییان هەیە." }, 
        en: { word: "NICU", meaning: "Neonatal Intensive Care Unit. An intensive care unit specializing in the care of ill or premature newborn infants." }, 
        ar: { word: "NICU (وحدة العناية المركزة لحديثي الولادة)", meaning: "وحدة عناية مركزة متخصصة في رعاية الأطفال حديثي الولادة المرضى أو الخدج." } 
    },
    { 
        id: 954, 
        ku: { word: "PICU (Pediatric Intensive Care Unit)", meaning: "یەکەی چاودێری چڕی منداڵان. تایبەتە بە منداڵانی نەخۆش کە پێویستیان بە چاودێری ورد هەیە." }, 
        en: { word: "PICU", meaning: "Pediatric Intensive Care Unit. The section of the hospital that provides sick children with the highest level of medical care." }, 
        ar: { word: "PICU (وحدة العناية المركزة للأطفال)", meaning: "قسم المستشفى الذي يوفر للأطفال المرضى أعلى مستوى من الرعاية الطبية." } 
    },
    { 
        id: 955, 
        ku: { word: "CCU (Coronary Care Unit)", meaning: "یەکەی چاودێری دڵ. بەشێکی تایبەتە لە نەخۆشخانە بۆ ئەوانەی جەڵتەی دڵ یان نەخۆشی مەترسیداری دڵیان هەیە." }, 
        en: { word: "CCU", meaning: "Coronary Care Unit. A hospital ward specialized in the care of patients with heart attacks, unstable angina, etc." }, 
        ar: { word: "CCU (وحدة العناية القلبية)", meaning: "جناح مستشفى متخصص في رعاية مرضى النوبات القلبية وغيرها." } 
    },
    { 
        id: 956, 
        ku: { word: "HDU (High Dependency Unit)", meaning: "یەکەی چاودێری مامناوەند. بۆ ئەو نەخۆشانەیە کە پێویستیان بە چاودێری زیاترە لە بەشی ئاسایی بەڵام کەمتر لە ICU." }, 
        en: { word: "HDU", meaning: "High Dependency Unit. An area in a hospital where patients can be cared for more extensively than on a normal ward, but not to the point of intensive care." }, 
        ar: { word: "HDU (وحدة الاعتماد العالي)", meaning: "منطقة في المستشفى توفر رعاية مكثفة للمرضى ولكن أقل من العناية المركزة." } 
    },
    { 
        id: 957, 
        ku: { word: "PACU (Post-Anesthesia Care Unit)", meaning: "یەکەی چاودێری دوای سڕکردن. ئەو ژوورەیە کە نەخۆش دوای نەشتەرگەری تێیدا دەمێنێتەوە تا بەئاگادێتەوە." }, 
        en: { word: "PACU", meaning: "Post-Anesthesia Care Unit. A recovery room where patients are taken after surgery to safely wake up from anesthesia." }, 
        ar: { word: "PACU (وحدة العناية ما بعد التخدير)", meaning: "غرفة إنعاش يُنقل إليها المرضى بعد الجراحة للاستيقاظ بأمان." } 
    },
    { 
        id: 958, 
        ku: { word: "O2 (Oxygen)", meaning: "ئۆکسجین. ئەو گازەیە کە بۆ هەناسەدان پێویستە و وەک چارەسەر دەدرێتە نەخۆش لە کاتی تەنگەنەفەسیدا." }, 
        en: { word: "O2", meaning: "Oxygen. A chemical element and a gas essential for human breathing, often used as a medical treatment." }, 
        ar: { word: "O2 (الأكسجين)", meaning: "غاز ضروري لتنفس الإنسان، وغالباً ما يستخدم كعلاج طبي." } 
    },
    { 
        id: 959, 
        ku: { word: "SpO2 (Oxygen Saturation)", meaning: "ڕێژەی تێربوونی خوێن بە ئۆکسجین کە لە ڕێگەی ئامێری پەنجەوە دەپێورێت." }, 
        en: { word: "SpO2", meaning: "Peripheral capillary oxygen saturation. An estimate of the amount of oxygen in the blood." }, 
        ar: { word: "SpO2 (تشبع الأكسجين)", meaning: "تقدير لكمية الأكسجين في الدم تقاس عادة بجهاز في الإصبع." } 
    },
    { 
        id: 960, 
        ku: { word: "GYN (Gynecology)", meaning: "بەشی نەخۆشییەکانی ئافرەتان. ئەو بەشەیە کە تایبەتە بە کۆئەندامی زاوزێی مێینە." }, 
        en: { word: "GYN", meaning: "Gynecology. The medical practice dealing with the health of the female reproductive system." }, 
        ar: { word: "GYN (أمراض النساء)", meaning: "الممارسة الطبية التي تتعامل مع صحة الجهاز التناسلي للأنثى." } 
    },
    { 
        id: 961, 
        ku: { word: "OBS (Obstetrics)", meaning: "بەشی منداڵبوون. تایبەتە بە دووگیانی، منداڵبوون و ماوەی دوای منداڵبوون." }, 
        en: { word: "OBS", meaning: "Obstetrics. The field of study concentrated on pregnancy, childbirth and the postpartum period." }, 
        ar: { word: "OBS (طب التوليد)", meaning: "مجال الدراسة الذي يركز على الحمل والولادة وفترة ما بعد الولادة." } 
    },
    { 
        id: 962, 
        ku: { word: "PED (Pediatrics)", meaning: "بەشی نەخۆشییەکانی منداڵان. تایبەتە بە چارەسەری کۆرپە و منداڵ و مێردامنداڵ." }, 
        en: { word: "PED", meaning: "Pediatrics. The branch of medicine that involves the medical care of infants, children, and adolescents." }, 
        ar: { word: "PED (طب الأطفال)", meaning: "فرع الطب الذي ينطوي على الرعاية الطبية للرضع والأطفال والمراهقين." } 
    },
    { 
        id: 963, 
        ku: { word: "ORTHO (Orthopedics)", meaning: "بەشی ئێسک و شکان. تایبەتە بە چارەسەری نەخۆشییەکانی ئێسک، جومگە، و ماسولکە." }, 
        en: { word: "ORTHO", meaning: "Orthopedics. The branch of surgery concerned with conditions involving the musculoskeletal system." }, 
        ar: { word: "ORTHO (جراحة العظام)", meaning: "فرع الجراحة المعني بالحالات التي تشمل الجهاز العضلي الهيكلي." } 
    },
    { 
        id: 964, 
        ku: { word: "NEURO (Neurology)", meaning: "بەشی دەمار. تایبەتە بە دەستنیشانکردن و چارەسەری نەخۆشییەکانی مێشک و دەمار." }, 
        en: { word: "NEURO", meaning: "Neurology. The branch of medicine dealing with disorders of the nervous system." }, 
        ar: { word: "NEURO (طب الأعصاب)", meaning: "فرع الطب الذي يتعامل مع اضطرابات الجهاز العصبي." } 
    },
    { 
        id: 965, 
        ku: { word: "PSYCH (Psychiatry)", meaning: "بەشی نەخۆشییە دەروونییەکان. بۆ چارەسەری نەخۆشییەکانی وەک خەمۆکی و دڵەڕاوکێ." }, 
        en: { word: "PSYCH", meaning: "Psychiatry. The medical specialty devoted to the diagnosis, prevention, and treatment of mental disorders." }, 
        ar: { word: "PSYCH (الطب النفسي)", meaning: "التخصص الطبي المكرس لتشخيص والوقاية وعلاج الاضطرابات النفسية." } 
    },
    { 
        id: 966, 
        ku: { word: "DERM (Dermatology)", meaning: "بەشی نەخۆشییەکانی پێست. بۆ چارەسەری کێشەکانی پێست، قژ و نینۆک." }, 
        en: { word: "DERM", meaning: "Dermatology. The branch of medicine dealing with the skin, nails, hair and its diseases." }, 
        ar: { word: "DERM (طب الجلد)", meaning: "فرع الطب الذي يتعامل مع الجلد والأظافر والشعر وأمراضه." } 
    },
    { 
        id: 967, 
        ku: { word: "OPHTH (Ophthalmology)", meaning: "بەشی چاو. تایبەتە بە دەستنیشانکردن و نەشتەرگەری نەخۆشییەکانی چاو." }, 
        en: { word: "OPHTH", meaning: "Ophthalmology. A branch of medicine and surgery that deals with the anatomy, physiology and diseases of the eyeball." }, 
        ar: { word: "OPHTH (طب العيون)", meaning: "فرع من فروع الطب والجراحة يتعامل مع تشريح ووظائف وأمراض مقلة العين." } 
    },
    { 
        id: 968, 
        ku: { word: "ONC (Oncology)", meaning: "بەشی شێرپەنجە (گرێ). تایبەتە بە دەستنیشانکردن و چارەسەرکردنی شێرپەنجە." }, 
        en: { word: "ONC", meaning: "Oncology. The branch of medicine that researches, identifies, and treats cancer." }, 
        ar: { word: "ONC (طب الأورام)", meaning: "فرع الطب الذي يبحث ويحدد ويعالج السرطان." } 
    },
    { 
        id: 969, 
        ku: { word: "RHEUM (Rheumatology)", meaning: "بەشی ڕۆماتیزم. بۆ چارەسەری هەوکردنی جومگەکان و نەخۆشییەکانی بەرگری جەستە." }, 
        en: { word: "RHEUM", meaning: "Rheumatology. A branch of medicine devoted to the diagnosis and therapy of rheumatic diseases." }, 
        ar: { word: "RHEUM (أمراض الروماتيزم)", meaning: "فرع من الطب مكرس لتشخيص وعلاج الأمراض الروماتيزمية." } 
    },
    { 
        id: 970, 
        ku: { word: "IUD (Intrauterine Device)", meaning: "ئامێری ناو منداڵدان (لۆلەب). ئامێرێکی بچووکە دەکرێتە ناو منداڵدانەوە بۆ ڕێگریکردن لە دووگیانی." }, 
        en: { word: "IUD", meaning: "Intrauterine Device. A small, often T-shaped birth control device that is inserted into a woman's uterus to prevent pregnancy." }, 
        ar: { word: "IUD (اللولب الرحمي)", meaning: "جهاز صغير للتحكم في النسل يتم إدخاله في رحم المرأة لمنع الحمل." } 
    }
];
