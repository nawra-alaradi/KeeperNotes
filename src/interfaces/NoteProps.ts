interface NoteProps {
  Id: number; // Optional prop
  title: string;
  content: string;
}

interface AddNoteProps {
  onAddNote: (title: string, content: string) => boolean;
}

export type { NoteProps, AddNoteProps };
