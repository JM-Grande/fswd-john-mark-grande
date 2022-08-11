import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "johndoe@email.com",
    password: bcrypt.hashSync("johndoe", 10),
  },
  {
    name: "Anton Garo",
    email: "antongaro@email.com",
    password: bcrypt.hashSync("antongaro", 10),
  },
  {
    name: "Marco DeSantis",
    email: "marcodesantis@email.com",
    password: bcrypt.hashSync("marcodesantis", 10),
  },
  {
    name: "Karen Manager",
    email: "pretend@manager.com",
    password: bcrypt.hashSync("karenmanager", 10),
  },
];

export default users;
