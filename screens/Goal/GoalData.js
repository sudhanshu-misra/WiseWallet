
import * as React from "react";
import { Image, StyleSheet, Pressable, Text, View } from "react-native";

const GoalData = () => {
  return (
    <View style={styles.goal}>
      <View style={styles.menu}>
        <Pressable style={styles.iconLayout3} onPress={() => {}}>
          <Image
            style={[styles.icon, styles.iconLayout2]}
            resizeMode="cover"
            source={require("../assets/menu.png")}
          />
        </Pressable>
        <Text style={[styles.thuNov19, styles.goalsTypo]}>Thu, Nov 19</Text>
        <Image
          style={styles.iconLayout3}
          resizeMode="cover"
          source={require("../assets/notification.png")}
        />
      </View>
      <View style={[styles.header, styles.headerPosition]}>
        <View style={styles.amParent}>
          <Text style={styles.am}>{`7:30 AM `}</Text>
          <View style={styles.wifiParent}>
            <Image
              style={styles.wifiIcon}
              resizeMode="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.signalCellularAltIcon}
              resizeMode="cover"
              source={require("../assets/signal-cellular-alt.png")}
            />
            <Image
              style={styles.signalCellularAltIcon}
              resizeMode="cover"
              source={require("../assets/battery-5-bar.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.horizontalContainer, styles.containerPosition]}>
        <Text style={[styles.goals, styles.goalsTypo]}>Goals</Text>
        <View style={styles.button}>
          <Image
            style={styles.addIcon}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
          <Text style={styles.button1}>Add new</Text>
          <Image
            style={styles.addIcon1}
            resizeMode="cover"
            source={require("../assets/add1.png")}
          />
        </View>
      </View>
      <View style={[styles.segmentedPicker, styles.containerPosition]}>
        <View style={styles.goalBorder}>
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/goal.png")}
          />
          <Text
            style={[styles.vacation, styles.leftFlexBox]}
          >{`furniture `}</Text>
          <Text style={[styles.text, styles.textClr]}>$ 4000</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/goal1.png")}
          />
          <Text style={[styles.vacation, styles.leftFlexBox]}>Vacation</Text>
          <Text style={[styles.text, styles.textClr]}>$ 3000</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/goal2.png")}
          />
          <Text style={[styles.vacation, styles.leftFlexBox]}>Graduation</Text>
          <Text style={[styles.text, styles.textClr]}>$ 5000</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/goal3.png")}
          />
          <Text style={[styles.vacation, styles.leftFlexBox]}>Buy boat</Text>
          <Text style={[styles.text, styles.textClr]}>$ 8000</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.iconLayout3}
            resizeMode="cover"
            source={require("../assets/goal4.png")}
          />
          <Text style={[styles.vacation, styles.leftFlexBox]}>Buy house</Text>
          <Text style={[styles.text, styles.textClr]}>$ 2000</Text>
        </View>
      </View>
      <View style={styles.verticalContainer}>
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/button.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/switch.png")}
        />
        <Image
          style={[styles.switchIcon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/switch1.png")}
        />
        <Image
          style={[styles.switchIcon2, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/switch2.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/switch3.png")}
        />
        <Image
          style={[styles.buttonIcon1, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/button1.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/switch4.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/container.png")}
        />
        <Image
          style={[styles.buttonIcon2, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/button2.png")}
        />
        <Image
          style={[styles.switchIcon1, styles.iconLayout1]}
          resizeMode="cover"
          source={require("../assets/switch5.png")}
        />
        <Text style={[styles.text5, styles.text5Typo]}>75%</Text>
        <Text style={[styles.buyHome, styles.text5Typo]}>Buy home</Text>
        <Image
          style={[
            styles.verticalContainerChild,
            styles.goalReviewCard1Position,
          ]}
          resizeMode="cover"
          source={require("../assets/line-148.png")}
        />
        <Image
          style={[styles.verticalContainerItem, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/line-149.png")}
        />
        <Text style={[styles.text6, styles.text6Typo]}>20%</Text>
        <Text style={[styles.furniture, styles.text6Typo]}>{`Furniture `}</Text>
        <Image
          style={[styles.verticalContainerInner, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/line-150.png")}
        />
        <Text style={[styles.text7, styles.text7Typo]}>60%</Text>
        <Text
          style={[styles.graduation, styles.text11Layout]}
        >{`Graduation `}</Text>
        <Text style={[styles.text8, styles.text8Typo]}>20%</Text>
        <Text style={[styles.buyBoat, styles.text8Typo]}>Buy boat</Text>
        <Image
          style={[styles.lineIcon, styles.iconContainerLayout]}
          resizeMode="cover"
          source={require("../assets/line-151.png")}
        />
        <Text style={[styles.text9, styles.text9Typo]}>65%</Text>
        <Image
          style={[
            styles.verticalContainerChild1,
            styles.verticalContainerLayout,
          ]}
          resizeMode="cover"
          source={require("../assets/line-147.png")}
        />
        <View style={styles.paragraphContainer}>
          <Text style={[styles.goal1, styles.goal1Typo]}>goal</Text>
          <Text style={[styles.text10, styles.goal1Typo]}>$40000</Text>
        </View>
        <Text style={[styles.vacation5, styles.text9Typo]}>Vacation</Text>
      </View>
      <View style={[styles.verticalContainer1, styles.containerPosition]}>
        <View style={[styles.goalReviewCard, styles.goalReviewCardBorder]}>
          <View style={[styles.goalReviewCard1, styles.goalCardBorder]}>
            <Image
              style={styles.goalReviewCardChild}
              resizeMode="cover"
              source={require("../assets/group-26086148.png")}
            />
            <View style={[styles.frameParent, styles.budgetIconPosition]}>
              <View style={styles.buyHouseParent}>
                <Text style={[styles.buyHouse, styles.goalsFlexBox]}>
                  Buy house
                </Text>
                <Text style={[styles.text11, styles.text11Layout]}>$20000</Text>
                <Pressable
                  style={[styles.edit, styles.editLayout]}
                  onPress={() => {}}
                >
                  <Image
                    style={styles.iconLayout2}
                    resizeMode="cover"
                    source={require("../assets/edit.png")}
                  />
                </Pressable>
              </View>
              <View style={styles.startOct2023Parent}>
                <Text style={styles.startOct2023}>Start: Oct 2023</Text>
                <Text style={[styles.left, styles.leftTypo]}>$5000 Left</Text>
                <Text style={[styles.endNov2024, styles.leftTypo]}>
                  End: Nov 2024
                </Text>
                <Text style={[styles.total15000Saving, styles.leftTypo]}>
                  Total $15000 saving
                </Text>
              </View>
            </View>
          </View>
          <View
            style={[styles.setUpBudgetCardseeMore, styles.goalReviewCardBorder]}
          >
            <View style={[styles.checkBoxSingIn, styles.checkSpaceBlock]}>
              <Image
                style={[styles.checkBoxIcon, styles.iconLayout3]}
                resizeMode="cover"
                source={require("../assets/check-box.png")}
              />
              <Image
                style={[styles.editIcon, styles.editLayout]}
                resizeMode="cover"
                source={require("../assets/edit1.png")}
              />
              <Text style={styles.button1}>Edit</Text>
            </View>
            <View style={[styles.checkBoxSingIn1, styles.checkSpaceBlock]}>
              <Image
                style={[styles.checkBoxIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/check-box1.png")}
              />
              <Image
                style={[styles.editIcon, styles.editLayout]}
                resizeMode="cover"
                source={require("../assets/edit2.png")}
              />
              <Text style={[styles.rememberMe1, styles.textClr]}>Delete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.goalReviewCard2, styles.goalCardBorder]}>
          <Image
            style={styles.goalReviewCardChild}
            resizeMode="cover"
            source={require("../assets/switch6.png")}
          />
          <View style={[styles.frameParent, styles.budgetIconPosition]}>
            <View style={styles.buyHouseParent}>
              <Text style={[styles.buyHouse, styles.goalsFlexBox]}>
                Buy boat
              </Text>
              <Text style={[styles.text11, styles.text11Layout]}>$8000</Text>
              <Image
                style={[styles.edit, styles.editLayout]}
                resizeMode="cover"
                source={require("../assets/edit3.png")}
              />
            </View>
            <View style={styles.startOct2023Parent}>
              <Text style={styles.startOct2023}>Start: Oct 2023</Text>
              <Text style={[styles.left, styles.leftTypo]}>$6400 Left</Text>
              <Text style={[styles.endNov2024, styles.leftTypo]}>
                End: Dec 2024
              </Text>
              <Text style={[styles.total15000Saving, styles.leftTypo]}>
                Total $1600 Saving
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.goalReviewCard2, styles.goalCardBorder]}>
          <Image
            style={styles.goalReviewCardChild}
            resizeMode="cover"
            source={require("../assets/switch7.png")}
          />
          <View style={[styles.frameParent, styles.budgetIconPosition]}>
            <View style={styles.buyHouseParent}>
              <Text style={[styles.buyHouse, styles.goalsFlexBox]}>
                Vacation
              </Text>
              <Text style={[styles.text11, styles.text11Layout]}>$3000</Text>
              <Pressable
                style={[styles.edit, styles.editLayout]}
                onPress={() => {}}
              >
                <Image
                  style={styles.iconLayout2}
                  resizeMode="cover"
                  source={require("../assets/edit4.png")}
                />
              </Pressable>
            </View>
            <View style={styles.startOct2023Parent}>
              <Text style={styles.startOct2023}>Start: June 2023</Text>
              <Text style={[styles.left, styles.leftTypo]}>$1000 Left</Text>
              <Text style={[styles.endNov2024, styles.leftTypo]}>
                End: Dec 2024
              </Text>
              <Text style={[styles.total15000Saving, styles.leftTypo]}>
                Total $2000 Saving
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.button2, styles.checkSpaceBlock]}>
          <Image
            style={styles.vuesaxoutlinearrowSquareLeIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinearrowsquareleft.png")}
          />
          <Text style={styles.button1}>View all</Text>
          <Image
            style={styles.vuesaxoutlinelogoutIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinelogout.png")}
          />
        </View>
      </View>
      <View style={[styles.container2, styles.headerPosition]}>
        <View style={styles.transactionCardBorder}>
          <View style={styles.containerFlexBox}>
            <View style={styles.verticalContainer3}>
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
                  style={[styles.budgetIcon, styles.budgetIconPosition]}
                  resizeMode="cover"
                  source={require("../assets/budget.png")}
                />
              </View>
              <View style={styles.horizontalContainer3}>
                <View style={styles.container3}>
                  <Text style={[styles.buyHouse, styles.goalsFlexBox]}>
                    Super store
                  </Text>
                  <Pressable style={styles.editLayout} onPress={() => {}}>
                    <Image
                      style={styles.iconLayout2}
                      resizeMode="cover"
                      source={require("../assets/edit5.png")}
                    />
                  </Pressable>
                </View>
                <View
                  style={[styles.paragraphContainer3, styles.containerFlexBox]}
                >
                  <Text
                    style={[styles.nov08, styles.textClr]}
                  >{`Nov 18 `}</Text>
                  <Text style={styles.text14}>$55</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.transactionCard1, styles.transactionCardBorder]}>
          <View style={styles.containerFlexBox}>
            <View style={styles.verticalContainer3}>
              <View style={styles.transaction1}>
                <Image
                  style={styles.switchContainerLayout}
                  resizeMode="cover"
                  source={require("../assets/switch-container1.png")}
                />
              </View>
              <View style={styles.horizontalContainer3}>
                <View style={styles.container3}>
                  <Text style={[styles.buyHouse, styles.goalsFlexBox]}>
                    Macy's
                  </Text>
                  <Pressable style={styles.editLayout} onPress={() => {}}>
                    <Image
                      style={styles.iconLayout2}
                      resizeMode="cover"
                      source={require("../assets/edit6.png")}
                    />
                  </Pressable>
                </View>
                <View
                  style={[styles.paragraphContainer3, styles.containerFlexBox]}
                >
                  <Text
                    style={[styles.nov08, styles.textClr]}
                  >{`Nov 11 `}</Text>
                  <Text style={styles.text14}>$150</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.button2, styles.checkSpaceBlock]}>
          <Image
            style={styles.vuesaxoutlinearrowSquareLeIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinearrowsquareleft1.png")}
          />
          <Text style={styles.button1}>View all</Text>
          <Image
            style={styles.vuesaxoutlinelogoutIcon}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinelogout1.png")}
          />
        </View>
      </View>
      <Pressable
        style={[styles.horizontalContainer6, styles.containerPosition]}
        onPress={() => {}}
      >
        <Text style={[styles.goals, styles.goalsTypo]}>{`Transactions `}</Text>
        <View style={styles.button}>
          <Image
            style={styles.addIcon}
            resizeMode="cover"
            source={require("../assets/add2.png")}
          />
          <Text style={styles.button1}>Add new</Text>
          <Image
            style={styles.addIcon1}
            resizeMode="cover"
            source={require("../assets/add3.png")}
          />
        </View>
      </Pressable>
      <View style={styles.footer}>
        <View style={styles.parentLayout}>
          <Image
            style={[styles.localAtmIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/local-atm.png")}
          />
          <Text style={[styles.budget, styles.goal2Typo]}>Budget</Text>
        </View>
        <View style={[styles.savingsParent, styles.parentLayout]}>
          <Image
            style={[styles.savingsIcon, styles.iconLayout3]}
            resizeMode="cover"
            source={require("../assets/savings.png")}
          />
          <Text style={[styles.goal2, styles.goal2Typo]}>Goal</Text>
        </View>
        <View style={[styles.savingsParent, styles.parentLayout]}>
          <Image
            style={styles.assessmentIcon}
            resizeMode="cover"
            source={require("../assets/assessment.png")}
          />
          <Text style={[styles.budget, styles.goal2Typo]}>Dashboard</Text>
        </View>
        <View style={[styles.savingsParent, styles.parentLayout]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.budget, styles.goal2Typo]}>Wallet</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  goalsTypo: {
    fontSize: 16,
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  headerPosition: {
    width: 360,
    left: "50%",
    position: "absolute",
  },
  containerPosition: {
    left: "50%",
    position: "absolute",
  },
  leftFlexBox: {
    display: "flex",
    alignItems: "center",
  },
  textClr: {
    color: "#adadad",
    fontFamily: "Roboto-Regular",
  },
  goalBorder: {
    height: 77,
    borderWidth: 1,
    borderColor: "#cbcbcb",
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  iconContainerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout1: {
    left: "12.92%",
    right: "14.22%",
    maxHeight: "100%",
    maxWidth: "100%",
    borderRadius: 6,
    width: "72.85%",
    height: "98.63%",
    position: "absolute",
    overflow: "hidden",
  },
  text5Typo: {
    color: "#f89c74",
    fontSize: 10,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  goalReviewCard1Position: {
    left: "0%",
    position: "absolute",
  },
  text6Typo: {
    height: 11,
    color: "#fe88b1",
    fontSize: 10,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  text7Typo: {
    color: "#66c5cc",
    fontSize: 10,
    textAlign: "left",
    position: "absolute",
  },
  text11Layout: {
    width: 58,
    fontFamily: "Roboto-Regular",
  },
  text8Typo: {
    color: "#9eb9f3",
    fontSize: 10,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  text9Typo: {
    color: "#f6cf71",
    fontSize: 10,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  verticalContainerLayout: {
    height: "8.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  goal1Typo: {
    textTransform: "capitalize",
    textAlign: "center",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  goalReviewCardBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  goalCardBorder: {
    padding: 12,
    borderWidth: 1,
    borderColor: "#cbcbcb",
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    borderRadius: 8,
    flexDirection: "row",
  },
  budgetIconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  goalsFlexBox: {
    flex: 1,
    textAlign: "left",
  },
  editLayout: {
    height: 16,
    width: 16,
  },
  leftTypo: {
    marginLeft: 58,
    height: 9,
    fontSize: 10,
    color: "#adadad",
    fontFamily: "Roboto-Regular",
  },
  checkSpaceBlock: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout3: {
    height: 24,
    width: 24,
  },
  iconLayout: {
    height: 26,
    width: 26,
  },
  switchContainerLayout: {
    height: 38,
    width: 38,
  },
  containerFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "row",
  },
  transactionCardBorder: {
    paddingVertical: 12,
    width: 319,
    paddingHorizontal: 16,
    justifyContent: "flex-end",
    borderWidth: 1,
    borderColor: "#cbcbcb",
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  goal2Typo: {
    fontSize: 10,
    marginTop: 4,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  parentLayout: {
    height: 48,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
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
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
    backgroundColor: "#fff",
  },
  am: {
    textAlign: "right",
    fontSize: 14,
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  wifiIcon: {
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  signalCellularAltIcon: {
    marginLeft: 8,
    width: 20,
    height: 20,
    overflow: "hidden",
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
    marginLeft: -181,
    top: 0,
    height: 32,
    overflow: "hidden",
    width: 360,
    backgroundColor: "#fff",
  },
  goals: {
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    flex: 1,
  },
  addIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button1: {
    color: "#125a93",
    marginLeft: 8,
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Roboto-Regular",
  },
  addIcon1: {
    display: "none",
    marginLeft: 8,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button: {
    padding: 8,
    justifyContent: "center",
    height: 40,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  horizontalContainer: {
    marginLeft: -159,
    top: 294,
    width: 317,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  vacation: {
    width: 61,
    marginTop: 4,
    fontSize: 12,
    justifyContent: "center",
    textAlign: "center",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  text: {
    marginTop: 4,
    fontSize: 12,
    textAlign: "center",
  },
  goalSmall1: {
    marginLeft: 4,
  },
  segmentedPicker: {
    marginLeft: -177,
    top: 334,
    width: 356,
    justifyContent: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  buttonIcon: {
    top: "1.02%",
    right: "14.05%",
    bottom: "0.35%",
    left: "13.1%",
    borderRadius: 6,
    width: "72.85%",
    height: "98.63%",
    maxWidth: "100%",
  },
  switchIcon1: {
    bottom: "1.37%",
    top: "0%",
  },
  switchIcon2: {
    top: "0.67%",
    right: "14.44%",
    bottom: "0.7%",
    left: "12.71%",
    borderRadius: 6,
    width: "72.85%",
    height: "98.63%",
    maxWidth: "100%",
  },
  buttonIcon1: {
    top: "0.92%",
    right: "14.55%",
    bottom: "0.46%",
    left: "12.59%",
    borderRadius: 6,
    width: "72.85%",
    height: "98.63%",
    maxWidth: "100%",
  },
  buttonIcon2: {
    top: "1.37%",
    bottom: "0%",
  },
  text5: {
    top: 39,
    left: 259,
    width: 28,
  },
  buyHome: {
    top: 58,
    left: 230,
    width: 69,
  },
  verticalContainerChild: {
    width: "27.01%",
    top: "37.53%",
    right: "72.99%",
    bottom: "53.76%",
    height: "8.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  verticalContainerItem: {
    height: "6.96%",
    width: "27.33%",
    top: "57.39%",
    right: "0.42%",
    bottom: "35.64%",
    left: "72.25%",
  },
  text6: {
    top: 111,
    left: 267,
    width: 20,
  },
  furniture: {
    top: 129,
    left: 251,
    width: 51,
  },
  verticalContainerInner: {
    height: "7.4%",
    width: "30.23%",
    top: "80.19%",
    right: "14.43%",
    bottom: "12.41%",
    left: "55.34%",
  },
  text7: {
    top: 176,
    left: 228,
    width: 32,
    fontFamily: "Roboto-Regular",
  },
  graduation: {
    top: 195,
    left: 216,
    color: "#66c5cc",
    fontSize: 10,
    textAlign: "left",
    position: "absolute",
  },
  text8: {
    top: 67,
    left: 16,
    width: 24,
    color: "#9eb9f3",
  },
  buyBoat: {
    top: 86,
    left: 1,
    width: 60,
  },
  lineIcon: {
    height: "13.49%",
    width: "27.98%",
    top: "76.98%",
    right: "61.75%",
    bottom: "9.53%",
    left: "10.27%",
  },
  text9: {
    top: 184,
    left: 51,
    width: 35,
  },
  verticalContainerChild1: {
    width: "25.72%",
    top: "24.98%",
    right: "5.46%",
    bottom: "66.31%",
    left: "68.81%",
    position: "absolute",
  },
  goal1: {
    fontSize: 13,
    width: 44,
  },
  text10: {
    fontSize: 11,
    width: 42,
    marginTop: 6,
  },
  paragraphContainer: {
    top: 95,
    left: 127,
    alignItems: "center",
    position: "absolute",
  },
  vacation5: {
    top: 203,
    left: 38,
    width: 60,
  },
  verticalContainer: {
    height: "20.57%",
    width: "83.82%",
    top: "6.03%",
    right: "8.13%",
    bottom: "73.4%",
    left: "8.06%",
    position: "absolute",
  },
  goalReviewCardChild: {
    width: 57,
    zIndex: 0,
    height: 57,
  },
  buyHouse: {
    textAlign: "left",
    fontSize: 14,
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  text11: {
    marginLeft: 4,
    textAlign: "right",
    fontSize: 14,
    color: "#0c0c0c",
  },
  edit: {
    marginLeft: 4,
  },
  buyHouseParent: {
    width: 223,
    alignItems: "center",
    flexDirection: "row",
  },
  startOct2023: {
    height: 9,
    fontSize: 10,
    color: "#adadad",
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    flex: 1,
  },
  left: {
    width: 67,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
  },
  endNov2024: {
    width: 73,
    textAlign: "left",
  },
  total15000Saving: {
    width: 94,
    display: "flex",
    alignItems: "center",
    textAlign: "right",
  },
  startOct2023Parent: {
    width: 225,
    flexWrap: "wrap",
    marginTop: 12,
    flexDirection: "row",
  },
  frameParent: {
    top: 12,
    left: 74,
    height: 57,
  },
  goalReviewCard1: {
    right: "0%",
    left: "0%",
    position: "absolute",
    bottom: "0%",
    top: "0%",
    height: "100%",
    width: "100%",
  },
  checkBoxIcon: {
    display: "none",
  },
  editIcon: {
    marginLeft: 8,
  },
  checkBoxSingIn: {
    alignSelf: "stretch",
  },
  checkBoxIcon1: {
    display: "none",
  },
  rememberMe1: {
    marginLeft: 8,
    fontSize: 14,
    textAlign: "center",
  },
  checkBoxSingIn1: {
    alignSelf: "stretch",
    marginTop: 4,
  },
  setUpBudgetCardseeMore: {
    height: "74.07%",
    width: "30.31%",
    top: "13.58%",
    right: "11.25%",
    bottom: "12.35%",
    left: "58.44%",
    borderColor: "#868686",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    display: "none",
    justifyContent: "center",
    borderRadius: 8,
    position: "absolute",
  },
  goalReviewCard: {
    height: 81,
    width: 320,
    borderColor: "#cbcbcb",
    borderWidth: 1,
    borderStyle: "solid",
  },
  goalReviewCard2: {
    marginTop: 8,
    width: 320,
  },
  vuesaxoutlinearrowSquareLeIcon: {
    display: "none",
    width: 20,
    height: 20,
  },
  vuesaxoutlinelogoutIcon: {
    display: "none",
    marginLeft: 8,
    width: 20,
    height: 20,
  },
  button2: {
    marginTop: 8,
    width: 320,
    justifyContent: "center",
    height: 40,
    paddingHorizontal: 8,
    borderRadius: 8,
    overflow: "hidden",
  },
  verticalContainer1: {
    marginLeft: -179,
    top: 418,
    width: 358,
    alignItems: "center",
  },
  switchContainerIcon: {
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
  container3: {
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  nov08: {
    fontSize: 12,
    textAlign: "left",
    flex: 1,
  },
  text14: {
    textAlign: "left",
    marginLeft: 8,
    fontSize: 14,
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  paragraphContainer3: {
    width: 242,
  },
  horizontalContainer3: {
    height: 36,
    marginLeft: 8,
    justifyContent: "space-between",
  },
  verticalContainer3: {
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
  container2: {
    top: 785,
    alignItems: "center",
    marginLeft: -180,
    width: 360,
  },
  horizontalContainer6: {
    marginLeft: -160,
    top: 741,
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  localAtmIcon: {
    overflow: "hidden",
  },
  budget: {
    color: "#a5c8fc",
  },
  savingsIcon: {
    overflow: "hidden",
  },
  goal2: {
    color: "#fff",
  },
  savingsParent: {
    marginLeft: 48,
  },
  assessmentIcon: {
    borderRadius: 8,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  vectorIcon: {
    height: 18,
    width: 19,
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
  goal: {
    height: 1061,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default GoalData;
