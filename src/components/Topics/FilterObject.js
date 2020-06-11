import React, {Component} from 'react';

class FilterObject extends Component {
    constructor(){
        super()

        this.state = {
            unFilteredArray: [
            {
                name: 'moriah',
                age: 8
            },
            {
                name: 'dana',
                age: 10
            }
            ],
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
        let people = this.state.unFilteredArray
        let filteredPeople = []

        for ( let i = 0; i < people.length; i++){
            if (people[i].hasOwnProperty(userInput)){
                filteredPeople.push(people[i])
            }
        }
        this.setState({
            filteredArray: filteredPeople
        })
    }

    render () {
        return (
        <div className='puzzleBox filterObjectPB'>
            <h4>Filter Object</h4>
            <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)} />
            <button className='confirmationButton' onClick={ (e) => this.newArray(this.state.userInput)} >Filter</button>
        <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
        <span className='resultsBox filterObjectRB'>{JSON.stringify(this.state.filteredArray)}</span>
        </div>
        )
    }
}

export default FilterObject