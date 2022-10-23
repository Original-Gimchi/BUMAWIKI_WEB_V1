import {
    Header,
    Footer,
    Aside,
    Board,
    Classification,
    TitleBox,
    TitleLine,
} from 'src/allFiles';
import React from 'react';
import '../style/pages-style/Home.scss';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='home-board-wrap'>
                <Board>
                    <div className='doc-title-box'>
                        <span>부마위키:대문</span>
                    </div>
                    <div className='classif-box'>
                        <Classification>부마위키</Classification>
                    </div>
                    <div className='line' />
                    <div className='home-title-box'>
                        <span className='home-title-text'>여러분이 가꾸어 나가는 <span style={{ color: '#274168' }}>역사의 고서</span></span>
                        <span className='home-subtitle-text'><span style={{ color: '#274168' }}>부마위키</span>에 오신 것을 환영합니다!</span>
                        <span className='home-title-content-text'>
                            <span style={{ color: '#274168' }}>부마위키</span>는 부산소마고 학생이라면 누구나 기여할 수 있는 위키입니다.
                            <br />
                            검증되지 않았거나 편향된 내용이 있을 수 있습니다.
                        </span>
                    </div>
                    <div className='line' />
                    <TitleBox />
                    <div className='summary-wrap'>
                        <TitleLine>개요</TitleLine>
                        <p className='summary-content'>
                            <span>
                                환영합니다! 창의와 성실로 꿈을 펼치는 부산소프트웨어마이스터고등학교입니다.<br />
                                부산소프트웨어마이스터고등학교 학생이라면 누구나 문서를 편집하고 작성할 수 있습니다.<br />
                                <br />
                                사실에 근거하고 남을 비방하거나 칭찬하지 않는 선에서 자유롭게 문서를 편집할 수 있습니다.<br />
                                문의 및 문서삭제는 <span style={{ color: 'blue', fontWeight: 400 }}>boomawiki@gmail.com</span>으로 요청하실 수 있습니다.<br />
                                <br />
                                <span style={{ fontWeight: 800 }}>
                                    교내의 모든 유/무선 네트워크 정보는 국가정보원 『국가·공공기관의 무선망 구축 보안 가이드라인, 국가정보보안 기본지침』 과,<br />
                                    교육부 『정보보안기본지침』에 따라 대외비로 관리되고 있으니 절대로 기재해서는 안 됩니다.
                                </span>
                            </span>
                        </p>
                        <div className='summary-video'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/DIvVZouIVpQ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div>
                    <div className='department-wrap'>
                        <TitleLine>학과</TitleLine>
                        <p className='department-description'><span>1학년때에는 공통이며, 2학년 때 소프트웨어개발과 32명, 임베디드소프트웨어과 32명으로 나뉘게 된다.</span></p>
                        <span className='department'>소프트웨어개발과</span>
                        <p className='department-description' style={{ marginTop: '20px' }}>
                            <span>SW구조에 대한 이해를 바탕으로 다양한 SW개발 도구 및 설계 방법을 학습함으로써 SW분석, 설계, 구현, 시험, 유지 보수 등의<br /> 업무를 능동적으로 수행할 수 있는 진보적이고 창의적인 SW 개발자를 양성한다.</span>
                        </p>
                        <span className='department'>임베디드소프트웨어과</span>
                        <p className='department-description' style={{ marginTop: '20px' }}>
                            <span>전자기기 및 산업용 기기의 HW와 SW에 대한 이해를 바탕으로 제조업 하드웨어를 제어하는 펌웨어 개발, 시험, 유지 보수를<br /> 능동적으로 수행할 수 있는 시스템 SW엔지니어 및 응용 SW엔지니어를 양성한다.</span>
                        </p>
                    </div>
                    <div className='song-wrap'>
                        <TitleLine>교가</TitleLine>
                        <p className='song-description'>
                            <span>옛 가야 푸른 정기 서려도는 낙동강 구비<br />
                                새 천년 조국 빛낼 배움터 솟았네<br />
                                저마다 가슴가슴 큰 희망 품어 안고<br />
                                창의와 성실로 진리를 탐구하는<br />
                                우리는 모두 하나 힘 모아 전진하세<br />
                                영원토록 길이 빛날 부산소프트웨어마이스터고</span>
                        </p>
                    </div>
                    <div className='history-wrap'>
                        <TitleLine>학교 연혁</TitleLine>
                        <div className='history-description'>
                            <div className='titleBox-wrap'>
                                <div className='table-wrap' style={{ marginTop: '-4px', borderTop: '2px solid #ccc' }}>
                                    <div className='table-name'>
                                        <span>날짜</span>
                                    </div>
                                    <div className='table-content' style={{ backgroundColor: '#274168', color: 'white', borderLeft: '2px solid #ccc' }}>
                                        <span>연혁</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2021.03.01</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>부산소프트웨어마이스터고등학교 개교</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2021.03.01</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>제22대 윤혜정 교장 취임</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2020.02.11</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>제48회 졸업식(57명), 졸업생 총 9,800명</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2019.09.11</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>제21대 김은수 교장 취임</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2010.12.31</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>학교평가 최우수학교 선정(교육과학기술부장관상)</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2010.04.14</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>부산광역시교육청 우수특성화고로 선정</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2006.12.20</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>전국 100대 교육과정 우수학교 선정</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2005.12.20</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>학교현장 평가 최우수학교 선정</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2002.12.20</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>실험실습 최우수 학교로 교육감상 수상</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>2000.03.07</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>부산산업과학고등학교 개교</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>1992.03.01</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>부산서여자상업고등학교로 교명 변경</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>1977.03.01</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>김해여자상업고등학교로 교명 변경</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>1974.03.01</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>김해상업고등학교로 교명 변경</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-name'>
                                        <span>1970.03.26</span>
                                    </div>
                                    <div className='table-content'>
                                        <span>가락종합고등학교 개교</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bus-wrap'>
                        <TitleLine>운행 버스</TitleLine>
                        <div className='bus-content'>
                            <p>세 노선 다 배차간격이 길어 이용하기 어려운 편이다. <br />심지어 김해 4번과 강서2번, 강서15-1번은 일 8회만 운행한다.<br />그래서 기숙사 입소, 퇴소 날에는 학교에서 셔틀버스를 운행한다.</p>
                        </div>
                        <div className='bus-description'>
                            <div className='titleBox-wrap'>
                                <div className='table-wrap' style={{ marginTop: '-4px', borderTop: '2px solid #ccc' }}>
                                    <div className='table-content'>
                                        <span>부산산업과학고교 / 부산소프트웨어마이스터고교</span>
                                    </div>
                                    <div className='table-name'>
                                        <span>4, 강서 7-2</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px' }}>
                                    <div className='table-content'>
                                        <span>부산산업과학고등학교</span>
                                    </div>
                                    <div className='table-name'>
                                        <span>강서 2</span>
                                    </div>
                                </div>
                                <div className='table-wrap' style={{ marginTop: '-4px', marginBottom: '80px' }}>
                                    <div className='table-content'>
                                        <span>덕포마을</span>
                                    </div>
                                    <div className='table-name'>
                                        <span>강서 15-1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='line' />
                    <div className='notice-wrap'>
                        <svg className='notice-logo' width="130" height="92" viewBox="0 0 130 92" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                            <rect width="170" height="117.9811" fill="url(#pattern0)" />
                            <defs>
                                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                    <use xlinkHref="#image0_28_15" transform="translate(-0.000589625) scale(0.00176887 0.0025)" />
                                </pattern>
                                <image id="image0_28_15" width="566" height="400" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjYAAAGQCAYAAAC9GypbAAAgAElEQVR4Xu3djZLbNrIG0Pjuy+wm7/8osfMysW9xHDqyLIlAo/mjxnHV1m7tUCT6NER8A/3Mp9/8I0CAAAECBAgUEfhUpA5lECBAgAABAgR+E2xMAgIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBAgQKCMgGBTppUKIUCAAAECBAQbc4AAAQIECBAoIyDYlGmlQggQIECAAAHBxhwgQIAAAQIEyggINmVaqRACBAgQIEBAsDEHCBAgQIAAgTICgk2ZViqEAAECBAgQEGzMAQIECBBIE/jjjz++LSf79u3jvz7+ffr0fan5888/rTlp0k70TMAkMzcIECBAICywBJklxKz/eXWiNeAs//3582frT1jdA1/OMzwECBCoJnC72N7vHtzuICwL7PIfOwn9M2Ax/vr16087Mz1nWe0FnB41x7YISMwtSo4hQOAtBH7//fcfuwc9A14XWSFnW20NjUuoyfi3mP/f//2fcJmB6RwfAoKNiUCAwNsLRAPNfeF2EV5PhdFdmldnX8KN3Zu3fypeooDpg836RreP7eoXLbmFsm19iblrEAR+22uhtYvw6+TKCo+vpu3i/uXLl+nXJU/tMYFpJ9CPd+4H/FY0ASeA5yEEkgT2CjXr8ISbfxu1hJqsl5622i/cbAn5+ZbAdMFmJND8sm39z/8h4GxNMz8nkCuwd6gRbv7t11HWtzPEy1K5z5fZzjZVsPl409sOHV4QhZsdYJ2SwAOBoxfamXdujrYWbjzlMwSmCDaZuzTP0IWbjOnoHAReC5y10M4abv73v/99fMrsjH+zmp9hXe2a5YPNEaHmx7a1nZtqzw/1XEzg7IV2pje2LvfOv//++9QZ4CWpU/nf9uKlg82RoUa4edvngIG/icAVFtr//Oc/07zsfGaIvJ2SM5m/yVPx8sMsH2zO2ET1stTl570BvqHAFRbaWT6xc4UQuU5RuzZv+GQ9echlg81ebxRu7Zdw0yrlOALbAldaaGfYQTjy491b3Z8lTG45+Hm7QNlg8/s/f2G2nSL3SMEm19PZ5haw0B7b/5Hdsftvb+75I5nPqpwhTB7b4dpXKxlsRndrblFGXsoSbmo/eVR3nEDGQns72pa/RP2suhl2EKLer2xGPtHm5ajjnmsVrlQy2ER3ax59o/DIG5AFmwpPETVcQeC///1v6HeMZx8ZHllkF4/qOwgR75bAF915E2yu8Cx8nzGUCzaR3ZqWP5EQDTif//yznPH7TG8jrSAQfX9Ny/egRHcmBJtfZ1Zr+IiYt4SmCnNdDTkC5Rbd3mDTu6uy9/lz2uosBOoIRINNS/iInrt1EX/HLkRNWrwXD8HmHWfFe41ZsOn8Uj3B5r0muNG+v0Dk5Yue3/AjC61g8+u8+uuvv5rWk4h3Tz/ff8arYFSgaSKOXuTIx/cEj97dmrWOI65xpJlrEbiygGBzbHeiOzatYU+wObafM16tXLDpeeOwYDPjlFfzuwnsHWwib5RtXcTfzXodb8SkZVdl79D0rt7Z4/7xntAXf+dr6VfVP948dbAZeWNva4CKhqfsie58BN5VIBJsllpbwsee535X72XckV2V5XE+7n1e1yPfF7R+51C1kCPYBOahl6ICaB5CICgQ/S1/61NRIx/5bn2jbLDk0x8WDTZruFlC5e1uwBIgR747qLr3aMNHfZ/1bXRcZz1+6mAT3U0RbM6arq47q0DkpZFXN+uRULOct/pCG93Jup2fS7Bc/i2BZuRfy0tcI+d/58eOzuNHtbfsdF7drFywOSJ0HHGNq08c4yNwpMDIDsIacG4X2pHFdoaFNrpLtsecqLDQ7uGSET6fjWtrt3OPejLPOXWw+bjh+bh35nxyLgK7COx5E+8d8JEL7fom0NsxHvWGz9Ew2ev67Pjqu2MRpyN6887hRrD5Z1a13Cx6dmrWydobnCKT/P4xj26G98e01JsxFucgkCFwpR2EvRba2zd/LmZbu0rrGz+XYz9//px+L7+C+Qy7Y73PjyNCzY/169Onjzfhv9t6kf5k6G1S9vHR8LGM41XzIuf9uOEc9CcVIn/yoeVPSWT356zz3S8ar7Zgj/yEwPqmvxaXZVx7LGAt177CMUfe0F/Njy9fvqTdNyOfZHk1tuxF6GzzvULkFeZzZAxn7Fy+Y7hMe4JGmrTXY6Ih5H6hv935iLz97YjdmkigeeR+xFj36nfLeXtvCEe83NA7pqXOI8bV4nnGMVfYQchaaDMDzX0vMl9C2OPNqa1zZ+a5/sjozPn/br0QbFqfZYHj9gwLWYHmtqzKOzi9v3ke8VtK75hGg82ei2ng6fHTQ1q/TyMSBkfHtj4+6+ae8dHclpqyAs4ZC+oRz78WwysdE7lfZI4/K9Rnjunp7uURF+m9xqv3iLS+1hfdtekd6yvY1rH2XnPv2vYMZL21Zh0f+bjw3k/kyI1qZHGNXC/Lv/U8LQvaGXW0jKulxqPHnhVujgyUWWNu6ce7HHNGuHy0E5j5Muye9qfv2ERe7rkd9LPwsPfiv9WUvcLBUXXtNf4tt71+PnuwucKNsbW3W4Hy6JdHMhbao8d8bz0SiNdzHRFuMqxb59k7HXd0IH5ms/XcvIrpacEm66WUVy+fHBUCfkm2nR8hb50MR9dTKdxEgk3GYvCqt5GbVXRMRyxKrfN467iWGo8KChkL7VFjzXDdOseetbT0fWt8FX9+pV9KsnYu9+7TKcFmjwX62SK8x7VeNWWvMHB0HWuNe9Wz98S+P79g8/u3r1+/Hs0eul7rArfnIrsMvFKoWRvRavuqcdnu6/urZv7E3yvv0V9Kbr8WYOTPWqzPiXd4OerQYJO1S/NsEpwdbvYMAYJNaI388aBIsNn7t5PImKIL0+jNcUy/79G9Ne5RW+8YnlUY2ZXr0+o/OqO2zHCTMZ5+hfd5xMgcemQ72rt3eDnqsGCzd6jZ2mHYOxhUDDVbpu9za/jtt0iI2DPYRLeXo4vAHov/Xv2P1Dhy87+vI3L9RxZXNc/YiVrqzahvz+fYXvPz6PNG5/areTwSbrKeH3s6HhJsjgo1WwvxnuFmz2Dz+x9/RL5GJ3XeHPVFg6mDvjlZJNgsD9/rt5M9blZ7bmfv1ZdH543cOEdu1LdjyFpos8azl3tGndFwfltTpNd7mVz1vJF7V0t/o/17h54dFmyOXplfvSy1TODs8ey18O8ZxnqeyHsGt55xRI+N3ByWa2X9druOe3TBi95UMn67jtr3Pi5aYzQs3o4vK8hmjKXXrff4qPPtXP777797L/vT8VneQ4O48IOj4aPVNTJPW0LT2aS7B5szF+ZXi3H2LtJeC3/U79GnxUZq3qu+o54A0WDzYxfw06ePkDPyb/3bP1t/A+jVNaKL0QzBJqPGv/76a6zJv/32W3QxGplbkceOLlAZdbYuwJH6Kjwmatw6jwWbwCyJLsqBSz18SOtivC74tyfp3dFpvVZPbVG/rbHsdd6e2o4+djTYHD3eZ9cTbJ534irBJmMcR8236HxaxhdddPfYITvK6+jrRI1bA6NgE+hodAENXOrpQ7YW+VfX6h3/yLUejaP3+ss5Wsew57kz+5d1LsGm3se97+dGdBG4PU/rb7qv5mVksbg/37o7uASP5d/6RaQfz9tv3z7+8vfIzt96vZFdmwzv1gU46z7wbueJGrcE1ui5R+bMUf7D267PBhpZOG/PdT+w3h2UH0/cwS/L66mjNVS0Nrfn2j2hZr3+3udvrfOI4wQbwaZlno0Gm+hi8dO979Onjz92uvUnWUbfr7VeMxouMmqNXrull1WOidy7Wt4bGN1ZbAlNZ9tfLtg8em/IgnTW+0N6Fn/B5uzp/Pz6kZvDFauJ3lSiN7Hb3+w/wvPG+4ze/X1Eo8Fm1DnS39Edosg113uyNw/vf5eI9vdVuBmZp9H5sr/Uv1e4VLBpCQY9QePdd216a418MuuIaxw5oZ9dS7CJ79i0/PZ36z66kxC9cY7crNfxjwab6CK0XD9a9/LYketGX1qwY3PMnW20t4++eXjkZcx32GXbLdj0fvdKS6g56yWUnsW/p46tp8UR1+25xjLeSHjaqvOInws2sWATXfRGFtvoAn+FYBOdZ73h8f45MxIyoj0eueboy2BH3DOuco2MeZ1VS3SuZF2/9Ty7BJvexTISBnquETn//W+gPe/xyVr8j6ix5xqCTevTar/jjl70o9dbBKI35Og1o9e77dbIjs3IQh+t+XbsI7/ZR+oeqVewab9HjO6Atl9p+8iMebp9lfEjBJtGw54AMBqkojtTkUDVU5dg0zhZdjwsemOJLvrR6wk2fZMgY3s/2uNlpJHrXzHYfNzPkj4x1tfBvqPXl4e23iC+nnUktPaN7PnR77Jbs1RwiWDzDgtyTwA4K9j0XrenpnWytD4Rs55MWeeJvkSQdf2s80SDRnTRi15PsOnreGTH5P4KI0GjQrC5wuLf0/Welx9HetszplfHjtwLssbQep7Tg03vYnxbWM/7eCLh6fZaZ4SAva+59/lbJ+ERxwk2sffYjNzMjg5T0evdzr+RgBFdfDJ/E47O83cPNlH7I+49r67R0/uM+R2tt2ec0WtkPu70YLMUEwkdvYty5BqPfiNqfa/NSGBbr9tbY8+uyp7nzpygWeeK3vCzrp91nmjQiN4Uo9ezY9PX8ZFAdXu/iH78+t2Dzbvt1qw96w0MZ9UZmR99z4Dcoy8RbCIhoGdhjpz/EfMZ1+zZlfrxZNn4UsKeOm4dshxzp3Db2UaCzfp6+NZ3uGyN5PY7XqIft4wGDcFmqzvffz4SMEZ2DTIWjmiPl7oj1x+pd+1G5LqPOnnWgt82q14f1TPnzngjcfSek2ETPcfbBpueBT9zQT76uiMhZJkUt++JWc61/H+tu05VQs1SRzTY9P5G1fJEHFkQojeZ6KIXvZ4dm5aZ8O8xI87rWUYW957FNWOHSLD5t/e99keGm4x52fdMyDl6l2DzcVP7ZxFtHWZP+Ohd7HvOvTXenmtnXLfneltjH/l5Ri0j1x99bCTY9Ly5r3d80UUoeqMRbNo6FPVdzx6ZZ8tjRwP0SFiOXnvkmoJNPNgsjzwi3Iw+F9qecfsctVuw6V2Qn/0phfuye8/7cdMY/HtRt2Povf7R7+3ZZ5rE3ge111gi540sONEbfsv4jg4aR1/vXXdsnr3cuP7/y3+/+mRgNLAuXiMLych1o/NcsGl5pm8f07tjc7tj9vXr15Q/hno7yj1/odvWyDniMsFmLedVwOkNFbfnzPyYcs84MkJVz/VypsXPZ8moYY9x9ZwzEmxGFpqtsUUXheiYBJutjrT9fOumH3Ue2cEYCTUjgSo6h2+lvcdm7H1di+Vo/6uFmnUzo+0ZHTiq9+Won4Dvrhd5X8haYGaoWc7ZEzSyQkHPNQOtevqQrPFnjilyLsHGx70j8+bRY17tcIwGm/WN6p8/f978pTPr5YhouBBscmZUdMfm9uoZ4WYrtOdUe8xZNp88I8M4azG+D0hnBpuscHWGZevLgyNz5KjHRoJNdIu+paboomDH5rnuaKho6VvLzsrei8zHveCfb9eNfrpurWNkjkfnsB2bn2daRrDJmPvRgNvzvDnq2NLBZs/dhp6gkTWOnmtmTKCscWeMZfQcVws20RuRYHONYPOqD9HePtsd+vjl6NP3W3X2nwuIzqdlLILN6F3p++Mzgk1GLzLGkSMyfpZdg806+aMvI42Wt+fC3BMyMsfRc90Rv8wxj4wj67GRYLNce6/fYqK/1UcXouhiG73eYnf0NaPXi8yxVy4Zi0xkTL2PGX3pIaPOrOfXkb3vdd46PiNQjPZiZOduq74zfr57sDkr3ByxMPe8hyhzPHuHm8yxnjGpH10zGmxGb/73Yxl9X0Q0aERv/NHrzRxsltqjwfXI58tIb6+2YzO6sB/pfn8twSZf/5Bgc3S4OWph7gkY2WNarr247rEblj3W/Gnbf8ZosFmvNPqtw+t5Rt8TEV2MBJv+OfPqEVt9uPpCm/EbekaNWTs2a5DOfqkud9Y8Pptgk698aLDZayG+ZTlqUY4Ei4zvtHm0A5Adbo4yzJ/Oz884GmyOHOvIgvrssYJNbge3gs3IjlXuSB+fLSNQXC3YrJWu9+Y9HbPevL2MUbDJ79RhwWbdtdkz3ByxIEcCzY/f+hO/KPBRwMm0PcIyfzoLNoLN10OmVUuwWQZyxZekWse+BXnVYLM17syfj760LNhkduPfcx0abG4TdfYuw3LuvRbjkTBz27a9xvcs5Nz+/73eR411n2n961nt2MS+x2bkJYvooh5deKO7UpE52DrGjIUvMr5njxnp56P7TPSvia/nytg5yvSJnGt03tmxiai/fswpwWav3ZvsxTgr0JwRbh7dhHrDzR4vneVP4bYzCjaxYPPxC8OnT799+fKl614RDTXL9VpDw33nRxeYtpn0/aieMV4l3ET6+MrEjs13nVEHwabnmdd2bNfNqu2UfUdlh4fRcJM9nnuN0fH16f58dM+bnT8WtB1fOhupI/JYwSYebNZw0/oG6tE3cPaEhtu5cGSw6d1pODvcZIeajAV9OUevY+S5v/djBJu9hfvPf3qwuR3yszd99ew0RBfjvQPNWmd0fP2t/fURgk2G4rnneIdFf1To6jVGQ8JZ4SbqudXH0QW9SrAZDdR2bLZmWv/PLxVsng2/N3S0hofe8/bzPn5E6/iyrreepzfYVNq1sWMztmOTPRdfnS+6EI8uMFs1rjtWy/iif6blyHDT83entmp/9HPB5vvLUKN/YfsKwWbpb8Y4IvNoj8e8RbBZtz1bd262gsNZgeasXZuRercs95iUe5xTsBFsWubV+oWMj46NhplH51pC2OhLdlvhcKklc8z317t6sLl/BSDD4vacWR/5zggUGb3IGEfLc+yIY94m2IyGm58m5BGyG9fYOzCMhJn7oe891iPaIdgINi3z7Oj3fGQGnIwdpRaj2x3gq30qKmMHpccg49iMQCHY/NyJssFmfRllLbd1tycyUW8RW6+zV1jIDDRn7TBFerD1mJFP6Wyd+8ifX/VlmkyDM2vMWGQiFuuCvDy299up15ec9t6heYcdm3d8nmfMOcHmjYNN765N5AbT+pg1zNxub/a8hyUz2OwRZqrt2rzjDe/RXIzuKOz9/pPW503LcTMGm1uXj/vIt39/Rbr937efTDs6yFw92GQs7i3zM/sYwSZb9Psnet/qX0942KOwR4Hml5tS44VHw80RgabKrs273vRup1L00zjLOQSbtidlxiLTdqX3PyrjORUN6o/03mmO344/Y85l9CJjHFeZ1W8XbD5u0v/8AcgjEbcCze1YWscXCTZHhpl733f/wr7M9zMcOvc+ffr4krzPnz+Hn6/vdNOffcfmyLk1cq2MxTQz2LzrrmxGoMjoRcY4RuZT5mPDN8rMQfSe66hdm54ws/euzZmBpsquTe88q3S8YNPWzUo397aK40dlLKaCTc7HrDN6UWnuCzYPntfRQLOeqid4vdq1uUKY+emlkELfRBy/nb/nIwWbtr5Vurm3VRw/KmMxFWwEm/gMfP7Itww2Szk94aEVbjTQRHdt7l/iuVqgEW5aZ9B1j8tYhI6qLrrYZYQ3waa9yxlzKtrrR6P0UtTf7c17cGSluT99sMkMM9Fgc9+E1o+Mj8ziyEfUl+tF3hc0Mk6PzRN4hxv/2W+QrnRzz5s5j88k2OQIZ8y5jF5kjCNHZPwsbxtsRndt9go00XAz3sq2Mzyqu/XNzusVhJs266sddfUvL1u/9Tf6DbFn7tgs1176vfUdNK1/SHSdO1vn22OO3Y7x1RvWMxZTOzZeitplDu9x0qPOGXk56ohAs9YfGd8edls1947z6sFm5MvO9vDf65wjfwtofblzr7H1njcaZm6vc0awuXpY7O3D/fGvdtCuFmwy+j/qFXl8xk5JRi8yxhGpf4/HvPWOzQLSs9twxoLcM77sBm8FmpEAdtWPfmc8wbP7sPf5oh+P3ntcR58/Y2HrvblnXPNop97rPZtfGc+1zB2bjPH02mQc3zvnHl0zo/aMcWR4ZJzj7YNNz27DGcGmZ3zZDe35Lbh3nD2W92+G7nlsr8k7vI+kt6aW4zMXiJbrXfGYjJDRe3OfYb69S7BZ5uQ79qN3zgk223efqYLNwnHUTsPRn2xq3Z15NiX2CDavDPYINxm/tWw/Za55hGCT8+3KvYtMlT+u+mpWP3s5KuP5tse8fbcv4uydc4LN9j347YPNUmLPorzHgnrLfGSguW1ez+7M3uGmxWCPPmTcaLefMtc8Yo8F4pqVPh/VGTs2gs3YR4zfdd5+rDnfvn28WXz0Dd6CTf6dRrBJMm1ZzJMu9eMPfGWEmftQ1vNR8/tw0hMwl+tmh5uMhS2rR0efx/ts7NjsNefebcdmL4dnOyVfv34dCjeCTX7HSgSbhaXnTbpZC+oZYWapNTvQ3E6rHsc1nCz/3ROI1utl9WE9n2AT/1tS+beW48+Y0f/eRcaOzZw7Nj/dM3///dsSbqL/euecl6K2pcsEm57dgtEF9YxAs2eYGdm12Z5iz48Y7cP9mTMWtpF6znysHRs7NnvNPzs2r2VHXwIXbPJn7pTBJvoySOVAs06tnoCYMR0zw41gY8dm5DfnZT73LjJ2bOzYLPNmZB70zjk7NtsrT5lgs5Tasyj3LKhHBpq1ZUd9euvZkyTy0tL2dPv1iJ4+bJ1/9DenrfNf+ed2bOzY7DU/7dhsywo220ZHHjFtsFmQt8JDT1DKblrmgt87tiPrzqxz5mDzrp8u6Z2br47P2LHr/e35Hb83pdf8nb7Hpre2rOMFmyzJnPOUCjYLSc+bXx8tqmfszjxqZeaC3ztVjgo2e9Q4w0LzqJ+CzTk7Nhlhqvf5efTxz+ZWxi8SVeatYHP0rHx9vXLBpmdRvl1Y9w40t9CtL/PssfC/mg57G6zXHv0ywa0a/v577HX/az1Ft0cz8hext8/+PkdkhIzeHZvlOTP6cd8rC796iVOw+bdzgs21ZvHUwWZpxe+/ILQAAA1/SURBVArQGjZ62/doEW/dVToq2FQINLd9yfjm0du/cDz6BVy9c6b1+HWMy+Jz1KfmWsd2xnFnBJu1zvWve0fqXufXyDxb/yBq5PrPHrOc89W8EmwEm8z5lnmucsFmwenZtcnEvD3Xq12JnvFtvQ9oZPxHBJo9d2e2al/r2zru/uf3N/P1W0ZHPnGzLjy3gal3XFvjHD3fuz/+zGAzajcSEpY5dUa4HRnz6uWlqP5P4j2aaxm96N2tHJ3zez5esEnUbV3Ee4JN9q7NEWHmdies0k7CyMLpU0uJT7Qnpxrpz3rKM2/u0feHnfVSZMZiWiXYRHu3zLuMOZfRi4xx7P8sb7tCyWBz9K5Na6C5bUlruMkKNkcFmjXUVAo0t32L3sCq3MDbbivnHDVrsDkrNGcsplWeF9H7QlYozeiFYHPOfavrqq3BoeukdwdHAs16ip7xjYSbIwPNWtvIeEf6ccRjozewKjfwI4yj1xBsonKxx2UsplWeF9G5J9jE5t7Wo8ru2CyFt75Jdwvp/ucjgeaoXZszAs0MwSZ6A6tyA+99rhx5fLQ3t2M887fWaGi2Y3PkLHt+rd7+Zb43KiNknjn3sztYOtj07IpswWaFmUiwaX1558wwc1uXHZtfZ5Ngs/UMG//5rMEm67f+3g5kLKbVnhfrp+NefcJt/QDB5895fwIloxeCTe8z4MTjR3dt9gg0txyt43sVFq4SaGYIN72/la0m1W7gJz6ln15asDm2KxmLqedFTs8yeiHY5PTikLNEd232DjRr8T3ju//o9xGBJvLFgq07TIdMgOSLCDbJoImnE2wSMRtOlbGYCjYN0A2HjPbirF2/htJCh5R+KSoSHo4KNNGxLZ822jvQPDKIXHPP7+AJzfaEB0W/YdQNPAF/4xSCzf7Gt1cYXUyXc3le5PRstBeCTU4fDj1Ly67I0YHm/gax1zcf90JvveTVM86K77URbHpn1HHHCzbHWS9XGl1MBZvcfkXvTR877J8+/fbly5cyGx1lCtmaIs/CzRUW35bgtVXfyM97Ql3PWK9gO+Ly6LHRm4ffTLM78ev5MhbaM99nEH2Z88xFKfp8WLvneZH3vIjOn2UEZ32yLq/6n880TbC5feln/d9X+hK5nsCQNRl6As2t38y7NtEbuRt41qx9fp5Zg82Zi9LIYrp08swguf+MPPYKIzuW1e5P0wWbY6da+9WODDaRQCPYfBcQbNrn9NFHjgabM3c+FqtoSHjXYHO299Hz84jr9f4B4PVv2GV+9PyIOreuIdhsCR348z3DzUiYuSfoHWell6QEmwOfEIFLRcPBcqmzF9ro2M8MNsu9YPnjsL1/mTzzy+kC02SKh6wf+HhW7JVeschuiGCTLTpwvt7A0HKpzEBj18aOTcucO/OY6Hb8FRbadww2P90TvrW9SL1YV15Uz5z/rv1dQLC52Exo/cK+rWHvEWhur9k7ziof/Y4uPtVew96af2f+/OMXhG/fftlFWHcV1m9+Xce4bsefvdhGQ9mZOzZn9tm1CTwTEGwuNjdGd22Oetmnd5xHjWvvdkaCzdkvcext4vw5ApH3CJlbOfbOUktAsLlYP3sDw+2225G/cfaOs0qwiSw+fqO+2JPswsPp2bW5wstnF6Y0tIkFBJsLNr81NOz9ctMWTc/LUVWCzWLS+smDqp842JoXfj4msL6U9uos3qcyZuzRtQUEmwv2dyvYnB1oVrKtcZ61m3RUS2f+1MFRxq5DgACBXgHBplfsoOMfhYar7Xq8CjZXCV8HtctlCBAgQOAiAoLNRRpxP4z73YAj3z/TQ3IfbgSaHj3HEiBAgEC2gGCTLTrh+W5D2FUD2IRtUTIBAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE0BwaZmX1VFgAABAgSmFBBspmy7ogkQIECAQE2B/wefJ7X5XurHIgAAAABJRU5ErkJggg==" />
                            </defs>
                        </svg>
                        <p className='notice-description'>
                            <span>
                                부마위키는 공식 역사서 및 백과산전이 아니며 검증되지 않았거나, 편향적이거나, 잘못된 서술이 있을 수 있습니다.<br />
                                부마위키는 부마위키입니다. 여러분이 직접 문서를 고칠 수 있으며, 다른 사람의 의견을 원할 경우 직접 요청할 수 있습니다.
                            </span>
                        </p>
                    </div>
                </Board>
                <Aside />
            </div>
            <Footer />
        </div>
    );
};

export default Home;