import { Button, Card, Heading, Separator, Text } from "@chakra-ui/react"
import moment from "moment/moment"

export default function Note({ id, title, description, created, onDelete }){

    const onDeleteButtonClick = () => {
        onDelete({id});
    }

    return(
        <Card.Root variant={"subtle"}>
            <Card.Header>
                <Heading fontWeight="semibold">{title}</Heading>
            </Card.Header>
            <Separator borderWidth="1px" borderColor="gray" />
            <Card.Body>
                <Text>{description}</Text>
            </Card.Body>
            <Separator borderWidth="1px" borderColor="gray" />
            <Card.Footer className="flex justify-between items-center mt-5">
                {moment(created).format("DD/MM/YYYY HH:mm:ss")}
                <div>
                    <Button borderColor="red.500" width="120%" borderWidth="2px" backgroundColor="red.400" color={"black"} onClick={onDeleteButtonClick}><b>DELETE</b></Button>
                </div>
            </Card.Footer>
          </Card.Root> 
    )
}