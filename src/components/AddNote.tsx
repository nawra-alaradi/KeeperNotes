import type { AddNoteProps } from "../interfaces/NoteProps";
import style from "../styles/AddNote.module.css";
import React, { useState } from "react";

export default function AddNote({ onAddNote }: AddNoteProps) {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
   // console.log("Fired handle change");
    //console.log(name+ " "+ value);
    if (name === "title") {
      setTitle(value);
    } else {
      setContent(value);
    }
  }

  function handleClick() {
    onAddNote(title, content);
    setTitle("");
    setContent(""); 
  }

  return (
    <div className={style.card}>
      <input type="text" placeholder="Title" value={title} 
      onChange={handleChange} name="title"/>
      <textarea
        placeholder="Take a note..."
        spellCheck="true"
        value={content}
        onChange={handleChange}
        name="content"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
