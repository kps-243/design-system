import {View, StyleSheet} from 'react-native'
import { TextXL, TextM } from '../components/text'
import { colors } from '../constants/colors';
import { raduis } from '../constants/radius';
import { margin } from '../constants/magin';
import { iconSize } from '../constants/iconSize';

const CARD_PADDING = 14;

export const Card = ({title, description, color, logo}) => {
    const Logo = logo
    return(
        <View style={[styles.card, { backgroundColor: color }]}>
            <View style={styles.cardContent}>
            <Logo width={iconSize.MEDUIM} height={iconSize.MEDUIM} color={color} />
              <View style={styles.textContainer}>
              <TextXL>{title}</TextXL>
              <TextM>{description}</TextM>
            </View>      
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: 140,
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
})