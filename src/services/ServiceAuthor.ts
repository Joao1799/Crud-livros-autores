const API_URL = "https://crud-livros-autores.onrender.com";

export interface Author {
  id: number;
  name: string;
  email?: string;
}

export const getAuthors = async (): Promise<Author[]> => {
  const response = await fetch(`${API_URL}/authors`);
  return response.json();
};

export const getAuthorById = async (id: any): Promise<Author> => {
  const response = await fetch(`${API_URL}/authors/${id}`);
  return response.json();
};

export const createAuthor = async (name: string, email: string): Promise<Author> => {
  const response = await fetch(`${API_URL}/authors`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      email,
    }),
  });
  return response.json();
};


export const deleteAuthor = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/authors/${id}`, { method: "DELETE" });
};
