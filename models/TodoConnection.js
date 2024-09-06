import mongoose from 'mongoose';
import connectMongo from '@/utils/dbConnect';
import Todo from '@/models/Todo'; // Ajuste o caminho conforme necessário
import closeConnectionMongo from '@/utils/dbCloseConnection'; // Certifique-se de que esta função está implementada

// Create a new Todo
export const createTodo = async (todoData) => {
    let connection;
    try {
        connection = await connectMongo();
        const newTodo = new Todo(todoData);
        return await newTodo.save();
    } catch (error) {
        console.error('Error creating Todo:', error);
        throw error;
    } finally {
        if (connection) {
            await closeConnectionMongo(); // Fechar a conexão após a operação
        }
    }
};

// Read all Todos
export const getTodos = async () => {
    let connection;
    try {
        connection = await connectMongo();
        return await Todo.find({});
    } catch (error) {
        console.error('Error fetching Todos:', error);
        throw error;
    } finally {
        if (connection) {
            await closeConnectionMongo(); // Fechar a conexão após a operação
        }
    }
};

// Read a single Todo by ID
export const getTodoById = async (id) => {
    let connection;
    try {
        connection = await connectMongo();
        return await Todo.findById(id);
    } catch (error) {
        console.error('Error fetching Todo by ID:', error);
        throw error;
    } finally {
        if (connection) {
            await closeConnectionMongo(); // Fechar a conexão após a operação
        }
    }
};

// Update a Todo by ID
export const updateTodo = async (id, updateData) => {
    let connection;
    try {
        connection = await connectMongo();
        return await Todo.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
    } catch (error) {
        console.error('Error updating Todo:', error);
        throw error;
    } finally {
        if (connection) {
            await closeConnectionMongo(); // Fechar a conexão após a operação
        }
    }
};

// Delete a Todo by ID
export const deleteTodo = async (id) => {
    let connection;
    try {
        connection = await connectMongo();
        return await Todo.findByIdAndDelete(id);
    } catch (error) {
        console.error('Error deleting Todo:', error);
        throw error;
    } finally {
        if (connection) {
            await closeConnectionMongo(); // Fechar a conexão após a operação
        }
    }
};