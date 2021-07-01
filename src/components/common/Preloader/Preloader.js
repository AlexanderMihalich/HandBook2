import React from 'react'
import preloader from '../../../img/loader.svg'
import './Preloader.css'

let Preloader = ({ }) => {
	return (
		<div className='preloader'>
			<img alt="" src={preloader} />
		</div>
	)
}

export default Preloader