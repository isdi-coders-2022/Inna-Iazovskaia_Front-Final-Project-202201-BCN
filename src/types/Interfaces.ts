export interface Message {
  date: string;
  text: string;
  sender: string;
  recipient: string;
  id: string;
}

export interface ButtonInterface {
  text: string;
  actionOnClick?: () => void;
  type?: string;
  disabled?: boolean;
  className: string;
}

export interface UserLoginInterface {
  username: string;
  password: string;
  token?: string;
  loggedIn: boolean;
}

export interface UserLogedInterface {
  username: string;
  id: string;
}
