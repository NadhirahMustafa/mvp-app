export interface dataInterface {
  limit: number;
  products: string[];
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
}

export interface ReviewPopupProps {
  isOpen: boolean;
  onClose: () => void;
  getValue: (q: boolean) => void;
  addReview: (w: commentsDataInterface) => void;
  commentNum: number;
}

export interface CredentialInterface {
  username: string;
  password: string;
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
export interface selectedDataProps {
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
  selectedData: selectedDataProps
}
export interface viewProps {
  viewType: string;
  setView: (v: string) => void;
}
