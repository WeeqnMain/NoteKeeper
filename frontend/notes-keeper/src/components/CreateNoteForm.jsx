import { Button, Input, Textarea } from '@chakra-ui/react'
import { useState } from 'react'

export default function CreateNoteForm({ onCreate }){
    const [note, setNote] = useState();

    const onSubmit = (e) =>{
        e.preventDefault();
        setNote(null);
        onCreate(note)
    }

    return(
        <form 
            className="w-full flex flex-col gap-3" 
            onSubmit={onSubmit}
        >
            <h3 className="font-bold text-xl">Create note</h3>
            <Input 
                variant={"subtle"}
                placeholder="Title" 
                value={note?.title ?? ""}
                onChange={(e) => setNote({...note, title: e.target.value})}
            />
            <Textarea 
                variant={"subtle"}
                placeholder="Description" 
                value={note?.description ?? ""}
                onChange={(e) => setNote({...note, description: e.target.value})}
            />
            <Button type="submit" color={"white"} backgroundColor="green.600">Create</Button>
        </form>
    )
}