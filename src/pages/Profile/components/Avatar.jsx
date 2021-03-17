import React from 'react';
import { useAuth } from '../../../core/hook/useAuth';

function Avatar(props) {
    let auth = useAuth();
    return (
        <>
            <div className="top-info">
            <div className="avatar">
              {/* <span class="text">H</span> */}
              <img src="/img/avatar-lg.png" alt="ccxcxc" />
              <div className="camera" />
            </div>
            <div className="name">{auth.login.name}</div>
            {/* <p className="des">Thành viên của team CFD1-OFFLINE</p> */}
          </div>   
        </>
    );
}

export default Avatar;