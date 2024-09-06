import { getTodos } from "@/models/TodoConnection";
import { createTodo } from "@/models/TodoConnection";
import next, { NextResponse } from "next/server";



export async function GET() {
    try {
      const todos = await getTodos();
      return NextResponse.json({ success: true, data: todos });
    } catch (error) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  }
  
  
  export async function POST(req) {
    try {
      const data = await req.json();
      const todo = await createTodo(data);
      return NextResponse.json({ success: true, data: todo });
    } catch (error) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  }
  const express = require('express');
const app = express();

app.get('/api/todos', async (req, res) => {
  try {
    // Lógica para obter todos os todos
    const todos = await getTodosFromDatabase();
    res.json(todos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});