import AddNote from "./AddNote";
import style from "../styles/Body.module.css";
import Note from "./Note";
import React, {useState} from "react";
import type { NoteProps } from "../interfaces/NoteProps";

export default function Body() {
const [notesList, setNotesList] = useState<NoteProps[]>([]);

function handleAddNote(title: string, content: string):boolean {

  if(title.trim() === "" || content.trim() === "") {
    alert("Title and Content cannot be empty!");
    return false; 
  }
  const newNote: NoteProps = {
    Id: notesList.length + 1, 
    title: title,
    content: content
  };
  console.log("fired Add Note: ", newNote);
  setNotesList([...notesList, newNote]);
    return true; 

  }


function handleDeleteNote(id: number) {
  const updatedNotes = notesList.filter((note) => note.Id !== id);
  setNotesList(updatedNotes);
}
  
  return (
    <div className={style.parentContainer}>
      <div className={style.container}>
        <AddNote onAddNote={handleAddNote}/>
        <div className={style.notescontainer}>
          {notesList.map((note) => <Note key={note.Id}  title={note.title} content={note.content} onDelete={handleDeleteNote} Id={note.Id}/>)}

        </div>
      </div>
    </div>
  );
}
