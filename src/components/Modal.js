import React from "react";
import { Nav } from "react-bootstrap";

// reactstrap components
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";

function ModalFunc(props) {
  
  return (
    <>
      
      <Modal toggle={() => props.setModalOpen(!props.modalOpen)} isOpen={props.modalOpen}>
        <div className=" modal-header">
          <h5 className=" modal-title" id="exampleModalLabel">
            Do You Want Recommendation
          </h5>
          <button
            aria-label="Close"
            className=" close"
            type="button"
            onClick={() => props.setModalOpen(!props.modalOpen)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <ModalFooter>
        <Nav.Link href="/login">
          <Button
            color="secondary"
            type="button"
          >
            
            No
          </Button>
          </Nav.Link>
          
          <Button color="primary" type="button" onClick={() => props.setModalOpen(!props.modalOpen)}>
            Yes
          </Button>
         
        </ModalFooter>
      </Modal>
    </>
  );
}

export default ModalFunc;