import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { NavigationContainer } from '@react-navigation/native';


import PainelTecnico from "../pages/painelTecnico"
import CadastroPaciente from "../pages/cadastroPaciente"
import buscarPorId from '../pages/buscarPorId';


const Tab = createBottomTabNavigator();


export default function BottomTabs(){

    return(

        
            <Tab.Navigator  initialRouteName='BuscarPorId'>
                <Tab.Screen name = "PainelTecnico" component = {PainelTecnico}/>
                <Tab.Screen name = "CadastroPaciente" component = {CadastroPaciente}/>
                <Tab.Screen name = "BuscarPorId" component = {buscarPorId}/>
            </Tab.Navigator>
        

    )

}

