import React from "react";

function Course(props) {
  return (
    <div className="col-md-4 course">
      <div className="wrap">
        <a href="#" className="cover">
          <img src="/img/img.png" alt="adads" />
        </a>
        <div className="info">
          <a className="name" href="#">
            React JS
          </a>
          <p className="des">
            One of the best corporate fashion brands in Sydney
          </p>
        </div>
        <div className="bottom">
          <div className="teacher">
            <div className="avatar">
              <img src="/img/avt.png" alt="đasd" />
            </div>
            <div className="name">Vương Đặng</div>
          </div>
          <div className="register-btn">Đăng Ký</div>
        </div>
      </div>
    </div>
  );
}

export default Course;
