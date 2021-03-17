import React from 'react';
import Course from './Course';

function SectionShowMore(props) {
    return (
        <section className="section-4">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">Khóa học</h3>
            <h2 className="main-title">Liên quan</h2>
          </div>
          <div className="list row">
            <Course />
            <Course />
            <Course />
          </div>
        </div>
      </section>
    );
}

export default SectionShowMore;