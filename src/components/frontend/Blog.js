import React from 'react'
import { Link } from 'react-router-dom'

import img1 from '../../assets/img/blog/blog-1.jpg'
import img2 from '../../assets/img/blog/blog-2.jpg'
import img3 from '../../assets/img/blog/blog-3.jpg'
import img4 from '../../assets/img/blog/blog-4.jpg'
import img5 from '../../assets/img/blog/blog-5.jpg'
import img6 from '../../assets/img/blog/blog-6.jpg'
import img7 from '../../assets/img/blog/blog-7.jpg'
import img8 from '../../assets/img/blog/blog-8.jpg'
import img9 from '../../assets/img/blog/blog-9.jpg'
import img10 from '../../assets/img/blog/blog-10.jpg'
import Header from '../../layouts/Header'
import Footer from '../../layouts/Footer'


function Blog() {
    return (
        <>
        <Header />
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <Link to="./index.html"><i className="fa fa-home"></i> Home</Link>
                                <span>Blog</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="blog spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic large__item set-bg"  
                                style={{ 
                                    backgroundImage: `url(${img1})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                  }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">No Bad Blood! The Reason Why Tamr Judge Finally Made Up With...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{ 
                                    backgroundImage: `url(${img2})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                  }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">Pot Party! See Farrah Abraham Flaunt Smoking Body At...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{ 
                                    backgroundImage: `url(${img3})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                  }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">CMT Awards 2019 Red Carpet Arrivals Carrie Underwood, Sheryl...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{ 
                                    backgroundImage: `url(${img4})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat'
                                  }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">Amf Cannes Red Carpet Celebrities Kendall Jenner, Pamela...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{
                                    backgroundImage:`url(${img5})`,
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat:"no-repeat"
                                }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">Ireland Baldwin Shows Off Trendy Ilse Valfre Tattoo At Stagecoach...</Link>
                                    </h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{
                                    backgroundImage:`url(${img6})`,
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat:"no-repeat"
                                }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">Kim Kardashian Steps Out In Paris Wearing Shocking Sparkly...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{
                                    backgroundImage:`url(${img7})`,
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat:"no-repeat"
                                }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">A-list Battle! Angelina Jolie & Lady Gaga Fighting Over Who...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{
                                    backgroundImage:`url(${img8})`,
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat:"no-repeat"
                                }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">Gigi Hadid, Rita Ora, Serena & Other Hot Celebs Stun At 2019...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item__pic set-bg" style={{
                                    backgroundImage:`url(${img9})`,
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat:"no-repeat"
                                }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">Billboard Music Awards: Best, Worst & Wackiest Dresses On The...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="blog__item">
                                <div className="blog__item__pic large__item set-bg" style={{
                                    backgroundImage:`url(${img10})`,
                                    backgroundSize:"cover",
                                    backgroundPosition:"center",
                                    backgroundRepeat:"no-repeat"
                                }}></div>
                                <div className="blog__item__text">
                                    <h6><Link to="#">Stephanie Pratt Busts Out Of Teeny Black Bikini During Hawaii...</Link></h6>
                                    <ul>
                                        <li>by <span>Ema Timahe</span></li>
                                        <li>Seb 17, 2019</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12 text-center">
                            <Link to="#" className="primary-btn load-btn">Load more posts</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Blog