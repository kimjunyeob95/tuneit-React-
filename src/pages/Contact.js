import React,{useState } from "react";
import AppLayout from "../components/AppLayout";
import Header from "../include/common/header";
import {StyledLink } from "../include/common/style";

const Contact = (props) =>{
    var script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "google-map";
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyATJF8R07H-NUSm23WSwDGrkbPGeDXy-7A&callback=initMap&region=kr";
    document.getElementsByTagName("body")[0].appendChild(script);
    const [language,setLanguage] = useState(props.language);
    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    if(language==='ko'){
        return (
            <React.Fragment>
                <Header language={language} toggle={e => toggle(e)}/>
                <AppLayout page="contact">
                    <div id="fullpage" className="time-none">
                        <div id="map" className="section map">
                            <div className="section-wrap">
                                <div className="cont-wrap">
                                    <div className="title-box">
                                        <h2><span className="subtitle">MAP</span>오시는 길</h2>
                                        <p className="text">다양한 프로젝트 대응을 위해<br className="for-mobile"/> 팀별로 사무실을 분산 운영하고 있습니다.</p>
                                    </div>
                                    <div className="info-cont">
                                        <ul className="item-list">
                                            <li>
                                                <div id="api-area01" className="api-area">

                                                </div>
                                                <div className="address-wrap">
                                                    <dl>
                                                        <dt>WEST OFFICE</dt>
                                                        <dd>경기도 성남시 분당구 느티로 51번길 4-11(정자동) 1층 / 13610<br/>분당선 / 신분당선 정자역 도보 10분 거리</dd>
                                                    </dl>
                                                    <a target="_blank" href="https://www.google.co.kr/maps/place/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%84%B1%EB%82%A8%EC%8B%9C+%EB%B6%84%EB%8B%B9%EA%B5%AC+%EC%A0%95%EC%9E%90%EB%8F%99+%EB%8A%90%ED%8B%B0%EB%A1%9C51%EB%B2%88%EA%B8%B8+4-11+1%EC%B8%B5/@37.3690597,127.1089803,17z/data=!3m1!4b1!4m5!3m4!1s0x357b5830956ed135:0xb8c384754f8c7d1c!8m2!3d37.3690555!4d127.111169?hl=ko" className="btn medium round darkgray arrow">약도 크게 보기</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div id="api-area02" className="api-area">

                                                </div>
                                                <div className="address-wrap">
                                                    <dl>
                                                        <dt>EAST OFFICE</dt>
                                                        <dd>경기도 성남시 분당구 느티로 67(정자동) 4층 401-1 / 13610<br/>분당선 / 신분당선 정자역 도보 10분 거리</dd>
                                                    </dl>
                                                    <a target="_blank" href="https://www.google.co.kr/maps/place/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%84%B1%EB%82%A8%EC%8B%9C+%EB%B6%84%EB%8B%B9%EA%B5%AC+%EC%A0%95%EC%9E%90%EB%8F%99+%EB%8A%90%ED%8B%B0%EB%A1%9C+67+%EC%B8%B5+401-1/@37.3687517,127.1098375,17z/data=!3m1!4b1!4m8!1m2!2m1!1z6rK96riw64-EIOyEseuCqOyLnCDrtoTri7nqtawg64qQ7Yuw66GcIDY3KOygleyekOuPmSkgNOy4tSA0MDEtMQ!3m4!1s0x357b58308cec5865:0xa563211f195519d!8m2!3d37.3687475!4d127.1120262?hl=ko" className="btn medium round darkgray arrow">약도 크게 보기</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="contact" className="section sec-contact">
                            <div className="section-wrap">
                                <div className="cont-wrap">
                                    <div className="title-box">
                                        <h2 className="title"><span className="subtitle">CONTACT</span>연락처를 남겨주세요</h2>
                                        <p className="text">튠잇과 함께 할 프로젝트가 있다면 간단한 정보를<br className="for-mobile"/> 남겨주세요. 확인 후 연락 드리겠습니다.</p>
                                        <div className="form-wrap">
                                            <fieldset>
                                                <div className="form-cont">
                                                    <div className="left-area">
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="comName">회사명</label>
                                                                <input type="text" name="comName" id="comName" placeholder="회사명을 입력하세요."/>
                                                            </div>
                                                        </div>
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="name">이름</label>
                                                                <input type="text" name="name" id="name" placeholder="이름을 입력하세요."/>
                                                            </div>
                                                        </div>
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="telNo">연락처</label>
                                                                <input type="number" name="telNo" id="telNo" placeholder="연락이 가능한 휴대폰번호를 입력하세요."/>
                                                            </div>
                                                        </div>
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="email">이메일</label>
                                                                <input type="text" name="email" id="email" placeholder="연락이 가능한 이메일을 입력하세요."/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="right-area">
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="contents">상세내용</label>
                                                                <div className="textarea-wrap">
                                                                    <textarea name="contents" id="contents" placeholder="내용을 입력하세요." className="textarea" maxLength="1000"></textarea>
                                                                    <span className="bytes-area"><span className="bytes">0</span>/1000 byte</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="check-area">
                                                    <span className="checkbox">
                                                        <input type="checkbox" id="isAgree" name="isAgree"/>
                                                        <label htmlFor="isAgree">개인정보처리방침에 동의합니다.</label>
                                                    </span>
                                                </div>
                                                <div className="btn-area">
                                                    <button id="form-submit" className="btn gray large round">보내기</button>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="productLast" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>튠잇은 언제나 열려<br/>
                                있습니다. 함께하면<br/>
                                더 멀리 갈 수 있습니다. </h3>
                                <ul className="explain">
                                    <li>
                                        <StyledLink className="footer-href" data-href="/about" to="/about">
                                            <span className="title">회사 소개</span>
                                        </StyledLink>
                                        <p className="text">튠잇은 모빌리티의 미래를 준비하고 있습니다.</p>
                                    </li>
                                    <li>
                                        <StyledLink className="footer-href" data-href="/product" to="/product">
                                            <span className="title">제품 소개</span>
                                        </StyledLink>
                                        <p className="text">튠잇은 신뢰할 수 있는 제품을 개발합니다.</p>
                                    </li>
                                    <li>
                                        <StyledLink className="footer-href" data-href="/solution" to="/solution">
                                            <span className="title">솔루션 소개</span>
                                        </StyledLink>
                                        <p className="text">튠잇은 모빌리티 생태계를 위한 기술을 제공합니다.</p>
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
            </React.Fragment>
        );
    }else if(language === 'en'){
        return (
            <React.Fragment>
                <Header language={language} toggle={e => toggle(e)}/>
                <AppLayout page="contact">
                    <div id="fullpage" className="time-none">
                        <div id="map" className="section map">
                            <div className="section-wrap">
                                <div className="cont-wrap">
                                    <div className="title-box">
                                        <h2><span className="subtitle">MAP</span>Location</h2>
                                        <p className="text">To respond to various projects, we are operating offices in teams.</p>
                                    </div>
                                    <div className="info-cont">
                                        <ul className="item-list">
                                            <li>
                                                <div id="api-area01" className="api-area">

                                                </div>
                                                <div className="address-wrap">
                                                    <dl>
                                                        <dt>WEST OFFICE</dt>
                                                        <dd>4-11 Neuti-ro 51beon-gil, Bundang-gu,<br className="for-pc"/> Seongnam-si, Gyeonggi-do, Republic of Korea / 13610<br/>10 minutes walk from Jeongja Station on Bundang Line</dd>
                                                    </dl>
                                                    <a target="_blank" href="https://www.google.co.kr/maps/place/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%84%B1%EB%82%A8%EC%8B%9C+%EB%B6%84%EB%8B%B9%EA%B5%AC+%EC%A0%95%EC%9E%90%EB%8F%99+%EB%8A%90%ED%8B%B0%EB%A1%9C51%EB%B2%88%EA%B8%B8+4-11+1%EC%B8%B5/@37.3690597,127.1089803,17z/data=!3m1!4b1!4m5!3m4!1s0x357b5830956ed135:0xb8c384754f8c7d1c!8m2!3d37.3690555!4d127.111169?hl=ko" className="btn medium round darkgray arrow">약도 크게 보기</a>
                                                </div>
                                            </li>
                                            <li>
                                                <div id="api-area02" className="api-area">

                                                </div>
                                                <div className="address-wrap">
                                                    <dl>
                                                        <dt>EAST OFFICE</dt>
                                                        <dd>401-1 / 13610, 4th floor, 67, Neti-ro,<br className="for-pc"/> Bundang-gu, Seongnam-si, Gyeonggi-do<br/>10 minutes walk from Jeongja Station on Bundang Line</dd>
                                                    </dl>
                                                    <a target="_blank" href="https://www.google.co.kr/maps/place/%EA%B2%BD%EA%B8%B0%EB%8F%84+%EC%84%B1%EB%82%A8%EC%8B%9C+%EB%B6%84%EB%8B%B9%EA%B5%AC+%EC%A0%95%EC%9E%90%EB%8F%99+%EB%8A%90%ED%8B%B0%EB%A1%9C+67+%EC%B8%B5+401-1/@37.3687517,127.1098375,17z/data=!3m1!4b1!4m8!1m2!2m1!1z6rK96riw64-EIOyEseuCqOyLnCDrtoTri7nqtawg64qQ7Yuw66GcIDY3KOygleyekOuPmSkgNOy4tSA0MDEtMQ!3m4!1s0x357b58308cec5865:0xa563211f195519d!8m2!3d37.3687475!4d127.1120262?hl=ko" className="btn medium round darkgray arrow">약도 크게 보기</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="contact" className="section sec-contact">
                            <div className="section-wrap">
                                <div className="cont-wrap">
                                    <div className="title-box">
                                        <h2 className="title"><span className="subtitle">CONTACT</span>Contact us</h2>
                                        <p className="text"> If you have a project with Tuneit, please leave a brief comment. We will tell you as soon as possible.</p>
                                        <div className="form-wrap">
                                            <fieldset>
                                                <div className="form-cont">
                                                    <div className="left-area">
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="comName">Company name</label>
                                                                <input type="text" name="comName" id="comName" placeholder="Please enter your company name."/>
                                                            </div>
                                                        </div>
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="name">Name</label>
                                                                <input type="text" name="name" id="name" placeholder="Please enter your name."/>
                                                            </div>
                                                        </div>
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="telNo">Contact</label>
                                                                <input type="number" name="telNo" id="telNo" placeholder="Please enter your mobile phone number."/>
                                                            </div>
                                                        </div>
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="email">e-mail</label>
                                                                <input type="text" name="email" id="email" placeholder="Please enter your e-mail."/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="right-area">
                                                        <div className="input-group">
                                                            <div className="input-text">
                                                                <label htmlFor="contents">Detail</label>
                                                                <div className="textarea-wrap">
                                                                    <textarea name="contents" id="contents" placeholder="Please enter your request." className="textarea" maxLength="1000"></textarea>
                                                                    <span className="bytes-area"><span className="bytes">0</span>/1000 byte</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="check-area">
                                                    <span className="checkbox">
                                                        <input type="checkbox" id="isAgree" name="isAgree"/>
                                                        <label htmlFor="isAgree">I agree with the privacy policy.</label>
                                                    </span>
                                                </div>
                                                <div className="btn-area">
                                                    <button id="form-submit" className="btn gray large round"> Confirm.</button>
                                                </div>
                                            </fieldset>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="productLast" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>Tuneit is always open. Together, we can go farther and higher. </h3>
                                <ul className="explain">
                                    <li>
                                        <StyledLink className="footer-href" data-href="/about" to="/about">
                                            <span className="title">Company</span>
                                        </StyledLink>
                                        <p className="text">Tuneit prepares for the future of mobility.</p>
                                    </li>
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
            </React.Fragment>
        );
    }
};

export default Contact;

