const bcrypt=require('bcryptjs')

const users=[
    {
        name:'Admin User',
        email:'admin@test.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Jon Doe',
        email:'john@test.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    },
    {
        name:'Jane Doe',
        email:'jane@test.com',
        password:bcrypt.hashSync('123456',10),
        isAdmin:true
    }
]

module.exports=users