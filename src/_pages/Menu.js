import React from 'react';
import {View, Text} from 'react-native';

import {mapDispatchToProps, mapStateToProps} from '../_reducers/Functions';
import {connect} from 'react-redux';
import {styles} from '../_assets';
import {ButtonBasic, ButtonIcon, ButtonOutside, InputBasic, InputIcon, InputOutline} from '../_components';

class MenuPage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={ styles.app }>
                <View style={ styles.container }>
                    <Text style={ styles.titleText }>Title</Text>
                    <Text style={ styles.subTitleText }>Sub Title</Text>
                    <Text style={ styles.paragraphText }>Paragraph</Text>
                    <Text style={ styles.simpleText }>Simple</Text>
                    <InputBasic text={'Input Basic'}/>
                    <InputIcon name={'account'} text={'Input With Icon'}/>
                    <InputOutline text={'Input Outline'}/>
                    <View style={ styles.rowContainer }>
                        <ButtonBasic name={'Back'} onPress={ () => this.props.navigation.goBack() }/>
                        <ButtonIcon name={'plus'} onPress={ () => this.props.navigation.goBack() }/>
                        <ButtonOutside name={'Back'} onPress={ () => this.props.navigation.goBack() }/>
                    </View>
                </View>
            </View>
        )
    }
}

const menu = connect(mapStateToProps, mapDispatchToProps)(MenuPage);
export {menu as MenuPage};