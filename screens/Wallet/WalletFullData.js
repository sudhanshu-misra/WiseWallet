
import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const WalletFullData = () => {
  return (
    <View style={styles.wallet}>
      <View style={[styles.header, styles.card4Position]}>
        <View style={[styles.amParent, styles.horizontalContainerPosition]}>
          <Text style={[styles.am, styles.amClr]}>{`7:30 AM `}</Text>
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
      <View style={styles.menu}>
        <Pressable style={styles.iconLayout1} onPress={() => {}}>
          <Image
            style={styles.icon}
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
      <View style={styles.slider}>
        <Image
          style={styles.sliderChild}
          resizeMode="cover"
          source={require("../assets/ellipse-2.png")}
        />
        <View style={[styles.sliderItem, styles.sliderSpaceBlock]} />
        <Image
          style={[styles.sliderInner, styles.sliderSpaceBlock]}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
      </View>
      <View
        style={[styles.horizontalContainer, styles.horizontalContainerPosition]}
      >
        <Text style={[styles.cards, styles.cardsTypo]}>Cards</Text>
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={[styles.addIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add.png")}
          />
          <Text style={styles.button1}>Add new</Text>
          <Image
            style={[styles.addIcon1, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add1.png")}
          />
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.cardLayout2}>
          <View style={[styles.card1, styles.cardLayout1]}>
            <LinearGradient
              style={[styles.container1, styles.textInputPosition]}
              locations={[0, 1]}
              colors={["#6c009a", "#2d004d"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={styles.ratingIcon}
              resizeMode="cover"
              source={require("../assets/rating.png")}
            />
            <Image
              style={[styles.imageIcon, styles.imageIconLayout]}
              resizeMode="cover"
              source={require("../assets/image.png")}
            />
            <Text style={[styles.text, styles.expTypo]}>
              2021 0213 2025 2591
            </Text>
            <Text style={[styles.saraMiller, styles.expTypo]}>sara miller</Text>
            <Text style={[styles.text1, styles.textTypo1]}>12/12</Text>
            <Text style={[styles.exp, styles.expTypo]}>exp</Text>
            <Text style={[styles.creditCard, styles.expTypo]}>Credit Card</Text>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
        <View style={[styles.card2, styles.cardLayout]}>
          <View style={[styles.card3, styles.cardLayout]}>
            <LinearGradient
              style={[styles.textInput, styles.textLayout1]}
              locations={[0, 1]}
              colors={["#00014f", "#3a6073"]}
              useAngle={true}
              angle={90}
            />
            <Image
              style={[styles.imageIcon1, styles.imageIcon1Position]}
              resizeMode="cover"
              source={require("../assets/image1.png")}
            />
            <View style={styles.button2}>
              <Text style={[styles.wellsFargo, styles.expTypo]}>
                WELLS FARGO
              </Text>
              <Text style={[styles.exp1226, styles.expPosition]}>
                Exp. 12/26
              </Text>
              <View style={styles.switchContainer}>
                <Image
                  style={[
                    styles.switchContainerIcon,
                    styles.mastercardPosition,
                  ]}
                  resizeMode="cover"
                  source={require("../assets/switch-container.png")}
                />
                <Text style={[styles.mastercard, styles.text3Typo]}>
                  Mastercard
                </Text>
              </View>
              <Image
                style={[styles.imageIcon2, styles.imageIconLayout]}
                resizeMode="cover"
                source={require("../assets/image2.png")}
              />
              <View style={[styles.textInput1, styles.textSpaceBlock]}>
                <Text style={[styles.text2, styles.textTypo1]}>
                  3570-0003-3256-2022
                </Text>
              </View>
              <View style={[styles.textInput2, styles.textLayout]} />
            </View>
          </View>
        </View>
        <View style={[styles.card2, styles.cardLayout]}>
          <View style={[styles.tooltipContainer1, styles.cardLayout]}>
            <View style={[styles.card3, styles.cardLayout]}>
              <LinearGradient
                style={[styles.textInput, styles.textLayout1]}
                locations={[0, 1]}
                colors={["#00014f", "#3a6073"]}
                useAngle={true}
                angle={90}
              />
              <Image
                style={styles.imageIcon3}
                resizeMode="cover"
                source={require("../assets/image3.png")}
              />
              <View style={[styles.textInput4, styles.imageIcon1Position]} />
              <View style={styles.button2}>
                <View style={[styles.textInput5, styles.textLayout]} />
                <Text style={[styles.exp12261, styles.text3Typo]}>
                  Exp. 12/26
                </Text>
                <Image
                  style={styles.switchContainer}
                  resizeMode="cover"
                  source={require("../assets/text-input.png")}
                />
                <Image
                  style={[styles.imageIcon4, styles.imageIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/image4.png")}
                />
                <View style={styles.textInput6} />
                <View style={[styles.textInput7, styles.textSpaceBlock]}>
                  <Text style={[styles.text3, styles.text3Typo]}>
                    35-070-0003-3256-2022
                  </Text>
                </View>
                <Text style={[styles.chaseBank, styles.textTypo1]}>
                  CHASE BANK
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View
        style={[styles.horizontalContainer1, styles.transactionCardPosition]}
      >
        <Text
          style={[styles.cards, styles.cardsTypo]}
        >{`Cash transactions `}</Text>
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={[styles.addIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add2.png")}
          />
          <Text style={styles.button1}>Add new</Text>
          <Image
            style={[styles.addIcon1, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add3.png")}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <View style={styles.transactionCard}>
          <View style={styles.transactionCard1}>
            <View
              style={[styles.transactionCardInner, styles.frameChildFlexBox]}
            >
              <View style={styles.transactionParent}>
                <View style={styles.transaction}>
                  <Image
                    style={styles.transactionChild}
                    resizeMode="cover"
                    source={require("../assets/group-12339.png")}
                  />
                  <Image
                    style={[styles.wineBarIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/wine-bar.png")}
                  />
                </View>
                <View style={styles.frameParent}>
                  <View
                    style={[
                      styles.superStoreParent,
                      styles.checkBoxSingInFlexBox,
                    ]}
                  >
                    <Text style={[styles.superStore, styles.amClr]}>LCBO</Text>
                    <Image
                      style={styles.editIconLayout}
                      resizeMode="cover"
                      source={require("../assets/edit.png")}
                    />
                  </View>
                  <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                    <Text style={[styles.nov08, styles.nov08Clr]}>Nov 20</Text>
                    <Text style={[styles.text4, styles.amClr]}>$145</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.transactionCardChild}>
              <View style={[styles.frameChild, styles.frameChildFlexBox]} />
            </View>
          </View>
          <View style={styles.setUpBudgetCardseeMore}>
            <View style={[styles.checkBoxSingIn, styles.buttonSpaceBlock]}>
              <Image
                style={[styles.checkBoxIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/check-box.png")}
              />
              <Image
                style={[styles.editIcon1, styles.editIconLayout]}
                resizeMode="cover"
                source={require("../assets/edit1.png")}
              />
              <Text style={styles.button1}>Edit</Text>
            </View>
            <View style={[styles.checkBoxSingIn, styles.buttonSpaceBlock]}>
              <Image
                style={[styles.checkBoxIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/check-box1.png")}
              />
              <Image
                style={[styles.editIcon1, styles.editIconLayout]}
                resizeMode="cover"
                source={require("../assets/edit2.png")}
              />
              <Text style={[styles.rememberMe1, styles.nov08Clr]}>Delete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transactionCard2, styles.button6FlexBox]}>
          <View style={[styles.verticalContainer, styles.frameChildFlexBox]}>
            <View
              style={[
                styles.verticalContainer1,
                styles.verticalContainer1Layout,
              ]}
            >
              <View style={styles.transaction1}>
                <Image
                  style={styles.transactionLayout}
                  resizeMode="cover"
                  source={require("../assets/switch-container1.png")}
                />
              </View>
              <View style={styles.frameParent}>
                <View
                  style={[
                    styles.horizontalContainer3,
                    styles.checkBoxSingInFlexBox,
                  ]}
                >
                  <Text style={[styles.superStore, styles.amClr]}>Macy's</Text>
                  <Image
                    style={styles.editIconLayout}
                    resizeMode="cover"
                    source={require("../assets/edit3.png")}
                  />
                </View>
                <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                  <Text
                    style={[styles.nov08, styles.nov08Clr]}
                  >{`Nov 11 `}</Text>
                  <Text style={[styles.text4, styles.amClr]}>$150</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.transactionCard2, styles.button6FlexBox]}>
          <View style={[styles.verticalContainer, styles.frameChildFlexBox]}>
            <View
              style={[
                styles.verticalContainer1,
                styles.verticalContainer1Layout,
              ]}
            >
              <View style={[styles.transaction2, styles.transactionLayout]}>
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
              <View style={styles.frameParent}>
                <View
                  style={[
                    styles.horizontalContainer3,
                    styles.checkBoxSingInFlexBox,
                  ]}
                >
                  <Text style={[styles.superStore, styles.amClr]}>Shell</Text>
                  <Image
                    style={styles.editIconLayout}
                    resizeMode="cover"
                    source={require("../assets/edit4.png")}
                  />
                </View>
                <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                  <Text style={[styles.nov08, styles.nov08Clr]}>Nov 10</Text>
                  <Text style={[styles.text4, styles.amClr]}>$80</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.button6, styles.button6FlexBox]}>
          <Image
            style={[
              styles.vuesaxoutlinearrowSquareLeIcon,
              styles.addIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinearrowsquareleft.png")}
          />
          <Text style={styles.button1}>View all</Text>
          <Image
            style={[styles.vuesaxoutlinelogoutIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinelogout.png")}
          />
        </View>
      </View>
      <View style={[styles.verticalContainer2, styles.card4Position]}>
        <Text
          style={[styles.thisCreditCard, styles.cardsTypo]}
        >{`This credit card details:  `}</Text>
        <View style={styles.verticalContainer3}>
          <View style={styles.horizontalContainer7}>
            <View style={styles.paragraphContainer2}>
              <Text style={[styles.creditLine, styles.amClr]}>
                Credit line:
              </Text>
              <Text style={[styles.text7, styles.textTypo]}>$8000</Text>
            </View>
            <View style={styles.paragraphContainer2}>
              <Text style={[styles.dueDate, styles.amClr]}>Due date:</Text>
              <Text style={[styles.text8, styles.textTypo]}>11/24</Text>
            </View>
          </View>
          <View style={styles.horizontalContainer8}>
            <View style={styles.paragraphContainer4}>
              <Text style={[styles.totalBalance, styles.amClr]}>
                Total balance
              </Text>
              <Text style={[styles.text9, styles.text9Typo]}>$3480</Text>
            </View>
            <View style={styles.paragraphContainer4}>
              <Text style={[styles.totalBalance, styles.amClr]}>
                Credit available
              </Text>
              <Text style={[styles.text9, styles.text9Typo]}>$4520</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.card4, styles.card4Position]}>
        <View style={styles.transactionCard}>
          <View style={styles.transactionCard1}>
            <View
              style={[styles.transactionCardInner, styles.frameChildFlexBox]}
            >
              <View style={styles.transactionParent}>
                <View style={styles.transaction}>
                  <Image
                    style={[styles.transactionItem, styles.transactionLayout]}
                    resizeMode="cover"
                    source={require("../assets/group-123391.png")}
                  />
                  <Image
                    style={[styles.budgetIcon, styles.iconPosition]}
                    resizeMode="cover"
                    source={require("../assets/budget.png")}
                  />
                </View>
                <View style={styles.frameParent}>
                  <View
                    style={[
                      styles.superStoreParent,
                      styles.checkBoxSingInFlexBox,
                    ]}
                  >
                    <Text style={[styles.superStore, styles.amClr]}>
                      Super store
                    </Text>
                    <Image
                      style={styles.editIconLayout}
                      resizeMode="cover"
                      source={require("../assets/edit5.png")}
                    />
                  </View>
                  <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                    <Text
                      style={[styles.nov08, styles.nov08Clr]}
                    >{`Nov 08 `}</Text>
                    <Text style={[styles.text4, styles.amClr]}>$55</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.transactionCardChild}>
              <View style={[styles.frameChild, styles.frameChildFlexBox]} />
            </View>
          </View>
          <View style={styles.setUpBudgetCardseeMore}>
            <View style={[styles.checkBoxSingIn, styles.buttonSpaceBlock]}>
              <Image
                style={[styles.checkBoxIcon, styles.iconLayout1]}
                resizeMode="cover"
                source={require("../assets/check-box2.png")}
              />
              <Image
                style={[styles.editIcon1, styles.editIconLayout]}
                resizeMode="cover"
                source={require("../assets/edit6.png")}
              />
              <Text style={styles.button1}>Edit</Text>
            </View>
            <View style={[styles.checkBoxSingIn, styles.buttonSpaceBlock]}>
              <Image
                style={[styles.checkBoxIcon1, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/check-box3.png")}
              />
              <Image
                style={[styles.editIcon1, styles.editIconLayout]}
                resizeMode="cover"
                source={require("../assets/edit7.png")}
              />
              <Text style={[styles.rememberMe1, styles.nov08Clr]}>Delete</Text>
            </View>
          </View>
        </View>
        <View style={[styles.transactionCard2, styles.button6FlexBox]}>
          <View style={[styles.verticalContainer, styles.frameChildFlexBox]}>
            <View
              style={[
                styles.verticalContainer1,
                styles.verticalContainer1Layout,
              ]}
            >
              <View style={styles.transaction}>
                <Image
                  style={[styles.transactionItem, styles.transactionLayout]}
                  resizeMode="cover"
                  source={require("../assets/switch-container3.png")}
                />
                <Image
                  style={[styles.localGasStationIcon, styles.iconPosition]}
                  resizeMode="cover"
                  source={require("../assets/fitness-center.png")}
                />
              </View>
              <View style={styles.frameParent}>
                <View
                  style={[
                    styles.horizontalContainer3,
                    styles.checkBoxSingInFlexBox,
                  ]}
                >
                  <Text
                    style={[styles.superStore, styles.amClr]}
                  >{`La fitness `}</Text>
                  <Image
                    style={styles.editIconLayout}
                    resizeMode="cover"
                    source={require("../assets/edit8.png")}
                  />
                </View>
                <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                  <Text
                    style={[styles.nov08, styles.nov08Clr]}
                  >{`Nov 11 `}</Text>
                  <Text style={[styles.text4, styles.amClr]}>$300</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.transactionCard2, styles.button6FlexBox]}>
          <View style={[styles.verticalContainer, styles.frameChildFlexBox]}>
            <View
              style={[
                styles.verticalContainer1,
                styles.verticalContainer1Layout,
              ]}
            >
              <Image
                style={styles.transactionLayout}
                resizeMode="cover"
                source={require("../assets/transaction.png")}
              />
              <View style={styles.frameParent}>
                <View
                  style={[
                    styles.horizontalContainer3,
                    styles.checkBoxSingInFlexBox,
                  ]}
                >
                  <Text
                    style={[styles.superStore, styles.amClr]}
                  >{`Amazon `}</Text>
                  <Image
                    style={styles.editIconLayout}
                    resizeMode="cover"
                    source={require("../assets/edit9.png")}
                  />
                </View>
                <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                  <Text style={[styles.nov08, styles.nov08Clr]}>Nov 10</Text>
                  <Text style={[styles.text4, styles.amClr]}>$30</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.button6, styles.button6FlexBox]}>
          <Image
            style={[
              styles.vuesaxoutlinearrowSquareLeIcon,
              styles.addIconLayout,
            ]}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinearrowsquareleft1.png")}
          />
          <Text style={styles.button1}>View all</Text>
          <Image
            style={[styles.vuesaxoutlinelogoutIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/vuesaxoutlinelogout1.png")}
          />
        </View>
      </View>
      <Text
        style={[styles.latestTransactionsTitle, styles.transactionCardPosition]}
      >{`Latest transactions `}</Text>
      <View style={styles.walletChild} />
      <View
        style={[
          styles.horizontalContainer12,
          styles.horizontalContainerPosition,
        ]}
      >
        <Text style={[styles.cards, styles.cardsTypo]}>Income</Text>
        <View style={[styles.button, styles.buttonLayout]}>
          <Image
            style={[styles.addIcon, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add4.png")}
          />
          <Text style={styles.button1}>Add new</Text>
          <Image
            style={[styles.addIcon1, styles.addIconLayout]}
            resizeMode="cover"
            source={require("../assets/add5.png")}
          />
        </View>
      </View>
      <View style={[styles.transactionCard8, styles.transactionCardBorder]}>
        <View style={[styles.verticalContainer, styles.frameChildFlexBox]}>
          <View
            style={[styles.verticalContainer1, styles.verticalContainer1Layout]}
          >
            <View style={styles.transaction}>
              <Image
                style={styles.transactionChild}
                resizeMode="cover"
                source={require("../assets/switch-container4.png")}
              />
              <Image
                style={[styles.familyRestroomIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/family-restroom.png")}
              />
            </View>
            <View style={styles.frameParent}>
              <View
                style={[
                  styles.horizontalContainer3,
                  styles.checkBoxSingInFlexBox,
                ]}
              >
                <Text style={[styles.superStore, styles.amClr]}>
                  property rent
                </Text>
                <Image
                  style={styles.editIconLayout}
                  resizeMode="cover"
                  source={require("../assets/edit10.png")}
                />
              </View>
              <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                <Text style={[styles.nov08, styles.nov08Clr]}>{`Nov 18 `}</Text>
                <Text style={[styles.text4, styles.amClr]}>$650</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.transactionCard9, styles.transactionCardBorder]}>
        <View style={[styles.verticalContainer, styles.frameChildFlexBox]}>
          <View
            style={[styles.verticalContainer1, styles.verticalContainer1Layout]}
          >
            <View style={styles.transaction}>
              <Image
                style={styles.transactionChild}
                resizeMode="cover"
                source={require("../assets/switch-container5.png")}
              />
              <Image
                style={[styles.familyRestroomIcon, styles.iconPosition]}
                resizeMode="cover"
                source={require("../assets/work-outline.png")}
              />
            </View>
            <View style={styles.frameParent}>
              <View
                style={[
                  styles.horizontalContainer3,
                  styles.checkBoxSingInFlexBox,
                ]}
              >
                <Text style={[styles.superStore, styles.amClr]}>salary</Text>
                <Image
                  style={styles.editIconLayout}
                  resizeMode="cover"
                  source={require("../assets/edit11.png")}
                />
              </View>
              <View style={[styles.nov08Parent, styles.frameChildFlexBox]}>
                <Text style={[styles.nov08, styles.nov08Clr]}>{`Nov 11 `}</Text>
                <Text style={[styles.text4, styles.amClr]}>$6500</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button12, styles.buttonSpaceBlock]}>
        <Image
          style={[styles.vuesaxoutlinearrowSquareLeIcon, styles.addIconLayout]}
          resizeMode="cover"
          source={require("../assets/vuesaxoutlinearrowsquareleft2.png")}
        />
        <Text style={styles.button1}>View all</Text>
        <Image
          style={[styles.vuesaxoutlinelogoutIcon, styles.addIconLayout]}
          resizeMode="cover"
          source={require("../assets/vuesaxoutlinelogout2.png")}
        />
      </View>
      <View style={styles.footer}>
        <View style={styles.goalLayout}>
          <Image
            style={[styles.localAtmIcon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/local-atm.png")}
          />
          <Text style={[styles.budget1, styles.text9Typo]}>Budget</Text>
        </View>
        <View style={[styles.goal, styles.goalLayout]}>
          <Image
            style={[styles.savingsIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/savings.png")}
          />
          <Text style={[styles.budget1, styles.text9Typo]}>Goal</Text>
        </View>
        <View style={[styles.goal, styles.goalLayout]}>
          <Image
            style={[styles.assessmentIcon, styles.iconLayout1]}
            resizeMode="cover"
            source={require("../assets/assessment.png")}
          />
          <Text style={[styles.budget1, styles.text9Typo]}>Dashboard</Text>
        </View>
        <View style={[styles.goal, styles.goalLayout]}>
          <Image
            style={styles.vectorIcon1}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.wallet2, styles.text9Typo]}>Wallet</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card4Position: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  horizontalContainerPosition: {
    left: 20,
    flexDirection: "row",
    position: "absolute",
  },
  amClr: {
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  addIconLayout: {
    width: 20,
    height: 20,
  },
  cardsTypo: {
    fontSize: 16,
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
  },
  sliderSpaceBlock: {
    marginLeft: 5,
    height: 5,
  },
  buttonLayout: {
    height: 40,
    justifyContent: "center",
    overflow: "hidden",
  },
  cardLayout1: {
    borderRadius: 15,
    left: 0,
  },
  textInputPosition: {
    backgroundColor: "transparent",
    top: 0,
    position: "absolute",
  },
  imageIconLayout: {
    height: 29,
    width: 40,
    position: "absolute",
  },
  expTypo: {
    fontFamily: "Roboto-Medium",
    fontWeight: "500",
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "left",
    position: "absolute",
  },
  textTypo1: {
    textTransform: "capitalize",
    color: "#fff",
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  cardLayout: {
    width: 272,
    height: 173,
  },
  textLayout1: {
    borderRadius: 4,
    height: 173,
    width: 272,
    left: 0,
  },
  imageIcon1Position: {
    opacity: 0.2,
    top: 0,
    position: "absolute",
  },
  expPosition: {
    opacity: 0.4,
    top: 118,
    position: "absolute",
  },
  mastercardPosition: {
    left: 5,
    position: "absolute",
  },
  text3Typo: {
    fontFamily: "Inter-Medium",
    color: "#fff",
    fontWeight: "500",
    textAlign: "left",
  },
  textSpaceBlock: {
    paddingVertical: 1,
    paddingHorizontal: 0,
    flexDirection: "row",
    left: 0,
    position: "absolute",
  },
  textLayout: {
    height: 26,
    width: 54,
    top: 0,
    position: "absolute",
  },
  transactionCardPosition: {
    left: 21,
    position: "absolute",
  },
  frameChildFlexBox: {
    justifyContent: "flex-end",
    alignItems: "center",
  },
  iconPosition: {
    zIndex: 1,
    position: "absolute",
  },
  checkBoxSingInFlexBox: {
    alignSelf: "stretch",
    flexDirection: "row",
  },
  nov08Clr: {
    color: "#adadad",
    fontFamily: "Roboto-Regular",
  },
  buttonSpaceBlock: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  iconLayout1: {
    height: 24,
    width: 24,
  },
  editIconLayout: {
    height: 16,
    width: 16,
  },
  iconLayout: {
    width: 26,
    height: 26,
  },
  button6FlexBox: {
    marginTop: 8,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  verticalContainer1Layout: {
    width: 287,
    flexDirection: "row",
  },
  transactionLayout: {
    height: 38,
    width: 38,
  },
  textTypo: {
    marginLeft: 4,
    color: "#4f8124",
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  text9Typo: {
    marginTop: 4,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
  },
  transactionCardBorder: {
    borderColor: "#cbcbcb",
    justifyContent: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    width: 319,
  },
  goalLayout: {
    height: 48,
    width: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  am: {
    textAlign: "right",
    fontSize: 14,
  },
  wifiIcon: {
    height: 19,
    width: 19,
    overflow: "hidden",
  },
  signalCellularAltIcon: {
    marginLeft: 8,
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
    flexDirection: "row",
    top: "50%",
  },
  header: {
    height: 32,
    top: 0,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  thuNov19: {
    opacity: 0.9,
    textAlign: "center",
  },
  menu: {
    top: 32,
    paddingHorizontal: 20,
    paddingVertical: 4,
    justifyContent: "space-between",
    alignItems: "center",
    left: "50%",
    marginLeft: -180,
    flexDirection: "row",
    width: 360,
    position: "absolute",
    backgroundColor: "#fff",
  },
  sliderChild: {
    opacity: 0.3,
    height: 5,
    width: 5,
  },
  sliderItem: {
    borderRadius: 6,
    backgroundColor: "#868686",
    width: 21,
  },
  sliderInner: {
    opacity: 0.3,
    width: 5,
    marginLeft: 5,
  },
  slider: {
    marginLeft: -26,
    top: 314,
    padding: 5,
    alignItems: "center",
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  cards: {
    textAlign: "left",
    flex: 1,
  },
  addIcon: {
    overflow: "hidden",
  },
  button1: {
    color: "#125a93",
    textAlign: "center",
    marginLeft: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 14,
  },
  addIcon1: {
    display: "none",
    marginLeft: 8,
    overflow: "hidden",
  },
  button: {
    padding: 8,
    justifyContent: "center",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  horizontalContainer: {
    top: 80,
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  container1: {
    borderRadius: 15,
    left: 0,
    height: 174,
    width: 274,
  },
  ratingIcon: {
    top: -118,
    left: -77,
    width: 462,
    height: 349,
    opacity: 0.3,
    position: "absolute",
  },
  imageIcon: {
    top: 62,
    left: 23,
  },
  text: {
    top: 116,
    color: "#fff",
    fontSize: 11,
    left: 23,
  },
  saraMiller: {
    top: 134,
    fontSize: 12,
    color: "#fff",
    left: 23,
  },
  text1: {
    top: 147,
    left: 224,
    fontSize: 9,
    color: "#fff",
    position: "absolute",
  },
  exp: {
    top: 146,
    left: 204,
    opacity: 0.5,
    color: "#fff",
    fontSize: 11,
  },
  creditCard: {
    top: 24,
    fontSize: 12,
    color: "#fff",
    left: 23,
  },
  vectorIcon: {
    height: "7.56%",
    width: "28.49%",
    top: "16%",
    right: "10.45%",
    bottom: "76.44%",
    left: "61.06%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  card1: {
    height: 174,
    width: 274,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  cardLayout2: {
    height: 174,
    width: 274,
  },
  textInput: {
    backgroundColor: "transparent",
    top: 0,
    position: "absolute",
  },
  imageIcon1: {
    left: 12,
    width: 219,
    height: 124,
  },
  wellsFargo: {
    fontSize: 12,
    color: "#fff",
    left: 0,
    top: 0,
  },
  exp1226: {
    fontSize: 9,
    color: "#fff",
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    left: 0,
  },
  switchContainerIcon: {
    width: 32,
    height: 19,
    top: 0,
  },
  mastercard: {
    top: 21,
    fontSize: 6,
    left: 5,
    position: "absolute",
  },
  switchContainer: {
    left: 184,
    width: 42,
    height: 30,
    top: 0,
    position: "absolute",
  },
  imageIcon2: {
    top: 38,
    left: 0,
  },
  text2: {
    color: "#fff",
    fontSize: 11,
  },
  textInput1: {
    top: 93,
  },
  textInput2: {
    left: 172,
  },
  button2: {
    top: 23,
    width: 226,
    height: 127,
    left: 23,
    position: "absolute",
  },
  card3: {
    height: 173,
    borderRadius: 15,
    left: 0,
    top: 0,
    position: "absolute",
    overflow: "hidden",
  },
  card2: {
    marginLeft: 12,
    height: 173,
  },
  imageIcon3: {
    left: -3,
    width: 275,
    height: 173,
    top: 0,
    position: "absolute",
  },
  textInput4: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 9.22033977508545,
      height: 9.22033977508545,
    },
    shadowRadius: 3.07,
    elevation: 3.07,
    shadowOpacity: 1,
    borderRadius: 4,
    height: 173,
    width: 272,
    left: 0,
    display: "none",
    backgroundColor: "#fff",
  },
  textInput5: {
    left: 0,
  },
  exp12261: {
    left: 187,
    fontSize: 8,
    opacity: 0.4,
    top: 118,
    position: "absolute",
  },
  imageIcon4: {
    top: 49,
    left: 0,
  },
  textInput6: {
    top: 115,
    left: 0,
    position: "absolute",
  },
  text3: {
    fontSize: 9,
  },
  textInput7: {
    top: 101,
    overflow: "hidden",
  },
  chaseBank: {
    left: 2,
    top: 7,
    fontSize: 12,
    color: "#fff",
    position: "absolute",
  },
  tooltipContainer1: {
    height: 173,
    left: 0,
    top: 0,
    position: "absolute",
  },
  container: {
    marginLeft: -421,
    top: 128,
    justifyContent: "center",
    left: "50%",
    flexDirection: "row",
    position: "absolute",
  },
  horizontalContainer1: {
    top: 771,
    width: 319,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  transactionChild: {
    zIndex: 0,
    width: 40,
    height: 40,
  },
  wineBarIcon: {
    width: 26,
    height: 26,
    left: 7,
    zIndex: 1,
    top: 7,
    overflow: "hidden",
  },
  transaction: {
    flexDirection: "row",
  },
  superStore: {
    textAlign: "left",
    fontSize: 14,
    flex: 1,
  },
  superStoreParent: {
    justifyContent: "space-between",
  },
  nov08: {
    fontSize: 12,
    textAlign: "left",
    flex: 1,
  },
  text4: {
    textAlign: "left",
    marginLeft: 8,
    fontSize: 14,
  },
  nov08Parent: {
    width: 242,
    flexDirection: "row",
  },
  frameParent: {
    height: 36,
    justifyContent: "space-between",
    marginLeft: 8,
  },
  transactionParent: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
  },
  transactionCardInner: {
    width: 287,
    flexDirection: "row",
  },
  frameChild: {
    flex: 1,
  },
  transactionCardChild: {
    alignItems: "center",
    marginLeft: 8,
    flexDirection: "row",
    flex: 1,
  },
  transactionCard1: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderColor: "#87c55f",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    borderRadius: 8,
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    width: "100%",
  },
  checkBoxIcon: {
    display: "none",
  },
  editIcon1: {
    marginLeft: 8,
  },
  checkBoxSingIn: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
  },
  checkBoxIcon1: {
    display: "none",
  },
  rememberMe1: {
    textAlign: "center",
    marginLeft: 8,
    fontSize: 14,
  },
  setUpBudgetCardseeMore: {
    height: "79.03%",
    width: "30.41%",
    top: "8.06%",
    right: "9.72%",
    bottom: "12.9%",
    left: "59.87%",
    borderColor: "#868686",
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    display: "none",
    justifyContent: "center",
    borderRadius: 8,
    position: "absolute",
  },
  transactionCard: {
    height: 62,
    width: 319,
  },
  transaction1: {
    flexDirection: "row",
  },
  horizontalContainer3: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  verticalContainer1: {
    alignItems: "center",
  },
  verticalContainer: {
    flexDirection: "row",
  },
  transactionCard2: {
    borderColor: "#cbcbcb",
    justifyContent: "flex-end",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
    width: 319,
  },
  switchContainerIcon2: {
    width: 39,
    height: 39,
    zIndex: 0,
  },
  localGasStationIcon: {
    width: 25,
    height: 25,
    left: 7,
    zIndex: 1,
    top: 7,
    overflow: "hidden",
  },
  transaction2: {
    flexDirection: "row",
  },
  vuesaxoutlinearrowSquareLeIcon: {
    display: "none",
  },
  vuesaxoutlinelogoutIcon: {
    display: "none",
    marginLeft: 8,
  },
  button6: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: "center",
    height: 40,
    overflow: "hidden",
    width: 320,
  },
  container2: {
    top: 819,
    alignItems: "center",
    left: "50%",
    marginLeft: -180,
    width: 360,
    position: "absolute",
  },
  thisCreditCard: {
    width: 319,
    textAlign: "left",
  },
  creditLine: {
    textAlign: "left",
    fontSize: 14,
  },
  text7: {
    fontSize: 12,
  },
  paragraphContainer2: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  dueDate: {
    fontSize: 10,
    textAlign: "left",
  },
  text8: {
    fontSize: 10,
  },
  horizontalContainer7: {
    width: 319,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  totalBalance: {
    fontSize: 12,
    textAlign: "left",
  },
  text9: {
    color: "#868686",
    fontSize: 12,
  },
  paragraphContainer4: {
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalContainer8: {
    marginTop: 16,
    width: 319,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  verticalContainer3: {
    marginTop: 16,
  },
  verticalContainer2: {
    top: 345,
    alignItems: "center",
  },
  transactionItem: {
    zIndex: 0,
  },
  budgetIcon: {
    left: 6,
    top: 7,
    height: 24,
    width: 24,
  },
  card4: {
    top: 495,
    alignItems: "center",
  },
  latestTransactionsTitle: {
    top: 468,
    width: 319,
    textAlign: "left",
    fontSize: 16,
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    height: 19,
  },
  walletChild: {
    top: 480,
    left: 4,
    width: 352,
    height: 0,
    position: "absolute",
  },
  horizontalContainer12: {
    top: 1093,
    width: 320,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  familyRestroomIcon: {
    marginTop: -13,
    marginLeft: -13,
    width: 26,
    height: 26,
    left: "50%",
    top: "50%",
    overflow: "hidden",
  },
  transactionCard8: {
    top: 1141,
    left: 21,
    position: "absolute",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  transactionCard9: {
    top: 1213,
    left: 21,
    position: "absolute",
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  button12: {
    top: 1285,
    justifyContent: "center",
    height: 40,
    overflow: "hidden",
    borderRadius: 8,
    width: 320,
    alignItems: "center",
    flexDirection: "row",
    left: 20,
    position: "absolute",
  },
  localAtmIcon: {
    overflow: "hidden",
  },
  budget1: {
    color: "#a5c8fc",
    fontSize: 10,
  },
  savingsIcon: {
    overflow: "hidden",
  },
  goal: {
    marginLeft: 48,
  },
  assessmentIcon: {
    borderRadius: 8,
    overflow: "hidden",
  },
  vectorIcon1: {
    height: 18,
    width: 19,
  },
  wallet2: {
    fontSize: 10,
    color: "#fff",
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
    left: "50%",
    marginLeft: -180,
    flexDirection: "row",
    width: 360,
    position: "absolute",
  },
  wallet: {
    height: 1421,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
  },
});

export default WalletFullData;
