import { View, StyleSheet, Text, TextInput } from "react-native";
import BotaoCard from '../components/Botao/BotaoCard';
import TabNavigator from "../routes/tabRoutes";



export default function buscarPorId(){




    return(

        <View style={style.container}>
            <Text style={style.txt}>Status do Paciente</Text>
            <View style = {style.card}> 
            
            <Text style={style.txt}>ID do Paciente:</Text>
            <TextInput style = {style. barra}/>

            <BotaoCard color="green" title="Buscar"/>
            </View>
        </View>

    )
    
}


const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: '#B1EEBE'
    },

    card:{
    padding: 50,
    backgroundColor: "#9acddc",
    borderRadius: 15,
    width: '85%'
   },
   
   txt: {
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    padding: 2
        
   }, 

   barra: {
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'white',
    height: 40,
    textAlign: "center",   

   } 

})