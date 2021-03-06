import React from "react";

function Project(props) {
  return (
    <>
      <div className="tab3" style={{ display: "block" }}>
        <div className="row">
          <div className="col-md-6 course">
            <div className="wrap">
              <a href="#adss" className="cover">
                <img src="/img/img8.png" alt="đasdasd" />
              </a>
              <div className="info">
                <a href="#frfrffr" className="name">
                  Furnitown
                </a>
                <p className="des">
                  Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                </p>
              </div>
              <div className="bottom">
                <div className="teacher">
                  <div className="avatar">
                    <img src="/img/avt.png" alt="Đasda" />
                  </div>
                  <div className="name">Trần Nghĩa</div>
                </div>
                <div className="register-btn">Website</div>
              </div>
            </div>
          </div>
          <div className="col-md-6 course">
            <div className="wrap">
              <a href="#fffffr" className="cover">
                <img src="/img/img8.png" alt="clclc" />
              </a>
              <div className="info">
                <a href="#ytytyt" className="name">
                  GboxMB
                </a>
                <p className="des">
                  Dự án hoàn thành trong khóa CFD1 Offline của CFD Team.
                </p>
              </div>
              <div className="bottom">
                <div className="teacher">
                  <div className="avatar">
                    <img src="/img/avt.png" alt="dsadsadd" />
                  </div>
                  <div className="name">Trần Nghĩa</div>
                </div>
                <div className="register-btn">Website</div>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-wrap">
          <div className="btn overlay btn-icon round">
            <img src="/img/icon-upload.svg" alt="sccccc" /> Tải lên
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
