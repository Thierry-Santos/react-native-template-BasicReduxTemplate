import { Alert, Dimensions, Platform } from "react-native";
import NetInfo from "@react-native-community/netinfo";

export const { height, width } = Dimensions.get('window');

/**
 * @param { number } key ( 1 = Width, 2 = Height )
 * @param { number } value ( % size )
 * @returns { number } ( return a int value )
 * @constructor
 */
export const PaddingSize = (
    key,
    value
) => {

    let percentage;
    if ( key === 1) {
        percentage = parseInt(((width * value) / 100)/2 );
    }
    else {
        percentage = parseInt(((height * value) / 100)/2 );
    }
    return isNaN( percentage ) ? value : percentage;
};

/**
 * @param { number } key ( 1 = Width, 2 = Height )
 * @param { number } value ( % size )
 * @returns { number } ( return a int value )
 * @constructor
 */
export const ScreenSize = (
    key,
    value
) => {

    let percentage;
    if ( key === 1) {
        percentage = parseInt((width * value) / 100 );
    }
    else {
        percentage = parseInt((height * value) / 100 );
    }
    return isNaN( percentage ) ? value : percentage;
};

/**
 * @param key
 * @param value
 * @returns {*}
 * @constructor
 */
export const FontScreenSize = (
    value
) => {

    let percentage;
    percentage = parseInt(((width * value) / 50) + ((height * value) / 50) );

    return isNaN( percentage ) ? value : percentage;
};

/**
 * @param { String } value
 * @returns {Promise<any> | Promise<*>}
 */
export const removeEmoji = (
    value: any
) => {

    return new Promise(( resolve, reject ) => {

        if ( typeof value !== "string" ) {

            for ( let i in value ) {

                if ( value.hasOwnProperty(i) && ! validateEmoji( value[i]) ) {
                    reject( i );
                    return ;
                }
            }
        } else {
            if ( ! validateEmoji( value ) ) {
                reject();
                return ;
            }
        }
        resolve();
    });
};

export const validateEmoji = (
    input: any
) => {

    if ( input === null || input === true || input === false || input === undefined ) {
        return true;
    }
    let ranges = [
        '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
        '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
        '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
    ];

    let str = input;
    str = str.replace( new RegExp(ranges.join('|'), 'g'), '' );

    return input === str;
};

export const onlyNumbers = ( string ) => {

    return string.replace(/^\d+$/, "");
};

export const actualDate = () => {

    let data = new Date();

    return ((data.getFullYear() < 10 ? '0' + data.getFullYear() : data.getFullYear()) + "-" +
        (data.getMonth() < 10 ? '0' + data.getMonth() : data.getMonth()) + "-" +
        (data.getDay() < 10 ? '0' + data.getDay() : data.getDay()) + " " +
        (data.getHours() < 10 ? '0' + data.getHours() : data.getHours()) + ":" +
        (data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()) + ":" +
        (data.getSeconds() < 10 ? '0' + data.getSeconds() : data.getSeconds()));
};

export const PlataformAlert = () => {

    if ( Platform.OS === 'ios' ) {
        Alert.alert('Title', 'Message IOS');
    } else {
        Alert.alert('Title', 'Message Android');
    }
};