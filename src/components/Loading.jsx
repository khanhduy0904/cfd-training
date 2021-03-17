import React from 'react';
import ReactDOM from "react-dom";
function Loading(props) {
    return ReactDOM.createPortal(
        <div className="pageLoading">
           <div className="loading" style={{ left: 0, top: 0, transform: 'translate(-50%, -50%) scale(0)' }}></div>
        </div>,
        document.getElementById("root2")
    );
}

export default Loading;