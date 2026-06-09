const allScenarios = {
    ku: {
        ui: {"simSuccess": "سەرکەوتوو بوویت!", "simDied": "نەخۆشەکە گیانی لەدەستدا.", "simNext": "سێناریۆی داهاتوو ➡️", "simRetry": "دووبارەکردنەوە 🔄", "simTimeOutTitle": "نەخۆشەکە گیانی لەدەست دا 💀", "simTimeOutDesc": "بەداخەوە کاتت زۆر بەفیڕۆدا یان بڕیارەکانت زۆر لاواز بوون. لە فریاکەوتندا چرکەکان ژیان ڕزگار دەکەن.", "simRetryState": "دووبارەکردنەوەی ئەم حاڵەتە 🔄", "simCongrats": "پیرۆزە! 🎉", "simEndDesc": "تۆ سەرکەوتووانە هەموو نەخۆشەکانت ڕزگار کرد. سەلماندت کە پزیشک/پەرستارێکی زۆر زیرەکیت لە کاتی فریاگوزاریدا!", "simClose": "داخستنی سیمولەیتەر"},
        scenarios: [
    {
        id: "trauma_01",
        title: "حاڵەتی کتوپڕ: ڕووداوی هاتوچۆ 🚗",
        description: "گەنجێک دوای ڕووداوی ماتۆڕسکیل هێنراوەتە فریاکەوتن. خوێنێکی زۆر لە قاچی ڕاستییەوە دەڕوات.",
        nodes: {
            "start": {
                text: "نەخۆشەکە دەناڵێنێت لە ئازاردا، خوێنبەربوونێکی توند لە ڕانی ڕاستییەوە هەیە. ڕەنگی پەڕیوە و خەریکە هۆشی لەدەست دەدات.",
                vitals: { hr: 135, bp: "80/50", spo2: 88 },
                choices: [
                    { text: "بەستنی قاچی (Tourniquet) بەپەلە لە سەرووی برینەکەوە", nextNodeId: "tourniquet_applied", impact: 10 },
                    { text: "دانانی کانیولا و پێدانی شلە دەستبەجێ بۆ پەستانی خوێنی", nextNodeId: "iv_fluid_first", impact: -20 },
                    { text: "ناردنی بۆ بەشی تیشک (X-Ray) بۆ بینینی شکانەکە", nextNodeId: "xray_death", impact: -50 }
                ]
            },
            "tourniquet_applied": {
                text: "زۆر باشە! خوێنبەربوونەکە ڕاگیرا. بەڵام نەخۆشەکە بەهۆی لەدەستدانی خوێنەوە زۆر بێهێزە و پەستانی خوێنی هێشتا نزمە.",
                vitals: { hr: 120, bp: "90/60", spo2: 92 },
                choices: [
                    { text: "پێدانی دوو کانیولای گەورە و شلەی ڕینگەر، و بانگکردنی پزیشکی نەشتەرگەر", nextNodeId: "fluid_resus", impact: 20 },
                    { text: "پێدانی ئازارشکێنی بەهێز (Morphine) چونکە زۆر ئازاری هەیە", nextNodeId: "painkiller_crash", impact: -30 }
                ]
            },
            "iv_fluid_first": {
                text: "تۆ شلەت پێدا، بەڵام قاچی هێشتا خوێنی لێ دەڕوات! شلەکان بەهۆی کونی دەمارەکەوە دەچنە دەرەوە و بارودۆخی خراپتر بوو.",
                vitals: { hr: 150, bp: "60/40", spo2: 82 },
                choices: [
                    { text: "بەستنی خوێنبەربوونەکە ئێستا بەپەلە", nextNodeId: "tourniquet_late", impact: 10 },
                    { text: "پێدانی ئۆکسجینی زیاتر و چاوەڕێکردن", nextNodeId: "bleed_out_death", impact: -40 }
                ]
            },
            "tourniquet_late": {
                text: "خوێنەکەت وەستاند، بەڵام نەخۆشەکە خوێنێکی زۆری لەدەست داوە و چووەتە حاڵەتی شۆکەوە (Hypovolemic Shock).",
                vitals: { hr: 140, bp: "70/40", spo2: 85 },
                choices: [
                    { text: "پێدانی خوێنی جۆری (O Negative) بەپەلە", nextNodeId: "fluid_resus", impact: 30 },
                    { text: "پێدانی دەرزی ئەدریناڵین بۆ بەرزکردنەوەی پەستانی خوێن", nextNodeId: "adrenaline_wrong", impact: -30 }
                ]
            },
            // Terminal Endings
            "fluid_resus": {
                text: "پەستانی خوێنی جێگیر بوو. نەخۆشەکە بە سەلامەتی گەیەنرایە هۆڵی نەشتەرگەری. تۆ ژیانی ئەم گەنجەت ڕزگار کرد!",
                vitals: { hr: 90, bp: "110/70", spo2: 98 },
                isTerminal: true,
                success: true
            },
            "xray_death": {
                text: "لە کاتی چاوەڕێکردن بۆ تیشک، نەخۆشەکە بەهۆی لەدەستدانی خوێنی زۆرەوە شۆکی خوێنبەربوونی بۆ دروستبوو و گیانی لەدەستدا.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "painkiller_crash": {
                text: "مۆرفینەکە پەستانی خوێنی بەتەواوی دابەزاند بۆ سفر! نەخۆشەکە وەستانی دڵی بۆ دروستبوو و گیانی لەدەستدا. (دەبێت سەرەتا شلە بدرێت پێش ئازارشکێن لە کاتی شۆکدا).",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "bleed_out_death": {
                text: "نەخۆشەکە هەموو خوێنی جەستەی لەدەستدا و کۆچی دوایی کرد. یەکەم هەنگاو لە ڕووداوەکان هەمیشە وەستاندنی خوێنە!",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "adrenaline_wrong": {
                text: "ئەدریناڵین دڵی نەخۆشەکەی ماندووتر کرد لە کاتێکدا کێشەکەی کەمی خوێن بوو نەک لاوازی دڵ. نەخۆشەکە گیانی لەدەستدا.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            }
        }
    },
    {
        id: "cardiac_01",
        title: "حاڵەتی کتوپڕ: وەستانی دڵ 💔",
        description: "پیاوێکی تەمەن ٥٥ ساڵ لەناکاو دەستی بە سنگییەوە گرت و کەوت بە زەویدا.",
        nodes: {
            "start": {
                text: "پیاوەکە لەسەر زەوییە، هیچ وەڵامدانەوەیەکی نییە، و ترپەی دڵی (Pulse) لە ملیدا هەست پێناکرێت.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                choices: [
                    { text: "دەستبەجێ دەستپێکردنی شێلانی دڵ (CPR)", nextNodeId: "cpr_started", impact: 20 },
                    { text: "بەدواداچوون بۆ دۆزینەوەی ئامێری زەربەی کارەبایی بەبێ CPR", nextNodeId: "delay_cpr", impact: -30 },
                    { text: "هەوڵدان بۆ بەئاگاهێنانەوەی بە ئاو پرژاندن بە دەموچاویدا", nextNodeId: "water_death", impact: -50 }
                ]
            },
            "cpr_started": {
                text: "تۆ بە خێرایی دەستت کرد بە CPR. پاش خولەکێک، کارمەندێکی تر ئامێری شۆکی (Defibrillator) هێنا. مۆنیتەرەکە لەرینەوەی دڵ (V-Fib) نیشان دەدات.",
                vitals: { hr: "V-Fib", bp: "0/0", spo2: "CPR" },
                choices: [
                    { text: "پێدانی زەربەیەکی کارەبایی (DC Shock) بەپەلە", nextNodeId: "shock_given", impact: 30 },
                    { text: "بەردەوامبوون لە CPR بەبێ شۆک چونکە مەترسیدارە", nextNodeId: "cpr_only_fail", impact: -20 },
                    { text: "لێدانی دەرزی ئەدریناڵین پێش شۆکەکە", nextNodeId: "adrenaline_early", impact: -10 }
                ]
            },
            "shock_given": {
                text: "شۆکەکەت لێدا. جەستەی نەخۆشەکە بەرز بووەوە. مۆنیتەرەکە هێشتا ڕیتمێکی خاو نیشان دەدات.",
                vitals: { hr: 45, bp: "60/40", spo2: 85 },
                choices: [
                    { text: "ڕاستەوخۆ بەردەوامبوون لە CPR بۆ ٢ خولەکی تر", nextNodeId: "cpr_resume", impact: 20 },
                    { text: "پشکنینی ترپەی دڵ (Pulse) و وەستان بۆ سەیرکردنی مۆنیتەر", nextNodeId: "stop_cpr_fail", impact: -20 }
                ]
            },
            "cpr_resume": {
                text: "دوای ٢ خولەکی تر لە CPR، نەخۆشەکە دەستی کرد بە جووڵە و کۆکە. ترپەی دڵی گەڕایەوە!",
                vitals: { hr: 85, bp: "110/70", spo2: 95 },
                isTerminal: true,
                success: true
            },
            // Terminal Nodes
            "delay_cpr": {
                text: "تا ئامێرەکەت دۆزیەوە، مێشکی نەخۆشەکە بەبێ ئۆکسجین مایەوە و بەتەواوی مرد. هەمیشە یەکەم شت CPR ە!",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "water_death": {
                text: "ئاو پرژاندن هیچ سوودێکی نییە بۆ وەستانی دڵ! نەخۆشەکە گیانی لەدەستدا.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "cpr_only_fail": {
                text: "حاڵەتی V-Fib تاکە چارەسەری کارەبایە. بەبێ کارەبا، دڵ نەیتوانی بگەڕێتەوە باری ئاسایی و نەخۆشەکە مرد.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "adrenaline_early": {
                text: "لە V-Fib سەرەتا شۆک دەدرێت، دواخستنی شۆکەکە بۆ لێدانی دەرزی بووە هۆی لەدەستدانی نەخۆشەکە.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "stop_cpr_fail": {
                text: "هەڵەیەکی باو! پاش شۆک لێدان دەبێت ڕاستەوخۆ CPR بکرێتەوە نەک بوەستیت بۆ پشکنین. دڵەکە هێزی نەبوو و دووبارە وەستا.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            }
        }
    },
    {
        id: "anaphylaxis_01",
        title: "حاڵەتی کتوپڕ: حەساسییەتی توند 🐝",
        description: "منداڵێک لە باخچە پێوەدانی مێشی هەنگوینی تووش بووە. دەموچاوی زۆر ئاوساوە.",
        nodes: {
            "start": {
                text: "منداڵەکە بە زەحمەت هەناسە دەدات، دەنگی فیکەفیک (Wheezing) لە سنگی دێت و پێستی سوور بووەتەوە. دایکی زۆر دەترسێت.",
                vitals: { hr: 145, bp: "70/40", spo2: 86 },
                choices: [
                    { text: "لێدانی دەرزی ئەدریناڵین (Epinephrine) دەستبەجێ لە ماسولکەی ڕان", nextNodeId: "epi_given", impact: 30 },
                    { text: "پێدانی حەپی حەساسییەت (Allermine) بە دەم", nextNodeId: "pill_fail", impact: -40 },
                    { text: "پێدانی ئۆکسجین و بەکارهێنانی تەبخیری ڤێنتۆلین", nextNodeId: "asthma_fail", impact: -20 }
                ]
            },
            "epi_given": {
                text: "دەرزییەکەت لێدا. دوای یەک خولەک هەناسەدانی کەمێک باشتر بوو، بەڵام پەستانی خوێنی هێشتا نزمە و پێستی خورووی هەیە.",
                vitals: { hr: 120, bp: "85/50", spo2: 92 },
                choices: [
                    { text: "دانانی کانیولا، پێدانی شلە دەمار و دەرزی هایدرۆکۆرتیکۆستیرۆید", nextNodeId: "steroid_given", impact: 20 },
                    { text: "لێدانی دەرزی ئەدریناڵینی دووەم ڕاستەوخۆ", nextNodeId: "epi_overdose", impact: -20 }
                ]
            },
            "steroid_given": {
                text: "زۆر باشە! شلەکان پەستانی خوێنیان ئاسایی کردەوە و ستیرۆیدەکە ڕێگری لە گەڕانەوەی حەساسییەتەکە کرد.",
                vitals: { hr: 90, bp: "110/70", spo2: 99 },
                isTerminal: true,
                success: true
            },
            // Terminal Nodes
            "pill_fail": {
                text: "نەخۆشەکە ناتوانێت قووت بدات چونکە قوڕگی ئاوساوە! حەپەکە کار ناکات و منداڵەکە خنکا.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "asthma_fail": {
                text: "ڤێنتۆلین بۆ حەساسییەتی توند بەس نییە چونکە پەستانی خوێن زۆر دادەبەزێت (Anaphylactic Shock). نەخۆشەکە گیانی لەدەستدا.",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            },
            "epi_overdose": {
                text: "دوو دۆزی ئەدریناڵین لەسەریەک بووە هۆی بەرزبوونەوەی زۆری لێدانی دڵ و جەڵتە. (دەبێت ٥ تا ١٥ خولەک چاوەڕێ بکەیت بۆ دۆزی دووەم).",
                vitals: { hr: 0, bp: "0/0", spo2: 0 },
                isTerminal: true,
                success: false
            }
        }
    }
]
    },
    en: {
        ui: {"simSuccess": "You succeeded!", "simDied": "The patient died.", "simNext": "Next Scenario ➡️", "simRetry": "Retry 🔄", "simTimeOutTitle": "The patient died 💀", "simTimeOutDesc": "Unfortunately, you wasted too much time or your decisions were too weak. In emergencies, seconds save lives.", "simRetryState": "Retry this scenario 🔄", "simCongrats": "Congratulations! 🎉", "simEndDesc": "You successfully saved all your patients. You proved to be a very smart doctor/nurse in emergencies!", "simClose": "Close Simulator"},
        scenarios: [
    {
        "id": "trauma_01",
        "title": "Emergency: Car Accident 🚗",
        "description": "A young man is brought to the ER after a motorcycle accident. He is bleeding heavily from his right leg.",
        "nodes": {
            "start": {
                "text": "The patient is groaning in pain, with severe bleeding from his right thigh. He is pale and losing consciousness.",
                "vitals": { "hr": 135, "bp": "80/50", "spo2": 88 },
                "choices": [
                    { "text": "Urgently apply a tourniquet above the wound", "nextNodeId": "tourniquet_applied", "impact": 10 },
                    { "text": "Place a cannula and give IV fluids immediately for BP", "nextNodeId": "iv_fluid_first", "impact": -20 },
                    { "text": "Send for an X-Ray to check for fractures", "nextNodeId": "xray_death", "impact": -50 }
                ]
            },
            "tourniquet_applied": {
                "text": "Great! Bleeding is stopped. But the patient is very weak from blood loss and BP is still low.",
                "vitals": { "hr": 120, "bp": "90/60", "spo2": 92 },
                "choices": [
                    { "text": "Place two large-bore IVs, give Ringer's, and call a surgeon", "nextNodeId": "fluid_resus", "impact": 20 },
                    { "text": "Give strong painkillers (Morphine) because he is in pain", "nextNodeId": "painkiller_crash", "impact": -30 }
                ]
            },
            "iv_fluid_first": {
                "text": "You gave fluids, but the leg is still bleeding! The fluids are leaking out and the condition worsened.",
                "vitals": { "hr": 150, "bp": "60/40", "spo2": 82 },
                "choices": [
                    { "text": "Apply a tourniquet urgently now", "nextNodeId": "tourniquet_late", "impact": 10 },
                    { "text": "Give more oxygen and wait", "nextNodeId": "bleed_out_death", "impact": -40 }
                ]
            },
            "tourniquet_late": {
                "text": "You stopped the bleeding, but the patient lost a lot of blood and went into Hypovolemic Shock.",
                "vitals": { "hr": 140, "bp": "70/40", "spo2": 85 },
                "choices": [
                    { "text": "Urgently give O Negative blood", "nextNodeId": "fluid_resus", "impact": 30 },
                    { "text": "Give an Adrenaline injection to raise BP", "nextNodeId": "adrenaline_wrong", "impact": -30 }
                ]
            },
            "fluid_resus": {
                "text": "BP is stabilized. The patient is safely sent to the OR. You saved his life!",
                "vitals": { "hr": 90, "bp": "110/70", "spo2": 98 },
                "isTerminal": true,
                "success": true
            },
            "xray_death": {
                "text": "While waiting for X-Ray, the patient went into hemorrhagic shock from severe blood loss and died.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "painkiller_crash": {
                "text": "Morphine completely crashed his BP to zero! The patient suffered cardiac arrest and died. (Fluids must be given before painkillers in shock).",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "bleed_out_death": {
                "text": "The patient lost all blood and passed away. The first step in trauma is always to stop bleeding!",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "adrenaline_wrong": {
                "text": "Adrenaline stressed the heart when the problem was lack of blood. The patient died.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            }
        }
    },
    {
        "id": "cardiac_01",
        "title": "Emergency: Cardiac Arrest 💔",
        "description": "A 55-year-old man suddenly clutched his chest and fell to the ground.",
        "nodes": {
            "start": {
                "text": "The man is on the ground, unresponsive, and no pulse is felt in his neck.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "choices": [
                    { "text": "Immediately start chest compressions (CPR)", "nextNodeId": "cpr_started", "impact": 20 },
                    { "text": "Go find a defibrillator without doing CPR", "nextNodeId": "delay_cpr", "impact": -30 },
                    { "text": "Try to wake him up by splashing water on his face", "nextNodeId": "water_death", "impact": -50 }
                ]
            },
            "cpr_started": {
                "text": "You quickly started CPR. After a minute, another staff brings a Defibrillator. The monitor shows V-Fib.",
                "vitals": { "hr": "V-Fib", "bp": "0/0", "spo2": "CPR" },
                "choices": [
                    { "text": "Urgently deliver a DC Shock", "nextNodeId": "shock_given", "impact": 30 },
                    { "text": "Continue CPR without shock because it's dangerous", "nextNodeId": "cpr_only_fail", "impact": -20 },
                    { "text": "Give an Adrenaline injection before shock", "nextNodeId": "adrenaline_early", "impact": -10 }
                ]
            },
            "shock_given": {
                "text": "Shock delivered. The patient's body jolted. The monitor still shows a slow rhythm.",
                "vitals": { "hr": 45, "bp": "60/40", "spo2": 85 },
                "choices": [
                    { "text": "Directly resume CPR for 2 minutes", "nextNodeId": "cpr_resume", "impact": 20 },
                    { "text": "Check for a pulse and stop to watch the monitor", "nextNodeId": "stop_cpr_fail", "impact": -20 }
                ]
            },
            "cpr_resume": {
                "text": "After 2 more minutes of CPR, the patient started moving and coughing. His pulse returned!",
                "vitals": { "hr": 85, "bp": "110/70", "spo2": 95 },
                "isTerminal": true,
                "success": true
            },
            "delay_cpr": {
                "text": "By the time you found the machine, his brain suffered hypoxia and he died. First step is always CPR!",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "water_death": {
                "text": "Splashing water does nothing for cardiac arrest! The patient died.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "cpr_only_fail": {
                "text": "V-Fib's only cure is electricity. Without it, the heart couldn't reset and the patient died.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "adrenaline_early": {
                "text": "In V-Fib, shock comes first. Delaying shock for an injection caused the patient's death.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "stop_cpr_fail": {
                "text": "Common mistake! After a shock, immediately resume CPR, do not wait. The heart lacked power and stopped again.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            }
        }
    },
    {
        "id": "anaphylaxis_01",
        "title": "Emergency: Severe Allergy 🐝",
        "description": "A child was stung by a bee in the garden. His face is very swollen.",
        "nodes": {
            "start": {
                "text": "The child is struggling to breathe, wheezing in the chest, and skin is red. The mother is terrified.",
                "vitals": { "hr": 145, "bp": "70/40", "spo2": 86 },
                "choices": [
                    { "text": "Urgently inject Epinephrine in the thigh muscle", "nextNodeId": "epi_given", "impact": 30 },
                    { "text": "Give an allergy pill (Allermine) by mouth", "nextNodeId": "pill_fail", "impact": -40 },
                    { "text": "Give oxygen and Ventolin nebulizer", "nextNodeId": "asthma_fail", "impact": -20 }
                ]
            },
            "epi_given": {
                "text": "You injected it. A minute later breathing improved slightly, but BP is still low and he has itchy skin.",
                "vitals": { "hr": 120, "bp": "85/50", "spo2": 92 },
                "choices": [
                    { "text": "Place a cannula, give IV fluids and hydrocortisone injection", "nextNodeId": "steroid_given", "impact": 20 },
                    { "text": "Directly give a second Epinephrine injection", "nextNodeId": "epi_overdose", "impact": -20 }
                ]
            },
            "steroid_given": {
                "text": "Excellent! Fluids normalized BP and steroids prevented a relapse.",
                "vitals": { "hr": 90, "bp": "110/70", "spo2": 99 },
                "isTerminal": true,
                "success": true
            },
            "pill_fail": {
                "text": "The patient can't swallow because his throat is swollen! The pill fails and the child chokes.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "asthma_fail": {
                "text": "Ventolin is not enough for severe allergy as BP drops (Anaphylactic Shock). The patient died.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "epi_overdose": {
                "text": "Two successive doses of Epinephrine caused severe tachycardia and a stroke. (Wait 5-15 min for a second dose).",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            }
        }
    }
]
    },
    ar: {
        ui: {"simSuccess": "نجحت!", "simDied": "توفي المريض.", "simNext": "السيناريو التالي ➡️", "simRetry": "إعادة المحاولة 🔄", "simTimeOutTitle": "توفي المريض 💀", "simTimeOutDesc": "للأسف أضعت الكثير من الوقت أو كانت قراراتك ضعيفة جداً. في الطوارئ الثواني تنقذ الأرواح.", "simRetryState": "أعد محاولة هذه الحالة 🔄", "simCongrats": "مبروك! 🎉", "simEndDesc": "نجحت في إنقاذ جميع مرضاك. أثبتت أنك طبيب/ممرض ذكي جداً في الطوارئ!", "simClose": "إغلاق المحاكي"},
        scenarios: [
    {
        "id": "trauma_01",
        "title": "حالة طارئة: حادث مرور 🚗",
        "description": "تم إحضار شاب إلى الطوارئ بعد حادث دراجة نارية. ينزف بشدة من ساقه اليمنى.",
        "nodes": {
            "start": {
                "text": "المريض يئن من الألم، مع نزيف حاد من فخذه الأيمن. وجهه شاحب ويفقد وعيه.",
                "vitals": { "hr": 135, "bp": "80/50", "spo2": 88 },
                "choices": [
                    { "text": "ربط الساق (عاصبة) بشكل عاجل فوق الجرح", "nextNodeId": "tourniquet_applied", "impact": 10 },
                    { "text": "تركيب كانيولا وإعطاء السوائل فوراً لرفع ضغط الدم", "nextNodeId": "iv_fluid_first", "impact": -20 },
                    { "text": "إرساله لإجراء أشعة سينية (X-Ray) للتحقق من الكسور", "nextNodeId": "xray_death", "impact": -50 }
                ]
            },
            "tourniquet_applied": {
                "text": "ممتاز! توقف النزيف. لكن المريض ضعيف جداً بسبب فقدان الدم وضغط دمه لا يزال منخفضاً.",
                "vitals": { "hr": 120, "bp": "90/60", "spo2": 92 },
                "choices": [
                    { "text": "إعطاء كانيولتين كبيرتين، وسوائل الرينجر، واستدعاء الجراح", "nextNodeId": "fluid_resus", "impact": 20 },
                    { "text": "إعطاء مسكنات قوية (مورفين) لأنه يتألم", "nextNodeId": "painkiller_crash", "impact": -30 }
                ]
            },
            "iv_fluid_first": {
                "text": "أعطيت السوائل، لكن الساق لا تزال تنزف! السوائل تتسرب من الجرح وحالته تزداد سوءاً.",
                "vitals": { "hr": 150, "bp": "60/40", "spo2": 82 },
                "choices": [
                    { "text": "ربط الساق لوقف النزيف الآن وبسرعة", "nextNodeId": "tourniquet_late", "impact": 10 },
                    { "text": "إعطاء المزيد من الأكسجين والانتظار", "nextNodeId": "bleed_out_death", "impact": -40 }
                ]
            },
            "tourniquet_late": {
                "text": "أوقفت النزيف، لكن المريض فقد الكثير من الدم ودخل في صدمة نقص الحجم (Hypovolemic Shock).",
                "vitals": { "hr": 140, "bp": "70/40", "spo2": 85 },
                "choices": [
                    { "text": "نقل دم (O سالب) بشكل عاجل", "nextNodeId": "fluid_resus", "impact": 30 },
                    { "text": "إعطاء حقنة أدرينالين لرفع ضغط الدم", "nextNodeId": "adrenaline_wrong", "impact": -30 }
                ]
            },
            "fluid_resus": {
                "text": "استقر ضغط الدم. تم نقل المريض بأمان إلى غرفة العمليات. لقد أنقذت حياته!",
                "vitals": { "hr": 90, "bp": "110/70", "spo2": 98 },
                "isTerminal": true,
                "success": true
            },
            "xray_death": {
                "text": "أثناء انتظار الأشعة، أصيب المريض بصدمة نزفية بسبب فقدان الدم وتوفي.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "painkiller_crash": {
                "text": "المورفين خفض ضغط الدم إلى الصفر تماماً! توقف قلب المريض وتوفي. (يجب إعطاء السوائل قبل المسكنات في حالة الصدمة).",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "bleed_out_death": {
                "text": "فقد المريض كل دمه وتوفي. الخطوة الأولى في الصدمات هي دائماً وقف النزيف!",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "adrenaline_wrong": {
                "text": "الأدرينالين أرهق القلب في حين أن المشكلة كانت نقص الدم. توفي المريض.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            }
        }
    },
    {
        "id": "cardiac_01",
        "title": "حالة طارئة: توقف القلب 💔",
        "description": "رجل يبلغ من العمر 55 عاماً أمسك بصدره فجأة وسقط على الأرض.",
        "nodes": {
            "start": {
                "text": "الرجل على الأرض، لا يستجيب، ولا يوجد نبض محسوس في رقبته.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "choices": [
                    { "text": "البدء الفوري في الإنعاش القلبي الرئوي (CPR)", "nextNodeId": "cpr_started", "impact": 20 },
                    { "text": "البحث عن جهاز الصدمات الكهربائية دون عمل CPR", "nextNodeId": "delay_cpr", "impact": -30 },
                    { "text": "محاولة إيقاظه برش الماء على وجهه", "nextNodeId": "water_death", "impact": -50 }
                ]
            },
            "cpr_started": {
                "text": "بدأت الـ CPR بسرعة. بعد دقيقة، أحضر زميلك جهاز الصدمات (Defibrillator). تظهر الشاشة رجفان بطيني (V-Fib).",
                "vitals": { "hr": "V-Fib", "bp": "0/0", "spo2": "CPR" },
                "choices": [
                    { "text": "إعطاء صدمة كهربائية (DC Shock) فوراً", "nextNodeId": "shock_given", "impact": 30 },
                    { "text": "الاستمرار في الـ CPR دون صدمة لأنها خطيرة", "nextNodeId": "cpr_only_fail", "impact": -20 },
                    { "text": "إعطاء حقنة أدرينالين قبل الصدمة", "nextNodeId": "adrenaline_early", "impact": -10 }
                ]
            },
            "shock_given": {
                "text": "تم إعطاء الصدمة. انتفض جسد المريض. الشاشة لا تزال تظهر إيقاعاً بطيئاً.",
                "vitals": { "hr": 45, "bp": "60/40", "spo2": 85 },
                "choices": [
                    { "text": "الاستمرار المباشر في الـ CPR لمدة دقيقتين أخريين", "nextNodeId": "cpr_resume", "impact": 20 },
                    { "text": "فحص النبض والتوقف لمراقبة الشاشة", "nextNodeId": "stop_cpr_fail", "impact": -20 }
                ]
            },
            "cpr_resume": {
                "text": "بعد دقيقتين إضافيتين من الـ CPR، بدأ المريض في التحرك والسعال. عاد النبض!",
                "vitals": { "hr": 85, "bp": "110/70", "spo2": 95 },
                "isTerminal": true,
                "success": true
            },
            "delay_cpr": {
                "text": "بحلول الوقت الذي وجدت فيه الجهاز، عانى دماغه من نقص الأكسجين وتوفي. الخطوة الأولى دائماً هي الـ CPR!",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "water_death": {
                "text": "رش الماء لا يفيد في توقف القلب! توفي المريض.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "cpr_only_fail": {
                "text": "العلاج الوحيد للرجفان البطيني (V-Fib) هو الكهرباء. بدونها، لم يتمكن القلب من استعادة نبضه وتوفي.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "adrenaline_early": {
                "text": "في حالة الـ V-Fib، تأتي الصدمة أولاً. تأخير الصدمة من أجل الحقنة أدى إلى وفاة المريض.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "stop_cpr_fail": {
                "text": "خطأ شائع! بعد الصدمة، يجب استئناف الـ CPR فوراً دون انتظار. افتقر القلب للقوة فتوقف مرة أخرى.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            }
        }
    },
    {
        "id": "anaphylaxis_01",
        "title": "حالة طارئة: حساسية شديدة 🐝",
        "description": "تعرض طفل للسعة نحلة في الحديقة. وجهه متورم جداً.",
        "nodes": {
            "start": {
                "text": "الطفل يجد صعوبة في التنفس، وصوت صفير في صدره، وبشرته حمراء. الأم مذعورة.",
                "vitals": { "hr": 145, "bp": "70/40", "spo2": 86 },
                "choices": [
                    { "text": "حقن الأدرينالين (Epinephrine) بشكل عاجل في عضلة الفخذ", "nextNodeId": "epi_given", "impact": 30 },
                    { "text": "إعطاء حبة حساسية (Allermine) عن طريق الفم", "nextNodeId": "pill_fail", "impact": -40 },
                    { "text": "إعطاء الأكسجين وجهاز التبخير فنتولين", "nextNodeId": "asthma_fail", "impact": -20 }
                ]
            },
            "epi_given": {
                "text": "قمت بحقنه. تحسن التنفس قليلاً بعد دقيقة، لكن ضغط الدم لا يزال منخفضاً ولديه حكة في الجلد.",
                "vitals": { "hr": 120, "bp": "85/50", "spo2": 92 },
                "choices": [
                    { "text": "تركيب كانيولا وإعطاء السوائل وحقنة الهيدروكورتيزون", "nextNodeId": "steroid_given", "impact": 20 },
                    { "text": "إعطاء حقنة أدرينالين ثانية مباشرة", "nextNodeId": "epi_overdose", "impact": -20 }
                ]
            },
            "steroid_given": {
                "text": "ممتاز! قامت السوائل بتطبيع ضغط الدم ومنعت الستيرويدات الانتكاس.",
                "vitals": { "hr": 90, "bp": "110/70", "spo2": 99 },
                "isTerminal": true,
                "success": true
            },
            "pill_fail": {
                "text": "لا يستطيع المريض البلع لأن حلقه متورم! فشلت الحبة واختنق الطفل.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "asthma_fail": {
                "text": "الفنتولين غير كافٍ للحساسية الشديدة حيث ينخفض ضغط الدم (صدمة تأقية). توفي المريض.",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            },
            "epi_overdose": {
                "text": "جرعتان متتاليتان من الأدرينالين تسببتا في تسارع شديد للقلب وسكتة دماغية. (يجب الانتظار 5-15 دقيقة للجرعة الثانية).",
                "vitals": { "hr": 0, "bp": "0/0", "spo2": 0 },
                "isTerminal": true,
                "success": false
            }
        }
    }
]
    }
};
