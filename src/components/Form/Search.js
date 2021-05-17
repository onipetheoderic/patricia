import React from 'react';
import { SafeAreaView, StyleSheet, Share, Text, View, Image, TouchableOpacity, 
    Dimensions, ScrollView, ImageBackground, TextInput, TouchableHighlight, Platform, Alert } from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import styles from './form.component.styles';
import { palette } from '../../styles/theme';

export default function FormFields({icon, currency, keyboardType, value, placeholder, handleForm, name, marginVertical, secure, disabled, label, editable}) {
   
    const displayOnly = disabled ? '100%' : '90%'
    const displayOnlyMargin = disabled ? 5 : 6
    const [show, changeShow] = React.useState(secure)
    

   
    return (
        <View style={styles.containerSearch}>
             <View style={styles.typeContSearch}>
                <View>
                {icon}
            
                </View>
            
            </View>
            <View style={styles.inputCont}>
              <View style={styles.formCont}>
              <TextInput
                style={styles.textInput}
                onChangeText={text => handleForm(name,text)}
                secureTextEntry={show}
                value={value}
                placeholder={placeholder}
                placeholderTextColor={palette.SmokeDark}
                keyboardType={keyboardType}
                />
              </View>
            </View>
           
        </View>
    )
}
/*
<TextInput
                style={styles.textInput}
                onChangeText={text => handleForm(name,text)}
                secureTextEntry={show}
                value={value}
                placeholder={placeholder}
                placeholderTextColor='#000000'
                keyboardType={keyboardType}
                />
*/  