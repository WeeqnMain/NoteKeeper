import { Card, Heading, Separator, Text } from "@chakra-ui/react"
import moment from "moment/moment"

export default function Note({title, description, created}){
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
            <Card.Footer>{moment(created).format("DD/MM/YYYY HH:mm:ss")}</Card.Footer>
          </Card.Root> 
    )
}