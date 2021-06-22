import React from 'react';
import Profile from './Profile';
import { getUserProfile } from '../../redux/profile-reducer'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
	componentDidMount() {
		let userId = this.props.match.params.userId
		this.props.getUserProfile(userId)
	}

	render() {
		return <Profile {...this.props} profile={this.props.profile} />
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
	}
}

export default compose(
	connect(mapStateToProps, { getUserProfile }),
	withRouter,
	withAuthRedirect
)(ProfileContainer)

// let withRedirect = withAuthRedirect(Profile)

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)

// export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainerComponent)