import {View, StyleSheet, Text, SafeAreaView, TextInput, ScrollView} from "react-native";

import {RadioButton} from 'react-native-paper';
import BotaoCard from '../components/Botao/BotaoCard';
import {useState} from "react";
import {cadastrarExame} from "../shared/exame/Api";

export default function gramPositivo({route, navigation}) {

    const { meioCultura, tipoAmostra, gram, pacienteId } = route.params;

    const [manitol, setManitol] = useState(null);
    const [manitolLote, setManitolLote] = useState("");
    const [manitolVal, setManitolVal] = useState("");

    const [novobiocina, setNovobiocina] = useState(null);
    const [novobiocinaLote, setNovobiocinaLote] = useState("");
    const [novobiocinaVal, setNovobiocinaVal] = useState("");

    const [coloracao, setColoracao] = useState(null);
    const [coloracaoLote, setColoracaoLote] = useState("");
    const [coloracaoVal, setColoracaoVal] = useState("");

    const [coagulase, setCoagulase] = useState(null);
    const [coagulaseLote, setCoagulaseLote] = useState("");
    const [coagulaseVal, setCoagulaseVal] = useState("");

    const [catalase, setCatalase] = useState(null);
    const [catalaseLote, setCatalaseLote] = useState("");
    const [catalaseVal, setCatalaseVal] = useState("");

    const handleCadastrar = async () => {
        const dados = {
            meioCultura,
            tipoAmostra,
            gram,
            pacienteId,
            testes: [
                {
                    nomeTeste: "manitol",
                    resultado: manitol,
                    lote: manitolLote,
                    validade: manitolVal
                },
                {
                    nomeTeste: "novobiocina",
                    resultado: novobiocina,
                    lote: novobiocinaLote,
                    validade: novobiocinaVal
                },
                {
                    nomeTeste: "coloracao",
                    resultado: coloracao,
                    lote: coloracaoLote,
                    validade: coloracaoVal
                },
                {
                    nomeTeste: "coagulase",
                    resultado: coagulase,
                    lote: coagulaseLote,
                    validade: coagulaseVal
                },
                {
                    nomeTeste: "catalase",
                    resultado: catalase,
                    lote: catalaseLote,
                    validade: catalaseVal
                }
            ],
        };

        try {
            await cadastrarExame(dados);
            alert("Exame cadastrado! Voltando ao início...");

            setTimeout(() => {
                navigation.goBack();
            }, 3000);
        } catch (e) {
            alert("Erro! Não foi possível cadastrar o exame");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrol} contentContainerStyle={styles.areaPrincipal}
                        showsVerticalScrollIndicator={false}>

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
                                    status={manitol === "positivo" ? "checked" : "unchecked"}
                                    onPress={() => setManitol("positivo")}
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                    value="negativo"
                                    status={manitol === "negativo" ? "checked" : "unchecked"}
                                    onPress={() => setManitol("negativo")}
                                />
                            </View>

                            <View style={styles.inputs}>
                                <Text>Lote:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite o lote"
                                    value={manitolLote}
                                    onChangeText={setManitolLote}
                                />
                                <Text>Validade:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="dd/MM/yyyy"
                                    value={manitolVal}
                                    onChangeText={setManitolVal}
                                />
                            </View>
                        </View>

                        <View style={styles.linha}>
                            <Text style={styles.subtitulo}>Teste de Novobiocina:</Text>

                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton
                                    value="positivo"
                                    status={novobiocina === "positivo" ? "checked" : "unchecked"}
                                    onPress={() => setNovobiocina("positivo")}
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                    value="negativo"
                                    status={novobiocina === "negativo" ? "checked" : "unchecked"}
                                    onPress={() => setNovobiocina("negativo")}
                                />
                            </View>

                            <View style={styles.inputs}>
                                <Text>Lote:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite o lote"
                                    value={novobiocinaLote}
                                    onChangeText={setNovobiocinaLote}
                                />
                                <Text>Validade:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="dd/MM/yyyy"
                                    value={novobiocinaVal}
                                    onChangeText={setNovobiocinaVal}
                                />
                            </View>
                        </View>

                        <View style={styles.linha}>
                            <Text style={styles.subtitulo}>Coloração de Gram:</Text>

                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton
                                    value="positivo"
                                    status={coloracao === "positivo" ? "checked" : "unchecked"}
                                    onPress={() => setColoracao("positivo")}
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                    value="negativo"
                                    status={coloracao === "negativo" ? "checked" : "unchecked"}
                                    onPress={() => setColoracao("negativo")}
                                />
                            </View>

                            <View style={styles.inputs}>
                                <Text>Lote:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite o lote"
                                    value={coloracaoLote}
                                    onChangeText={setColoracaoLote}
                                />
                                <Text>Validade:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="dd/MM/yyyy"
                                    value={coloracaoVal}
                                    onChangeText={setColoracaoVal}
                                />
                            </View>
                        </View>

                        <View style={styles.linha}>
                            <Text style={styles.subtitulo}>Coagulase:</Text>

                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton
                                    value="positivo"
                                    status={coagulase === "positivo" ? "checked" : "unchecked"}
                                    onPress={() => setCoagulase("positivo")}
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                    value="negativo"
                                    status={coagulase === "negativo" ? "checked" : "unchecked"}
                                    onPress={() => setCoagulase("negativo")}
                                />
                            </View>

                            <View style={styles.inputs}>
                                <Text>Lote:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite o lote"
                                    value={coagulaseLote}
                                    onChangeText={setCoagulaseLote}
                                />
                                <Text>Validade:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="dd/MM/yyyy"
                                    value={coagulaseVal}
                                    onChangeText={setCoagulaseVal}
                                />
                            </View>
                        </View>

                        <View style={styles.linha}>
                            <Text style={styles.subtitulo}>Catalase:</Text>

                            <View style={styles.radioGroup}>
                                <Text>Positivo</Text>
                                <RadioButton
                                    value="positivo"
                                    status={catalase === "positivo" ? "checked" : "unchecked"}
                                    onPress={() => setCatalase("positivo")}
                                />
                                <Text>Negativo</Text>
                                <RadioButton
                                    value="negativo"
                                    status={catalase === "negativo" ? "checked" : "unchecked"}
                                    onPress={() => setCatalase("negativo")}
                                />
                            </View>

                            <View style={styles.inputs}>
                                <Text>Lote:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Digite o lote"
                                    value={catalaseLote}
                                    onChangeText={setCatalaseLote}
                                />
                                <Text>Validade:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="dd/MM/yyyy"
                                    value={catalaseVal}
                                    onChangeText={setCatalaseVal}
                                />
                            </View>
                        </View>

                        <BotaoCard color="green" title="Salvar" onPress={handleCadastrar}/>
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
        marginBottom: 20,
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
        borderWidth: 2,


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

    scrol: {
        flex: 1,
        margin: 15,
    }


});