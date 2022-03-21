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
  className: string;
}

export interface UserLoginInterface {
  username: String;
  password: String;
  token?: String;
  loggedIn: boolean;
}
