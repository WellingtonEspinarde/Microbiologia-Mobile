import { View, StyleSheet, Text, TextInput } from "react-native"
import BotaoCard from '../components/Botao/BotaoCard';


export default function cadastroTecnico(){
    return(

        
        <View style = {style.container}>
       <Text style = {style.TitleTec}>Cadastro do Técnico</Text>

           <View style= {style.card}> 
                <Text style={style.Txt}>Nome:</Text>
                <TextInput style= {style.barra}/>
                
                <Text style={style.Txt}>CPF:</Text>
                <TextInput style= {style.barra}/>

                <Text style={style.Txt}>E-mail:</Text>
                <TextInput style= {style.barra}/>

                <Text style={style.Txt}>Senha:</Text>
                <TextInput style= {style.barra}
                secureTextEntry={true}
                />

                <Text style={style.Txt}>Ano Letivo:</Text>
                <TextInput style= {style.barra}/>


                <BotaoCard title="Cadastrar" color="green"/>
                
           </View>
        </View>

        

    )
}


const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#B1EEBE'
        
    },
    card:{
    padding: 30,
    backgroundColor: "#9acddc",
    borderRadius: 15,
    width: "90%"
    
  },

     TitleTec: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#333",
        margin: 15
        

  },

  barra: {
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: 'white',
    height: 40,
    textAlign: "center",   
  }, 

  Txt:{
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    padding: 2
  },

  


})




