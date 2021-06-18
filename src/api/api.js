import * as axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	headers: {
		"API-KEY": "48f3010c-f192-4caf-b70c-1358b38c2366"
	}
})

export const profileAPI = {
	getProfile(userId) {
		return instance.get(`profile/${userId}`)
	}
}

export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
			.then(responce => responce.data)
	},
	buttonUnfollow(userId) {
		return instance.delete(`follow/${userId}`)
			.then(responce => responce.data)
	},
	buttonFollow(userId) {
		return instance.post(`follow/${userId}`, {})
			.then(responce => responce.data)
	},
}

export const getLogin = () => {
	return instance.get(`auth/me`)
}