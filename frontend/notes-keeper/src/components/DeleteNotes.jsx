import { Button } from "@chakra-ui/react";

export default function DeleteNotes({ onDeleteAll }){

    const onClick = () => {
        onDeleteAll();
        console.log("clicked");
    }

    return(
        <Button backgroundColor="red.600" color={"white"} onClick={onClick}>Delete all notes</Button>
    )
}