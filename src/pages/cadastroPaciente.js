import {StyleSheet, Text, View, SafeAreaView, TextInput, Alert} from 'react-native';
import React, { useState } from "react";

import BotaoCard from '../components/Botao/BotaoCard';
import {cadastrarUsuario} from "../shared/usuario/Api";

export default function CadastroPaciente() {
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
                nivel: 'PACIENTE',
                anoLetivo: Number(anoLetivo)
            });

            Alert.alert("Sucesso", "Paciente cadastrado!");
        } catch (err) {
            Alert.alert("Erro", "Falha ao cadastrar paciente");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titulo}>Cadastro Paciente</Text>
            </View>

            <View style={styles.formulario}>

                <Text style={styles.descricao}>Nome Completo</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite seu nome completo"
                    value={nomeCompleto}
                    onChangeText={setNomeCompleto}
                />

                <Text style={styles.descricao}>CPF</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChangeText={setCpf}
                />

                <Text style={styles.descricao}>E-mail</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.descricao}>Senha</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite sua senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                />

                <Text style={styles.descricao}>Ano Letivo</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Ano Letivo"
                    keyboardType="numeric"
                    value={anoLetivo}
                    onChangeText={setAnoLetivo}
                />
            </View>

            <View>
                <BotaoCard color="#6fa29e" title='Confirmar' onPress={handleCadastrar}/>
            </View>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#B1EEBE",
    },
    descricao: {
        alignItems: "center",
        marginBottom: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 50
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        margin: 20
    },
    formulario: {
        backgroundColor: "#B1EEBE",
        borderRadius: 10,
        marginTop: 30,
    },
    campo: {
        height: 10,
        padding: 15,
        borderWidth: 2,
        borderRadius: 10,
    },
});
