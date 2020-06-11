import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super()

        this.state = {
            unFilteredArray: ['blue', 'red', 'yellow'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(value){
        this.setState({
            userInput: value
        })
    }

    newArray(userInput){
        let colors =this.state.unFilteredArray
        let filteredColors = []

        for (let i = 0; i < colors.length; i++){
            if (colors[i].includes(userInput)){
                filteredColors.push(colors[i])
            }
        }
        this.setState({
            filteredArray: filteredColors
        })
    }
    render () {
        return (
        <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} />
            <button className='confirmationButton' onClick={ (e) => this.newArray(this.state.userInput)} >Filter</button>
            <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
            <span className='resultsBox filterStringRB'>{JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }
}

export default FilterString