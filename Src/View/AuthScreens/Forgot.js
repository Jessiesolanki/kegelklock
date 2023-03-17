import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal
} from 'react-native';
import React, { useState, useRef ,useContext} from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import InputText from '../../Components/InputText';
import Buttons from '../../Components/Buttons';
import { navigate, Setroot,img ,Colors} from '../../Components/Config';
import { Context } from '../../../Shared/Provider';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function Forgot() {
  const [Active, setActive] = useState(false);
  const { API } = useContext(Context);

  const validref = useRef();
  const ForgotValidationSchema = yup.object().shape({
    email: yup.string().email('Email is required').required('Enter Email'),
  });


  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Modal
        statusBarTranslucent
        hardwareAccelerated
        animationType="slide"
        transparent={true}
        visible={Active}
        onRequestClose={() => setActive(false)}>
        <View  style={{
            flex: 1,
            backgroundColor: '#00000080',
            alignItems: 'center',
            
            justifyContent:'center'
          }}>
          <View
            style={{
              padding:hp(3),
              width: wp(80),
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 25,
            }}>
            <Image
              style={{ height: wp(17.5), width: wp(19), marginTop: -hp(5.5) }}
              source={img.warning}></Image>
            <View
              style={{
                marginBottom: wp(6),
                alignItems: 'center',
                marginTop: wp(6),
              }}>
              <MyText
                style={{ fontSize: scale(19) }}
             bold
                title={'Message'}
              />
        
            </View>

            <View style={{ alignItems: 'center',  }}>
          


              <Text
                style={{
                  fontSize: scale(12) ,
                  color: 'black',
                  
                }}>
         To the registered email, we have 
              </Text>
              <Text
                style={{
                  fontSize: scale(12) ,
                  color: 'black',

                }}>
             sent a reset link.
              </Text>
            </View>
            <TouchableOpacity
                  onPress={ () => {
                    
                    Setroot('Login');
                  }}
                  style={{
                    backgroundColor:'#FFBB34',
                    height: wp(10),
                    width: wp(30),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    marginTop:hp(4)
                  }}>
                  <Text
                    style={{
                      fontSize: 15,
                      color: '#fff',
                      
                    }}>
                   OK
                  </Text>
                </TouchableOpacity>
          </View>
        </View>
        
      </Modal>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{ height: wp(40), width: wp(100), resizeMode: 'cover' }}
          source={img.logo}></Image>
        <View style={{ paddingHorizontal: wp(6) }}>
          <Formik
            validationSchema={ForgotValidationSchema}
            innerRef={validref}
            initialValues={{
              email: '',
            }}
            onSubmit={data => {
              API.Forgot(e => {
                navigate(setActive(true), e);
                setActive(true);
              }, data);
            }}>
            {({ handleChange, handleSubmit, errors }) => (
              <>
                <View
                  style={{
                    marginBottom: hp(4),
                    alignItems: 'center',
                    paddingTop: hp(4),
                  }}>
                  <MyText
                    style={{ fontSize: scale(33) }}
                    black
                    poppinsbold
                    title={'Forgot Password'}
                  />

                  <Image
                    style={{
                      height: hp(2),
                      width: wp(40),
                      resizeMode: 'contain',
                    }}
                    source={img.brush}>
                  </Image>
                </View>

                <InputText
                  error={errors.email}
                  onChangeText={handleChange('email')}
                  title={'Email'}
                  placeholder={'Enter Email ID'}
                />

                <View style={{ marginTop: hp(1) }}>
                  <Buttons
                    style={{ backgroundColor: Colors.Theme }}
                    onPress={handleSubmit}
                  
                    title={'Continue'}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
