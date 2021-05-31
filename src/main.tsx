import { Switch, Route } from 'react-router-dom';

import { Form } from './components/Form';
import userList from './userList';
import { userUpdate } from './userUpdate';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={userList}></Route>
      <Route exact path='/signup' component={Form}></Route>
      <Route exact path='/update' component={userUpdate}></Route>
    </Switch>
  );
}

export default Main;