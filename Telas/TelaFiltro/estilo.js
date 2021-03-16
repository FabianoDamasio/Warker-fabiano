import React from 'react';
import { StyleSheet } from 'react-native';


const estilo = StyleSheet.create ({

    tela: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'white'
    },

    textPesquisa: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 24,
        fontFamily: '@expo-google-fonts/OpenSans',
        marginTop: 30,
        paddingLeft: 30,

    },
    
    boxPesquisa: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#F3F4F5',
        //width: 354,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 30,
        marginTop: 5,
        alignItems: 'center',
    },

    iconeLupa: {
        marginLeft: 21.67,
        width: 15.83,
        height: 15.83
    },

    inputPesquisa: {
        flex: 1,
        fontSize: 14,
        fontFamily: '@expo-google-fonts/OpenSans',
        //fontWeight: 400,
        fontStyle: 'normal',
        color: '#65696B',
        lineHeight: 21,
        marginLeft: 12.5,
        marginRight: 20,
    },

    boxlinha: {
        height: 1,
        backgroundColor: '#EBEFF0',
        marginHorizontal: 30,
        marginVertical: 20,
        /*borderWidth: 1,
        borderStyle: 'solid',
        color: '#EBEFF0',*/

    },

    textoCombustível: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 24,
        fontFamily: '@expo-google-fonts/OpenSans',
        marginLeft: 30,
    },

    listaCheckBox: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-around',

    },

    CheckboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 30,

    },

    checkbox: {
        width: 24,
        height: 24,
        opacity: 0.5,
        iconColor: '#CA5501',
        marginVertical: 20,

    },

    EscritaChecbox :{
        fontSize: 16,
        fontFamily: '@expo-google-fonts/OpenSans',
        paddingLeft: 10,
        fontStyle: 'normal',
        lineHeight: 24,
        color: '#B3B9BB',
        
    },

    textoNivel: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 24,
        fontFamily: '@expo-google-fonts/OpenSans',
        marginLeft: 30,
    },



    textoDistancia: {
        fontSize: 16,
        fontWeight: 600,
        lineHeight: 24,
        fontFamily: '@expo-google-fonts/OpenSans',
        marginLeft: 30,
    },

});

export default estilo;
