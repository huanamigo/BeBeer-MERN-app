export interface IPost {
  name: string;
  title: string;
  message: string;
  tags: string[];
  selectedFile: string;
  _id?: string;
  createdAt?: Date;
  likes?: string[]
}

export interface IFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}