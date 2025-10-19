import { View, Text, StyleSheet } from "react-native";
import BotaoCard from "../Botao/BotaoCard";

export default function CardP({ titulo="Titulo", descricao="Descrição", cor="#6fa29e", localEnvio }) {
  return (

    <View style={styles.cardPainel}>
         
        <View style={styles.card}>
            <Text style={styles.tituloCard}>{titulo}</Text>
            <Text style={styles.textoCard}>{descricao}</Text>
            <BotaoCard title="Confirmar" color={cor} onPress={localEnvio}/> 
       </View>

    </View>
 );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#B1EEBE",
    borderRadius: 10,
    padding: 40, //tamanho do card
    alignItems: "center",
    marginBottom:15 //espaçamento de um card para o outro
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
  
});
