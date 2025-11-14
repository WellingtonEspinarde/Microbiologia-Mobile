import {useState} from "react";
import { View, Text, StyleSheet, TextInput,} from 'react-native';
import { RadioButton } from 'react-native-paper';
import BotaoCard from '../components/Botao/BotaoCard';
import RadioButtonGroup from "react-native-paper/lib/typescript/components/RadioButton/RadioButtonGroup";



export default function exameBase() {

  



  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, padding: 15, fontWeight: 'bold'}}>Cadastro Exame:</Text>

        <View style={styles.card}> 
            <View>

                <Text style = {styles.text}>Meio de Cultura Utilizado:</Text>
              
                
                <View style = {styles.Radius}>
                  <Text  style = {styles.text}>MacConkey:</Text>
                  <RadioButton
                    value='Select'
                  />
                  <Text  style = {styles.text}>CLED:</Text>
                  <RadioButton
                    value='Select'
                  />
                  <Text  style = {styles.text}>Ágar Manitol:</Text>
                  <RadioButton
                    value='Select'
                  />
                </View>
            </View>

            <View>
                <Text style={styles.text}>Tipo de Amostra:</Text>
                <TextInput style = {styles.barra}/>
            </View>

            <View style={{alignItems: 'center'}}>
            <View style = {styles.Radius}>
                <Text  style = {styles.text}>Gram Positvo:</Text>
                  <RadioButton
                    value='Select'
                  />

                  <Text  style = {styles.text}>Gram Negativo:</Text>
                  <RadioButton
                    value='Select'
                  />  
                </View>
              </View>
            

            <BotaoCard color='green' title='Salvar'/>
         </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B1EEBE'
  },
  text: {
    fontSize: 20,
        textAlign: 'center',
        marginLeft: 20,
        padding: 3,
        fontWeight: 'bold',
   
  },
card: {
         padding: 30,
        backgroundColor: "#9acddc",
        borderRadius: 15,
        borderRadius: 10,
        borderWidth:2,
    
         },

barra: {
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        height: 40,
        textAlign: "center",
        margin: 6,
},
Radius: {
        flexDirection: "row",
        alignItems: "center",
        gap: 2,

},

});

