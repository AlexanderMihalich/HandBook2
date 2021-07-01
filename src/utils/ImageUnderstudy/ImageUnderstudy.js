import React from 'react'
import userPhoto from '../../img/user.png'

export const ImageUnderstudy = (photo) => {
	return (
		<img alt="" src={photo !== null ? photo : userPhoto} />
	)
}