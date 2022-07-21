import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Route from "./component/navigation/Route";
import "react-native-gesture-handler";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <UserAuthContextProvider>
        <Route />
        <StatusBar style="light" />
      </UserAuthContextProvider>
    </Provider>
  );
}
