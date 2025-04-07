const API_URL = "https://crud-livros-autores.onrender.com";

export interface Login {
    name: number;
    senha: string;
}

export const postLogin = async (name: string, senha: number): Promise<Login> => {
  const response = await fetch(`${API_URL}/login/usersFunc`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      senha,
    }),
  });
  return response.json();
};

