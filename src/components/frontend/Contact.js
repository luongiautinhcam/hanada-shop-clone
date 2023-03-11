import React from 'react'
import Footer from '../../layouts/Footer'
import Header from '../../layouts/Header'

function Contact() {
    return (
        <>
            <Header />
            <div className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__links">
                                <a href="/"><i className="fa fa-home"></i> Trang chủ</a>
                                <span>Liên hệ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contact spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__content">
                                <div className="contact__address">
                                    <h5>Thông tin liên hệ</h5>
                                    <ul>
                                        <li>
                                            <h6><i className="fa fa-map-marker"></i> Địa chỉ</h6>
                                            <p>1180 Cao Lỗ, Phường 4, Quận 8, Thành phố Hồ Chí Min</p>
                                        </li>
                                        <li>
                                            <h6><i className="fa fa-phone"></i> Điện thoại</h6>
                                            <p><span>08-6963-2021</span><span>028-3850-5520</span></p>
                                        </li>
                                        <li>
                                            <h6><i className="fa fa-headphones"></i> Hỗ trợ</h6>
                                            <p>doan@stu.edu.vn</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="contact__form">
                                    <h5>Gửi tin nhắn</h5>
                                    <form >
                                        <input type="text" placeholder="Tên" />
                                        <input type="text" placeholder="Email" />
                                        <input type="text" placeholder="Địa chỉ website" />
                                        <textarea placeholder="Tin nhắn"></textarea>
                                        <button type="submit" className="site-btn">Gửi tin nhắn</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="contact__map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15679.817641153899!2d106.6778321!3d10.7379972!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a90e5dbd%3A0x674d5126513db295!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgU8OgaSBHw7Ju!5e0!3m2!1svi!2s!4v1678437258685!5m2!1svi!2s"
                                    height="780"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    title="Google Maps"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact