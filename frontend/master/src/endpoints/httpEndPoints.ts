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

    usersFaculty:{
        getAll: '/master/user/all',
        post: '/master/user/create',
        getByUUID : '/master/user/:uuid'
    },

    meeting:{
        getAll: '/master/meeting/all',
        post: '/master/meeting/create',
        update: '/master/meeting/:uuid'
    },

}

