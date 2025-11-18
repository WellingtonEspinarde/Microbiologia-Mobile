import {useState} from "react";
import { View, Text, StyleSheet, TextInput,} from 'react-native';
import { RadioButton } from 'react-native-paper';
import BotaoCard from '../components/Botao/BotaoCard';
import { useNavigation } from "@react-navigation/native";

export default function ExameBase() {
const navigation = useNavigation();

const [meioCultura, setMeioCultura] = useState(null);
const [exame, setExame] = useState(null);
const [gram, setGram] = useState(null);


function salvarDados(){

    if (!gram) {
        alert("Selecione Gram Positivo ou Negativo")
        return;
    }  

     if (gram === 'positivo'){
        navigation.navigate('GramPositivo');
    }else {
      navigation.navigate('GramNegativo');
    }
}

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, padding: 15, fontWeight: 'bold'}}>Cadastro Exame</Text>

        <View style={styles.card}> 
            <View>

              <View>
                <Text style = {styles.text}>Meio de Cultura Utilizado:</Text>
              </View>

                <View style = {styles.Radius}>
                  
                  <View style = {styles.Radius1}>
                    <Text  style = {styles.text}>MacConkey:</Text>
                    <RadioButton
                      value="macconkey"
                      status={meioCultura === "macconkey" ? "checked" : "unchecked"}
                      onPress={() => setMeioCultura ("macconkey")}
                    />
                  </View>

                  <View style = {styles.Radius1}>
                    <Text  style = {styles.text}>CLED:</Text>
                    <RadioButton
                      value='cled'
                      status = {meioCultura === "cled" ? "checked" : "unchecked"}
                      onPress={() => setMeioCultura ("cled")}
                    />
                  </View> 

                  <View style = {styles.Radius1}> 
                    <Text  style = {styles.text}>Ágar Manitol:</Text>
                    <RadioButton
                      value='manitol'
                      status= {meioCultura === "manitol" ? "checked" : "unchecked"}
                      onPress={() => setMeioCultura ("manitol")}
                    />
                  </View>

                </View>
            </View>

            <View>
                <Text style={styles.text}>Tipo de Amostra:</Text>
                <TextInput style = {styles.barra} 
                value= {exame} 
                onChangeText={setExame}/>
            </View>

            <View style={{alignItems: 'center'}}>
            <View style = {styles.Radius}>
                <Text  style = {styles.text}>Gram Positvo:</Text>
                  <RadioButton
                    value='positivo'
                    status={gram === "positivo" ? "checked" : "unchecked"}
                    onPress={() => setGram("positivo")}
                  />

                  <Text  style = {styles.text}>Gram Negativo:</Text>
                  <RadioButton
                    value='negativo'
                    status={gram === "negativo" ? "checked" : "unchecked"}
                    onPress={() => setGram ("negativo")}
                  />  
                </View>
              </View>
            

            <BotaoCard color='green' title='Salvar' onPress={salvarDados}/>
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
        justifyContent:"center",
        gap:2,

},

Radius1:{
  flexDirection: "row",
}

});

