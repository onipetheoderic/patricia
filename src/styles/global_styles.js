import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import {palette} from './theme';

export default StyleSheet.create({
    header: {
        width:'100%',
        height:77,
    },
    rowDirection: {
        flexDirection:'row',
        alignItems:'center'
    },
    spacer32: {
        marginTop:32,
    },
    spacer16: {
        marginTop:16,
    },
    spacer12: {
        marginTop:12,
    },
    spacer43: {
        marginTop:43,
    },
    horizontalSpacer: {
        marginLeft:13,
        marginRight:13
    },
    rectangleCont: {
        borderRadius:40,
        borderColor: palette.GrayOne,
        height:60,
        flexDirection:'row',
        alignItems:'center',
        width:'100%',
        borderWidth:1
    },
    imgCont: {
        marginRight:16
    },
    image24: {
        width:24,
        height:24
    },
    buttonCont: {
        width:'100%',
        backgroundColor:palette.Blue,
        height:56,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    btnText: {
        color: palette.White,
        fontSize:16,
        marginLeft:24
    },
    rectText:{
        marginLeft:13,
        fontFamily:'Graphik-Regular',
        fontSize:10,
        width:219,
        color:palette.SmokeDark
    },
    headerText: {
        fontSize:20,
        marginBottom:2,
        color:palette.BaseBlue,
        fontFamily:'Graphik-Regular'
    },
    titleHeaderText: {
        color:palette.Blue,
        fontSize:12,
        fontFamily:'Graphik-Regular',
        marginLeft:4
    },
    
    imageIcon:{
        width:14,
        height:14,
        resizeMode:'contain'
    },
    imageIconRect:{
        width:14,
        height:14,
        marginLeft:21,
        resizeMode:'contain'
    },
    imageDescriptionHeader: {
        width:48,
        height:48,
        resizeMode:'contain'
    },
    descriptiveHeaderText: {
        fontSize:22,
        color:palette.Gray,
        fontFamily:'Graphik-Regular',
        lineHeight:37,
        width:230
    },
    positioner: {
        marginHorizontal:24
    },
    imageHeader: {
        
        marginRight:23,
        width:24,
        height:24,
        resizeMode:'contain'
    },
    textHeaderCont: {
        alignItems:'center',
        flexDirection:'row',
        marginTop:55
    },
    descriptiveHeaderCont: {
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:32
    }
   
})