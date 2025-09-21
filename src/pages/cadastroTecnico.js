import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from "react-native";


export default function CadastroTecnico(){
    return(

        <View style={styles.container}>
            <Text style={styles.title}>Cadastro Do Técnico</Text>
        </View>


    )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B1EEBE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#333",

  },
});