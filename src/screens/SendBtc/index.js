import React from 'react';
import { StyleSheet, 
        Image, 
        Text, 
        View, 
        ScrollView, 
        TouchableOpacity, 
        Dimensions } from 'react-native';
import BigHeader from '../../components/Headers/BigHeader';
import DescriptiveHeader from '../../components/Headers/DescriptiveHeader'
import FormField from '../../components/Form/FormField';
import HiddenStatusBarView from '../../components/HiddenStatusBarView';
import styles from '../../styles/global_styles';
import clipboard from '../../../assets/images/clipboard.png';
import edit from '../../../assets/images/edit.png';
import swap from '../../../assets/images/swap.png';
import TitleHeader from '../../components/Title';
import Rectangle from '../../components/Rectangle';
import Button from '../../components/Button';

import { BlurView } from 'expo-blur';

function SendBtcScreen() {
    const [value, changeValue] = React.useState({password:"",email:""});
    
    const handleForm = (name, text) => {
        changeValue({...value, [name]:text})    
    }

    const iconMaker2 = (img) => (<Image
        source={img} 
        style={styles.imageIcon}
    />)

    return (
        <HiddenStatusBarView>
     
            <ScrollView style={styles.positioner}>
                <BigHeader title="Send Bitcoin" /> 
                <DescriptiveHeader title="How much BTC would you like to Send?" /> 
                <View style={styles.spacer32}/>
                <FormField icon={iconMaker2(clipboard)} handleForm={handleForm} name="password" placeholder="Enter wallet address or username" secure={false} />
                <View style={styles.spacer16}/>                
                <TitleHeader />
                <View style={styles.spacer12}/>   
                <FormField icon={iconMaker2(swap)} currency="USD" handleForm={handleForm} name="password" placeholder="BTC Amount" secure={false} />
                <View style={styles.spacer12}/>  
                <FormField icon={iconMaker2(edit)} handleForm={handleForm} name="password" placeholder="Fee: Low Priority - $1.5" secure={false} />
                
                <View style={styles.spacer16}/> 
                <View style={styles.horizontalSpacer}>
                    <Rectangle title="Kindly note that the fee selected will directly affect the delivery time of your transaction." />
                </View>
                <View style={styles.spacer32}/>
                <Button title="Proceed" />
                <View style={styles.spacer16}/> 

            </ScrollView> 

                   
        </HiddenStatusBarView>
    )
}

const stylez = StyleSheet.create({
    mainWrap: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },

    contentWrap: {
        flex: 1,

        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default SendBtcScreen
