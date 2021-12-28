import React from "react";
import { UserPlus } from "react-feather";
import { Link } from "react-router-dom";
import "./Features.css";
function Features() {
  return (
    <div className="bg-color">
      <div className="container px-4 py-4 bg-color" id="featured-3">
        <h3 className="pb-2 border-bottom text-center">步驟</h3>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3 ">
          <div className="feature col hvr-icon-grow-rotate">
            <div className="feature-icon bg-primary bg-gradient  hvr-icon">
              <i className="fas fa-hamburger"></i>
            </div>
            <h2>1. 點餐</h2>
            <p>
              點選你要的餐點{" "}
              <Link to="/menu">前往菜單</Link>.
            </p>
          </div>
          <div className="feature col hvr-icon-grow-rotate">
            <div className="feature-icon bg-primary bg-gradient hvr-icon">
              <UserPlus size={35} color="white"></UserPlus>
            </div>
            <h2>2. 客製化</h2>
            <p>選擇你的偏好</p>
          </div>
          <div className="feature col hvr-icon-grow-rotate">
            <div className="feature-icon bg-primary bg-gradient  hvr-icon">
              <i className="fas fa-motorcycle"></i>
            </div>
            <h2>3. 結帳</h2>
            <p>進行線上付款</p>
          </div>
        </div>
      </div>
    </div>
  );
}
//主頁下面

export default Features;
