import * as C from 'allFiles'
import * as api from 'api/getDocs'
import * as S from './style'

import React from 'react'
import { useQuery } from 'react-query'
import Docs from 'types/docs.type'
import { Helmet } from 'react-helmet-async'

const Popular = () => {
	const [populars, setPopulars] = React.useState([])

	useQuery('getPopular', () => api.getBaseDocs('find/popular'), {
		onSuccess: (res) => {
			const data = res
				.sort((a: Docs, b: Docs) => (a.view < b.view ? -1 : 1))
				.reverse()
				.slice(0, 20)
			setPopulars(data)
			console.log(data)
		},
	})

	return (
		<>
			<Helmet>
				<title>부마위키 - 인기 문서</title>
			</Helmet>
			<C.Header />
			<S.PopularWrap>
				<C.Board>
					<S.PopularTitleWrap>
						<S.PopularTitleText>부마위키:인기문서</S.PopularTitleText>
					</S.PopularTitleWrap>
					<S.PopularClassify>
						<C.Classify>인기문서</C.Classify>
					</S.PopularClassify>
					<S.PopularLine />
					<S.PopularListWrap>
						<C.AccodianMenu name={`인기 문서`}>
							<S.PopularList>
								{populars.map((popular: Docs, index) => (
									<S.PopularListItem key={popular.id}>
										<S.PopularLink to={`/docs/${popular.title}`}>
											{index + 1}위 {popular.title} (조회수 {popular.view})
										</S.PopularLink>
									</S.PopularListItem>
								))}
							</S.PopularList>
						</C.AccodianMenu>
					</S.PopularListWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.PopularWrap>
			<C.Footer />
		</>
	)
}

export default Popular
