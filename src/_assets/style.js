import { Platform, StatusBar, StyleSheet } from 'react-native';
import {PaddingSize, ScreenSize, FontScreenSize} from '../_helper/Helper';

const isIOS = Platform.OS === 'ios';

const inputPadH = ScreenSize(2, 1);
const inputPadW = ScreenSize(1, 3);

export const styles = StyleSheet.create({

    app: {
        flex: 1,
        backgroundColor: '#90fffa',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: ScreenSize(1, 90),
        marginBottom: ScreenSize(1, 5),
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    // columnContainer: {
    //     flexDirection: 'column', //TODO talvez isso não precise (nao achei a logica)
    // },

    // Views
    basicButton: {
        backgroundColor: '#000000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    basicButtonText: {
        fontSize: FontScreenSize( 10),
        color: '#ffffff',
    },

    outsideButton: {
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outsideButtonText: {
        fontSize: FontScreenSize(10),
        color: '#000000',
    },

    iconButton: {
        backgroundColor: '#000000',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        width: ScreenSize(1, 15),
        height: ScreenSize(1, 15),
    },
    iconButtonText: {
        fontSize: FontScreenSize(10),
        color: '#ffffff',
    },

    inputBasic: {
        backgroundColor: '#ffffff',
        borderRadius: 5,
        minWidth: '100%',
    },
    inputBasicText: {
        color: '#000000',
        paddingHorizontal: inputPadW,
        paddingVertical: inputPadH,
        fontSize: FontScreenSize(10),
    },

    inputOutline: {
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 100,
        minWidth: '100%',
    },
    inputOutlineText: {
        color: '#000000',
        paddingHorizontal: inputPadW,
        paddingVertical: inputPadH,
        fontSize: FontScreenSize(10),
    },

    inputIcon: {
        flexDirection: 'row',
        borderColor: '#000000',
        borderWidth: 2,
        borderRadius: 100,
        minWidth: '100%',
        alignItems: 'center'
    },
    iconInput: {
        color: '#000000',
        paddingLeft: inputPadW,
        fontSize: FontScreenSize(10),
    },
    inputIconText: {
        flex: 1,
        color: '#000000',
        paddingHorizontal: inputPadW,
        paddingVertical: inputPadH,
        fontSize: FontScreenSize(10),
    },

    titleText: {
        fontSize: FontScreenSize(15),
    },
    subTitleText: {
        fontWeight: 'bold',
        fontSize: FontScreenSize(10),
    },
    paragraphText: {
        fontSize: FontScreenSize(10),
    },
    simpleText: {
        fontSize: FontScreenSize(8),
    },

    //Padding Vertical
    pad2: {
        paddingVertical: PaddingSize(2, 2)
    },
    pad5: {
        paddingVertical: PaddingSize(2, 5)
    },
    pad10: {
        paddingVertical: PaddingSize(2, 10)
    },
    pad15: {
        paddingVertical: PaddingSize(2, 15)
    },
    pad20: {
        paddingVertical: PaddingSize(2, 20)
    },

    //Padding Horizontal
    padH5: {
        paddingHorizontal: PaddingSize(1, 5)
    },
    padH10: {
        paddingHorizontal: PaddingSize(1, 10)
    },
    padH15: {
        paddingHorizontal: PaddingSize(1, 15),
    },
    padH20: {
        paddingHorizontal: PaddingSize(1, 20),
    },

    // Shadow for IOS and Android
    simpleShadow: {
        shadowOffset: {
            width: ScreenSize(1, 1),
            height: ScreenSize(1, 1)
        },
        shadowColor: 'black',
        shadowOpacity: 0.3,
        elevation: 8,
    }
});