import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from "@chakra-ui/react"
import { theme } from './styles/theme'

import Main from './main';

enum Gender {
	female = "female",
	male = "male",
	other = "other"
}

interface FormInput {
	username: String;
	gender: Gender;
}

function Index() {

	return (
		<ChakraProvider theme={theme}>
			<BrowserRouter>
				<Main />
			</BrowserRouter>
		</ChakraProvider>
	)
  }
  

render(Index(), document.getElementById('root'))
//render(App(), document.getElementById('root'))