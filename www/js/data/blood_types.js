const bloodTypesData = [
    {
        id: 1001,
        ku: { title: "A+", desc: "یەکێک لە باوترین جۆرەکانی خوێن.", canGive: ["A+", "AB+"], canReceive: ["A+", "A-", "O+", "O-"], rarity: "٣٤٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "باشترە خواردنی دەوڵەمەند بە سەوزە بخۆن و وەرزشی کەم-فشار بکەن." },
        en: { title: "A+", desc: "One of the most common blood types.", canGive: ["A+", "AB+"], canReceive: ["A+", "A-", "O+", "O-"], rarity: "34% of people have this type.", advice: "Plant-based diets are often recommended for type A individuals." },
        ar: { title: "A+", desc: "واحد من أكثر فصائل الدم شيوعاً.", canGive: ["A+", "AB+"], canReceive: ["A+", "A-", "O+", "O-"], rarity: "34% من الناس لديهم هذه الفصيلة.", advice: "يُنصح باتباع نظام غذائي غني بالخضروات." }
    },
    {
        id: 1002,
        ku: { title: "A-", desc: "جۆرێکی دەگمەنتر لە جۆری ئەی پۆزەتیڤ.", canGive: ["A+", "A-", "AB+", "AB-"], canReceive: ["A-", "O-"], rarity: "٦٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "خوێن بەخشینێکی زۆر بەسوودە چونکە بۆ چەندین جۆر دەبێت." },
        en: { title: "A-", desc: "A rarer version of type A.", canGive: ["A+", "A-", "AB+", "AB-"], canReceive: ["A-", "O-"], rarity: "6% of people have this type.", advice: "Donating is highly valuable as it can be used for many types." },
        ar: { title: "A-", desc: "فصيلة أندر من فصيلة A الموجبة.", canGive: ["A+", "A-", "AB+", "AB-"], canReceive: ["A-", "O-"], rarity: "6% من الناس لديهم هذه الفصيلة.", advice: "التبرع بالدم مهم جداً لأنها تعطى لعدة فصائل." }
    },
    {
        id: 1003,
        ku: { title: "B+", desc: "جۆرێکی خوێن کە بە باشی دەتوانێت بەرگەی گۆڕانکارییەکان بگرێت.", canGive: ["B+", "AB+"], canReceive: ["B+", "B-", "O+", "O-"], rarity: "٩٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "خواردنی شیرەمەنییەکان و گۆشت بۆ ئەم جۆرە گونجاوە." },
        en: { title: "B+", desc: "A balanced blood type that adapts well.", canGive: ["B+", "AB+"], canReceive: ["B+", "B-", "O+", "O-"], rarity: "9% of people have this type.", advice: "Dairy products and meat are generally well-tolerated by type B." },
        ar: { title: "B+", desc: "فصيلة دم متوازنة تتكيف بشكل جيد.", canGive: ["B+", "AB+"], canReceive: ["B+", "B-", "O+", "O-"], rarity: "9% من الناس لديهم هذه الفصيلة.", advice: "منتجات الألبان واللحوم مناسبة لهذه الفصيلة." }
    },
    {
        id: 1004,
        ku: { title: "B-", desc: "جۆرێکی دەگمەنی خوێن.", canGive: ["B+", "B-", "AB+", "AB-"], canReceive: ["B-", "O-"], rarity: "٢٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "پێویستە هەمیشە ئاگاداری جۆری خوێنت بیت لە کاتی پێویستدا چونکە کەمە." },
        en: { title: "B-", desc: "A very rare blood type.", canGive: ["B+", "B-", "AB+", "AB-"], canReceive: ["B-", "O-"], rarity: "2% of people have this type.", advice: "Always know your blood type as finding a donor can be challenging." },
        ar: { title: "B-", desc: "فصيلة دم نادرة جداً.", canGive: ["B+", "B-", "AB+", "AB-"], canReceive: ["B-", "O-"], rarity: "2% من الناس لديهم هذه الفصيلة.", advice: "يجب دائماً معرفة فصيلتك لأن العثور على متبرع قد يكون صعباً." }
    },
    {
        id: 1005,
        ku: { title: "AB+", desc: "وەرگری گشتگیر (Universal Recipient).", canGive: ["AB+"], canReceive: ["هەموو جۆرەکان"], rarity: "٣٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "دەتوانیت خوێن لە هەموو کەس وەرگریت، بەڵام تەنها دەتوانیت بیدەیتە AB+." },
        en: { title: "AB+", desc: "Universal Recipient.", canGive: ["AB+"], canReceive: ["All Types"], rarity: "3% of people have this type.", advice: "You can receive blood from anyone, making you safe in emergencies." },
        ar: { title: "AB+", desc: "المستلم العام (تأخذ من الجميع).", canGive: ["AB+"], canReceive: ["كل الفصائل"], rarity: "3% من الناس لديهم هذه الفصيلة.", advice: "يمكنك استقبال الدم من أي شخص، مما يجعلك في وضع آمن." }
    },
    {
        id: 1006,
        ku: { title: "AB-", desc: "دەگمەنترین جۆری خوێن لە جیهاندا.", canGive: ["AB+", "AB-"], canReceive: ["AB-", "A-", "B-", "O-"], rarity: "١٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "ئەگەر ئەم خوێنەت هەیە، تۆ خاوەن دەگمەنترین جۆری خوێنیت." },
        en: { title: "AB-", desc: "The rarest blood type in the world.", canGive: ["AB+", "AB-"], canReceive: ["AB-", "A-", "B-", "O-"], rarity: "1% of people have this type.", advice: "You have the most unique blood type; your plasma is very valuable." },
        ar: { title: "AB-", desc: "أندر فصيلة دم في العالم.", canGive: ["AB+", "AB-"], canReceive: ["AB-", "A-", "B-", "O-"], rarity: "1% من الناس لديهم هذه الفصيلة.", advice: "لديك أندر فصيلة؛ بلازما دمك قيمة جداً للمرضى." }
    },
    {
        id: 1007,
        ku: { title: "O+", desc: "باوترین جۆری خوێن لە جیهاندا.", canGive: ["O+", "A+", "B+", "AB+"], canReceive: ["O+", "O-"], rarity: "٣٨٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "بەخشەری گرنگیت بۆ زۆربەی جۆرە پۆزەتیڤەکان." },
        en: { title: "O+", desc: "The most common blood type globally.", canGive: ["O+", "A+", "B+", "AB+"], canReceive: ["O+", "O-"], rarity: "38% of people have this type.", advice: "You are a crucial donor for the majority of the population." },
        ar: { title: "O+", desc: "أكثر فصائل الدم شيوعاً في العالم.", canGive: ["O+", "A+", "B+", "AB+"], canReceive: ["O+", "O-"], rarity: "38% من الناس لديهم هذه الفصيلة.", advice: "أنت متبرع حيوي لغالبية الناس ذوي الفصائل الموجبة." }
    },
    {
        id: 1008,
        ku: { title: "O-", desc: "بەخشەری گشتگیر (Universal Donor).", canGive: ["هەموو جۆرەکان"], canReceive: ["O-"], rarity: "٧٪ لە خەڵک ئەم جۆرەیان هەیە.", advice: "خوێنەکەت بۆ هەموو کەس دەبێت لە کاتی فریاکەوتندا، تۆ ڕزگارکەری ژیانیت." },
        en: { title: "O-", desc: "Universal Donor.", canGive: ["All Types"], canReceive: ["O-"], rarity: "7% of people have this type.", advice: "Your blood can save anyone in an emergency; you are a life-saver." },
        ar: { title: "O-", desc: "المتبرع العام (يعطي الجميع).", canGive: ["كل الفصائل"], canReceive: ["O-"], rarity: "7% من الناس لديهم هذه الفصيلة.", advice: "دمك ينقذ أي شخص في حالات الطوارئ؛ أنت منقذ للحياة." }
    }
];
