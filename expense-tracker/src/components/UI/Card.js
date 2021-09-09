import './Card.css';
/**
 * This is wrapper component that provides box with circular corner.
 * Anything wrapped within Card component will have wrapper with circular border radius
 * @param {*} props 
 * @returns 
 */
const Card = (props) => {
    const clases = 'card ' + props.className;
  return <div className={clases}>{props.children}</div>;
};

export default Card;
