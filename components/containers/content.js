import React from "react";
import { View, Text, StyleSheet, Image, Button } from "react-native";

export default function Content() {
    const imageMe = require("../../assets/images/image-backgroud.jpg")
    const iconReact = require("../../assets/icons/icont-react.png")
    const iconVue = require("../../assets/icons/icont-vue.png")
    const iconAngular = require("../../assets/icons/icont-angular.png")
    const iconNodeJs = require("../../assets/icons/icont-Node-js.png")
    const iconHtmlCssJs = require("../../assets/icons/icont-html-css-and-js.png")


    return (
        <View style={styles.containerBody}>
            <Image source={imageMe} style={styles.imageMe} />
            <View style={styles.containerContent}>
                <Text style={styles.text}>
                    Para memorizar esses números, você pode repeti-los em voz alta várias vezes.
                    Tente contar de 1 a 20 em inglês várias vezes ao longo do dia. Você também pode escrever os números repetidamente em um caderno para ajudar a fixá-los na memória.
                    Depois de dominar os números de 1 a 20, você pode continuar praticando contando em incrementos maiores, como de 10 em 10
                    Quanto mais você praticar, mais familiarizado ficará com os números em inglês.
                </Text>

                <View style={styles.containerIcones}>
                    <Image source={iconReact} style={styles.iconesStyles} />
                    <Image source={iconVue} style={styles.iconesStyles} />
                    <Image source={iconAngular} style={styles.iconesStyles} />
                    <Image source={iconNodeJs} style={styles.iconesStyles} />
                    <Image source={iconHtmlCssJs} style={{ width: '200px' }} />
                </View>

                <Button title="SABER MAIS" style={styles.buttonContato}> </Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    containerBody: {
        display: 'flex'
    },

    imageMe: {
        width: 200,
        height: 200,
        borderRadius: 1000,
        cursor: 'pointer',
        boxShadow: '4px 4px 10px white',
        margin: 40,
        margin: 'auto'
    },

    containerContent: {
        width: 600,
    },

    text: {
        margin: 50,
        color: 'white'
    },

    buttonContato: {
        width: 20,
        margin: 10
    },

    iconesStyles: {
        width: 100,
        height: 100
    },

    containerIcones: {
        width: '100%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10,
        cursor: 'pointer'
    }
});