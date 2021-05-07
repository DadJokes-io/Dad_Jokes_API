export type CreateType = {
  type: string;
  color: string;
};

export type Type = {
  _id: string;
  type: string;
  author: {
    id: string;
    displayName: string;
  } | null;
  date: number;
  postCount: number;
};
