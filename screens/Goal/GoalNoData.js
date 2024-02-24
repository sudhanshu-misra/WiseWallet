import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, Text, View } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";

const GoalNoData = () => {
  return (
    <View style={[styles.goalNoData, styles.iconLayout1]}>
      <View style={[styles.menu, styles.menuFlexBox]}>
        <Pressable style={styles.menu1Layout} onPress={() => {}}>
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require('../assets/menu.png')}
          />
        </Pressable>
        <Text style={[styles.thuNov19, styles.thuNov19Typo]}>Thu, Nov 19</Text>
        <Image
          style={styles.menu1Layout}
          contentFit="cover"
          source={require("../assets/notification.png")}
        />
      </View>
      <View style={[styles.header, styles.menuSpaceBlock]}>
        <View style={[styles.amParent, styles.amParentPosition]}>
          <Text style={[styles.am, styles.amTypo]}>{`7:30 AM `}</Text>
          <View style={styles.wifiParent}>
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi.png")}
            />
            <Image
              style={styles.signalCellularAltIcon}
              contentFit="cover"
              source={require("../assets/signal-cellular-alt.png")}
            />
            <Image
              style={styles.signalCellularAltIcon}
              contentFit="cover"
              source={require("../assets/battery-5-bar.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.horizontalContainer, styles.menuFlexBox]}>
        <Text style={styles.goals}>Goals</Text>
        <View style={styles.button}>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add.png")}
          />
          <Text style={[styles.button1, styles.amTypo]}>Add new</Text>
          <Image
            style={styles.addIcon1}
            contentFit="cover"
            source={require("../assets/add1.png")}
          />
        </View>
      </View>
      <View style={[styles.dashboardNoUser, styles.dashboardLayout]}>
        <Image
          style={styles.footerIcon}
          contentFit="cover"
          source={require("../assets/footer-icon.png")}
        />
        <Text
          style={[styles.transactionDetailsWill, styles.thuNov19Typo]}
        >{`Your goals details 
will be displayed here`}</Text>
      </View>
      <View style={styles.horizontalContainer1}>
        <Text style={styles.goals}>{`Transactions `}</Text>
        <View style={styles.button}>
          <Image
            style={styles.addIcon}
            contentFit="cover"
            source={require("../assets/add.png")}
          />
          <Text style={[styles.button1, styles.amTypo]}>Add new</Text>
          <Image
            style={styles.addIcon1}
            contentFit="cover"
            source={require("../assets/add2.png")}
          />
        </View>
      </View>
      <View style={[styles.dashboardNoUser1, styles.dashboardLayout]}>
        <Image
          style={styles.footerIcon}
          contentFit="cover"
          source={require("../assets/footer-icon1.png")}
        />
        <Text
          style={[styles.transactionDetailsWill, styles.thuNov19Typo]}
        >{`Your transactions details 
will be displayed here`}</Text>
      </View>
      <View style={styles.segmentedPicker}>
        <View style={styles.goalBorder}>
          <Image
            style={styles.menu1Layout}
            contentFit="cover"
            source={require("../assets/goal.png")}
          />
          <Text style={[styles.vacation, styles.textTypo]}>{`furniture `}</Text>
          <Text style={[styles.text, styles.textTypo]}>$ 0</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.menu1Layout}
            contentFit="cover"
            source={require("../assets/goal1.png")}
          />
          <Text style={[styles.vacation, styles.textTypo]}>Vacation</Text>
          <Text style={[styles.text, styles.textTypo]}>$ 0</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.menu1Layout}
            contentFit="cover"
            source={require("../assets/goal2.png")}
          />
          <Text style={[styles.vacation, styles.textTypo]}>Graduation</Text>
          <Text style={[styles.text, styles.textTypo]}>$ 0</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.menu1Layout}
            contentFit="cover"
            source={require("../assets/goal3.png")}
          />
          <Text style={[styles.vacation, styles.textTypo]}>Buy boat</Text>
          <Text style={[styles.text, styles.textTypo]}>$ 0</Text>
        </View>
        <View style={[styles.goalSmall1, styles.goalBorder]}>
          <Image
            style={styles.menu1Layout}
            contentFit="cover"
            source={require("../assets/goal4.png")}
          />
          <Text style={[styles.vacation, styles.textTypo]}>Buy house</Text>
          <Text style={[styles.text, styles.textTypo]}>$ 0</Text>
        </View>
      </View>
      <View style={styles.verticalContainer}>
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/button.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/switch.png")}
        />
        <Image
          style={[styles.switchIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/switch1.png")}
        />
        <Image
          style={[styles.switchIcon2, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/switch2.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/container.png")}
        />
        <Image
          style={[styles.buttonIcon1, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/button1.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/switch3.png")}
        />
        <Image
          style={[styles.buttonIcon, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/slider.png")}
        />
        <Image
          style={[styles.buttonIcon2, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/button2.png")}
        />
        <Image
          style={[styles.switchIcon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/slider1.png")}
        />
        <Text style={[styles.text5, styles.text5Typo]}>0%</Text>
        <Text style={[styles.buyHome, styles.text5Typo]}>Buy home</Text>
        <Image
          style={[
            styles.verticalContainerChild,
            styles.verticalContainerLayout,
          ]}
          contentFit="cover"
          source={require("../assets/line-148.png")}
        />
        <Image
          style={[styles.verticalContainerItem, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/line-149.png")}
        />
        <Text style={[styles.text6, styles.text6Typo]}>0%</Text>
        <Text style={[styles.furniture, styles.text6Typo]}>{`Furniture `}</Text>
        <Image
          style={[styles.verticalContainerInner, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/line-150.png")}
        />
        <Text style={[styles.text7, styles.text7Typo]}>0%</Text>
        <Text
          style={[styles.graduation, styles.text7Typo]}
        >{`Graduation `}</Text>
        <Text style={[styles.text8, styles.text8Typo]}>0%</Text>
        <Text style={[styles.buyBoat, styles.text8Typo]}>Buy boat</Text>
        <Image
          style={[styles.lineIcon, styles.iconContainerLayout]}
          contentFit="cover"
          source={require("../assets/line-151.png")}
        />
        <Text style={[styles.text9, styles.text9Typo]}>0%</Text>
        <Image
          style={[
            styles.verticalContainerChild1,
            styles.verticalContainerLayout,
          ]}
          contentFit="cover"
          source={require("../assets/line-147.png")}
        />
        <View style={[styles.paragraphContainer, styles.amParentPosition]}>
          <Text style={[styles.goal, styles.goalTypo]}>goal</Text>
          <Text style={[styles.text10, styles.goalTypo]}>$00.0</Text>
        </View>
        <Text style={[styles.vacation5, styles.text9Typo]}>Vacation</Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.parentLayout}>
          <Image
            style={styles.localAtmIcon}
            contentFit="cover"
            source={require("../assets/local-atm.png")}
          />
          <Text style={[styles.budget, styles.goal1Typo]}>Budget</Text>
        </View>
        <View style={[styles.savingsParent, styles.parentLayout]}>
          <Image
            style={[styles.savingsIcon, styles.menu1Layout]}
            contentFit="cover"
            source={require("../assets/savings.png")}
          />
          <Text style={[styles.goal1, styles.goal1Typo]}>Goal</Text>
        </View>
        <View style={[styles.savingsParent, styles.parentLayout]}>
          <Image
            style={styles.assessmentIcon}
            contentFit="cover"
            source={require("../assets/assessment.png")}
          />
          <Text style={[styles.budget, styles.goal1Typo]}>Dashboard</Text>
        </View>
        <View style={[styles.savingsParent, styles.parentLayout]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text style={[styles.budget, styles.goal1Typo]}>Wallet</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    width: "100%",
    overflow: "hidden",
  },
  menuFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  thuNov19Typo: {
    fontFamily: FontFamily.overline,
    fontSize: FontSize.titleM_size,
    textAlign: "center",
  },
  menuSpaceBlock: {
    marginLeft: -180,
    width: 360,
    backgroundColor: Color.white,
  },
  amParentPosition: {
    top: "50%",
    position: "absolute",
  },
  amTypo: {
    fontSize: FontSize.button_size,
    fontFamily: FontFamily.overline,
  },
  dashboardLayout: {
    paddingBottom: Padding.p_5xl,
    paddingHorizontal: Padding.p_xs,
    height: 130,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.background,
    paddingTop: Padding.p_base,
    width: 320,
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    position: "absolute",
  },
  textTypo: {
    marginTop: 4,
    fontSize: FontSize.bodyS_size,
    textAlign: "center",
    fontFamily: FontFamily.overline,
  },
  goalBorder: {
    height: 77,
    borderWidth: 1,
    borderColor: Color.colorLightgray,
    borderStyle: "solid",
    backgroundColor: Color.background,
    padding: Padding.p_5xs,
    borderRadius: Border.br_5xs,
    alignItems: "center",
  },
  iconContainerLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconLayout: {
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
    color: Color.iconHouse,
    fontSize: FontSize.overline_size,
    textAlign: "center",
    fontFamily: FontFamily.overline,
    position: "absolute",
  },
  verticalContainerLayout: {
    height: "8.71%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text6Typo: {
    height: 11,
    color: Color.iconFurniture,
    fontSize: FontSize.overline_size,
    textAlign: "left",
    fontFamily: FontFamily.overline,
    position: "absolute",
  },
  text7Typo: {
    color: Color.iconGraduation,
    fontSize: FontSize.overline_size,
    textAlign: "left",
    fontFamily: FontFamily.overline,
    position: "absolute",
  },
  text8Typo: {
    color: Color.iconBoat,
    fontSize: FontSize.overline_size,
    textAlign: "left",
    fontFamily: FontFamily.overline,
    position: "absolute",
  },
  text9Typo: {
    color: Color.iconVacation,
    fontSize: FontSize.overline_size,
    textAlign: "left",
    fontFamily: FontFamily.overline,
    position: "absolute",
  },
  goalTypo: {
    textTransform: "capitalize",
    textAlign: "center",
    color: Color.black,
    fontFamily: FontFamily.overline,
  },
  goal1Typo: {
    fontSize: FontSize.overline_size,
    marginTop: 4,
    textAlign: "left",
    fontFamily: FontFamily.overline,
  },
  parentLayout: {
    height: 48,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  menu1Layout: {
    height: 24,
    width: 24,
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  thuNov19: {
    opacity: 0.9,
    textAlign: "center",
    color: Color.black,
  },
  menu: {
    top: 32,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_9xs,
    width: 360,
    marginLeft: -180,
    backgroundColor: Color.white,
  },
  am: {
    textAlign: "right",
    color: Color.black,
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
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: 0,
    marginLeft: 186,
    height: 20,
    flexDirection: "row",
  },
  amParent: {
    marginTop: -9.67,
    left: 20,
    flexDirection: "row",
  },
  header: {
    top: 0,
    height: 32,
    width: 360,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  goals: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.overline,
    fontSize: FontSize.titleM_size,
    flex: 1,
  },
  addIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button1: {
    color: Color.primary,
    marginLeft: 8,
    textAlign: "center",
  },
  addIcon1: {
    display: "none",
    marginLeft: 8,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  button: {
    padding: Padding.p_5xs,
    justifyContent: "center",
    height: 40,
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  horizontalContainer: {
    marginLeft: -159,
    top: 297,
    width: 317,
  },
  footerIcon: {
    width: 40,
    height: 40,
  },
  transactionDetailsWill: {
    alignSelf: "stretch",
    marginTop: 8,
    color: Color.neutral400,
    textAlign: "center",
  },
  dashboardNoUser: {
    marginLeft: -160,
    top: 421,
    left: "50%",
  },
  horizontalContainer1: {
    top: 567,
    width: 320,
    left: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  dashboardNoUser1: {
    top: 611,
    left: 20,
  },
  vacation: {
    display: "flex",
    width: 61,
    justifyContent: "center",
    color: Color.black,
    alignItems: "center",
  },
  text: {
    color: Color.neutral400,
  },
  goalSmall1: {
    marginLeft: 4,
  },
  segmentedPicker: {
    top: 337,
    left: 0,
    justifyContent: "center",
    flexDirection: "row",
    width: 360,
    position: "absolute",
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
    top: "0%",
    bottom: "1.37%",
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
    top: 38,
    left: 259,
    width: 28,
  },
  buyHome: {
    top: 57,
    left: 230,
    width: 69,
  },
  verticalContainerChild: {
    width: "27.01%",
    top: "37.53%",
    right: "72.99%",
    bottom: "53.76%",
    left: "0%",
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
    top: 110,
    left: 267,
    width: 20,
  },
  furniture: {
    top: 128,
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
    top: 175,
    left: 228,
    width: 32,
  },
  graduation: {
    top: 194,
    left: 216,
    width: 58,
  },
  text8: {
    top: 66,
    left: 16,
    width: 24,
    color: Color.iconBoat,
  },
  buyBoat: {
    top: 85,
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
    top: 183,
    left: 51,
    width: 35,
  },
  verticalContainerChild1: {
    width: "25.72%",
    top: "24.98%",
    right: "5.46%",
    bottom: "66.31%",
    left: "68.81%",
  },
  goal: {
    fontSize: 13,
    width: 44,
  },
  text10: {
    fontSize: 11,
    width: 42,
    marginTop: 6,
  },
  paragraphContainer: {
    marginTop: -13.58,
    marginLeft: -21.87,
    alignItems: "center",
    left: "50%",
  },
  vacation5: {
    top: 202,
    left: 38,
    width: 60,
  },
  verticalContainer: {
    height: "26.42%",
    width: "83.82%",
    top: "9.2%",
    right: "8.13%",
    bottom: "64.38%",
    left: "8.06%",
    position: "absolute",
  },
  localAtmIcon: {
    width: 26,
    height: 26,
    overflow: "hidden",
  },
  budget: {
    color: Color.primary100,
  },
  savingsIcon: {
    overflow: "hidden",
  },
  goal1: {
    color: Color.white,
  },
  savingsParent: {
    marginLeft: 48,
  },
  assessmentIcon: {
    borderRadius: Border.br_5xs,
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
    borderTopLeftRadius: Border.br_xs,
    borderTopRightRadius: Border.br_xs,
    backgroundColor: Color.primary,
    height: 72,
    paddingHorizontal: Padding.p_base,
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_base,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: 360,
    left: "50%",
    marginLeft: -180,
    position: "absolute",
  },
  goalNoData: {
    height: 837,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
    width: "100%",
  },
});

export default GoalNoData;
