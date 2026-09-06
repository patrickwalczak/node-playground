import { insert, getDB, saveDB } from './db.js'


const createNote = (noteTitle, noteValue, noteTags) => {
  return { title: noteTitle || null, value: noteValue || null, tags: noteTags || [], id: Date.now() };
}

export const newNote = async (noteTitle, noteValue, noteTags) => {
  const data = createNote(noteTitle, noteValue, noteTags)
  await insert(data)
  return data
}

export const getAllNotes = async () => {
  const db = await getDB()
  return db.notes
}

export const findNotes = async (filter) => {
  const notes = await getAllNotes()
  return notes.filter(note => note.value.toLowerCase().includes(filter.toLowerCase()) || note.title.toLowerCase().includes(filter.toLowerCase()))
}

export const removeNote = async (id) => {
  const notes = await getAllNotes()
  const match = notes.find(note => note.id === id)

  if (match) {
    const newNotes = notes.filter(note => note.id !== id)
    await saveDB({notes: newNotes})
    return id
  }
}

export const removeAllNotes = async () => {
  await saveDB({notes: []})
}