import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';

import React, {useState, useEffect,useContext} from 'react';
import {hp, wp} from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import {scale} from 'react-native-size-matters';
import InputText from '../../Components/InputText';
import Buttons from '../../Components/Buttons';
import {navigate, Setroot,Colors,img} from '../../Components/Config';
import {Context} from '../../../Shared/Provider';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Formik} from 'formik';
import * as yup from 'yup';


const CheckButton = ({value, checkvalue}) => {
  const [Active, setActive] = useState(checkvalue || false);
  
  return (
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity
        onPress={() => {
          setActive(!Active);
          value(!Active);
        }}
        style={{
          width: hp(3),
          height: hp(3),
          borderWidth: 0.7,
          borderColor: '#FFE9B7',
          borderRadius: 2,
          marginBottom: hp(3),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {Active && (
          <Image
            source={img.right}
            style={{height: '70%', width: '70%', resizeMode: 'contain'}}
          />
        )}
      </TouchableOpacity>
      <View style={{marginLeft: wp(3)}}>
        <MyText
          style={{
            fontFamily: 'Poppins-SemiBold',
            color: '#191919',
            fontSize: 12,
          }}
          black
          title={'Remember Me'}
        />
      </View>
    </View>
  );
};

export default function Login({navigation}) {
  const {
    API,
    setFormiinital,
   registerData, setregisterData,
    setDetail,
    setFemale,
    Logininitialvalue, 
    setLogininitialvalue
  } = useContext(Context);

  const [Remember, setRemember] = useState(false);
  const [token, settoken] = useState('')
  const [test, settest] = useState(false)

  const LoginValidationSchema = yup.object().shape({
    email: yup.string().email('Email is required').required('Enter Email'),
    password: yup.string().required('Enter Password'),
  });
  useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization",token);
    
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    fetch("https://kegelklock.com/api/userDetail", requestOptions)
      .then(response => response.text())
      .then(result=> JSON.parse(result))
      .then(result =>{setregisterData(result.data)})
      .catch(error => console.log('error', error));
   
  }, [test])
  
  const Getcredetial = async () => {
    const data = await AsyncStorage.getItem('data');
    let a = JSON.parse(data);

    if (data != null) {
    
      setFormiinital(a);
    }
    
  };

  useEffect((gender) => {
    
    Getcredetial();
    if(gender=="male"){
      setFemale({gender: false, color: Colors.blue, type: 'male'})
    }else{
      setFemale({
        gender: true,
        color: Colors.pink,
        type: 'female',
        source: img.pink_tick,
      });
    }  
  }, [navigation]);
  

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{flex: 1, backgroundColor: 'white'}}
        showsVerticalScrollIndicator={false}>
        <Image
          
          style={{height: wp(40), width: wp(100), resizeMode: 'cover'}}
          source={img.logo}></Image>
        <View style={{paddingHorizontal: wp(6)}}>
          <Formik
            
            validationSchema={LoginValidationSchema}
            initialValues={Logininitialvalue}
            onSubmit={data => {
              setLogininitialvalue(data)
              //  registerData?.gender == '' ? navigate('Gender') :registerData.is_subscribed == true? navigate('Subscription') :
              API.Login(async e => {
              settoken(e.data.token)
              settest(true)
                 if (Remember) {
                  setFormiinital(data);
                 }
             
                if (e.status) {
                  if(registerData.is_subscribed !== true){
                    navigate('Subscription')
                  }
                  else{
                    AsyncStorage.setItem(
                      'Token',
                      JSON.stringify({
                        Token: e.data.token,
                        route: 'Dashboardstack',
                      }),
                    );
                    let a = {
                      Token: e.data.token,
                      route: 'Dashboardstack',
                    };
                    setDetail(a);
                    AsyncStorage.setItem('data', JSON.stringify(data));
                    Setroot('Dashboardstack');
                  }
                 
                }
              }, data,{
                login_type: 'desktop',
                offset: "moment().utcOffset()",
              })
          
          
            }}>
            {({handleChange, handleSubmit, values, errors}) => (
              <>
                <View
                  style={{
                    marginBottom: hp(4),
                    alignItems: 'center',
                    paddingTop: hp(4),
                  }}>
                  <MyText
                    style={{fontSize: scale(34)}}
                    black
                    poppinsbold
                    title={'Sign In'}
                  />
                  <Image
                    style={{
                      height: hp(1.5),
                      width: wp(40),
                      resizeMode: 'contain',
                      marginTop: -hp(1),
                    }}
                    source={img.brush}></Image>
                </View>

                <InputText
                  value={values.email}
                  error={errors.email}
                  onChangeText={handleChange('email')}
                  title={'Email'}
                  placeholder={'Enter Email ID '}
                  autoCapitalize='none'
                />

                <InputText
                  maxLength={12}
                  security
                  value={values.password}
                  error={errors.password}
                  onChangeText={handleChange('password')}
                  title={'Password'}
                  placeholder={'* * * * * * * *'}
                />

                <CheckButton
                  checkvalue={values.password != '' ? true : false}
                  value={setRemember}
                />

                <View style={{marginBottom: hp(5)}}>
                  <Buttons
                    style={{backgroundColor: Colors.Theme}}
                    onPress={handleSubmit}
                    title={'Login'}
                  />
                </View>
              </>
            )}
          </Formik>

          <TouchableOpacity
            onPress={() => navigate('Forgot')}
            style={{alignItems: 'flex-end', top: -hp(3)}}>
            <MyText
              style={{fontSize: scale(12), color: '#444444'}}
              poppinsemibold
              title={'Forgot Your Password ?'}
            />
          </TouchableOpacity>
        </View>
        
        <View style={{marginTop: hp(10), bottom: 10}}>
          <TouchableOpacity
            onPress={() => navigate('Register')}
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            <MyText
              style={{fontSize: scale(10)}}
              msemibold
              black
              title={"Don't Have An Account? "}
            />
            <MyText
              style={{fontSize: scale(10), color: 'blue'}}
              mbold
              black
              title={' Sign Up Here'}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
