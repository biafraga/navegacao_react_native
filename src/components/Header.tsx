import { View } from "react-native";

//React.ReactNode -> é um tipo que representa qualquer coisa que possa ser renderizada pelo React, como elementos, componentes, strings, números, etc.

export default function Header({ children } : { children: React.ReactNode}){
    return(
        <View style={{
            width: '100%', 
            flexDirection: 'row', 
            justifyContent: 'space-between', //Direção Horizontal
            alignItems: 'center', //Direção vertical
            marginBottom: 54,
            }}>
                {children}

        </View>
    )
}