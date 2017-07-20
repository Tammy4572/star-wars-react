import React, { Component } from 'react'
import EmptyComponent from './EmptyComponent'
import VehicleList from './VehicleList';

class Vehicles extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { vehicles } = this.props;
    console.log(this.props);
    return (

      <article className="mw9 center ph2-ns reddit bg-light-blue cf">
      {vehicles ?
           <div className="card" style="width: 20rem;">
           <div className="card-block">
           <h3 className="card-title">Vehicle: {vehicles.name}</h3>
           <h4 className="">Model: {vehicles.model}</h4>

                     <p>Manufacturer: {vehicles.manufacturer}</p>
                     <p>Class: {vehicles.class}</p>
                     <p>Passengers: {vehicles.passengers}</p>
                     <p>Crew: {vehicles.crew}</p>
                     <p>Length: {vehicles.length}</p>
                     <p>Max Speed: {vehicles.max_atmosphering_speed}</p>
                     <p>Cargo capacity: {vehicles.cargo_capacity}</p>
           </div>
           </div>
          : <EmptyComponent /> }
      </article>

    )
  }
}

export default Vehicles;
