import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useFonts } from "expo-font";

const Details = ({ route, navigation }) => {
  const { item } = route.params;
  console.log(item);
  const [loaded] = useFonts({
    MontSB: require("../assets/fonts/Montserrat-SemiBold.ttf"),
    MontB: require("../assets/fonts/Montserrat-Bold.ttf"),
    MontReg: require("../assets/fonts/Montserrat-Regular.ttf"),
    MontMed: require("../assets/fonts/Montserrat-Medium.ttf"),
  });

  if (!loaded) {
    return null;
  }

  const renderIngredientsItem = ({ item }) => {
    return (
      <View
        style={[
          styles.ingredientItemWrapper,
          {
            marginLeft: item.id == 1 ? 20 : 0,
          },
        ]}
      >
        <Image source={item.image} style={styles.ingredientImage} />
      </View>
    );
  };

  return (
    <View style={styles.conatainer}>
      {/* header */}
      <SafeAreaView>
        <View style={styles.headerWrapper}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.headerLeft}>
              <Feather name="chevron-left" size={12} color={colors.textDark} />
            </View>
          </TouchableOpacity>
          <View style={styles.headerRight}>
            <MaterialCommunityIcons
              name="star"
              size={12}
              color={colors.white}
            />
          </View>
        </View>
      </SafeAreaView>
      <ScrollView>
        {/* titles */}
        <View style={styles.titlesWrapper}>
          <Text style={styles.title}>{item.title}</Text>
        </View>

        {/* price */}

        <View style={styles.priceWrapper}>
          <Text style={styles.price}>${item.price} </Text>
        </View>

        {/* pizza info */}

        <View style={styles.infoWrapper}>
          <View style={styles.infoLeftWrapper}>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Size</Text>
              <Text style={styles.infoItemText}>
                {item.sizeName}
                {item.sizeNumber}"
              </Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Crust</Text>
              <Text style={styles.infoItemText}>{item.crust}</Text>
            </View>
            <View style={styles.infoItemWrapper}>
              <Text style={styles.infoItemTitle}>Delivery In</Text>
              <Text style={styles.infoItemText}>{item.deliveryTime} min</Text>
            </View>
          </View>
          <View style={styles.infoRightWrapper}>
            <Image source={item.image} style={styles.itemImage} />
          </View>
        </View>
        {/* ingredients */}
        <View style={styles.ingredientsWrapper}>
          <Text style={styles.ingredientsTitle}>Ingredients</Text>
          <View style={styles.ingredientsListWrapper}>
            <FlatList
              data={item.ingredients}
              renderItem={renderIngredientsItem}
              keyExtractor={(item) => item.id}
              horizontal={true}
              showHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        {/* order button */}
        <TouchableOpacity onPress={() => alert("your order has been placed")}>
          <View style={styles.orderWrapper}>
            <Text style={styles.orderText}>Place an order</Text>
            <Feather name="chevron-right" size={18} color={colors.black} />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
  },
  headerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerLeft: {
    borderColor: colors.textLight,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  headerRight: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
  },
  titlesWrapper: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontFamily: "MontSB",
    fontSize: 32,
    width: "50%",
  },
  priceWrapper: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  price: {
    color: colors.price,
    fontFamily: "MontSB",
    fontSize: 32,
  },
  infoWrapper: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infoLeftWrapper: { paddingLeft: 20 },
  infoItemWrapper: { marginBottom: 20 },
  infoItemTitle: {
    fontFamily: "MontMed",
    fontSize: 14,
    color: colors.textLight,
  },
  infoItemText: {
    fontFamily: "MontSB",
    fontSize: 18,
    color: colors.textDark,
  },

  itemImage: {
    resizeMode: "contain",
    marginLeft: 50,
  },
  ingredientsWrapper: {
    marginTop: 40,
  },
  ingredientsTitle: {
    paddingHorizontal: 20,
    fontFamily: "MontB",
    fontSize: 16,
    color: colors.textDark,
  },
  ingredientsListWrapper: {
    paddingVertical: 20,
  },
  ingredientItemWrapper: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
    marginRight: 15,
    borderRadius: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  ingredientImage: {
    resizeMode: "contain",
  },
  orderWrapper: {
    marginTop: 60,
    marginHorizontal: 20,
    paddingVertical: 25,
    backgroundColor: colors.primary,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  orderText: {
    fontFamily: "MontB",
    fontSize: 14,
    marginRight: 10,
  },
});
export default Details;
