
import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";


const CashTransaction = () => {
  return (
    <View style={[styles.cashTransaction, styles.iconLayout1]}>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={[styles.amParent, styles.amParentPosition]}>
          <Text style={[styles.am, styles.amTypo]}>{`7:30 AM `}</Text>
          <View style={styles.wifiParent}>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={[styles.signalCellularAltIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/signal-cellular-alt.png")}
            />
            <Image
              style={[styles.signalCellularAltIcon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/battery-5-bar.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.horizontalContainer, styles.amParentPosition]}>
        <Text style={[styles.cashTransaction1, styles.textTypo]}>
          Cash transaction
        </Text>
        <View style={styles.button}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/filter-list.png")}
          />
          <Text style={[styles.button1, styles.amTypo]} />
          <Image
            style={[styles.addIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
        </View>
      </View>
      <View style={[styles.inputForm, styles.headerPosition]}>
        <View style={styles.inputForm1}>
          <View style={styles.transactionCardBorder}>
            <View style={styles.containerFlexBox}>
              <View style={styles.horizontalContainer2}>
                <View style={styles.transaction}>
                  <Image
                    style={[
                      styles.switchContainerIcon,
                      styles.switchContainerLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/switch-container.png")}
                  />
                  <Image
                    style={[styles.budgetIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/budget.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.container}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Super store
                    </Text>
                    <Image
                      style={styles.editIcon}
                      resizeMode="cover"
                      source={require("../assets/edit.png")}
                    />
                  </View>
                  <View
                    style={[styles.paragraphContainer, styles.containerFlexBox]}
                  >
                    <Text
                      style={[styles.nov08, styles.textTypo]}
                    >{`Nov 18 `}</Text>
                    <Text style={[styles.text, styles.textTypo]}>$55</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.transactionCard1, styles.transactionCardBorder]}>
            <View style={styles.containerFlexBox}>
              <View style={styles.horizontalContainer2}>
                <View style={styles.transaction1}>
                  <Image
                    style={styles.switchContainerLayout}
                    resizeMode="cover"
                    source={require("../assets/switch-container1.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.container}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Macy's
                    </Text>
                    <Image
                      style={styles.editIcon}
                      resizeMode="cover"
                      source={require("../assets/edit1.png")}
                    />
                  </View>
                  <View
                    style={[styles.paragraphContainer, styles.containerFlexBox]}
                  >
                    <Text
                      style={[styles.nov08, styles.textTypo]}
                    >{`Nov 11 `}</Text>
                    <Text style={[styles.text, styles.textTypo]}>$150</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.transactionCard1, styles.transactionCardBorder]}>
            <View style={styles.containerFlexBox}>
              <View style={styles.horizontalContainer2}>
                <View
                  style={[styles.transaction2, styles.switchContainerLayout]}
                >
                  <Image
                    style={styles.switchContainerIcon2}
                    resizeMode="cover"
                    source={require("../assets/switch-container2.png")}
                  />
                  <Image
                    style={[styles.localGasStationIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/local-gas-station.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.container}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Chevron
                    </Text>
                    <Image
                      style={styles.editIcon}
                      resizeMode="cover"
                      source={require("../assets/edit2.png")}
                    />
                  </View>
                  <View
                    style={[styles.paragraphContainer, styles.containerFlexBox]}
                  >
                    <Text style={[styles.nov08, styles.textTypo]}>Nov 10</Text>
                    <Text style={[styles.text, styles.textTypo]}>$65</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.transactionCard1, styles.transactionCardBorder]}>
            <View style={styles.containerFlexBox}>
              <View style={styles.horizontalContainer2}>
                <View style={styles.transaction}>
                  <Image
                    style={styles.switchContainerIcon3}
                    resizeMode="cover"
                    source={require("../assets/switch-container3.png")}
                  />
                  <Image
                    style={[styles.grassIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/grass.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.container}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Shell
                    </Text>
                    <Image
                      style={styles.editIcon}
                      resizeMode="cover"
                      source={require("../assets/edit3.png")}
                    />
                  </View>
                  <View
                    style={[styles.paragraphContainer, styles.containerFlexBox]}
                  >
                    <Text style={[styles.nov08, styles.textTypo]}>Nov 10</Text>
                    <Text style={[styles.text, styles.textTypo]}>$20</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.transactionCard1, styles.transactionCardBorder]}>
            <View style={styles.containerFlexBox}>
              <View style={styles.horizontalContainer2}>
                <View style={styles.transaction}>
                  <Image
                    style={[
                      styles.switchContainerIcon,
                      styles.switchContainerLayout,
                    ]}
                    resizeMode="cover"
                    source={require("../assets/switch-container4.png")}
                  />
                  <Image
                    style={[styles.budgetIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/budget1.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.container}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Walmart
                    </Text>
                    <Image
                      style={styles.editIcon}
                      resizeMode="cover"
                      source={require("../assets/edit4.png")}
                    />
                  </View>
                  <View
                    style={[styles.paragraphContainer, styles.containerFlexBox]}
                  >
                    <Text style={[styles.nov08, styles.textTypo]}>Nov 10</Text>
                    <Text style={[styles.text, styles.textTypo]}>$80</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={[styles.transactionCard1, styles.transactionCardBorder]}>
            <View style={styles.containerFlexBox}>
              <View style={styles.horizontalContainer2}>
                <View
                  style={[styles.transaction2, styles.switchContainerLayout]}
                >
                  <Image
                    style={styles.switchContainerIcon2}
                    resizeMode="cover"
                    source={require("../assets/switch-container5.png")}
                  />
                  <Image
                    style={[styles.localGasStationIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/local-gas-station1.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.container}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Shell
                    </Text>
                    <Image
                      style={styles.editIcon}
                      resizeMode="cover"
                      source={require("../assets/edit5.png")}
                    />
                  </View>
                  <View
                    style={[styles.paragraphContainer, styles.containerFlexBox]}
                  >
                    <Text style={[styles.nov08, styles.textTypo]}>Nov 10</Text>
                    <Text style={[styles.text, styles.textTypo]}>$80</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.arrowForward, styles.budgetIconLayout]}
        onPress={() => {}}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/arrow-forward.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  headerPosition: {
    marginLeft: -180,
    position: "absolute",
    width: 360,
    left: "50%",
  },
  amParentPosition: {
    left: 20,
    position: "absolute",
  },
  amTypo: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  iconLayout: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  textTypo: {
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  switchContainerLayout: {
    height: 38,
    width: 38,
  },
  iconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  containerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  transactionCardBorder: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    width: 319,
    borderWidth: 1,
    borderColor: "#cbcbcb",
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    justifyContent: "flex-end",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  budgetIconLayout: {
    height: 24,
    width: 24,
  },
  am: {
    textAlign: "right",
    color: "#0c0c0c",
  },
  wifiIcon: {
    width: 19,
    height: 19,
    overflow: "hidden",
  },
  signalCellularAltIcon: {
    marginLeft: 8,
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
    flexDirection: "row",
    top: "50%",
  },
  header: {
    top: 0,
    height: 32,
    width: 360,
    left: "50%",
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  cashTransaction1: {
    fontSize: 16,
    color: "#0c0c0c",
    flex: 1,
  },
  button1: {
    color: "#125a93",
    textAlign: "center",
    marginLeft: 8,
  },
  addIcon: {
    display: "none",
    marginLeft: 8,
  },
  button: {
    justifyContent: "center",
    padding: 8,
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  horizontalContainer: {
    top: 88,
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  switchContainerIcon: {
    zIndex: 0,
  },
  budgetIcon: {
    left: 6,
    height: 24,
    width: 24,
    top: 7,
    zIndex: 1,
  },
  transaction: {
    flexDirection: "row",
  },
  superStore: {
    color: "#0c0c0c",
    fontSize: 14,
    textAlign: "left",
    flex: 1,
  },
  editIcon: {
    width: 16,
    height: 16,
  },
  container: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nov08: {
    fontSize: 12,
    color: "#adadad",
    flex: 1,
  },
  text: {
    marginLeft: 8,
    color: "#0c0c0c",
    fontSize: 14,
    textAlign: "left",
  },
  paragraphContainer: {
    width: 242,
  },
  horizontalContainer3: {
    height: 36,
    justifyContent: "space-between",
    marginLeft: 8,
  },
  horizontalContainer2: {
    width: 287,
    alignItems: "center",
    flexDirection: "row",
  },
  transaction1: {
    flexDirection: "row",
  },
  transactionCard1: {
    marginTop: 8,
  },
  switchContainerIcon2: {
    width: 39,
    height: 39,
    zIndex: 0,
  },
  localGasStationIcon: {
    left: 7,
    width: 25,
    height: 25,
    top: 7,
    zIndex: 1,
    overflow: "hidden",
  },
  transaction2: {
    flexDirection: "row",
  },
  switchContainerIcon3: {
    width: 40,
    zIndex: 0,
    height: 40,
  },
  grassIcon: {
    marginTop: -13,
    marginLeft: -13,
    width: 26,
    height: 26,
    top: "50%",
    left: "50%",
    overflow: "hidden",
  },
  inputForm1: {
    alignItems: "center",
    width: 360,
  },
  inputForm: {
    top: 136,
    alignItems: "center",
    width: 360,
    left: "50%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowForward: {
    top: 48,
    left: 20,
    position: "absolute",
  },
  cashTransaction: {
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default CashTransaction;
