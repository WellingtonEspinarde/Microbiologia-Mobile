import { View, StyleSheet, Text, TextInput, Alert } from "react-native"
import React, { useState } from "react";
import BotaoCard from '../components/Botao/BotaoCard';
import {cadastrarExame} from "../shared/exame/Api";

export default function cadastroExame() {
    const [idPaciente, setIdPaciente] = useState("");
    const [tipoExame, setTipoExame] = useState("");
    const [descricao, setDescricao] = useState("");
    const [dataExame, setDataExame] = useState("");
    const [horaExame, setHoraExame] = useState("");

    const handleCadastrar = async () => {
        try {
            await cadastrarExame({
                idPaciente: Number(idPaciente),
                tipoExame,
                descricao,
                dataExame,
                horaExame
            });

            Alert.alert("Sucesso", "Exame cadastrado com sucesso!");
        } catch (err) {
            Alert.alert("Erro", "Falha ao cadastrar exame");
        }
    };

    return (
        <View style={style.container}>
            <Text style={style.titulo}>Cadastro do Exame</Text>

            <View style={style.card}>
                <Text style={style.text}>ID Paciente:</Text>
                <TextInput
                    style={style.barra}
                    value={idPaciente}
                    onChangeText={setIdPaciente}
                    keyboardType="numeric"
                />

                <Text style={style.text}>Tipo de Exame:</Text>
                <TextInput
                    style={style.barra}
                    value={tipoExame}
                    onChangeText={setTipoExame}
                />

                <Text style={style.text}>Descrição do Exame:</Text>
                <TextInput
                    style={style.barra}
                    value={descricao}
                    onChangeText={setDescricao}
                />

                <Text style={style.text}>Data do Exame (dd/MM/yyyy):</Text>
                <TextInput
                    style={style.barra}
                    value={dataExame}
                    onChangeText={setDataExame}
                    placeholder="dd/MM/yyyy"
                />

                <Text style={style.text}>Hora do Exame (HH:mm):</Text>
                <TextInput
                    style={style.barra}
                    value={horaExame}
                    onChangeText={setHoraExame}
                    placeholder="HH:mm"
                />

                <BotaoCard title="Cadastrar" color="green" onPress={handleCadastrar} />
            </View>
        </View>

    )
}

const style = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#B1EEBE'
    },
    card: {
        padding: 30,
        backgroundColor: "#9acddc",
        borderRadius: 15,
        width: "90%",
        borderRadius: 10,
        borderWidth:2,

    },
    titulo: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#333",
        margin: 15
    },
    barra: {
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        height: 40,
        textAlign: "center",
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 20,
        padding: 2
    },
})




