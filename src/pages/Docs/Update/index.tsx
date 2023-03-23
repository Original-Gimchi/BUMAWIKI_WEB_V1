import * as C from 'allFiles'
import * as R from 'react-router-dom'
import * as FC from 'utils'
import * as S from './style'
import * as getApi from 'api/getDocs'
import * as editApi from 'api/editDocs'

import { userState } from 'context/userState'
import React from 'react'
import { useRecoilValue } from 'recoil'
import { MutationFunction, useMutation, useQuery } from 'react-query'
import UpdateDocsType from 'types/update.type.'
import { decodeContents, encodeContents } from 'utils/document/requestContents'
import updateInitState from 'state/updateInitState'
import { AxiosError } from 'axios'
import { Helmet } from 'react-helmet-async'

const Update = () => {
	const router = R.useParams()
	const user = useRecoilValue(userState)
	const navigate = R.useNavigate()
	const textareaRef = React.useRef<HTMLTextAreaElement>(null)

	const [docs, setDocs] = React.useState<UpdateDocsType>(updateInitState)
	const [fileInput, setFileInput] = React.useState([''])
	const [isOnAutoComplete, setIsOnAutoComplete] = React.useState(JSON.parse(localStorage.getItem('autoComplete') || 'true'))

	useQuery('docs', () => getApi.getDocs(router.title as string), {
		onSuccess: (data) => {
			setDocs({ ...docs, contents: decodeContents(data.contents), title: data.title })
		},
	})

	const { mutate } = useMutation(editApi.updateDocs as MutationFunction, {
		onSuccess: () => {
			alert('문서가 편집되었습니다!')
			navigate(`/docs/${router.title}`)
			console.log('asdnaslkdn')
		},
		onError: (err) => {
			if (err instanceof AxiosError) {
				const { status, message, error } = err?.response?.data
				console.log(status, message, err)
				if (status === 403) {
					if (message === 'Cannot Change Your Docs') return alert('자기 자신의 문서는 편집할 수 없습니다.')
					if (error === 'Forbidden') return alert('읽기전용 사용자는 문서를 편집할 수 없습니다.')
				}
			}
		},
	})

	const onClickAutoComplete = () => {
		localStorage.setItem('autoComplete', `${!isOnAutoComplete}`)
		setIsOnAutoComplete(!isOnAutoComplete)
		if (textareaRef.current) textareaRef.current.focus()
	}

	const mutateUpdateDocs = () => {
		const FormData = require('form-data')
		const data = new FormData()
		data.append(
			'request',
			new Blob([`{ "contents": "${encodeContents(docs.contents)}" }`], {
				type: 'application/json',
			}),
			{ contentType: 'application/json' }
		)
		docs.files.forEach((file) => data.append('files', file, file.name))

		mutate({ data, title: router.title })
	}

	const onClickUpdateDocs = async () => {
		if (!user.id) return alert('로그인 후 이용 가능한 서비스입니다.')
		if (!docs.contents.length) return alert('문서가 비어있습니다!')

		mutateUpdateDocs()
	}

	return (
		<>
			<Helmet>
				<title>부마위키 - 문서편집 : {docs?.title || ''}</title>
			</Helmet>
			<C.Header />
			<S.DocsWrap>
				<C.Board>
					<S.DocsTitleWrap>
						<S.DocsTitleText>문서 편집 : {docs.title}</S.DocsTitleText>
					</S.DocsTitleWrap>
					<S.DocsExampleImage src="/images/example.png" alt="문서작성법" />
					<S.DocsLine />
					<S.DocsContentsWrap>
						{fileInput.map((index) => (
							<input
								key={index}
								type="file"
								accept="image/*"
								onChange={(e) => {
									if (e.target.files) setDocs({ ...docs, files: [...docs.files, e.target.files[0]] })
								}}
							/>
						))}
						<S.FileAddWrap onClick={() => setFileInput([...fileInput, ''])}>
							<S.FileAddButton>+</S.FileAddButton>
							<S.FileAddText>사진 더 선택하기</S.FileAddText>
						</S.FileAddWrap>
						<S.DocsNeedFileText>문서에 필요한 사진태그 개수 : {docs.files.length}개</S.DocsNeedFileText>
						<S.AutoCompleteToggleWrap onClick={onClickAutoComplete}>
							<S.AutoCompleteToggleText>자동완성</S.AutoCompleteToggleText>
							<S.AutoCompleteToggleButton color={isOnAutoComplete ? '#274168' : 'white'}>
								<svg width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4.36016 5.38789L9.26016 0.48789C9.44349 0.304557 9.67682 0.212891 9.96016 0.212891C10.2435 0.212891 10.4768 0.304557 10.6602 0.48789C10.8435 0.671224 10.9352 0.904557 10.9352 1.18789C10.9352 1.47122 10.8435 1.70456 10.6602 1.88789L5.06016 7.48789C4.86016 7.68789 4.62682 7.78789 4.36016 7.78789C4.09349 7.78789 3.86016 7.68789 3.66016 7.48789L1.06016 4.88789C0.876823 4.70456 0.785156 4.47122 0.785156 4.18789C0.785156 3.90456 0.876823 3.67122 1.06016 3.48789C1.24349 3.30456 1.47682 3.21289 1.76016 3.21289C2.04349 3.21289 2.27682 3.30456 2.46016 3.48789L4.36016 5.38789Z"
										fill="white"
									/>
								</svg>
							</S.AutoCompleteToggleButton>
						</S.AutoCompleteToggleWrap>
						<S.UpdateTextarea
							ref={textareaRef}
							onKeyDown={(e) => FC.onKeyDownUseTab(e)}
							onChange={(e) => setDocs(isOnAutoComplete ? { ...docs, contents: FC.autoClosingTag(e) } : { ...docs, contents: e.target.value })}
							value={docs.contents}
						/>
						<S.UpdatePreviewText>미리보기</S.UpdatePreviewText>
						<S.UpdatePreview
							dangerouslySetInnerHTML={{
								__html: FC.documentation(docs.contents),
							}}
						/>
						<S.UpdateSubmit>
							<S.UpdateWarn>※ 타인에 대한 조롱 또는 비방, 비난으로 인해 발생하는 문제에 대한 책임은 본인에게 있습니다. 주의해주세요! ※</S.UpdateWarn>
							<S.UpdateButton onClick={onClickUpdateDocs}>문서 업데이트</S.UpdateButton>
						</S.UpdateSubmit>
					</S.DocsContentsWrap>
					<C.SubFooter />
				</C.Board>
				<C.ScrollBtn />
				<C.Aside />
			</S.DocsWrap>
			<C.Footer />
		</>
	)
}

export default Update
