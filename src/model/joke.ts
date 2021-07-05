export type Joke = {
  _id: string;
  type: string;
  setup: string;
  punchline: string;
  likes: Array<any>;
  author: Author;
  date: number;
  approved: boolean;
};

export type Author = {
  name: string;
  id: string;
};
