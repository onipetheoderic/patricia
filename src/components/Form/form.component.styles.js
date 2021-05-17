import { StyleSheet } from 'react-native';
import { palette } from '../../styles/theme';
export default StyleSheet.create({
    container: {
        width:'100%',
        height:56,
        borderColor:palette.GrayOne,
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
        borderRadius:8
    },
    containerSearch: {
        width:'100%',
        height:32,    
        backgroundColor:palette.Line35,
        alignSelf:'center',
        flexDirection:'row',
        alignItems:'center',
        borderRadius:8
    },
    typeContSearch: {
        height:56,
        width:'5%',
        marginLeft:16,
        alignItems:'center',
        justifyContent:'center'
    },
    rowDirection: {
        flexDirection:'row'
    },
    currency: {
        fontSize:10,
        fontFamily:'Graphik-Regular',
        color:palette.Gray,
        marginLeft:-2
    },
    typeCont: {
      height:56,
      width:'16%',
      alignItems:'center',
      justifyContent:'center'
    },
    formCont: {
        marginLeft:16,
        height:56,
        width:'100%',
    },
    inputCont: {
        
        width:'84%',
        height:56,
        
    },
    textInput: {
        height:56,
        width:'100%',
        fontSize:14,
        fontFamily:'Graphik-Regular',
        color:'red',
       
    },
})