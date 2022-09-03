import {useTheme} from "../context/ThemeContext";
import {Text, View} from "react-native";

const TitleLabel = ({text,subTitle = false}) =>{
    const theme = useTheme();
    return(
        <View>
            {subTitle ? <Text style={theme.text.subtitle}>{text}</Text>
                : <Text style={theme.text.title}> {text}</Text>}
        </View>
    )
}
export default TitleLabel;