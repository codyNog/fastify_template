import { User } from "~/entities/User";

const updateUser = async (user: User) => {
  console.log(user);
};

export interface UserUseCase {
  updateUser: (user: User) => Promise<void>;
}

export const UserImpl: UserUseCase = {
  updateUser,
};
