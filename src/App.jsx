import React from "react";
import MyRouts from './routers/routes';

import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <MyRouts />
      </div>
    </Provider>
  );

}
export default App;
