import {
  PUBLISH_BLOG, SELECT_BLOG
} from '../action/app.act'

const initState = JSON.parse(localStorage.getItem('blog')) || {
	blogs: [],
	userMap: {}
};


function Blog(state=initState, action){
	switch(action.type){
		case PUBLISH_BLOG:
			let blog = action.data;
			let username = blog.username
			let userObj = {};

			if (state.userMap[username]){
				userObj[username] = [...state.userMap[username] , state.blogs.length];
			} else {
				userObj[username] = [state.blogs.length];
			}

			state = Object.assign({}, state, {
				blogs: [...state.blogs, {
					text: blog.text,
					time: new Date().toString(),
					author: username
				}],

				userMap: Object.assign({}, state.userMap, userObj)
			});
			
			localStorage.setItem('blog', JSON.stringify(state));

			return state;
		case SELECT_BLOG:
			
			return state
		break;
		default:
		return state;
	}
}


export {Blog}