import React from "react";
import ReactDOM  from "react-dom/client";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";
import './style-2/App.css'



class App extends React.Component{
    state ={ lat: null, errorMessage:'' } //babel is gonna convert this into coinstructor function when running

    componentDidMount()
    {

     window.navigator.geolocation.getCurrentPosition( position=> this.setState({lat: position.coords.latitude}),
        err=>this.setState({errorMessage: err.message})
     );

    }
    render(){ //without render function,code will thrown in error
                  
        if(this.state.lat && !this.state.errorMessage)
           return <SeasonDisplay lat={this.state.lat} />
        if(!this.state.lat && this.state.errorMessage)
          return <div>Error {this.state.errorMessage} </div>
        return <Spinner message='Hi there....'/>
    }
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>)