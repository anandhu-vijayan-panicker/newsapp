export interface News {
  id: number;
  userId: number;
  title: string;
  body: string;
  image: string;
  author: string;
  date: string;
  email?: string;
  website?: string;
  company?: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Theme {
  mode: 'light' | 'dark';
  colors: {
    primary: string;
    secondary: string;
    background: string;
    card: string;
    text: string;
    muted: string;
  };
}