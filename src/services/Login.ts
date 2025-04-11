const API_URL = "https://api-livrosautores.onrender.com";

type LoginResponse = {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};

export interface LoginData {
  email: string;
  senha: string;
}


export interface RegisterData {
  name: string;
  email: string;
  senha: string;
}

export const postLogin = async (data: LoginData): Promise<LoginResponse> => {
  const response = await fetch(`${API_URL}/user/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Erro ao fazer login.");
  }
  return response.json();
};

export const postRegister = async (data: RegisterData): Promise<RegisterData> => {
  const response = await fetch(`${API_URL}/user/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const json = await response.json();
  if (!response.ok) {
    throw new Error(`Erro ao registrar: ${JSON.stringify(json)}`);
  }

  return json;
};
