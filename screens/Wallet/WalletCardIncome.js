
import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const WalletCardIncome = () => {
  return (
    <View style={[styles.walletNoData, styles.iconLayout2]}>
      <View style={[styles.menu, styles.menuLayout]}>
        <Pressable style={styles.iconLayout1} onPress={() => {}}>
          <Image
            style={[styles.icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/menu.png")}
          />
        </Pressable>
        <Text style={[styles.thuNov19, styles.cardsTypo]}>Thu, Nov 19</Text>
        <Image
          style={styles.iconLayout1}
          resizeMode="cover"
          source={require("../assets/notification.png")}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.goalLayout}>
          <Image
            style={[styles.localAtmIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/local-atm.png")}
          />
          <Text style={[styles.budget1, styles.budget1SpaceBlock]}>Budget</Text>
        </View>
        <View style={[styles.goal, styles.goalLayout]}>
          <Image
            style={[styles.savingsIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/savings.png")}
          />
          <Text style={[styles.budget1, styles.budget1SpaceBlock]}>Goal</Text>
        </View>
        <View style={[styles.goal, styles.goalLayout]}>
          <Image
            style={[styles.assessmentIcon, styles.buttonLayout]}
            resizeMode="cover"
            source={require("../assets/assessment.png")}
          />
          <Text style={[styles.budget1, styles.budget1SpaceBlock]}>
            Dashboard
          </Text>
        </View>
        <View style={[styles.goal, styles.goalLayout]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.wallet1, styles.textTypo]}>Wallet</Text>
        </View>
      </View>
      <Pressable
        style={[styles.horizontalContainer, styles.horizontalContainerFlexBox2]}
        onPress={() => {}}
      >
        <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={[styles.addIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
          <Text style={[styles.button1, styles.amTypo]}>Add new</Text>
          <Image
            style={[styles.addIcon1, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add1.png")}
          />
        </View>
      </Pressable>
      <View style={styles.walletNoDataChild} />
      <View
        style={[
          styles.horizontalContainer1,
          styles.horizontalContainerFlexBox2,
        ]}
      >
        <Text style={[styles.cards, styles.cardsTypo]}>{`Transactions `}</Text>
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={[styles.addIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add2.png")}
          />
          <Text style={[styles.button1, styles.amTypo]}>Add new</Text>
          <Image
            style={[styles.addIcon1, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add3.png")}
          />
        </View>
      </View>
      <Pressable
        style={[
          styles.horizontalContainer2,
          styles.horizontalContainerFlexBox2,
        ]}
        onPress={() => {}}
      >
        <Text style={[styles.cards, styles.cardsTypo]}>Income</Text>
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={[styles.addIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add4.png")}
          />
          <Text style={[styles.button1, styles.amTypo]}>Add new</Text>
          <Image
            style={[styles.addIcon1, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add5.png")}
          />
        </View>
      </Pressable>
      <View style={[styles.header, styles.menuLayout]}>
        <View style={styles.amParent}>
          <Text style={[styles.am, styles.amTypo]}>{`7:30 AM `}</Text>
          <View style={styles.wifiParent}>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={[styles.signalCellularAltIcon, styles.addIconLayout]}
              resizeMode="cover"
              source={require("../assets/signal-cellular-alt.png")}
            />
            <Image
              style={[styles.signalCellularAltIcon, styles.addIconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-5-bar.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.card, styles.cardLayout]}>
        <View style={[styles.card1, styles.cardLayout]}>
          <LinearGradient
            style={[styles.textInput, styles.cardLayout]}
            locations={[0, 1]}
            colors={["#00014f", "#3a6073"]}
            useAngle={true}
            angle={90}
          />
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../assets/image.png")}
          />
          <View style={styles.button6}>
            <Text style={[styles.wellsFargo, styles.wellsFargoTypo]}>
              WELLS FARGO
            </Text>
            <Text style={[styles.exp1226, styles.textTypo]}>Exp. 12/26</Text>
            <View style={styles.switchContainer}>
              <Image
                style={[styles.switchContainerIcon, styles.mastercardPosition]}
                resizeMode="cover"
                source={require("../assets/switch-container.png")}
              />
              <Text style={[styles.mastercard, styles.mastercardPosition]}>
                Mastercard
              </Text>
            </View>
            <Image
              style={styles.imageIcon1}
              resizeMode="cover"
              source={require("../assets/image1.png")}
            />
            <View style={styles.textInput1}>
              <Text style={[styles.text, styles.textTypo]}>
                3570-0003-3256-2022
              </Text>
            </View>
            <View style={styles.textInput2} />
          </View>
        </View>
      </View>
      <View style={[styles.transactionCard, styles.transactionCardBorder]}>
        <View style={styles.horizontalContainer3}>
          <View style={styles.horizontalContainerFlexBox1}>
            <View style={styles.transaction}>
              <Image
                style={styles.switchContainerIcon1}
                resizeMode="cover"
                source={require("../assets/switch-container1.png")}
              />
              <Image
                style={[styles.budgetIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/budget.png")}
              />
            </View>
            <View style={styles.horizontalContainer5}>
              <View
                style={[
                  styles.horizontalContainer6,
                  styles.horizontalContainerFlexBox,
                ]}
              >
                <Text style={[styles.superStore, styles.amTypo]}>Walmart</Text>
                <Image
                  style={styles.editIcon}
                  resizeMode="cover"
                  source={require("../assets/edit.png")}
                />
              </View>
              <View style={styles.paragraphContainer}>
                <Text style={styles.nov08}>Nov 10</Text>
                <Text style={[styles.text1, styles.amTypo]}>$100</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.transactionCard1, styles.transactionCardBorder]}>
        <View
          style={[
            styles.horizontalContainer7,
            styles.horizontalContainerFlexBox1,
          ]}
        >
          <View style={styles.horizontalContainer8}>
            <View style={styles.transaction}>
              <Image
                style={styles.switchContainerIcon2}
                resizeMode="cover"
                source={require("../assets/switch-container2.png")}
              />
              <Image
                style={[styles.mapsHomeWorkIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/maps-home-work.png")}
              />
            </View>
            <View style={styles.horizontalContainer5}>
              <View style={styles.horizontalContainerFlexBox}>
                <Text style={[styles.superStore, styles.amTypo]}>
                  Property rent
                </Text>
                <Image
                  style={styles.editIcon}
                  resizeMode="cover"
                  source={require("../assets/edit1.png")}
                />
              </View>
              <View style={styles.paragraphContainer}>
                <Text style={styles.nov08}>{`Nov 18 `}</Text>
                <Text style={[styles.text1, styles.amTypo]}>$2000</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.textInputContainer}>
          <View style={styles.textInput3} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    width: "100%",
    overflow: "hidden",
  },
  menuLayout: {
    width: 360,
    position: "absolute",
    backgroundColor: "#fff",
  },
  cardsTypo: {
    fontSize: 16,
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  iconLayout: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  budget1SpaceBlock: {
    marginTop: 4,
    fontSize: 10,
  },
  goalLayout: {
    height: 48,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  buttonLayout: {
    borderRadius: 8,
    overflow: "hidden",
  },
  textTypo: {
    color: "#fff",
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  horizontalContainerFlexBox2: {
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  addIconLayout: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  amTypo: {
    fontSize: 14,
    fontFamily: "Roboto-Regular",
  },
  cardLayout: {
    height: 173,
    width: 272,
    position: "absolute",
  },
  wellsFargoTypo: {
    fontWeight: "500",
    color: "#fff",
    textAlign: "left",
  },
  mastercardPosition: {
    left: 5,
    position: "absolute",
  },
  transactionCardBorder: {
    paddingVertical: 12,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    borderRadius: 8,
    paddingHorizontal: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  iconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  horizontalContainerFlexBox: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  horizontalContainerFlexBox1: {
    width: 287,
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  thuNov19: {
    opacity: 0.9,
    textAlign: "center",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  menu: {
    top: 32,
    paddingHorizontal: 20,
    paddingVertical: 4,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    marginLeft: -180,
    width: 360,
  },
  localAtmIcon: {
    height: 26,
  },
  budget1: {
    color: "#a5c8fc",
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  savingsIcon: {
    overflow: "hidden",
  },
  goal: {
    marginLeft: 48,
  },
  assessmentIcon: {
    height: 24,
    width: 24,
  },
  vectorIcon: {
    height: 18,
    width: 19,
  },
  wallet1: {
    marginTop: 4,
    fontSize: 10,
  },
  footer: {
    bottom: 0,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: "#125a93",
    height: 72,
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  cards: {
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    flex: 1,
  },
  addIcon: {
    height: 20,
  },
  button1: {
    color: "#125a93",
    marginLeft: 8,
    textAlign: "center",
  },
  addIcon1: {
    display: "none",
    marginLeft: 8,
    height: 20,
  },
  button: {
    padding: 8,
    height: 40,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  horizontalContainer: {
    top: 80,
    left: 20,
  },
  walletNoDataChild: {
    top: 521,
    left: 8,
    width: 352,
    height: 0,
    position: "absolute",
  },
  horizontalContainer1: {
    top: 335,
    left: 20,
  },
  horizontalContainer2: {
    top: 500,
    left: 23,
  },
  am: {
    textAlign: "right",
    color: "#0c0c0c",
  },
  wifiIcon: {
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  signalCellularAltIcon: {
    marginLeft: 8,
    height: 20,
  },
  wifiParent: {
    width: 90,
    paddingHorizontal: 10,
    paddingVertical: 0,
    marginLeft: 186,
    height: 20,
    flexDirection: "row",
  },
  amParent: {
    marginTop: -9.67,
    top: "50%",
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  header: {
    height: 32,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  textInput: {
    borderRadius: 4,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  imageIcon: {
    left: 12,
    width: 219,
    height: 124,
    opacity: 0.2,
    top: 0,
    position: "absolute",
  },
  wellsFargo: {
    fontFamily: "Roboto-Medium",
    textTransform: "capitalize",
    fontSize: 12,
    left: 0,
    top: 0,
    position: "absolute",
  },
  exp1226: {
    top: 118,
    fontSize: 9,
    opacity: 0.4,
    textTransform: "capitalize",
    left: 0,
    position: "absolute",
  },
  switchContainerIcon: {
    width: 32,
    height: 19,
    top: 0,
  },
  mastercard: {
    top: 21,
    fontSize: 6,
    fontFamily: "Inter-Medium",
    fontWeight: "500",
    color: "#fff",
    textAlign: "left",
  },
  switchContainer: {
    left: 184,
    width: 42,
    height: 30,
    top: 0,
    position: "absolute",
  },
  imageIcon1: {
    top: 38,
    height: 29,
    width: 40,
    left: 0,
    position: "absolute",
  },
  text: {
    fontSize: 11,
    textTransform: "capitalize",
  },
  textInput1: {
    top: 93,
    paddingHorizontal: 0,
    paddingVertical: 1,
    left: 0,
    flexDirection: "row",
    position: "absolute",
  },
  textInput2: {
    left: 172,
    width: 54,
    top: 0,
    height: 26,
    position: "absolute",
  },
  button6: {
    top: 23,
    width: 226,
    height: 127,
    left: 23,
    position: "absolute",
  },
  card1: {
    borderRadius: 15,
    left: 0,
    top: 0,
    overflow: "hidden",
  },
  card: {
    top: 128,
    left: 39,
  },
  switchContainerIcon1: {
    width: 38,
    height: 38,
    zIndex: 0,
  },
  budgetIcon: {
    top: 7,
    left: 6,
    height: 24,
    width: 24,
  },
  transaction: {
    flexDirection: "row",
  },
  superStore: {
    textAlign: "left",
    color: "#0c0c0c",
    flex: 1,
  },
  editIcon: {
    width: 16,
    height: 16,
  },
  horizontalContainer6: {
    alignItems: "center",
  },
  nov08: {
    color: "#adadad",
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    flex: 1,
  },
  text1: {
    marginLeft: 8,
    textAlign: "left",
    color: "#0c0c0c",
  },
  paragraphContainer: {
    width: 242,
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  horizontalContainer5: {
    height: 36,
    marginLeft: 8,
    justifyContent: "space-between",
  },
  horizontalContainer3: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  transactionCard: {
    top: 395,
    borderColor: "#cbcbcb",
    width: 321,
    justifyContent: "flex-end",
    left: 23,
  },
  switchContainerIcon2: {
    zIndex: 0,
    width: 40,
    height: 40,
  },
  mapsHomeWorkIcon: {
    marginTop: -13,
    marginLeft: -13,
    top: "50%",
    height: 26,
    width: 26,
    overflow: "hidden",
    left: "50%",
  },
  horizontalContainer8: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  horizontalContainer7: {
    justifyContent: "flex-end",
  },
  textInput3: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
  },
  textInputContainer: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  transactionCard1: {
    marginLeft: -159,
    top: 560,
    borderColor: "#80aadb",
    width: 319,
    left: "50%",
  },
  walletNoData: {
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
    width: "100%",
  },
});

export default WalletCardIncome;
