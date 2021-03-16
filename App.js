
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TelaExplorar from './Telas/TelaExplorar';
import TelaFiltro from './Telas/TelaFiltro';

const Navegacao = createStackNavigator();

const App = () => (
    <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen name='Explorar' component = { TelaExplorar } />
        <Navegacao.Screen name='Filtro' component = { TelaFiltro } />
      </Navegacao.Navigator>
    </NavigationContainer>
  );
export default App;