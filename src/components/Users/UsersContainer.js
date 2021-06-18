import React from 'react'
import { connect } from 'react-redux'
import { follow, toggleIsFetching, setCurrentPage, setUsers, setUsersTotalCount, unfollow, toogleFolowingProgress } from '../../redux/users-reducer'
import Users from './Users';
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../../api/api';

class UsersAPIContainer extends React.Component {
	componentDidMount() {
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
			this.props.setUsersTotalCount(data.totalCount)
		})
	}
	onPageChanched = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		this.props.toggleIsFetching(true)
		usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
			this.props.toggleIsFetching(false)
			this.props.setUsers(data.items)
		})
	}

	render() {
		return <>
			{this.props.isFetching ? <Preloader /> : null}
			< Users
				usersPage={this.props.usersPage}
				unfollow={this.props.unfollow}
				follow={this.props.follow}
				totalUserCount={this.props.totalUserCount}
				pageSize={this.props.pageSize}
				currentPage={this.props.currentPage}
				onPageChanched={this.onPageChanched}
				toogleFolowingProgress={this.props.toogleFolowingProgress}
				followingInPropgress={this.props.followingInPropgress}
			/>
		</>
	}
}

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUserCount: state.usersPage.totalUserCount,
		currentPage: state.usersPage.currentPage,
		isFetching: state.usersPage.isFetching,
		followingInPropgress: state.usersPage.followingInPropgress,

	}
}

let UsersContainer = connect(mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toogleFolowingProgress })(UsersAPIContainer)

export default UsersContainer