import { StyleSheet, Text, View, Image, Pressable ,Modal,TouchableOpacity} from 'react-native';
import React, { useContext, useEffect, useState, useRef } from 'react';
import { wp, hp } from '../../Components/Globalstyle';
import Buttons from '../../Components/Buttons';
import Header from '../../Components/Header';
import InputText from '../../Components/InputText';
import { ModalPicker } from '../../Components/InputText';
import { Colors, img } from '../../Components/Config';
import { scale } from 'react-native-size-matters';
import * as ImagePicker from 'react-native-image-picker';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Context } from '../../../Shared/Provider';
import MyText from '../../Components/Ctext';
export default function UpdateProfile({ navigation }) {
  const validref = useRef();
  const [Active, setActive] = useState(false);
  const [details, setdetails] = useState('')
const activeref = useRef();
useEffect(() => {
  activeref.current = Active;
  
  
}, [Active]);

  const [response, setResponse] = useState();
  const {API,
    image_base_url,
    setLoader,
    Udetail,
    Detail,
    setUserdetail, Female
  } = useContext(Context);

  const { Token } = Detail



  const [ages, setAge] = useState([{ label: 'Select Age', value: 'Select Age' }]);

  let Agelist = [{ label: 'Select Age', value: 'Select Age' }];

  useEffect(() => {
    [...new Array(136)].map((_, s) => {

      Agelist.push({ label: 15 + s, value: 25 + s });
    });
    setAge(Agelist);

  }, []);
  useEffect(() => {
    setLoader(true)
    API.Userdetail(e => {
      setdetails(e.data)
      setLoader(false)

    if(e.data.image == undefined){
      setResponse({
       
        assets: [
          {
            fileName:
              'rn_image_picker_lib_temp_1050a18c-bbdd-4216-82b9-d4eca609eec 9.jpg',
            fileSize: 117953,
            height: 800,
            id: 'rn_image_picker_lib_temp_1050a18c-bbdd-4216-82b9-d4eca609eec9.jpg',
            timestamp: null,
            type: 'image/jpeg',
            uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
            width: 360,
          },
        ]
      })
     }else{
      setResponse({
        assets: [
          {
            fileName:
              e.data.fileName,
            fileSize: 117953,
            height: 800,
            id: 'rn_image_picker_lib_temp_1050a18c-bbdd-4216-82b9-d4eca609eec9.jpg',
            timestamp: null,
            type: 'image/jpeg',
            uri: image_base_url + e?.data?.image,
            width: 360,
          },
        ],
      } )
    
     }

    },);
  }, [Active])


useEffect(() => {
    API.Userdetail(e => {
      setdetails(e.data)
      console.log(e.data.image,'=========00000000000')

 if(e.data.image == undefined){
  setResponse({
   
    assets: [
      {
        fileName:
          'rn_image_picker_lib_temp_1050a18c-bbdd-4216-82b9-d4eca609eec 9.jpg',
        fileSize: 117953,
        height: 800,
        id: 'rn_image_picker_lib_temp_1050a18c-bbdd-4216-82b9-d4eca609eec9.jpg',
        timestamp: null,
        type: 'image/jpeg',
        uri: 'https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg',
        width: 360,
      },
    ]
  })
 }else{
  setResponse({
    assets: [
      {
        fileName:
          e.data.fileName,
        fileSize: 117953,
        height: 800,
        id: 'rn_image_picker_lib_temp_1050a18c-bbdd-4216-82b9-d4eca609eec9.jpg',
        timestamp: null,
        type: 'image/jpeg',
        uri: image_base_url + e?.data?.image,
        width: 360,
      },
    ],
  } )

 }
    },);


  }, [])


  const includeExtra = true;
  const { first_name, last_name, email, phone_number, gender, age, image } = Udetail

  const initialvalue = {
    first_name: first_name || "",
    last_name: last_name,
    age: age || "",
    gender: gender,
    phone_number: phone_number,
    email: email || "",   

  }

  const onButtonPress = React.useCallback((type, options) => {

    ImagePicker.launchImageLibrary(
      {
        maxHeight: 800,
        maxWidth: 800,
        selectionLimit: 1,
        mediaType: 'photo',

        includeBase64: false,
        includeExtra,
      },
      e => {

        setResponse(e)
        setUserdetail({
          ...Udetail,
          image: {
            type: e?.assets[0].type,
            uri: e?.assets[0].uri,
            fileName: e?.assets[0].fileName
          },
        })

      },
    );
  }, []);

  const UpdateValidationSchema = yup.object().shape({
    first_name: yup.string().required('Enter First name'),
    last_name: yup.string().required('Enter Last Name'),

    phone_number: yup.string().required('Enter Phone Number'),

    gender: yup.string().required('Enter Gender'),
  });


  const [Ageplaceholder, setAgeplaceholder] = useState('');
  return (
    <View style={{ backgroundColor: 'white', paddingBottom: wp(10) }}>
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
              height: hp(39),
              width: wp(80),
              backgroundColor: 'white',
              alignItems: 'center',
              borderRadius: 25,
            }}>
            <Image
              style={{ height: hp(11), width: hp(12), marginTop: -hp(5) }}
              source={img.warning}></Image>
            <View
              style={{
                marginBottom: hp(4),
                alignItems: 'center',
                marginTop: hp(5),
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
                  fontSize: 14,
                  color: 'black',
                  
                }}>
          The update has been completed successfully. 
              </Text>
            </View>
            <TouchableOpacity
                  onPress={ () => {
                    // navigate('Setting');
                    navigation.goBack();
                  }}
                  style={{
                    backgroundColor:'#FFBB34',
                    height: hp(6),
                    width: hp(20),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 25,
                    marginTop:hp(5)
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
      <Header
        onBackPress={() => navigation.goBack()}
        left
        title={'Update Profile'}
      />
      <Formik
        validationSchema={UpdateValidationSchema}
        innerRef={validref}
        initialValues={initialvalue}
        onSubmit={data => {


          const { age, first_name, gender, last_name, phone_number, image } = setUserdetail(data);

         setLoader(true)
          var myHeaders = new Headers();
          myHeaders.append("Authorization", Token);

          var formdata = new FormData();
          formdata.append("first_name", data?.first_name);
          formdata.append("last_name", data?.last_name);
          formdata.append("phone_number", data?.phone_number);
          formdata.append("gender", data?.gender);
          formdata.append("image", {
            type: response.assets[0].type,
            uri: response.assets[0].uri,
            name: response.assets[0].fileName,
          });
          formdata.append("age", data?.age);
          //         
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
          };

          fetch("https://kegelklock.com/api/user/user_profile_update", requestOptions)
            .then(response => response.text())
            .then(result =>{ result && setLoader(false),setActive(true)})
            .catch(error => { setLoader(false),alert('There is a network problem, please try again later')});
          
        }
        
        }>
        {({ handleChange, handleSubmit, values, errors }) => (
          <>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View>
                <View
                  style={{
                    height: hp(29),
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{ height: wp(35), width: wp(35) }}>
                    <Image
                      style={{
                        borderRadius: wp(19),
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'white',
                        borderWidth: 2,

                        borderColor: !Female.gender ? Colors.blue : Colors.pink,
                      }}
                      source={{ uri: response?.assets[0].uri }}
                    />

                    <Pressable
                      onPress={onButtonPress}
                      style={{ marginTop: -wp(10) }}>
                      <Image
                        source={img.edit}
                        style={{
                          right: 1,
                          borderRadius: wp(1),
                          position: 'absolute',
                          height: wp(7),
                          width: wp(7),
                          zIndex: 4,
                          borderRadius: 20,
                          marginTop: -wp(22),

                        }}></Image>
                    </Pressable>
                  </View>
                </View>
                <View style={{ paddingHorizontal: wp(4) }}>
                  <InputText
                    maxLength={15}
                    value={values.first_name}

                    onChangeText={handleChange('first_name')}
                    title={'First Name'}
                    placeholder={'Enter First Name'}
                  />
                  <InputText
                    maxLength={15}
                    value={values.last_name}
                    onChangeText={handleChange('last_name')}
                    title={'Last Name'}
                    placeholder={'Enter Last Name'}
                  />

                  <InputText
                    editable={false}
                    value={values.gender}
                    onChangeText={handleChange('gender')}
                    title={'Gender'}
                    placeholder={' '}
                  />

                  <ModalPicker
                    error={values.age == 'age' ? 'age is required' : errors.age}
                    onChangeText={e => {
                      setUserdetail({ ...Udetail, age: e.label })

                      setAgeplaceholder(e.label);
                      handleChange('age')(JSON.stringify(e.label));
                    }}
                    zIndex={900}
                    data={ages}
                    modelplaceholder={initialvalue.age || 'Select Age'}
                    title={'Age'}
                    placeholder={initialvalue.age ||
                      Ageplaceholder == '' ? initialvalue.age || 'Select Age' : Ageplaceholder
                    }
                  />

                  <InputText

                    onChangeText={handleChange('email')}
                    editable={false}
                    value={values.email}
                    title={'Email ID'}
                    placeholder={'Enter Your Email'}
                  />

                  <InputText
                    keyboardType="numeric"
                    maxLength={15}
                    value={values.phone_number}

                    onChangeText={handleChange('phone_number')}
                    title={'Phone Number'}
                    placeholder={'Enter Phone Number'}
                  />

                  <View style={{ marginBottom: wp(5) }}>
                    <Buttons
                      onPress={handleSubmit}
                      style={{ marginTop: hp(1) }}
                      title={'Update'}
                    />
                  </View>
                </View>
              </View>
            </ScrollView>
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingBottom: hp(3),
  },
  dropdown: {
    height: hp(8),
    borderWidth: 0.7,
    borderColor: '#FFE9B7',
    borderRadius: 8,
    paddingHorizontal: 8,
    opacity: 0.7,
  },

  placeholderStyle: {
    fontSize: 18,
    color: 'black',
  },
  selectedTextStyle: {
    fontSize: 13,
    marginLeft: wp(2),
    color: '#444444',
    fontFamily: 'Poppins-SemiBold',
  },
});


