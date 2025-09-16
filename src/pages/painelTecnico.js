import { View, Text, ScrollView, StyleSheet, SafeAreaView } from "react-native";

import CardP from "../components/CardPainel/CardP";

export default function PainelTecnico() {
  return (
    
  <SafeAreaView style={styles.safeArea} >

      <ScrollView style={styles.container} contentContainerStyle={styles.areaPrincipal} showsVerticalScrollIndicator={false}>
        <View style={styles.descricao}>
          <Text style={styles.title}>Painel Técnico</Text>
          <Text style={styles.subtitle}>Selecione uma das opções abaixo:</Text>
        </View>

        <CardP titulo="Cadastrar Paciente" descricao="Adicione um novo paciente ao sistema." />
        <CardP titulo="Cadastrar Exame" descricao="Registre um novo exame." />
        <CardP titulo="Buscr Paciente por ID" descricao="Consulte paciente ja cadastrado." />
        <CardP titulo="Editar Dados" descricao="Atualize informações cadastradas." />
        <CardP titulo="Sair" descricao="Encerra a sessão e voltar ao login" cor="red"/>

      </ScrollView>

   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffffff", 
  },

   safeArea: {
    flex: 1 ,
    backgroundColor: "#ffffffff", 
    alignItems: 'center',
    justifyContent: 'center',
  },

  descricao: { 
    marginBottom: 20,
    alignItems: "center", // deixei  os texto centralizado
    //marginTop: 20, //Margem do topo caso estivesse fora da SafeAreaView 
  },

  title:{
    fontSize: 20,
    fontWeight: "bold", // deixa destacado 
    marginBottom: 5, // espaço do titulo para o subtitulo
  },

   subtitle: {
    fontSize: 16,
  },
  
});
