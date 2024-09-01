import api from '../API&Services/Api_Task';

// Arquivo de requisições

// Faz requisição a API para adicionar uma tarefa
export const addTask = async (task) => {
  try {
    const response = await api.post('List', task);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar tarefa:', error);
    throw error;
  }
};

// Faz requisição a API para editar uma tarefa
export const editTask = async (task) => {
  try {
    const response = await api.put(`List/${task.id}`, task);
    return response.data;
  } catch (error) {
    console.error('Erro ao editar tarefa:', error);
    throw error;
  }
};

// Faz requisição para remover uma tarefa
export const removeTask = async (taskId) => {
  try {
    await api.delete(`List/${taskId}`);
  } catch (error) {
    console.error('Erro ao remover tarefa:', error);
    throw error;
  }
};

// Faz requisição para listar as tarefas
export const listTasks = async () => {
  try {
    const response = await api.get('List');
    return response.data;
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    throw error;
  }
};