import { CreateUserIF, UserIF, UserWOPasswordIF } from "../interfaces";
import { users } from "../database";

const createUserSVC = ({ name, email, password }: CreateUserIF) => {
  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new Error("Email already exists");
  }

  if (email.length > 180) {
    throw new Error("Maximum length of email is 180 characters.");
  }

  if (name.length > 256) {
    throw new Error("Name must contain 256 or less characters.");
  }

  if (password.length > 180) {
    throw new Error("Password can not be longer than 180 characters");
  }

  const newUser: UserIF = {
    id:
      users[users.length - 1] === undefined
        ? 1
        : users[users.length - 1].id + 1,
    name: name,
    email: email,
    password: password,
  };

  users.push(newUser);

  const userWOPassword: UserWOPasswordIF = {
    id: newUser.id,
    name: newUser.name,
    email: newUser.email,
  };

  return userWOPassword;
};

export default createUserSVC;
