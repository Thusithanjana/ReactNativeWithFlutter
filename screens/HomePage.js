import React from "react";
import { View, Text, Button } from "react-native";
import { style } from "./styles";

export default function HomePage({ navigation }) {

    return (
        <View style={style.container}>

            <Text style = {style.bodyText}>Home Page</Text>
            <Button
                title="Go to Display"
                onPress={() => {
                    navigation.navigate('Display')
                }}

            />

        </View>
    )
}