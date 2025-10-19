import { View, StyleSheet, Text, TextInput } from "react-native";
import BotaoCard from "../Botao/BotaoCard";



export default function cardId(){
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
    borderRadius: '15px'
   },
   
   txt: {
     fontSize: 25,
        fontWeight: "bold",
        color: "#333",
        margin: 5,
        textAlign: 'center'
        
   }, 

   barra: {
    borderWidth: 2,
    borderRadius: '20px',
    backgroundColor: 'white',
    width: 300,
    height: 30,
    padding: 15,
    margin: 5

   } 

})