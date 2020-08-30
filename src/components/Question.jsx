import React from 'react';
import pic from '../img/bird.jpg';
import play from '../img/play.svg'

const Question = (props) => {
    // console.log(props);
    let audioObj = new Audio(props.audio);
    return (
        <div className = " col-12 pt-4">
            <div className = "question-box">
            <div className = "row">
                <div className ="col-3 ml-2">
                    <div className = "pic-box">
                    <img src = {props.url} alt = "bird-photo"/>
                </div>

                </div>
                <div className ="col-8 ly-4 lx-4 textbox">
                    <h2> {props.info} </h2>
                    <div className = "player-box d-flex">
                        <audio controls = "true" preload="auto" src= {props.audio}>
                        </audio>
                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Question;
