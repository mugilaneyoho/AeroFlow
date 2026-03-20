/* eslint-disable @typescript-eslint/no-explicit-any */
import {httpEndPoints} from "./httpEndPoints"
import HttpClient from "./httpclient";

class Client{

        usersfaculty={
            GetAll:() => HttpClient.get(httpEndPoints.usersfaculty.getAll),
            Post:(data:any) => HttpClient.post(httpEndPoints.usersfaculty.post, data),
        };
        student={
           create: (data: any) => HttpClient.post(httpEndPoints.student.create, data),
           get: () => HttpClient.get(httpEndPoints.student.get),
           getById: (uuid: string) => HttpClient.get(`/institute/student/${uuid}`),
           delete: (uuid: string) => HttpClient.delete(`/institute/student/${uuid}`)
        };
        auth={
            login:(data:any)=>HttpClient.post(httpEndPoints.auth.login,data),
        }

}

export default new Client()