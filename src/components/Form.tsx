import { Flex, Button, Stack, forwardRef, HStack, FormLabel, RadioGroup, Radio, useToast } from "@chakra-ui/react"
import { ForwardRefRenderFunction } from "react";
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from "react-router-dom";
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';

import { Input } from './Input';

import api from '../api'
// interface Birthdate{
// 	day: number,
// 	month: number,
// 	year: number
// }


interface FormProps{
    username: string,
    email: string,
    password: string,
    phone: string,
    gender: string,
	birthdate: Date
}

const FormSchema = yup.object().shape({
	username: yup.string().required('Nome obrigatório'),
	email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
	password: yup.string().required('Senha obrigatória'),
	gender: yup.string(),
	birthdate: yup.date().required().min(new Date(1900, 1, 1)),
	phone: yup.string()
		.matches(
			/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}/
			, 'Telefone não é válido')
		.required('Telefone Obrigatório')
});

const FormBase: ForwardRefRenderFunction<HTMLInputElement, FormProps> = (
	{ ...rest },
	ref
) => {
	const toast = useToast();	
	const { register, handleSubmit } = useForm({
		resolver: yupResolver(FormSchema)
	})
	const onSubmit: SubmitHandler<FormProps> = data => api.post("signup", data);
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
				
				>Cadastrar Usuário</FormLabel>
				<Stack spacing="4">
					<Input
						label="Nome"
						{...register('username', {
							required: "Nome é requirido"
						})}
					/>
					<Input
						label="Senha"
						type="password"
						{...register('password', {
							required: "Senha é requirido"
						})}
					/>
					<Input
						label="E-mail"
						{...register('email', {
							required: "E-mail é requirido"
						})}
					/>
					<Input
						label="Nascimento"
						{...register('birthdate', {
							required: "Idade é requirido"
						})}
					/>
					<Input
						label="Telefone"
						{...register('phone', {
							required: "Telefone é requirido"
						})}
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
                          title: "Usuário Criado.",
                          status: "success",
                          duration: 9000,
                          isClosable: true,
                        })
                      }
				>
					CREATE
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
export const Form = forwardRef(FormBase)