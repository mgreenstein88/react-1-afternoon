import React, {Component} from 'react';

class Sum extends Component {
    constructor(){
        super()

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    changeOne(value){
        this.setState({
            number1: parseInt(value, 10)
        })
    }
    changeTwo(value){
        this.setState({
            number2: parseInt(value, 10)
        })
    }
    createSum(number1, number2) {
        this.setState({
            sum: number1 + number2
        })
    }
    render () {
        return (
    
        <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className='inputLine' onChange={ (e) => this.changeOne(e.target.value)}/>
            <input className='inputLine' onChange={ (e) => this.changeTwo(e.target.value)}/>
            <button className='confirmationButton' onClick={ () => this.createSum(this.state.number1, this.state.number2)}>Add</button>
            <span className='resultsBox'>{this.state.sum}</span>
        </div>
        )
    }
}

export default Sum