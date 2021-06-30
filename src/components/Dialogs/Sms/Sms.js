import React from 'react'
import style from './Sms.module.css'

const Sms = ({ sms }) => {

	return (
		<div className={style.dialogs__dialog}>
			<div className={style.dialogs__sms}>
				{sms}
			</div>
		</div>
	)
}

export default Sms