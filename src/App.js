import React,{ Component } from "react";
import Car from "./Car/Car";

class App extends Component {
  state={
    cars:[
      {name:"ford",year:2012},
      {name:"mazda",year:1988},
      {name:"honda",year:1989}],
    pageTitle:"React components",
    showCars:false
  }
  toggleCarsHandler=()=>{
    this.setState({showCars:!this.state.showCars}) 
  }
  onChangeName(name, index) {
    const car = this.state.cars[index]
    car.name = name
    const cars = [...this.state.cars]
    cars[index] = car
    this.setState({cars})
  }

  deleteHandler(index) {
    const cars = this.state.cars.concat()
    cars.splice(index, 1)

    this.setState({cars})

  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    let cars = null

    if (this.state.showCars) {
      cars = this.state.cars.map((car, index) => {
        return (
          <Car
            key={index}
            name={car.name}
            year={car.year}
            onDelete={this.deleteHandler.bind(this, index)}
            onChangeName={event => this.onChangeName(event.target.value, index)}
          />
        )
      })
    }

    return (
      <div style={divStyle}>
        <h1>{this.state.pageTitle}</h1>

        <button
          onClick={this.toggleCarsHandler}
        >Toggle cars</button>
        <div style={{width:'400px',margin:"auto",paddingTop:'20px'}}>
          { cars }
        </div>
        
      </div>
    );
  }
}

export default App;
