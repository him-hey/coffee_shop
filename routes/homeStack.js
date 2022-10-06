import { createStackNavigator } from "react-navigation-stack";
import {createAppContainer} from "react-navigation";
import Home from '../screens/HomeScreen';
import ProductDetail from "../screens/ProductDetail";

const screens = {
    Home: {
        screen: Home
    },
    ProductDetail: {
        screen: ProductDetail
    }
}
const HomeStack = createStackNavigator(screens);


export default createAppContainer(HomeStack);