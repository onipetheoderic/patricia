import { PlatformColor, StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';
import {palette} from './theme';

export default StyleSheet.create({
    bottomCardLongSuccess: {
        width:'100%', 
        height:'100%', //(17, 19, 23, 0.03
        backgroundColor:'white', 
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        zIndex:10011,
    },
    root: {
        flex: 1, 
        padding: 20
    },
    titledd: {
        textAlign: 'center', 
        fontSize: 30
    },
    codeFieldRoot: {
        marginTop: 20
    },
    cell: {
        width: 64,
        height: 64,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#0267FF',
    },
    bottomCard: {
        width:'100%', 
        height:'100%', //(17, 19, 23, 0.03
        backgroundColor:'rgba(17, 19, 23,0.14)', 
        position:'absolute',
        justifyContent:'flex-end',
        zIndex:100,
    },
    backShadow: {
        backgroundColor:palette.PaleBlue,
        position:'absolute', 
        top:49,
        alignSelf:'center', 
        width:'90%', 
        height:61,
        zIndex:101, 
        borderRadius:16, 
    },

    bottomCardLong: {
        width:'100%', 
        height:'100%', //(17, 19, 23, 0.03
        backgroundColor:palette.BaseBlue, 
        position:'absolute',
        justifyContent:'flex-end',
        zIndex:1001,
    },
    bottomCardCurveContLong: {
        width:'100%', 
        borderTopLeftRadius:16, 
        borderTopRightRadius:16, 
        height:'90%', 
      
        backgroundColor:palette.White,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    bottomCardCurveCont: {
        width:'100%', 
        borderTopLeftRadius:16, 
        borderTopRightRadius:16, 
        height:'60%', 
        backgroundColor:palette.White,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        
        elevation: 24,
    },
    overallCont: {
        flex:1
    },
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
    lineText: {
        fontSize:14,
        fontFamily:'Graphik-Regular',
        marginLeft:8
    },
    imageIcon:{
        width:14,
        height:14,
        resizeMode:'contain'
    },
    iconPositioner: {
        position:'absolute', 
        right:0
    },
    contain: {
        marginLeft:25,
        marginRight:25
    },
    smallText:{
        color:'#575A65', 
        fontSize:10,
        fontFamily:'Graphik-Regular',
    },
    smallText2:{
        color:'#575A65', 
        fontSize:12,
        fontFamily:'Graphik-Regular',
    },
    bigText:{
        color:'#323643', 
        fontSize:18,
        fontFamily:'Graphik-Regular',
    },
    longCont: {
        width:'90%',     
        marginTop:16,
        height:58,        
    },
    smallTextCard: {
        fontSize:8,
        fontFamily:'Graphik-Regular',
        color:'#575A65', 
    },
    addressText: {
        fontSize:12,
        fontFamily:'Graphik-Regular',
        color:'#575A65', 
    },
    addressText2: {
        fontSize:10,
        fontFamily:'Graphik-Regular',
        color:'#575A65', 
    },
    addressText3: {
        fontSize:12,
        marginTop:2,
        fontFamily:'Graphik-Regular',
        color:'#575A65', 
    },
    grayArea22: {
        backgroundColor: palette.GrayOne,
        height:88,
        width:'100%',
        marginTop:24,
        borderRadius: 8,
        flexDirection:'row',
        
    },
    grayArea: {
        backgroundColor: palette.GrayOne,
        height:56,
        width:'100%',
        marginTop:24,
        borderRadius: 8,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    grayArea2: {
        backgroundColor: palette.GrayOne,
        height:90,
        width:'100%',
        marginTop:24,
        borderRadius: 8,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    longText: {
        fontSize:18,
       
       
        lineHeight:29,
       
        color:palette.Gray,
        fontFamily:'Graphik-Regular',
    },
    imageIcon16:{
        width:16,
        height:16,
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
    bottomWrap: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'flex-end'
    },
    bottomWrapLong: {
        flexDirection:'row', 
        alignItems:'center', 
        justifyContent:'center'
    },
    positioner: {
        marginHorizontal:24
    },
    lineStyle: {
        borderColor:palette.Line35, 
        borderWidth:1, 
        width:'100%', 
    },
    formContSpacer: {
        marginTop:7,
        marginLeft:25,
        marginRight:25
    },
    transactionTextLong: {
        height:27, 
        marginTop:13, 
        marginBottom:12, 
        fontFamily:'Graphik-Regular',
        fontSize:16, 
        marginRight:22
    },
    transactionText: {
        height:27, 
        marginTop:13, 
        marginBottom:12, 
        fontFamily:'Graphik-Regular',
        fontSize:16, 
        marginRight:22
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