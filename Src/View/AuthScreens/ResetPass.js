import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState, useRef ,useContext} from 'react';
import { hp, wp } from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import InputText from '../../Components/InputText';
import Buttons from '../../Components/Buttons';
import { navigate ,img,Colors} from '../../Components/Config';
import { Context } from '../../../Shared/Provider';
import { Formik } from 'formik';
import * as yup from 'yup';
export default function ResetPass({ navigation }) {

  const [Active, setActive] = useState(false);
  const { API} = useContext(Context);
  const validref = useRef();
  const ChangePasswordValidationSchema = yup.object().shape({
    old_password: yup
      .string()
      .min(8, 'Password must contain 6 characters')
      .required('Password must contain 6 characters'),
    new_password: yup
      .string()
      .min(8, 'Password must contain 8 characters')
     .required('Please Enter your password')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
      
    confirm_password: yup
      .string()
      .oneOf([yup.ref('new_password'), null], 'Password did not match')
      .required('Confirm Password must be same as password'),
  });


  const [password, setpassword] = useState(" ")

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          style={{ height: wp(40), width: wp(100), resizeMode: 'cover' }}
          source={img.logo}></Image>
        <View style={{ paddingHorizontal: wp(6) }}>
          <View
            style={{
              marginBottom: hp(4),
              alignItems: 'center',
              paddingTop: hp(4),
            }}>
            <MyText
              style={{ fontSize: scale(32) }}
              black
              poppinsbold
              title={'Change Password'}
            />
            <Image
              style={{
                height: hp(2),
                width: wp(40),
                resizeMode: 'contain',
              }}
              source={img.brush}></Image>
          </View>

          <Formik
            validationSchema={ChangePasswordValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
            innerRef={validref}
            initialValues={{
              old_password: '',
              new_password: '',
              confirm_password: '',
            }}
            onSubmit={data => {
              API.ChangePassword(e => {

                navigate(setActive(true), e);
                setActive(true);
              }, data);
            }}>
            {({ handleChange, handleSubmit, values, errors, handleBlur }) => (
              <>
                <InputText
                  maxLength={15}
                  // error={touched.old_password && errors.old_password}
                  onBlur={handleBlur('old_password')}
                  onChangeText={handleChange('old_password')}
                  title={'Enter Old Password'}
                  placeholder={'* * * * * * * *'}
                  security
                />

                <InputText
                  maxLength={15}
                  onFocus={() => {
                    setpassword("Password must contain 6 characters")
                  }}
                  // error={touched.new_password&&errors.new_password}
                  value={values.new_password}
                  error={errors.new_password}
                  onBlur={handleBlur('new_password')}
                  // 
                  onChangeText={(e) => {
                    handleChange('new_password')(e)

                    if (e.length >= 6) {

                      setpassword("")

                    } else {
                      setpassword("Password must contain 6 characters")
                    }
                    handleChange('new_password')(e)

                  }}
                  title={'Enter New Password'}
                  placeholder={'* * * * * * * *'}
                  security
                />
                <InputText
                  maxLength={15}
                  // error={errors.confirm_password&&touched.confirm_password}
                  value={values.confirm_password}
                  error={errors.confirm_password}
                  onBlur={handleBlur('confirm_password')}
                  onChangeText={handleChange('confirm_password')}
                  title={'Confirm Password'}
                  placeholder={'* * * * * * * *'}
                  security
                />
                <View style={{ marginBottom: hp(5) }}>
                  <Buttons
                    style={{ backgroundColor: Colors.Theme }}
                    onPress={handleSubmit}
                    title={'Save'}
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
