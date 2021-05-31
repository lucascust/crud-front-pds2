import { InputProps as ChakraInputProps, 
    Divider,    
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
    CloseButton,
    HStack,
    Spacer,
    Tooltip,
    IconButton   
    } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { EditIcon } from '@chakra-ui/icons'

import api from "../api";

interface UserProps extends ChakraInputProps {
    username: string,
    email: string,
    password: string,
    phone: string,
    gender: string,
    birthdate: string,
}

async function deleteUser(email: string){
    await api.post('/delete', {email: email});
    window.location.reload();
}


export function UserBlock(props: UserProps){

    function formatDate(date: string){
        
        const parsedDate = new Date(Date.parse(date));

        var day = ('0' + parsedDate.getDate()).slice(-2);
        var month = ('0' + (parsedDate.getMonth() + 1)).slice(-2);
        var year = parsedDate.getFullYear();
      
        return day + '/' + month + '/' + year;       
    }

    return(
        <section className="user-block">
        <AccordionItem
            focusBorderColor="blue.500"
            borderRadius={8}
            border="outset"
            borderColor="blue.300"
            borderWidth={1}
        >
            <h2>
            <AccordionButton
                focusBorderColor="blue.500"
                borderRadius={8}
                border="outset"
                borderColor="blue.300"
                borderWidth={1}
                p={4}
            >
                <Box flex="1" textAlign="left">
                    <HStack w='100%'>
                    
                    <Text m={1}>{props.username}</Text>
                    <Spacer />
                    <Link 
                        to={{ 
                            pathname: '/update', 
                            state: { username: props.username,
                                     email: props.email,
                                     password: props.password,
                                     phone: props.phone,
                                     gender: props.gender,
                                     birthdate: formatDate(props.birthdate),
                            } 
                        }}
                    >
                        <Tooltip label="UPDATE" aria-label="updateButton">
                            <IconButton 
                                aria-label='edit'
                                colorScheme="blue"
                                size="sm"
                                icon={<EditIcon/>}
                            />
                        </Tooltip>
                    </Link>
                    <Link to="/">
                        <Tooltip label="DELETE" aria-label="deleteButton">
                            <CloseButton bg='red.600'
                            aria-label="Delete" 
                            onClick={() => {deleteUser(props.email)}}/>
                        </Tooltip>
                    </Link>
                    
                    </HStack >
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Box flex="1" textAlign="left">
                    <Text m={1}>Email:  {props.email}</Text>
                    <Text m={1}>Senha:  {props.password}</Text>
                    <Text m={1}>Telefone:  {props.phone}</Text>
                    <Text m={1}>Gênero:  {props.gender}</Text>
                    <Text m={1}>Nascimento:  {formatDate(props.birthdate)}</Text>
                </Box>
            </AccordionPanel>
        </AccordionItem>    
        </section>
    );

}