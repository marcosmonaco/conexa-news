export interface PostData {
  id: number;
  title: string;
  content: string;
  image: string;
}

export interface PostPageProps {
  posts: PostData[];
  loading: boolean;
}
