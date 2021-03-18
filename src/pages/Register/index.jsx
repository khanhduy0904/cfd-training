import { CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'

import Header from '../../components/Header'
import useFormValidate from '../../core/hook/useFormValidate';
import pageApi from "../../api/pageApi";
import { useRouteMatch } from 'react-router-dom';
import LoadingApi from '../../components/LoadingApi';
import swal from 'sweetalert';

const style = {
    inputError: { color: 'red', fontSize: 14 }
}

export default function Register() {

    let [loading, setLoading] = useState(false);
    let [course, setCourse] = useState();
    let { form, error, inputChange, submit } = useFormValidate({
        name: '',
        phone: '',
        email: '',
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
            }
        },
        message: {
            username: {
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
            }
        }
    })

    let routerMath = useRouteMatch();

    useEffect(() => {
        async function fetchApi(){
            let course = await pageApi.courseDetail(routerMath.params.slug);
            if (course.data) {
                console.log(course.data);
                setCourse(course.data);
            } else {
                setCourse("not found");
            }
        };
        fetchApi();
      
    }, [routerMath.params.slug])



    // let [error, setError] = useState({})

    // function inputChange(event) {
    //     // let target = event.target;

    //     // let val = target.value
    //     // let name = target.getAttribute('name')


    //     // form[event.target.getAttribute('name')] = event.target.value;

    //     setForm({
    //         ...form,
    //         [event.target.getAttribute('name')]: event.target.value
    //     })
    // }


    async function submitBtnClick() {


        // if (loading) {
        //     alert('Ban khong the gui lien tuc')
        //     return;
        // }
        // let error = {}
        // if (!form.username) {
        //     error['username'] = 'Username khong duoc de trong'
        // }


        // if (!form.email) {
        //     error['email'] = 'Email khong duoc de trong'
        // } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(form.email)) {
        //     error['email'] = 'Email khong dung dinh dang'
        // }

        // if (!form.fb) {
        //     error['fb'] = 'FB khong duoc de trong'
        // } else if (!/https?:\/\/(www\.)?facebook.com\/[-a-zA-Z0-9@:%._\+~#=]{1,256}/.test(form.fb)) {
        //     error['fb'] = 'fb khong dung dinh dang'
        // }

        // if (!form.phone) {
        //     error['phone'] = 'Phone khong duoc de trong'
        // } else if (!/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/.test(form.phone)) {
        //     error['phone'] = 'Phone khong dung dinh dang'

        // }

        // setError(error)

        let error = submit();
        console.log(error)
        if (Object.keys(error).length === 0) {
            setLoading(true)
            setTimeout(() => {
                // alert('dang ky thanh cong')
                setLoading(false)
            }, 1000)
            let res = await pageApi.register(routerMath.params.slug, form);
            console.log(res);
            if(res){
                swal("Đăng kí khóa học thành công", "You clicked the button!", "success");
            }
            
        }

    }

    if (!course) return <LoadingApi />
    if (course === "not found") return <LoadingApi >Khóa học không tồn tại</ LoadingApi >
    let money = new Intl.NumberFormat('vn').format(course.money)

    return (
        <>
            <Header />
            <main className="register-course" id="main">
                <section>
                    <div className="container">
                        <div className="wrap container">
                            <div className="main-sub-title">ĐĂNG KÝ</div>
                            <h1 className="main-title">{course.title}</h1>
                            <div className="main-info">
                                <div className="date"><strong>Khai giảng:</strong>{course.opening_time}</div>
                                <div className="time"><strong>Thời lượng:</strong>{course.video_count} buổi</div>
                                <div className="time"><strong>Học phí:</strong> {money} VND</div>
                            </div>
                            {
                                course.course_status === "da-ket-thuc" ?
                                    (
                                        <div
                                            style={{
                                                fontSize: 30,
                                                marginTop: 20,
                                                fontWeight: "normal",
                                                color: "black",
                                                textAlign: "center",
                                                lineHeight: 1.2
                                            }}
                                        >
                                            Khóa học đã kết thúc, vui lòng đăng kí khóa học sắp khai giản
                                        </div>
                                    ) : course.course_status === "dang-dien-ra" ? (
                                        <div
                                            style={{
                                                fontSize: 30,
                                                marginTop: 20,
                                                fontWeight: "normal",
                                                color: "black",
                                                textAlign: "center",
                                                lineHeight: 1.2
                                            }}
                                        >
                                            Khóa học đang diễn ra, vui lòng đăng kí khóa học sắp khai giản
                                        </div>
                                    ) : ""
                            }        
                            {
                                course.course_status === "sap-khai-gian" ? (
                                    <div className="form">
                                        <label>
                                            <p>Họ và tên<span>*</span></p>
                                            <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="name" value={form.name} />
                                        </label>
                                        {
                                            error.name && <p className="error" style={style.inputError}>{error.name}</p>
                                        }
                                        <label>
                                            <p>Số điện thoại<span>*</span></p>
                                            <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone} />
                                        </label>
                                        {
                                            error.phone && <p className="error" style={style.inputError}>{error.phone}</p>
                                        }
                                        <label>
                                            <p>Email<span>*</span></p>
                                            <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                                        </label>
                                        {
                                            error.email && <p className="error" style={style.inputError}>{error.email}</p>
                                        }
                                        <label>
                                            <p>URL Facebook<span>*</span></p>
                                            <input type="text" placeholder="https://facebook.com" name="fb" onChange={inputChange} value={form.fb} />
                                        </label>
                                        {
                                            error.fb && <p className="error" style={style.inputError}>{error.fb}</p>
                                        }
                                        <label className="disable">
                                            <p>Sử dụng COIN</p>
                                            <div className="checkcontainer">
                                                Hiện có <strong>300 COIN</strong>
                                                {/* Giảm giá còn <span><strong>5.800.000 VND</strong>, còn lại 100 COIN</span> */}
                                                {/* Cần ít nhất 200 COIN để giảm giá */}
                                                <input type="checkbox" defaultChecked="checked" />
                                                <span className="checkmark" />
                                            </div>
                                        </label>
                                        <label>
                                            <p>Hình thức thanh toán</p>
                                            <div className="select">
                                                <div className="head">Chuyển khoản</div>
                                                <div className="sub">
                                                    <a href="#hghghg">Chuyển khoản</a>
                                                    <a href="#hyhyhyhhy">Thanh toán tiền mặt</a>
                                                </div>
                                            </div>
                                        </label>
                                        <label>
                                            <p>Ý kiến cá nhân</p>
                                            <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={inputChange} name="note" value={form.note} />
                                        </label>
                                        <div className="btn main rect" onClick={submitBtnClick} >đăng ký {loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
                                    </div>
                                )
                                    : <></>
                            }
                            {/* <div className="form">
                                <label>
                                    <p>Họ và tên<span>*</span></p>
                                    <input type="text" placeholder="Họ và tên bạn" onChange={inputChange} name="name" value={form.name} />
                                </label>
                                {
                                    error.name && <p className="error" style={style.inputError}>{error.name}</p>
                                }
                                <label>
                                    <p>Số điện thoại<span>*</span></p>
                                    <input type="text" placeholder="Số điện thoại" onChange={inputChange} name="phone" value={form.phone} />
                                </label>
                                {
                                    error.phone && <p className="error" style={style.inputError}>{error.phone}</p>
                                }
                                <label>
                                    <p>Email<span>*</span></p>
                                    <input type="text" placeholder="Email của bạn" onChange={inputChange} name="email" value={form.email} />
                                </label>
                                {
                                    error.email && <p className="error" style={style.inputError}>{error.email}</p>
                                }
                                <label>
                                    <p>URL Facebook<span>*</span></p>
                                    <input type="text" placeholder="https://facebook.com" name="fb" onChange={inputChange} value={form.fb} />
                                </label>
                                {
                                    error.fb && <p className="error" style={style.inputError}>{error.fb}</p>
                                }
                                <label className="disable">
                                    <p>Sử dụng COIN</p>
                                    <div className="checkcontainer">
                                        Hiện có <strong>300 COIN</strong>
                                       
                                        <input type="checkbox" defaultChecked="checked" />
                                        <span className="checkmark" />
                                    </div>
                                </label>
                                <label>
                                    <p>Hình thức thanh toán</p>
                                    <div className="select">
                                        <div className="head">Chuyển khoản</div>
                                        <div className="sub">
                                            <a href="#">Chuyển khoản</a>
                                            <a href="#">Thanh toán tiền mặt</a>
                                        </div>
                                    </div>
                                </label>
                                <label>
                                    <p>Ý kiến cá nhân</p>
                                    <input type="text" placeholder="Mong muốn cá nhân và lịch bạn có thể học." onChange={inputChange} name="note" value={form.note} />
                                </label>
                                <div className="btn main rect" onClick={submitBtnClick} >đăng ký {loading && <CircularProgress size={20} style={{ marginLeft: 20 }} />}</div>
                            </div> */}
                        </div>
                    </div>
                </section>

            </main>

        </>
    )
}
