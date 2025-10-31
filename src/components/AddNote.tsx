import type { AddNoteProps } from "../interfaces/NoteProps";
import style from "../styles/AddNote.module.css";
import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Zoom } from "@mui/material";

export default function AddNote({ onAddNote }: AddNoteProps) {
    const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

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
   const result: boolean = onAddNote(title, content);
if(result){
    setTitle("");
    setContent("");
        setIsExpanded(false);

   }
  }

  return (
    <div className={style.card}>
     { isExpanded && <input type="text" placeholder="Title" value={title} 
      onChange={handleChange} name="title" />}
      <textarea
      onClick = {() => setIsExpanded(true)}
        placeholder="Take a note..."
        spellCheck="true"
        value={content}
        onChange={handleChange}
        name="content"
        rows = {isExpanded ? 3 : 1}
      />
      <Zoom in={isExpanded}>
      <Fab onClick={handleClick}>
        <AddIcon />
      </Fab>
      </Zoom>
    </div>
  );
}
