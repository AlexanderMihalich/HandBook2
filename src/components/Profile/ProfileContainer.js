import React from 'react';
import Profile from './Profile';
import { getUserProfile, getUserStatus, savePhoto, updateUserStatus } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

	refreshProfile() {
		let { authorizedUserId, getUserProfile, getUserStatus } = this.props
		let userId = this.props.match.params.userId
		if (!userId) {
			userId = authorizedUserId;
		}
		getUserProfile(userId)
		getUserStatus(userId)
	}

	componentDidMount() {
		this.refreshProfile()
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.props.match.params.userId != prevProps.match.params.userId) {
			this.refreshProfile()
		}
	}

	render() {
		return <Profile {...this.props}
			isOwner={!this.props.match.params.userId}
			profile={this.props.profile}
			status={this.props.status}
			updateStatus={this.props.updateUserStatus}
			savePhoto={this.props.savePhoto}
		/>
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		status: state.profilePage.status,
		authorizedUserId: state.auth.userId,
		isAuth: state.auth.isAuth
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, savePhoto }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)