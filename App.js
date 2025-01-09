import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, FlatList, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { colors } from './constants/colors';
import { raduis } from './constants/radius';
import { padding } from './constants/padding';
import { margin } from './constants/magin';
import {AntDesign, Entypo} from '@expo/vector-icons';
import GeneticIcon from './assets/icons/genetic.svg'
import { TextM, TextXL } from './components/text';
import { data } from './data';
import { iconSize } from './constants/iconSize';
import { Card } from './components/card';

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  })
  return fontsLoaded ? (
    <SafeAreaView style={styles.container}>
      {/* {
        data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              description={item.description}
              color={item.color}
              logo={item.logo}
            />
          );
        })
      } */}
      <FlatList
        data={data}
        style={styles.listContainer}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            color={item.color}
            title={item.title}
            description={item.description}
            logo={item.logo}
          />
        )}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // paddingHorizontal: padding.HORIZONTAL_SCREEN
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: padding.HORIZONTAL_SCREEN,
    marginTop : 8  // on vient mettre un margin

  },
});