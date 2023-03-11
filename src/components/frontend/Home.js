import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

//Countdown discount
import Countdown from "./Countdown";
import moment from "moment";

import axios from "axios";

import category6 from "../../assets/img/categories/category-6.jpg";
import category7 from "../../assets/img/categories/category-7.jpg";
import category8 from "../../assets/img/categories/category-8.jpg";
import category9 from "../../assets/img/categories/category-9.jpg";
import category10 from "../../assets/img/categories/category-10.jpg";

//Image discount
import discount from "../../assets/img/discount.jpg";

function Home() {
  const endDate = moment()
    .add(1, "day")
    .add(1, "hour")
    .add(30, "minutes")
    .add(10, "seconds");
  const day = endDate.get("date"); // Lấy ngày trong tháng
  const hour = endDate.get("hour"); // Lấy giờ trong ngày
  const minute = endDate.get("minute"); // Lấy phút trong giờ
  const second = endDate.get("second"); // Lấy giây trong phút

  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/products").then((res) => {
      setproduct(res.data);
    });
  }, []);

  return (
    <body>
      <Header />
      <section className="categories">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div
                className="categories__item categories__large__item set-bg"
                style={{ backgroundImage: `url(${category6}` }}
              >
                {/* <div className="categories__text">
                  <h1>Women’s fashion</h1>
                  <p>
                    Sitamet, consectetur adipiscing elit, sed do eiusmod tempor
                    incidid-unt labore edolore magna aliquapendisse ultrices
                    gravida.
                  </p>
                  <Link to="/">Shop now</Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category7}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Men’s fashion</h4>
                      <p>358 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category8}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Kid’s fashion</h4>
                      <p>273 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category9}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Cosmetics</h4>
                      <p>159 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 p-0">
                  <div
                    className="categories__item set-bg"
                    style={{ backgroundImage: `url(${category10}` }}
                  >
                    {/* <div className="categories__text">
                      <h4>Accessories</h4>
                      <p>792 items</p>
                      <Link to="/">Shop now</Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="banner set-bg" data-setbg="img/banner/banner-1.jpg">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 m-auto">
              <div className="banner__slider owl-carousel">
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/">Shop now</Link>
                  </div>
                </div>
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/">Shop now</Link>
                  </div>
                </div>
                <div className="banner__item">
                  <div className="banner__text">
                    <span>The Chloe Collection</span>
                    <h1>The Project Jacket</h1>
                    <Link to="/">Shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="trend spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="trend__content">
                <div className="section-title">
                  <h4>Đang Hot</h4>
                </div>
                {product.map((item, index) => {
                  return index <= 2 ? (
                    <div className="trend__item">
                      <div className="trend__item__pic">
                        <img src={item.img1} alt="" width={90} height={90} />
                      </div>
                      <div className="trend__item__text">
                        <h6>
                          <Link
                            to={`/productdetail/${item.id}`}
                            style={{ color: "#000000" }}
                          >
                            {item.productName}
                          </Link>
                        </h6>
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">
                          {Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="trend__content">
                <div className="section-title">
                  <h4>Bán chạy</h4>
                </div>
                {product.map((item, index) => {
                  return index >= 5 && index < 8 ? (
                    <div className="trend__item">
                      <div className="trend__item__pic">
                        <img src={item.img1} alt="" width={90} height={90} />
                      </div>
                      <div className="trend__item__text">
                        <h6>
                          <Link
                            to={`/productdetail/${item.id}`}
                            style={{ color: "#000000" }}
                          >
                            {item.productName}
                          </Link>
                        </h6>
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">
                          {Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="trend__content">
                <div className="section-title">
                  <h4>Sản phẩm mới</h4>
                </div>
                {product.map((item, index) => {
                  return index >= 2 && index < 5 ? (
                    <div className="trend__item">
                      <div className="trend__item__pic">
                        <img src={item.img1} alt="" width={90} height={90} />
                      </div>
                      <div className="trend__item__text">
                        <h6>
                          <Link
                            to={`/productdetail/${item.id}`}
                            style={{ color: "#000000" }}
                          >
                            {item.productName}
                          </Link>
                        </h6>
                        <div className="rating">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">
                          {Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(item.price)}
                        </div>
                      </div>
                    </div>
                  ) : (
                    ""
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="discount">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 p-0">
              <div className="discount__pic">
                <img src={discount} alt="" />
              </div>
            </div>
            <div className="col-lg-6 p-0">
              <div className="discount__text">
                <div className="discount__text__title">
                  <span>Giảm giá</span>
                  <h2>Mùa hè</h2>
                  <h5>
                    <span>Giảm</span> 50%
                  </h5>
                </div>
                <div className="discount__countdown" id="countdown-time">
                  <h3>
                    <Countdown endDate={endDate} />{" "}
                  </h3>
                </div>
                <Link to="/">Mua ngay</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="services spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-car"></i>
                <h6>Miễn phí ship</h6>
                <p>Với đơn hàng trên 1tr VNĐ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-money"></i>
                <h6>Hoàn tiền 100%</h6>
                <p>Nếu sản phẩm có vấn đề</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-support"></i>
                <h6>Hỗ trợ trực tuyến 24/7</h6>
                <p>Tận tình hỗ trợ</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="services__item">
                <i className="fa fa-headphones"></i>
                <h6>Thanh toán an toàn</h6>
                <p>Bảo mật thanh toán 100%</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </body>
  );
}

export default Home;
