import {
  StyleSheet,
  View,
  ScrollView,
  Image,
} from 'react-native';
import React, {  useContext, useRef } from 'react';
import { img } from '../../Components/Config';
import { hp, wp } from '../../Components/Globalstyle';
import MyText from '../../Components/Ctext';
import { scale } from 'react-native-size-matters';
import InputText from '../../Components/InputText';
import Buttons from '../../Components/Buttons';
import {  Setroot } from '../../Components/Config';
import Header from '../../Components/Header';
import { Context } from '../../../Shared/Provider';
import { Formik } from 'formik';
import * as yup from 'yup';

export default function Payment(props) {
  const PaymentValue = props.route.params.params
  const plan_id = props.route.params.params._id;
  const validref = useRef();
  const { Female,setLoading} = useContext(Context);

  const { API } = useContext(Context);

  const PaymentValidationSchema = yup.object().shape({
    card_no: yup.string()
      .min(16, 'Enter 16 digit Card Number')
      .required('Enter 16 digit Card Number'),
    name: yup.string().required('Enter Your Card Holder Name'),
    cvv: yup.string()
      .min(3, 'Enter 3 Digit CVV')
      .required('Enter 3 Digit CVV'),
    expiry_date: yup.string()
      .min(7, 'Enter Expiry Date')
      .required('Enter Expiry Date'),
    street_address: yup.string().required('Enter your Address'),
    zip_code: yup.string().required('Enter Zip Code'),
    city: yup.string().required('Enter your City'),
    country_code: yup.string()
      .min(2)
      .required('Enter your Country Code'),

  });

  const Submit = () => {
    validref.current.handleSubmit();
  };
  return (
    <View
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        paddingTop: hp(4),
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header
          onBackPress={() => {

            props.navigation.goBack();
          }}
          left
          title={'PAYMENT'}
        />

        <View style={{ paddingHorizontal: hp(2) }}>
          <View
            style={{
              height: wp(35),
              width: wp(92),
              backgroundColor: '#fff5de',
              borderRadius: 10,
              marginTop: hp(3),
              flexDirection: 'row',
            }}>
            <View
              style={{
                width: wp(15),
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image
                style={{ height: 25, width: 25, resizeMode: 'contain' }}
                source={!Female.gender ? img.credit_blue : img.credit}>
              </Image>
            </View>
            <View style={{ justifyContent: 'center' }}>
              <MyText
                style={{ fontSize: scale(20), color: 'black' }}
                poppinsemibold
                title={'Credit Card'}
              />
              <MyText
                style={{ fontSize: scale(12), color: '#707070' }}
                msemibold
                title={
                  'Safe Money Transfer Using Your Bank ' +
                  '\n' +
                  'Account.Visa, American Express.'
                }
              />
            </View>
          </View>
          <Formik
            innerRef={validref}
            validationSchema={PaymentValidationSchema}
            initialValues={{ card_no: '', name: '', cvv: '', expiry_date: '', street_address: '', zip_code: '', city: '', country_code: '', amount: PaymentValue.plan_price, plan_id: plan_id }}
            onSubmit={data => {
           
              let payment = data
              payment.card_no = payment.card_no.replace(/ /g, "")
              setLoading(true)
              API.payment(e => {
                setLoading(false)
                Setroot('Dashboardstack', e);
              },
                {
                  "name": payment.name,
                  "street_address": payment.street_address,
                  "zip_code": payment.zip_code,
                  "city": payment.city,
                  "country_code": (payment.country_code).toUpperCase(),
                  "card_no": payment.card_no,
                  "expiry_date": payment.expiry_date,
                  "cvv": payment.cvv,
                  "amount": PaymentValue.plan_price,
                  "plan_id": plan_id
                }
              );
            }}>

            {({ handleChange, handleSubmit,
              values,
              errors,
              touched,
              handleBlur, }) => (
              <View style={{ marginTop: hp(3) }}>
                <InputText
                  keyboardType="numeric"
                  maxLength={19}
                  error={errors.card_no}
                  value={values.card_no}
                  onChangeText={e => {
                    let a = values.card_no.slice(-1);
                    if (
                      (e.length == 4 && a != ' ') ||
                      (e.length == 9 && a != ' ') ||
                      (e.length == 14 && a != ' ')
                    ) {

                      handleChange('card_no')(e + ' ');
                    } else {

                      handleChange('card_no')(e);
                    }
                  }}
                  title={'Credit Card Number'}
                  placeholder={''}
                />


                <InputText
                  error={errors.name}
                  maxLength={22}
                  onChangeText={handleChange('name')}
                  title={'Name of Card'}
                  placeholder={' '}
                />


                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: hp(2),
                  }}>
                  <View style={{ width: wp(45) }}>
                    <InputText
                      keyboardType="numeric"
                      maxLength={3}
                      marginTop={-hp(1)}
                      error={errors.cvv}
                      onChangeText={handleChange('cvv')}
                      title={'CVV Code'}
                      placeholder={''}
                    />
                  </View>

                  <View style={{ width: wp(45) }}>
                    <InputText
                      keyboardType="numeric"
                      maxLength={7}
                      marginTop={-hp(1)}
                      error={errors.expiry_date}
                      value={values.expiry_date}
                      onChangeText={e => {
                        let a = values.expiry_date.slice(-1);

                        if (
                          (e.length == 2 && a != '/')

                        ) {

                          handleChange('expiry_date')(e + '/');
                        } else {

                          handleChange('expiry_date')(e);
                        }
                      }}
                      title={'Expiry Date'}
                      placeholder={'MM/YYYY'}
                    />
                  </View>
                </View>


                <MyText
                  style={{ fontSize: scale(20), color: 'black', marginBottom: hp(2) }}
                  poppinsemibold
                  title={'Billing Address'}
                />

                <InputText
                  maxLength={50}
                  error={touched.street_address && errors.street_address}
                  onBlur={handleBlur('street_address')}
                  onChangeText={handleChange('street_address')}
                  title={'Street'}
                  placeholder={''}
                />

                <InputText
                  maxLength={20}
                  error={touched.city && errors.city}
                  onBlur={handleBlur('city')}
                  onChangeText={handleChange('city')}
                  title={'City'}
                  placeholder={''}
                />


                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginBottom: hp(2),
                  }}>
                  <View style={{ width: wp(45) }}>
                    <InputText
                      maxLength={2}
                      marginTop={-hp(1)}
                      error={errors.country_code}
                      onChangeText={(e) => {


                        if (e.length == 2) {
                          handleChange('country_code')(e)
                        }

                      }}
                      title={'Country Code'}
                      placeholder={''}
                    />
                  </View>

                  <View style={{ width: wp(45) }}>
                    <InputText
                      keyboardType="numeric"
                      maxLength={6}
                      marginTop={-hp(1)}
                      error={errors.zip_code}
                      onChangeText={handleChange('zip_code')}
                      title={'Zip Code'}
                      placeholder={''}
                    />
                  </View>
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    height: hp(10),
                    width: wp(94),
                    backgroundColor: '#fff5de',
                    borderRadius: 10,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: hp(3),
                  }}>
                  <MyText
                    style={{
                      textAlign: 'center',
                      fontSize: scale(20),
                      color: 'black',
                    }}
                    poppinsemibold
                    title={'Total Amount'}
                  />
                  <MyText
                    style={{
                      textAlign: 'center',
                      fontSize: scale(20),
                      color: 'black',
                    }}
                    poppinsemibold
                    title={'$' + PaymentValue.plan_price}
                  />
                </View>

                <View style={{ marginBottom: hp(5), paddingTop: hp(5) }}>
                  <Buttons

                    onPress={handleSubmit}
                    title={'Pay Now'}
                  />
                </View>
              </View>

            )}
          </Formik>


        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
