export interface dataInterface {
  limit: number;
  products: `string`[];
  skip: number;
  total: number;
}

export interface ProductListProps {
  viewType: string;
  data: dataInterface;
}

export interface userDataInterface {
  id: number;
  username: string;
}

export interface commentsDataInterface {
  body: string;
  id: number;
  postId: number;
  user: userDataInterface;
}

export interface commentResultInterface {
  comments: commentsDataInterface[];
  limit: number;
  skip: number;
  total: number;
}

export interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  toggleLogin: () => void;
  selectedData: selectedDataInterface;
}

export interface ReviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  addReview: (w: commentsDataInterface) => void;
  commentNum: number;
  getValue: (e: boolean) => void;
  currentUser: userDetailsInterface;
}

export interface CredentialInterface {
  username: string;
  password: string;
}
export interface userDetailsInterface {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: [];
  domain: string;
  ip: string;
  address: [];
  macAddress: string;
  university: string;
  bank: [];
  company: [];
  ein: string;
  ssn: string;
  userAgent: string;
}
export interface userInterface {
  limit: number;
  users: [];
  skip: number;
  total: number;
}

export interface getReviewProps {
  getReview: (q: commentsDataInterface) => void;
  commentNum: number;
}
export interface newsProps {
  limit: number;
  posts: [];
  skip: number;
  total: number;
}
export interface selectedDataInterface {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface LoginProps {
  isLoggedIn: boolean;
  selectedData: selectedDataInterface;
  currentUser: userDetailsInterface;
}
export interface viewProps {
  viewType: string;
  setView: (v: string) => void;
}
