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
import arrow_right from '../../../assets/images/arrow_right.png';


function TitleText(props) {
    return (
        <View style={styles.rowDirection}>
            <Image
        source={arrow_right} 
        style={styles.imageIcon}
    />
            <Text style={styles.titleHeaderText}>Send max minus fee: $2.678</Text>                 
        </View>
    )
}

export default TitleText;