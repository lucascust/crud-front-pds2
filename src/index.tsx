import { render } from 'react-dom';
import { App } from './App';
import { DataForm } from './components/dataForm'

render(App(), document.getElementById('root'))
render(DataForm(), document.getElementById('form'))