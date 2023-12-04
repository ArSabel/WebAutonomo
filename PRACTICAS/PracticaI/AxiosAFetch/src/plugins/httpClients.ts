//const axios = require("axios")
// "T" se denomina generico
import axios from "axios"

export const httpClients= {
    get:async<T>(url:string):Promise<T>=>{
        const {data}=await   axios.get<T>(url)
        return data;
    },
    post:(url:string,body:string)=>{},
    put:(url:string, body:string)=>{},
    delete:(url:string,bod:string)=>{},
}



// module.exports={httpClients}