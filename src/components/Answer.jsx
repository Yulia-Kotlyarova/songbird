import React from 'react';

const Answer = (props) => {


    
    let nameItem =  props.birdsData[0].map((item) => {
        let classes = ['list-group-item'];

        if (item.completed === true) {
            classes.push('right');
        } else if (item.completed === false ) {
            classes.push('wrong');
        }
        

        return (
            <li className = {classes.slice(',').join(' ')} onClick = {() => props.onChoice(item.name) } >{item.name}</li>
        )
    } );
    
    return (
        <div className ="answer-box col-lg-6 col-12 pt-4">
            <ul className="list-group">
                { nameItem }
            </ul>

        </div>

    )
}

export default Answer;
