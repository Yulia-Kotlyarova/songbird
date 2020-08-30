import React from 'react';
import pic from '../img/bird.jpg'

const About = (props) => {
    return (
        <div className = " col-lg-6 col-12 pt-4">
            <div className = "about-box">
                <div className = "row">
                    <div className ="col-5">
                        <div className = "pic-box">
                            <img src = {props.url} alt = "bird-photo"/>
                        </div>
                    </div>

                    <div className ="col-6">
                        <div className = "audio-box">
                            <h3> {} </h3>
                            <strong> {} </strong>
                            <audio controls = "true" preload="auto" src= {props.audio}></audio>
                        </div>
                    </div>
                    <div className ="col-12 pt-3 textbox">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Illum, assumenda nisi aspernatur quisquam laborum sit eum excepturi impedit 
                            magnam odit?</p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
