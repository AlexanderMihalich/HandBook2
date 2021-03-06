import { authAPI } from '../api/api';
import { stopSubmit } from 'redux-form';

const SET_USER_DATA = 'auth-reducer/SET_USER_DATA'

let initialState = {
	userId: null,
	email: null,
	login: null,
	isAuth: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const getAuthUserData = () => async (dispatch) => {
	let responce = await authAPI.me()
	if (!responce.data.resultCode) {
		let { id, email, login } = responce.data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}
export const login = (email, password, rememberMe) => async (dispatch) => {
	let responce = await authAPI.login(email, password, rememberMe)
	if (!responce.data.resultCode) {
		dispatch(getAuthUserData())
	} else {
		let message = responce.data.messages.length > 0 ? responce.data.messages[0] : "incorrect email or password"
		dispatch(stopSubmit("login", { _error: message }))
	}
}

export const logout = () => async (dispatch) => {
	let responce = await authAPI.logout()
	if (!responce.data.resultCode) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}


export default authReducer