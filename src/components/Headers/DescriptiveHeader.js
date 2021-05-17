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
import qr_scan from '../../../assets/images/qr_scan.png';

function BigHeader({title}) {
    return (
        <View style={styles.descriptiveHeader}>            
            <View style={styles.descriptiveHeaderCont}>                
                <Text style={styles.descriptiveHeaderText}>{title}</Text>
                <Image source={qr_scan} style={styles.imageDescriptionHeader} />
            </View>
            
        </View>
    )
}

BigHeader.propTypes = {
    title: PropTypes.string.isRequired
}

export default BigHeader;

