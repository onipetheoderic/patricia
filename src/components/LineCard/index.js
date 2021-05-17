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

import snail from '../../../assets/images/snail1.png'
import rewind from '../../../assets/images/rewind-right.png'
import flash from '../../../assets/images/flash.png'

function LineCard(props) {
    const bottomLinePresent = props.bottomLine === true ? 2 : 0
    const bottomLineColor = props.bottomLine === true ? '#EFF2F7': ""
    const imageIcon = props.icon=="snail" ? snail : props.icon =="rewind" ? rewind : flash
    return (
        <TouchableOpacity onPress={props.onPress} style={{height:71, borderBottomWidth:bottomLinePresent, borderBottomColor:bottomLineColor}}>
            <View style={{marginLeft:24, marginRight:24, height:'100%', alignItems:'center', flexDirection:'row'}}>
            <Image source={imageIcon} style={styles.imageIcon16} />
            <Text style={styles.lineText}>{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default LineCard;

  
                