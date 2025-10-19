import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"


import PainelTecnico from "../pages/painelTecnico"
import CadastroPaciente from "../pages/cadastroPaciente"
import PainelConfig from "../pages/painelConfig"


const Tab = createBottomTabNavigator();


export default function TabRouts(){

    return(

        
            <Tab.Navigator >
                <Tab.Screen name = "PainelTecnico" component = {PainelTecnico}/>
                <Tab.Screen name = "CadastroPaciente" component = {CadastroPaciente}/>
                <Tab.Screen name = "PainelConfig" component = {PainelConfig}/>
            </Tab.Navigator>
        

    )



}

