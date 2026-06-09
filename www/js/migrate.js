async function migrateNursingDataToFirestore() {
    if (typeof db === 'undefined' || !db) {
        console.error("Firestore db is not initialized.");
        return;
    }
    if (typeof nursingData === 'undefined') {
        console.error("nursingData is not loaded.");
        return;
    }

    console.log("Starting Nursing Migration to Firestore...");
    try {
        // 1. Get all documents in 'nursing'
        const snapshot = await db.collection('nursing').get();
        console.log(`Found ${snapshot.size} existing nursing documents. Deleting them...`);
        
        // 2. Delete all existing documents
        const deletePromises = snapshot.docs.map(doc => doc.ref.delete());
        await Promise.all(deletePromises);
        console.log("Deletion complete.");
        
        // 3. Upload new items with numeric IDs as doc IDs
        console.log(`Uploading ${nursingData.length} new nursing items...`);
        for (const item of nursingData) {
            // Ensure the item object itself has the id property
            await db.collection('nursing').doc(item.id.toString()).set(item);
        }
        console.log("Upload complete.");
        alert("گواستنەوەی زانیارییەکانی بەشی پەرستاری سەرکەوتوو بوو! داتابەیسی Firestore بە سەرکەوتوویی بە هەنگاوەکان و زیانە نوێیەکانەوە نوێکرایەوە.");
    } catch (err) {
        console.error("Migration Failed", err);
        alert("گواستنەوەکە سەرکەوتوو نەبوو! سەیری کۆنسۆڵ بکە: " + err.message);
    }
}

// Execute migration after 3 seconds to make sure Firebase and nursingData are loaded
setTimeout(migrateNursingDataToFirestore, 3000);
