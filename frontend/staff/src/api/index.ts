import httpClients from "./httpClients";
import httpEndPoints from "./httpEndPoints";

class Client {
    classes = {
    getAll: (tab:string) =>
      httpClients.get(httpEndPoints.classes.getAll + `/?classtype=${tab}`),

    getClassById: (uuid: string, mode: string) =>
      httpClients.get(
        httpEndPoints.classes.getById
          .replace(":uuid", uuid)
          .replace(":mode", mode)
      ),

    createClass: (data: any) =>
      httpClients.post(httpEndPoints.classes.create, data),

    updateClass: (uuid: string, mode: string, data: any) =>
      httpClients.put(
        httpEndPoints.classes.update
          .replace(":uuid", uuid)
          .replace(":mode", mode),
        data
      ),

    deleteClass: (uuid: string, mode: string) =>
      httpClients.delete(
        httpEndPoints.classes.delete
          .replace(":uuid", uuid)
          .replace(":mode", mode)
      ),
  };
  attendance = {
    createAttendance: (data: any) =>
      httpClients.post(httpEndPoints.attendance.create, data),

    getAttendanceByClassId: (classId: string) =>
      httpClients.get(
        httpEndPoints.attendance.getByClassId.replace(":classId", classId)
      ),
  };
  staff = {
    login:(data: {email:string; password:string}) => httpClients.post(httpEndPoints.stafflogin.login, data),
    updateStaff:(uuid: string, data: any) => httpClients.put(httpEndPoints.stafflogin.update.replace(":uuid", uuid), data),
    
  };
   dashboard = {  
    getStaffDashboard: () =>
      httpClients.get(httpEndPoints.dashboard.staff),
  };
  }

export default new Client();