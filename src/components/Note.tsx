import style from '../styles/Note.module.css';
import type NoteProps from '../interfaces/NoteProps';

export default function Note({title, content, onClick}: NoteProps ) {
  return (
    <div className={style.card}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={onClick}>Delete</button>
    </div>
  );
}

