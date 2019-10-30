import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './app/components/Header';
import Subtitle from './app/components/Subtitle';
import Input from './app/components/Input';
import Listitem from './app/components/Listitem';

export default function App() {
  return (
    <View style={styles.container} img src="http://mblogthumb3.phinf.naver.net/20160402_190/komakma0_14596059573571yuge_JPEG/2.jpg?type=w800">
          <View style={styles.headercenter}>
     <Header/>
          </View>
           <View>
     <Subtitle title="To do list"/>
     <Input/>
          </View>
           <View>
     <Subtitle title="To do check"/>
     <listitem name="밥먹기"/>
     <listitem name="잠자기"/>
          </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#fff',

  },
    headercenter :{
      alignItems : "center",
    },
    subtitleposition :{
        marginLeft: 30,
    },
});
