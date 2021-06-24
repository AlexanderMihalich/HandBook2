import { profileAPI } from '../api/api';
let ADD_POST = 'ADD-POST'
let SET_USER_PROFILE = 'SET_USER_PROFILE'
let SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
	posts: [
		{ id: 1, img: 'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg', message: "It's our new program! Hey!", },
		{ id: 2, img: 'https://cdnimg.rg.ru/i/gallery/3f26d604/3ad23133.jpg', message: "Hey, why nobody love my?", },
	],
	profile: null,
	status: '',
}

const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: 3,
				img: 'https://www.soyuz.ru/public/uploads/files/2/7452690/20201216105432aed6fa04c9.jpg',
				message: action.newPostText,
			}
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: ''
			}
		case SET_USER_PROFILE:
			return { ...state, profile: action.profile }
		case SET_USER_STATUS:
			return { ...state, status: action.status }
		default:
			return state
	}
}

export const addPost = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status })

export const getUserProfile = (userId) => (dispatch) => {
	profileAPI.getProfile(userId).then(responce => {
		dispatch(setUserProfile(responce.data))
	})
}
export const getUserStatus = (userId) => (dispatch) => {
	profileAPI.getStatus(userId).then(responce => {
		dispatch(setUserStatus(responce.data))
	})
}
export const updateUserStatus = (status) => (dispatch) => {
	profileAPI.updateStatus(status).then(responce => {
		if (responce.data.resultCode === 0) {
			dispatch(setUserStatus(status))
		}
	})
}

export default profileReducer