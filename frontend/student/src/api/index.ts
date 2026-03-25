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
    
    fees={
        GetAll: () => httpclient.get(HttpEndPoints.fees.getAll)
    }

    attendance = {
        get:(data:{date:string})=>httpclient.get(HttpEndPoints.attendance.get,data)
    }
}

export default new Client()