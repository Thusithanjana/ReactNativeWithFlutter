import React, { useState, useEffect } from "react";
import { View, Text, Button,  ScrollView } from "react-native";
import ListComponent from "../components/ListView";
import { style } from "./styles";

export default function DisplayScreen({ navigation }) {

    const [result, setResult] = useState(null)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(data => setResult(data))
        .catch(error => alert(error))
    })

    return (
        <View style={style.container}>
            <Text style={style.bodyText}>Display Page</Text>
            <ScrollView>
                {
                    result ?(
                        result.slice(0,5).map((item,index)=>{
                            (<ListComponent key={index} data={item}/>)
                        })
                    ):(
                        <Text>Loading Data ...</Text>
                    )
                }
            </ScrollView>
            <Button
                title="Go to Home"
                onPress={() => {
                    navigation.navigate('Home')
                }}

            />

        </View>
    )
}