import React, { useEffect, useState } from 'react';
import userApi from "../../../api/userApi";

function CoursePayment(props) {

    const [payment, setPayment] = useState();
    console.log(payment);
    useEffect(() => {
      async function fetchApi(){
        let res = await userApi.payment();
      // console.log(res.data);
        setPayment(res.data);
      }
      fetchApi();
      
    },[])

    return (
        <>
         <div className="tab4" style={{ display: "block" }}>
                  <div className="item itemhistory">
                    <div className="name">Khóa học CFD1-offline</div>
                    <div className="date">09/09/2020</div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                  <div className="item itemhistory">
                    <div className="name">Khóa học CFD1-offline</div>
                    <div className="date">18/10/2020</div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                  <div className="item itemhistory">
                    <div className="name">Khóa học CFD1-offline</div>
                    <div className="date">18/10/2020</div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                  <div className="item itemhistory">
                    <div className="name">Khóa học CFD1-offline</div>
                    <div className="date">18/10/2020</div>
                    <div className="money">1.500.000 VND</div>
                  </div>
                </div>   
        </>
    );
}

export default CoursePayment;