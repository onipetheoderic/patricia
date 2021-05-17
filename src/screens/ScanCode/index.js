import React, {useState} from 'react';
import { Image, StyleSheet, Button, TouchableOpacity, Text, View, Dimensions } from "react-native";

import IconButton from '../../components/Button';

import {BarCodeScanner, BarCodeScannerResult} from 'expo-barcode-scanner';
import BarcodeMask from 'react-native-barcode-mask';
import * as Linking from 'expo-linking';




const finderWidth = 280;
const finderHeight = 230;
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const viewMinX = (width - finderWidth) / 2;
const viewMinY = (height - finderHeight) / 2;

export default function MerchantAcceptance({navigation}) {
    const [optionsCircle, showOptionsCircles] = React.useState(false)
    const { width, height } = Dimensions.get('window');
    const [value, changeValue] = React.useState({how_much:"",password:""})

    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
    const [scanned, setScanned] = useState(false);
 
        React.useEffect(() => {
            (async () => {
                const {status} = await BarCodeScanner.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            })();
        }, []);

const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    alert(`Money has been transferred to ${data}!`);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return (
        <View style={stylez.container}>
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        {scanned && 
        <View style={{width:'90%', justifyContent:'center'}}>
            <IconButton icon="expand" title="tap to scan again" onPress={() => setScanned(false)} />
        </View>
            
        }
        {!scanned && <BarcodeMask width={width} height={height} edgeColor={'#62B1F6'} showAnimatedLine={true}/>}
      </View>
        
    );
}
const stylez = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
        },
        separator: {
            marginVertical: 30,
            height: 1,
            width: '80%',
        },

    });