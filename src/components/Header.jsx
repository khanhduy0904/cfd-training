import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Context } from '../App';
import { useAuth } from '../core/hook/useAuth';

let $ = window.$;

function Header(props) {

    // let [state,setState] = useState(false);

    useEffect(() => {

        $('.menu-hambeger').on('click', function () {
            $('body').toggleClass('menu-is-show');
        });

        $('#header nav ul').on('click', function (e) {
            e.stopPropagation();
        })
        $('.overlay_nav').on('click', function (e) {
            $('body').removeClass('menu-is-show');
        });

        $(document).keyup(function (e) {
            if (e.key === "Escape") {
                $('body').removeClass('menu-is-show');
            }
        });
    }, [])



    let history = useHistory();
    function delayLink(e) {
        e.preventDefault();
        let payloading = document.querySelector('.pageLoading');
        let div = payloading.querySelector('.loading')


        let scale = Math.sqrt(Math.pow(window.outerHeight, 2) + Math.pow(window.outerWidth, 2)) / 100 * 2
        div.style.transform = `translate(-50%, -50%) scale(${scale})`
        div.style.left = `${e.clientX}px`
        div.style.top = `${e.clientY}px`
        setTimeout(() => {
            history.push(e.target.href?.replace(window.location.origin, '') || '/')
            $('.overlay_nav').trigger('click')
        }, 300)
        setTimeout(() => {
            div.style.transform = `translate(-50%, -50%) scale(${0})`
        }, 600)
        console.log("áds");
    }
    let context = useContext(Context);
    let auth = useAuth();
   

    return (
        <>
            <header id="header">
                <div className="wrap">
                    <div className="menu-hambeger">
                        <div className="button">
                            <span />
                            <span />
                            <span />
                        </div>
                        <span className="text">menu</span>
                    </div>
                    <Link to="/" className="logo" onClick={delayLink}>
                        <img src="/img/logo.svg" alt="aa" />
                        <h1>CFD</h1>
                    </Link>
                    <div className="right">
                        {auth.login ? <div className="have-login">
                            <div className="account">
                                <a href="#" className="info">
                                    <div className="name">{auth.login.name}</div>
                                    <div className="avatar">
                                        <img src="/img/avt.png" alt="dsad" />
                                    </div>
                                </a>
                            </div>
                            <div className="hamberger">
                            </div>
                            <div className="sub">
                                <Link to="/thong-tin-ca-nhan/khoa-hoc" onClick={delayLink}>Khóa học của tôi</Link>
                                <Link to="/thong-tin-ca-nhan" onClick={delayLink}>Thông tin tài khoản</Link>
                                <a href="javascript:void(0)" onClick={auth.logout}>Đăng xuất</a>
                            </div>
                        </div> : <div className="not-login bg-none">
                                <a href="javascript:void(0)" className="btn-register" onClick={context.openPopupLogin}>Đăng nhập</a>
                                <a href="javascript:void(0)" className="btn main btn-open-login" onClick={context.openPopupRegister}>Đăng ký</a>
                            </div>
                        }


                    </div>
                </div>
            </header>
            <nav className="nav">
                <ul>
                    <li className="li_login">

                        {/* <a href="javascript:void(0)">Đăng nhập</a>
                        <a href="javascript:void(0)">Đăng ký</a> */}
                        {
                            !auth.login ? (
                                <>
                                   <a href="javascript:void(0)" onClick={context.openPopupLogin}>Đăng nhập</a>
                                    <a href="javascript:void(0)"onClick={context.openPopupRegister}>Đăng ký</a>
                                </>
                            ) : ""
                        }
                    </li>
                    <li >
                        <Link to="/" onClick={delayLink}>Trang chủ</Link>
                    </li>
                    {/* <li>
                            <Link to="/team">CFD Team</Link>
                        </li> */}
                    <li>
                        <Link to="/khoa-hoc" onClick={delayLink}>Khóa Học</Link>
                    </li>
                    <li>
                        <Link to="/du-an" onClick={delayLink}>Dự Án</Link>
                    </li>
                    <li>
                        <Link to="/lien-he" onClick={delayLink}>Liên hệ</Link>
                    </li>
                </ul>
            </nav>
            <div className="overlay_nav" />
        </>
    );
}

export default Header;