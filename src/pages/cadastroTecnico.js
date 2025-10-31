import {View, StyleSheet, Text, TextInput, Alert} from "react-native"
import React, { useState } from "react";

import BotaoCard from '../components/Botao/BotaoCard';
import {cadastrarUsuario} from "../shared/usuario/Api";

export default function cadastroTecnico() {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [anoLetivo, setAnoLetivo] = useState("");

    const handleCadastrar = async () => {
        try {
            await cadastrarUsuario({
                nomeCompleto,
                cpf,
                email,
                senha,
                nivel: 'TECNICO',
                anoLetivo: Number(anoLetivo)
            });
            Alert.alert("Sucesso", "Técnico cadastrado!");
        } catch (err) {
            Alert.alert("Erro", "Falha ao cadastrar técnico");
        }
    };

    return (
        <View style={style.container}>
            <Text style={style.TitleTec}>Cadastro do Técnico</Text>

            <View style={style.card}>
                <Text style={style.Txt}>Nome:</Text>
                <TextInput style={style.barra} value={nomeCompleto} onChangeText={setNomeCompleto}/>

                <Text style={style.Txt}>CPF:</Text>
                <TextInput style={style.barra} value={cpf} onChangeText={setCpf}/>

                <Text style={style.Txt}>E-mail:</Text>
                <TextInput style={style.barra} value={email} onChangeText={setEmail}/>

                <Text style={style.Txt}>Senha:</Text>
                <TextInput style={style.barra} secureTextEntry={true} value={senha} onChangeText={setSenha}/>

                <Text style={style.Txt}>Ano Letivo:</Text>
                <TextInput style={style.barra} keyboardType="numeric" value={anoLetivo} onChangeText={setAnoLetivo}/>

                <BotaoCard title="Cadastrar" color="green" onPress={handleCadastrar}/>
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
        width: "90%"
    },
    TitleTec: {
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
    Txt: {
        fontSize: 20,
        textAlign: 'center',
        marginLeft: 20,
        padding: 2
    },
})




