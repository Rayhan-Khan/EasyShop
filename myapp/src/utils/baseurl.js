import axios from 'axios'
axios.defaults.withCredentials = true;


/* devlopment */
/* export const baseUrl='http://localhost:2000/api'
export const generatePublicUrl=(fileName)=>{
    return `http://localhost:2000/static/public/${fileName}`;
}  


/* production */
export const baseUrl='/api'
export const generatePublicUrl=(fileName)=>{
    return `/static/public/${fileName}`;
}