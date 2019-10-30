import React from 'react';
import {TextInput, StyleSheet } from 'react-native';

export default function Subtitle() {
  return (
      <TextInput
          style={styles.input}
          placeholder={"할일을 입력해주세요"}
          maxlength={30}
          returnKeyType="done"/>
  );
}


const styles = StyleSheet.create({
  input : {
      fontSize: 15,
      fontWeight: 'bold',
      marginTop : 13,
      
        
      
  },
    },
});

