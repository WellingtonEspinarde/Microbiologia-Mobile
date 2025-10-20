
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native';

import painelTecnico from '../pages/painelTecnico';
import buscarPorId from '../pages/buscarPorId';
import cadastroPaciente from '../pages/cadastroPaciente';
import cadastroTecnico from '../pages/cadastroTecnico';


const Tab = createBottomTabNavigator();


export default function BottomTabs(){

    return(
            <Tab.Navigator screenOptions={{headerShown: false}}>
                
                <Tab.Screen name = "CadastroPaciente" component = {cadastroPaciente}/>
                <Tab.Screen name = "CadastroTecnico" component = {cadastroTecnico}/>
                <Tab.Screen name = "BuscarId" component = {buscarPorId}/>

            </Tab.Navigator>
        

    )

}

