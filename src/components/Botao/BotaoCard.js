import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function BotaoCard({color ="#ddac70ff", title = "TxtBtnPadrao"}) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={[styles.botao, { backgroundColor: color }]}>
                    
            <Text style={styles.textoBota}>{title}</Text>

        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius:10
  },

  botao: { 
    paddingVertical: 10,
    borderRadius: 8,
    width: "100%", //tamanho do botao horizontal 
    alignItems: "center", //alinha o texto de dentro do botao
  },

  textoBota:{
    marginHorizontal:60
  }
});