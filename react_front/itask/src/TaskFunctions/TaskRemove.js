import React from "react";
import {Modal, ModalBody,ModalFooter} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskRemove = ({show,handleClose,task,taskRemove}) => {
    return(
<Modal show={show} onHide={handleClose} centered>
      <ModalBody className="modalremove">
        Tem certeza da exclusão da tarefa {task && task.nomeTarefa}?
      </ModalBody>
      <ModalFooter className="modalremove">
        <button className='btn btn-primary' onClick={()=>taskRemove()}>Sim</button>
        <button className='btn btn-danger' onClick={()=>handleClose()}>Não</button>
      </ModalFooter>
    </Modal>);
}

export default TaskRemove;