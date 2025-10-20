
import { StyleSheet, Text, View, TextInput, SafeAreaView } from 'react-native';
import React, { useState } from "react";

import BotaoCard from '../components/Botao/BotaoCard';


export default function Login({ navigation }) {

  //cria duas variáveis de estado uma para guardar o e-mail e outra para a senha
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");


  //Funçao criada para testar a tela de login
  function fazerLogin() {
  if (email === "" || senha === "") {
    alert("Preencha todos os campos!");
  } else if (email === "Teste" && senha === "1234") {
     navigation.navigate('PainelTecnico');
  } else {
    alert("Email ou senha incorretos!");
  }
}


  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.login}>


      <Text style={styles.textologo}>Seja Bem-Vindo!</Text>
    
    <View style={styles.campoImput}>
      <Text>Email:</Text>
      <TextInput
      style={styles.campo}
      placeholder="Digite seu email"
      value={email}  //
      onChangeText={(texto) => setEmail(texto)} //
      />
    </View>

    <View style={styles.campoImput}>
      <Text>Senha:</Text>
      <TextInput
      style={styles.campo}
      placeholder="Digite sua senha"
      secureTextEntry // deixa o campo como senha
      value={senha}  //
      onChangeText={(texto) => setSenha(texto)}  //
      />
    </View>

      <BotaoCard color="#6fa29e" title="Confirmar" onPress={fazerLogin}/>
    
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
    height:60,
    padding:15, //margem de dentro
    borderWidth:2,
    borderRadius:10,
  },

  textologo:{
    fontWeight:'bold', // deixa em negrito o texto
    fontSize:20, //tamanho da fonte
    marginTop:20
  },

  campoImput:{
    marginBottom:5, //margem em baixo de cada campo
    width: 250, // largura fixa
    margin:20,
  },


});
