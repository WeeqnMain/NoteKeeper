import { Button } from "@chakra-ui/react";

export default function DeleteAllNotes({ onDeleteAll }){

    const onClick = () => {
        onDeleteAll();
    }

    return(
        <Button backgroundColor="red.600" color={"white"} onClick={onClick}>Delete all notes</Button>
    )
}