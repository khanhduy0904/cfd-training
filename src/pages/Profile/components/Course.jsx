import React, { useEffect, useState } from 'react';
import LoadingApi from '../../../components/LoadingApi';

import CourseItem from './CourseItem';
import userApi from "../../../api/userApi";
function Course(props) {
    // let auth = useAuth();
    let [course, setCourse] = useState();
    useEffect(async () => {
        // fetch("https://cfd-reactjs.herokuapp.com/elearning/v4/profile/course", {
        //     method: "POST",
        //     headers: {
        //         "Authorization": `Bearer ${auth.login.token.accessToken}`
        //     }
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //         setCourse(res.data)
        //         console.log(res.data);
        //     })
        let res = await userApi.course();
        console.log(res.data);
        setCourse(res.data);
    }, [])
    if (!course) return <LoadingApi />
    return (

        <div className="tab2" style={{ display: "block" }}>
            {
                course.length === 0 ?
                    <div> Bạn chưa đăng ký khóa học nào</div>
                    :
                    course.map((item, index) => <CourseItem key={index} {...item} />)
            }
        </div>

    );
}

export default Course;