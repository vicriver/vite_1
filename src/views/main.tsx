import { Button } from "@base-ui/react";
import PopMessage from "./pop";
import styles from '../global.module.css'

export default function Main() {
    return (
        <div id={styles.main}>
            <Button className={styles.btn}>Click Me</Button>
            <PopMessage />
        </div>
    )
}