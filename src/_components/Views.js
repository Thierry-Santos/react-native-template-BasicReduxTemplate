import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import {styles} from '../_assets';
import {IconsMCI} from './Icons';

export const ButtonBasic = props => {
    return (
        <TouchableOpacity
            style={[ styles.basicButton, styles.simpleShadow ]}
            {...props}
        >
            <Text style={[ styles.basicButtonText, styles.pad5, styles.padH5 ]}>{ props.name }</Text>
        </TouchableOpacity>
    )
};

export const ButtonOutside = props => {
    return (
        <TouchableOpacity
            style={[ styles.outsideButton ]}
            {...props}
        >
            <Text style={[ styles.outsideButtonText, styles.pad5, styles.padH5 ]}>{ props.name }</Text>
        </TouchableOpacity>
    )
};

export const ButtonIcon = props => {
    return (
        <TouchableOpacity
            style={[ styles.iconButton, styles.simpleShadow ]}
            {...props}
        >
            <IconsMCI
                style={[ styles.iconButtonText, styles.pad5, styles.padH5 ]}
                name={ props.name }
            />
        </TouchableOpacity>
    )
};

export const InputBasic = props => {
    return (
        <View style={[ styles.inputBasic, styles.simpleShadow ]}>
            <TextInput style={[ styles.inputBasicText ]} {...props}>{ props.text }</TextInput>
        </View>
    )
};

export const InputOutline = props => {
    return (
        <View style={ styles.inputOutline }>
            <TextInput style={[ styles.inputOutlineText ]} {...props}>{ props.text }</TextInput>
        </View>
    )
};

export const InputIcon = props => {
    return (
        <View style={ styles.inputIcon }>
            <IconsMCI
                name={ props.name }
                style={ styles.iconInputText }
            />
            <TextInput style={[ styles.inputIconText ]} {...props}>{ props.text }</TextInput>
        </View>
    )
};