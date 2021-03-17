import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import swal from 'sweetalert';
import { Context } from '../App';
import useFormValidate from '../core/hook/useFormValidate';
function PopupRegister(props, ref) {

    const styles = {
        errorText: {
            paddingLeft: 0,
            fontWeight: 400,
            color: "red",
            marginBottom: 10
        }
    }
    let { form, inputChange, error, submit } = useFormValidate({
        name: '',
        username: '',
        password: ''
    }, {
        rule: {
            name: {
                required: true
            },
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
            name: {
                required: "Họ và tên không được để trống"
            },
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
    // let auth = useAuth();
    function btnClick(e) {
        e.preventDefault();

        let error = submit();
        if (Object.keys(error).length === 0) {
            fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/register", {
                  //http://localhost:8888/elearning/v4/regiser
                // http://cfd-reactjs.herokuapp.com/elearning/v4/register
                method: "POST",
                body: JSON.stringify(form),
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(res => res.json())
                .then(res => {
                    console.log(res)
                    if(res.data){
                        // auth.loginAction(res.data);
                        swal("Đăng kí thành công!", "You clicked the button!", "success");
                        context.openPopupLogin();
                    }
                })



        }
    }



    return ReactDOM.createPortal(
        <div className="popup-form popup-login" ref={ref} style={{ display: "none" }} >
            <div className="wrap">
                {/* login-form */}
                <div className="ct_login" style={{ display: "block" }}>
                    <h2 className="title">Đăng kí</h2>
                    <input type="text" placeholder="Name" name="name" onChange={inputChange} value={form.name} />
                    {error.name && <p className="error-text" style={styles.errorText}>{error.name}</p>}
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
                        <span style={{cursor: "pointer"}} className="forget" onClick={context.openPopupLogin}>
                            Đăng nhập
                        </span>
                    </div>
                    <div className="btn rect main btn-login" onClick={btnClick} >đăng kí</div>
                    <div className="text-register" style={{}}>
                        <strong>hoặc đăng ký bằng</strong>
                    </div>
                    <div>
                        <div className="btn btn-icon rect white btn-google">
                            <img src="/img/google.svg" alt="ád" />
                  Google
                </div>
                    </div>
                    <div className="close" onClick={context.closePopupRegister}>
                        <img src="/img/close-icon.png" alt="aaaa" />
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

export default React.forwardRef(PopupRegister);