export const httpEndPoints = {
    
    admission:{
        getAll: '/master/admission/student/all',
        getByUUID: '/master/admission/student/:uuid'
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
        getAll: '/reception/meeting/all',
        post: '/reception/meeting/create',
        update: '/reception/meeting/:uuid'
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
    }

}

