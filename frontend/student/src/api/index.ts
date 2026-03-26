import { HttpEndPoints } from "./endpoint"
import httpclient from "./httpclient"
class Client {
    fees={
        GetAll: (uuid: string) => httpclient.get(HttpEndPoints.fees.getAll(uuid))
    }
}

export default new Client()