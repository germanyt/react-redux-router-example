/*
 * open IndexDb and create Object store
*/

import createBlog from './blog/create';
import createUser from './user/create';

let db = {};


window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
// window.indexedDB.deleteDatabase('microBlog');
const DBOpenRequest = window.indexedDB.open("microBlog", 2);

DBOpenRequest.onerror = function(event){
	console.log('open error', event.target);
}

DBOpenRequest.onsuccess = function(event){
	console.log('open success');

	db.database = event.target.result;
};
	// checkVersion();
DBOpenRequest.onupgradeneeded = function(event) {
    let database = event.target.result;

    createBlog.call(database);
    createUser.call(database);

    console.log('object create completed');
}

export {db};

export default DBOpenRequest;