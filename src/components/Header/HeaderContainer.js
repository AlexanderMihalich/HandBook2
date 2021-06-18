import React from 'react'
import { connect } from 'react-redux';
import Header from './Header';
import { setAuthUserData } from '../../redux/auth-reducer'
import { getLogin } from '../../api/api';

class HeaderContainer extends React.Component {
	componentDidMount() {
		getLogin().then(responce => {
			if (responce.data.resultCode === 0) {
				let { id, email, login } = responce.data.data
				this.props.setAuthUserData(id, email, login)
			}
		})
	}
	render() {
		return (
			<Header {...this.props} />
		)
	}
}

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login
	}
}

export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)