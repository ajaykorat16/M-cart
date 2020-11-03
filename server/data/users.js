import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@test.com',
    password: bcrypt.hashSync('12345', 10),
    isAdmin: true,
  },
  {
    name: 'Ajay Korat',
    email: 'ajaykorat16@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
  {
    name: 'Milan Patel',
    email: 'milan@gmail.com',
    password: bcrypt.hashSync('12345', 10),
  },
]

export default users
