import React from 'react';
import { View, Text, Button } from 'react-native';

import { mapDispatchToProps, mapStateToProps } from "../_reducers/Functions";
import { connect } from "react-redux";
import { styles } from "../_assets";

class HomePage extends React.Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <View style={ styles.app }>
                <Text>This is a Basic Template</Text>
                <Text>Made by Thiérry Santos</Text>
                <Text>github.com/thierry-santos</Text>
                <Button title={'Menu'} onPress={() => {
                    this.props.navigation.navigate('Menu');
                }}/>
            </View>
        )
    }
}

const home = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export {home as HomePage};