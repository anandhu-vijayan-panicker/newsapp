export interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  author: string;
  date: string;
  tag: string;
}

export interface NewsDetail {
  id: number;
  userId: number;
  title: string;
  body: string;
  image?: string;
  tag: string;
  date: string;
  user?: {
    name: string;
    email: string;
    website?: string;
    company?: {
      name: string;
    };
  };
}