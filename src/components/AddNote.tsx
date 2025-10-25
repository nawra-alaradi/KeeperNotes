import style from '../styles/AddNote.module.css';

export default function AddNote() {
    return (
        <div className={style.card}>
            <input type="text" placeholder="Title"/>
            <textarea placeholder="Take a note..." spellCheck="true"/>
            <button>Add</button>
        </div>
    );
}