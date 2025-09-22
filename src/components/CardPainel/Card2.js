import { View, StyleSheet, Text, TextInput } from "react-native"
import BotaoCard from "../Botao/BotaoCard"
import { CheckBox } from "react-native-web"



export default function Card2(){
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



                <View style = {style.check}>
                    <Text style = {style.Txt}>ALUNO:</Text>
                    <CheckBox/>
                    <Text style= {style.Txt}>PROFESSOR:</Text>
                    <CheckBox />

                    
                </View>

        


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
        backgroundColor: '#B1EEBE',
        
    },
    card:{
    padding: 60,
    backgroundColor: "#9acddc",
    borderRadius: '15px'
    
  },

     TitleTec: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#333",
        margin: 15
        

  },

  barra: {
    borderWidth: 2,
    borderRadius: '20px',
    backgroundColor: 'white',
    width: 500,
    height: 35,
    padding: 10,
    margin: 10
  }, 

  Txt:{
    fontSize: 20,
    textAlign: 'center',
    marginLeft: 20,
    padding: 2
  },

  check: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 20,
    justifyContent: 'center',
    
    
    
  },




  

})