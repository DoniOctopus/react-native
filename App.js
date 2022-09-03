import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import WelcomePage from "./src/features/Welcome/WelcomePage";
import LoginPage from "./src/features/Login/LoginPage";
import {ThemeProvider} from "./src/shared/context/ThemeContext";
import useAppFont from "./src/shared/hook/UseAppFont";
import {serviceFactory} from "./src/services/ServiceFactory";
import {DepedencyProvider} from "./src/shared/context/DepedencyContext";
import ProductList from "./src/features/product/ProductList";
import HomePage from "./src/features/Home/HomePage";

export default function App() {
    const fonts = useAppFont();
    const services = serviceFactory();
    if (!fonts){
        return  null;
    }
  return (
      <DepedencyProvider services={services}>
          <ThemeProvider>
              {/*<WelcomePage/>*/}
              {/*  <LoginPage/>*/}
              <ProductList/>
              {/*<HomePage/>*/}
          </ThemeProvider>
      </DepedencyProvider>

  );
}