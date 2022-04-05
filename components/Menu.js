import { Text, View, Button, ScrollView} from "react-native";
import { menu } from "../menuExample";
import MenuSection from "./MenuSection";

export default Menu = ({ route, navigation }) => {
  const { name } = route.params;
  const menuDetails = menu.menu;
  return (
    <ScrollView>
      {menuDetails.map((menu) => {
        return (
          <View key={menu}>
            <Text>{menu.menu_name}</Text>
            {menu.menu_sections.map((section) => {
              return (
                  <Button 
                    title={section.section_name} 
                    onPress={() => navigation.navigate('Menu Section', {
                        section: section
                    })} />
              )
            })}
          </View>
        );
      })}
    </ScrollView>
  );
};
