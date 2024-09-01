import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListWeb.css';
import AddModal from './TaskFunctions/TaskAdd';
import EditModal from './TaskFunctions/TaskEdit';
import RemoveModal from './TaskFunctions/TaskRemove';
import { addTask, editTask, removeTask, listTasks } from './API&Services/taskServices';

const ListWeb = () => {

  // State para armazenar a tarefa atualmente selecionada ou editada
  const [task, setTask] = useState({});
  
  // State para armazenar a lista de tarefas
  const[data, setData]=useState([]);

  // States para controlar a visibilidade dos modais
  const[modalAdd, setModalAdd]=useState(false);
  const[modalEdit, setModalEdit]=useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const [modalSearchTask, setModalSearchTask] = useState(false);

  const [pesquisaInput, setPesquisaInput] = useState('');
  const [filtro, setFiltro] = useState([]);


  // Seleciona uma tarefa para editar ou remover
  const taskselect = (task_sec,opcao) =>{
    if(opcao === "Editar") {
      setTask(task_sec);
      windowModalEdit();
    } 
    else {
      setTask(task_sec);
      windowModalRemove();
    }
  }

  // Faz a troca da opção status baseado na tarefa selecionada
  const option = (task1) => {
    var task2;
    if (task1 === "Pendente" ? task2 = "Concluida": task2 = "Pendente");
    return task2
  } 

  //Funções que abrem e fecham os Modals
  const windowModalAdd=()=>{
    setTask({
      nomeTarefa: '',
      descricaoTarefa: '',
      status: 'Pendente'
      })
    setModalAdd(!modalAdd);
  };

  const windowModalEdit=()=>{
    setModalEdit(!modalEdit);
  };

  const windowModalRemove=()=>{
    setModalRemove(!modalRemove);
  };

  const windowModalSearch=()=>{
    setModalSearchTask(!modalSearchTask);
  };

  // Função que realiza as mudanças nos campos da tarefa
  const handleChange = e =>{
    const {name,value} = e.target;
    setTask({
      ...task,[name]:value
    });
  }; 

  // Função que realiza a listagem das tarefas adicionadas
  const fetchTasks = async () => {
    try {
      const tasks = await listTasks();
      setData(tasks);
    } catch (error) {
      console.error('Erro ao buscar tarefas:', error);
    }
  };

  // Função que realiza a adição de uma tarefa
  const handleAddTask = async () => {
    try {
      const validacao = data.find(taskloc => taskloc.nomeTarefa.toLowerCase() === task.nomeTarefa.toLowerCase());
      if(!validacao){
      const newTask = await addTask(task);
        setData([...data, newTask]);
        windowModalAdd();}
        else{alert('Essa tarefa já esta na lista!')}

    } catch (error) {
      console.error('Erro ao adicionar tarefa:', error);
    }
  };

  // Função que realiza a edição de uma tarefa
  const handleEditTask = async () => {
    try {
      const updatedTask = await editTask(task);
      setData(prevData =>
        prevData.map(t =>
          t.id === updatedTask.id ? updatedTask : t
        )
      );
      windowModalEdit();
      fetchTasks();
    } catch (error) {
      console.error('Erro ao editar tarefa:', error);
    }
  };

  // Função que realiza a remoção de uma tarefa
  const handleRemoveTask = async () => {
    try {
      await removeTask(task.id);
      setData(data.filter(taskr => taskr.id !== task.id));
      windowModalRemove();
    } catch (error) {
      console.error('Erro ao remover tarefa:', error);
    }
  };

  // Função que realiza a filtragem do campo que pesquisa uma tarefa
  const searchTarefa = (searchValue) =>{
    setPesquisaInput(searchValue);
    if (pesquisaInput !== ''){
      const dadosfiltrados = data.filter((item) =>{
        return Object.values(item).join('').toLowerCase().includes(pesquisaInput.toLowerCase())
      });
      setFiltro(dadosfiltrados);
    } else{
      setFiltro(data);
    }
}
  

  useEffect(() =>{
    fetchTasks();
  },[]);

  return (
    <div>
      <div className='title-container'>
      <br/>
      <h3>Lista de Tarefas</h3>
      </div>

      <hr/>

      <div className="task-container">
        <header>
            <button className='class-nova-tarefa' onClick={windowModalAdd}>Nova Tarefa</button>
            
            <input type='text' name='nomeTarefa'  onChange={(e) => searchTarefa(e.target.value)}
            placeholder='Digite o nome da tarefa' maxLength={23}></input>
            
        </header>
        <div className='task-border'>
          <table className='table tabler-hover'>
            <thead>
                <tr>
                  
                    <td><b>Tarefas</b></td>
                    <td><b>Descrição</b></td>
                    <td><b>Status</b></td>  
                    <td></td>
                    <td></td>
              
                </tr>
              </thead>
              
              <tbody>
              {(pesquisaInput.length > 1 ? filtro : data).map(tarefa => (
                <tr key={tarefa.id}>
                  <td>{tarefa.nomeTarefa}</td>
                  <td>{tarefa.descricaoTarefa}</td>
                  <td className={tarefa.status === 'Pendente' ? 
                    'status-pendente' : 'status-concluida'} >{tarefa.status}</td>
                  <div className='button-container'>
                    <td>
                      <button className='btn btn-primary' onClick={() => taskselect(tarefa, "Editar")}>Editar</button>
                    </td>
                    <td>
                      <button className='btn btn-danger' onClick={() => taskselect(tarefa, "Excluir")}>Excluir</button>
                    </td>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <AddModal 
      show={modalAdd} 
      handleClose={windowModalAdd} 
      task={task} 
      handleChange={handleChange} 
      addtask={handleAddTask} />
      
      <EditModal 
      show={modalEdit} 
      handleClose={windowModalEdit} 
      task={task} 
      handleChange={handleChange} 
      EditTask={handleEditTask} opt={option} />

      <RemoveModal 
      show={modalRemove} 
      handleClose={windowModalRemove} 
      task={task} taskRemove={handleRemoveTask} />

    </div>
  );
};

export default ListWeb;
