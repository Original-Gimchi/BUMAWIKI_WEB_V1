import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const AsideWrap = styled.div`
	width: 240px;
	height: fit-content;
	margin-top: 20px;
	position: sticky;
	top: 2vw;

	@media (max-width: 500px) {
		display: none;
	}
`

export const AsideTitleWrap = styled.div`
	width: 100%;
	height: 50px;
	background-color: #274168;
	display: flex;
	align-items: center;
	border: 2px solid #ccc;
`

export const AsideTitle = styled.span`
	text-decoration: none;
	color: #fff;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 18px;
	margin-left: 20px;
`

export const AsideDocWrap = styled.div`
	width: 100%;
	height: 40px;
	background-color: #fff;
	display: flex;
	align-items: center;
	border: 2px solid #ccc;
	border-top: none;
`

export const AsideList = styled(Link)`
	color: #274168;
	margin-left: 10px;
	text-decoration: none;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 14px;
`

export const AsideLastModified = styled.span`
	font-size: 10px;
	color: rgb(146, 146, 146);
`

export const AsidePageWrap = styled.div`
	display: flex;
`

export const AsidePageButton = styled.div`
	border: 2px solid #ccc;
	background-color: white;
	width: 56px;
	height: 24px;
	color: #274168;
	margin: 6px 2px 6px 2px;
	border-radius: 3px;
	font-weight: 800;
	font-size: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	svg {
		width: 10px;
		height: 10px;
	}

	span {
		margin: 0 2px 0 2px;
		&::selection {
			background-color: transparent;
		}
	}

	&:first-child {
		margin-left: 0;
	}
	&:last-child {
		margin-right: 0;
	}
`
