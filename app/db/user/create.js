

export default function() {
	let db = this;
    
    db.onerror = function(event) {
      	console.log('create user error');
    };

    // Create an objectStore for this database
    
    let objectStore = db.createObjectStore("User", { keyPath: "username" });
    
    // define what data items the objectStore will contain
    
    objectStore.createIndex("username", "username", { unique: true });
    objectStore.createIndex("password", "password", { unique: false });
    objectStore.createIndex("time", "time", { unique: false });
}