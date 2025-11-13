
import { View, StyleSheet, Text, SafeAreaView, TextInput, ScrollView } from "react-native";

import { RadioButton } from 'react-native-paper';  // importando o componente RadioButton da biblioteca externa react-native-paper, botões de seleção "positivo" e "negativo"
import BotaoCard from '../components/Botao/BotaoCard';

export default function gramPositiva() {

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrol} contentContainerStyle={styles.areaPrincipal} showsVerticalScrollIndicator={false}>

            <View style={styles.subcontainer}>

                <View style={styles.titulo}>
                    <Text style={styles.titulo}>Gram Positiva</Text>
                </View>

                <View>

                    <View style={styles.linha}>

                        <Text style={styles.subtitulo}>Crescimento em Manitol:</Text>

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

                    <View style={styles.linha}>

                        <Text style={styles.subtitulo}>Teste de Novobiocina:</Text>

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

                    <View style={styles.linha}>

                        <Text style={styles.subtitulo}>Coloração de Gram:</Text>

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

                    <View style={styles.linha}>

                        <Text style={styles.subtitulo}>Coagulose:</Text>

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

                    <View style={styles.linha}>

                        <Text style={styles.subtitulo}>Catalase:</Text>

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
                            <BotaoCard color="green" title="Salvar" />
                </View>

            </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B1EEBE'
    },

    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:20,
    },

    subtitulo: {
        fontSize: 15,
        fontWeight: "bold",
        alignItems: 'center',
        marginBottom: 5,
    },

    subcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: "#9acddc",
        padding: 50,
    },

    linha: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10,
        elevation: 2,
    },

    radioGroup: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8, // afasta levemente os itens
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

    scrol:{
        flex: 1,
        margin: 15,
    }








});