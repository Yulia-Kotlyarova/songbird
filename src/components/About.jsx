import React from 'react';
import pic from '../img/bird.jpg';



const About = (props) => {
    // let pic = props.rounds[0].image;
    debugger
    let a = `${props.rounds[0].image}`;
    // console.log(a);
    return (
        <div className = " col-lg-6 col-12 pt-4">
            <div className = "about-box">
                <div className = "row">
                    <div className ="col-5">
                        <div className = "pic-box">
                            <img src = {require (`../img/${props.rounds[0].image}`) } alt = "bird-photo"/>
                        </div>
                    </div>

                    <div className ="col-6">
                        <div className = "audio-box">
                            <h3> {props.rounds[0].name} </h3>
                            <strong> {props.rounds[0].species} </strong>
                            <audio controls = "true" preload="auto" src= {require( `../audio/${props.rounds[0].audio}`)}></audio>
                        </div>
                    </div>
                    <div className ="col-12 pt-3 textbox">
                        <p> {props.rounds[0].description} </p>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default About;
