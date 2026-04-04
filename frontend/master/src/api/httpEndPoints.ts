export const httpEndPoints = {
    
    admission:{
        // getAll: '/institute/student/all',
        // getByUUID: '/institute/student/:uuid'
        getAll: '/student/all',
        getByUUID: '/student/:uuid'
    },

    departent:{
        getAll: '/master/department/all',
        post: '/master/department/create',
        update: '/master/department/:uuid',
        delete: '/master/department/:uuid'
    },

    usersfaculty:{
        getAll: '/auth/admins/all',
        post: '/auth/admins/create',
    },

    meeting:{
        getAll: '/reception/meetings',
        post: '/reception/meetings',
        update: '/reception/meetings/id'
    },
    student:
    {
        create:'/institute/student/create',
        get:'/institute/student/all',
        getbyId:'/institute/student/{uuid}',
        delete:'/institute/student/{uuid}',
    },
    auth:{
        login:'/auth/admins/login'
    },

    fees:{
        getAll: '/student/feesgetall'
    },

    dashboard:{
        getAll: '/notifylog/activelog'
    }

}

