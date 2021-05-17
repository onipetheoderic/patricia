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
import alertCircle from '../../../assets/images/alert-circle.png'

function Rectangle({title}) {
    return (
        <View style={styles.rectangleCont}>            
            <Image
                source={alertCircle} 
                style={styles.imageIconRect}
            /> 
            <Text style={styles.rectText}>
                {title}
            </Text>
        </View>
    )
}

Rectangle.propTypes = {
    title: PropTypes.string.isRequired
}

export default Rectangle;

