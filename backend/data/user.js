import bcrypt from 'bcryptjs'
const users=[
    {
        name:'Admin User',
        email:'admin@example.com',
        password:bcrypt.hashSync('harish',10) ,
        isAdmin:true
    },
    {
        name:'Harish',
        email:'harish@example.com',
        password:bcrypt.hashSync('harish',10) ,

    },
    {
        name:'Kumar',
        email:'kumar@example.com',
        password:bcrypt.hashSync('harish',10) ,
    
    }
]

export default users