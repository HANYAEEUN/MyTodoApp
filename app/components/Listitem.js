import React from 'react';
import {Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import {AntDesign} from "@expo/vector.icons";


export default function Listitem({name}) {
  return (
    <View style={styles.listitembox}>
          <view style={styles.makerow}>
      <TouchableOpacity>
          <AntDesign name="checkcircle" size={20} style={styles.checkmargin}/>
          </TouchableOpacity>
      <Text style={styles.item}>{name}</Text>
          </view>
          
          <TouchableOpacity>
          <AntDesign name="close" size={20}/>
          </TouchableOpacity>
    </View>
  );
}


const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  listitembox:{
      borderBottomWidth:1,
      padding:5,
      marginTop:10,
      width : width-40,
      flexDirection : "row",
      alignItems : "center",
      justifyContent : "space-between",
       
  },
    item : {
        fontSize: 20,
        fontWeight: 'bold',
    },
    makerow: {
        flexDirection : "row",
    },
    checkmargin:{
        marginRight : 10,
    },
    
    },
});