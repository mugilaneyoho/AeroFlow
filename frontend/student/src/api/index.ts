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
        GetAll: (uuid: string) => httpclient.get(HttpEndPoints.fees.getAll(uuid))
    }

    attendance = {
        get:(data:{date:string})=>httpclient.get(HttpEndPoints.attendance.get,data)
    }

    notes = {
    getById: (id: number) => httpclient.get(HttpEndPoints.notes.getnotes(id))
}
}

export default new Client()