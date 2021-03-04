import React,{useState } from "react";
import AppLayout from "../components/AppLayout";
import Header from "../include/common/header";
import NewsList from "../components/NewsList";
import {StyledLink } from "../include/common/style";


const About = (props) => {
    const [language,setLanguage] = useState(props.language);
    const [apiUrl] = useState(props.apiUrl);

    const toggle = e => {
        props.toggle(e);
        setLanguage(e);
    }
    if(language==='ko'){
        return (
            <React.Fragment>
            <Header language={language} toggle={e => toggle(e)}/>
            <AppLayout page="about">
                <div id="fullpage" className="time-none">
                <div id="build" className="section build">
                    <div className="section-wrap">
                        <div className="cont-wrap">
                            <div className="title-box">
                                <h2><span className="subtitle">BUILD</span>스마트 모빌리티<br className="for-mobile"/> 플랫폼을 구축합니다.</h2>
                                <p className="text">이동수단에서 수집되는 정보를 이용해<br className="for-mobile"/> 스마트한 모빌리티 생활 문화를 실현할 수 있습니다.</p>
                            </div>
                            <div className="swiper-container mobile-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="circle gray data">
                                            <div className="gray-wrap">
                                                <div className="title">
                                                    빅데이터 제공 <strong>BIG DATA</strong>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white detail">
                                                        <strong>자세히</strong>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cap">
                                                <div className="text-box">
                                                    <div className="title">빅데이터 제공</div>
                                                    <div className="item-list">
                                                        <div className="text-center">
                                                            OPEN<strong>API</strong>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <dl>
                                                                    <dt>기관</dt>
                                                                    <dd>자동차 관련 법 개정<br/>사회안전망 구축</dd>
                                                                </dl>
                                                            </li>
                                                            <li>
                                                                <dl>
                                                                    <dt>기업</dt>
                                                                    <dd>차량관리기술<br/>자율주행기술</dd>
                                                                </dl>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white close">
                                                        <strong>닫기</strong>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide initialslide">
                                        <div className="circle tmt">
                                            <div className="text-box">
                                                <div className="title">
                                                    튠잇 모빌리티 플랫폼 <strong>TMP</strong>
                                                </div>
                                                <div className="variety">
                                                    <span>제품</span>
                                                    <span>솔루션</span>
                                                    <span>데이터</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="circle gray service">
                                            <div className="gray-wrap">
                                                <div className="title">
                                                서비스 제공<strong>SERVICE</strong>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white detail">
                                                        <strong>자세히</strong>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cap">
                                                <div className="text-box">
                                                    <div className="title">서비스 제공</div>
                                                    <div className="item-list">
                                                        <ul>
                                                            <li>카 IOT</li>
                                                            <li>차공유</li>
                                                            <li>정비소</li>
                                                            <li>보험</li>
                                                            <li>주유소</li>
                                                            <li>세차장</li>
                                                            <li>소모품</li>
                                                            <li>딜리<br/>버리</li>
                                                            <li>응급<br/>진료</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white close">
                                                        <strong>닫기</strong>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text center medium">이동수단과 사용자를 통해 생산되는 상태정보, 주행정보를 이용하여 인프라 구축과 기술 개발의 기회를 제공합니다.<br className="for-pc"/> 이동수단을 이용하는 사용자에게 맞춤 정보와 서비스를 추천하여 컨시어지 서비스를 제공합니다.</p>
                        </div>
                    </div>
                </div>
                <div id="make" className="section make">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box">
                                    <h2><span className="subtitle">MAKE</span>모빌리티 전용 제품과<br className="for-mobile"/> 솔루션을 개발합니다.</h2>
                                    <p className="text">차량제어 제품, 솔루션을 공급하여 다양한 데이터를<br className="for-mobile"/> 수집하기 위한 기반을 구축하고 있습니다.</p>
                                </div>
                                <div className="slider-area">
                                    <div className="swiper-container mobile-slider info-cont">
                                        <ul className="swiper-wrapper item-list type01">
                                            <li className="swiper-slide">
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_make_solution.png" alt="SOLUTION 모빌리티 솔루션"/>
                                                </div>
                                                <dl>
                                                    <dt>
                                                        <span>PRODUCT</span>모빌리티 제품
                                                    </dt>
                                                    <dd>
                                                        차량제어, 통신제어 핵심기술 개발<br/> B2B, B2C 디지털 차키 생산 및 유통
                                                    </dd>
                                                </dl>
                                            </li>
                                            <li className="swiper-slide">
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_make_product.png" alt="PRODUCT 모빌리티 솔루션"/>
                                                </div>
                                                <dl>
                                                    <dt>
                                                        <span>SOLUTION</span>모빌리티 솔루션
                                                    </dt>
                                                    <dd>
                                                        차량제어 핵심모듈 생산 및 공급<br/> HDK, SDK 개발 및 배포
                                                    </dd>
                                                </dl>
                                            </li>
                                            <li className="swiper-slide">
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_make_data.png" alt="DATA 모빌리티 데이터"/>
                                                </div>
                                                <dl>
                                                    <dt>
                                                        <span>DATA</span>모빌리티 데이터
                                                    </dt>
                                                    <dd>
                                                        모빌리티 정보 수집 및 분석기술 개발<br/> 데이터 거래 및 인공지능 서비스 구축
                                                    </dd>
                                                </dl>
                                            </li>
                                        </ul>
                                        <div className="swiper-pagination"></div>
                                        <div className="swiper-scrollbar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div id="think" className="section think">
                    <div className="section-wrap">
                        <div className="cont-wrap">
                            <div className="title-box">
                                <h2><span className="subtitle">THINK</span>모빌리티 플랫폼을<br className="for-mobile"/> 생각하고 고민합니다.</h2>
                                <p className="text">함께 일하고 싶은 파트너가 되기 위해<br className="for-mobile"/> 노력하고 있습니다.</p>
                            </div>
                            <div className="swiper-container mobile-slider info-cont">
                                <ul className="swiper-wrapper item-list type01">
                                    <li className="swiper-slide">
                                        <div className="thumbnail">
                                            <img src="../@resource/images/@thumb/thumb_about_think_expert.png" alt="EXPERT 전문가 집단"/>
                                        </div>
                                        <dl>
                                            <dt>
                                                <span>EXPERT</span>전문가 집단
                                            </dt>
                                            <dd>
                                                10년 이상 자동차 생산부터 부품까지<br className="for-mobile"/> 참여한 전문 인력들이<br className="for-pc"/> 모여 모빌리티<br className="for-mobile"/> 기술 개발에 매진하고 있습니다.
                                            </dd>
                                        </dl>
                                    </li>
                                    <li className="swiper-slide">
                                        <div className="thumbnail">
                                            <img src="../@resource/images/@thumb/thumb_about_think_passion.png" alt="PASSION 도전적인 사람들"/>
                                        </div>
                                        <dl>
                                            <dt>
                                                <span>PASSION</span>도전적인 사람들
                                            </dt>
                                            <dd>
                                                열정을 갖고 다양한 프로젝트를<br className="for-mobile"/> 시도하며 그 결과를<br className="for-pc"/> 바탕으로 혁신적인<br className="for-mobile"/> 모빌리티 제품을 개발하고 있습니다.
                                            </dd>
                                        </dl>
                                    </li>
                                    <li className="swiper-slide">
                                        <div className="thumbnail">
                                            <img src="../@resource/images/@thumb/thumb_about_think_partnership.png" alt="PARTNER SHIP 협력하는 사람들"/>
                                        </div>
                                        <dl>
                                            <dt>
                                                <span>PARTNER SHIP</span>협력하는 사람들
                                            </dt>
                                            <dd>
                                                긍정적이고 유연한 자세로 여러 분야에서<br className="for-mobile"/> 다양한 팀과 협업을<br className="for-pc"/> 추진하여 모빌리티<br className="for-mobile"/> 플랫폼 구축을 준비하고 있습니다.
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="history" className="section history">
                    <div className="section-wrap">
                        <div className="title-box">
                            <h2><span className="subtitle">HISTORY</span>작지만 신뢰할 수 있는 파트너</h2>
                            <p className="text">모빌리티 분야의 최고 파트너가 되기 위한<br className="for-mobile"/> 길을 만들어 가고 있습니다.</p>
                        </div>
                        <div className="slider-area">
                            <div className="swiper-container info-cont all-slider scrolling-area-x">
                                <div className="swiper-wrapper item-list type02">
                                <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">09</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202009.png" alt="2020년 09월 기아자동차 카니발 리무진 스마트 시트 출시"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>기아자동차</dt>
                                                <dd>카니발 리무진<br/> 스마트 시트 출시</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">07</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202007.png" alt="2020년 07월 쎄미시스코 전기자동차 전용 디지털 차키 공급"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>쎄미시스코</dt>
                                                <dd>전기자동차 전용<br/> 디지털 차키 공급</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">06</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202006.png" alt="2020년 09월 기아자동차 오토큐 오토큐 앱키 전용 상품 (아차키) 런칭"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>기아자동차 오토큐</dt>
                                                <dd>오토큐 앱키 전용 상품<br/> (아차키) 런칭</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">06</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202006_02.png" alt="2020년 06월 GS 25 편의점 전용 차량 용품 (아차키) 런칭"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>GS 25</dt>
                                                <dd>편의점 전용 차량 용품<br/> (아차키) 런칭</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">10</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201910.png" alt="2019년 10월 마카롱 스마트 택시 교대 시스템 공급"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>마카롱</dt>
                                                <dd>스마트 택시<br/> 교대 시스템 공급</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">10</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201910_02.png" alt="2019년 10월 뿅카 비대면 디지털 차키 공유 시스템 공급"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>뿅카</dt>
                                                <dd>비대면 디지털 차키<br/> 공유 시스템 공급</dd>
                                            </dl>
                                        </div>
        
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">08</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201908.png" alt="2019년 8월 현대자동차 베뉴 TUIX IoT 출시"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>현대자동차</dt>
                                                <dd>베뉴 TUIX IoT 출시</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">07</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201907.png" alt="2019년 8월 현대자동차 베뉴 TUIX IoT 출시"/>
                                                </div>
                                            </div>
                                            <div>
                                                <p>아차키 출시</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">05</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201905.png" alt="2019년 5월 퍼스트펭귄 창업 기업 선정"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>퍼스트펭귄</dt>
                                                <dd>창업 기업 선정</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">08</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201904.png" alt="2019년 4월 현대자동차 사내벤처 분사 (HKMC 지분 투자)"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>현대자동차</dt>
                                                <dd>사내벤처 분사<br/>(HKMC 지분 투자)</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">08</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201903.png" alt="2019년 튠잇 법인 설립"/>
                                                </div>
                                            </div>
                                            <div>
                                                <p>튠잇 법인 설립</p>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="peoples" className="section peoples">
                    <div className="section-wrap">
                        <div className="info-cont">
                            <div className="title-box left">
                                <h2><span className="subtitle">PEOPLES</span>최고 <br className="for-pc"/>전문가 <br className="for-pc"/>그룹</h2>
                                <p className="text">모빌리티 산업과 기술을<br/> 잘 아는 멤버들이 튠잇을 만들어 갑니다.</p>
                            </div>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_01.png" alt="송영욱 대표이사"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>송영욱</strong>대표이사</dt>
                                                <dd>DB SW 개발 /<br className="for-pc"/> 자동차 패키지 / HMI / UX <br/>
                                                    서울대 기계항공학 석사 <br/>
                                                    고려대 기계공학 학사</dd>
                                            </dl>
                                            <span className="company">현대자동차</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_02.png" alt="이기창 기술총괄"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>이기창</strong>기술총괄</dt>
                                                <dd>자동차 패키지 /<br className="for-pc"/>
                                                HMI / UX<br/>
                                                부산대 기계과 석사</dd>
                                            </dl>
                                            <span className="company">현대자동차</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_03.png" alt="신형 선행연구총괄"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>신형</strong>선행연구총괄</dt>
                                                <dd>자동차 인테리어 /<br className="for-pc"/>
                                                기구 / 구조 설계<br/>
                                                국민대 자동차학 학사</dd>
                                            </dl>
                                            <span className="company">현대자동차</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_04.png" alt="강문성 마케팅총괄"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>강문성</strong>마케팅총괄</dt>
                                                <dd>전략마케팅 / 상품 기획<br/>인하대 자동화공학 석사</dd>
                                            </dl>
                                            <span className="company">휴맥스 / 아이리버</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_05.png" alt="이희승 자문"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>이희승</strong>자문</dt>
                                                <dd>기술자문<br/>
                                                    임베디드 시스템,<br className="for-pc"/> 전자회로<br/>
                                                    KAIST 전자공학 학석박사</dd>
                                            </dl>
                                            <span className="company">UNIST 디자인공학<br className="for-pc"/>
                                            융합대학원 교수</span>
                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-scrollbar"></div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="news" className="section news">
                    <div className="section-wrap">
                        <div className="title-box">
                            <h2><span className="subtitle">NEWS</span>튠잇 소식</h2>
                            <p className="text">모빌리티 생태계를 위한 튠잇의 활동이 각종 매체에<br className="for-mobile"/> 뉴스로 전파되고 있습니다.</p>
                        </div>
                        <div className="swiper-container info-cont all-slider">
                                <div className="swiper-wrapper item-list">
                                    <NewsList apiUrl={apiUrl} language={language}/>
                            </div>
                            <div className="swiper-scrollbar"></div>
                            <div className="swiper-pagination news-paging"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>    
                        </div>
                    </div>
                </div>

                <div id="aboutLast" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>튠잇은 <br/>
                                    모빌리티의 미래를 <br/>
                                    준비하고 있습니다.</h3>
                                <ul className="explain">
                                    <li>
                                            <StyledLink className="footer-href" data-href="/product" to="/product">
                                                <span className="title">제품 소개</span>
                                            </StyledLink>
                                        <p className="text">튠잇은 신뢰 할 수 있는 제품을 개발합니다.</p>
                                    </li>
                                    <li>
                                            <StyledLink className="footer-href" data-href="/solution" to="/solution">
                                                <span className="title">솔루션 소개</span>
                                            </StyledLink>
                                        <p className="text">튠잇이 제공하는 솔루션을 확인해 보세요.</p>
                                    </li>
                                    <li>
                                            <StyledLink className="footer-href" data-href="/contact" to="/contact">
                                                <span className="title">문의하기</span>
                                            </StyledLink>
                                        <p className="text">튠잇과 함께 일하고 싶다면 연락해 주세요.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer">
                            <h2>주식회사 튠잇</h2>
                            <div className="company-info">
                                <dl className="president">
                                    <dt>대표이사 :</dt>
                                    <dd>송영욱</dd>
                                </dl>
                                <dl className="registration-number">
                                    <dt>사업자등록번호 :</dt>
                                    <dd>603-88-01354</dd>
                                </dl>
                                <dl className="commerce-number">
                                    <dt>통신판매업신고번호 :</dt>
                                    <dd>제2019-성남분당A-0480</dd>
                                </dl>
                                <dl className="address">
                                    <dt>주소 :</dt>
                                    <dd>경기도 성남시 분당구 느티로 51번길 4-11 (정자동)</dd>
                                </dl>
                            </div>
                            <div className="contact-info">
                                <dl className="tel">
                                    <dt>대표전화 :</dt>
                                    <dd><a href="tel:18118136">1811 - 8136</a></dd>
                                </dl>
                                <dl className="email">
                                    <dt>문의메일 :</dt>
                                    <dd><a href="mailto:info@tuneit.io">info@tuneit.io</a></dd>
                                </dl>
                                <span className="copyright">Copyright (C) tuneit corp. All Rights Reserved.</span>
                            </div>
                            {/* <div className="sns-area">
                                <a href="https://www.youtube.com/channel/UCGSuDkzT9eHWLSgfIcV2eUw"  target="_blank" className="youtube" title="유튜브"></a>
                                <a href="https://blog.naver.com/achakey" target="_blank" className="blog" title="블로그"></a>
                                <a href="https://www.facebook.com/아차키-306151156749055/?epa=SEARCH_BOX" target="_blank" className="facebook" title="페이스북"></a>
                                <a href="https://www.instagram.com/achakey.official" target="_blank" className="instagram" title="인스타그램"></a>
                            </div> */}
                        </div>                
                    </div>
                </div>

                <div id="top">
                    <button type="button" className="btn-top" >
                        <span className="blind">상단으로 가기</span>
                    </button>
                </div>
            </AppLayout>

            <div id="popSearch" className="layer-popup pop-view">
                <div className="layer-wrap">
                    <div className="popup-wrap">            
                        <div className="popup-content">
                            <div className="form-wrap">
                                <button type="button" className="pop-close">닫기</button>
                                <div className="form-cont">
                                    <div className="cont-header">
                                        <span className="date">2020.05.07. 12:00 </span>
                                        <span className="subject">ICT 바우처사업에 ‘AI 차량서비스·신약개발’ 등 31개 과제 선정</span>
                                        <span className="text">국내 기업의 정보통신기술(ICT) 개발과 사업화를 지원하는 ‘ICT R&D(연구개발) 혁신 바우처 지원 사업’ 과제 31개가 선정됐다.</span>
                                    </div>
                                    <div className="cont-body scrolling-area-y">
                                        <div className="detail">
                                            <img src="../@resource/images/@thumb/thumb_pop_img.jpg" alt=""/>
                                            <p>
                                                과학기술정보통신부는 튠잇의 ‘능동형 인공지능(AI) 차량관리서비스’, 엘컴텍[037950]의 ‘무인 검사 비행체 충돌 예측 기술 등 31개 과제를 선정하
                                                고, 이들 사업 과제에 총 118억원의 예산을 지원한다고 7일 밝혔다. 31개 과제를 기술 분야별로 분류하면, 소프트웨어·인공지능 분야가 9개(2…
                                                기사 원문 : <a href="">https://www.yna.co.kr/view/AKR20200507053400017?input=1195m</a>
                                                과학기술정보통신부는 튠잇의 ‘능동형 인공지능(AI) 차량관리서비스’, 엘컴텍[037950]의 ‘무인 검사 비행체 충돌 예측 기술 등 31개 과제를 선정하
                                                고, 이들 사업 과제에 총 118억원의 예산을 지원한다고 7일 밝혔다. 31개 과제를 기술 분야별로 분류하면, 소프트웨어·인공지능 분야가 9개(2…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-paging">
                                <ul>
                                    <li>
                                        <span className="sort">이전글</span>
                                        <a href="#" onClick={e => e.preventDefault()} id="prev-article" className="subject">
                                        
                                        </a>
                                    </li>
                                    <li>
                                        <span className="sort">다음글</span>
                                        <a href="#" onClick={e => e.preventDefault()} id="next-article" className="subject">
                                        
                                        </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg"></div>
                </div>
            </div>
            </React.Fragment>
        );
    }else if(language === 'en'){
        return (
            <React.Fragment>
            <Header language={language} toggle={e => toggle(e)}/>
            <AppLayout page="about">
                <div id="fullpage" className="time-none">
                <div id="build" className="section build">
                    <div className="section-wrap">
                        <div className="cont-wrap">
                            <div className="title-box">
                                <h2><span className="subtitle">BUILD</span>Smart mobility platform</h2>
                                <p className="text">We will use the information collected and analyzed by mobility to create a smart mobility life.</p>
                            </div>
                            <div className="swiper-container mobile-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="circle gray data">
                                            <div className="gray-wrap">
                                                <div className="title">
                                                    Big data solution <strong>BIG DATA</strong>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white detail">
                                                        <strong>Detail</strong>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cap">
                                                <div className="text-box">
                                                    <div className="title">Big data solution</div>
                                                    <div className="item-list">
                                                        <div className="text-center">
                                                            OPEN<strong>API</strong>
                                                        </div>
                                                        <ul>
                                                            <li>
                                                                <dl>
                                                                    <dt>Agency</dt>
                                                                    <dd>Revised Automobile Related Laws, Establishment of social safety network for goverment</dd>
                                                                </dl>
                                                            </li>
                                                            <li>
                                                                <dl>
                                                                    <dt>Enterprise</dt>
                                                                    <dd>Vehicle maintenance, Autonomous driving technology for business</dd>
                                                                </dl>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white close">
                                                        <strong>Close</strong>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide initialslide">
                                        <div className="circle tmt">
                                            <div className="text-box">
                                                <div className="title">
                                                Tuneit Mobility platform <strong>TMP</strong>
                                                </div>
                                                <div className="variety">
                                                    <span>Products</span>
                                                    <span>Solution</span>
                                                    <span>Big data</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="circle gray service">
                                            <div className="gray-wrap">
                                                <div className="title">
                                                    Provide service<strong>SERVICE</strong>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white detail">
                                                        <strong>Detail</strong>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="cap">
                                                <div className="text-box">
                                                    <div className="title">Provide service</div>
                                                    <div className="item-list">
                                                        <ul>
                                                            <li>IoT for Automotive</li>
                                                            <li>Car sharing</li>
                                                            <li>Auto repair shop</li>
                                                            <li>Insurance</li>
                                                            <li>Gas station</li>
                                                            <li>A car wash</li>
                                                            <li>Expendables</li>
                                                            <li>Delivery</li>
                                                            <li>Emergency care</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="btn-area">
                                                    <button type="button" className="btn small round white close">
                                                        <strong>Close</strong>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="text center medium">Using driving information and vehicle status information,we help build infrastructure and develop technology.</p>
                        </div>
                    </div>
                </div>
                <div id="make" className="section make">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box">
                                    <h2><span className="subtitle">MAKE</span>Develop mobility solutions and service</h2>
                                    <p className="text">We are building a platform to collect various data by supplying vehicle control solutions and services.</p>
                                </div>
                                <div className="slider-area">
                                    <div className="swiper-container mobile-slider info-cont">
                                        <ul className="swiper-wrapper item-list type01">
                                            <li className="swiper-slide">
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_make_solution.png" alt="SOLUTION 모빌리티 솔루션"/>
                                                </div>
                                                <dl>
                                                    <dt>
                                                        <span>PRODUCT</span>Mobility products
                                                    </dt>
                                                    <dd>
                                                    Vehicle control, <br/>Communication control core technology development,<br/>B2C/B2B device - production and distribution
                                                    </dd>
                                                </dl>
                                            </li>
                                            <li className="swiper-slide">
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_make_product.png" alt="PRODUCT 모빌리티 솔루션"/>
                                                </div>
                                                <dl>
                                                    <dt>
                                                        <span>SOLUTION</span>Mobility solutions
                                                    </dt>
                                                    <dd>
                                                    Vehicle control and information collection <br/>server construction and API provision,<br/>HDK SDK development and distribution
                                                    </dd>
                                                </dl>
                                            </li>
                                            <li className="swiper-slide">
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_make_data.png" alt="DATA 모빌리티 데이터"/>
                                                </div>
                                                <dl>
                                                    <dt>
                                                        <span>DATA</span>Mobility data
                                                    </dt>
                                                    <dd>
                                                        Mobility information collection <br/>and analysis technology development,<br/>data transaction and <br/>artificial intelligence service development
                                                    </dd>
                                                </dl>
                                            </li>
                                        </ul>
                                        <div className="swiper-pagination"></div>
                                        <div className="swiper-scrollbar"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <div id="think" className="section think">
                    <div className="section-wrap">
                        <div className="cont-wrap">
                            <div className="title-box">
                                <h2><span className="subtitle">THINK</span>We consider and develop<br className="for-pc"/> the best mobility platform.</h2>
                                <p className="text">We are doing our best to become a partner you want to work with.</p>
                            </div>
                            <div className="swiper-container mobile-slider info-cont">
                                <ul className="swiper-wrapper item-list type01">
                                    <li className="swiper-slide">
                                        <div className="thumbnail">
                                            <img src="../@resource/images/@thumb/thumb_about_think_expert.png" alt="EXPERT 전문가 집단"/>
                                        </div>
                                        <dl>
                                            <dt>
                                                <span>EXPERT</span>Expert group
                                            </dt>
                                            <dd>
                                                Experts who have participated<br/><br className="for-mobile"/>in automobile production<br/><br className="for-mobile"/>to parts development for more than 10 years participate<br/><br className="for-mobile"/>in the development of mobility technology.
                                            </dd>
                                        </dl>
                                    </li>
                                    <li className="swiper-slide">
                                        <div className="thumbnail">
                                            <img src="../@resource/images/@thumb/thumb_about_think_passion.png" alt="PASSION 도전적인 사람들"/>
                                        </div>
                                        <dl>
                                            <dt>
                                                <span>PASSION</span>Challenging people
                                            </dt>
                                            <dd>
                                                We start various projects with passion <br/><br className="for-mobile"/>and develop innovative mobility products <br/><br className="for-mobile"/>based on the results.
                                            </dd>
                                        </dl>
                                    </li>
                                    <li className="swiper-slide">
                                        <div className="thumbnail">
                                            <img src="../@resource/images/@thumb/thumb_about_think_partnership.png" alt="PARTNER SHIP 협력하는 사람들"/>
                                        </div>
                                        <dl>
                                            <dt>
                                                <span>PARTNER SHIP</span>Harmoniously <br/>cooperating people
                                            </dt>
                                            <dd>
                                                Develop a mobility platform <br/><br className="for-mobile"/>with a positive and flexible attitude, <br/><br className="for-mobile"/>working with a wide variety of teams.
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="history" className="section history">
                    <div className="section-wrap">
                        <div className="title-box">
                            <h2><span className="subtitle">HISTORY</span>Small but reliable partner</h2>
                            <p className="text">Creating a path to becoming the best partner in mobility.</p>
                        </div>
                        <div className="slider-area">
                            <div className="swiper-container info-cont all-slider scrolling-area-x">
                                <div className="swiper-wrapper item-list type02">
                                <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">09</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202009.png" alt="2020년 09월 기아자동차 카니발 리무진 스마트 시트 출시"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>Kia Motors</dt>
                                                <dd>2020 New Carnival <br/>Limousine Smart Seat Launch</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">07</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202007.png" alt="2020년 07월 쎄미시스코 전기자동차 전용 디지털 차키 공급"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>Semisysco</dt>
                                                <dd>Supply of digital car key<br/> for electric vehicles - Smart EV</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">06</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202006.png" alt="2020년 09월 기아자동차 오토큐 오토큐 앱키 전용 상품 (아차키) 런칭"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>Kia Motors AutoQ</dt>
                                                <dd> Kia AppKey - <br/>Digital Car Key Launch</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2020</strong>
                                                    <strong className="month">06</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_202006_02.png" alt="2020년 06월 GS 25 편의점 전용 차량 용품 (아차키) 런칭"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>GS 25</dt>
                                                <dd>Launch Vehicle Goods <br/>for Convenience Stores (Achakey)</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">10</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201910.png" alt="2019년 10월 마카롱 스마트 택시 교대 시스템 공급"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>Macarong Taxi </dt>
                                                <dd>Non-face-to-face <br/>Smart Taxi Driver Shift System</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">10</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201910_02.png" alt="2019년 10월 뿅카 비대면 디지털 차키 공유 시스템 공급"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>Popping car</dt>
                                                <dd>Non-face-to-face digital key <br/>sharing system supply</dd>
                                            </dl>
                                        </div>
        
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">08</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201908.png" alt="2019년 8월 현대자동차 베뉴 TUIX IoT 출시"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>Hyundai Motor</dt>
                                                <dd>Venue TUIX IoT Launch</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">07</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201907.png" alt="2019년 8월 현대자동차 베뉴 TUIX IoT 출시"/>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Achakey Launch</p>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">05</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201905.png" alt="2019년 5월 퍼스트펭귄 창업 기업 선정"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>First Penguin</dt>
                                                <dd>Start-up Company Selected</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">08</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201904.png" alt="2019년 4월 현대자동차 사내벤처 분사 (HKMC 지분 투자)"/>
                                                </div>
                                            </div>
                                            <dl>
                                                <dt>Hyundai Motor Company's</dt>
                                                <dd>Hyundai Motor Company's <br/>in-house venture spin-off <br/>(HKMC equity participation)</dd>
                                            </dl>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="top-area">
                                                <div className="year-area">
                                                    <strong className="year">2019</strong>
                                                    <strong className="month">08</strong>
                                                </div>
                                                <div className="thumbnail">
                                                    <img src="../@resource/images/@thumb/thumb_about_history_201903.png" alt="2019년 튠잇 법인 설립"/>
                                                </div>
                                            </div>
                                            <div>
                                                <p>Tuneit - establishment of a corporation</p>
                                            </div>
                                        </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="peoples" className="section peoples">
                    <div className="section-wrap">
                        <div className="info-cont">
                            <div className="title-box left">
                                <h2><span className="subtitle">PEOPLES</span>Best <br className="for-pc"/>Expert <br className="for-pc"/>Group</h2>
                                <p className="text">Members who are familiar with mobility industry and technology make Tuneit.</p>
                            </div>
                            <div className="swiper-container">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_01.png" alt="송영욱 대표이사"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>Harry Song</strong>CEO</dt>
                                                <dd>
                                                    Seoul National University, <br className="for-pc"/>Mechanical Aerospace Engineering MS<br/>
                                                    Korea University,<br className="for-pc"/> Mechanical <br className="for-pc"/>Engineering BS<br/>
                                                </dd>
                                            </dl>
                                            <span className="company">Hyundai Motor Company</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_02.png" alt="이기창 기술총괄"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>Kichang Lee</strong>Director of Development</dt>
                                                <dd>
                                                    Pusan University, Mechanical System Engineering MS<br/>
                                                </dd>
                                            </dl>
                                            <span className="company">Hyundai Motor Company</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_03.png" alt="신형 선행연구총괄"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>Ethan Shin</strong>Director of RESEARCH</dt>
                                                <dd>
                                                    Kookmin University, <br className="for-pc"/>Automotive <br className="for-pc"/>Engineering BS<br/>
                                                </dd>
                                            </dl>
                                            <span className="company">Hyundai Motor Company</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_04.png" alt="강문성 마케팅총괄"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>Moonsung Kang</strong>Director of Marketing</dt>
                                                <dd>
                                                    Inha University, Automation Engineering MS
                                                </dd>
                                            </dl>
                                            <span className="company">HUMAX / IRIVER</span>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="profile-img">
                                            <img src="../@resource/images/@thumb/img_people_05.png" alt="이희승 자문"/>
                                        </div>
                                        <div className="profile-info">
                                            <dl>
                                                <dt><strong>Eins Lee</strong>Technical Advisory</dt>
                                                <dd>
                                                    KAIST, Electrical Engineering PhD.MS.BS
                                                </dd>
                                            </dl>
                                            <span className="company">
                                                UNIST DECS Lab.<br className="for-pc"/>
                                                Professor
                                            </span>
                                        </div>
                                    </div>

                                </div>
                                <div className="swiper-scrollbar"></div>
                                <div className="swiper-pagination"></div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="news" className="section news">
                    <div className="section-wrap">
                        <div className="title-box">
                            <h2><span className="subtitle">NEWS</span>For Business</h2>
                            <p className="text">Tuneit as technology platform aims to make expanded mobility ecosystem.</p>
                        </div>
                        <div className="swiper-container info-cont all-slider">
                                <div className="swiper-wrapper item-list">
                                    <NewsList apiUrl={apiUrl} language={language}/>
                            </div>
                            <div className="swiper-scrollbar"></div>
                            <div className="swiper-pagination news-paging"></div>
                            <div className="swiper-button-next"></div>
                            <div className="swiper-button-prev"></div>    
                        </div>
                    </div>
                </div>

                <div id="aboutLast" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>Tuneit <br/>
                                    prepares for the <br/>
                                    future of mobility.</h3>
                                <ul className="explain">
                                    <li>
                                            <StyledLink className="footer-href" data-href="/product" to="/product">
                                                <span className="title">Products</span>
                                            </StyledLink>
                                        <p className="text">Tuneit develops products that you can trust.</p>
                                    </li>
                                    <li>
                                            <StyledLink className="footer-href" data-href="/solution" to="/solution">
                                                <span className="title">Solutions</span>
                                            </StyledLink>
                                        <p className="text">Tuneit provides technology for mobility environments and services.</p>
                                    </li>
                                    <li>
                                            <StyledLink className="footer-href" data-href="/contact" to="/contact">
                                                <span className="title">Contact</span>
                                            </StyledLink>
                                        <p className="text">If you want to work with Tuneit, please contact me.</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer">
                            <h2>Tuneit Corporation</h2>
                            <div className="company-info">
                                <dl className="president">
                                    <dt>CEO :</dt>
                                    <dd>Harry Song</dd>
                                </dl>
                                <dl className="registration-number">
                                    <dt>Business license number :</dt>
                                    <dd>603-88-01354</dd>
                                </dl>
                                {/* <dl className="commerce-number">
                                    <dt>통신판매업신고번호 :</dt>
                                    <dd>제2019-성남분당A-0480</dd>
                                </dl> */}
                                <dl className="address">
                                    <dt>Address :</dt>
                                    <dd>4-11 Neuti-ro 51beon-gil, Bundang-gu, Seongnam-si, Gyeonggi-do, Republic of Korea</dd>
                                </dl>
                            </div>
                            <div className="contact-info">
                                <dl className="tel">
                                    <dt>Tel.</dt>
                                    <dd><a href="tel:18118136">1811 - 8136</a></dd>
                                </dl>
                                <dl className="email">
                                    <dt>e-mail :</dt>
                                    <dd><a href="mailto:info@tuneit.io">info@tuneit.io</a></dd>
                                </dl>
                                <span className="copyright">Copyright (C) tuneit corp. All Rights Reserved.</span>
                            </div>
                            {/* <div className="sns-area">
                                <a href="https://www.youtube.com/channel/UCGSuDkzT9eHWLSgfIcV2eUw"  target="_blank" className="youtube" title="유튜브"></a>
                                <a href="https://blog.naver.com/achakey" target="_blank" className="blog" title="블로그"></a>
                                <a href="https://www.facebook.com/아차키-306151156749055/?epa=SEARCH_BOX" target="_blank" className="facebook" title="페이스북"></a>
                                <a href="https://www.instagram.com/achakey.official" target="_blank" className="instagram" title="인스타그램"></a>
                            </div> */}
                        </div>                
                    </div>
                </div>

                <div id="top">
                    <button type="button" className="btn-top" >
                        <span className="blind">상단으로 가기</span>
                    </button>
                </div>
            </AppLayout>

            <div id="popSearch" className="layer-popup pop-view">
                <div className="layer-wrap">
                    <div className="popup-wrap">            
                        <div className="popup-content">
                            <div className="form-wrap">
                                <button type="button" className="pop-close">닫기</button>
                                <div className="form-cont">
                                    <div className="cont-header">
                                        <span className="date">2020.05.07. 12:00 </span>
                                        <span className="subject">ICT 바우처사업에 ‘AI 차량서비스·신약개발’ 등 31개 과제 선정</span>
                                        <span className="text">국내 기업의 정보통신기술(ICT) 개발과 사업화를 지원하는 ‘ICT R&D(연구개발) 혁신 바우처 지원 사업’ 과제 31개가 선정됐다.</span>
                                    </div>
                                    <div className="cont-body scrolling-area-y">
                                        <div className="detail">
                                            <img src="../@resource/images/@thumb/thumb_pop_img.jpg" alt=""/>
                                            <p>
                                                과학기술정보통신부는 튠잇의 ‘능동형 인공지능(AI) 차량관리서비스’, 엘컴텍[037950]의 ‘무인 검사 비행체 충돌 예측 기술 등 31개 과제를 선정하
                                                고, 이들 사업 과제에 총 118억원의 예산을 지원한다고 7일 밝혔다. 31개 과제를 기술 분야별로 분류하면, 소프트웨어·인공지능 분야가 9개(2…
                                                기사 원문 : <a href="">https://www.yna.co.kr/view/AKR20200507053400017?input=1195m</a>
                                                과학기술정보통신부는 튠잇의 ‘능동형 인공지능(AI) 차량관리서비스’, 엘컴텍[037950]의 ‘무인 검사 비행체 충돌 예측 기술 등 31개 과제를 선정하
                                                고, 이들 사업 과제에 총 118억원의 예산을 지원한다고 7일 밝혔다. 31개 과제를 기술 분야별로 분류하면, 소프트웨어·인공지능 분야가 9개(2…
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-paging">
                                <ul>
                                    <li>
                                        <span className="sort">Prev</span>
                                        <a href="#" onClick={e => e.preventDefault()} id="prev-article" className="subject">
                                        
                                        </a>
                                    </li>
                                    <li>
                                        <span className="sort">Next</span>
                                        <a href="#" onClick={e => e.preventDefault()} id="next-article" className="subject">
                                        
                                        </a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg"></div>
                </div>
            </div>
            </React.Fragment>
        );
    }
};

export default About;
