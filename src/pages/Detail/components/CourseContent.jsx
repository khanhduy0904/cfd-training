import React from 'react';

function CourseContent(props) {
    return (
        <div className="accordion">
        <div className="accordion__title">
          <div className="date">Ngày 1</div>
          <h3>Giới thiệu HTML, SEO, BEM.</h3>
        </div>
        <div className="content">
          I'd like to demonstrate a powerful little pattern called
          “Server-Fetched Partials” that offers some tangible benefits
          over alternatives like VueJS for simple page interactions.
        </div>
      </div>
    );
}

export default CourseContent;