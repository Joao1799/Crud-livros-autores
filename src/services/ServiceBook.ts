const API_URL = "https://crud-livros-autores.onrender.com";

export interface Book {
  id: number;
  name: string;
  author_id: number;
  pages?: number;
}

export interface Author {
  id: number;
  name: string;
  email?: string;
}

export const getBooks = async (): Promise<Book[]> => {
  const response = await fetch(`${API_URL}/books`);
  return response.json();
};

export const getBookById = async (id: number | string ): Promise<Book> => {
  const response = await fetch(`${API_URL}/books/${id}`);
  return response.json();
};

export const createBook = async (name: string, author_id: number, pages?: number): Promise<Book> => {
  const response = await fetch(`${API_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name,
      author_id,
      pages,
    }),
  });
  return response.json();
};

export const deleteBook = async (id: number): Promise<void> => {
  await fetch(`${API_URL}/books/${id}`, { method: "DELETE" });
};
