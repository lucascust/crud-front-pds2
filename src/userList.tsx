import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserBlock } from "./components/UserBlock";
import { Accordion, Flex, Text, Divider, Button } from "@chakra-ui/react";

import api from './api';


interface UserProps{
    username: string,
    email: string,
    password: string,
    phone: string,
    gender: string,
    birthdate: string,
}


const userList = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
        async function getUsers(){
            const response = await api.post('');
            //console.log(response.data);
            setUsers(response.data);
          
        }
        getUsers();
 
        

    }, [])
    console.log(users)
    return (

        <Flex
			w="100vw"
			h="100vh"
			align="center"
			justify="center"
			>
            
			<Flex 
				as="form"
				w="100%"
				bg="gray.800"
				p="8"
				maxWidth={400}
				borderRadius={8}
				flexDir="column"
			>
                <Text
                    align='center'
                    mb={2}
                    fontSize='2xl'
                > Usuários </Text>


                <Divider orientation="horizontal" m={3} />
                
                <Accordion allowToggle>
                {users.map(user => {
                    return <UserBlock
                                username={user.username} 
                                email={user.email} 
                                password={user.password} 
                                gender={user.gender} 
                                phone={user.phone} 
                                birthdate={user.birthdate} 
                            />
                    
                })}
                </Accordion>
                
                <Link  to='/signup'>
                    <Button
                        mt={5}
                        colorScheme='blue'
                    >
                        Cadastrar Usuário
                    </Button>
                </Link>

        </Flex>
        </Flex>
  );
}


export default userList;