import React from "react"
import styled from "styled-components"

const Pagination = () => {
	return (
		<SPagination>
			<li className="active"></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</SPagination>
	)
}

export default Pagination

const SPagination = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 1rem;
	position: absolute;
	top: 50%;
	right: 1rem;
	transform: translateY(-50%);

	li {
		width: 10px;
		height: 10px;
		background-color: var(--lightGray-color);
		border-radius: 50%;

		&.active {
			background-color: var(--secondary-color);
		}
	}
`
