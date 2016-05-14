import {
  PUBLISH_BLOG, RECEIVE_BLOG
} from '../action/app.act'

const initState = /*JSON.parse(localStorage.getItem('blog')) ||*/ {
	blogs: [],
	userMap: {}
};


function Blog(state=initState, action){
	switch(action.type){
		case PUBLISH_BLOG:
			let blog = action.data;
			let username = blog.author;
			let userObj = {};

			if (state.userMap[username]){
				userObj[username] = [...state.userMap[username] , state.blogs.length];
			} else {
				userObj[username] = [state.blogs.length];
			}

			let st = Object.assign({}, state, {
				blogs: [...state.blogs, {
					text: blog.text,
					time: new Date().toString(),
					author: username
				}],

				userMap: Object.assign({}, state.userMap, userObj)
			});
			
			// localStorage.setItem('blog', JSON.stringify(state));

			return st;
		case RECEIVE_BLOG:

			let sta = Object.assign({}, state, {blogs: action.data});
			
			return sta;
		break;
		default:
		return state;
	}
}


export {Blog}