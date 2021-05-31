import { FormControl, forwardRef, InputProps as ChakraInputProps, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormLabel, Tooltip} from "@chakra-ui/react";
import { ForwardRefRenderFunction } from "react";

interface InputProps extends ChakraInputProps {
	name: string;
	label: string;
	max: number;
	min: number;
	defaultValue?: number;
}

const DateInputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
	{ name, max, min, defaultValue, label, ...rest },
	ref
) => {
    return (
        <Tooltip label={label} aria-label="A tooltip">
        <FormControl>
        <FormLabel>{label}</FormLabel>
            <NumberInput 
                max={max} 
                min={min}
                defaultValue={defaultValue}>
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
        </Tooltip>
	)
}

export const DateInput = forwardRef(DateInputBase)