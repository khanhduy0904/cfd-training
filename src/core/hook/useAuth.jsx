import React, { useContext, useState } from 'react'


const Context = React.createContext({})

// let login = {
//     name: "Nguyễn Khánh Duy"
// }

// let login = null;

let loginStore = null

try {
    loginStore = JSON.parse(localStorage.getItem('login'))
} catch (err) {

}


export default function AuthProvider({ children }) {

    let [login, setLogin] = useState(loginStore);
    const loginAction = (data) => {
        if(data){
            localStorage.setItem("login", JSON.stringify(data))
            setLogin(data);
        }
       
    }
    const logout = () => {
        localStorage.removeItem('login');
        setLogin(null);
    }

    return <Context.Provider value={{ login, loginAction, logout}}>{children}</Context.Provider>
}

export function useAuth() {
    return useContext(Context)
}
