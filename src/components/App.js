import React, { Component } from 'react'
import '../styles/App.css'

class App extends Component {
     constructor(props) {
            super(props);
            this.handleInputChange = this.handleInputChange.bind(this);
            this.handleSubmit = this.handleSubmit.bind(this);
            this.state = {
                 vehicles: [],
                 value: '',
                 pilot: ''
          }
     }

     handleInputChange(event) {
            this.setState( { value: event.target.value });
     }

     handleSubmit = (event) => {
          event.preventDefault();
          this.setState({ pilot: this.state.value });
          this.setState({ value: "" });
     }
     componentWillMount() {
          fetch('https://swapi.co/api/vehicles/').then((response) => {
               return response.json()
          }).then((data) => {
               let vehicles = data.results
               this.setState({
                    vehicles
               })
          })
     }
     vehiclesMapped() {
          return this.state.vehicles.map(vehicle => {
               return (
                  <div className="col-4" key={vehicle.name}>
                  <div className="card">
                    <div className="card-block">
                      <h4 className="card-title">Vehicle: {vehicle.name}</h4>
                      <p className="card-subtitle mb-2 text-muted">Model: {vehicle.model}</p>
                    </div>
                    <div className="rounded">
                       <ul className="list-group list-group-flush">
                          <li className="list-group-item">Manufacturer: {vehicle.manufacturer}</li>
                          <li className="list-group-item">Class: {vehicle.class}</li>
                          <li className="list-group-item">Passengers: {vehicle.passengers}</li>
                          <li className="list-group-item">Crew: {vehicle.crew}</li>
                          <li className="list-group-item">Length: {vehicle.length}</li>
                          <li className="list-group-item">Max Speed: {vehicle.max_atmosphering_speed}</li>
                          <li className="list-group-item">Cargo capacity: {vehicle.cargo_capacity}</li>
                       </ul>
                    </div>
                 </div>
                 </div>
               )
          })
     }
     render() {
          return (
              <div className="App">
                    <div className="container">
                         <div className="jumbotron">
                         <h1 className="header">Star Wars</h1>
                         <hr/>
                         <p>The Vehicles of Star Wars</p>
                         </div>
                    </div>
                    <div className="card">
                         <div className="text-center card-block">
                              <h1 className="medium">Whats your name, pilot?</h1>
                              <form onSubmit={this.handleSubmit} className="col-4 col align-self-center">
                                   <div className="form-group">
                                        <input onChange={this.handleInputChange} className="form-control" type="text" placeholder="Enter your name " value={this.state.value}/>
                                   </div>
                                   <button type="submit" className="btn btn-primary">Submit</button>
                              </form>
                              <h1>{this.state.pilot}</h1>
                         </div>
                    </div>
                    <div className="row">
                         {this.vehiclesMapped()}
                    </div>
             </div>
          );
     }
}

export default App;
