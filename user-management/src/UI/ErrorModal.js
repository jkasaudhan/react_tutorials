import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import ReactDOM  from "react-dom";

const Backdrop = (props) => {
    return ( <div className={classes.backdrop} onClick={props.onClose}></div> );
}
const OverlayModal = (props) => {
    return (      
        <Card className={classes.modal}>
            <header className={classes.header}>
            <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
            <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
            <Button onClick={props.onClose}>Okay</Button>
            </footer>
        </Card>
        );
}
 
const ErrorModal = (props) => {
  return (
    <div>
      {ReactDOM.createPortal((<Backdrop onClose={props.onClose}/>), document.getElementById("root-backdrop"))}
      {ReactDOM.createPortal((<OverlayModal title={props.title} message={props.message} onClose={props.onClose}/>), document.getElementById("root-overlay-modal"))}
    </div>
  );
};

export default ErrorModal;
