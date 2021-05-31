import { Input as ChakraInput, FormControl, FormLabel, forwardRef, InputProps as ChakraInputProps} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
	name: string;
	label: string;
	type?: string;
	placeholder?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, label, type, placeholder, ...rest },
	ref
) => {
    return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
			<ChakraInput
				name={name}
				type={type}
				placeholder={placeholder}
				focusBorderColor="blue.500"
				bg="gray.900"
				variant="filled"
				_hover={{ bgColor: "gray.900" }}
				size="lg"
				id={name}
				ref={ref}
				{...rest}
			/>
		</FormControl>
	)
}

export const Input = forwardRef(InputBase)