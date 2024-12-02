import {useAppDispatch} from "@/hooks/reduxHooks";

export type AppDispatch = ReturnType<typeof useAppDispatch>;

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

export interface FavouritePageProps {
  posts: PostData[];
  dispatch: AppDispatch;
}
