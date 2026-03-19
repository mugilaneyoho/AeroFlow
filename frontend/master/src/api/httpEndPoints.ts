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
        getAll: '/admins/all',
        post: '/admins/create',
    },

    meeting:{
        getAll: '/master/meeting/all',
        post: '/master/meeting/create',
        update: '/master/meeting/:uuid'
    },
    student:
    {
        create:'/student/create',
        get:'/student/all',
        getbyId:'/student/{uuid}',
        delete:'/student/{uuid}'
    }

}

