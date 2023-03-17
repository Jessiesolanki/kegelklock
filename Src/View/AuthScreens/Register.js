
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, } from 'react-native';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { img, Colors, navigate } from '../../Components/Config';
import { hp, wp } from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import InputText from '../../Components/InputText';
import Buttons from '../../Components/Buttons';
import { Context } from '../../../Shared/Provider';
import { Formik } from 'formik';
import { ModalPicker } from '../../Components/InputText';
import * as yup from 'yup';

export default function Register({ navigation }) {

  const [ages, setAge] = useState([{ label: 'Select Age', value: 'Select Age' }]);

  let Agelist = [{ label: 'Select Age', value: 'Select Age' }];

  useEffect(() => {
    [...new Array(136)].map((_, s) => {

      Agelist.push({ label: 15 + s, value: 25 + s });
    });
    setAge(Agelist);

  }, []);
  const { API, setuser_id } = useContext(Context);

  const validref = useRef();
  const RegisterValidationSchema = yup.object().shape({
    first_name: yup.string().required('Enter First name'),
    last_name: yup.string().required('Enter Last Name'),
    age: yup.string().required('Enter age '),
    email: yup.string().email('Email is required').required('Enter Email'),
    phone_number: yup
      .string()
      .required('Enter Phone Number'),
     
    password: yup
    .string() .required('Please Enter your password')
    .min(8, 'Password must contain 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
   

    confirm_password: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Password did not match')
       .required('Confirm Password must be same as password'),
  });

  const [Ageplaceholder, setAgeplaceholder] = useState('');
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{ height: wp(40), width: wp(100), resizeMode: 'cover' }}
          source={img.logo}></Image>
        <View style={{ paddingHorizontal: wp(6) }}>
          <Formik
            validationSchema={RegisterValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            innerRef={validref}
            initialValues={{
              first_name: '',
              last_name: '',
              email: '',
              phone_number: '',
              password: '',
              confirm_password: '',
              age: ''
            }}
            onSubmit={data => {
              API.Register(e => {
                // AsyncStorage.setItem('userId', e)
                console.log(e.data,'pp--pp--')
                setuser_id(e.data)
                navigate('Gender', e);
              }, data,{
                  login_type: 'desktop',
                offset: "moment().utcOffset()",
              });
            }}>
            {({ handleChange, handleSubmit, values, errors, touched, handleBlur }) => (
              <View>
                <View
                  style={{
                    marginBottom: hp(2), paddingTop: hp(2)
                  }}>
                  <MyText
                    style={{ fontSize: scale(40) }}
                    black
                    poppinsemibold
                    title={'Signup'}
                  />


                </View>

                <InputText
                  maxLength={15}
                  touched={touched.first_name}
                  error={errors.first_name}
                  onBlur={handleBlur('first_name')}
                  onChangeText={handleChange('first_name')}
                  title={'First Name'}
                  placeholder={'Enter First Name'}
                />

                <InputText
                  maxLength={15}
                  touched={touched.last_name}
                  error={errors.last_name}
                  onBlur={handleBlur('last_name')}
                  onChangeText={handleChange('last_name')}
                  title={'Last Name'}
                  placeholder={'Enter Last Name'}
                />

                <ModalPicker
                  onChangeText={e => {
                    console.log(e, 'here is the values');
                    setAgeplaceholder(e.label);
                    handleChange('age')(JSON.stringify(e.label));
                  }}
                 
                  zIndex={900}
                  data={ages}
                  modelplaceholder={'Select Age'}
                  title={'Age'}
                  placeholder={
                    Ageplaceholder == '' ? 'Select Age' : Ageplaceholder
                  }
                />
                {errors.age && <Text
                  style={{ color: 'red', marginTop: -wp(5), marginBottom: wp(4) }}
                >Enter your Age</Text>}

                <InputText
                  error={errors.email}
                  touched={touched.email}
                  onBlur={handleBlur('email')}
                  onChangeText={handleChange('email')}
                  title={'Email'}
                  placeholder={'Enter Email ID'}
                  autoCapitalize='none'
                />

                <InputText
                  keyboardType="numeric"
                  maxLength={10}
                  touched={touched.phone_number}
                  error={errors.phone_number}
                  onBlur={handleBlur('phone_number')}
                  onChangeText={handleChange('phone_number')}
                  title={'Phone Number'}
                  placeholder={'Enter phone Number'}
                />

                <InputText
                  maxLength={8}
                  touched={touched.password}
                  value={values.password}
                 error={errors.password}
                  onBlur={handleBlur('password')}
                  onChangeText={(e) => {
                 
                    handleChange('password')(e)


                  }}
                  title={'Password'}
                  placeholder={'* * * * * * * *'}
                  security
                />

                <InputText
                  maxLength={12}
                  touched={touched.password}
                  error={errors.confirm_password}
                  value={values.confirm_password}
                  onBlur={handleBlur('confirm_password')}
                  onChangeText={handleChange('confirm_password')}
                  title={'Confirm Password'}
                  placeholder={'* * * * * * * *'}
                  security
                />


                <View>
                  <Buttons
                    style={{ backgroundColor: Colors.Theme }}
                    onPress={handleSubmit}
                    title={'Register'}
                  />
                </View>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Login')}
                  style={{
                    flexDirection: 'row',
                    alignSelf: 'center',
                    marginTop: hp(3),
                    marginBottom: hp(4),
                  }}>
                  <MyText
                    style={{ fontSize: scale(10) }}
                    msemibold
                    black
                    title={'Already Have An Account? '}
                  />
                  <MyText
                    style={{ fontSize: scale(10), color: 'blue' }}
                    mbold
                    black
                    title={'Sign in Here'}
                  />
                </TouchableOpacity>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});


