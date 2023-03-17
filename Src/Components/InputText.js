import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, img} from './Config';
import {hp, wp} from './Globalstyle';
import MyText from './Ctext';
import {scale} from 'react-native-size-matters';
import {ScrollView} from 'react-native-gesture-handler';
import {useContext} from 'react';
import {Context} from '../../Shared/Provider';

export default function InputText({
  title,
  placeholder,
  onChangeText,
  security,
  height,
  error,
  value,
  marginTop,
  ...res
}) {
  const [Activesecurity, setActivesecurity] = useState(true);

  return (
    <View>
      <MyText
        title={title}
        style={{
          marginBottom: hp(1),
          fontFamily: 'Poppins-SemiBold',
          color: '#191919',
          fontSize: 13,
        }}
      />

      <TextInput
        value={value}
       
        onChangeText={onChangeText}
        secureTextEntry={security && Activesecurity}
        allowFontScaling={false}
     
        placeholder={placeholder}
        placeholderTextColor={'#00000063'}
        style={{
          textAlignVertical: height && 'top',
          marginBottom: '7%',
          fontSize: scale(12),
          paddingTop: hp(2),
          paddingLeft: '5%',
          borderRadius: 5,
          height: height || hp(8),
          backgroundColor: 'white',
          borderWidth: 0.7,
          borderColor: '#FFE9B7',
          fontFamily: 'Poppins-SemiBold',
          color: '#444444',
        }}
        {...res}
      />
      {security && (
        <TouchableOpacity
          onPress={() => setActivesecurity(!Activesecurity)}
          style={{
            height: hp(10),
            width: hp(10),
            resizeMode: 'contain',
            position: 'absolute',
            right: 0,
            marginTop: hp(3),
            justifyContent: 'center',
          }}>
          <Image
            source={Activesecurity ? img.eye : img.openeye}
            style={{
              height: hp(3),
              width: hp(3),
              resizeMode: 'contain',
              position: 'absolute',
              right: hp(3),
            }}
          />
        </TouchableOpacity>
      )}

      {error && (
        <MyText
          style={{
            color: 'red',
            marginTop: marginTop || -hp(2.5),
            marginBottom: hp(2),
          }}
          title={error}
        />
      )}
    </View>
  );
}

export const ModalPicker = ({
  title,
  placeholder,
  data,
  onChangeText,
  zIndex,
}) => {
  const [ActiveModal, setActiveModal] = useState(false);
  const {Female, setFemale} = useContext(Context);
  console.log(Female.gender, 'FemaleFemaleFemale');
  const Renderlist = ({item, index}) => (
    <TouchableOpacity
      onPress={() => {
        onChangeText(item);
        setActiveModal(!ActiveModal);
      }}
      onLongPress={() => onChangeText(item)}
      key={index}
      style={{
        borderBottomColor: '#FFE9B7',
        justifyContent: 'center',
        paddingLeft: '5%',
        height: hp(7),
        zIndex: 100,
        backgroundColor: 'white',
        borderBottomWidth: data.length - 1 == index ? 0 : 1,
      }}>
      <MyText
        style={{
          fontFamily: 'Poppins-SemiBold',

          color: '#444444',
        }}
        title={item.label}
      />
    </TouchableOpacity>
  );
  return (
    <Pressable
      style={{zIndex: zIndex || 1000, marginBottom: '7%'}}
      onPress={() => setActiveModal(!ActiveModal)}>
      <MyText
        title={title}
        style={{
          marginBottom: hp(1),
          fontFamily: 'Poppins-SemiBold',
          color: '#191919',
          fontSize: 13,
        }}
      />
      <View
        style={{
          paddingLeft: '5%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: hp(8),

          borderRadius: 8,

          borderWidth: 0.7,
          borderColor: '#FFE9B7',
        }}>
        <MyText
          style={{
            fontFamily: 'Poppins-SemiBold',
            fontSize: scale(12),
            
            color: placeholder == '' ? '#444444' : '#444444',
          }}
          title={placeholder}
        />
        <Image
          source={!Female.gender ? img.blue_down : img.pink_down}
          style={{height: '20%', width: '20%', resizeMode: 'contain'}}
        />
      </View>
      {ActiveModal && (
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 10,
            overflow: 'hidden',
            borderWidth: 0.7,
            borderColor: '#FFE9B7',
            zIndex: 1000,
            
            position: 'absolute',
            top: hp(12),
            left: 0,
            right: 0,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 11,
            },
            shadowOpacity: 0.57,
            shadowRadius: 15.19,

            elevation: 23,
          }}>
          <ScrollView style={{minHeight: 100, maxHeight: hp(47)}}>
            <FlatList
              data={data}
              nestedScrollEnabled={true}
              renderItem={Renderlist}
            />
          </ScrollView>
        </View>
      )}
    </Pressable>
  );
};


export const SessionInputText=({
  title,
  placeholder,
  onChangeText,
  security,
  height,
  error,
  value,
  marginTop,
  Title,
  Placeholder,
  ...res
})=> {
  

  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
 
      <View style={{width:wp(37)}}>
      <MyText
        title={title}
        style={{
          marginBottom: hp(1),
          fontFamily: 'Poppins-SemiBold',
          color: '#191919',
          fontSize: 13,
        }}
      />

      <TextInput
        value={value}
        onChangeText={onChangeText}
        
        allowFontScaling={false}
        placeholder={placeholder}
        placeholderTextColor={'#00000063'}
        style={{
          paddingLeft:45,
               textAlignVertical: height && 'top',
             
               fontSize: scale(18),
               
         
               borderRadius: 5,
               
               height: height || hp(8),
               backgroundColor: '#f0f0f5',
             
              
               fontFamily: 'Poppins-Bold',
     
               color: '#444444',
             }}
        {...res}
      />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({});
