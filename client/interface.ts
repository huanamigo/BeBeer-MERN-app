export interface IPost {
  creator: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  _id?: string;
  createdAt?: Date;
  likeCount?: number
}

export interface IFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}