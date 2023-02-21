import * as C from 'allFiles'
import * as api from 'api/user'
import * as FC from 'utils'
import * as S from './style'

import userState from 'context/userState'
import React from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { useRecoilValue } from 'recoil'
import Contributors from 'types/contributors'

const MyPage = () => {
	const user = useRecoilValue(userState)
	const queryClient = useQueryClient()

	const { mutate } = useMutation(api.logoutUser, {
		onSuccess: () => {
			document.cookie = `authorization=; expires=Sat 02 Oct 2021 17:46:04 GMT; path=/;`
			document.cookie = `refresh_token=; expires=Sat 02 Oct 2021 17:46:04 GMT; path=/;`
			queryClient.invalidateQueries('user')
		},
		onError: (err) => {
			alert('로그아웃에 실패했습니다.')
			console.log(err)
		},
	})

	return (
		<>
			<C.Header />
			<S.MyPageWrap>
				<C.Board>
					<S.MyPageTitleWrap>
						<S.MyPageTitleText>{`마이페이지 : ${user.nickName || '비로그인 유저'}`}</S.MyPageTitleText>
					</S.MyPageTitleWrap>
					<C.Classify>{user.authority}</C.Classify>
					<S.MyPageLine />
					<S.MyPageInfoWrap>
						<C.AccodianMenu name={'정보'}>
							<S.MyPageInfoLoadWrap>
								{user.id ? (
									<>
										<span>
											이름은 {user.nickName}이며, 부마위키의{' '}
											{user.authority === 'ADMIN' ? '관리자' : user.authority === 'BANNED' ? '읽기전용 사용자' : '사용자'} 중 한 명이다.
										</span>
										<span>
											이 유저의 아이디는 {user.id}이며, 이메일은 {user.email}이다.
										</span>
										<br />
										<S.LogoutText onClick={() => mutate()}>로그아웃</S.LogoutText>
									</>
								) : (
									<span>이 유저는 로그인을 하지 않은 유저다. 로그인을 하면 문서를 생성하고 편집할 수 있다.</span>
								)}
								<br />
							</S.MyPageInfoLoadWrap>
						</C.AccodianMenu>
						{user.id ? (
							<C.AccodianMenu name={'기여한 문서'}>
								<S.ContributeWrap>
									<span>이 유저가 기여한 문서의 정보들이다.</span>
									<S.ContributeList>
										{user.contributeDocs.map((docs: Contributors, index) => (
											<span key={index}>
												문서명 :&nbsp;
												<S.ContributeLink to={`/docs/${docs.title}`}>{docs.title}</S.ContributeLink>
												<br />
												수정 날짜 : {FC.dateParser(docs.createTime)}
											</span>
										))}
									</S.ContributeList>
								</S.ContributeWrap>
							</C.AccodianMenu>
						) : (
							''
						)}
					</S.MyPageInfoWrap>
				</C.Board>
				<C.Aside />
			</S.MyPageWrap>
			<C.ScrollBtn />
			<C.Footer />
		</>
	)
}

export default MyPage
