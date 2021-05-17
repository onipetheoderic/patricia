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

function HiddenStatusBarView(props) {
    return (
        <View>
            <StatusBar
                animated={true}
                hidden={true} />
            {props.children}            
        </View>
    )
}

export default HiddenStatusBarView;