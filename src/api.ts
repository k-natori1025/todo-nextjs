import { Task } from "./types";

// 全件取得のAPI
export const getAllTodos = async (): Promise<Task[]> => {
  const res = await fetch(`http://localhost:3001/tasks`, { 
    cache: "no-store"  // SSR
  }); 
  const todos = res.json();

  return todos;
};

// 保存API
export const addTodo = async (todo: Task): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = res.json();

  return newTodo;
};

// 編集API
export const editTodo = async (id: string, newText: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, { 
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: newText }),
  });
  const updatedTodo = res.json();

  return updatedTodo;
};

// 削除API
export const deleteTodo = async (id: string): Promise<Task> => {
  const res = await fetch(`http://localhost:3001/tasks/${id}`, { 
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const deletedTodo = res.json();

  return deletedTodo;
};