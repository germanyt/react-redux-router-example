import {db} from '../index';

export default function(where) {

	return new Promise(function(resolve, reject){

		const tansactionDB = function(){

			let database = db.database;

			if(!database){
				setTimeout(tansactionDB, 1000);
				return false;
			}

			let data = [];

			let transaction = database.transaction('Blog', 'readonly');

			let objectStore = transaction.objectStore('Blog');

			let index, range, request;

		    if(where){
		    	index = objectStore.index('author');
		    	range = IDBKeyRange.only(where);

		    	request = index.openCursor(range);
		    } else {
		    	// index = objectStore.index('time');
		    	request = objectStore.openCursor(null, 'prev');
		    }

		    request.onsuccess = function(event) {
		    	let cursor = event.target.result;
		        // if there is still another cursor to go, keep runing this code
		        if(cursor) {
		        	// create a list item to put each data item inside when displaying it
		          	data.push(cursor.value);
		        	// continue on to the next item in the cursor
		        	cursor.continue();
		        
		        	// if there are no more cursor items to iterate through, say so, and exit the function 
		        } else {
		        	resolve(data);
		        }
		    };

		    request.onerror = function(event){
		    	reject(event);
		    }
		}

		tansactionDB();
    
	});
}