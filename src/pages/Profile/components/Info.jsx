import React from 'react';
import swal from 'sweetalert';
import userApi from '../../../api/userApi';
import { useAuth } from '../../../core/hook/useAuth';
import useFormValidate from '../../../core/hook/useFormValidate';

const styleInput = {
    color: "red"
}

function Info(props) {

    let auth = useAuth();
    let { form, error, inputChange, submit } = useFormValidate({
        name: '',
        phone: '',
        email: auth.login.username,
        fb: '',
        payment: 'chuyen-khoan',
        note: ''
    }, {
        rule: {
            name: {
                required: true
            },
            phone: {
                pattern: 'phone'
            },
            email: {
                pattern: 'email'
            },
            fb: {
                pattern: 'url'
            },
            skype: {
                required: true
            }
        },
        message: {
            name: {
                required: 'Họ và tên không được để trống'
            },
            phone: {
                pattern: "Số điện thoại không đúng định dạng"
            },
            email: {
                pattern: 'Email không đúng định dạng'
            },
            fb: {
                pattern: 'FB URL không đúng định dạng'
            },
            skype: {
                required: "Skype không được để trống"
            }
        }
    })

    let user = JSON.parse(localStorage.getItem("login"));
    console.log(user);

    const btnClick = async () => {
        let error = submit();
        if (Object.keys(error).length === 0) {
            let user = JSON.parse(localStorage.getItem("login"));
            console.log(user);
            user.name = form.name;
            user.phone = form.phone;
            user.email = form.email;
            let res = await userApi.update(user);
            console.log(res);
            // console.log(res);
            if (res) {
                auth.loginAction(user);
                swal("Cập nhật thành công", "You clicked the button!", "success");
            }
        }
    }

    return (
        <>
            <div className="tab1" style={{ display: "block" }}>
                <label>
                    <p>
                        Họ và tên<span>*</span>
                    </p>
                    <input  type="text" placeholder="Nguyễn Văn A" name="name" onChange={inputChange} value={form.name} />

                </label>
                {error.name && <p className="error-text" style={{color: "red"}}>{error.name}</p>}
                <label>
                    <p>
                        Số điện thoại<span>*</span>
                    </p>
                    <input type="text" placeholder="0949******" name="phone" onChange={inputChange} value={form.phone} />

                </label>
                {error.phone && <p className="error-text" style={{color: "red"}}>{error.phone}</p>}
                <label>
                    <p>
                        Email<span>*</span>
                    </p>
                    <input
                        defaultValue="vuong.dang@dna.vn"
                        disabled="true"
                        type="text"
                        name="email" onChange={inputChange} value={form.email}
                    />

                </label>
                {error.email && <p className="error-text" style={{color: "red"}}>{error.email}</p>}
                <label>
                    <p>
                        Facebook<span>*</span>
                    </p>
                    <input type="text" placeholder="Facebook url" name="fb" onChange={inputChange} value={form.fb} />

                </label>
                {error.fb && <p className="error-text" style={{color: "red"}}>{error.fb}</p>}
                <label>
                    <p>
                        Skype<span>*</span>
                    </p>
                    <input type="text" placeholder="Skype url" name="skype" onChange={inputChange} value={form.skype} />

                </label>
                {error.skype && <p className="error-text" style={{color: "red"}}>{error.skype}</p>}
                <div className="btn main rect" onClick={btnClick}>LƯU LẠI</div>
            </div>
        </>
    );
}

export default Info;