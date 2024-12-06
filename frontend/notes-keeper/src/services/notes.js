import axios from "axios";

export const fetchNotes = async (filter) => {
    try{
        var responce = await axios.get("http://localhost:5181/notes", {
            params: {
                search: filter?.search,
                sortItem: filter?.sortItem,
                sortOrder: filter?.sortOrder,
            }
        });
        return responce.data.notes;
    }
    catch(e){
        console.error(e);
    }
}

export const createNote = async (note) => {
    try{
        var responce = await axios.post("http://localhost:5181/notes", note);
        return responce.status;
    }
    catch(e){
        console.error(e);
    }
}

export const deleteAllNotes = async () => {
    try{
        var responce = await axios.delete("http://localhost:5181/notes");
        return responce.status;
    }
    catch(e){
        console.error(e);
    }
}