import {StyleSheet, Text, View, SafeAreaView, TextInput, Alert} from 'react-native';
import React, { useState } from "react";

import BotaoCard from '../components/Botao/BotaoCard';
import {cadastrarUsuario} from "../shared/usuario/Api";

export default function CadastroPaciente() {
    const [nomeCompleto, setNomeCompleto] = useState("");
    const [nomedaMae, setNomedaMae] = useState("");
    const [telefoneContato, setTelefoneContato] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");
    
    

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

            <View style={styles.campos} >
                <Text style={styles.descricao}>Nome Completo</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite seu nome completo"
                    value={nomeCompleto}
                    onChangeText={setNomeCompleto}
                />

                <Text style={styles.descricao}>Nome da Mãe:</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite seu nome completo"
                    value={nomedaMae}
                    onChangeText={setNomedaMae}
                />

                <Text style={styles.descricao}>Telefone para Contato:</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Telefone"
                    value={telefoneContato}
                    onChangeText={setTelefoneContato}
                />

                <Text style={styles.descricao}>CPF</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite seu CPF"
                    value={cpf}
                    onChangeText={setCpf}
                />

                <Text style={styles.descricao}>E-mail de Contato</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.descricao}>Data de Nascimento:</Text>
                <TextInput
                    style={styles.campo}
                    placeholder="Data de Nascimento"
                    value={dataNascimento}
                    onChangeText={setDataNascimento}
                />
            </View>
            

                <View>
                    <BotaoCard color="#6fa29e" title='Confirmar' onPress={handleCadastrar}/>
                </View>

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
        alignItems:"center",
        marginBottom:5,
        fontSize: 15,
        fontWeight: "bold",
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
        backgroundColor: "#9acddc",
        borderRadius: 10,
        borderWidth:2,
        width: "90%",
        
    },
    campo:{
        height: 10,
        padding: 15,
        borderWidth: 2,
        borderRadius: 10,
    },

    campos: {
        margin:30,
    },
    
});
