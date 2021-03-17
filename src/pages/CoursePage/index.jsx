import React, { useEffect, useState } from 'react';
import pageApi from "../../api/pageApi";
import CourseList from '../../components/CourseList';
import LoadingApi from '../../components/LoadingApi';

function CoursePage(props) {

    let [state, setState] = useState();
    useEffect(async () => {
        let res = await pageApi.coursePage();
        console.log(res);
        setState(res);
    }, []);
    
    if (!state) return <LoadingApi />
    
    return (
        <main className="homepage" id="main">

            <CourseList online={state.online} offline={state.offline} />

        </main>
    );
}

export default CoursePage;