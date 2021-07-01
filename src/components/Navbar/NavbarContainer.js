import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import Nav from './Navbar'

let mapStateToProps = (state) => {
	return {
		friends: state.sidebarPage
	}
}

export default compose(
	connect(mapStateToProps)
)(Nav)