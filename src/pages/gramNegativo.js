import { View, StyleSheet, Text,RadioButton, ScrollView} from "react-native";
import { SafeAreaView } from "react-native-web";

export default function gramNegativo() {
 return (

    <ScrollView>
        <SafeAreaView style={styles.container}>
            <Text style={styles.titulo}>RESULTADO: GRAM-NEGATIVO</Text>
                <View style= {styles.card}>

                    
                        <Text style={styles.titulo}>EPM - Fermentações de Glicose:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>EPM - Produção de Gás:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>EPM - Produção de H2S:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>EPM - Produção de Urease:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>EPM - Produção de L - troptofano desaminase:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>MILI - Motilidade:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>MILI - Lisina Descarboxilase:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>MILI - Produção de INDOL:</Text>
                        <View style={styles.card2}>

                        </View>

                        <Text style={styles.titulo}>Citrato - única fonte de carbono:</Text>
                        <View style={styles.card2}>

                        </View> 

                        <Text style={styles.titulo}>CAMPO ABERTO: BULAS</Text>
                        <View style={styles.card2}>

                        </View> 

                        <Text style={styles.titulo}>ANTIBIOGRAMA:</Text>
                        <View style={styles.card2}>

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
        padding: 50,
        backgroundColor: "#9acddc",
        borderRadius: 15,
        width: '85%',
        borderRadius: 10,
        borderWidth:2,
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
     padding: 50,
        backgroundColor: "#ffffffff",
        borderRadius: 15,
        borderRadius: 10,
        borderWidth:2,
}

})