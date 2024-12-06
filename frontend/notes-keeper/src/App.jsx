import CreateNoteForm from './components/CreateNoteForm'
import Note from './components/Note'
import Filters from './components/Filters'
import { createNote, deleteNote, deleteAllNotes, fetchNotes } from './services/notes'
import { useEffect, useState } from 'react'
import DeleteAllNotes from './components/DeleteAllNotes'
import { Separator } from '@chakra-ui/react'

function App() {
  const [notes, setNotes] = useState([]);
  
  const[filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc"
  });

  const fetchData = async () =>{
    let notes = await fetchNotes(filter);
    setNotes(notes);
  } 

  useEffect(() => {
    fetchData();
  }, [filter])
  
  const onCreate = async (note) => {
    await createNote(note);
    fetchData();
  }

  const onDelete = async (id) => {
    await deleteNote(id);
    fetchData();
  }

  const onDeleteAll = async () => {
    await deleteAllNotes();
    fetchData();
  }

  return (
    <>
    <section className="p-8 flex flex-row justify-between items-start">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm onCreate={onCreate}/>
        <Separator borderWidth="3px" borderColor="gray" />

        <Filters filter={filter} setFilter={setFilter}/>
        <Separator borderWidth="3px" borderColor="gray" />
        
        <DeleteAllNotes onDeleteAll={onDeleteAll}/>
      </div>
      <ul className="flex flex-col gap-5 w-1/2">
        {notes.map((n) => (
          <li key={n.id}>
            <Note 
              id={n.id}
              title={n.title}
              description={n.description}
              created={n.created}
              onDelete={onDelete}
            />
          </li>
        ))}
      </ul>
    </section>
    </>
  )
}

export default App
