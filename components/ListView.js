import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { style } from '../screens/styles';

export default function ListComponent(props) {
    return <View style={style.view}>
        <Image
            style={style.image}
            source={{
                uri: props.data.url
            }}

        />
        <Text style={style.title}>{props.data.title}</Text>


    </View>
}

