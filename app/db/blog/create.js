

export default function() {
	let db = this;
    
    db.onerror = function(event) {
      	console.log('create blog error');
    };

    // Create an objectStore for this database
    
    let objectStore = db.createObjectStore("Blog", { keyPath: "time" });
    
    // define what data items the objectStore will contain
    
    objectStore.createIndex("author", "author", { unique: false });
    objectStore.createIndex("text", "text", { unique: false });
    objectStore.createIndex("time", "time", { unique: false });
}