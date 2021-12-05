import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoginPage from "./src/screens/LoginPage";

const navigator = createStackNavigator(
  {
    LoginPage: LoginPage
  },
  {
    initialRouteName: "LoginPage",
    defaultNavigationOptions: {
      title: "MyLoginApp",
    },
  }
);

export default createAppContainer(navigator);
