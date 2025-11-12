import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import BottomTabs from './BottomTabs';
import Login from '../pages/Login';
import painelTecnico from '../pages/painelTecnico';
import cadastroTecnico from '../pages/cadastroTecnico';
import CadastroPaciente from '../pages/cadastroPaciente';
import buscarPorId from '../pages/buscarPorId';
import cadastroExame from '../pages/cadastroExame';


const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login' >

        <Stack.Screen name='BottomTabs'component={BottomTabs}/>
        <Stack.Screen name='Login'component={Login} />
        <Stack.Screen name='PainelTecnico'component={painelTecnico} />
        <Stack.Screen name='CadastroExame'component={cadastroExame} />
        <Stack.Screen name='CadastoPaciente'component={CadastroPaciente} />
        <Stack.Screen name='CadastroTecnico'component={cadastroTecnico} />
        <Stack.Screen name='EditarDados'component={cadastroTecnico} />
        <Stack.Screen name='BuscarId'component={buscarPorId} />
        
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

