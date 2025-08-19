export function getAllNotes(req, res) {
  res.status(200).send("you got 5 notes");
}

export function createNote(req, res) {
  res.status(201).json({ message: "you created 5 notes" });
}
export function updateNote(req, res) {
  res.status(200).json({ message: "you updated 5 notes" });
}
export function deleteNote(req, res) {
  res.status(200).json({ message: "you deleted 5 notes" });
}
