
import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import BotaoCard from '../components/Botao/BotaoCard';


export default function CadastroPaciente() {
  return (
    <SafeAreaView style={styles.container}>

        <View style={styles.title}>
            <Text style={styles.titulo}>Cadastro Paciente</Text>
        </View>

        <View style={styles.formulario}>


        <Text style={styles.descricao}>Nome Completo</Text>
        
        <TextInput style={styles.campo}
                   placeholder="Digite seu nome completo">
        </TextInput>

        <Text style={styles.descricao}>CPF:</Text>
        <TextInput style={styles.campo}
                   placeholder="Digite seu CPF">
        </TextInput>

        <Text style={styles.descricao}>E-mail:</Text>
        <TextInput style={styles.campo}
                   placeholder="Digite seu E-mail">
        </TextInput>

        <Text style={styles.descricao}>Senha:</Text>
        <TextInput style={styles.campo}
                   placeholder="Digite sua senha"
                   secureTextEntry // deixa o campo como senha
                   >
        </TextInput>

        <Text style={styles.descricao}>Ano Letivo:</Text>
        <TextInput style={styles.campo}
                   placeholder="Digite seu nome completo">
        </TextInput>
        </View>
        
        <View>
          <BotaoCard color="#6fa29e" title='Confirmar'/>
        </View>
    
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    //justifyContent:"center",
    backgroundColor:"#B1EEBE",
    
  },

   descricao:{
    alignItems:"center",
    marginBottom:5
  },

  title:{
    fontSize: 20,
    fontWeight: "bold",
    marginTop:50
    //marginBlockEnd:100,
    //marginTop:100,
  },

  titulo:{
    fontSize: 20,
    fontWeight: "bold",
    margin:20
  
    },

  formulario:{
    backgroundColor: "#B1EEBE", //Cor no Formulario
    borderRadius:10,
    marginTop:30,
    //backgroundColor: "#fcfcfcff",
  }, 

  campo:{
    //width: '100%',
    height: 10,
    padding: 15, //margem de dentro
    borderWidth: 2,
    borderRadius: 10,
  },

  btn:{

  }

});
