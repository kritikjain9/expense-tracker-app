import './Card.css';

const Card = (props) => {

    // now anything we recieve from the outside is added to this string
    const classes = 'card ' + props.className;
    //isme card default hai, and jo bhi extra classNames aaenge, wo add ho jaenge iss
    //poori classNames ki string me 

    // now we can dynamically point at this classes constant
     return <div className={classes}>{props.children}</div>;

}

export default Card;