import { domain } from "../core/apiDomain";

const pageApi = {
    home: () => {
        return fetch(`${domain}/elearning/v4/home`).then(res => res.json())
    },
    coursePage: () => {
        return fetch(`${domain}/elearning/v4/courses`).then(res => res.json())
    },
    courseDetail: (slug) => {
        return fetch(`${domain}/elearning/v4/course/${slug}`)
        .then(res => res.json())
    },
    register: (slug,data) => {
        let user = JSON.parse(localStorage.getItem("login"));
        return fetch(`${domain}/elearning/v4/course-register/${slug}`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token.accessToken}`
            }
        }).then(res => res.json())
    },
    contact: (data) => {
        return fetch(`${domain}/elearning/v4/contact`,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }
}

export default pageApi;