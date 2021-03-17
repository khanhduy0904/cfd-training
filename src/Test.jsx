import React, { useRef } from 'react';

function Test(props) {

    
    const inputRef = useRef(0);

    return (
        <div>
            <input type="text" ref={inputRef}/>
            <br />
            <button>Increment</button>
            <button>Decrement</button>
            <button>Set Value</button>
        </div>
    );
}

export default Test;


// const Count = () => {
//     return (
//         <div>
//             <input type="text" />
//             <br />
//             <button>Increment</button>
//             <button>Decrement</button>
//             <button>Set Value</button>
//         </div >
//     )
// }