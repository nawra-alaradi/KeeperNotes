import AddNote from "./AddNote";
import style from "../styles/Body.module.css";
import Note from "./Note";
import {notes} from "../notes";

export default function Body() {

  
  return (
    <div className={style.parentContainer}>
      <div className={style.container}>
        <AddNote />
        <div className={style.notescontainer}>
          {notes.map((note) => <Note key={note.key}  title={note.title} content={note.content} />)}

        </div>
      </div>
    </div>
  );
}
