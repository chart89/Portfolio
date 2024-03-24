import Header from "../Header/Header";
import styles from "./Container.module.scss";

const Container = ( {children}) => {

    return (
        <div className={styles.container}>
            <Header />
        </div>
        
    )
};

export default Container;