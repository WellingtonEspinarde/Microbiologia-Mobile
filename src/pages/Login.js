
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

//Colocar um icone antes do "Bem Vindo"
//Colocar navegaçao Stack


import BotaoCard from '../components/Botao/BotaoCard';

export default function Login() {
  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.login}>


      <Text style={styles.textologo}>Seja Bem-Vindo!</Text>
    
    <View style={styles.campoImput}>
      <Text>Email:</Text>
      <TextInput
      style={styles.campo}
      placeholder="Digite seu email"
      />
    </View>

    <View style={styles.campoImput}>
      <Text>Senha:</Text>
      <TextInput
      style={styles.campo}
      placeholder="Digite sua senha"
      secureTextEntry // deixa o campo como senha
      />
    </View>

      <BotaoCard color="#6fa29e" title='Confirmar'/>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:1,
    backgroundColor:"#B1EEBE", 
    alignItems:'center',
    justifyContent:'center',
  },

  login:{
    backgroundColor:"#B1EEBE",
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    borderWidth:2,
  },

  campo:{
    width:'100%',
    height:10,
    padding:15, //margem de dentro
    borderWidth:2,
    borderRadius:10,
  },

  textologo:{
    fontWeight:'bold', // deixa em negrito o texto
    fontSize:20, //tamanho da fonte
    margin:5
  },

  campoImput:{
    marginBottom:5, //margem em baixo de cada campo
  },


});
