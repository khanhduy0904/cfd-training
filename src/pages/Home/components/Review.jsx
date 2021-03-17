import React, { useEffect } from 'react';

function Review({ list }) {

  useEffect(() => {



    function loadingTest() {

      let $ = window.$
      function testimonialSlider() {
        if ($('.section-testimonial').length) {
          var $carousel = $(".section-testimonial .images .list").flickity({
            contain: true,
            wrapAround: false,
            freeScroll: false,
            cellAlign: 'center',
            lazyLoad: 2,
            imagesLoaded: true,
            prevNextButtons: false,
            on: {
              ready: function () {
                let dotsSlideTes = $('.section-testimonial .flickity-page-dots');
                let dotsNew = $('.section-testimonial .dots');
                dotsSlideTes.appendTo(dotsNew);
              },
              change: function (index) {
                $('.testimonial .ct').removeClass('active');
                $('.testimonial .ct-' + (index + 1)).addClass('active');
              }
            }
          });
          var flkty = $carousel.data('flickity');
          var $imgs = $('.section-testimonial .carousel-cell picture img');

          $carousel.on('scroll.flickity', function (event, progress) {
            flkty.slides.forEach(function (slide, i) {
              var img = $imgs[i];
              var x = (slide.target + flkty.x) * -1 / 2;
              img.style.transform = 'translateX( ' + x + 'px)';
            });
          });

          let ctrPrevTes = $('.section-testimonial .btn_ctr.prev'),
            ctrNextTes = $('.section-testimonial .btn_ctr.next');

          ctrPrevTes.on('click', function () {
            $carousel.flickity('previous', true);
          });
          ctrNextTes.on('click', function () {
            $carousel.flickity('next', true);
          });
        }
      }
      testimonialSlider();


    }

    setTimeout(loadingTest, 100)




    // console.log(window.Flickity)
  }, [])

  return (
    <section className="section-testimonial">
      <div className="container">
        <div className="textbox">
          <h2 className="main-title white">Học viên cảm nhận về CFD</h2>
        </div>
        <div className="testimonial">
          <div className="testimonial-item">
            <div className="item">
              <div className="text">
                {list.map((item, index) => (
                  <div className={`ct ct-${index + 1} ${index === 0 ? "active" : ""}`} key={index}>
                    <div className="info">
                      <div className="name">
                        <h4>{item.name}</h4>
                        <p>Thành viên CFD1</p>
                      </div>
                      <div className="quotes">
                        <img src="img/quotes.svg" alt="dsdsdsds" />
                      </div>
                    </div>
                    <div className="content">
                      {item.content}
                    </div>
                    <div className="bottom">
                      <a href={item.fb} target="_blank">
                        <img src="img/facebook.svg" alt="pcdcdcd" />
                      </a>
                      <span>{item.date}</span>
                    </div>
                  </div>
                ))}


              </div>
              <div className="images">
                <div className="list">
                  {list.map((item, index) => (
                    <div className="carousel-cell" key={index}>
                      <div className="img">
                        <picture>
                          <source
                            media="(max-width: 767px)"
                            srcSet="img/Intersect.png"
                          />
                          <img data-flickity-lazyload={item.cover} alt="pasadrer" />
                        </picture>
                      </div>
                      <div className="ct_m">
                        <div className="info">
                          <div className="name">
                            <h4>Tiến Tài</h4>
                            <p>Thành viên CFD1</p>
                          </div>
                          <div className="quotes">
                            <img src="img/quotes.svg" alt="cooocc" />
                          </div>
                        </div>
                        <div className="content">
                          Mentor có tâm, tận tình. Mình tìm được hướng đi
                          trong lập trình front-end qua khóa học. Like cho 4
                          mentor.
                           </div>
                        <div className="bottom">
                          <a href="#" target="_blank">
                            <img src="img/facebook.svg" alt="dodo" />
                          </a>
                          <span>09/10/2020</span>
                        </div>
                      </div>
                    </div>
                  ))}

                </div>
              </div>
            </div>
            <div className="dots" />
            <div className="btn_ctr prev" />
            <div className="btn_ctr next" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;