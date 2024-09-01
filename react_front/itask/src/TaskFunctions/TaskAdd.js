import React from "react";
import {Modal, ModalBody,ModalFooter,ModalHeader} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskAdd = ({show,handleClose,task,handleChange, addtask}) => {
    return (
      <Modal show={show} onHide={handleClose} centered>
      <ModalHeader className="modaledit" >Nova Tarefa</ModalHeader>
      <ModalBody>
        <div className = "form-group">
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
              onChange={handleChange} maxLength={40}/>
              <br />
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={addtask}>Adicionar</button>
        <button className='btn btn-danger' onClick={handleClose}>Cancelar</button>
      </ModalFooter>
    </Modal>
    );
}

export default TaskAdd;