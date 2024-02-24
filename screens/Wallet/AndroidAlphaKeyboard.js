
import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

const AndroidAlphaKeyboard = () => {
  return (
    <View style={styles.androidKeyboard}>
      <View style={[styles.page1, styles.groupParentPosition2]}>
        <View style={[styles.page1, styles.groupParentPosition2]}>
          <Image
            style={[styles.keyboardChild, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-3.png")}
          />
          <View style={[styles.groupParent, styles.groupParentPosition1]}>
            <Image
              style={[styles.groupChild, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-9.png")}
            />
            <Image
              style={[styles.groupItem, styles.groupLayout]}
              resizeMode="cover"
              source={require("../assets/group-11.png")}
            />
            <View
              style={[styles.group8Copy19Parent, styles.groupParentPosition2]}
            >
              <View style={[styles.group8Copy19, styles.group8Position2]}>
                <Image
                  style={[styles.keyboardChild, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-4.png")}
                />
                <Text style={[styles.z, styles.zTypo]}>Z</Text>
              </View>
              <View style={[styles.group8Copy20, styles.group8Position2]}>
                <Image
                  style={[styles.keyboardChild, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-41.png")}
                />
                <Text style={[styles.x, styles.xPosition]}>X</Text>
              </View>
              <View style={[styles.group8Copy21, styles.group8Position2]}>
                <Image
                  style={[styles.keyboardChild, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-42.png")}
                />
                <Text style={[styles.c, styles.zTypo]}>C</Text>
              </View>
              <View style={[styles.group8Copy22, styles.group8Position2]}>
                <Image
                  style={[styles.keyboardChild, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-43.png")}
                />
                <Text style={[styles.v, styles.zTypo]}>V</Text>
              </View>
              <View style={[styles.group8Copy23, styles.group8Position2]}>
                <Image
                  style={[styles.keyboardChild, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-44.png")}
                />
                <Text style={[styles.b, styles.zTypo]}>B</Text>
              </View>
              <View style={[styles.group8Copy24, styles.group8Position2]}>
                <Image
                  style={[styles.keyboardChild, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-45.png")}
                />
                <Text style={[styles.n, styles.zTypo]}>N</Text>
              </View>
              <View style={[styles.group8Copy25, styles.group8Position2]}>
                <Image
                  style={[styles.keyboardChild, styles.iconLayout]}
                  resizeMode="cover"
                  source={require("../assets/rectangle-46.png")}
                />
                <Text style={[styles.m, styles.mTypo]}>M</Text>
              </View>
            </View>
          </View>
          <View style={styles.group8Copy10Parent}>
            <View style={[styles.group8Copy10, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-47.png")}
              />
              <Text style={[styles.a, styles.aTypo]}>A</Text>
            </View>
            <View style={[styles.group8Copy11, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-48.png")}
              />
              <Text style={[styles.s, styles.aTypo]}>S</Text>
            </View>
            <View style={[styles.group8Copy12, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-49.png")}
              />
              <Text style={[styles.d, styles.aTypo]}>D</Text>
            </View>
            <View style={[styles.group8Copy13, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-410.png")}
              />
              <Text style={[styles.f, styles.fTypo]}>F</Text>
            </View>
            <View style={[styles.group8Copy14, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-411.png")}
              />
              <Text style={[styles.g, styles.gTypo]}>G</Text>
            </View>
            <View style={[styles.group8Copy15, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-412.png")}
              />
              <Text style={[styles.n, styles.zTypo]}>H</Text>
            </View>
            <View style={[styles.group8Copy16, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-413.png")}
              />
              <Text style={[styles.j, styles.fTypo]}>J</Text>
            </View>
            <View style={[styles.group8Copy17, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-414.png")}
              />
              <Text style={[styles.k, styles.aTypo]}>K</Text>
            </View>
            <View style={[styles.group8Copy18, styles.group8Position1]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-415.png")}
              />
              <Text style={[styles.l, styles.aTypo]}>L</Text>
            </View>
          </View>
          <View style={[styles.groupContainer, styles.groupParentPosition1]}>
            <View style={[styles.groupView, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-416.png")}
              />
              <Text style={[styles.q, styles.gTypo]}>Q</Text>
            </View>
            <View style={[styles.group8Copy, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-417.png")}
              />
              <Text style={[styles.w, styles.aTypo]}>W</Text>
            </View>
            <View style={[styles.group8Copy2, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-418.png")}
              />
              <Text style={[styles.e, styles.fTypo]}>E</Text>
            </View>
            <View style={[styles.group8Copy3, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-419.png")}
              />
              <Text style={[styles.r, styles.aTypo]}>R</Text>
            </View>
            <View style={[styles.group8Copy4, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-420.png")}
              />
              <Text style={[styles.t, styles.aTypo]}>T</Text>
            </View>
            <View style={[styles.group8Copy5, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-421.png")}
              />
              <Text style={[styles.y, styles.aTypo]}>Y</Text>
            </View>
            <View style={[styles.group8Copy6, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-422.png")}
              />
              <Text style={[styles.u, styles.aTypo]}>U</Text>
            </View>
            <View style={[styles.group8Copy7, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-423.png")}
              />
              <Text style={[styles.i, styles.aTypo]}>I</Text>
            </View>
            <View style={[styles.group8Copy8, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-424.png")}
              />
              <Text style={[styles.q, styles.gTypo]}>O</Text>
            </View>
            <View style={[styles.group8Copy9, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-425.png")}
              />
              <Text style={[styles.p, styles.aTypo]}>P</Text>
            </View>
          </View>
          <View style={[styles.groupParent1, styles.groupParentPosition1]}>
            <View style={[styles.groupView, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-426.png")}
              />
              <Text style={[styles.text, styles.textTypo1]}>1</Text>
            </View>
            <View style={[styles.group8Copy, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-427.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>2</Text>
            </View>
            <View style={[styles.groupParent3, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-428.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>3</Text>
            </View>
            <View style={[styles.group8Copy3, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-429.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>4</Text>
            </View>
            <View style={[styles.groupParent4, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-430.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>5</Text>
            </View>
            <View style={[styles.group8Copy5, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-431.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>6</Text>
            </View>
            <View style={[styles.groupParent6, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-432.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>7</Text>
            </View>
            <View style={[styles.group7Copy7, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-433.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>8</Text>
            </View>
            <View style={[styles.groupParent7, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-434.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>9</Text>
            </View>
            <View style={[styles.group8Copy9, styles.groupParentPosition]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-435.png")}
              />
              <Text style={[styles.text1, styles.textTypo1]}>0</Text>
            </View>
          </View>
          <View style={[styles.groupParent8, styles.groupParent8Position]}>
            <View style={[styles.groupParent9, styles.groupParentPosition2]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-436.png")}
              />
              <Text style={[styles.text10, styles.mTypo]}>?123</Text>
            </View>
            <View style={[styles.group8Copy26, styles.group8Position]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-437.png")}
              />
              <Text style={[styles.text11, styles.textTypo]}>,</Text>
            </View>
            <View style={[styles.group8Copy27, styles.group8Position]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-438.png")}
              />
              <Text style={[styles.text12, styles.textTypo]}>.</Text>
            </View>
            <View style={[styles.groupParent10, styles.groupParentPosition2]}>
              <Image
                style={[styles.keyboardChild, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/rectangle-439.png")}
              />
              <Text style={styles.space}>SPACE</Text>
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.actionButton, styles.groupParent8Position]}
        onPress={() => {}}
      >
        <Image
          style={styles.iconLayout}
          resizeMode="cover"
          source={require("../assets/action-button.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  groupParentPosition2: {
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  groupParentPosition1: {
    width: "97.78%",
    left: "1.11%",
    right: "1.11%",
    position: "absolute",
  },
  groupLayout: {
    width: "14.2%",
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  group8Position2: {
    width: "12.5%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  zTypo: {
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    fontSize: 22,
    top: "12.5%",
    height: "70%",
    position: "absolute",
  },
  xPosition: {
    left: "26.92%",
    width: "53.33%",
  },
  mTypo: {
    width: "70%",
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  group8Position1: {
    width: "9.49%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  aTypo: {
    fontSize: 24,
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    top: "12.5%",
    height: "70%",
    position: "absolute",
  },
  fTypo: {
    width: "46.67%",
    fontSize: 24,
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    top: "12.5%",
    height: "70%",
    position: "absolute",
  },
  gTypo: {
    width: "56.67%",
    fontSize: 24,
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    top: "12.5%",
    height: "70%",
    position: "absolute",
  },
  groupParentPosition: {
    width: "8.52%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textTypo1: {
    top: "10.53%",
    height: "73.68%",
    width: "46.67%",
    fontSize: 24,
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  groupParent8Position: {
    bottom: "3.28%",
    top: "78.69%",
    height: "18.03%",
    position: "absolute",
  },
  group8Position: {
    width: "10.03%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  textTypo: {
    fontSize: 20,
    height: "52.27%",
    top: "29.55%",
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  keyboardChild: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
    right: "0%",
  },
  groupChild: {
    right: "85.8%",
    left: "0%",
  },
  groupItem: {
    left: "85.8%",
    right: "0%",
  },
  z: {
    left: "28.05%",
    width: "50%",
  },
  group8Copy19: {
    right: "87.5%",
    left: "0%",
  },
  x: {
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    fontSize: 22,
    top: "12.5%",
    height: "70%",
    position: "absolute",
  },
  group8Copy20: {
    right: "72.92%",
    left: "14.58%",
  },
  c: {
    left: "25.96%",
    width: "53.33%",
  },
  group8Copy21: {
    right: "58.33%",
    left: "29.17%",
  },
  v: {
    left: "26.55%",
    width: "53.33%",
  },
  group8Copy22: {
    right: "43.75%",
    left: "43.75%",
  },
  b: {
    left: "27.1%",
    width: "50%",
  },
  group8Copy23: {
    right: "29.17%",
    left: "58.33%",
  },
  n: {
    width: "60%",
    left: "23.48%",
  },
  group8Copy24: {
    right: "14.58%",
    left: "72.92%",
  },
  m: {
    left: "17.08%",
    fontSize: 22,
    top: "12.5%",
    height: "70%",
    width: "70%",
  },
  group8Copy25: {
    left: "87.5%",
    right: "0%",
  },
  group8Copy19Parent: {
    width: "68.18%",
    right: "15.91%",
    left: "15.91%",
    height: "100%",
    top: "0%",
  },
  groupParent: {
    top: "59.02%",
    bottom: "24.59%",
    left: "1.11%",
    right: "1.11%",
    height: "16.39%",
  },
  a: {
    left: "25.91%",
    width: "53.33%",
  },
  group8Copy10: {
    right: "90.51%",
    left: "0%",
  },
  s: {
    left: "28.27%",
    width: "50%",
  },
  group8Copy11: {
    right: "79.11%",
    left: "11.39%",
  },
  d: {
    left: "25.77%",
    width: "53.33%",
  },
  group8Copy12: {
    right: "67.72%",
    left: "22.78%",
  },
  f: {
    left: "29.89%",
  },
  group8Copy13: {
    right: "56.65%",
    left: "33.86%",
  },
  g: {
    left: "24.75%",
  },
  group8Copy14: {
    right: "45.25%",
    left: "45.25%",
  },
  group8Copy15: {
    right: "33.86%",
    left: "56.65%",
  },
  j: {
    left: "29.93%",
  },
  group8Copy16: {
    right: "22.47%",
    left: "68.04%",
  },
  k: {
    left: "26.92%",
    width: "53.33%",
  },
  group8Copy17: {
    right: "11.39%",
    left: "79.11%",
  },
  l: {
    width: "43.33%",
    left: "30.48%",
  },
  group8Copy18: {
    left: "90.51%",
    right: "0%",
  },
  group8Copy10Parent: {
    width: "87.78%",
    top: "40.16%",
    right: "6.11%",
    bottom: "43.44%",
    left: "6.11%",
    height: "16.39%",
    position: "absolute",
  },
  q: {
    left: "24.5%",
  },
  groupView: {
    right: "91.48%",
    left: "0%",
  },
  w: {
    width: "73.33%",
    left: "16.51%",
  },
  group8Copy: {
    right: "81.25%",
    left: "10.23%",
  },
  e: {
    left: "29.27%",
  },
  group8Copy2: {
    right: "71.02%",
    left: "20.45%",
  },
  r: {
    left: "27.37%",
    width: "50%",
  },
  group8Copy3: {
    right: "61.08%",
    left: "30.4%",
  },
  t: {
    left: "28.13%",
    width: "50%",
  },
  group8Copy4: {
    right: "50.85%",
    left: "40.63%",
  },
  y: {
    left: "27.98%",
    width: "50%",
  },
  group8Copy5: {
    right: "40.91%",
    left: "50.57%",
  },
  u: {
    left: "26.06%",
    width: "53.33%",
  },
  group8Copy6: {
    right: "30.4%",
    left: "61.08%",
  },
  i: {
    width: "23.33%",
    left: "41.12%",
  },
  group8Copy7: {
    right: "20.17%",
    left: "71.31%",
  },
  group8Copy8: {
    right: "9.94%",
    left: "81.53%",
  },
  p: {
    left: "26.77%",
    width: "53.33%",
  },
  group8Copy9: {
    left: "91.48%",
    right: "0%",
  },
  groupContainer: {
    top: "21.31%",
    bottom: "62.3%",
    left: "1.11%",
    right: "1.11%",
    height: "16.39%",
  },
  text: {
    left: "33.33%",
  },
  text1: {
    left: "30%",
  },
  groupParent3: {
    right: "71.31%",
    left: "20.17%",
  },
  groupParent4: {
    right: "51.14%",
    left: "40.34%",
  },
  groupParent6: {
    right: "30.68%",
    left: "60.8%",
  },
  group7Copy7: {
    right: "20.45%",
    left: "71.02%",
  },
  groupParent7: {
    right: "10.23%",
    left: "81.25%",
  },
  groupParent1: {
    height: "15.57%",
    top: "3.28%",
    bottom: "81.15%",
    left: "1.11%",
    right: "1.11%",
  },
  text10: {
    height: "43.18%",
    top: "27.27%",
    left: "16.49%",
    fontSize: 16,
  },
  groupParent9: {
    width: "16.72%",
    right: "83.28%",
    left: "0%",
    height: "100%",
    top: "0%",
  },
  text11: {
    width: "13.33%",
    left: "43.46%",
  },
  group8Copy26: {
    right: "71.91%",
    left: "18.06%",
  },
  text12: {
    width: "20%",
    left: "41.23%",
  },
  group8Copy27: {
    left: "89.97%",
    right: "0%",
  },
  space: {
    height: "36.36%",
    width: "25.42%",
    left: "37%",
    fontSize: 14,
    top: "29.55%",
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  groupParent10: {
    width: "59.2%",
    right: "11.37%",
    left: "29.43%",
    height: "100%",
    top: "0%",
  },
  groupParent8: {
    width: "83.06%",
    right: "15.83%",
    left: "1.11%",
  },
  page1: {
    left: "0%",
    right: "0%",
    height: "100%",
    top: "0%",
    width: "100%",
  },
  actionButton: {
    left: "85.28%",
    width: "13.61%",
    right: "1.11%",
  },
  androidKeyboard: {
    flex: 1,
    height: 245,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidAlphaKeyboard;
