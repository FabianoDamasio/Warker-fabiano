import React from 'react';
import { StyleSheet } from 'react-native';


const estilo = StyleSheet.create({

    tela: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },

    boxBusca: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F3F4F5',
        //width: 354,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 30,
        marginTop: 34,
        alignItems: 'center',
        shadowOffset: { width: 1, height: 1},
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },

    iconeFiltro: {
        marginRight: 21.67,
        width: 24,
        height: 24,
        opacity: 0.7,
    },

    inputBusca: {
        flex: 1,
        fontSize: 14,
        fontFamily: '@expo-google-fonts/OpenSans',
        //fontWeight: 400,
        fontStyle: 'normal',
        color: '#65696B',
        lineHeight: 21,
        marginHorizontal: 12.5,
    },

    iconeLupa: {
        marginLeft: 21.67,
        width: 15.83,
        height: 15.83,
    },

    boxTouchSede: {
        //width: 354,
        height: 50,
        marginHorizontal: 30,
        borderRadius: 10,
        justifyContent: 'center',
        marginBotton: 30,

    },

    boxSede: {
        flexDirection: 'row',
        //width: 354,
        height: 50,
        borderRadius: 10,
        backgroundColor: '#CA5501',
        //marginHorizontal: 30,
        justifyContent: 'center',
        alignItems: 'center',
        shadowOffset: { width: 1, height: 1},
        shadowColor: 'black',
        shadowRadius: 5,
        shadowOpacity: 0.5,
    },
    iconeBomba: {
        width: 15,
        height: 15,
        paddingRight: 16,

    },

    textoSede: {
        fontSize: 16,
        fontFamily: '@expo-google-fonts/OpenSans',
        fontStyle: 'normal',
        //fontWeight: 700,
        color: 'black',
        lineHeight: 21,
        marginLeft: 16,
    },

});

export default estilo;