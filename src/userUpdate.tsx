import { Flex, Button, Stack, forwardRef, HStack, FormLabel, RadioGroup, Radio, useToast } from "@chakra-ui/react"
import { ForwardRefRenderFunction } from "react";
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link } from "react-router-dom";

import { Input } from './components/Input';

import api from './api'


interface InputProps{
    location:{
        state:{
            username: string,
            email: string,
            password: string,
            phone: string,
            gender: string,
            birthdate: string
        }
    }
}

interface OutputProps{
    username?: string,
    email?: string,
    password?: string,
    phone?: string,
    gender?: string,
    birthdate?: string

}


async function updateUser(data: OutputProps){
    await api.put("/edit", data);
}

const FormBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ ...rest },
	ref
) => {
    const username = rest.location.state.username;
    const email = rest.location.state.email;
    const password = rest.location.state.password;
    const phone = rest.location.state.phone;
    const birthdate = rest.location.state.birthdate;
    const gender = rest.location.state.gender;

    const toast = useToast();

	const { register, handleSubmit } = useForm<OutputProps>();
	const onSubmit: SubmitHandler<OutputProps> = data => {   
        data.email = data.email ?  data.email : email;
        data.gender = data.gender ?  data.gender : gender;
        data.password = data.password ?  data.password : password;
        data.phone = data.phone ?  data.phone : phone;
        data.birthdate = data.birthdate ?  data.birthdate : birthdate;
        data.username = data.username ?  data.username : username;
        console.log(data);  
        updateUser(data);
    };
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
				onSubmit={handleSubmit(onSubmit)}
			>
				<FormLabel
					textAlign="center"
					fontSize={22}
				
				>Editar Usuário</FormLabel>
				<Stack spacing="4">
					<Input
                        placeholder={username}
						label="Nome"
						{...register('username')}
					/>
					<Input
                        placeholder={password}
						label="Senha"
						type="password"
						{...register('password')}
					/>
					<Input
                        placeholder={email}
						label="E-mail"
						{...register('email')}
					/>
					<Input
                        placeholder={birthdate}
						label="Nascimento"
						{...register('birthdate')}
					/>
					<Input
                        placeholder={phone}
						label="Telefone"
						{...register('phone')}
					/>
					<FormLabel>Gênero</FormLabel>
					<RadioGroup>
					<HStack spacing="24px">
						<Radio {...register('gender')} value="M">Masculino</Radio>
						<Radio {...register('gender')} value="F">Feminino</Radio>
						<Radio {...register('gender')} value="O">Outro</Radio>
					</HStack>
					</RadioGroup>
					

				</Stack>

				<Button
					type="submit"
					mt={6}
					mb={6}
					colorScheme="blue"
					size="lg"
                    onClick={() =>
                        toast({
                          position: "top",
                          title: "Usuário Atualizado.",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        })
                      }
				>
					UPDATE
				</Button>
				<Link to="/">
					<Button
						colorScheme="blue"
						size="lg"
						w="50%"
					>
						READ
					</Button>
				</Link>
			</Flex>
		</Flex>
    )    
    
}
export const userUpdate = forwardRef(FormBase)