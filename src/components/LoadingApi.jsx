import React from 'react';

function LoadingApi({ children }) {
    return (
            <div style={{ height: 500, display: 'flex' }}>
                <div style={{ margin: 'auto' }}>
                    {children ? children : <div class="dashed-loading"></div>}
                </div>
          </div>
    );
}

export default LoadingApi;