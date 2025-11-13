import {View, StyleSheet, Text, TextInput, Alert} from "react-native";
import React, { useState } from "react";

import BotaoCard from '../components/Botao/BotaoCard';
import {buscarPacientePorId} from "../shared/usuario/Api";


export default function buscarPorId() {

    const [id, setId] = useState("");
    const [paciente, setPaciente] = useState(null);

    async function buscar() {
        if (!id) return Alert.alert("Digite um ID");

        try {
            const response = await buscarPacientePorId(id);
            setPaciente(response.data);
        } catch (e) {
            Alert.alert("Paciente não encontrado");
            setPaciente(null);
        }
    }

    return(
        <View style={style.container}>
            <Text style={style.txt}>Status do Paciente</Text>

            <View style = {style.card}>
                <Text style={style.txt}>ID do Paciente:</Text>
                <TextInput style = {style.barra} value={id} onChangeText={setId} keyboardType="numeric" />

                <BotaoCard color="green" title="Buscar" onPress={buscar}/>
            </View>

            {paciente && (
                <View style={style.result}>
                    <Text style={style.txt}>Nome: {paciente.nome}</Text>
                    <Text style={style.txt}>CPF: {paciente.cpf}</Text>
                    <Text style={style.txt}>Email: {paciente.email}</Text>
                    <Text style={style.txt}>Ano Letivo: {paciente.anoLetivo}</Text>
                </View>
            )}
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#B1EEBE'
    },
    card: {
        padding: 50,
        backgroundColor: "#9acddc",
        borderRadius: 15,
        width: '85%',
        borderRadius: 10,
        borderWidth:2,
    },
    txt: {
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 20,
        padding: 2
    },
    barra: {
        borderWidth: 2,
        borderRadius: 20,
        backgroundColor: 'white',
        height: 40,
        textAlign: "center",
    },
    result: {
        marginTop: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }
})