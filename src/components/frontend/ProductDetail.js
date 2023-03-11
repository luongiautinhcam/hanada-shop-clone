import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// import '../../assets/css/owl.carousel.min.css'
import "../../assets/css/jquery-ui.min.css";
import "../../assets/css/slicknav.min.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/font-awesome.min.css";
import "../../assets/css/elegant-icons.css";
import "../../assets/css/bootstrap.min.css";

import img1 from "../../assets/img/product/details/product-1.jpg";

function ProductDetail() {
  const style = {
    overflowY: "hidden",
    outline: "none",
  };
  const id = useParams();
  const [product, setproduct] = useState([]);

  useEffect(() => {
    const productId = id.id;
    axios
      .get(`http://localhost:3001/products/productDetail/${productId}`)
      .then((res) => {
        setproduct(res.data);
      });
  }, []);

  const [myValue, setMyValue] = useState("");

  function handleInputChange(event) {
    setMyValue(event.target.value);
  }

  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(event) {
    setIsChecked(event.target.checked);
  }

  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb__links">
                <a href="/">
                  <i className="fa fa-home"></i> Trang chủ
                </a>
                {product.map((item, index) => {
                  return <span key={index}>{item.productName}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              {product.map((item, index) => {
                return (
                  <div className="product__details__pic" key={item.id}>
                    <div
                      className="product__details__pic__left product__thumb nice-scroll"
                      style={style}
                    >
                      <a className="pt active" href="#product-1">
                        <img src={item.img1} alt="" />
                      </a>
                      <a className="pt" href="#product-2">
                        <img src={item.img2} alt="" />
                      </a>
                      <a className="pt" href="#product-3">
                        <img src={item.img3} alt="" />
                      </a>
                      <a className="pt" href="#product-4">
                        <img src={item.img4} alt="" />
                      </a>
                    </div>
                    <div className="product__details__slider__content">
                      <div className="product__details__pic__slider owl-carousel">
                        <img
                          data-hash="product-1"
                          className="product__big__img"
                          src={item.img1}
                          alt=""
                        />
                        {/* <img data-hash="product-2" className="product__big__img" src={img1} alt="" />
                                      <img data-hash="product-3" className="product__big__img" src={img1} alt="" />
                                      <img data-hash="product-4" className="product__big__img" src={img1} alt="" /> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {product.map((item, index) => {
              return (
                <div className="col-lg-6" key={item.id}>
                  <div className="product__details__text">
                    <h3>
                      {item.productName}
                      <span>Danh mục sản phẩm: {item.CategoryId}</span>
                    </h3>
                    <div className="rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <span>( 138 đánh giá )</span>
                    </div>
                    <div className="product__details__price">
                      {Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.salePrice)}{" "}
                      <span>
                        {Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(item.price)}
                      </span>
                    </div>
                    <p>
                      <li>
                        Bảo hành đánh bóng đánh sáng miễn phí trong suôt quá
                        trình sử dụng
                      </li>
                      <li>Đứt hư gãy hàn sửa chữa phí 20k</li>
                    </p>
                    <div className="product__details__button">
                      <div className="quantity">
                        <span>Số lượng:</span>
                        <div className="pro-qty">
                          <input
                            type="text"
                            value="1"
                            onChange={(event) => setMyValue(event.target.value)}
                          />
                        </div>
                      </div>
                      <Link to="/" className="cart-btn">
                        <span className="icon_bag_alt"></span> Thêm vào giỏ hàng
                      </Link>
                      {/* <ul>
                                <li><Link to="/"><span className="icon_heart_alt"></span></Link></li>
                                <li><Link to="/"><span className="icon_adjust-horiz"></span></Link></li>
                            </ul> */}
                    </div>
                    <div className="product__details__widget">
                      <ul>
                        <li>
                          <span>Tình trạng:</span>
                          <div className="stock__checkbox">
                            <label htmlFor="stockin">
                              Còn hàng
                              <input
                                type="checkbox"
                                id="stockin"
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                              />
                              <span className="checkmark"></span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <span>Màu sắc:</span>
                          <div className="color__checkbox">
                            <label htmlFor="red">
                              <input
                                type="radio"
                                name="color__radio"
                                id="red"
                                checked
                              />
                              <span className="checkmark"></span>
                            </label>
                            <label htmlFor="black">
                              <input
                                type="radio"
                                name="color__radio"
                                id="black"
                              />
                              <span className="checkmark black-bg"></span>
                            </label>
                            <label htmlFor="grey">
                              <input
                                type="radio"
                                name="color__radio"
                                id="grey"
                              />
                              <span className="checkmark grey-bg"></span>
                            </label>
                          </div>
                        </li>
                        <li>
                          <span>Size:</span>
                          <div className="size__btn">
                            <label htmlFor="xs-btn" className="active">
                              <input type="radio" id="xs-btn" />
                              xs
                            </label>
                            <label htmlFor="s-btn">
                              <input type="radio" id="s-btn" />s
                            </label>
                            <label htmlFor="m-btn">
                              <input type="radio" id="m-btn" />m
                            </label>
                            <label htmlFor="l-btn">
                              <input type="radio" id="l-btn" />l
                            </label>
                          </div>
                        </li>
                        <li>
                          <span>Khuyến mãi:</span>
                          <p>Miễn phí giao hàng</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                    >
                      Mô tả
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                    >
                      Chi tiết sản phẩm
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                    >
                      Đánh giá ( 2 )
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <h6>Description</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <h6>Specification</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <h6>Reviews ( 2 )</h6>
                    <p>
                      Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                      aut odit aut loret fugit, sed quia consequuntur magni
                      dolores eos qui ratione voluptatem sequi nesciunt loret.
                      Neque porro lorem quisquam est, qui dolorem ipsum quia
                      dolor si. Nemo enim ipsam voluptatem quia voluptas sit
                      aspernatur aut odit aut loret fugit, sed quia ipsu
                      consequuntur magni dolores eos qui ratione voluptatem
                      sequi nesciunt. Nulla consequat massa quis enim.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                      natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus. Donec quam felis, ultricies nec,
                      pellentesque eu, pretium quis, sem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="related__title">
                <h5>SẢN PHẨM TƯƠNG TỰ</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${img1}` }}
                >
                  <div className="label new">New</div>
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/related/rp-1.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="/">Buttons tweed blazer</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${img1}` }}
                >
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/related/rp-2.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="/">Flowy striped skirt</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 49.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${img1}` }}
                >
                  <div className="label stockout">out of stock</div>
                  <ul className="product__hover">
                    <li>
                      <a
                        href="img/product/related/rp-3.jpg"
                        className="image-popup"
                      >
                        <span className="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="/">Cotton T-Shirt</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{ backgroundImage: `url(${img1}` }}
                >
                  <ul className="product__hover">
                    <li>
                      <a href={img1} className="image-popup">
                        <span className="arrow_expand"></span>
                      </a>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_heart_alt"></span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <span className="icon_bag_alt"></span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="product__item__text">
                  <h6>
                    <Link to="/">Slim striped pocket shirt</Link>
                  </h6>
                  <div className="rating">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="product__price">$ 59.0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ProductDetail;
