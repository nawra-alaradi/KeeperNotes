interface NoteProps {
  title: string;
  key: number; // Optional prop
  content: string;
   onClick: (event: React.MouseEvent) => void;
}
export default NoteProps;