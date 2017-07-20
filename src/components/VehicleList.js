import React, { Component } from 'react'
import Vehicles from './Vehicles'

class VehicleList extends Component {
     constructor (props) {
          super(props)
          this.state = {
               vehicles: []
          }
     }
     async componentDidMount() {
          const vehicleData = await fetch('https://swapi.co/api/vehicles/?format=json')
               .then(results => results.json())
               .catch(err => console.log(err))
               console.log('Data from vehicles', vehicleData.results.children);
               const data = vehicleData.results.children.map(items => {
                    return items.results
               })
               console.log(data);
               this.setState({data});
     }
     render() {
          return (
               <section>
               {
                    this.state.data.map(data => {
                         return <Vehicles data={data} />
                    })
               }
               </section>
          )
     }
}

export default VehicleList;
