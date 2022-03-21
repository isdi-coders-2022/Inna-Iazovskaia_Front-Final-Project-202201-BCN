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
  username: string;
  password: string;
  token?: string;
  loggedIn: boolean;
}
