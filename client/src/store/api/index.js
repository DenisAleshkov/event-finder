import { BASE_URL } from "./../constants";

export const USER = {
  LOGIN: () => `${BASE_URL}/api/user/login`,
  REGISTER: () => `${BASE_URL}/api/user/registration`,
  AUTH: () => `${BASE_URL}/api/user/auth`,
};
