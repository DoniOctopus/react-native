import MainContainer from "../../shared/components/MainContainer";
import {ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import {useState} from "react";
import AppBackground from "../../shared/components/AppBackground";
import TitleLabel from "../../shared/components/TitleLabel";
import FormInput from "../../shared/components/FormInput";
import FormPassword from "../../shared/components/FormPassword";
import FormButton from "../../shared/components/FormButton";

const LoginPage = ()=>{
    const [userName , onChangeUserName ] = useState('');
    const [password , onChangePassword ] = useState('');
    return(
        <MainContainer>
                <AppBackground>
                    <View style={styles.header}>
                    <TitleLabel subTitle text ='Welcome !'/>
                </View>
                <View style={styles.form}>
                    <FormInput placeholder="Input Your Email" onChangeValue={onChangeUserName} value={userName}/>
                    <FormPassword placeholder="Input Your Password" onChangeValue={onChangePassword} value={password}/>
                    <FormButton label="Login" onClick={() =>{}}/>
                </View>
                </AppBackground>
        </MainContainer>
    )
}
const  styles = StyleSheet.create({
    header:{
        flex : 1,
        justifyContent : 'flex-end',
        alignItems : "flex-start",
        marginLeft : 16,
        marginBottom : 16
    },
    form : {
        alignItems : 'stretch',
        flex : 2
    },
})

export default LoginPage;