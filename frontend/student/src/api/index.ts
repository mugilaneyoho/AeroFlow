import { HttpEndPoints } from "./endpoint"
import httpclient from "./httpclient"

class Client {
    student = {
        login:(data:{email:string,password:string})=>httpclient.post(HttpEndPoints.student.login,data)
    }

    classes = {
        get:(classtype:string)=>httpclient.get(HttpEndPoints.classes.get.replace(":classtype",classtype))
    }

    dashboard = {
        get:()=>httpclient.get(HttpEndPoints.dashboard.get),
    }
}

export default new Client()