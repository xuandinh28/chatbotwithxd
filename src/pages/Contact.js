import React, { useState } from 'react'
import contactImg from "../images/contactImg.png"

export default function Contact() {

  const [data, setData] = useState(
    {
      email : "",
      phone : "",
      message : "",
    }
  );

  const monitorInput = (event) => {
    const { name, value } = event.target;
    setData({...data, [name]:value});
  };

  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `Email : ${data.email}.
Phone : ${data.phone}.
Message : ${data.message}.`
    );
  };

  return (
    <>
      <div className="mt-5">
        <h1 className="text-center">Liên hệ với chúng tôi</h1>
      </div>
      <div id="header" className="d-flex align-items-start pt-md-4 pt-0 contact-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 col-sm-10 row mx-auto py-5 justify-content-center align-items-center">
              <div className="col-md-6 d-none d-md-block">
                <img src={contactImg} alt="Contact Us" className="img-fluid" />
              </div>
              <div className="col-md-6">
                <form id="form" onSubmit={formSubmit}>
                  <p className="form-label">Email</p>
                  <div className="d-flex align-items-center gap-2">
                    <div className="input-icon d-flex justify-content-center align-items-center">📧</div>
                    <input
                      type="email"
                      name="email"
                      className="form-control bg-transparent"
                      placeholder="Điền vào Email"
                      value={data.email}
                      onChange={monitorInput}
                    />
                  </div>
                  <br />
                  <p className="form-label">Số điện thoại</p>
                  <div className="d-flex align-items-center gap-2">
                    <div className="input-icon d-flex justify-content-center align-items-center">📞</div>
                    <input
                      type="text"
                      name="phone"
                      className="form-control bg-transparent"
                      placeholder="Điền số điện thoại"
                      value={data.phone}
                      onChange={monitorInput}
                    />
                  </div>
                  <br />
                  <p className="form-label">Góp ý của khách hàng</p>
                  <textarea
                    name="message"
                    cols="30"
                    rows="5"
                    className="form-control bg-transparent"
                    placeholder="Heo Béo mong nhận được những góp ý giúp xây dựng cửa hàng..."
                    value={data.message}
                    onChange={monitorInput}
                  ></textarea>
                  <button type="submit" className="btn btn-primary mt-3 px-4" id="send-btn">Gửi</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}