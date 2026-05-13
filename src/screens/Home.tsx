import { Text, View } from "react-native";
import Header from "../components/Header";
import ButtonIcon from "../components/ButtonIcon";
import Title from "../components/Title";
import { useNavigation } from "@react-navigation/native";

//Tela inicial
export default function Home (){
    const navigation = useNavigation(); //Um hook pronto do react para navegação
    return (
        <View style={{flex:1, padding: 32, paddingTop: 54}}>
            <Header>
                <Title>Home</Title>
                <ButtonIcon 
                    icon="add-circle"
                    onPress={() => navigation.navigate("product") }
                />
            </Header>
        </View>
    );
}