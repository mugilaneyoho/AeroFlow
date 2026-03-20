
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

    },

    student:{
        login:'/auth/students/login'
    },
    
    fees:{
        getAll: '/student/:uuid/fees'
    }
}