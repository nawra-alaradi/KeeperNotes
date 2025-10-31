import style from '../styles/Header.module.css';
import LightbulbOutlineIcon from '@mui/icons-material/LightbulbOutline';
export default function Header() {
    return (
        <div className={style.header}>
            <p><LightbulbOutlineIcon/>Keeper</p>
        </div>
    );
}