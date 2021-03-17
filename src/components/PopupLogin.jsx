import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import userApi from "../../src/api/userApi";
import { Context } from '../App';
import { useAuth } from '../core/hook/useAuth';
import useFormValidate from '../core/hook/useFormValidate';
function PopupLogin(props, ref) {

  const styles = {
    errorText: {
      paddingLeft: 0,
      fontWeight: 400,
      color: "red"
    }
  }
  let { form, inputChange, error, submit } = useFormValidate({
    username: '',
    password: ''
  }, {
    rule: {
      username: {
        required: true,
        pattern: 'email'
      },
      password: {
        required: true,
        min: 6,
        max: 32
      }
    },
    message: {
      username: {
        pattern: 'Email không đúng định dạng'
      },
      password: {
        min: 'Password phải dài hơn 6 kí tự',
        max: 'Password không được dài hơn 32 kí tự'
      }
    }
  })

  let context = useContext(Context);
  let auth = useAuth();
  async function btnClick(e) {
    e.preventDefault();

    let error = submit();
    if (Object.keys(error).length === 0) {
      // fetch('http://cfd-reactjs.herokuapp.com/elearning/v4/login', {
      //   //http://localhost:8888/elearning/v4/login
      //   // http://cfd-reactjs.herokuapp.com/elearning/v4/login
      //   method: 'POST',
      //   body: JSON.stringify(form),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then(res => {
      //   console.log();
      //   return res.json()
      //   })
      //   .then(res => {
      //     console.log(res.data)
      //     if (res.data) {
      //       auth.loginAction(res.data);
      //       swal("Đăng nhập thành công!", "You clicked the button!", "success");
      //       context.closePopupLogin();
      //     }
      //   })
      //-----------------------------------

      let res = await userApi.login(form);
      if(res.data) {
        auth.loginAction(res.data);
        context.closePopupLogin();
      }
    }
  }



  return ReactDOM.createPortal(
    <div className="popup-form popup-login" ref={ref} style={{ display: "none" }} >
      <div className="wrap">
        {/* login-form */}
        <div className="ct_login" style={{ display: "block" }}>
          <h2 className="title">Đăng nhập</h2>
          <input type="text" placeholder="Email / Số điện thoại" name="username" onChange={inputChange} value={form.username} />
          {error.username && <p className="error-text" style={styles.errorText}>{error.username}</p>}
          <input type="password" placeholder="Mật khẩu" name="password" onChange={inputChange} value={form.password} />
          {error.password && <p className="error-text" style={styles.errorText}>{error.password}</p>}
          <div className="remember">
            <label className="btn-remember">
              <div>
                <input type="checkbox" />
              </div>
              <p>Nhớ mật khẩu</p>
            </label>
            <a href="javascript:void(0)" className="forget" onClick={context.openPopupRegister}>
              Đăng kí
              </a>
          </div>
          <div className="btn rect main btn-login" onClick={btnClick} >đăng nhập</div>
          <div className="text-register" style={{}}>
            <strong>hoặc đăng ký bằng</strong>
          </div>
          <div>
            <div className="btn btn-icon rect white btn-google">
              <img src="/img/google.svg" alt="ll" />
                  Google
                </div>
          </div>
          <div className="close" onClick={context.closePopupLogin}>
            <img src="/img/close-icon.png" alt="aw" />
          </div>
        </div>
        {/* email form */}
        {/* <div className="ct_email">
              <h2 className="title">Đặt lại mật khẩu</h2>
              <input type="text" placeholder="Email" />
              <div className="btn rect main btn-next">Tiếp theo</div>
              <div className="back" />
              <div className="close">
                <img src="img/close-icon.png" alt />
              </div>
            </div> */}
      </div>
    </div>,
    document.getElementById("root2")
  );
}

export default React.forwardRef(PopupLogin);


// import React from 'react'
// import reactDOM from 'react-dom'

// export default function PopupLogin() {
//     return reactDOM.createPortal(
//         <div className="popup-signin" style={{ display: 'none' }}>
//             <div className="wrap">
//                 <form id="login">
//                     <div className="ct_login">
//                         <h2 className="title">Đăng nhập</h2>
//                         <input type="hidden" className="url_post" defaultValue />
//                         <input name="email" type="text" placeholder="Email / Số điện thoại" />
//                         <input name="password" type="password" placeholder="Mật khẩu" />
//                         <p className="mess-error" id="message_login" />
//                         <div className="remember">
//                             <label className="btn-remember">
//                                 <div>
//                                     <input type="checkbox" />
//                                 </div>
//                                 <p>Nhớ mật khẩu</p>
//                             </label>
//                             <a href="#" className="forget btn-open-popup" data-id="reset-password">Quên mật khẩu?</a>
//                         </div>
//                         <div className="btn btn-login btn-register">đăng nhập</div>
//                         <div className="text-register" style={{ fontWeight: 700 }}>
//                             <strong>Hoặc đăng nhập bằng</strong>
//                         </div>
//                         <div>
//                             <div className="btn btn-login btn-google " id="googleSignIn">
//                                 <img src="/img/google.svg" alt="" />
//                     Google
//                   </div>
//                             <p className="mess-error" id="message_login_by_g" />
//                         </div>
//                         <div className="close">
//                             <img src="/img/close-icon.png" alt="" />
//                         </div>
//                     </div>
//                 </form>
//             </div>
//         </div>,
//         document.getElementById('root2')
//     )
// }