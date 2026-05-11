import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

// Quando formos utilizar o MaterialIcon, obrigatoriamente precisaremos tipar a variável que está guardando o "nome" do icone(icon), 
// indicando através da propriedade glyphMap que aquele que assegura que aquele valor realmente está na biblioteca do MaterialIcons.
type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap
}

export default function ButtonIcon({ icon, ...rest } : Props){
    return(
        <TouchableOpacity {...rest}>
            <MaterialIcons
                name={icon}
                size={24}
            />
        </TouchableOpacity>
    )
}