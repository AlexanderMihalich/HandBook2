import React from 'react';
import Description from './Description/Description';
import style from './Profile.module.css'
import AddPostContainer from './AddPost/AddPostContainer';

const Profile = ({ profile, status, updateStatus }) => {
	return (
		<div className={style.profile}>
			<Description profile={profile} status={status} updateStatus={updateStatus} />
			<AddPostContainer />
		</div>
	)
}
export default Profile