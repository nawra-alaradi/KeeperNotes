import AddNote from "./AddNote";
import style from "../styles/Body.module.css";
import Note from "./Note";

export default function Body() {
  return (
    <div className={style.parentContainer}>
      <div className={style.container}>
        <AddNote />
        <div className={style.notescontainer}>
          <Note />
                    <Note />

          <Note />
                    <Note />
                    <Note />

          <Note />
          <Note />

        </div>
      </div>
    </div>
  );
}
