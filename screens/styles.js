
import { StyleSheet } from "react-native";

const style = StyleSheet.create(
    {
        container:{
            flex:1,
            alignContent:"center",
            justifyContent:"center"
        },

        bodyText:{
            fontSize:20,
            margin:10

        },
        view: {
            flex:1,
            margin: 5,
            flexDirection:'row',
            padding:10
        },
        title: {
            fontSize: 18,
            margin:10,
            marginRight:100
        },    
        image:{
            height:100,
            width:100
        }
    
    }
);

export {style};