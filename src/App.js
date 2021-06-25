import React from 'react';
import './css/App.css';
import './css/null.css';
import HeaderContainer from './components/Header/HeaderContainer';
import HeaderImage from './components/HeaderImage/HeaderImage';
import { BrowserRouter, Route, withRouter } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';

class App extends React.Component {
	componentDidMount() {
		this.props.initializeApp()
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (

			<BrowserRouter>
				<div className="app-wrapper">
					<HeaderContainer />
					<div className='wrapper'>
						<div className='content'>
							<HeaderImage />
							<div className='content__content _container'>
								<Route path='/profile/:userId?'
									render={() => <ProfileContainer />} />
								<Route path='/dialogs'
									render={() => <DialogsContainer />} />
								<Route path='/users'
									render={() => <UsersContainer />} />
								<Route path='/login'
									render={() => <Login />} />
								<NavbarContainer />
							</div>
						</div>
					</div>
				</div>
			</BrowserRouter>
		);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	// withRouter,
	connect(mapStateToProps, { initializeApp }))(App)
