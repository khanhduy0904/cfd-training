import React from 'react';
import {  NavLink, useRouteMatch } from 'react-router-dom';

function Title(props) {

    const match = useRouteMatch();

    return (
        <>
            <div className="tab-title">
                <NavLink to={`${match.path}`} exact>
                    Thông tin tài khoản
                </NavLink>
                <NavLink to={`${match.path}/khoa-hoc`}>Khóa học của bạn</NavLink>
                <NavLink to={`${match.path}/du-an`}>Dự án đã làm</NavLink>
                <NavLink to={`${match.path}/lich-su-thanh-toan`}>Lịch sử thanh toán</NavLink>
                <NavLink to={`${match.path}/coin`}>Quản lý COIN của tôi</NavLink>
            </div>
        </>
    );
}

export default Title;