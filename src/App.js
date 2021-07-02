import React from 'react';
import './css/App.css';
import './css/null.css';
import HeaderContainer from './components/Header/HeaderContainer';
import HeaderImage from './components/HeaderImage/HeaderImage';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import NavbarContainer from './components/Navbar/NavbarContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
import { withSuspense } from './hoc/withSuspense';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'))
const Login = React.lazy(() => import('./components/Login/Login'))

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (

			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<div className="app-wrapper">
					<HeaderContainer />
					<div className='wrapper'>
						<div className='content'>
							<HeaderImage />
							<div className='content__content _container'>
								<Route path='/profile/:userId?'
									render={withSuspense(ProfileContainer)} />
								<Route path='/dialogs'
									render={withSuspense(DialogsContainer)} />
								<Route path='/users'
									render={withSuspense(UsersContainer)} />
								<Route path='/login'
									render={withSuspense(Login)} />
								<NavbarContainer />
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter >
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	// withRouter,
	connect(mapStateToProps, { initializeApp }))(App)
