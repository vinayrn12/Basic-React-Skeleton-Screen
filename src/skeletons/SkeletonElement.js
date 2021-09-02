import './Skeleton.css';

const SkelementElement = ({ type }) => {
    const classes = `skeleton ${type}`;

    return(
        <div className={classes}>
        </div>
    )

};

export default SkelementElement;