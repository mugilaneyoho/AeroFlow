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
           getById: (uuid: string) => HttpClient.get(`/student/${uuid}`),
           delete: (uuid: string) => HttpClient.delete(`/student/${uuid}`)
        };
       meeting = {
            getAll: () => HttpClient.get(httpEndPoints.meeting.getAll),
            create: (data: any) =>HttpClient.post(httpEndPoints.meeting.post, data),
            update: (id: number, data: any) =>HttpClient.patch(`/meetings/${id}`, data),
        };
        admission={
            create: (data: any) => HttpClient.post(httpEndPoints.student.create, data),
            get: () => HttpClient.get(httpEndPoints.student.get),
            getById: (uuid: string) => HttpClient.get(`/student/${uuid}`),
        }

}

export default new Client()