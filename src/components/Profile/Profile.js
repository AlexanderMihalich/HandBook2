import React from 'react';
import Description from './Description/Description';
import style from './Profile.module.css'
import AddPostContainer from './AddPost/AddPostContainer';

const Profile = ({ profile, isOwner, savePhoto, status, updateStatus }) => {
	return (
		<div className={style.profile}>
			<Description profile={profile} isOwner={isOwner} savePhoto={savePhoto} status={status} updateStatus={updateStatus} />
			<AddPostContainer />
		</div>
	)
}
export default Profile