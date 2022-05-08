// User
export type User = {
  id: number,
  name: string,
  username: string,
  email: string,
  address: Address,
  phone: string,
  website: string,
  company: Company,
}

export type Address = {
  street: string,
  suite: string,
  city: string,
  zipcode: string,
  geo: Location,
}

export type Location = {
  lat: number,
  lng: number,
}

export type Company = {
  name: string,
  catchPhrase: string,
  bs: string,
}

// Post
export type Post = {
  userId: number,
  id: number,
  title: string,
  body: string,
}

export type PostsType = Post[]

// Comment
export type Comment = {
  postId: number,
  id: number,
  name: string,
  email: string,
  body: string,
}

export type CommentsType = Comment[]
