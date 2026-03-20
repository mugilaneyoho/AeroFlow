import { HttpEndPoints } from "./endpoint"
import httpclient from "./httpclient"
class Client {
    fees={
        GetAll: () => httpclient.get(HttpEndPoints.fees.getAll)
    }
}

export default new Client()