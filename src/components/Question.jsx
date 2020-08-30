import React from 'react';
import pic from '../img/bird.jpg'

const Question = () => {
    return (
        <div className = " col-12 pt-4">
            <div className = "question-box">
            <div className = "row">
                <div className ="col-3 ml-2">
                    <div className = "pic-box">
                    <img src = {pic} alt = "bird-photo"/>
                </div>

                </div>
                <div className ="col-8 textbox">
                    <h2> Ястреб </h2>
                    <div className = "player-box">

                    </div>
                </div>
            </div>

            </div>
        </div>
    )
}

export default Question;
