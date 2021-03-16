import React, {useState} from 'react';
import { View, Text, TextInput, Image, CheckBox } from 'react-native';
import estilo from './estilo';

import lupa from '../../assets/icones/lupa.png';


const TelaFiltro = () => {
    
    const [ pesquisa, setPesquisa ] = useState ();

    const [ selectGasolina, setSelectGasolina ] = useState (false);
    const [ selectAlcool, setSelectAlcool ] = useState (false);
    const [ selectDiesel, setSelectDiesel ] = useState (false);

    const [ selectUltima, setSelectUltima ] = useState (false);
    const [ selectDuas, setSelectDuas ] = useState (false);
    const [ selectCheio, setSelectCheio ] = useState (false);

    const [ slider, setSlider ] = useState ();

    return (

        <View>
            <View style = {estilo.tela}>
                <View>
                    <Text style = {estilo.textPesquisa}>Pesquise por posto</Text>
                </View>
                
                <View style = {estilo.boxPesquisa}>
                    <Image source = {lupa} style = {estilo.iconeLupa} />
                    <TextInput
                    style = {estilo.inputPesquisa}
                    textAlign = 'left'
                    keyboardType = 'default'
                    value = {pesquisa}
                    onChangeText = {valor => setPesquisa(valor)}
                    />
                </View>

                <View style = {estilo.boxlinha}></View>

                <View>
                    <Text style = {estilo.textoCombustível}>Combustível</Text>
                </View>

                <View style = {estilo.listaCheckBox}>
                    <View style = {estilo.CheckboxContainer}>
                    <CheckBox style = {estilo.checkbox}
                    value = { selectGasolina }
                    onValueChange = { setSelectGasolina }
                    />

                    <Text style = {estilo.EscritaChecbox}>Gasolina</Text>
                    </View>

                    <View style = {estilo.CheckboxContainer}>
                    <CheckBox style = {estilo.checkbox}
                    value = { selectAlcool }
                    onValueChange = { setSelectAlcool }
                    />

                    <Text style = {estilo.EscritaChecbox}>Álcool</Text>
                    </View>

                    <View style = {estilo.CheckboxContainer}>
                    <CheckBox style = {estilo.checkbox}
                    value = { selectDiesel }
                    onValueChange = { setSelectDiesel }
                    />

                    <Text style = {estilo.EscritaChecbox}>Diesel</Text>
                    </View>

                </View>

                <View style = {estilo.boxlinha}></View>

                <View>
                    <Text style = {estilo.textoNivel}>Nível do reservatório</Text>
                </View>

                <View style = {estilo.listaCheckBox}>
                    <View style = {estilo.CheckboxContainer}>
                    <CheckBox style = {estilo.checkbox}
                    value = { selectUltima }
                    onValueChange = { setSelectUltima }
                    />

                    <Text style = {estilo.EscritaChecbox}>Última gota</Text>
                    </View>

                    <View style = {estilo.CheckboxContainer}>
                    <CheckBox style = {estilo.checkbox}
                    value = { selectDuas }
                    onValueChange = { setSelectDuas }
                    />

                    <Text style = {estilo.EscritaChecbox}>Duas últimas gotas</Text>
                    </View>

                    <View style = {estilo.CheckboxContainer}>
                    <CheckBox style = {estilo.checkbox}
                    value = { selectCheio }
                    onValueChange = { setSelectCheio }
                    />

                    <Text style = {estilo.EscritaChecbox}>Reservatório cheio</Text>
                    </View>

                    <View style = {estilo.boxlinha}></View>

                    <View>
                    <Text style = {estilo.textoDistancia}>Distância da minha localização</Text>
                    </View>

                </View>

            </View>
        </View>
    );
};

export default TelaFiltro;