import {View, StyleSheet, Text, ScrollView, TextInput} from "react-native";
import {RadioButton} from 'react-native-paper';
import {SafeAreaView} from "react-native-web";
import {useState} from "react";
import {cadastrarExame} from "../shared/exame/Api";
import BotaoCard from "../components/Botao/BotaoCard";

export default function gramNegativo({route, navigation}) {

    const { meioCultura, tipoAmostra, gram, pacienteId } = route.params;

    const [epmGlicose, setEpmGlicose] = useState(null);
    const [epmGlicoseLote, setEpmGlicoseLote] = useState("");
    const [epmGlicoseVal, setEpmGlicoseVal] = useState("");

    const [epmGas, setEpmGas] = useState(null);
    const [epmGasLote, setEpmGasLote] = useState("");
    const [epmGasVal, setEpmGasVal] = useState("");

    const [epmH2S, setEpmH2S] = useState(null);
    const [epmH2SLote, setEpmH2SLote] = useState("");
    const [epmH2SVal, setEpmH2SVal] = useState("");

    const [epmUrease, setEpmUrease] = useState(null);
    const [epmUreaseLote, setEpmUreaseLote] = useState("");
    const [epmUreaseVal, setEpmUreaseVal] = useState("");

    const [epmTryptoDes, setEpmTryptoDes] = useState(null);
    const [epmTryptoDesLote, setEpmTryptoDesLote] = useState("");
    const [epmTryptoDesVal, setEpmTryptoDesVal] = useState("");

    const [miliMotilidade, setMiliMotilidade] = useState(null);
    const [miliMotilidadeLote, setMiliMotilidadeLote] = useState("");
    const [miliMotilidadeVal, setMiliMotilidadeVal] = useState("");

    const [miliLisina, setMiliLisina] = useState(null);
    const [miliLisinaLote, setMiliLisinaLote] = useState("");
    const [miliLisinaVal, setMiliLisinaVal] = useState("");

    const [miliIndol, setMiliIndol] = useState(null);
    const [miliIndolLote, setMiliIndolLote] = useState("");
    const [miliIndolVal, setMiliIndolVal] = useState("");

    const [citrato, setCitrato] = useState(null);
    const [citratoLote, setCitratoLote] = useState("");
    const [citratoVal, setCitratoVal] = useState("");

    const [bulas, setBulas] = useState("");
    const [identificacao, setIdentificacao] = useState("");

    const handleCadastrar = async () => {
        const dados = {
            meioCultura,
            tipoAmostra,
            gram,
            pacienteId,

            testes: [
                {
                    nomeTeste: "epmGlicose",
                    resultado: epmGlicose,
                    lote: epmGlicoseLote,
                    validade: epmGlicoseVal
                },
                {
                    nomeTeste: "epmGas",
                    resultado: epmGas,
                    lote: epmGasLote,
                    validade: epmGasVal
                },
                {
                    nomeTeste: "epmH2S",
                    resultado: epmH2S,
                    lote: epmH2SLote,
                    validade: epmH2SVal
                },
                {
                    nomeTeste: "epmUrease",
                    resultado: epmUrease,
                    lote: epmUreaseLote,
                    validade: epmUreaseVal
                },
                {
                    nomeTeste: "epmTryptoDes",
                    resultado: epmTryptoDes,
                    lote: epmTryptoDesLote,
                    validade: epmTryptoDesVal
                },
                {
                    nomeTeste: "miliMotilidade",
                    resultado: miliMotilidade,
                    lote: miliMotilidadeLote,
                    validade: miliMotilidadeVal
                },
                {
                    nomeTeste: "miliLisina",
                    resultado: miliLisina,
                    lote: miliLisinaLote,
                    validade: miliLisinaVal
                },
                {
                    nomeTeste: "miliIndol",
                    resultado: miliIndol,
                    lote: miliIndolLote,
                    validade: miliIndolVal
                },
                {
                    nomeTeste: "citrato",
                    resultado: citrato,
                    lote: citratoLote,
                    validade: citratoVal
                },
            ],
            bulas,
            identificacao
        };

        try {
            await cadastrarExame(dados);
            alert("Exame cadastrado! Voltando ao início...");

            setTimeout(() => {
                navigation.goBack();
            }, 3000);
        } catch (err) {
            alert("Erro! Não foi possível cadastrar o exame");
        }
    };

    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={styles.titulo}>RESULTADO: GRAM-NEGATIVO</Text>
                <View style={styles.card}>

                    <Text style={styles.titulo}>EPM - Fermentações de Glicose:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={epmGlicose === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setEpmGlicose("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={epmGlicose === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setEpmGlicose("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={epmGlicoseLote}
                                onChangeText={setEpmGlicoseLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={epmGlicoseVal}
                                onChangeText={setEpmGlicoseVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>EPM - Produção de Gás:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={epmGas === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setEpmGas("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={epmGas === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setEpmGas("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={epmGasLote}
                                onChangeText={setEpmGasLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={epmGasVal}
                                onChangeText={setEpmGasVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>EPM - Produção de H2S:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={epmH2S === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setEpmH2S("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={epmH2S === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setEpmH2S("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={epmH2SLote}
                                onChangeText={setEpmH2SLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={epmH2SVal}
                                onChangeText={setEpmH2SVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>EPM - Produção de Urease:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={epmUrease === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setEpmUrease("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={epmUrease === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setEpmUrease("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={epmUreaseLote}
                                onChangeText={setEpmUreaseLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={epmUreaseVal}
                                onChangeText={setEpmUreaseVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>EPM - Produção de L - triptofano desaminase:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={epmTryptoDes === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setEpmTryptoDes("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={epmTryptoDes === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setEpmTryptoDes("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={epmTryptoDesLote}
                                onChangeText={setEpmTryptoDesLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={epmTryptoDesVal}
                                onChangeText={setEpmTryptoDesVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>MILI - Motilidade:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={miliMotilidade === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setMiliMotilidade("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={miliMotilidade === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setMiliMotilidade("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={miliMotilidadeLote}
                                onChangeText={setMiliMotilidadeLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={miliMotilidadeVal}
                                onChangeText={setMiliMotilidadeVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>MILI - Lisina Descarboxilase:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={miliLisina === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setMiliLisina("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={miliLisina === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setMiliLisina("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={miliLisinaLote}
                                onChangeText={setMiliLisinaLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={miliLisinaVal}
                                onChangeText={setMiliLisinaVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>MILI - Produção de INDOL:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={miliIndol === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setMiliIndol("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={miliIndol === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setMiliIndol("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={miliIndolLote}
                                onChangeText={setMiliIndolLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={miliIndolVal}
                                onChangeText={setMiliIndolVal}
                            />
                        </View>
                    </View>

                    <Text style={styles.titulo}>Citrato - única fonte de carbono:</Text>
                    <View style={styles.card2}>
                        <View style={styles.radioGroup}>
                            <Text>Positivo</Text>
                            <RadioButton
                                value="positivo"
                                status={citrato === "positivo" ? "checked" : "unchecked"}
                                onPress={() => setCitrato("positivo")}
                            />
                            <Text>Negativo</Text>
                            <RadioButton
                                value="negativo"
                                status={citrato === "negativo" ? "checked" : "unchecked"}
                                onPress={() => setCitrato("negativo")}
                            />
                        </View>

                        <View style={styles.inputs}>
                            <Text>Lote:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Digite o lote"
                                value={citratoLote}
                                onChangeText={setCitratoLote}
                            />
                            <Text>Validade:</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="dd/MM/yyyy"
                                value={citratoVal}
                                onChangeText={setCitratoVal}
                            />
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
                                value={bulas}
                                onChangeText={setBulas}
                            />
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
                                value={identificacao}
                                onChangeText={setIdentificacao}
                            />
                        </View>
                    </View>

                    <BotaoCard color="green" title="Salvar" onPress={handleCadastrar}/>
                </View>
                <View/>
            </SafeAreaView>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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