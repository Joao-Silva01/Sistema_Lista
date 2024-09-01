import  React from "react";
import {Modal, ModalBody,ModalFooter,ModalHeader} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../ListWeb.css";

const TaskEdit = ({show,handleClose,task,handleChange, EditTask,opt}) =>{
    return(
    <Modal show={show} onHide={handleClose} centered >
      <ModalHeader className="modaledit">Editar Aluno</ModalHeader>
      <ModalBody>
            <div className="form-group">
                <label><b>Nome da Tarefa:</b></label>
                <input type="text" 
                className = 'form-control' 
                name='nomeTarefa'
                value={task.nomeTarefa} 
                onChange={handleChange} maxLength={23}/>
                <br />
                <label><b>Descrição da tarefa:</b></label>
                <input type="text" 
                className = 'form-control' 
                name='descricaoTarefa' 
                value={task.descricaoTarefa}
                onChange={handleChange} 
                maxLength={40}/>
                <br />
                <label><b>Status</b></label>
                <br />
                <select className="form-control" name='status' value={task.status} onChange={handleChange}>

                  <option className={task.status === 'Pendente' ? 
                    'status-pendente' : 'status-concluida'} 
                    value={task.status} >{task.status}</option>

                  <option className={task.status === 'Pendente' ? 
                    'status-concluida' : 'status-pendente'} 
                    value={opt(task.status)}>{opt(task.status)}</option>

                </select>
            </div>
        </ModalBody>
        <ModalFooter>
          <button  className="btn btn-primary" type="button" onClick={EditTask}>Salvar</button>
          <button className='btn btn-danger' onClick={handleClose}>Cancelar</button>
        </ModalFooter>
    </Modal>)
}



export default TaskEdit;