import React, {useContext, useRef, useState} from 'react';
import { StyleSheet, 
    Image, 
    Text, 
    View, 
    Keyboard,
    ScrollView, 
    TouchableOpacity, 
    Dimensions,StatusBar, } from 'react-native';
import PropTypes from 'prop-types';
import styles from '../../styles/global_styles';
import arrowCircleRight from '../../../assets/images/close-circle1.png';
import Search from '../../components/Form/Search';
import searchImage from '../../../assets/images/search.png'
import * as Animatable from 'react-native-animatable';
import { OverallContext } from "../../../store";
import LineCard from '../LineCard';
import SwipeButton from 'rn-swipe-button';
import Feather from 'react-native-vector-icons/Feather';
import rightArrow from '../../../assets/images/arrow-circle-right2.png';
import btcLogo from '../../../assets/images/btc_logo.png';
import sent from '../../../assets/images/sent.png';

import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
  } from 'react-native-confirmation-code-field';

function BottomCard({navigation}) {
    const [value, changeValue] = React.useState({search:""});
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});

    const [valued, setValue] = useState('');

    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
      });
    

    const defaultStatusMessage = 'swipe status appears here';
    const [swipeStatusMessage, setSwipeStatusMessage] = React.useState(
        defaultStatusMessage,
    );

    const globalState = useContext(OverallContext);      
    const {state, dispatch } = globalState;  
    
    const handleForm = (name, text) => {
        changeValue({...value, [name]:text})    
    }

    const iconMaker2 = (img) => (<Image
        source={img} 
        style={styles.imageIcon16}
    />)

    const showBottomNav = () => {
        dispatch({type:"showBottomCard", payload:false})
    }

    const showTransactionSummary = () => {
        dispatch({type:'showLongCard', payload:true})
    }

    const updateSwipeStatusMessage = () => {
        dispatch({type:'showLongCard2', payload:true})
        console.log("the end")
    }
   
    const FacebookIcon = () => <Image source={rightArrow} style={{width:24, height:24, resizeMode:'contain'}} />;

    const CELL_COUNT = 4;

    

    const handleSetValue = (vals) => {
        setValue(vals)
        if(valued.length>=3){
            Keyboard.dismiss
            console.log("authenticated")
            dispatch({type:"showLongCard2", payload:false})
            dispatch({type:"setSuccessMessage", payload:true})
           
        }
    }
    const finish = () => {
        dispatch({type:"showLongCard2", payload:false})
        dispatch({type:"setSuccessMessage", payload:false})
        dispatch({type:'showLongCard', payload:false})
    }
    return (
        <>
         {
        state.successMessage &&
            <>            
                <View style={styles.bottomCardLongSuccess}>      
                    <Image source={sent} style={{width:140, height:108}}/>

                   <View style={{marginLeft:47, marginRight:47, marginTop:32}}>
                        <Text style={{textAlign:'center', lineHeight:29, fontSize:18, fontFamily:'Graphik-Regular',}}>
                        You have successfully sent 0.0003BTC. Please see detail of this transaction in History
                        </Text>

                        
                   </View>
                   <View style={{marginTop:100}}/>
                   <TouchableOpacity onPress={()=>finish()} style={{width:'80%',justifyContent:'center', alignItems:'center', height:56,borderRadius:8, borderWidth:1, borderColor:'#0267FF'}}>
                        <Text style={{fontSize:16, color:'#0267FF', fontFamily:'Graphik-Regular'}}>Finish</Text>
                    </TouchableOpacity>
                </View>
            </>
        }
         {
        state.longCard2 &&
            <>
            
            <View style={styles.bottomCardLong}>      
            <View style={styles.backShadow}>

            </View>
                <View style={styles.bottomCardCurveContLong}>
                    <View style={styles.bottomWrapLong}>
                        <Text style={styles.transactionTextLong}>Transaction Summary</Text>
                        <TouchableOpacity style={styles.iconPositioner} onPress={()=>showBottomNav()}>
                            <Image source={arrowCircleRight} style={styles.imageHeader} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lineStyle} />
                    <View style={styles.contain}>
                        <View style={styles.longCont}>
                            <Text style={styles.longText}>
                                Please enter your Patricia PIN to authorise this transaction
                            </Text>
                        </View>

                        <View style={styles.grayArea22}>
                            <Image source={btcLogo}  style={{width:48, height:48, resizeMode:'contain', alignSelf:'center', marginLeft:16}} />
                            <View style={{justifyContent:'center',marginLeft:16, height:'100%'}}>
                                <Text style={styles.smallText2}>Sending 0.00067 BTC to</Text>
                                <Text style={styles.smallText2}>External wallet</Text>
                            </View>

                        
                        </View>

                        <View>
                        <CodeField
                            ref={ref}
                            {...props}
                            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
                            value={valued}
                            onChangeText={handleSetValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({index, symbol, isFocused}) => (
                            <Text
                                key={index}
                                style={[styles.cell, isFocused && styles.focusCell]}
                                onLayout={getCellOnLayoutHandler(index)}>
                                {symbol || (isFocused ? <Cursor /> : null)}
                            </Text>
                            )}
                        />

                        </View>
                      




                         
                       
                    </View>

                    

                </View>
            </View>
            </>
        }


         {
        state.longCard && !state.longCard2 &&
            <>
            
            <View style={styles.bottomCardLong}>      
            <View style={styles.backShadow}>

            </View>
                <View style={styles.bottomCardCurveContLong}>
                    <View style={styles.bottomWrapLong}>
                        <Text style={styles.transactionTextLong}>Transaction Summary</Text>
                        <TouchableOpacity style={styles.iconPositioner} onPress={()=>showBottomNav()}>
                            <Image source={arrowCircleRight} style={styles.imageHeader} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.lineStyle} />
                    <View style={styles.contain}>
                        <View style={styles.longCont}>
                            <Text style={styles.longText}>
                                Please review your transaction detail before proceeding
                            </Text>
                        </View>

                        <View style={styles.grayArea}>
                            <View style={{justifyContent:'center',marginLeft:16, height:'100%'}}>
                                <Text style={styles.smallText}>You pay</Text>
                                <Text style={styles.bigText}>$1000</Text>
                            </View>

                            <View style={{justifyContent:'flex-end', width:'50%', }}>
                                <View style={{flexDirection:'row', marginBottom:11,}}>
                                    <View style={{backgroundColor:'#EFF2F7',borderRadius:2 }}>
                                        <Text style={styles.smallTextCard}>0.000075 BTC</Text>
                                    </View>
                                    <View style={{backgroundColor:'#EFF2F7', borderRadius:2, marginLeft:7.5 }}>
                                        <Text style={styles.smallTextCard}>₦120000</Text>
                                    </View>
                                </View>
                                
                            </View>

                        </View>

                        <View style={styles.grayArea}>
                            <View style={{justifyContent:'center',marginLeft:16, height:'100%'}}>
                                <Text style={styles.smallText}>Reciepient recieves</Text>
                                <Text style={styles.bigText}>$9200</Text>
                            </View>

                            <View style={{justifyContent:'flex-end', width:'50%', }}>
                                <View style={{flexDirection:'row', marginBottom:11,}}>
                                    <View style={{backgroundColor:'#EFF2F7',borderRadius:2 }}>
                                        <Text style={styles.smallTextCard}>0.000075 BTC</Text>
                                    </View>
                                    <View style={{backgroundColor:'#EFF2F7', borderRadius:2, marginLeft:7.5 }}>
                                        <Text style={styles.smallTextCard}>₦120000</Text>
                                    </View>
                                </View>
                                
                            </View>

                        </View>

                        <View style={styles.grayArea2}>
                            <View style={{justifyContent:'center',marginLeft:16, height:'100%'}}>
                                <Text style={styles.addressText}>Address:</Text>
                                <Text style={styles.addressText}>Description:</Text>
                            </View>

                            <View style={{justifyContent:'center', width:'70%', }}>
                                <View>
                                <Text style={styles.addressText2}>1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</Text>
                                <Text style={styles.addressText3}>School fee payment</Text>
                                </View>
                                
                            </View>

                        </View>
                        <View style={{marginTop:30}}/>
                        <SwipeButton
            
            onSwipeSuccess={() => updateSwipeStatusMessage('Slide success!')}
            thumbIconBackgroundColor="#FFFFFF"
            thumbIconComponent={FacebookIcon}
            title=">>> Slide to pay"
            railBackgroundColor="#0267FF"
            railBorderColor="transparent"
            railFillBackgroundColor="#479BFF"
            railFillBorderColor="transparent"
            titleColor="white"
            railStyles={{paddingLeft:5}}
            thumbIconBackgroundColor="#479BFF"
            thumbIconBorderColor="transparent"
            thumbIconStyles={{borderRadius:4}}
            titleStyles={{fontSize:16, fontFamily:'Graphik-Regular'}}
            containerStyles={{borderRadius:8,}}
            height={56}
            // railStyles={{backgroundColor:'green', borderRadius:2}}
          />




                         
                       
                    </View>

                    

                </View>
            </View>
            </>
        }
             
       
         {
        !state.longCard &&
        <View style={styles.bottomCard}>      
        <View style={styles.bottomCardCurveCont}>
               <View style={styles.bottomWrap}>
               <Text style={styles.transactionText}>Select Transaction Fee</Text>
                <TouchableOpacity onPress={()=>showBottomNav()}>
                    <Image source={arrowCircleRight} style={styles.imageHeader} />
                </TouchableOpacity>
               </View>
              
                <View style={styles.lineStyle} />

                <View style={styles.formContSpacer}>
                <Search icon={iconMaker2(searchImage)} handleForm={handleForm} name="search" placeholder="Search" secure={false} />
                </View>

                <LineCard bottomLine={true} title="Transaction Summary" onPress={()=>showTransactionSummary()} icon="snail"/>
                <LineCard bottomLine={true} title="Scan QR Code" onPress={()=>navigation.navigate("ScanCode")} icon="flash"/>
                <LineCard bottomLine={true} title="Patricia Pin" icon="flash"/>
                <LineCard bottomLine={true} title="Turbo Charge" icon="rewind"/>

           </View>
           </View>
        }
            
        
        </>
    )
}

BottomCard.propTypes = {

}

export default BottomCard;

