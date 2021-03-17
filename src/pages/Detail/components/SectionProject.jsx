import React from 'react';
import Course from './Course';

function SectionProject(props) {
    return (
        <section className="section-3">
        <div className="container">
          <div className="textbox">
            <h3 className="sub-title">DỰ ÁN</h3>
            <h2 className="main-title">THÀNH VIÊN</h2>
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

export default SectionProject;