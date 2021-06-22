import React from 'react';
import './css/App.css';
import './css/null.css';
import HeaderContainer from './components/Header/HeaderContainer';
import HeaderImage from './components/HeaderImage/HeaderImage';
import { BrowserRouter, Route } from 'react-router-dom'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';

function App(props) {

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

export default App;
