// import fetch from 'isomorphic-fetch'

import {addBlog, cursorBlog} from '../../db/blog/index';

export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_REDDIT = 'SELECT_REDDIT'
export const INVALIDATE_REDDIT = 'INVALIDATE_REDDIT'

export const PUBLISH_BLOG = 'PUBLISH_BLOG'
export const RECEIVE_BLOG = 'RECEIVE_BLOG'

export const ADD_USER = 'ADD_USER'
export const SELECT_USER = 'SELECT_USER'

export function publishBlog(data){

  return dispatch => {
    addBlog([data]).then(status => {
      dispatch(saveBlog(data));

      dispatch(selectBlog());

    }).catch(error => console.log(error));
  }
}

function saveBlog(data){
  return {
    type: PUBLISH_BLOG,
    data
  }
}

export function selectBlog(where) {
  return dispatch => {
    cursorBlog(where).then(data => {
      dispatch(receiveBlog(data));
    }).catch(error => console.log(error));
  }
}

function receiveBlog(data){
  return {
    type: RECEIVE_BLOG,
    data
  }
}

export function addUser(data) {
  return {
    type: ADD_USER,
    data
  }
}

export function selectUser(username){
  return {
    type: SELECT_USER,
    username
  }
}


function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit))
    return fetch(`https://www.reddit.com/r/${reddit}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)))
  }
}

function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}

export function fetchPostsIfNeeded(reddit) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      return dispatch(fetchPosts(reddit))
    }
  }
}