import React from "react";
import {useHistory} from 'react-router-dom';
import classes from './FirstScreen.module.css';

const FirstScreen = () => {
    const history = useHistory();

    const handleNavigationClick = () => {
        history.push('/secondscreen');
    };
    
    return (
        <React.Fragment>
            <button className={classes.button} type="button" onClick={handleNavigationClick}>Go To Second Screen</button>
        </React.Fragment>

    );
};

export default FirstScreen;