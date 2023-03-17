
import { View} from 'react-native';
import React, { useContext } from 'react';
import { Context } from '../../../Shared/Provider';
import WebView from 'react-native-webview';
import Header from '../../Components/Header';
export default function TableContent({navigation}) {
  const {Female,id} =useContext( Context )

  const Content = `https://www.kegelklock.com/#/readmorePage/${id}?selectedGender=`+Female.type

  return (
    <View 
    style={{height:'100%',width:'100%'}}
    >
        <View style={{padding:10,marginBottom:10 }}>
            <Header left onBackPress={() => navigation.goBack()} />
          </View>
     <WebView 
     source={{ uri: Content }}
     onLoad={console.log('loading================')}
     />
    </View>
  )}

