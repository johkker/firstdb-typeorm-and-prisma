export interface UserIF {
  id: number;
  name: string;
  email: string;
  password: string;
}

export interface CreateUserIF {
  name: string;
  email: string;
  password: string;
}

export interface UserWOPasswordIF {
  id: number;
  name: string;
  email: string;
}
