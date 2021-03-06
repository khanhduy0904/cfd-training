import React from 'react';

function Footer(props) {
  return (
    <>
      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5 left">
              <p className="des">
                Sáng tạo, tinh tế và phù hợp sẽ khiến sản phẩm của bạn trở nên
                khác biệt.
                </p>
              <p className="address">
                Số 11, Phan Kế Bính, Quận 1, TP. Hồ Chí Minh
                </p>
              <p className="phone">(+84) 98 9596 913</p>
              <div className="social">
                <a className="fb" href="#z">
                  <img src="/img/icon-fb.svg" alt="đa" />
                </a>
                <a className="gmail" href="#x">
                  <img src="/img/icon-gmail.svg" alt="sqwe" />
                </a>
                <a className="skype" href="#c">
                  <img src="img/icon-skype.svg" alt="ádsaasđ" />
                </a>
              </div>
            </div>
            <div className="right">
              <nav>
                <ul>
                  <li>
                    <a href="#a">Trang chủ</a>
                  </li>
                  <li>
                    <a href="#b">Khóa học</a>
                  </li>
                  <li>
                    <a href="#c">Thanh toán</a>
                  </li>
                  <li>
                    <a href="#d">Điều khoản</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <a href="#v" className="back-to-top">
            <div className="line" />
              CUỘN LÊN
            </a>
        </div>
        <div className="copy-right">
          <div className="container">
            <p>2020 Creative Front-End Dev</p>
            <p>Được thiết kế và lập trình bởi CFD Team</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;