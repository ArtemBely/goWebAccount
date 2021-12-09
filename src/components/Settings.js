import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import Need_Header from "./Need_Header";
import Account from "./Account";


class Settings extends React.Component {
  render() {
    return (
      <p className='wrap_settings'>
            <Need_Header />
            <Account />
      </p>
    )
  }
}

export default Settings;
