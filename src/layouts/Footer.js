import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import "../assets/css/slicknav.min.css";
import "../assets/css/magnific-popup.css";

import logo from '../assets/img/logo.jpg'
import payment1 from "../assets/img/payment/payment-1.png";
import payment2 from "../assets/img/payment/payment-2.png";
import payment3 from "../assets/img/payment/payment-3.png";
import payment4 from "../assets/img/payment/payment-4.png";
import payment5 from "../assets/img/payment/payment-5.png";

import insta from "../assets/img/instagram/insta-7.jpg"

function Footer() {
  return (
    <>
    <div className="instagram">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: `url(${insta}` }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="/">@ hanada</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: `url(${insta}` }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="/">@ hanada</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: `url(${insta}` }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="/">@ hanada</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: `url(${insta}` }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="/">@ hanada</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: `url(${insta}` }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="/">@ hanada</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4 p-0">
              <div
                className="instagram__item set-bg"
                style={{ backgroundImage: `url(${insta}` }}
              >
                <div className="instagram__text">
                  <i className="fa fa-instagram"></i>
                  <Link to="/">@ hanada</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-7">
            <div className="footer__about">
              <div className="footer__logo">
                <a href="./index.html">
                  <img src={logo} alt="" />
                </a>
              </div>
              <p>
              © Copyright 2023 HANADA . All rights reserved. <br />
                Văn phòng 180 Cao Lỗ, phường 4, quận 8, HCM
              </p>
              <div className="footer__payment">
                <Link to="/">
                  <img src={payment1} alt="" />
                </Link>
                <Link to="/">
                  <img src={payment2} alt="" />
                </Link>
                <Link to="/">
                  <img src={payment3} alt="" />
                </Link>
                <Link to="/">
                  <img src={payment4} alt="" />
                </Link>
                <Link to="/">
                  <img src={payment5} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-5">
            <div className="footer__widget">
              <h6>Về Hanada</h6>
              <ul>
                <li>
                  <Link to="/about">Về chúng tôi</Link>
                </li>
                <li>
                  <Link to="/">Hệ thống cửa hàng</Link>
                </li>
                <li>
                  <Link to="/">Tuyển dụng</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-4">
            <div className="footer__widget">
              <h6>Chính sách</h6>
              <ul>
                <li>
                  <Link to="/">Thông tin liên hệ</Link>
                </li>
                <li>
                  <Link to="/">Hướng dẫn đặt hàng</Link>
                </li>
                <li>
                  <Link to="/">Kiểm tra đơn hàng</Link>
                </li>
                <li>
                  <Link to="/">Wishlist</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-md-8 col-sm-8">
            <div className="footer__newslatter">
              <h6>Liên hệ</h6>
              <form action="#">
                <input type="text" placeholder="Nhập email của bạn" />
                <button type="submit" className="site-btn">
                  Đăng ký
                </button>
              </form>
              <div className="footer__social">
                <Link to="/">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-youtube-play"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-instagram"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
            <div className="col-lg-12">
                <div className="footer__copyright__text">
                    <p>Copyright &copy; <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a></p>
                </div>
            </div>
        </div> */}
      </div>
    </footer>
    </>
  );
}

export default Footer;
