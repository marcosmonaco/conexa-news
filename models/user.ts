export interface User {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

export interface UserPageProps {
  users: User[];
  loading: boolean;
}
