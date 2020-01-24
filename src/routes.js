import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Login from './pages/login';

const Routes = createAppContainer(
    createStackNavigator({
        Login:{
            screen: Login,
            navigationOptions:{
                title:''
            }
        },
        Main:{
            screen: Main,
        },
    },{
        defaultNavigationOptions: {
            headerTintColor: "#FFF",
            headerStyle:{
                backgroundColor: "#000",
            }
        },
    })
);

export default Routes;
