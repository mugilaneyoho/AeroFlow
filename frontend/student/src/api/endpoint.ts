
export const HttpEndPoints = {
    dashboard:{
        get:'/institute/student/dashboard'
    },

    classes:{
        get:'/training/classes/student/:classtype'
    },

    attendance:{
        get:'/training/attendance/student'
    },

    student:{
        login:'/auth/students/login'
    },
    
    fees:{
        getAll: (uuid: string) => `/institute/student/${uuid}/fees`
    },
    notes: {
        getnotes: (id: number) => `/resources/notes/${id}`
}
}