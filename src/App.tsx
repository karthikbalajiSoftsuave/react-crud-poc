import { BrowserRouter } from "react-router-dom";
import { RootRoutes } from './routing/routes';
import { persistor, store } from "./redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppContext from "./contextAPI";
import './App.css';

function App() {
  const contextItems = {
  }

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <AppContext.Provider value={contextItems}>
          <BrowserRouter>
            <RootRoutes />
          </BrowserRouter>
        </AppContext.Provider>
      </PersistGate>
    </Provider>
  );
}

export default App;
