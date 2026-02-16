class ApiLists {
    telecaller={
        getAll:'/telecalling/employee/all',
        post:'/telecalling/employee/create',
        getByUUID: '/telecalling/employee/:uuid',
        put:'/telecalling/employee/:uuid',
        delete:'telecalling/employee/:uuid'
    }

    leads={
        postUpload:'/telecalling/leads/upload',
        postAssign: '/telecalling/leads/assigned',
        putStatus:'/telecalling/leads/update/:uuid',
        getAll:'/telecalling/leads/all',
        getByemp: 'telecalling/leads/byemployee/:uuid',
        completeLeads: '/telecalling/leads/completed/:uuid',
    }

    common = {
        getAdminDash: '/telecalling/dashboard',
        getAllTele:'/telecalling/employee/lists',
    }
}

export default new ApiLists()