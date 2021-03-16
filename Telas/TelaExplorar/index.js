import React, {useState} from 'react';
import { View, Text, Button, Image, TextInput, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import estilo from './estilo';
import filter from '../../assets/icones/filter.png';
import lupa from '../../assets/icones/lupa.png';
import bomba from '../../assets/icones/bomba.png';

const TelaExplorar = (props) => {

    //função de navegação para tela filtro
    const abrirTelaFilto = () => {
        props.navigation.navigate('Filtro');
    };

    const [ busca , setBusca ] = useState();

    return (
        <View>
            <View style = {estilo.tela}>
                <View style = {estilo.boxBusca}>
                    <Image source = {lupa} style = {estilo.iconeLupa} />
                    <TextInput
                    style = {estilo.inputBusca}
                    textAlign = 'left'
                    keyboardType = 'default'
                    value = {busca}
                    onChangeText = {valor => setBusca(valor)}
                    />
                    <TouchableHighlight onPress = {abrirTelaFilto} onHideUnderlays>
                        <Image source = {filter}  style = {estilo.iconeFiltro}/>
                    </TouchableHighlight>
                
                </View>

                <TouchableHighlight onPress = {''} onHideUnderlay style = {estilo.boxTouchSede}>
                    <View style = {estilo.boxSede}>
                        <Image source = {bomba} style = {estilo.iconeBomba}/>
                        <Text style = {estilo.textoSede}>Estou com sede!</Text>                
                    </View>
                </TouchableHighlight>

            </View>
        </View>
    );
}

export default TelaExplorar;
