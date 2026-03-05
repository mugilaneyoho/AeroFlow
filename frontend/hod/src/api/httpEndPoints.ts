
const httpEndPoints = {
  staff: {
    create: "/training/staff/create",
    getAll: "/training/staff/all",
    getById: "/training/staff/:uuid",
    update: "/training/staff/:uuid",
    delete: "/training/staff/:uuid",
  },
  classes: {
    create: "/training/classes/create",
    getAll: "/training/classes/all",
    getById: "/training/classes/:uuid/:mode",
    update: "/training/classes/update/:uuid/:mode",
    delete: "/training/classes/:uuid/:mode",
  },
   course: {
    create: "/institute/course/create",
    getAll: "/institute/course/all",
    dropdown: "/institute/course/dropdown",
    getById: "/institute/course/:uuid",
    update: "/institute/course/:uuid",
    delete: "/institute/course/:uuid",
  },
  batch: {
    create: "/institute/batch/create",
    getAll: "/institute/batch/all",
    getAllByCourse:"/institute/batch/all/:courseid",
    dropdownByCourse:"/institute/batch/dropdown/:courseid",
    getById: "/institute/batch/:uuid",
    update: "/institute/batch/:uuid",
    delete: "/institute/batch/:uuid",
  },
  dashboard: {
    admin: "/training/dashboard",
    staff: "/training/dashboard/staff/:uuid",
  },
  student:{
    getAll: "/institute/student/all",
    create: "/institute/student/create",
    getById: "/institute/student/:uuid",
    delete: "/institute/student/:uuid",
  },
  admins:{
     login: "/auth/admins/login",
     create:"/auth/admins/create",
      getAll:"/auth/admins/all",
      update:"/auth/admins/:uuid",
      delete:"/auth/admins/:uuid",
  }
};

export default httpEndPoints;
