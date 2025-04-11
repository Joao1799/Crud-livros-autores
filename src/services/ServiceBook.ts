const API_URL = "https://api-livrosautores.onrender.com";

export interface Book {
  id: string;
  name: string;
  author_id: string;
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

export const getBookById = async (id: number | string ): Promise<any> => {
  const response = await fetch(`${API_URL}/books/${id}`);
  return response.json();
};

export const updateBook = async (id: string, updatedBook: Book): Promise<Book> => {
  const response = await fetch(`${API_URL}/books/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedBook)
  });
  return response.json();
};

export const createBook = async (name: string, author_id: string , pages?: number): Promise<Book> => {
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

export const deleteBook = async (id: string): Promise<void> => {
  await fetch(`${API_URL}/books/${id}`, { method: "DELETE" });
};
