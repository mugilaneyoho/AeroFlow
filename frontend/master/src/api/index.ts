import {httpEndPoints} from "./httpEndPoints"
import HttpClient from "./httpclient";

class Client{

        usersfaculty={
            GetAll:() => HttpClient.get(httpEndPoints.usersfaculty.getAll),
            Post:(data:any) => HttpClient.post(httpEndPoints.usersfaculty.post, data),
        }

}

export default new Client()