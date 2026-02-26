import { Dialog } from "@base-ui/react";
import styles from '../global.module.css'

export default function PopMessage() {
    return (
        <Dialog.Root>
            <Dialog.Trigger className={styles.btn}>
                Open Me
            </Dialog.Trigger>
            <Dialog.Portal>
                <Dialog.Backdrop>
                    
                </Dialog.Backdrop>
                <Dialog.Viewport>
                <Dialog.Popup>
                    Well here there
                </Dialog.Popup>
                </Dialog.Viewport>
            </Dialog.Portal>
        </Dialog.Root>
    )
}