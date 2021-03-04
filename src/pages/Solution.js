import React,{useState } from "react";
import AppLayout from "../components/AppLayout";
import Header from "../include/common/header";
import {StyledLink } from "../include/common/style";

const Solution = (props) => {
    const [language,setLanguage] = useState(props.language);
    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    if(language==='ko'){
        return (
            <React.Fragment>
            <Header language={language} toggle={e => toggle(e)}/>
            <AppLayout page="solution">
                <div id="fullpage" className="time-none">
                    <div id="solution" className="section sec-solution">
                        <div className="section-wrap">
                        <div className="cont-wrap">
                            <div className="title-box">
                            <h2><span className="subtitle">SOLUTION</span>모빌리티 생태계를 위한 기술과 경험의 공유</h2>
                            <p className="text">파트너를 위한 모빌리티 기술과 경험을 공유하고 모빌리티 플랫폼 구축을 위한 네트워크를 준비하고 있습니다. </p>
                            </div>
                            <div className="info-cont">
                            <img src="../@resource/images/common/bg_sloution_sloution.jpg" alt="" className="for-pc"/>
                            <img src="../@resource/images/common/bg_sloution_sloution_mo.jpg" alt="" className="for-mobile"/>
                            <div className="blind">
                                <dl>
                                <dt>모빌리티 솔루션</dt>
                                <dd>SDK &middot; HDK &middot; API</dd>
                                </dl>
                                <ul>
                                <li>차량 공유</li>
                                <li>차량 제어</li>
                                <li>정보 수집</li>
                                <li>O2O 서비스</li>
                                <li>정보 분석</li>
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="smart" className="section smart">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box left">
                                    <h2 className="title"><span className="subtitle">ACHAKEY</span>택시 스마트<br className="for-pc"/> 교대 시스템</h2>
                                    <p className="addition">택시 운전자 교대를 위한<br className="for-pc"/> 차량 배정과 권한 관리 시스템 제공</p><p className="text medium">튠잇은 중소 택시 운송사업에 맞게 솔루션을<br className="for-pc"/> 제공하고 있습니다.</p>
                                    <p className="text medium">디지털 차키 제품과 앱 서비스를 이용하여 쉽게<br className="for-pc"/> 
                                    운전자에게 차량을 배정하고 권한을 부여할 수<br className="for-pc"/> 있습니다.</p>
                                    <p className="text medium">사업자에게 제공되는 어드민을 이용하여 택시<br className="for-pc"/> 
                                    운행이력 정보를 수집하고 관리할 수 있도록<br className="for-pc"/> 기술을 제공합니다.</p>   
                                </div>
                                <div className="info-cont">
                                    <img src="../@resource/images/common/img_solution_smart.png" alt="스마트 교대 시스템 설명 이미지" className="for-pc"/>
                                    <img src="../@resource/images/common/img_solution_smart_mo.jpg" alt="스마트 교대 시스템 설명 이미지" className="for-mobile"/>
                                    <div className="blind">
                                        <ol>
                                            <li>
                                                <dl>
                                                    <dt>관리자 어드민</dt>
                                                    <dd>차키 관리 및 운행 조회</dd>
                                                </dl>
                                                <ol>
                                                    <li>아차키 서버
                                                        <ol>
                                                            <li>차키 요청 및 반납</li>
                                                            <li>
                                                                <ol>
                                                                    <li>택시 운전사
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                    <li>
                                                                        택시
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="share" className="section share">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box left small">
                                    <h2 className="title"><span className="subtitle">AUTO Q</span>비대면 디지털<br className="for-pc"/>차키 공유 서비스</h2>
                                    <p className="addition">공유 자동차 운전자를 위한 차량<br className="for-pc"/> 배정과 권한 관리 서비스 제공</p>
                                    <p className="text medium">튠잇은 중소 공유차량서비스에 맞게 솔루션을<br className="for-pc"/> 제공하고 있습니다.</p>
                                    <p className="text medium">디지털 차키 제품과 앱 서비스를 이용하여 쉽게<br className="for-pc"/> 운전자에게 차량을 제공하고 권한을 부여할 수<br className="for-pc"/> 있습니다. </p>
                                    <p className="text medium">사업자가 차량의 위치와 상태를 확인하고<br className="for-pc"/> 관리할 수 있도록 기술을 제공합니다.</p>
                                </div>
                                <div className="info-cont">
                                    <img src="../@resource/images/common/img_solution_share.png" alt="디지털 차키 서비스 설명 이미지" className="for-pc"/>
                                    <img src="../@resource/images/common/img_solution_share_mo.jpg" alt="디지털 차키 서비스 설명 이미지" className="for-mobile"/>
                                    <div className="blind">
                                        <ol>
                                            <li>
                                                <dl>
                                                    <dt>차량 공유 서비스</dt>
                                                    <dd>차키 관리 및 운행 조회</dd>
                                                </dl>
                                                <ol>
                                                    <li>아차키 서버
                                                        <ol>
                                                            <li>차 공유 요청 및 반납</li>
                                                            <li>
                                                                <ol>
                                                                    <li>공유 사용자
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                    <li>
                                                                        공유 차량
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>
                                </div>                       
                            </div>
                        </div>
                    </div>
                    <div id="digital" className="section digital">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box left ">
                                    <h2 className="title"><span className="subtitle">TUIX IoT</span>전기자동차<br/> 디지털 차키 공급</h2>
                                    <p className="addition">상용 전기자동차를 위한<br/> 전용 디지털 차키 제품 공급키</p>
                                    <p className="text medium">튠잇은 중소 자동차 제조사의 생산라인에 맞게<br/> 솔루션을 제공하고 있습니다.</p>
                                    <p className="text medium">사용자는 더이상 차키를 필요로 하지 않게 되고 제조사는<br/> 고객에게 차량 인도 시 디지털 차키를 전달하면 됩니다.</p>
                                    <p className="text medium">축적된 기술과 경험을 바탕으로 전기자동차에<br/> 적합한 디지털 차키를 공급합니다.</p>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div id="productLast" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>튠잇은 모빌리티 시장<br/> 
                                확대를 위해 기반 기술을<br/> 
                                제공하고 있습니다.</h3>
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
            </React.Fragment>
        );
    }else if(language === 'en'){
        return (
            <React.Fragment>
            <Header language={language} toggle={e => toggle(e)}/>
            <AppLayout page="solution">
                <div id="fullpage" className="time-none">
                    <div id="solution" className="section sec-solution">
                        <div className="section-wrap">
                        <div className="cont-wrap">
                            <div className="title-box">
                                <h2><span className="subtitle">SOLUTION</span>Sharing technology and experience for<br className="for-pc"/>mobility environments</h2>
                                <p className="text">Partner for the mobility skills and experience sharing and preparing for mobility platform for building networks. </p>
                            </div>
                            <div className="info-cont">
                                <img src="../@resource/images/common/bg_sloution_sloution_en.jpg" alt="" className="for-pc"/>
                                <img src="../@resource/images/common/bg_sloution_sloution_mo_en.jpg" alt="" className="for-mobile"/>
                                <div className="blind">
                                    <dl>
                                    <dt>Mobility Solution</dt>
                                    <dd>SDK &middot; HDK &middot; API</dd>
                                    </dl>
                                    <ul>
                                    <li>sharing</li>
                                    <li>Vehicle contro</li>
                                    <li> information collection</li>
                                    <li>O2O service</li>
                                    <li>analysis</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="smart" className="section smart">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box left">
                                    <h2 className="title"><span className="subtitle">ACHAKEY</span>Providing a <br className="for-pc"/>smart taxi <br className="for-pc"/>shift system</h2>
                                    <p className="addition">vehicle allocation and management system for <br className="for-pc"/>taxi drivers and shifts</p>
                                    <p className="text medium">Tuneit offers the solution for taxi company.</p>
                                    <p className="text medium">Digital car key product and service easily<br className="for-pc"/> assigning them vehicles to the driver using the app.</p>
                                    <p className="text medium">Business operators using biz plan are provided with services <br className="for-pc"/>to collect and manage taxi driving history information.</p>
                                </div>
                                <div className="info-cont">
                                    <img src="../@resource/images/common/img_solution_smart_en.png" alt="스마트 교대 시스템 설명 이미지" className="for-pc"/>
                                    <img src="../@resource/images/common/img_solution_smart_mo_en.jpg" alt="스마트 교대 시스템 설명 이미지" className="for-mobile"/>
                                    <div className="blind">
                                        <ol>
                                            <li>
                                                <dl>
                                                    <dt>관리자 어드민</dt>
                                                    <dd>차키 관리 및 운행 조회</dd>
                                                </dl>
                                                <ol>
                                                    <li>아차키 서버
                                                        <ol>
                                                            <li>차키 요청 및 반납</li>
                                                            <li>
                                                                <ol>
                                                                    <li>택시 운전사
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                    <li>
                                                                        택시
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="share" className="section share">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box left small">
                                    <h2 className="title"><span className="subtitle">AUTO Q</span>Non-face-to-face <br className="for-pc"/>digital car key <br className="for-pc"/>sharing services</h2>
                                    <p className="addition">vehicle assignment and authority management <br className="for-pc"/>services for shared car company.</p>
                                    <p className="text medium">Tuneit provides solutions for small and medium shared vehicle services.</p>
                                    <p className="text medium">Digital car keys and app services make it easy to deliver <br className="for-pc"/>the vehicle's digital keys to the driver. </p>
                                    <p className="text medium">We provide technology to help operators identify and manage <br className="for-pc"/>the location and condition of the vehicle.</p>
                                </div>
                                <div className="info-cont">
                                    <img src="../@resource/images/common/img_solution_share_en.png" alt="디지털 차키 서비스 설명 이미지" className="for-pc"/>
                                    <img src="../@resource/images/common/img_solution_share_mo_en.jpg" alt="디지털 차키 서비스 설명 이미지" className="for-mobile"/>
                                    <div className="blind">
                                        <ol>
                                            <li>
                                                <dl>
                                                    <dt>차량 공유 서비스</dt>
                                                    <dd>차키 관리 및 운행 조회</dd>
                                                </dl>
                                                <ol>
                                                    <li>아차키 서버
                                                        <ol>
                                                            <li>차 공유 요청 및 반납</li>
                                                            <li>
                                                                <ol>
                                                                    <li>공유 사용자
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                    <li>
                                                                        공유 차량
                                                                        <ol>
                                                                            <li>차량 제어 (도어, 시동)</li>
                                                                        </ol>
                                                                    </li>
                                                                </ol>
                                                            </li>
                                                        </ol>
                                                    </li>
                                                </ol>
                                            </li>
                                        </ol>
                                    </div>
                                </div>                       
                            </div>
                        </div>
                    </div>
                    <div id="digital" className="section digital">
                        <div className="section-wrap">
                            <div className="cont-wrap">
                                <div className="title-box left ">
                                    <h2 className="title"><span className="subtitle">TUIX IoT</span>Supply the digital <br className="for-pc"/>car key for electric vehicles.</h2>
                                    <p className="text medium">Tuneit provides solutions for small and medium car manufacturers.</p>
                                    <p className="text medium">Users no longer need the car keys, and manufacturers only need to deliver <br className="for-pc"/>the digital car key to the customer.</p>
                                    <p className="text medium">Based on accumulated technology and experience, <br className="for-pc"/>it provides the right digital car keys for electric vehicles.</p>
                                </div>                            
                            </div>
                        </div>
                    </div>
                    <div id="productLast" className="section last">
                        <div className="section-wrap">
                            <div className="info-cont">
                                <h3>Tuneit is providing technology to expand the mobility market.</h3>
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
            </React.Fragment>
        );
    }
}

export default Solution;
