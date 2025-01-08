import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './constants/colors';
import { raduis } from './constants/radius';
import { padding } from './constants/padding';
import { margin } from './constants/magin';
import {AntDesign, Entypo} from '@expo/vector-icons';
import GeneticIcon from './assets/icons/genetic.svg'
import { TextM, TextXL } from './components/text';

const CARD_PADDING = 14;
export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  })
  return fontsLoaded ? (
    <View style={styles.container}>
      <View style={[styles.card, { backgroundColor: colors.VIOLET }]}>
        <View style={styles.cardContent}>
          <AntDesign name="exclamationcircle" size={32} color={colors.DARK} />  
          <View style={styles.textContainer}>
            <TextXL color={colors.PURPLE}>Hello World</TextXL>
            <TextM>Description ............</TextM>
          </View>      
        </View>
      </View>
      <View style={[styles.card, { backgroundColor: colors.GREY }]}>
        <View style={styles.cardContent}>
          <Entypo name="circle-with-cross" size={32} color={colors.DARK} />
        </View>
      </View>
      <View style={[styles.card, { backgroundColor: colors.PURPLE }]}>
        <View style={styles.cardContent}>
          <GeneticIcon width={32} height={32} color={colors.VIOLET} />
        </View>
      </View>
      <View style={[styles.card, { backgroundColor: colors.YELLOW }]}><View style={styles.cardContent} /></View>
      <View style={[styles.card, { backgroundColor: colors.DARK }]}><View style={styles.cardContent} /></View>
      <StatusBar style="auto" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: padding.HORIZONTAL_SCREEN
  },
  card: {
    width: "100%",
    height: "15%",
    borderWidth: 1,
    marginVertical: margin.VERTICAL_SEPARATOR,
    borderRadius: raduis.MEDIUM,
    padding: CARD_PADDING
  },
  cardContent: {
    width: "100%",
    height: "100%",
    borderRadius: raduis.MEDIUM,
    backgroundColor: colors.LIGHT,
    flexDirection: "row",
    alignItems: "center",
    padding: CARD_PADDING
  },
  textContainer: {
    flex: 1,
    height: "100%",
    paddingLeft: CARD_PADDING,
    justifyContent: "space-evenly"
  }
});