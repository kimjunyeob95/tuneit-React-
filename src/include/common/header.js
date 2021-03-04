/* eslint-disable no-script-url */
import React, { useState } from "react";
import {StyledLink } from "./style";

  
const Header = (props) => {
    
    const [language,setLanguage] = useState(props.language);
    const setLanguages = (e,language) => {
        e.preventDefault();
        props.toggle(language);
        setLanguage(language);
    }
    var current_path = window.location.pathname;
    if(current_path === '/'){
        current_path='main';
    }else{
        current_path = current_path;
    }
    if(language==='ko'){
        return (
            <header id="header" data-language={language}>
                <div className="inner">
                    <h1>
                        <StyledLink data-href="main" id="main-link" to="/">
                                <span className="blind">tuneit</span>
                        </StyledLink>
                        <span className="blind">tuneit</span>
                    </h1>
                    <button type="button" className="menu-open for-mobile">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                            <g id="Menu" transform="translate(-305 -94)">
                                <path id="White" className="svg-menu" d="M315,122v-2h20v2H315z M315,115v-2h20v2H315z M315,108v-2h20v2H315z"/>
                            </g>
                        </svg>
                    </button>
                    <div id="topMenu">
                        <div className="gnb-wrap">
                        <ul className="gnb" id="menu">
                            <li>
                            <StyledLink data-href="/about" to="/about">
                                <span>ABOUT</span>
                            </StyledLink>
                            </li>
                            <li>
                            <StyledLink data-href="/product" to="/product">
                                <span>PRODUCT</span>
                            </StyledLink>
                            </li>
                            <li>
                            <StyledLink data-href="/solution" to="/solution">
                                <span>SOLUTION</span>
                            </StyledLink>
                            </li>
                            <li>
                            <StyledLink data-href="/contact" to="/contact">
                                <span>CONTACT</span>
                            </StyledLink>
                            </li>
                        </ul>
                        </div>
                        <div className="language-area" id="language">
                            <ul>
                                <li className="active"><a href="#" className="language-btn active" data-language="ko" data-href={current_path} onClick={(e)=>setLanguages(e,'ko')}><span>KR</span></a></li>
                                <li><a href="#" className="language-btn" data-language="en" data-href={current_path} onClick={(e)=>setLanguages(e,'en')}><span>EN</span></a></li>
                            </ul>
                        </div>
                    </div>
          
                    <div id="mobileMenu">
                        <div className="menu-list">
                            <button type="button" className="menu-close">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40" >
        
                                <path className="svg-close01" d="M0,0h40v40H0V0z"/>
                                <path className="svg-close02" d="M20,21.4l-6.4,6.4l-1.4-1.4l6.4-6.4l-6.4-6.4l1.4-1.4l6.4,6.4l6.4-6.4l1.4,1.4L21.4,20l6.4,6.4l-1.4,1.4 L20,21.4z"/>
                                </svg>
                            </button>
                            <ul className="gnb">
                                <li>
                                <StyledLink data-href="/about" to="/about">
                                    <span>ABOUT</span>
                                </StyledLink>
                                </li>
                                <li>
                                <StyledLink data-href="/product" to="/product">
                                    <span>PRODUCT</span>
                                </StyledLink>
                                </li>
                                <li>
                                <StyledLink data-href="/solution" to="/solution">
                                    <span>SOLUTION</span>
                                </StyledLink>
                                </li>
                                <li>
                                <StyledLink data-href="/contact" to="/contact">
                                    <span>CONTACT</span>
                                </StyledLink>
                                </li>
                            </ul>
                            <ul className="m-util">
                                <li className="active"><a href="#" className="language-btn active" data-language="ko" data-href={current_path} onClick={(e)=>setLanguages(e,'ko')}>KR</a></li>
                                <li><a href="#" className="language-btn" data-language="en" data-href={current_path} onClick={(e)=>setLanguages(e,'en')}>EN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
          );
    }else if(language==='en'){
        return (
            <header id="header" data-language={language}>
                <div className="inner">
                    <h1>
                        <StyledLink data-href="main" id="main-link" to="/">
                                <span className="blind">tuneit</span>
                        </StyledLink>
                        <span className="blind">tuneit</span>
                    </h1>
                    <button type="button" className="menu-open for-mobile">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                            <g id="Menu" transform="translate(-305 -94)">
                                <path id="White" className="svg-menu" d="M315,122v-2h20v2H315z M315,115v-2h20v2H315z M315,108v-2h20v2H315z"/>
                            </g>
                        </svg>
                    </button>
                    <div id="topMenu">
                        <div className="gnb-wrap">
                        <ul className="gnb" id="menu">
                            <li>
                            <StyledLink data-href="/about" to="/about">
                                <span>ABOUT</span>
                            </StyledLink>
                            </li>
                            <li>
                            <StyledLink data-href="/product" to="/product">
                                <span>PRODUCT</span>
                            </StyledLink>
                            </li>
                            <li>
                            <StyledLink data-href="/solution" to="/solution">
                                <span>SOLUTION</span>
                            </StyledLink>
                            </li>
                            <li>
                            <StyledLink data-href="/contact" to="/contact">
                                <span>CONTACT</span>
                            </StyledLink>
                            </li>
                        </ul>
                        </div>
                        <div className="language-area" id="language">
                            <ul>
                                <li><a href="#" className="language-btn" data-language="ko" data-href={current_path} onClick={(e)=>setLanguages(e,'ko')}><span>KR</span></a></li>
                                <li className="active"><a href="#" data-language="en" data-href={current_path} className="language-btn active" onClick={(e)=>setLanguages(e,'en')}><span>EN</span></a></li>
                            </ul>
                        </div>
                    </div>
          
                    <div id="mobileMenu">
                        <div className="menu-list">
                            <button type="button" className="menu-close">
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40" >
        
                                <path className="svg-close01" d="M0,0h40v40H0V0z"/>
                                <path className="svg-close02" d="M20,21.4l-6.4,6.4l-1.4-1.4l6.4-6.4l-6.4-6.4l1.4-1.4l6.4,6.4l6.4-6.4l1.4,1.4L21.4,20l6.4,6.4l-1.4,1.4 L20,21.4z"/>
                                </svg>
                            </button>
                            <ul className="gnb">
                                <li>
                                <StyledLink data-href="/about" to="/about">
                                    <span>ABOUT</span>
                                </StyledLink>
                                </li>
                                <li>
                                <StyledLink data-href="/product" to="/product">
                                    <span>PRODUCT</span>
                                </StyledLink>
                                </li>
                                <li>
                                <StyledLink data-href="/solution" to="/solution">
                                    <span>SOLUTION</span>
                                </StyledLink>
                                </li>
                                <li>
                                <StyledLink data-href="/contact" to="/contact">
                                    <span>CONTACT</span>
                                </StyledLink>
                                </li>
                            </ul>
                            <ul className="m-util">
                                <li><a href="#" data-language="ko" className="language-btn" data-href={current_path} onClick={(e)=>setLanguages(e,'ko')}>KR</a></li>
                                <li className="active"><a href="#" data-language="en" data-href={current_path} className="language-btn active" onClick={(e)=>setLanguages(e,'en')}>EN</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
          );
    }
  
};

export default Header;
