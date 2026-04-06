const httpEndPoints = {
    
  classes:
  {
     create: "/training/classes/create", 
     getAll: "/training/classes/all",   
     getById: "/training/classes/:uuid/:mode",  
     update: "/training/classes/update/:uuid/:mode",  
     delete: "/training/classes/:uuid/:mode",  
  },
   attendance: 
   {
      create: "/training/attendance/create",    
      getByClassId: "/training/attendance/:classId", 
      getpending:'/training/attendance/pending'
   },

   stafflogin:
   {
      // login: "/auth/staff/login", 
      login: "/staff/login",     
      update:"/auth/staff/:uuid",      
      
  },
   dashboard: { 
      staff: "/staff/dashboard",   
  },

  notification:{
    getAll: '/notification/get'
  }
 
}
export default httpEndPoints;