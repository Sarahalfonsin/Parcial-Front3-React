//MOSTRAR IMAGENES

import data from './data.json'
import React, { Component } from 'react'

export class Historia extends Component {
  
  render() {
    return (
      <>
          
<h1 className="historia">{ data[this.props.contador].historia}</h1>
      </>
    )
  }
}

export default Historia