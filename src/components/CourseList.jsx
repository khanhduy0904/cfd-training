import React from 'react';
import Course from './Course';

function CourseList({offline = [], online= []}) {
    return (
        <>
        <section className="section-courseoffline">
            <div className="container">
                {/* <p className="top-des">
                    The readable content of a page when looking at its layout. The
                    point of using Lorem Ipsum is that it has a more-or-less normal
                </p> */}
                <div className="textbox">
                    <h2 className="main-title">Khóa học Offline</h2>
                </div>
                <div className="list row">
                    {
                        offline.map((item, index) => <Course key={index} {...item}/>)
                    }
                </div>
            </div>
        </section>
        <section className="section-courseonline section-blue">
            <div className="container">
                <div className="textbox">
                    <h2 className="main-title">Khóa học Online</h2>
                </div>
                <div className="list row">
                    {online.map((item, index) => <Course key={index} {...item}/>)}
                </div>
                <div className="text-deco">C</div>
            </div>
        </section>
    </>
    );
}

export default CourseList;