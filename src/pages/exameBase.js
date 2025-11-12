import { View, Text, StyleSheet, TextInput} from 'react-native';


export default function exameBase() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 35, padding: 15, fontWeight: 'bold'}}>Cadastro Exame:</Text>

        <View style={styles.card}> 
            <View>
                <Text style = {styles.text}>Meio de Cultura Utilizado:</Text>
                <TextInput style = {styles.barra}/>
                <Text style= {{padding: 3, textAlign: 'center', fontStyle: 'italic'}}> *MacConkey, CLED ou Ágar Manitol*</Text>
            </View>

            <View>
                <Text style={styles.text}>Tipo de Amostra:</Text>
                <TextInput style = {styles.barra}/>
            </View>
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
        padding: 50,
        backgroundColor: "#9acddc",
        borderRadius: 15,
        width: '85%',
        textAlign: 'center'
         },

barra: {
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        height: 40,
        textAlign: "center"
},

});

