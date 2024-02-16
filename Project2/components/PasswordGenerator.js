import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import {SafeAreaView} from 'react-native-safe-area-context';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
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

    if (isUpperaCase) {
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
  };

  const createPassword = (characters, passwordLength) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const charactersIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(charactersIndex);
    }
    return result;
  };

  const resetPassword = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setIsUpperCase(false);
    setIsLowerCase(false);
    setIsDigits(false);
    setIsSymbols(false);
  };

  return (
    <ScrollView>
      <SafeAreaView>
        <View style={styles.container}>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={PasswordSchema}
            onSubmit={values => generatePassword(+values.passwordLength)}>
            {({
              values,
              errors,
              touched,
              handleChange,
              handleSubmit,
              handleReset,
            }) => (
              <>
                <Text style={{fontSize:30,fontWeight:"bold"}}>Password Generator</Text>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errText}>
                        {errors.passwordLength}
                      </Text>
                    )}
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
                        onPress={()=> setIsLowerCase(!isLowerCase)}
                        fillColor='skyblue'
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include UpperCase</Text>
                    <BouncyCheckbox 
                        disableBuiltInState
                        isChecked={isUpperCase}
                        onPress={()=> setIsUpperCase(!isUpperCase)}
                        fillColor='skyblue'
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include Digits</Text>
                    <BouncyCheckbox 
                        disableBuiltInState
                        isChecked={isDigits}
                        onPress={()=> setIsDigits(!isDigits)}
                        fillColor='skyblue'
                    />
                </View>
                <View style={styles.inputWrapper}>
                    <Text style={styles.heading}>Include symbols</Text>
                    <BouncyCheckbox 
                        disableBuiltInState
                        isChecked={isSymbols}
                        onPress={()=> setIsSymbols(!isSymbols)}
                        fillColor='skyblue'
                    />
                </View>
                <View>
                    <TouchableOpacity>
                        <Text>Generate Password</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text>Reset</Text>
                    </TouchableOpacity>
                </View>
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
    flex: 1,
    padding: 10,
  },
  inputWrapper:{},
  inputColumn:{},
  heading:{},
  errText:{},
  inputStyle:{},
});
export default PasswordGenerator;
