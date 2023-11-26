import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../../store";

/**
 * Provider component that wraps the entire application to provide Redux store and persistor.
 *
 * @component
 * @param {Object} props - React component props.
 * @param {ReactNode} props.children - The child components that will have access to the Redux store.
 * @returns {ReactElement} The rendered React element with Redux store and persistor providers.
 */
export const StoreProvider = (props) => {
  const { children } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
