import React, { useEffect, useState } from "react";
import Banner from "./components/Banner";
import CourseList from "./components/CourseList";
import Gallery from "./components/Gallery";
import Review from "./components/Review";
import Special from "./components/Special";
import Form from "./components/Form";
import LoadingApi from "../../components/LoadingApi";
function Home(props) {

  let [state, setState] = useState();
  useEffect(() => {
    fetch("http://cfd-reactjs.herokuapp.com/elearning/v4/home")
    .then(res => res.json())
      .then(res => {
        console.log(res);
        setState(res);
      })
  }, [])
  if(!state){
    return (
      // <div style={{ height: 500, display: 'flex' }}>
      //   <div style={{ margin: 'auto' }}>
      //       ...Loading
      //   </div>
      // </div>
      <LoadingApi />
    )
  }

  return (
    <>
      <div>

        <main className="homepage" id="main">
          <Banner />
          <CourseList offline={state.offline} online={state.online} />
          <Special />
          {/* <section class="section-3">
      <div class="container">
          <div class="video">
              <iframe id="video-intro"
                  src="https://www.youtube-nocookie.com/embed/6t-MjBazs3o?controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=ytplayer"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen allowscriptaccess="always"></iframe>

              <div class="video-src" data-src="video/CFD-video-intro.mp4"></div>
              <div class="play-btn btn-video-intro">
                  <img src="img/play-video-btn.png" alt="">
              </div>
          </div>
      </div>
  </section> */}
          <Review list={state.review}/>
          <Gallery list={state.gallery} />
          <Form />
        </main>

        {/* popup video homepage */}
        <div className="popup-video" style={{ display: "none" }}>
          <div className="wrap">
            <div className="video-src" />
          </div>
          <div className="close" />
        </div>
        
        <div className="popup-form popup-login" style={{ display: "none" }}>
          <div className="wrap">
            <h2 className="title">Đăng ký</h2>
            <div className="btn btn-icon rect white btn-google">
              <img src="img/google.svg" alt />
              Google
            </div>
            <p className="policy">
              Bằng việc đăng kí, bạn đã đồng ý{" "}
              <a href="#">Điều khoản bảo mật</a> của CFD
            </p>
            <div className="close">
              <img src="/img/close-icon.png" alt />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
