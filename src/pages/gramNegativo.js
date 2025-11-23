import { View, StyleSheet, Text, ScrollView, TextInput} from "react-native";
import { RadioButton } from 'react-native-paper';
import { SafeAreaView } from "react-native-web";

export default function gramNegativo() {
 return (

    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>RESULTADO: GRAM-NEGATIVO</Text>
                <View style= {styles.card}>

                    <View>
                        <Text style={styles.titulo}>EPM - Fermentações de Glicose:</Text>
                    </View>
                    
                        <View style = {styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                      <Text style={styles.titulo}>EPM - Produção de Gás:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                         <Text style={styles.titulo}>EPM - Produção de H2S:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                        <Text style={styles.titulo}>EPM - Produção de Urease:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                        <Text style={styles.titulo}>EPM - Produção de L - troptofano desaminase:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                        <Text style={styles.titulo}>MILI - Motilidade:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                        <Text style={styles.titulo}>MILI - Lisina Descarboxilase:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                        <Text style={styles.titulo}>MILI - Produção de INDOL:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View>

                        <Text style={styles.titulo}>Citrato - única fonte de carbono:</Text>
                        <View style={styles.card2}>
                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton 
                                value="positivo"
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                value="negativo"
                                />
                                 
                            </View>

                             <View style={styles.inputs}>
                                 <Text>Lote:</Text>
                                    <TextInput style={styles.input} placeholder="Digite o lote" />
                                    <Text>Validade:</Text>
                                    <TextInput style={styles.input} placeholder="Digite a validade" />
                            </View>
                        </View> 



                        <View style={styles.card2}>                    
                        <Text style={styles.titulo}>CAMPO ABERTO: BULAS</Text>
                        <View> 
                           <TextInput
                            style={styles.inputMeio}
                            placeholder="Digite aqui..."
                            placeholderTextColor="#999"
                            multiline={true}
                            textAlign="center"
                            textAlignVertical="center"
                           ></TextInput>
                            
            
                        </View> 

                        <Text style={styles.titulo}>Identificação:</Text>
                        <View>
                            <TextInput
                            style={styles.inputMeio}
                            placeholder="Digite aqui..."
                            placeholderTextColor="#999"
                            multiline={true}
                            textAlign="center"
                            textAlignVertical="center"
                           ></TextInput>
                        </View> 
                    </View>
                </View> 
            <View/>
         </SafeAreaView>
    </ScrollView>

  );
}


const styles = StyleSheet.create({
    container: {
         flex: 1 ,
        backgroundColor: '#B1EEBE', 
        alignItems: 'center',
        justifyContent: 'center',
    },

card: {
       justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#9acddc",
        padding: 50,
    },
titulo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "Black",
        margin: 15
},
radioGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8, // afasta levemente os itens
    },
card2: {
     backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        elevation: 2,
        borderWidth: 2,
},


inputs: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 8,
     },
input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 5,
        width: "35%",
    },

areaTexto: {
  backgroundColor: "#fff", 
  
  
  
},

inputMeio: {
  backgroundColor: "#fff",
  height: 200,               // retangular e grande
  borderRadius: 10,
  borderWidth: 1,
  borderColor: "#ccc",
  padding: 10,
  fontSize: 16,
  color: "#333",
  textAlign: "center",
  textAlignVertical: "center", 
  
 
},
});