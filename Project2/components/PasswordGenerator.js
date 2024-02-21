import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
  TurboModuleRegistry,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(true);
  const [isDigits, setIsDigits] = useState(false);
  const [isSymbols, setIsSymbols] = useState(false);

  const PasswordSchema = Yup.object().shape({
    passwordLength: Yup.number()
      .min(4, 'Should be min of 4 characters')
      .max(16, 'Should be max of 16 characters')
      .required('Length is required'),
  });

  const generatePassword = passwordLength => {
    let characterList = ' ';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitsChars = '0123456789';
    const symbolsChars = '!@#$%^&*()_+';

    if (isUpperCase) {
      characterList += upperCaseChars;
    }
    if (isLowerCase) {
      characterList += lowerCaseChars;
    }
    if (isDigits) {
      characterList += digitsChars;
    }
    if (isSymbols) {
      characterList += symbolsChars;
    }

    const passwordResult = createPassword(characterList, passwordLength);
    setPassword(passwordResult);
    setIsPasswordGenerated(true);
    console.log("Generated Successfully")
  };

  const createPassword = (characters, passwordLength) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charactersIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(charactersIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setIsUpperCase(false);
    setIsLowerCase(true);
    setIsDigits(false);
    setIsSymbols(false);
  };

  return (
    <ScrollView style={{flex: 1, backgroundColor: 'grey', padding: 20}}>
      <SafeAreaView>
        <View>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => generatePassword(+values.passwordLength)}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <Text style={{fontSize: 30, fontWeight: 'bold'}}>
                  Password Generator
                </Text>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text
                      style={[
                        styles.heading,
                        {color: 'black', fontWeight: '600'},
                      ]}>
                      Password Length
                    </Text>
                    <View style={{height:20}}>
                        {touched.passwordLength && errors.passwordLength && (
                        <Text style={styles.errText}>
                            {errors.passwordLength}
                        </Text>
                        )}
                    </View>
                  </View>
                  <TextInput
                    style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder="EX-8"
                    keyboardType="numeric"
                    maxLength={2}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include LowerCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isLowerCase}
                    onPress={() => setIsLowerCase(!isLowerCase)}
                    fillColor="skyblue"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include UpperCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isUpperCase}
                    onPress={() => setIsUpperCase(!isUpperCase)}
                    fillColor="skyblue"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Digits</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isDigits}
                    onPress={() => setIsDigits(!isDigits)}
                    fillColor="skyblue"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={isSymbols}
                    onPress={() => setIsSymbols(!isSymbols)}
                    fillColor="skyblue"
                  />
                </View>
                <View style={styles.btnContainer}>
                  <TouchableOpacity
                    // disabled={!isValid}
                    style={styles.btn}
                    onPress={handleSubmit}>
                    <Text style={styles.btntext}>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      handleReset();
                      resetPassword();
                    }}>
                    <Text style={styles.btntext}>Reset</Text>
                  </TouchableOpacity>
                </View>
                {isPasswordGenerated ? (
                  <View
                    style={{
                      backgroundColor: 'white',
                      marginTop: 40,
                      alignItems: 'center',
                      padding: 25,
                    }}>
                    <Text selectable={true} style={{fontSize: 20, color: 'black'}}>
                      Password is : {password}
                    </Text>
                    <Text>Press and Hold to Copy Text</Text>
                  </View>
                ) : null}
              </>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'grey',
    flex: 1,
  },
  inputWrapper: {
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputColumn: {
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
  },
  errText: {
    color: '#EB3232',
  },
  inputStyle: {
    borderRadius: 5,
    borderWidth: 0.5,
    marginRight: 100,
    marginBottom:15
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 70,
  },
  btntext: {
    borderWidth: 0.7,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'orange',
    color: 'black',
  },
});
export default PasswordGenerator;
