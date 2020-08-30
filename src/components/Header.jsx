import React from 'react';

const Header = (props) => {
    let titleItem =  props.title.map((title, index) => {
        let classes = ['list-group-item'];

        if (props.title.active) {
            classes.push('active')
        }
        return (
        <li className={classes.join(' ')}>{title.title}</li>
        )
    } );

    return (
        <div className = "header">
                <div className="row">
                    <div className ="col-12 d-flex justify-content-between align-items-center">
                        <h1 className="logo"> Song<span>Bird</span></h1>
                        <div className="strong"> Score: <span> 100</span></div>
                    </div>

                </div>
                <ul className="list-group list-group-horizontal">
                    { titleItem }
                </ul>
        </div>

    )
}

export default Header;
