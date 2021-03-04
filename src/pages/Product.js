import React,{useState } from "react";
import AppLayout from "../components/AppLayout";
import Header from "../include/common/header";
import {StyledLink } from "../include/common/style";

const Product = (props) =>{
  const [language,setLanguage] = useState(props.language);
    const toggle = e => {
        setLanguage(e);
        props.toggle(e);
    }
    if(language==='ko'){
      return (
        <React.Fragment>
          <Header language={language} toggle={e => toggle(e)}/>
          <AppLayout page="product">
          <div id="fullpage" className="time-none">
            <div id="platform" className="section platform">
              <div className="section-wrap">
                <div className="cont-wrap">
                  <div className="title-box">
                    <h2><span className="subtitle">PLATFORM</span>모빌리티 플랫폼을 위한<br className="for-mobile"/> 차량제어 제품 개발</h2>
                    <p className="text">차량제어 하드웨어 및 소프트웨어를 개발하여<br className="for-mobile"/> B2B, B2C 사업을 추진하고 있습니다.</p>
                  </div>
                  <div className="info-cont">
                    <img src="../@resource/images/common/bg_product_flatform.png" alt="" className="for-pc"/>
                    <img src="../@resource/images/common/bg_product_flatform_mo.jpg" alt="" className="for-mobile"/>
                    <div className="blind">
                      <dl>
                          <dt>차량 통신 기술</dt>
                          <dd>BLE &middot; RFID &middot; UWB</dd>
                      </dl>
                      <ul>
                          <li>펌웨어</li>
                          <li>앱<br/>서비스</li>
                          <li>제어<br/>장치</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="achakey" className="section achakey">
              <div className="section-wrap">
                <div className="cont-wrap">
                  <div className="title-box left small">
                    <h2 className="title"><span className="subtitle">ACHAKEY</span>아차키</h2>
                    <p className="addition">대한민국 NO.1 디지털 차키</p>
                    <p className="text medium">아차키만 있으면 더이상 차키를 들고 다니지 않아도<br/>
                    차량의 문을 열고 닫을 수 있고 전용 앱을 이용해<br/>
                    가족과 친구에게 차를 공유할 수 있게 됩니다.</p>
                    <p className="text medium">아차키는 차량의 스마트키와 대응하여 차량을<br/> 
                    제어하는 제품으로 전세계 모든 차량에 대응할 수<br/> 
                    있도록 연구 개발하여 2019년 7월 국내에 런칭을<br/> 하였습니다.</p>
                    <div className="btn-area">
                        <a href="http://211.253.27.6:148" target="_blank" className="btn medium round darkgray arrow">아차키 자세히 확인하기</a>
                        <a href="https://smartstore.naver.com/achakey" target="_blank" className="btn medium round orange arrow">아차키 구매하기</a>
                    </div>
                  </div>                            
                </div>
              </div>
            </div>

            <div id="autoq" className="section autoq">
              <div className="section-wrap">
                <div className="cont-wrap">
                  <div className="title-box left small">
                    <h2 className="title"><span className="subtitle">AUTO Q</span>기아 오토큐 앱키</h2>
                    <p className="addition">오토큐 솔루션 The Driving APP KEY</p>
                    <p className="text medium">튠잇이 출시한 아차키의 제품력을 인정받아 기아자동차의<br/> 전국 서비스 네트워크에 오토큐 브랜드 상품으로 2020년<br/> 6월에 런칭을 하였습니다. </p>
                    <p className="text medium">기아자동차에서 생산하는 차량에 설치하여 스마트키를<br/> 
                    소지하지 않아도 앱으로 도어잠금, 해제, 트렁크 열림 등을 <br/> 제어할 수 있습니다.</p>
                    <div className="btn-area">
                      <a href="http://211.253.27.6:148/autoq" target="_blank" className="btn medium round darkgray arrow">오토큐앱키 자세히 확인하기</a>
                      <a href="http://211.253.27.6:148/autoq?popup" target="_blank" className="btn medium round orange arrow">취급 센터 확인하기</a>
                    </div>
                  </div>                            
                </div>
              </div>
            </div>

            <div id="tuix" className="section tuix">
              <div className="section-wrap">
                <div className="cont-wrap">
                  <div className="title-box left ">
                    <h2 className="title"><span className="subtitle">TUIX IoT</span>현대자동차 베뉴<br/>TUIX IoT</h2>
                    <p className="addition">대한민국 NO.1 디지털 차키</p>
                    <p className="text medium">아차키만 있으면 더이상 차키를 들고 다니지 않아도<br/>
                    차량의 문을 열고 닫을 수 있고 전용 앱을 이용해<br/>
                    가족과 친구에게 차를 공유할 수 있게 됩니다.</p>
                    <p className="text medium">아차키는 차량의 스마트키와 대응하여 차량을<br/> 제어하는 제품으로 전세계 모든 차량에 대응할 수<br/> 있도록 연구 개발하여 2019년 7월 국내에 런칭을<br/> 하였습니다.</p>
                      <div className="btn-area">
                        <a href="#" onClick={e => e.preventDefault()} className="btn medium round darkgray arrow open-vod">TUIX IoT 사용 동영상 보기</a>
                        <a href="https://www.hyundai.com/kr/ko/e/vehicles/venue/intro#HGenuineAccessories" target="_blank" className="btn medium round orange arrow">제품 보러가기</a>
                      </div>
                  </div>                            
                </div>
              </div>
            </div>

            <div id="productLast" className="section last">
              <div className="section-wrap">
                  <div className="info-cont">
                      <h3>튠잇은 신뢰성 높은<br/> 
                      제품 개발을 위해 역량을<br/> 
                      집중하고 있습니다.</h3>
                      <ul className="explain">
                          <li>
                              <StyledLink className="footer-href" data-href="/about" to="/about">
                                  <span className="title">회사 소개</span>
                              </StyledLink>
                              <p className="text">튠잇은 모빌리티의 미래를 준비하고 있습니다.</p>
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
        <div id="popVOD" className="layer-popup pop-vod">
              <div className="layer-wrap">
                  <div className="popup-wrap">            
                      <div className="popup-content">
                          <button type="button" className="pop-close">닫기</button>
                          <div className="form-wrap">
                              <div className="video-area">
                                  <iframe width="799" height="449" src="https://www.youtube.com/embed/Meqfm8vHku8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              <div className="bg"></div>
              </div>
          </div>
        </React.Fragment>
      );
      return;
    }else if(language==='en'){
      return (
        <React.Fragment>
          <Header language={language} toggle={e => toggle(e)}/>
          <AppLayout page="product">
          <div id="fullpage" className="time-none">
            <div id="platform" className="section platform">
              <div className="section-wrap">
                <div className="cont-wrap">
                <div className="title-box">
                  <h2><span className="subtitle">PLATFORM</span>Development of Vehicle Control Products for Mobility Platforms</h2>
                  <p className="text">We have developed vehicle control hardware and software to promote B2B and B2C projects.</p>
                </div>
                <div className="info-cont">
                  <img src="../@resource/images/common/bg_product_flatform_en.png" alt="" className="for-pc"/>
                  <img src="../@resource/images/common/bg_product_flatform_mo_en.jpg" alt="" className="for-mobile"/>
                  <div className="blind">
                    <dl>
                        <dt>Vehicle Communication Technology</dt>
                        <dd>BLE &middot; RFID &middot; UWB</dd>
                    </dl>
                    <ul>
                        <li>Firmware</li>
                        <li>App Services</li>
                        <li>Controls</li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>

            <div id="achakey" className="section achakey">
              <div className="section-wrap">
                <div className="cont-wrap">
                  <div className="title-box left small">
                    <h2 className="title"><span className="subtitle">ACHAKEY</span>Achakey</h2>
                    <p className="addition">Achakey - No.1 Digital Car Key</p>
                    <p className="text medium">As long as I have an Achakey, <br className="for-pc"/>I can unlock and lock the car door <br className="for-pc"/>and share the car with my family <br className="for-pc"/>and friends using the Achakey app. </p>
                    <p className="text medium">Achakey is a product and app that controls <br className="for-pc"/>the vehicle in response to <br className="for-pc"/>the vehicle's Smart Key, and it was launched <br className="for-pc"/>in Korea in July, 2019 <br className="for-pc"/>to respond to all vehicles worldwide.</p>
                    <div className="btn-area">
                        <a href="http://211.253.27.6:148" target="_blank" className="btn medium round darkgray arrow">Check out Achakey in detail</a>
                        <a href="https://smartstore.naver.com/achakey" target="_blank" className="btn medium round orange arrow">Buying Achakey</a>
                    </div>
                  </div>                            
                </div>
              </div>
            </div>

            <div id="autoq" className="section autoq">
              <div className="section-wrap">
                <div className="cont-wrap">
                  <div className="title-box left small">
                    <h2 className="title"><span className="subtitle">AUTO Q</span>KIA AutoQ </h2>
                    <p className="addition">Q-solution The Driving APP KEY</p>
                    <p className="text medium">Kia Motors' national service network - AutoQ brand product was launched in June 2020 <br className="for-pc"/>in recognition of Achaki's product quality and safety. </p>
                    <p className="text medium">It is installed in the selected model of Kia Motors, and can use door lock, <br className="for-pc"/>unlock, trunk open, etc. as the Achakey app without a smart key.</p>
                    <div className="btn-area">
                      <a href="http://211.253.27.6:148/autoq" target="_blank" className="btn medium round darkgray arrow">Learn more about AutoQ Appkeys</a>
                      <a href="http://211.253.27.6:148/autoq?popup" target="_blank" className="btn medium round orange arrow">To check the installation center</a>
                    </div>
                  </div>                            
                </div>
              </div>
            </div>

            <div id="tuix" className="section tuix">
              <div className="section-wrap">
                <div className="cont-wrap">
                  <div className="title-box left">
                    <h2 className="title"><span className="subtitle">TUIX IoT</span>Hyundai Motor Venue<br className="for-pc"/>TUIX IoT</h2>
                    <p className="addition">No.1 Digital Car Key</p>
                    <p className="text medium">As long as I have an Achakey, I can unlock and lock the car door and <br className="for-pc"/>share the car with my family and friends using the Achakey app. </p>
                    <p className="text medium">Achakey is a product and app that controls the vehicle in response <br className="for-pc"/>to the vehicle's Smart Key, and it was launched in Korea in July, 2019 <br className="for-pc"/>to respond to all vehicles worldwide.</p>
                    <div className="btn-area">
                      <a href="#" onClick={e => e.preventDefault()} className="btn medium round darkgray arrow open-vod">View the use case video of TUIX IoT</a>
                      <a href="https://www.hyundai.com/kr/ko/e/vehicles/venue/intro#HGenuineAccessories" target="_blank" className="btn medium round orange arrow">Go to Product Details</a>
                    </div>
                  </div>                            
                </div>
              </div>
            </div>

            <div id="productLast" className="section last">
              <div className="section-wrap">
                  <div className="info-cont">
                      <h3>Tuneit is focused on developing reliable products.</h3>
                      <ul className="explain">
                          <li>
                              <StyledLink className="footer-href" data-href="/about" to="/about">
                                  <span className="title">Company</span>
                              </StyledLink>
                              <p className="text">Tuneit prepares for the future of mobility.</p>
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
        <div id="popVOD" className="layer-popup pop-vod">
              <div className="layer-wrap">
                  <div className="popup-wrap">            
                      <div className="popup-content">
                          <button type="button" className="pop-close">닫기</button>
                          <div className="form-wrap">
                              <div className="video-area">
                                  <iframe width="799" height="449" src="https://www.youtube.com/embed/Meqfm8vHku8" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                              </div>
                          </div>
                      </div>
                  </div>
              <div className="bg"></div>
              </div>
          </div>
        </React.Fragment>
      )
    }
}

export default Product;
