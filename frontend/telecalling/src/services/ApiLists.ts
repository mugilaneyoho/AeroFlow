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
        getBystatus: '/telecalling/leads/bystatus/:uuid',
    }

    common = {
        getAdminDash: '/telecalling/dashboard',
        getAllTele:'/telecalling/employee/lists',
        getactiveemp:'/telecalling/employee/active-emp',
        getrecetamit:'/telecalling/leads/temp-recent-admit',
        getAllpayment:'/telecalling/payment/all',
        getAllActivity: '/notifylog/activelog'
    }

    login = {
        tele:'/auth/telecalling/login',
        admin:'/auth/admins/login'
    }

    admission = {
        student:'/institute/student/create',
        payment:'/telecalling/payment/create',
        getallcourse:'/institute/course/dropdown',
        getbatchBycourse:'/institute/batch/dropdown/:uuid',
    }
}

export default new ApiLists()