import style from '../styles/Note.module.css';
import type {NoteProps} from '../interfaces/NoteProps';

export default function Note({Id, title, content, onDelete}: NoteProps & {onDelete: (Id:number) => void}) {
 
  function handleDelete() {
    onDelete(Id);
  }
  return (
    <div className={style.card}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

