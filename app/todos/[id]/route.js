//put delete
import { updateTodo, deleteTodo } from "@/models/TodoConnection";
import { NextResponse } from "next/server";

//metodo put
export async function PUT(req, { params }) {
    try {
      const data = await req.json();
      const todo = await updateTodo(params.id, data);
      if (!todo) {
        return NextResponse.json({ success: false }, { status: 400 });
      }
      return NextResponse.json({ success: true, data: todo });
    } catch (error) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  }
  

//metodo delete
export async function DELETE(req, { params }) {
    try {
      const deletedTodo = await deleteTodo(params.id);
      if (!deletedTodo) {
        return NextResponse.json({ success: false }, { status: 400 });
      }
      return NextResponse.json({ success: true, data: {} });
    } catch (error) {
      return NextResponse.json({ success: false }, { status: 400 });
    }
  }
  