import React from 'react';
import { StyleSheet, 
    Image, 
    Text, 
    View, 
    ScrollView, 
    TouchableOpacity, 
    Dimensions,StatusBar, } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/global_styles';
import proceed from '../../../assets/images/proceed.png'

function Button({title}) {
    return (
        <TouchableOpacity style={styles.buttonCont}>           
           <Text style={styles.btnText}>Proceed</Text>
           <View style={styles.imgCont}>
                <Image source={proceed} style={styles.image24} />
           </View>
           
        </TouchableOpacity>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired
}

export default Button;

