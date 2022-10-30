import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import '../Styles/App.css';


export const ProductosAdd = () => {
  
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <>
  
     <Container>
      <Row>
        <Col className='alto'>
            <Button variant="warning" onClick={handleShow}>
            Nuevo Plato
          </Button>

          <Modal show={show} onHide={handleClose} size='lg'>
            <Modal.Header closeButton>
              <Modal.Title  >Agregar Plato</Modal.Title>
            </Modal.Header>
            <Modal.Body>
  {/*Fin Formulario Agregar Productos */}
            <Form>
      <Form.Group className="mb-3" controlId="ipProd">
        <Form.Label>Id</Form.Label>
        <Form.Control type="number" placeholder="id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="nomProd">
        <Form.Label>Nombre</Form.Label>
        <Form.Control type="text" placeholder="nombre" />
      </Form.Group>



      <Form.Group className="mb-3" controlId="precioProd">
        <Form.Label>Precio</Form.Label>
        <Form.Control type="number" placeholder="precio" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="imagenProd">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="file" placeholder="imagen" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="desProd">
        <Form.Label>Descripcion</Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Descariba el plato">
        <Form.Control
          as="textarea"
          
          style={{ height: '100px' }}
        />
      </FloatingLabel>
      </Form.Group>




 



      <Form.Label>Califique el plato</Form.Label>
      <Form.Select aria-label="Califique el Plato" id="calPlat">
      <option>0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
    </Form.Select>
    

    <Form.Label>Seleccione la categoria del plato</Form.Label>
      <Form.Select aria-label="Seleccione La categoria" id="categoriaPlat">
      <option></option>
      <option value="Pastas">Pastas</option>
      <option value="Sopas">Sopas</option>
      <option value="Arroces">Arroces</option>
      <option value="Carnes">Carnes</option>
      <option value="Pizza">Pizza</option>
    </Form.Select>

 <Form.Group className="mb-3" controlId="vendPlato">
        <Form.Label>Vendedor</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="invPlato">
        <Form.Label>Inventario</Form.Label>
        <Form.Control type="number" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="numcalPlato">
        <Form.Label>Numero Calificaciones</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="opinPlato">
        <Form.Label>Opiniones</Form.Label>
        <Form.Control type="text" />
      </Form.Group>




     
    </Form>
    {/*Fin Formulario Agregar Productos */}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
               Cerrar
              </Button>
              <Button variant="warning" onClick={handleClose}>
              Guardar
              </Button>
            </Modal.Footer>
          </Modal>

        </Col>
        
        </Row>
       
         <Row>
          <Col>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>id</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Imagen</th>
          <th>Descrpicion</th>
          <th>Calificacion</th>
          <th>Categoria</th>
          <th>Vendedor</th>
          <th>Inventario</th>
          <th>#Calificaciones</th>
          <th>Opiniones</th>
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>xxxx</td>
           <td>xxxx</td>
            <td>xxxx</td>
             <td>xxxx</td>
              <td>xxxx</td>
               <td>xxx</td>
                <td>xxxx</td>
               
                <td><svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill rojo" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg></td>
                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square amarillo" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>xxxx</td>
           <td>xxxx</td>
            <td>xxxx</td>
             <td>xxxx</td>
              <td>xxxx</td>
               <td>xxxx</td>
               <td>xxxx</td>
              
                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill rojo" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/></svg></td>
                <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square amarillo" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg></td>

        </tr>

        
      </tbody>
    </Table>
          </Col>
         </Row>
    </Container>







    


     
   </>
  );
}


