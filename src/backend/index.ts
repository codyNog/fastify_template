import { UserImpl, UserUseCase } from "~/impl/User";

interface Backend {
  user: UserUseCase;
}

export const backend = (): Backend => {
  return { user: UserImpl };
};
