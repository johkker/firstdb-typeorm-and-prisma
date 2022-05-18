import { users } from "../database";
import { UserWOPasswordIF } from "../interfaces";

const listUsersSVC = () => {
  const treatedUsers: UserWOPasswordIF[] = [];

  users.map((user) => {
    treatedUsers.push({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  });

  return treatedUsers;
};

export default listUsersSVC;
