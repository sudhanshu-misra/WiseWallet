
import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";

const Earning = () => {
  return (
    <View style={[styles.earning, styles.iconLayout1]}>
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
        <Text style={[styles.earning1, styles.textTypo]}>Earning</Text>
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
                    style={styles.switchContainerIcon}
                    resizeMode="cover"
                    source={require("../assets/switch-container.png")}
                  />
                  <Image
                    style={[styles.mapsHomeWorkIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/maps-home-work.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.horizontalContainer4}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Property rent
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
                    <Text style={[styles.text, styles.textTypo]}>$2000</Text>
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
                    style={styles.switchContainerIcon}
                    resizeMode="cover"
                    source={require("../assets/switch-container1.png")}
                  />
                  <Image
                    style={[styles.mapsHomeWorkIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/work-outline.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.horizontalContainer4}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Salary
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
                    <Text style={[styles.text, styles.textTypo]}>$6500</Text>
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
                    style={styles.switchContainerIcon}
                    resizeMode="cover"
                    source={require("../assets/switch-container2.png")}
                  />
                  <Image
                    style={[styles.mapsHomeWorkIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/stacked-line-chart.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.horizontalContainer4}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Stock market
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
                    <Text style={[styles.text, styles.textTypo]}>$500</Text>
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
                    style={styles.switchContainerIcon}
                    resizeMode="cover"
                    source={require("../assets/switch-container3.png")}
                  />
                  <Image
                    style={[styles.mapsHomeWorkIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/family-restroom.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.horizontalContainer4}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Child benefit
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
                    <Text style={[styles.text, styles.textTypo]}>$280</Text>
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
                    style={styles.switchContainerIcon}
                    resizeMode="cover"
                    source={require("../assets/switch-container4.png")}
                  />
                  <Image
                    style={[styles.requestQuoteIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/request-quote.png")}
                  />
                </View>
                <View style={styles.horizontalContainer3}>
                  <View style={styles.horizontalContainer4}>
                    <Text style={[styles.superStore, styles.textTypo]}>
                      Bank interest
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
                    <Text style={[styles.text, styles.textTypo]}>$120</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Pressable style={styles.arrowForward} onPress={() => {}}>
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
    width: 360,
    left: "50%",
    position: "absolute",
  },
  amParentPosition: {
    left: 20,
    flexDirection: "row",
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
  iconPosition: {
    zIndex: 1,
    height: 26,
    width: 26,
    position: "absolute",
    overflow: "hidden",
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
  earning1: {
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
    top: 89,
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  switchContainerIcon: {
    width: 40,
    zIndex: 0,
    height: 40,
  },
  mapsHomeWorkIcon: {
    marginTop: -13,
    marginLeft: -13,
    top: "50%",
    left: "50%",
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
  horizontalContainer4: {
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
  transactionCard1: {
    marginTop: 8,
  },
  requestQuoteIcon: {
    top: 7,
    left: 7,
  },
  inputForm1: {
    alignItems: "center",
    width: 360,
  },
  inputForm: {
    top: 137,
    alignItems: "center",
    width: 360,
    left: "50%",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  arrowForward: {
    left: 19,
    top: 49,
    width: 24,
    height: 24,
    position: "absolute",
  },
  earning: {
    height: 796,
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default Earning;
