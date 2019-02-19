import React, { Component} from 'react';

class TemperatureInput extends Component{
    constructor(){
        super()
        this.state= {
            temperature: 80
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        console.log(event.target.value);
        if(event.target.value.match(/^\d+$/)){
            console.log("Only Numbers")
            this.setState({
                temperature: event.target.value
            })
        }else{
            console.log("Fail!");
        }
    }

    render(){
        return(
            <div>
                <legend> Scale: </legend>
                <input onChange={this.handleChange} value={this.state.temperature}/>
            </div>
        )
    }
}

export default TemperatureInput