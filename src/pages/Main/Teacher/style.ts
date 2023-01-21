import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const TeacherWrap = styled.div`
	display: flex;
`

export const TeacherLine = styled.div`
	width: 68vw;
	height: 1.5px;
	background-color: #ccc;

	@media (max-width: 500px) {
		width: 90vw;
	}
`

export const TeacherTitleWrap = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
`

export const TeacherTitleText = styled.span`
	color: #274168;
	font-family: 'Open Sans', sans-serif;
	font-weight: 800;
	font-size: 34px;
	margin-left: 30px;
`

export const Classify = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 25px;
	margin-bottom: 30px;
`

export const TeacherWarnText = styled.span`
	font-weight: 700;
	margin: 20px 0 10px 30px;
	margin-right: auto;
	font-size: 13px;
	color: red;
`

export const TeacherList = styled.div`
	width: 90%;
	height: fit-content;
	display: flex;
	flex-direction: column;
	margin-top: 20px;
`

export const TeacherDetailList = styled.ul`
	margin: 30px 0 0 50px;
	font-weight: 600;
`

export const TeacherListItem = styled.li`
	margin-bottom: 20px;
	color: #0038ff;
`

export const TeacherLink = styled(Link)`
	color: #0038ff;
	text-decoration: none;
	cursor: pointer;
`
