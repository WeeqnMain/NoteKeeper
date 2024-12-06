import CreateNoteForm from './components/CreateNoteForm'
import Note from './components/Note'
import Filters from './components/Filters'
import { createNote, deleteAllNotes, fetchNotes } from './services/notes'
import { useEffect, useState } from 'react'
import DeleteNotes from './components/DeleteNotes'
import { Separator } from '@chakra-ui/react'

function App() {
  const [notes, setNotes] = useState([]);
  
  const[filter, setFilter] = useState({
    search: "",
    sortItem: "date",
    sortOrder: "desc"
  });

  useEffect(() => {
    const fetchData = async () =>{
      let notes = await fetchNotes(filter);
      setNotes(notes);
    }

    fetchData();
  }, [filter])
  
  const onCreate = async (note) =>{
    await createNote(note);
    let notes = await fetchNotes(filter);
    setNotes(notes);
  }

  const onDeleteAll = async () => {
    await deleteAllNotes();
    let notes = await fetchNotes(filter);
    setNotes(notes);
  }

  return (
    <section className="p-8 flex flex-row justify-start items-start gap-12">
      <div className="flex flex-col w-1/3 gap-10">
        <CreateNoteForm onCreate={onCreate}/>
        <Separator borderWidth="3px" borderColor="gray" />

        <Filters filter={filter} setFilter={setFilter}/>
        <Separator borderWidth="3px" borderColor="gray" />
        
        <DeleteNotes onDeleteAll={onDeleteAll}/>
      </div>
      <ul className="flex flex-col gap-5 w-1/2">
        {notes.map((n) => (
          <li key={n.id}>
            <Note 
              title={n.title}
              description={n.description}
              created={n.created}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App