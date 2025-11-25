import {View, StyleSheet, Text, TextInput} from "react-native";
import React, {useState} from "react";

import BotaoCard from '../components/Botao/BotaoCard';
import {atualizarPaciente, buscarPacientePorId, deletarPacientePorId} from "../shared/usuario/Api";


export default function buscarPorId() {

    const [id, setId] = useState("");
    const [paciente, setPaciente] = useState(null);

    const [editNome, setEditNome] = useState("");
    const [editCpf, setEditCpf] = useState("");
    const [editEmail, setEditEmail] = useState("");
    const [editAnoLetivo, setEditAnoLetivo] = useState("");

    const [alterado, setAlterado] = useState(false);

    function marcarAlterado() {
        setAlterado(true);
    }

    async function buscar() {
        if (!id) {
            alert("Digite um ID");
            return;
        }

        try {
            const response = await buscarPacientePorId(id);
            setPaciente(response.data);
            setEditNome(response.data.nome);
            setEditCpf(response.data.cpf);
            setEditEmail(response.data.email);
            setEditAnoLetivo(String(response.data.anoLetivo));
            setAlterado(false);
        } catch (e) {
            alert("Paciente não encontrado");
            setPaciente(null);
        }
    }

    async function salvar() {
        try {
            await atualizarPaciente(id, {
                nomeCompleto: editNome,
                cpf: editCpf,
                email: editEmail,
                anoLetivo: editAnoLetivo
            });

            alert("Paciente atualizado com sucesso!");
            setAlterado(false);

        } catch (e) {
            alert("Erro ao salvar alterações");
        }
    }

    async function deletar() {
        const confirmar = confirm("Tem certeza que quer deletar este paciente?");
        if (!confirmar) return;

        try {
            await deletarPacientePorId(id);
            alert("Paciente deletado com sucesso!");
            setPaciente(null);
            setId("");
        } catch (e) {
            alert("Erro ao deletar paciente");
        }
    }

    return (
        <View style={style.container}>
            <Text style={style.txt}>Status do Paciente</Text>

            <View style={style.card}>
                <Text style={style.txt}>ID do Paciente:</Text>
                <TextInput style={style.barra} value={id} onChangeText={setId} keyboardType="numeric"/>

                <BotaoCard color="green" title="Buscar" onPress={buscar}/>
            </View>

            {paciente && (
                <View style={style.result}>

                    <Text style={style.txt}>Nome:</Text>
                    <TextInput
                        style={style.barra}
                        value={editNome}
                        onChangeText={(t) => {
                            setEditNome(t);
                            marcarAlterado();
                        }}
                    />

                    <Text style={style.txt}>CPF:</Text>
                    <TextInput
                        style={style.barra}
                        value={editCpf}
                        onChangeText={(t) => {
                            setEditCpf(t);
                            marcarAlterado();
                        }}
                    />

                    <Text style={style.txt}>Email:</Text>
                    <TextInput
                        style={style.barra}
                        value={editEmail}
                        onChangeText={(t) => {
                            setEditEmail(t);
                            marcarAlterado();
                        }}
                    />

                    <Text style={style.txt}>Ano Letivo:</Text>
                    <TextInput
                        style={style.barra}
                        value={editAnoLetivo}
                        onChangeText={(t) => {
                            setEditAnoLetivo(t);
                            marcarAlterado();
                        }}
                        keyboardType="numeric"
                    />

                    {alterado && (
                        <BotaoCard
                            color="blue"
                            title="Salvar Alterações"
                            onPress={salvar}
                        />
                    )}

                    <BotaoCard
                        color="red"
                        title="Deletar Paciente"
                        onPress={deletar}
                    />
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
        borderWidth: 2,
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