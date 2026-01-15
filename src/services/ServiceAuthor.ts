const API_URL = "http://localhost:3001";

export interface Author {
  id: string;
  name: string;
  email?: any;
}

export const getAuthors = async (): Promise<Author[]> => {
  const response = await fetch(`${API_URL}/authors`);
  return response.json();
};

export const getAuthorById = async (id: any): Promise<Author> => {
  const response = await fetch(`${API_URL}/authors/${id}`);
  return response.json();
};

export const updateAuthor = async (id: string, updatedAuthor: Author): Promise<Author> => {
  const response = await fetch(`${API_URL}/authors/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedAuthor)
  });
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


export const deleteAuthor = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/authors/${id}`, { method: "DELETE" });
};
