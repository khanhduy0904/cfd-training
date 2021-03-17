import React, { useState } from "react";
import useFormValidate from "../../core/hook/useFormValidate";
import pageApi from "../../api/pageApi";
import swal from "sweetalert";

function Collab(props) {
  
  let {form,submit,error,inputChange} = useFormValidate({
    name: "",
    phone: "",
    email: "",
    web: "",
    connect: "",
    content: ""
  },{
    rule: {
      name: {
        required: true
      },
      phone: {
        pattern: "phone",
      },
      email: {
        pattern: "email",
      }
    },
    message: {
      name: {
        required: "Name không được để trống"
      },
      phone: {
        pattern: "Phone không đúng định dạng",
      },
      email: {
        pattern: "Email không đúng định dạng",
      }
    }
  });
  const handleSubmit = async () => {
    let error = submit();
    if(Object.keys(error).length === 0){
      let res = await pageApi.contact(form);
      console.log(res);
        if(res){
          swal("Gửi thành công", "You clicked the button!", "success");
        }
    }
  }

  return (
    <>
      <main className="register-course" id="main">
        <section className="section-1 wrap container">
          {/* <div class="main-sub-title">liên hệ</div> */}
          <h2 className="main-title">HỢP TÁC CÙNG CFD</h2>
          <p className="top-des">
            Đừng ngần ngại liên hệ với <strong>CFD</strong> để cùng nhau tạo ra
            những sản phẩm giá trị, cũng như việc hợp tác với các đối tác tuyển
            dụng và công ty trong và ngoài nước.
          </p>
          <div className="form">
            <label>
              <p>
                Họ và tên<span>*</span>
              </p>
              <input type="text" placeholder="Họ và tên bạn" name="name" value={form.name} onChange={inputChange}/>
            </label>
            {error.name && <p style={{color: "red"}}>{error.name}</p>}
            <label>
              <p>Số điện thoại</p>
              <input type="text" placeholder="Số điện thoại" name="phone" value={form.phone} onChange={inputChange}/>
            </label>
            {error.phone && <p style={{color: "red"}}>{error.phone}</p>}
            <label>
              <p>
                Email<span>*</span>
              </p>
              <input type="text" placeholder="Email của bạn" name="email" value={form.email} onChange={inputChange}/>
            </label>
            {error.email && <p style={{color: "red"}}>{error.email}</p>}
            <label>
              <p>Website</p>
              <input type="text" placeholder="Đường dẫn website http://" name="web" value={form.web} onChange={inputChange}/>
            </label>
            <label>
              <p>
                Tiêu đề<span>*</span>
              </p>
              <input type="text" placeholder="Tiêu đề liên hệ" name="connect" value={form.connect} onChange={inputChange}/>
            </label>
            <label>
              <p>
                Nội dung<span>*</span>
              </p>
              <textarea name id cols={30} rows={10} defaultValue={""} name="content" value={form.content}/>
            </label>
            <div className="btn main rect" onClick={handleSubmit}>đăng ký</div>
          </div>
        </section>
        {/* <div class="register-success">
      <div class="contain">
          <div class="main-title">đăng ký thành công</div>
          <p>
              <strong>Chào mừng Trần Nghĩa đã trở thành thành viên mới của CFD Team.</strong> <br>
              Cảm ơn bạn đã đăng ký khóa học tại <strong>CFD</strong>, chúng tôi sẽ chủ động liên lạc với bạn thông qua facebook
              hoặc số điện thoại của bạn.
          </p>
      </div>
      <a href="/" class="btn main rect">về trang chủ</a>
  </div> */}
      </main>
    </>
  );
}

export default Collab;
