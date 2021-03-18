import React from 'react';

function CourseItem({course, trang_thai}) {
    return (
        <>
             <div className="item">
                    <div className="cover">
                        <img src={course.thumbnail.link} alt="dsadsdw" />
                    </div>
                    <div className="info">
                        <a href="#fffrt" className="name">
                        {course.title}
                      </a>
                        <div className="date">Khai giảng ngày {course.opening_time}</div>
                        <div className="row">
                            <div className>
                                <img src="/img/clock.svg" alt="qưeqew" className="icon" />
                          54 giờ
                        </div>
                            <div className>
                                <img src="/img/play.svg" alt="dsadsd" className="icon" />
                                {course.count_video} video
                        </div>
                            <div className>
                                <img src="/img/user.svg" alt="dsadadsdsds" className="icon" />
                          20 học viên
                        </div>
                        </div>
                        {/* <div className="process">
                            <div className="line">
                                <div className="rate" style={{ width: "30%" }} />
                            </div>
                        30%
                      </div>
                        <div className="btn overlay round btn-continue">
                            Tiếp tục học
                      </div> */}
                    </div>
                </div>
                {/* <div className="item">
                    <div className="cover">
                        <img src="/img/img7.png" alt />
                    </div>
                    <div className="info">
                        <a href="#" className="name">
                            front-end nâng cao
                      </a>
                        <div className="date">Khai giảng ngày 09/09/2019</div>
                        <div className="row">
                            <div className>
                                <img src="/img/clock.svg" alt className="icon" />
                          54 giờ
                        </div>
                            <div className>
                                <img src="/img/play.svg" alt className="icon" />
                          25 video
                        </div>
                            <div className>
                                <img src="/img/user.svg" alt className="icon" />
                          20 học viên
                        </div>
                        </div>
                        <div className="process">
                            <div className="line">
                                <div className="rate" style={{ width: "30%" }} />
                            </div>
                        30%
                      </div>
                        <div className="btn overlay round btn-continue">
                            Tiếp tục học
                      </div>
                    </div>
                </div> */}
        </>
    );
}

export default CourseItem;