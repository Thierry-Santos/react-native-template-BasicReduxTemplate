import React from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome';
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons';

export const Icons = ({ name, ...props }) => {
    return (
        <Icon
            name={ Platform.OS === 'ios' ? `ios-${ name }` : `md-${ name }` }
            { ...props }
        />
    )
};

export const IconsFA = ({ name, ...props }) => {
    return (
        <IconFA
            name={ `${ name }` }
            { ...props }
        />
    )
};

export const IconsMCI = ({ name, ...props }) => {
    return (
        <IconMCI
            name={ `${ name }` }
            { ...props }
        />
    )
};