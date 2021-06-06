import classes from './Poi.module.css';

const Poi = (props) => {
    return (
        <li className={classes.poi}>
            <h2>{props.address}</h2>
            <h3>{props.distance} km</h3>
        </li>
    );

};

export default Poi;