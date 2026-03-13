/* eslint-disable @typescript-eslint/no-explicit-any */
import httpClients from "./httpClients";
import httpEndPoints from "./httpEndPoints";

class Client {

  staff = {
    getAll: () => httpClients.get(httpEndPoints.staff.getAll),
    getStaffById: (uuid: string) =>
      httpClients.get(httpEndPoints.staff.getById.replace(':uuid', uuid)),
    createStaff: (data: any) => httpClients.post(httpEndPoints.staff.create, data),
    updateStaff: (uuid: string, data: any) =>
      httpClients.put(httpEndPoints.staff.update.replace(':uuid', uuid), data),
    deleteStaff: (uuid: string) =>
      httpClients.delete(httpEndPoints.staff.delete.replace(':uuid', uuid)),
    dropdown: ()=>httpClients.get(httpEndPoints.staff.dropdown),
  };
  classes = {
    getAll: (tab: string) =>
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

  course = {
    getAll: () =>
      httpClients.get(httpEndPoints.course.getAll),

    getDropdown: () =>
      httpClients.get(httpEndPoints.course.dropdown),

    getCourseById: (uuid: string) =>
      httpClients.get(
        httpEndPoints.course.getById.replace(':uuid', uuid)
      ),

    createCourse: (data: any) =>
      httpClients.post(httpEndPoints.course.create, data),

    updateCourse: (uuid: string, data: any) =>
      httpClients.put(
        httpEndPoints.course.update.replace(':uuid', uuid),
        data
      ),

    deleteCourse: (uuid: string) =>
      httpClients.delete(
        httpEndPoints.course.delete.replace(':uuid', uuid)
      ),

    dropCourse: () => httpClients.get(httpEndPoints.course.dropdown)
  };
  batch = {

    getAll: (page: number, limit: number) =>
      httpClients.get(`${httpEndPoints.batch.getAll}?page=${page}&limit=${limit}`),

    getAllByCourse: (courseid: string) =>
      httpClients.get(
        httpEndPoints.batch.getAllByCourse.replace(":courseid", courseid)
      ),

    getDropdownByCourse: (courseid: string) =>
      httpClients.get(
        httpEndPoints.batch.dropdownByCourse.replace(":courseid", courseid)
      ),


    getBatchById: (uuid: string) =>
      httpClients.get(
        httpEndPoints.batch.getById.replace(":uuid", uuid)
      ),

    createBatch: (data: any) =>
      httpClients.post(httpEndPoints.batch.create, data),


    updateBatch: (uuid: string, data: any) =>
      httpClients.put(
        httpEndPoints.batch.update.replace(":uuid", uuid),
        data
      ),


    deleteBatch: (uuid: string) =>
      httpClients.delete(
        httpEndPoints.batch.delete.replace(":uuid", uuid)
      ),
  };
  dashboard = {
    getAdminDashboard: () =>
      httpClients.get(httpEndPoints.dashboard.admin),
    getStaffDashboard: (uuid: string) =>
      httpClients.get(
        httpEndPoints.dashboard.staff.replace(":uuid", uuid)
      ),
  };
  student = {
    getAll: () => httpClients.get(httpEndPoints.student.getAll),
    getStudentById: (uuid: string) =>
      httpClients.get(httpEndPoints.student.getById.replace(":uuid", uuid)),
    createStudent: (data: any) => httpClients.post(httpEndPoints.student.create, data),
    deleteStudent: (uuid: string) =>
      httpClients.delete(httpEndPoints.student.delete.replace(":uuid", uuid)),
  };
  admins = {
    login: (data: { email: string; password: string }) => httpClients.post(httpEndPoints.admins.login, data),
    createAdmin: (data: any) => httpClients.post(httpEndPoints.admins.create, data),
    updateAdmin: (uuid: string, data: any) => httpClients.put(httpEndPoints.admins.update.replace(":uuid", uuid), data),
    deleteAdmin: (uuid: string) => httpClients.delete(httpEndPoints.admins.delete.replace(":uuid", uuid)),
  }

}

export default new Client();
