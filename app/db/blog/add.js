import {db} from '../index';

export default function(newItem = []) {
	let database = db.database;

	return new Promise(function(resolve, reject){

		let transaction = database.transaction(['Blog'], 'readwrite');

		transaction.oncomplete = function() {
	        console.log('success');
	    };

	    transaction.onerror = function() {
	        console.log( transaction.error );
	    };

		let objectStore = transaction.objectStore('Blog');
		// let objectStore = database.transaction(['microBlog'], 'readwrite').objectStore('Blog');

	    let request = objectStore.add(newItem[0]);
	    request.onsuccess = function(event) {
	    	resolve(true);
	    };

	    request.onerror = function(event){
	    	reject(event);
	    }
    
	});
}