import React from "react";
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from "react-native";

export default function PainelTecnico() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.areaPrincipal}>
      <View style={styles.descricao}>
        <Text style={styles.title}>Painel do Técnico</Text>
        <Text style={styles.subtitle}>Selecione uma das opções abaixo:</Text>
      </View>

      <View style={styles.opcoesPainel}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.tituloCard}>Cadastrar Paciente</Text>
          <Text style={styles.textoCard}>Adicione um novo paciente ao sistema.</Text>
          <TouchableOpacity
            style={[styles.botao, styles.cadastrarPaciente]}
          >
            <Text style={styles.textoBotao}>Acessar</Text>
          </TouchableOpacity>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <Text style={styles.tituloCard}>Cadastrar Exame</Text>
          <Text style={styles.textoCard}>Registre um novo exame realizado.</Text>
          <TouchableOpacity
            style={[styles.botao, styles.cadastrarExame]}
          >
            <Text style={styles.textoBotao}>Acessar</Text>
          </TouchableOpacity>
        </View>

        {/* Card 3 */}
        <View style={styles.card}>
          <Text style={styles.tituloCard}>Buscar Paciente por ID</Text>
          <Text style={styles.textoCard}>Consulte paciente já cadastrados.</Text>
          <TouchableOpacity
            style={[styles.botao, styles.buscarPaciente]}
          >
            <Text style={styles.textoBotao}>Acessar</Text>
          </TouchableOpacity>
        </View>

        {/* Card 4 */}
        <View style={styles.card}>
          <Text style={styles.tituloCard}>Editar Dados</Text>
          <Text style={styles.textoCard}>Atualize informações cadastradas.</Text>
          <TouchableOpacity
            style={[styles.botao, styles.editar]}
          >
            <Text style={styles.textoBotao}>Acessar</Text>
          </TouchableOpacity>
        </View>

        {/* Card Logout */}
        <View style={[styles.card, styles.sair]}>
          <Text style={[styles.tituloCard, styles.tituloSair]}>Sair</Text>
          <Text style={styles.textoCard}>Encerrar sessão e voltar ao login.</Text>
          <TouchableOpacity
            style={[styles.botao, styles.botaoSair]}
          >
            <Text style={styles.textoBotao}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B1EEBE", 
  },
  areaPrincipal: {
    padding: 20, //margem dos cards com a borda
  },
  descricao: { 
    marginBottom: 20,
    alignItems: "center" // deixei centralizado mas poderia ser left também
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
  },
  opcoesPainel: {
    width: "100%", //largura dos cards
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  tituloCard: { 
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  textoCard: {
    marginBottom: 15,
  },
  botao: {  //Estilo dos Botoes dos Cards
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%",
    alignItems: "center", //alinha o texto de dentro do botao
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
  cadastrarPaciente: { 
    backgroundColor: "#0d6efd",
  },
  cadastrarExame: {
    backgroundColor: "#198754",
  },
  buscarPaciente: {
    backgroundColor: "#ffc107",
  },
  editar: {
    backgroundColor: "#0dcaf0",
  },
  sair: {
    borderWidth: 2,//linha da borda
    borderColor: "#dc3545", //cor da borda do card de sair
  },
  tituloSair: { //Titolo do botao de sair 
    color: "#dc3545",
  },
  botaoSair: { //cor do botao de sair
    backgroundColor: "#dc3545",
  },
});
