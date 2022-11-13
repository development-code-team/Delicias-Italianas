import React from "react";

//import "../Styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import data from './json/Data'
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";


class TestP extends React.Component {
    state = {
        data: data.productItems,
        modalActualizar: false,
        modalInsertar: false,
        form: {
          id: "",
          nombre: "",
          precio: "",
          descripcion:"",
          imagen:"",
          inventario:"",
          fechaCreacion:""
        },
      };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.forEach((registro) => {
      if (dato.id === registro.id) {
        arreglo[contador].name = dato.name;
        arreglo[contador].price= dato.price;
        arreglo[contador].descripcion = dato.descripcion;
        arreglo[contador].image = dato.image;
        arreglo[contador].inventario = dato.inventario;
        arreglo[contador].fechaCreacion = dato.fechaCreacion;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion === true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.forEach((registro) => {
        if (dato.id === registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
              <th>Id</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripcion</th>
                <th>Imagen</th>
                <th>Inventario</th>
                <th>Fecha de Creacion</th>
                <th>Editar</th>
                <th>Eliminar</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.name}</td>
                  <td>{dato.price}</td>
                  <td>{dato.descripcion}</td>
                  <td>{dato.image}</td>
                  <td>{dato.inventario}</td>
                  <td>{dato.fechaCreacion}</td>
                  <td>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square amarillo" viewBox="0 0 16 16"><path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}/></svg></td><td>
                    <svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill rojo" viewBox="0 0 16 16"><path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" color="danger" onClick={()=> this.eliminar(dato)} /></svg>
                  
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.name}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="price"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.price}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Descripcion: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.descripcion}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Imagen: 
              </label>
              <input
                className="form-control"
                name="image"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.image}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Inventario: 
              </label>
              <input
                className="form-control"
                name="inventario"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.inventario}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Fecha de creacion: 
              </label>
              <input
                className="form-control"
                name="fechaCreacion"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fechaCreacion}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Productos</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="name"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Precio: 
              </label>
              <input
                className="form-control"
                name="price"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Descripcion: 
              </label>
              <input
                className="form-control"
                name="descripcion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Imagen: 
              </label>
              <input
                className="form-control"
                name="image"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Inventario: 
              </label>
              <input
                className="form-control"
                name="inventario"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup>
              <label>
                Fecha de creacion: 
              </label>
              <input
                className="form-control"
                name="fechaCreacion"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default TestP;