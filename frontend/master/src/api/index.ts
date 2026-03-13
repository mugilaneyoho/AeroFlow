import {httpEndPoints} from "./httpEndPoints"
import HttpClient from "./httpclient";

export default class Client{
    master={
        admission:{
            GetAll:() => HttpClient.get(httpEndPoints.admission.getAll),
            GetById:(uuid: String) => HttpClient.get(`${httpEndPoints.admission.getByUUID}/${uuid}`)
        },
        department:{
            GetAll:() => HttpClient.get(httpEndPoints.departent.getAll),
            Post:(data:any) => HttpClient.post(httpEndPoints.departent.post, data),
            Update:(uuid:String, data: any) => HttpClient.update(`${httpEndPoints.departent.update}/${uuid}`, data),
            delete:(uuid: String) => HttpClient.delete(`${httpEndPoints.departent.delete}/${uuid}`)
        },
        usersfaculty:{
            GetAll:() => HttpClient.get(httpEndPoints.departent.getAll),
            Post:(data:any) => HttpClient.post(httpEndPoints.usersFaculty.post, data),
            GetById:(uuid:String) => HttpClient.get(`${httpEndPoints.usersFaculty.getByUUID}/${uuid}`)
        },
        meeting:{
            GetAll:() => HttpClient.get(httpEndPoints.meeting.getAll),
            Post:(data:any) => HttpClient.post(httpEndPoints.meeting.post, data),
            Update:(uuid: String, data: any) => HttpClient.update(`${httpEndPoints.meeting.update}/${uuid}`, data)
        },
    }
}