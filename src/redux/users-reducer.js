import { usersAPI } from '../api/api';

let FOLLOW = 'FOLLOW'
let UNFOLLOW = 'UNFOLLOW'
let SET_USERS = 'SET_USERS'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
	users: [],
	pageSize: 5,
	totalUserCount: 0,
	currentPage: 2,
	isFetching: true,
	followingInPropgress: [],
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: true }
					}
					return u
				})
			}
		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u
				})
			}
		case SET_USERS:
			return { ...state, users: action.users }
		case SET_CURRENT_PAGE:
			return { ...state, currentPage: action.currentPag }
		case SET_USERS_TOTAL_COUNT:
			return { ...state, totalUserCount: action.count }
		case TOGGLE_IS_FETCHING:
			return { ...state, isFetching: action.isFetching }
		case TOGGLE_IS_FOLLOWING_PROGRESS:
			return {
				...state, followingInPropgress: action.isFetching
					? [...state.followingInPropgress, action.userId]
					: state.followingInPropgress.filter(id => id !== action.userId)
			}
		default:
			return state
	}
}

export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUserCount) => ({ type: SET_USERS_TOTAL_COUNT, count: totalUserCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toogleFolowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })

export const getUsers = (currentPage, pageSize) => {
	return (dispatch) => {
		dispatch(toggleIsFetching(true))
		usersAPI.getUsers(currentPage, pageSize).then(data => {
			dispatch(toggleIsFetching(false))
			dispatch(setUsers(data.items))
			dispatch(setUsersTotalCount(data.totalCount))
		})
	}
}
export const unfollow = (userId) => {
	return (dispatch) => {
		dispatch(toogleFolowingProgress(true, userId))
		usersAPI.buttonUnfollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(unfollowSuccess(userId))
			}
			dispatch(toogleFolowingProgress(false, userId))
		})
	}
}
export const follow = (userId) => {
	return (dispatch) => {
		dispatch(toogleFolowingProgress(true, userId))
		usersAPI.buttonFollow(userId).then(data => {
			if (data.resultCode === 0) {
				dispatch(followSuccess(userId))
			}
			dispatch(toogleFolowingProgress(false, userId))
		})
	}
}
export default usersReducer