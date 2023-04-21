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

