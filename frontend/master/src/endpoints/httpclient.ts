import axios from "axios"

    const Axios = axios.create({
        baseURL: "http://localhost:3000",
        headers: {
            "Content-Type": "application/json"
        }
    })

class HttpClient{
    async get(url: string, params?: string){
        const response: any = await Axios.get(url,{params: params,})
        return response
    }

    async post(url:string, data?:any, params?: any){
        const response = await Axios.post(url, data,{params:params,})
        return response.data
    }

    async update(url:string, data?:any, params?:any){
        const response = await Axios.put(url, data,{params:params,})
        return response.data
    }

    async patch(url:string, params?:any){
        const response = await Axios.patch(url,{params:params})
        return response.data
    }

    async delete(url:string){
        const response = await Axios.delete(url)
        return response
    }

    async uploadFile(url:string,formdata: FormData){
        const response = await Axios.post(url,formdata)
        return response
    }

}

export default new HttpClient