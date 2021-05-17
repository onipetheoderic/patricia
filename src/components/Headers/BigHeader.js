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
import arrowCircleRight from '../../../assets/images/arrow-circle-right.png'

function BigHeader({title}) {
    return (
        <View style={styles.header}>            
            <View style={styles.textHeaderCont}>
                <Image source={arrowCircleRight} style={styles.imageHeader} />
                <Text style={styles.headerText}>{title}</Text>
            </View>
            
        </View>
    )
}

BigHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default BigHeader;

