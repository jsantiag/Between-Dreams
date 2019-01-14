import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginScreen from './screens/LoginScreen'; 
import HomeScreen from './screens/HomeScreen'; 


const StackNavigator = createStackNavigator(
{
  Login: LoginScreen, 
  Home: HomeScreen, 
  Entry: EntryScreen
}
); 

const AppNavigator = createAppContainer(StackNavigator);
export default AppNavigator;