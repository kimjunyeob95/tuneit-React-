import React, {useState } from "react";
import AppLayout from "../components/AppLayout";
import Header from "../include/common/header";
const Main = (props) => {
    const [language,setLanguage] = useState(props.language);
    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    if(language==='ko'){
        return (
            <React.Fragment>
                <Header language={language} toggle={e => toggle(e)}/>
              <AppLayout page="main">
                <div className="slider-wrap">
                  <div className="intro-slider">
                    <div className="slide slide01">
                        <div className="box-wrap">
                            <div className="title-box">
                                <h2>
                                    <strong>SMART<br/>MOBILITY</strong>
                                    스마트 모빌리티 전문 기업 튠잇!
                                </h2>
                                <p className="text">이동수단과 사람을 연결하고 데이터를 모아<br className="for-mobile"/> 스마트 모빌리티 플랫폼을 구축합니다.</p>
                                <a href="/about" className="btn medium white round">more</a>    
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_phone_mo.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                    </div>
                        <div className="slide slide02">
                            <div className="box-wrap">
                                <div className="title-box">
                                    <h2>
                                        <strong>MOBILITY<br/>PLATFORM</strong>
                                        모빌리티 플랫폼을 위한 차량제어 제품 개발
                                    </h2>
                                    <p className="text">차량제어 하드웨어 및 소프트웨어를 개발하여<br className="for-mobile"/> B2B, B2C사업을 추진하고 있습니다.</p>
                                    <a href="/product" className="btn medium white round">more</a>
                                </div>
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_circle01_mo.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                        <div className="slide slide03">
                            <div className="box-wrap">
                                <div className="title-box">
                                    <h2>
                                        <strong>MOBILITY<br/>SOLUTION</strong>
                                        모빌리티 생태계를 위한 기술과 경험의 공유
                                    </h2>
                                    <p className="text">파트너를 위한 모빌리티 기술과 경험을 공유하고<br className="for-mobile"/> 모빌리티 플랫폼 구축을 위한 네트워크를 준비하고 있습니다.</p>
                                    <a href="/solution" className="btn medium white round">more</a>
                                </div>
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_circle02_mo.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                        <div className="slide slide04">
                            <div className="box-wrap">
                                <div className="title-box">
                                    <h2>
                                        <strong>BUSINESS<br/>PARTNER</strong>
                                        튠잇의 비즈니스 파트너
                                    </h2>
                                    <p className="text">튠잇은 언제나 열려있습니다.<br className="for-mobile"/> 함께하면 더 멀리 갈 수 있습니다.</p>
                                    <a href="/contact" className="btn medium white round">more</a>
                                </div>
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_hand_mo.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                    </div>
                    <div className="progressbar-wrap">
                        <div className="progress-tab progress-tab01 on">
                            <h3>스마트 모빌리티 전문 기업<strong>SMART MOBILITY</strong>
                                <span data-slick-index="0" className="progressbar"></span>
                            </h3>
                        </div>
                        <div className="progress-tab progress-tab02">
                            <h3>손 안에서 시작되는 차량제어 <strong>PLATFORM</strong>
                                <span data-slick-index="1" className="progressbar"></span>
                            </h3>
                        </div>
                        <div className="progress-tab progress-tab03">
                            <h3>모빌리티 기술과 경험 공유<strong>SOLUTION</strong>
                                <span data-slick-index="2" className="progressbar"></span>
                            </h3>
                        </div>
                        <div className="progress-tab progress-tab04">
                            <h3>튠잇의 비즈니스 파트너 <strong>PARTNER</strong>
                                <span data-slick-index="3" className="progressbar"></span>
                            </h3>
                        </div>
                    </div>
                    {/* <div className="scroll-down">
                        <span>SCROLL DOWN</span>
                    </div> */}
                </div>
                
              </AppLayout>
              <footer id="footer">
        
                </footer>
            </React.Fragment>
          );
    }else if(language==='en'){
        return (
            <React.Fragment>
                <Header language={language} toggle={e => toggle(e)}/>
              <AppLayout page="main">
                <div className="slider-wrap">
                  <div className="intro-slider">
                    <div className="slide slide01">
                        <div className="box-wrap">
                            <div className="title-box">
                                <h2>
                                    <strong>SMART<br/>MOBILITY</strong>
                                    Smart mobility specialized company
                                </h2>
                                <p className="text">Connect mobility with people, collect and analyze data to build a smart mobility platform.</p>
                                <a href="/about" className="btn medium white round">more</a>    
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_phone_mo.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                    </div>
                        <div className="slide slide02">
                            <div className="box-wrap">
                                <div className="title-box">
                                    <h2>
                                        <strong>MOBILITY<br/>PLATFORM</strong>
                                        Development of Vehicle Control Products for <br className="for-pc"/>Mobility Platforms
                                    </h2>
                                    <p className="text">We have developed vehicle control hardware and software to promote B2B and B2C projects.</p>
                                    <a href="/product" className="btn medium white round">more</a>
                                </div>
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_circle01_mo_en.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                        <div className="slide slide03">
                            <div className="box-wrap">
                                <div className="title-box">
                                    <h2>
                                        <strong>MOBILITY<br/>SOLUTION</strong>
                                        Partner for the mobility skills and experience sharing and preparing for <br className="for-pc"/>mobility platform for building networks.
                                    </h2>
                                    <p className="text">Partner for the mobility skills and experience sharing and preparing for <br className="for-pc"/>mobility platform for building networks.</p>
                                    <a href="/solution" className="btn medium white round">more</a>
                                </div>
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_circle02_mo_en.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                        <div className="slide slide04">
                            <div className="box-wrap">
                                <div className="title-box">
                                    <h2>
                                        <strong>BUSINESS<br/>PARTNER</strong>
                                        For the mobility business
                                    </h2>
                                    <p className="text">Tuneit is always open. Together,<br className="for-mobile"/>we can go farther and higher.</p>
                                    <a href="/contact" className="btn medium white round">more</a>
                                </div>
                            </div>
                            <div className="object">
                                <img src="../@resource/images/common/bg_main_object_hand_mo.png" alt="" className="for-mobile"/>
                            </div>
                        </div>
                    </div>
                    <div className="progressbar-wrap">
                        <div className="progress-tab progress-tab01 on">
                            <h3>Smart mobility specialized company<strong>SMART MOBILITY</strong>
                                <span data-slick-index="0" className="progressbar"></span>
                            </h3>
                        </div>
                        <div className="progress-tab progress-tab02">
                            <h3>Vehicle controls technology <strong>PLATFORM</strong>
                                <span data-slick-index="1" className="progressbar"></span>
                            </h3>
                        </div>
                        <div className="progress-tab progress-tab03">
                            <h3>Sharing technology and experience for mobility environments<strong>SOLUTION</strong>
                                <span data-slick-index="2" className="progressbar"></span>
                            </h3>
                        </div>
                        <div className="progress-tab progress-tab04">
                            <h3>For the mobility business <strong>PARTNER</strong>
                                <span data-slick-index="3" className="progressbar"></span>
                            </h3>
                        </div>
                    </div>
                    {/* <div className="scroll-down">
                        <span>SCROLL DOWN</span>
                    </div> */}
                </div>
                
              </AppLayout>
              <footer id="footer">
        
                </footer>
            </React.Fragment>
          );
    }
 
};

export default Main;
