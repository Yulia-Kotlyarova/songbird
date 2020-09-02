import React from 'react';
import pic from '../img/bird.jpg';
import play from '../img/play.svg'

const Question = (props) => {
    return (
        <div className = " col-12 pt-4">
            <div className = "question-box">
            <div className = "row">
                <div className ="col-3 ml-2">
                    <div className = "pic-box">
                        <img src = {require (`../img/${props.rounds[0].image}`) } alt = "bird-photo"/>
                    </div>
                </div>
                <div className ="col-8 ly-4 lx-4 textbox">
                    <h2> {props.rounds[0].name} </h2>
                    <div className = "player-box d-flex">
                        <audio controls = "true" preload="auto" src= {require( `../audio/${props.rounds[0].audio}`)}></audio>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Question;
