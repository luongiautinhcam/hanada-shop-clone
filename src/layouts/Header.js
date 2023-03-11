import React from 'react'
import { Link } from 'react-router-dom'
// import { Link }  from 'react-router-dom'
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone} from "@fortawesome/free-solid-svg-icons";
// import '../assets/css/style.css'
import '../assets/css/style.css'
import '../assets/css/slicknav.min.css'
import '../assets/css/magnific-popup.css'

import logo from '../assets/img/logo.jpg'

function Header() {
  return (
    <>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-3 col-lg-2">
                            <div className="header__logo">
                                <Link to="/"><img src={logo} alt="" /></Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <nav className="header__menu">
                                <ul>
                                    <li className="active"><Link to="/">Trang chủ</Link></li>
                                    <li><Link to="/">Trang sức bạc</Link>
                                        <ul className="dropdown">
                                            <li><Link to="/product">Nhẫn Bạc</Link></li>
                                            <li><Link to="/product">Dây Chuyền Bạc</Link></li>
                                            <li><Link to="/product">Lắc Tay Bạc</Link></li>
                                            <li><Link to="/product">Bông Tai Bạc</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/product">Trang sức vàng</Link></li>
                                    <li><Link to="">Kẹp cài tóc</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/contact">Liên hệ</Link></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-lg-3">
                            <div className="header__right">
                                <div className="header__right__auth">
                                    <Link to="/">Đăng nhập</Link>
                                    <Link to="/">Đăng ký</Link>
                                </div>
                                <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch">
                                    </span></li>
                                    <li><Link to="/"><span className="icon_heart_alt">
                                    </span>
                                        <div className="tip">0</div>
                                    </Link></li>
                                    <li><Link to="/"><span className="icon_bag_alt"></span>
                                        <div className="tip">0</div>
                                    </Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="canvas__open">
                        <i className="fa fa-bars"></i>
                    </div>
                </div>
            </header>
        </>
  )
}

export default Header
