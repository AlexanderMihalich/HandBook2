import React from 'react'
import './Pagination.css'

const Pagination = ({ totalUserCount, pageSize, currentPage, onPageChanched, ...props }) => {
	let pageCount = Math.ceil(totalUserCount / pageSize)

	let pages = []
	// for (let i = 1; i <= pageCount; i++) {
	for (let i = 1; i <= 11; i++) {
		pages.push(i)
	}

	return (
		<ul className="pagination">
			{pages.map((p, index) => {
				return <li key={index} className={currentPage === p && "pagination__item pagination__item_active" || "pagination__item"}
					onClick={() => { onPageChanched(p) }}> {p}</li>
			})}
		</ul>
	)
}

export default Pagination