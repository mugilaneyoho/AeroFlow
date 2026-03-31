
export const HttpEndPoints = {
    dashboard:{
        get:'/institute/student/dashboard'
    },

    classes:{
        get:'/training/classes/student/:classtype'
    },

    notes:{

    },

    attendance:{
        get:'/training/attendance/student'
    },

    student:{
        login:'/auth/students/login'
    },
    
    fees:{
        getAll: (uuid: string) => `/student/${uuid}/fees`
    }
}