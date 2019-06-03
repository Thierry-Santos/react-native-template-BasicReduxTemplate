import React from 'react';
import {StatusBar, Text, TextInput} from 'react-native';
import { Provider } from 'react-redux';
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import { HomePage, MenuPage } from './src/_pages';

import store from './src/store';

const MainNavigation = createStackNavigator({
    Home: HomePage,
    Menu: MenuPage
}, {
    initialRouteName: 'Home',
    headerMode: 'none'
});

const DefaultNavigation = createSwitchNavigator({
    MainApp: MainNavigation,
}, {
    initialRouteName: 'MainApp',
    headerMode: 'none'
});

// And the app container
let Navigation = createAppContainer( DefaultNavigation );

// Render the app container component with the provider around it
export default class App extends React.Component {

    constructor(props) {
        super(props);

        // Counter for accessibility device changes
        Text.defaultProps = { ...(Text.defaultProps || {}), allowFontScaling: false };
        TextInput.defaultProps = { ...(TextInput.defaultProps || {}), allowFontScaling: false };
    }

    render() {
        return (
            <Provider store={store}>
                <StatusBar
                    backgroundColor={'#90fffa'}
                />
                <Navigation />
            </Provider>
        );
    }
}