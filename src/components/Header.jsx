import React from 'react';

const Header = (props) => {
    let titleItem =  props.title.map((title, index) => {
        let classes = ['list-group-item col-xl-2 col-lg-2 col-12 d-flex justify-content-between align-items-center'];

        // if (props.title.active) {
        //     classes.push('active')
        // }
        return (
        <li className={classes.join(' ')}>{title.title}</li>
        )
    } );

    return (
        <div className = "header">
                <div className="row">
                    <div className ="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="logo"> Song<span>Bird</span></h1>
                        <div className="strong"> Score: <span> 0 </span></div>
                    </div>
                </div>
                <div className="row">
                    <ul className="list-group list-group-horizontal ">
                        { titleItem }
                    </ul>
                </div>
        </div>

    )
}

export default Header;
