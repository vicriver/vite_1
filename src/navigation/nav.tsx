import { InfoIcon, SettingsIcon, UserIcon } from "lucide-react"
import styles from '../global.module.css'

export default function Nav() {
    return (
        <div id={styles.top_nav}>
            <div>
                test website
            </div>
            <div className="flex flex-row gap-6">
                <SettingsIcon />
                <InfoIcon />
                <UserIcon />
            </div>
        </div>
    )
}