import * as S from './style'
import * as api from 'api/user'

import React from 'react'
import { useMutation } from 'react-query'

interface AuthorityProps {
	email: string
}

interface AuthorityApiProps extends AuthorityProps {
	authority: string
}

const Authority = ({ email }: AuthorityProps) => {
	const { mutate } = useMutation(({ email, authority }: AuthorityApiProps) => api.updateUserAuthority(email, authority), {
		onSuccess: () => alert('유저 권한이 변경되었습니다!'),
	})

	const onClickAuthorityUser = (authority: string) => {
		if (window.confirm(`유저 권한을 ${authority}(으)로 변경하시겠습니까?`)) {
			mutate({ email, authority })
		}
	}

	return (
		<S.AuthorityButtonWrap>
			<S.AuthorityLinkWrap onClick={() => onClickAuthorityUser('ADMIN')}>
				<S.AuthorityButton>
					<S.AuthorityText>ADMIN</S.AuthorityText>
				</S.AuthorityButton>
			</S.AuthorityLinkWrap>
			<S.AuthorityLinkWrap onClick={() => onClickAuthorityUser('USER')}>
				<S.AuthorityButton>
					<S.AuthorityText>USER</S.AuthorityText>
				</S.AuthorityButton>
			</S.AuthorityLinkWrap>
			<S.AuthorityLinkWrap onClick={() => onClickAuthorityUser('BANNED')}>
				<S.AuthorityButton>
					<S.AuthorityText>BANNED</S.AuthorityText>
				</S.AuthorityButton>
			</S.AuthorityLinkWrap>
		</S.AuthorityButtonWrap>
	)
}

export default Authority
