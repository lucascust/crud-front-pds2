import { Input as ChakraInput, FormControl, FormLabel, forwardRef, InputProps as ChakraInputProps, RadioGroup, Radio, HStack} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
	label: string;
}

const RadioInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ label, ...rest },
	ref
) => {
    return (
		<FormControl>
			<FormLabel>{label}</FormLabel>
            <RadioGroup>
                <HStack spacing="24px">
                <Radio value="m">Masculino</Radio>
                <Radio value="f">Feminino</Radio>
                <Radio value="o">Outro</Radio>
                </HStack>
            </RadioGroup>
		</FormControl>
	)
}

export const RadioInput = forwardRef(RadioInputBase)