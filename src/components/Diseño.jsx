import React, { Component } from "react";

import data from "./data.json";
import Historia from "./Historia.jsx";
import Botones from "./Botones.jsx";
import Recordatorio from "./Recordatorio.jsx";

//creamoa un array vacio para hacer de historial
const historial = [];

export class Diseño extends Component {
  //Paso 2 creo constructor con estado inicial de las propiedades que necesito
  //que son un contador para contar la imagenes y un sring para colocar las selecciones anteiores
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      seleccionAnterior: "",
    };
  }
  

  //Paso 3 utilizo ciclo de vida ConponentDidUpdate para actualizar el estado del constructor
 componentDidUpdate(estadoPrevio){
   if(estadoPrevio.contador !== this.state.contador){
     historial.push(this.state.seleccionAnterior)
   }
 }



  //Paso 4 funcion de los botones 
  handleClick = (e)=>{
    const id = e.target.id;
    
    if(this.state.contador >=7){
      alert("Llegaste al final de la historia")
    }else if(id === 'A' && this.state.seleccionAnterior !== 'A' ){
      this.setState({
        contador:this.state.contador+1,
        seleccionAnterior: "A"
      })
    }else if(id === 'A'  && this.state.seleccionAnterior === 'A'){
      this.setState({contador:this.state.contador+2})
    } else if (id === 'B' && this.state.seleccionAnterior === 'A') {
      this.setState({
        contador: this.state.contador + 3,
        seleccionAnterior: 'B',
      });
    }else if (id === 'B') {
        this.setState({
          contador: this.state.contador + 2,
          seleccionAnterior: 'B',})
  }}

  render() {
    return (
      <div className="layout">
        <Historia contador={this.state.contador} />
       
        <Botones handleClick={this.handleClick}  opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b} />

<Recordatorio
          seleccionAnterior={this.state.seleccionAnterior}
          historial={historial.map(
            (e, index) => (
              <li key={index}>{e}</li>
            ),
            data[this.state.contador].id
          )}
        />
       </div>
    );
  }
}

export default Diseño;
