
import { domain } from "../core/apiDomain";
/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */

const courseApi = {
    related: (slug) => {
        return fetch(`${domain}/elearning/v4/course-related/${slug}`).then(res => res.json())
    }
}
// export default {
//     related: (slug) => {
//         return fetch(`${domain}/elearning/v4/course-related/${slug}`).then(res => res.json())
//     }
// }

export default courseApi;