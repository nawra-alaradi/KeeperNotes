import style from '../styles/Footer.module.css';   

export default function Footer(){
    return <footer className={style.footer}><p>Copyright ⓒ {new Date().getFullYear()}</p></footer>
}