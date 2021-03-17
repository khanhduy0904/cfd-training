import { domain } from "../core/apiDomain"

export default {
    login: (formData) => {

        return fetch(`${domain}/elearning/v4/login`,{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => res.json())
    },
    profile: () => {
        let user = JSON.parse(localStorage.getItem("login"));
        return fetch(`${domain}/elearning/v4/profile`,{
            method: "POST",
            headers: {
                "Authorization": `Bearer ${user.token.accessToken}`
            }
        }).then(res => res.json())

    },
    course: () => {
        let user = JSON.parse(localStorage.getItem("login"));
        return fetch(`${domain}/elearning/v4/profile/course`,{
            method: "GET",
            headers: {
                
                "Authorization": `Bearer ${user.token.accessToken}`
            }
        }).then(res => res.json())
        
    },
    payment: () => {
        let user = JSON.parse(localStorage.getItem("login"));
        return fetch(`${domain}/elearning/v4/profile/payment`,{
            method: "POST",
            headers: {
                "Authorization": `Bearer ${user.token.accessToken}`
            }
        }).then(res => res.json())
    },
    update: (formData) => {
        let user = JSON.parse(localStorage.getItem("login"));
        return fetch(`${domain}/update-profile`,{
            method: "POST",
            body: JSON.stringify(formData),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token.accessToken}`
            }
        }).then(res => res.json())
    }
}