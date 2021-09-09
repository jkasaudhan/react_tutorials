import clases from './Card.module.css';

const Card = (props) => {
    return ( 
        <div className={`${clases.card} ${props.className}`}>
            {props.children}
        </div>
     );
}
 
export default Card;