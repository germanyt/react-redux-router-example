import {
  ADD_USER, SELECT_USER
} from '../action/app.act'


const initState = {
	list: JSON.parse(localStorage.getItem('user')) || {},
	username: sessionStorage.getItem('username') || ''
}


function User(state=initState, action){
	switch(action.type){
		case ADD_USER:
			let user = action.data;
			if(!state.list[user.username]){
				let userObj = {};
				userObj[user.username] = user;
				state = Object.assign({}, state, { list: Object.assign({}, state.list, userObj) });

				localStorage.setItem('user', JSON.stringify(state.list));

				return state;
			} else {
				return state;
			}
		case SELECT_USER:
			state = Object.assign({}, state, {username: action.username});

			sessionStorage.setItem('username', state.username);

			return state;
		default:
			return state;
	}
}


export {User}