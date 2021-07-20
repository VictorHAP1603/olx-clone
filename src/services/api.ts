const BASE_URL = "http://alunos.b7web.com.br:501";

interface ILoginPromiseProps {
  token: string;
  error: string;
  email: string;
}
// Promise<ILoginPromiseProps>
export const useApi = {
  signIn: async (email: string, password: string) => {},
};
