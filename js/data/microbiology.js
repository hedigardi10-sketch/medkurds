const microbiologyData = [
    {
        id: "bac_01",
        icon: "🦠",
        ku: {
            name: "ستافیلۆکۆکەس ئۆریەس (Staphylococcus aureus)",
            type: "گرام پۆزەتیڤ (+)",
            desc: "بەکتریاکەی شێوە گۆییە کە بەشێوەی هێشوو کۆدەبنەوە. زۆرجار بە شێوەی ئاسایی لەسەر پێست و ناو لووت دەژی.",
            diseases: "هەوکردنی پێست (دومەڵ، زیپکە)، ژەهراویبوونی خۆراک، هەوکردنی ئێسک، و ژەهراویبوونی خوێن (Sepsis).",
            antibiotics: "فلۆکلۆکساسیلین (Flucloxacillin). ئەگەر جۆری خۆڕاگر بوو (MRSA) ئەوا ڤانکۆمایسین (Vancomycin) یان لینێزۆلید (Linezolid) بەکاردێت."
        },
        en: {
            name: "Staphylococcus aureus",
            type: "Gram-positive (+)",
            desc: "A spherical bacterium that clusters together. It commonly lives on the skin and in the nose.",
            diseases: "Skin infections (boils, impetigo), food poisoning, bone infections, and sepsis.",
            antibiotics: "Flucloxacillin. For resistant strains (MRSA), Vancomycin or Linezolid is used."
        },
        ar: {
            name: "المكورات العنقودية الذهبية (Staph. aureus)",
            type: "إيجابية الغرام (+)",
            desc: "بكتيريا كروية الشكل تتجمع في عناقيد. تعيش عادة على الجلد وفي الأنف.",
            diseases: "التهابات الجلد (الدمامل، حب الشباب)، التسمم الغذائي، التهاب العظام، وتسمم الدم.",
            antibiotics: "فلوكلوكساسيلين (Flucloxacillin). للسلالات المقاومة (MRSA) يستخدم فانكوميسين (Vancomycin) أو لينيزوليد (Linezolid)."
        }
    },
    {
        id: "bac_02",
        icon: "🧫",
        ku: {
            name: "ستریپتۆکۆکەس نیومۆنی (Streptococcus pneumoniae)",
            type: "گرام پۆزەتیڤ (+)",
            desc: "بەکتریایەکی شێوە گۆییە کە بە شێوەی جووت (دیپلۆکۆکەس) یان زنجیر دەردەکەون.",
            diseases: "هەوکردنی سییەکان (Pneumonia)، هەوکردنی پەردەی مێشک (Meningitis)، هەوکردنی گوێی ناوەڕاست.",
            antibiotics: "پەنسلینەکان (وەک ئەمۆکسیلین). ئەگەر هەستیاری هەبوو یان بەکتریاکە خۆڕاگر بوو، ئەوا ئەزیسرۆمایسین (Azithromycin) یان سیفتریاکسۆن (Ceftriaxone)."
        },
        en: {
            name: "Streptococcus pneumoniae",
            type: "Gram-positive (+)",
            desc: "A spherical bacterium that appears in pairs (diplococci) or chains.",
            diseases: "Pneumonia, Meningitis, Otitis Media (middle ear infection).",
            antibiotics: "Penicillins (like Amoxicillin). For allergies or resistance, Azithromycin or Ceftriaxone is used."
        },
        ar: {
            name: "المكورات العقدية الرئوية (Strep. pneumoniae)",
            type: "إيجابية الغرام (+)",
            desc: "بكتيريا كروية الشكل تظهر في أزواج أو سلاسل.",
            diseases: "التهاب الرئة، التهاب السحايا، والتهاب الأذن الوسطى.",
            antibiotics: "البنسلينات (مثل أموكسيسيلين). عند الحساسية أو المقاومة، يستخدم أزيثروميسين (Azithromycin) أو سيفترياكسون (Ceftriaxone)."
        }
    },
    {
        id: "bac_03",
        icon: "🔬",
        ku: {
            name: "ئیشریکیای کۆلای (Escherichia coli - E.coli)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی شێوە چیلکەییە، بەشێوەیەکی ئاسایی لە ڕیخۆڵەی مرۆڤدا دەژی و یارمەتی هەرسکردن دەدات، بەڵام هەندێک جۆری دەبنە هۆی نەخۆشی.",
            diseases: "هەوکردنی میزەڵدان (UTI)، سکچوونی گەشتیاران، و ژەهراویبوونی خۆراک.",
            antibiotics: "سیپڕۆفلۆکساسین (Ciprofloxacin)، سێفتریاکسۆن (Ceftriaxone)، یان نایترۆفیورانتۆین (Nitrofurantoin) بۆ میزەڵدان."
        },
        en: {
            name: "Escherichia coli (E. coli)",
            type: "Gram-negative (-)",
            desc: "A rod-shaped bacterium normally found in the human intestine helping with digestion, but certain strains cause illness.",
            diseases: "Urinary Tract Infections (UTIs), traveler's diarrhea, and food poisoning.",
            antibiotics: "Ciprofloxacin, Ceftriaxone, or Nitrofurantoin for UTIs."
        },
        ar: {
            name: "الإشريكية القولونية (E. coli)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا عصوية الشكل تعيش عادة في أمعاء الإنسان وتساعد في الهضم، لكن بعض السلالات تسبب الأمراض.",
            diseases: "التهابات المسالك البولية (UTI)، إسهال المسافرين، والتسمم الغذائي.",
            antibiotics: "سيبروفلوكساسين (Ciprofloxacin)، سيفترياكسون (Ceftriaxone)، أو نيتروفورانتوين (Nitrofurantoin) للمسالك البولية."
        }
    },
    {
        id: "bac_04",
        icon: "🧪",
        ku: {
            name: "سودۆمۆناس ئەیروجینۆسا (Pseudomonas aeruginosa)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی زۆر خۆڕاگرە لە ناو ژینگە و نەخۆشخانەکاندا دەژی. زۆرجار تووشی ئەو کەسانە دەبێت کە بەرگری لەشیان لاوازە.",
            diseases: "هەوکردنی سییەکان (بە تایبەت لە نەخۆشانی سەر ڤێنتلێتەر)، هەوکردنی سووتانی پێست، و هەوکردنی گوێ.",
            antibiotics: "پیپەراسیلین-تازۆباکتام (Tazocin)، مێرۆپینەم (Meropenem)، یان سیپتازيدیم (Ceftazidime)."
        },
        en: {
            name: "Pseudomonas aeruginosa",
            type: "Gram-negative (-)",
            desc: "A highly resistant bacterium found in the environment and hospitals. It often infects immunocompromised individuals.",
            diseases: "Pneumonia (especially ventilator-associated), burn wound infections, and ear infections.",
            antibiotics: "Piperacillin-Tazobactam (Tazocin), Meropenem, or Ceftazidime."
        },
        ar: {
            name: "الزائفة الزنجارية (Pseudomonas aeruginosa)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا شديدة المقاومة توجد في البيئة والمستشفيات. غالباً ما تصيب الأشخاص الذين يعانون من ضعف المناعة.",
            diseases: "التهاب الرئة (خاصة المرتبط بأجهزة التنفس)، التهابات جروح الحروق، والتهابات الأذن.",
            antibiotics: "بيبيراسيلين-تازوباكتام (Tazocin)، ميروبينيم (Meropenem)، أو سيفتازيديم (Ceftazidime)."
        }
    },
    {
        id: "bac_05",
        icon: "🫁",
        ku: {
            name: "مایکۆباکتریەم تیوبرکلۆسس (Mycobacterium tuberculosis)",
            type: "ئەسید فاست (Acid-fast)",
            desc: "بەکتریایەکی تایبەتە کە دەبێتە هۆی نەخۆشی سیل. زۆر بە هێواشی گەشە دەکات و لە ڕێگەی هەواوە دەگوازرێتەوە.",
            diseases: "نەخۆشی سیل (TB) کە زۆرجار تووشی سییەکان دەبێت، بەڵام دەکرێت تووشی ئێسک و گورچیلەش ببێت.",
            antibiotics: "کۆرسی درێژخایەن (٦ مانگ بۆ زیاتر) لە دەرمانەکانی: ڕیفامپین (Rifampin)، ئایزۆنیاید (Isoniazid)، پایرازیناماید (Pyrazinamide)، وە ئیتامبیوتۆل (Ethambutol)."
        },
        en: {
            name: "Mycobacterium tuberculosis",
            type: "Acid-fast",
            desc: "A specialized bacterium that causes Tuberculosis (TB). It grows very slowly and spreads through the air.",
            diseases: "Tuberculosis (TB), which primarily affects the lungs but can also affect bones and kidneys.",
            antibiotics: "Long-term course (6+ months) of: Rifampin, Isoniazid, Pyrazinamide, and Ethambutol."
        },
        ar: {
            name: "المتفطرة السلية (M. tuberculosis)",
            type: "صامدة للحمض (Acid-fast)",
            desc: "بكتيريا متخصصة تسبب مرض السل. تنمو ببطء شديد وتنتقل عبر الهواء.",
            diseases: "مرض السل (TB) الذي يصيب الرئتين بشكل رئيسي، ولكن يمكن أن يصيب العظام والكلى.",
            antibiotics: "كورس طويل الأمد (6 أشهر أو أكثر) من: ريفامبين، إيزونيازيد، بيرازيناميد، وإيثامبوتول."
        }
    },
    {
        id: "bac_06",
        icon: "🤧",
        ku: {
            name: "کلیبسیێلا نیومۆنی (Klebsiella pneumoniae)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی چیلکەییە کە بەشێوەیەکی ئاسایی لە دەم و پێست و ڕیخۆڵەدا هەیە. کاتێک دەچێتە ناو سییەکان یان خوێنەوە نەخۆشی مەترسیدار دروست دەکات.",
            diseases: "هەوکردنی سییەکان (Pneumonia) لە کەسانی مەیخۆر و شەکرەدار، هەوکردنی میزەڵدان، ژەهراویبوونی خوێن.",
            antibiotics: "سێفالۆسپۆرینەکانی نەوەی سێیەم (وەک سێفتریاکسۆن)، یان کارباپینەم (وەک مێرۆپینەم) بۆ جۆرە خۆڕاگرەکان."
        },
        en: {
            name: "Klebsiella pneumoniae",
            type: "Gram-negative (-)",
            desc: "A rod-shaped bacterium normally found in the mouth, skin, and intestines. Causes serious infections if inhaled.",
            diseases: "Pneumonia (especially in alcoholics and diabetics), UTIs, and sepsis.",
            antibiotics: "Third-generation cephalosporins (e.g., Ceftriaxone) or Carbapenems (Meropenem) for resistant strains."
        },
        ar: {
            name: "كليبسيلا الرئوية (Klebsiella pneumoniae)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا عصوية توجد عادة في الفم والجلد والأمعاء. تسبب التهابات خطيرة إذا استنشقت.",
            diseases: "التهاب الرئة (خاصة لدى مرضى السكري)، التهابات المسالك البولية، وتسمم الدم.",
            antibiotics: "السيفالوسبورينات من الجيل الثالث (مثل سيفترياكسون) أو الكاربابينيمات (مثل ميروبينيم)."
        }
    },
    {
        id: "bac_07",
        icon: "🤒",
        ku: {
            name: "سالمۆنێلا تایفی (Salmonella typhi - گرانەتا)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریاکەیە کە دەبێتە هۆی تای گرانەتا. لە ڕێگەی ئاو و خۆراکی پیسبووەوە دەگوازرێتەوە.",
            diseases: "تای گرانەتا (Typhoid fever)، کە خۆی لە تا، سکئێشە و سەرئێشەدا دەبینێتەوە.",
            antibiotics: "سیپڕۆفلۆکساسین (Ciprofloxacin)، سێفتریاکسۆن (Ceftriaxone)، یان ئەزیسرۆمایسین (Azithromycin)."
        },
        en: {
            name: "Salmonella typhi",
            type: "Gram-negative (-)",
            desc: "The bacterium responsible for typhoid fever. Transmitted through contaminated food and water.",
            diseases: "Typhoid fever, characterized by high fever, abdominal pain, and headache.",
            antibiotics: "Ciprofloxacin, Ceftriaxone, or Azithromycin."
        },
        ar: {
            name: "السالمونيلا التيفية (Salmonella typhi)",
            type: "سلبية الغرام (-)",
            desc: "البكتيريا المسؤولة عن حمى التيفوئيد. تنتقل عن طريق الطعام والماء الملوثين.",
            diseases: "حمى التيفوئيد، وتتميز بارتفاع درجة الحرارة وآلام البطن والصداع.",
            antibiotics: "سيبروفلوكساسين، سيفترياكسون، أو أزيثروميسين."
        }
    },
    {
        id: "bac_08",
        icon: "🚽",
        ku: {
            name: "شیگێلا (Shigella dysenteriae)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریاکەیە کە دەبێتە هۆی نەخۆشی شیگێلۆسس و ژەهراویبوونی ڕیخۆڵە. زۆر بە ئاسانی دەگوازرێتەوە.",
            diseases: "زگچوونی خوێناوی (Dysentery)، سکئێشەی توند و تا.",
            antibiotics: "سیپڕۆفلۆکساسین (Ciprofloxacin)، یان سێفتریاکسۆن (Ceftriaxone). هەروەها قەرەبووکردنەوەی شلەی لەش زۆر گرنگە."
        },
        en: {
            name: "Shigella dysenteriae",
            type: "Gram-negative (-)",
            desc: "A highly contagious bacterium that causes shigellosis and intestinal infection.",
            diseases: "Dysentery (bloody diarrhea), severe abdominal cramps, and fever.",
            antibiotics: "Ciprofloxacin or Ceftriaxone. Fluid replacement is also critical."
        },
        ar: {
            name: "الشيغيلا الزحارية (Shigella dysenteriae)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا شديدة العدوى تسبب داء الشيغيلات وعدوى معوية.",
            diseases: "الزحار (إسهال دموي)، تقلصات شديدة في البطن، وحمى.",
            antibiotics: "سيبروفلوكساسين أو سيفترياكسون. تعويض السوائل ضروري جداً."
        }
    },
    {
        id: "bac_09",
        icon: "🧠",
        ku: {
            name: "نایسیریا مێنینجایتیدس (Neisseria meningitidis)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی شێوە دەنکە قاوەیە (دیپلۆکۆکەس) کە دەبێتە هۆی هەوکردنی پەردەی مێشک.",
            diseases: "هەوکردنی پەردەی مێشک (Meningococcal meningitis)، ژەهراویبوونی خوێنی مەترسیدار.",
            antibiotics: "سێفتریاکسۆن (Ceftriaxone) یان پەنسلین جی (Penicillin G) لەکاتی زوو پێزانین."
        },
        en: {
            name: "Neisseria meningitidis",
            type: "Gram-negative (-)",
            desc: "A coffee-bean shaped diplococcus bacterium that causes meningitis.",
            diseases: "Meningococcal meningitis and severe meningococcemia (blood infection).",
            antibiotics: "Ceftriaxone or Penicillin G for early intervention."
        },
        ar: {
            name: "النيسرية السحائية (Neisseria meningitidis)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا مكورة مزدوجة تشبه حبة البن تسبب التهاب السحايا.",
            diseases: "التهاب السحايا بالمكورات السحائية وتسمم الدم الخطير.",
            antibiotics: "سيفترياكسون أو بنسلين جي في الحالات المبكرة."
        }
    },
    {
        id: "bac_10",
        icon: "🚻",
        ku: {
            name: "نایسیریا گۆنۆریا (Neisseria gonorrhoeae)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریاکەیە کە لە ڕێگەی سێکسەوە دەگوازرێتەوە و دەبێتە هۆی نەخۆشی سوزەنەک.",
            diseases: "سوزەنەک (Gonorrhea)، هەوکردنی ئەندامی زاوزێ و هەندێک جار جومگەکان.",
            antibiotics: "سێفتریاکسۆن (Ceftriaxone) دەرزی بەیەکەوە لەگەڵ ئەزیسرۆمایسین (Azithromycin) بۆ دڵنیابوون لە چارەسەر."
        },
        en: {
            name: "Neisseria gonorrhoeae",
            type: "Gram-negative (-)",
            desc: "A sexually transmitted bacterium that causes the disease gonorrhea.",
            diseases: "Gonorrhea, genital tract infections, and sometimes septic arthritis.",
            antibiotics: "A single Ceftriaxone injection combined with oral Azithromycin."
        },
        ar: {
            name: "النيسرية البنية (Neisseria gonorrhoeae)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا تنتقل عن طريق الاتصال الجنسي وتسبب مرض السيلان.",
            diseases: "السيلان، التهابات الجهاز التناسلي، وأحياناً التهاب المفاصل.",
            antibiotics: "حقنة واحدة من سيفترياكسون مع أزيثروميسين لضمان الشفاء."
        }
    },
    {
        id: "bac_11",
        icon: "🤢",
        ku: {
            name: "بەکتریا گەدە (Helicobacter pylori)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی مارپێچییە کە لە ناوپۆشی گەدەدا دەژی و بەرگەی ترشەڵۆکی گەدە دەگرێت.",
            diseases: "برینی گەدە و دوانزەگرێ، هەوکردنی گەدە، و لە هەندێک حاڵەتدا شێرپەنجەی گەدە.",
            antibiotics: "چارەسەری سێقۆڵی: (Omeprazole) + (Clarithromycin) + (Amoxicillin یان Metronidazole) بۆ ماوەی ١٤ ڕۆژ."
        },
        en: {
            name: "Helicobacter pylori (H. pylori)",
            type: "Gram-negative (-)",
            desc: "A spiral-shaped bacterium that lives in the stomach lining and withstands acidic environments.",
            diseases: "Peptic ulcer disease, gastritis, and an increased risk of stomach cancer.",
            antibiotics: "Triple therapy: PPI (e.g., Omeprazole) + Clarithromycin + Amoxicillin (or Metronidazole) for 14 days."
        },
        ar: {
            name: "جرثومة المعدة (Helicobacter pylori)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا حلزونية تعيش في بطانة المعدة وتقاوم البيئة الحمضية.",
            diseases: "قرحة المعدة والإثني عشر، التهاب المعدة، وفي بعض الحالات سرطان المعدة.",
            antibiotics: "العلاج الثلاثي: أوميبرازول + كلاريثروميسين + أموكسيسيلين (أو ميترونيدازول) لمدة 14 يوماً."
        }
    },
    {
        id: "bac_12",
        icon: "💧",
        ku: {
            name: "ڤیبریۆ کۆلێرا (Vibrio cholerae)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی شێوە فاریزەییە کە لە ڕێگەی ئاوی پیسبووەوە دەگوازرێتەوە و دەبێتە هۆی کۆلێرا.",
            diseases: "کۆلێرا (Cholera)، سکچوونێکی زۆر توندی ئاوی و ووشکبوونەوەی خێرای لەش.",
            antibiotics: "پێدانی شلەمەنی (IV Fluids) زۆر گرنگترە لە دەرمان. بۆ خێراکردنی چاکبوونەوە دۆکسی سایکلین (Doxycycline) یان ئەزیسرۆمایسین (Azithromycin) بەکاردێت."
        },
        en: {
            name: "Vibrio cholerae",
            type: "Gram-negative (-)",
            desc: "A comma-shaped bacterium transmitted via contaminated water, causing cholera.",
            diseases: "Cholera, characterized by severe watery diarrhea and rapid dehydration.",
            antibiotics: "IV Fluid replacement is most critical. Doxycycline or Azithromycin can shorten the illness."
        },
        ar: {
            name: "ضمة الكوليرا (Vibrio cholerae)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا على شكل فاصلة تنتقل عبر المياه الملوثة وتسبب الكوليرا.",
            diseases: "الكوليرا، وتتميز بإسهال مائي شديد وجفاف سريع.",
            antibiotics: "تعويض السوائل (IV) هو الأهم. دوكسيسايكلين أو أزيثروميسين يمكن أن تسرع الشفاء."
        }
    },
    {
        id: "bac_13",
        icon: "💊",
        ku: {
            name: "کلۆستریدیۆم دیفیسیل (Clostridium difficile)",
            type: "گرام پۆزەتیڤ (+)",
            desc: "بەکتریایەکی دروستکەری سپۆرە، کە زۆرجار دوای بەکارهێنانی زۆری ئەنتیبایۆتیک گەشە دەکات و نەخۆشی دروست دەکات.",
            diseases: "هەوکردنی ڕیخۆڵە ئەستوورە، سکچوونی توند، هەندێک جار مەترسی لەسەر ژیان دروست دەکات.",
            antibiotics: "ڕاگرتنی ئەنتیبایۆتیکەکەی پێشوو. پاشان بەکارهێنانی مێترۆنیدازۆل (Metronidazole) یان ڤانکۆمایسینی دەم (Oral Vancomycin)."
        },
        en: {
            name: "Clostridium difficile (C. diff)",
            type: "Gram-positive (+)",
            desc: "A spore-forming bacterium that typically overgrows after prolonged antibiotic use.",
            diseases: "Pseudomembranous colitis, severe diarrhea, and toxic megacolon.",
            antibiotics: "Stop offending antibiotics. Treat with Metronidazole or Oral Vancomycin."
        },
        ar: {
            name: "المطثية العسيرة (Clostridium difficile)",
            type: "إيجابية الغرام (+)",
            desc: "بكتيريا مكونة للأبواغ تنمو غالباً بعد الاستخدام المطول للمضادات الحيوية.",
            diseases: "التهاب القولون الغشائي الكاذب، إسهال شديد.",
            antibiotics: "إيقاف المضاد الحيوي المسبب. يعالج بـ ميترونيدازول أو فانكوميسين عن طريق الفم."
        }
    },
    {
        id: "bac_14",
        icon: "🔧",
        ku: {
            name: "کلۆستریدیۆم تێتانی (Clostridium tetani)",
            type: "گرام پۆزەتیڤ (+)",
            desc: "لە خاکدا هەیە و لە ڕێگەی برین و بزماری ژەنگاوییەوە دەچێتە لەش، وە ژەهرێک دەردەدات دەبێتە هۆی گرژبوونی ماسولکەکان.",
            diseases: "نەخۆشی دەمارەگرژێ یان تيتانۆس (Tetanus).",
            antibiotics: "پاککردنەوەی برینەکە، پێدانی ئەنتی‌تۆکسین (Tetanus Immunoglobulin)، و میترۆنیدازۆل (Metronidazole) یان پەنسلین."
        },
        en: {
            name: "Clostridium tetani",
            type: "Gram-positive (+)",
            desc: "Found in soil and enters through deep wounds. It produces a neurotoxin causing muscle spasms.",
            diseases: "Tetanus (lockjaw).",
            antibiotics: "Wound debridement, Tetanus Immunoglobulin (TIG), and Metronidazole or Penicillin."
        },
        ar: {
            name: "المطثية الكزازية (Clostridium tetani)",
            type: "إيجابية الغرام (+)",
            desc: "توجد في التربة وتدخل عبر الجروح العميقة. تفرز سماً عصبياً يسبب تشنجات عضلية.",
            diseases: "مرض الكزاز (التيتانوس).",
            antibiotics: "تنظيف الجرح، إعطاء الغلوبولين المناعي (TIG)، وميترونيدازول أو بنسلين."
        }
    },
    {
        id: "bac_15",
        icon: "🧬",
        ku: {
            name: "تریپۆنیما پالیدەم (Treponema pallidum)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی مارپێچییە کە دەبێتە هۆی نەخۆشی سفلس (پەردەی سێکس).",
            diseases: "سفلس (Syphilis)، کە چەند قۆناغێکی هەیە و لە کۆتاییدا مێشک و دڵ تێکدەدات.",
            antibiotics: "دەرزی پەنسلین جی (Benzathine Penicillin G) باشترین چارەسەرە."
        },
        en: {
            name: "Treponema pallidum",
            type: "Gram-negative (-)",
            desc: "A spirochete bacterium that causes the sexually transmitted disease Syphilis.",
            diseases: "Syphilis, progressing in stages and eventually causing cardiovascular and neurological damage.",
            antibiotics: "Intramuscular Benzathine Penicillin G is the treatment of choice."
        },
        ar: {
            name: "اللولبية الشاحبة (Treponema pallidum)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا لولبية تسبب مرض الزهري المنتقل جنسياً.",
            diseases: "مرض الزهري (Syphilis)، الذي يمر بعدة مراحل وقد يتلف القلب والدماغ.",
            antibiotics: "حقن بنسلين جي بنزاثين هي العلاج المفضل."
        }
    },
    {
        id: "bac_16",
        icon: "👶",
        ku: {
            name: "هیمۆفیلەس ئینفلوێنزا (Haemophilus influenzae)",
            type: "گرام نێگەتیڤ (-)",
            desc: "سەرەڕای ناوەکەی، هۆکاری پەتای ئەنفلۆنزا نییە، بەڵکو بەکتریایەکە کە زۆرجار منداڵان تووش دەکات.",
            diseases: "هەوکردنی پەردەی مێشک لە منداڵان، هەوکردنی گوێ، و هەوکردنی قڕقڕەی مل (Epiglottitis).",
            antibiotics: "ئەمۆکسیلین (Amoxicillin) یان ئۆگمێنتین. بۆ حاڵەتە قورسەکان سێفتریاکسۆن (Ceftriaxone)."
        },
        en: {
            name: "Haemophilus influenzae",
            type: "Gram-negative (-)",
            desc: "Despite its name, it does not cause influenza (which is a virus), but is a bacterium that often infects children.",
            diseases: "Meningitis, Otitis Media, and Epiglottitis.",
            antibiotics: "Amoxicillin or Co-amoxiclav. For severe cases, Ceftriaxone."
        },
        ar: {
            name: "المستدمية النزلية (Haemophilus influenzae)",
            type: "سلبية الغرام (-)",
            desc: "رغم اسمها، فهي لا تسبب الإنفلونزا، بل بكتيريا تصيب الأطفال غالباً.",
            diseases: "التهاب السحايا، التهاب الأذن الوسطى، والتهاب لسان المزمار.",
            antibiotics: "أموكسيسيلين أو أوجمنتين. للحالات الشديدة سيفترياكسون."
        }
    },
    {
        id: "bac_17",
        icon: "🗣️",
        ku: {
            name: "ستریپتۆکۆکەس پایاگینیس (Streptococcus pyogenes - Group A)",
            type: "گرام پۆزەتیڤ (+)",
            desc: "بەکتریایەکە بەشێوەی زنجیر دەژی، هۆکاری سەرەکی هەوکردنی توندی قوڕگە.",
            diseases: "هەوکردنی باداری قوڕگ (Strep throat)، نەخۆشی تای ڕۆماتیزم (Rheumatic fever)، سورێژەی پیاسە.",
            antibiotics: "پەنسلین (Penicillin) یان ئەمۆکسیلین وەکو یەکەم هەڵبژاردن. بۆ کەسانی هەستیار ئەزیسرۆمایسین."
        },
        en: {
            name: "Streptococcus pyogenes (Group A Strep)",
            type: "Gram-positive (+)",
            desc: "A chain-forming bacterium responsible for the classic 'strep throat'.",
            diseases: "Strep throat, Scarlet fever, Rheumatic fever, and Impetigo.",
            antibiotics: "Penicillin or Amoxicillin is first-line. Azithromycin for allergic patients."
        },
        ar: {
            name: "المكورات العقدية المقيحة (Group A Strep)",
            type: "إيجابية الغرام (+)",
            desc: "بكتيريا تشكل سلاسل مسؤولة عن التهاب الحلق العقدي الكلاسيكي.",
            diseases: "التهاب الحلق العقدي، الحمى الروماتيزمية، والحمى القرمزية.",
            antibiotics: "بنسلين أو أموكسيسيلين كخيار أول. أزيثروميسين لمرضى الحساسية."
        }
    },
    {
        id: "bac_18",
        icon: "🚽",
        ku: {
            name: "ئێنتێرۆکۆکەس فیکالیس (Enterococcus faecalis)",
            type: "گرام پۆزەتیڤ (+)",
            desc: "بەکتریایەکی ئاسایی ڕیخۆڵەیە کە دەکرێت نەخۆشی مەترسیدار دروست بکات لە نەخۆشخانەکاندا.",
            diseases: "هەوکردنی مەترسیداری میزەڵدان، هەوکردنی ناوپۆشی دڵ (Endocarditis).",
            antibiotics: "ئەمپیسیلین (Ampicillin) + جێنتامایسین (Gentamicin). ئەگەر خۆڕاگر بوو، ڤانکۆمایسین (Vancomycin)."
        },
        en: {
            name: "Enterococcus faecalis",
            type: "Gram-positive (+)",
            desc: "A normal intestinal flora that can cause significant hospital-acquired infections.",
            diseases: "Urinary tract infections, bacteremia, and endocarditis.",
            antibiotics: "Ampicillin combined with Gentamicin. Vancomycin if resistant."
        },
        ar: {
            name: "المكورات المعوية البرازية (Enterococcus faecalis)",
            type: "إيجابية الغرام (+)",
            desc: "نبيت معوي طبيعي يمكن أن يسبب التهابات خطيرة مكتسبة في المستشفى.",
            diseases: "التهابات المسالك البولية، تجرثم الدم، والتهاب الشغاف.",
            antibiotics: "أمبيسيلين مع جنتاميسين. فانكوميسين إذا كانت مقاومة."
        }
    },
    {
        id: "bac_19",
        icon: "🍗",
        ku: {
            name: "کامپیلۆباکتەر جێجونی (Campylobacter jejuni)",
            type: "گرام نێگەتیڤ (-)",
            desc: "یەکێکە لە باوترین هۆکارەکانی ژەهراویبوونی خۆراک، زۆرجار لە گۆشتی مریشکی نەکوڵاودا هەیە.",
            diseases: "سکچوونی خوێناوی، سکئێشە، تا.",
            antibiotics: "زۆرجار تەنیا بە پێدانی شلەمەنی چاک دەبێتەوە، بەڵام بۆ حاڵەتی قورس ئەزیسرۆمایسین (Azithromycin) بەکاردێت."
        },
        en: {
            name: "Campylobacter jejuni",
            type: "Gram-negative (-)",
            desc: "One of the most common causes of food poisoning, often associated with undercooked poultry.",
            diseases: "Bloody diarrhea, abdominal cramps, and fever.",
            antibiotics: "Mostly self-limiting (fluids). For severe cases, Azithromycin."
        },
        ar: {
            name: "العطيفة الصائمة (Campylobacter jejuni)",
            type: "سلبية الغرام (-)",
            desc: "من أكثر أسباب التسمم الغذائي شيوعاً، ويرتبط غالباً بالدواجن غير المطهية جيداً.",
            diseases: "إسهال دموي، تقلصات في البطن، وحمى.",
            antibiotics: "يشفى غالباً ذاتياً (سوائل). في الحالات الشديدة أزيثروميسين."
        }
    },
    {
        id: "bac_20",
        icon: "🧀",
        ku: {
            name: "لیستیریا (Listeria monocytogenes)",
            type: "گرام پۆزەتیڤ (+)",
            desc: "لە پەنیر و شیرەمەنییەکان و گۆشتی لەقوتونراودا گەشە دەکات، تەنانەت لە پلەی گەرمی ساردکەرەوەشدا.",
            diseases: "مەترسی زۆرە بۆ ژنی دووگیان (لەبارچوونی منداڵ)، هەوکردنی پەردەی مێشک لە کەسانی بەتەمەن.",
            antibiotics: "ئەمپیسیلین (Ampicillin) لەگەڵ جێنتامایسین (Gentamicin)."
        },
        en: {
            name: "Listeria monocytogenes",
            type: "Gram-positive (+)",
            desc: "Grows in unpasteurized cheese and deli meats, even at refrigerator temperatures.",
            diseases: "High risk in pregnancy (miscarriage), and meningitis in the elderly.",
            antibiotics: "Ampicillin combined with Gentamicin."
        },
        ar: {
            name: "الليستيريا المستوحدة (Listeria monocytogenes)",
            type: "إيجابية الغرام (+)",
            desc: "تنمو في الأجبان غير المبسترة واللحوم الباردة، حتى في درجات حرارة الثلاجة.",
            diseases: "مخاطر عالية في الحمل (الإجهاض)، والتهاب السحايا لدى كبار السن.",
            antibiotics: "أمبيسيلين مع جنتاميسين."
        }
    },
    {
        id: "bac_21",
        icon: "😷",
        ku: {
            name: "مایکۆپلازما نیومۆنی (Mycoplasma pneumoniae)",
            type: "بێ دیواری خانەیی (No Cell Wall)",
            desc: "بەکتریایەکی نائاساییە کە دیواری خانەی نییە، بۆیە پەنسلین کاری تێناکات.",
            diseases: "هەوکردنی سییەکانی نائاسایی (Walking Pneumonia)، کۆکەی درێژخایەن.",
            antibiotics: "ئەزیسرۆمایسین (Azithromycin) یان دۆکسی سایکلین (Doxycycline)."
        },
        en: {
            name: "Mycoplasma pneumoniae",
            type: "No Cell Wall",
            desc: "An atypical bacterium lacking a cell wall, making it naturally resistant to penicillins.",
            diseases: "Atypical pneumonia (Walking Pneumonia) and chronic cough.",
            antibiotics: "Azithromycin (Macrolides) or Doxycycline."
        },
        ar: {
            name: "المفطورة الرئوية (Mycoplasma pneumoniae)",
            type: "بدون جدار خلوي",
            desc: "بكتيريا غير نمطية تفتقر لجدار خلوي، مما يجعلها مقاومة للبنسلين.",
            diseases: "الالتهاب الرئوي غير النمطي، السعال المزمن.",
            antibiotics: "أزيثروميسين أو دوكسيسايكلين."
        }
    },
    {
        id: "bac_22",
        icon: "👁️",
        ku: {
            name: "کلامیدیا تراکۆماتیس (Chlamydia trachomatis)",
            type: "گرام نێگەتیڤ (-)",
            desc: "بەکتریایەکی زۆر بچووکە کە تەنیا لەناو خانەی خانەخوێدا گەشە دەکات. باوترین نەخۆشییە کە لە ڕێگەی سێکسەوە دەگوازرێتەوە.",
            diseases: "کلامیدیا (هەوکردنی ئەندامی زاوزێ)، هەوکردنی چاو لە منداڵی تازە لەدایکبوو (Trachoma).",
            antibiotics: "ئەزیسرۆمایسین (Azithromycin) یەک ژەم، یان دۆکسی سایکلین (Doxycycline) بۆ ماوەی هەفتەیەک."
        },
        en: {
            name: "Chlamydia trachomatis",
            type: "Gram-negative (-)",
            desc: "An obligate intracellular bacterium. The most common bacterial STI.",
            diseases: "Chlamydia (genital infections), and Trachoma (eye infections in neonates).",
            antibiotics: "Single dose of Azithromycin, or Doxycycline for 7 days."
        },
        ar: {
            name: "المتدثرة الحثرية (Chlamydia trachomatis)",
            type: "سلبية الغرام (-)",
            desc: "بكتيريا داخل خلوية إجبارية. أكثر الأمراض البكتيرية المنقولة جنسياً شيوعاً.",
            diseases: "الكلاميديا (التهابات الأعضاء التناسلية)، والتراخوما (التهاب عيون حديثي الولادة).",
            antibiotics: "جرعة واحدة من أزيثروميسين، أو دوكسيسايكلين لمدة 7 أيام."
        }
    },
    {
        id: "bac_23",
        icon: "🍄",
        ku: {
            name: "کاندیدا ئەلبیکانس (Candida albicans)",
            type: "کەڕوو (Fungus)",
            desc: "جۆرێکە لە کەڕوو کە بەشێوەیەکی ئاسایی لە دەم و کۆئەندامی زاوزێی مێینەدا هەیە.",
            diseases: "بەفراوی دەم (Oral Thrush)، هەوکردنی کەڕوویی ئەندامی زاوزێ، یان هەوکردنی خوێن لە کەسانی بەرگری لاواز.",
            antibiotics: "دەرمانی دژە کەڕوو وەک: فلوکۆنازۆل (Fluconazole)، نیستاتین (Nystatin) بۆ دەم."
        },
        en: {
            name: "Candida albicans",
            type: "Fungus",
            desc: "A type of yeast that is part of the normal flora of the mouth and vagina.",
            diseases: "Oral thrush, vaginal yeast infections, and invasive candidiasis in immunocompromised patients.",
            antibiotics: "Antifungals like Fluconazole (systemic) or Nystatin (topical/oral)."
        },
        ar: {
            name: "المبيضات البيضاء (Candida albicans)",
            type: "فطر (Fungus)",
            desc: "نوع من الخميرة جزء من الفلورا الطبيعية للفم والمهبل.",
            diseases: "القلاع الفموي، الالتهابات الفطرية المهبلية.",
            antibiotics: "مضادات الفطريات مثل فلوكونازول أو نيستاتين."
        }
    },
    {
        id: "bac_24",
        icon: "🤧",
        ku: {
            name: "ڤایرۆسی ئەنفلۆنزا (Influenza Virus)",
            type: "ڤایرۆس (RNA Virus)",
            desc: "ڤایرۆسێکی بەربڵاوە کە تووشی کۆئەندامی هەناسە دەبێت و زۆرجار لە وەرزی زستاندا بڵاودەبێتەوە.",
            diseases: "پەتای ئەنفلۆنزا (بەتا، لەرز، ئازاری ماسولکە، کۆکە).",
            antibiotics: "ئەنتیبایۆتیک کاری تێناکات! بۆ کەسانی مەترسیدار دەرمانی دژە ڤایرۆس وەکو ئۆسێلتامڤیر (Oseltamivir - Tamiflu) بەکاردێت، هەروەها پشوودان."
        },
        en: {
            name: "Influenza Virus",
            type: "Virus (RNA)",
            desc: "A widespread virus affecting the respiratory system, primarily spreading during winter seasons.",
            diseases: "Influenza (fever, chills, muscle aches, cough).",
            antibiotics: "Antibiotics DO NOT work! Antivirals like Oseltamivir (Tamiflu) for high-risk patients, and supportive care."
        },
        ar: {
            name: "فيروس الإنفلونزا (Influenza Virus)",
            type: "فيروس (RNA)",
            desc: "فيروس واسع الانتشار يصيب الجهاز التنفسي وينتشر بشكل رئيسي في فصل الشتاء.",
            diseases: "الإنفلونزا (حمى، قشعريرة، آلام في العضلات، سعال).",
            antibiotics: "المضادات الحيوية لا تفيد! مضادات الفيروسات مثل أوسيلتاميفير (Tamiflu) للحالات الخطرة، مع الراحة."
        }
    },
    {
        id: "bac_25",
        icon: "🩸",
        ku: {
            name: "ڤایرۆسی جگەر جۆری بی (Hepatitis B Virus - HBV)",
            type: "ڤایرۆس (DNA Virus)",
            desc: "ڤایرۆسێکە تووشی جگەر دەبێت و لە ڕێگەی خوێن یان سێکسەوە دەگوازرێتەوە.",
            diseases: "هەوکردنی جگەر (Hepatitis B)، کە دەکرێت ببێتە درێژخایەن و ببێتە هۆی مۆمبوونی جگەر یان شێرپەنجە.",
            antibiotics: "دژە ڤایرۆسەکان وەکو تێنۆفۆڤیر (Tenofovir) یان ئینتێکافیر (Entecavir) بۆ حاڵەتی درێژخایەن. کوتان (Vaccine) باشترین ڕێکارە بۆ خۆپاراستن."
        },
        en: {
            name: "Hepatitis B Virus (HBV)",
            type: "Virus (DNA)",
            desc: "A virus that infects the liver, transmitted through infected blood or body fluids.",
            diseases: "Hepatitis B, which can become chronic and lead to cirrhosis or liver cancer.",
            antibiotics: "Antivirals like Tenofovir or Entecavir for chronic cases. Vaccination is the best prevention."
        },
        ar: {
            name: "فيروس التهاب الكبد ب (Hepatitis B)",
            type: "فيروس (DNA)",
            desc: "فيروس يصيب الكبد وينتقل عبر الدم أو سوائل الجسم الملوثة.",
            diseases: "التهاب الكبد ب، والذي يمكن أن يصبح مزمناً ويؤدي إلى تليف أو سرطان الكبد.",
            antibiotics: "مضادات الفيروسات مثل تينوفوفير أو إنتيكافير للحالات المزمنة. التطعيم هو أفضل وقاية."
        }
    }
];
