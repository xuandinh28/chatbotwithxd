import React from 'react';
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../images/logo1.jpg";
import logoGH from "../images/logoGH.jpg";

export default function NavBar() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-10 col-12 mx-auto">
            <nav className="navbar navbar-expand-lg bg-transparent">
              <div className="container-fluid">
                <Link className="navbar-brand d-flex align-items-center gap-3" to="/"><img src={logo} width="40" alt="ChillGrill" />Heo Béo</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* Main Navigation Menu */}
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-1">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">Trang Chủ</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/menu">Thực Đơn</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">Thông tin</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/contact">Liên Hệ</NavLink>
                    </li>
                  </ul>
                  {/* Right Navigation options */}
                  <ul className="navbar-nav align-items-start align-items-lg-center mb-2 mb-lg-0 gap-1"> 
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/login">Đăng nhập</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/join">Đăng ký</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/cart">
                        <div className="cartIcon d-flex justify-content-center align-items-center">
                          <i className="fa-solid fa-basket-shopping"></i><img src={logoGH} width="50" />
                        </div>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <Outlet />
    </>
  )
}