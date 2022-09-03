import {useTheme} from "../context/ThemeContext";
import {Text, View} from "react-native";

const HeaderPageLabel = ({text}) =>{
    const theme = useTheme();
    return(
        <View>
            <Text style={[theme.text.subtitle, {fontWeight : 'bold'}]}>{text}</Text>
        </View>
    )
}
export default HeaderPageLabel;