
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const AndroidKeyboard = () => {
  return (
    <View style={styles.androidKeyboard}>
      <View style={styles.numberInputContainer}>
        <View style={styles.numberInputContainer}>
          <Image
            style={styles.numberInputChild}
            resizeMode="cover"
            source={require("../assets/rectangle-3.png")}
          />
          <View style={[styles.card, styles.containerPosition3]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input.png")}
            />
            <Text style={styles.text}>.</Text>
          </View>
          <View style={[styles.container, styles.containerPosition2]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input1.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>0</Text>
          </View>
          <View
            style={[styles.sliderContainer, styles.sliderContainerPosition]}
          >
            <View style={styles.numberInputContainer}>
              <Image
                style={styles.numberInputChild}
                resizeMode="cover"
                source={require("../assets/vector.png")}
              />
              <Image
                style={styles.numberInputChild}
                resizeMode="cover"
                source={require("../assets/vector1.png")}
              />
              <Text style={[styles.text2, styles.textPosition]}>/</Text>
            </View>
          </View>
          <View style={[styles.slider1, styles.sliderPosition]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input2.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>9</Text>
          </View>
          <View style={[styles.container1, styles.sliderPosition]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input3.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>8</Text>
          </View>
          <View style={[styles.slider2, styles.sliderPosition]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input4.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>7</Text>
          </View>
          <View style={[styles.container2, styles.containerPosition1]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input5.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>6</Text>
          </View>
          <View style={[styles.card1, styles.containerPosition1]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input6.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>5</Text>
          </View>
          <View style={[styles.container3, styles.containerPosition1]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input7.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>4</Text>
          </View>
          <View style={[styles.container4, styles.containerPosition]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input8.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>3</Text>
          </View>
          <View style={[styles.container5, styles.containerPosition]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input9.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>2</Text>
          </View>
          <View style={[styles.container6, styles.containerPosition]}>
            <Image
              style={styles.numberInputChild}
              resizeMode="cover"
              source={require("../assets/text-input10.png")}
            />
            <Text style={[styles.text1, styles.textPosition]}>1</Text>
          </View>
          <Image
            style={[styles.containerIcon, styles.buttonIconLayout]}
            resizeMode="cover"
            source={require("../assets/container.png")}
          />
          <Image
            style={[styles.containerIcon1, styles.buttonIconLayout]}
            resizeMode="cover"
            source={require("../assets/container1.png")}
          />
          <Image
            style={[styles.buttonIcon, styles.buttonIconLayout]}
            resizeMode="cover"
            source={require("../assets/button.png")}
          />
        </View>
        <Image
          style={[styles.actionButtonIcon, styles.buttonIconLayout]}
          resizeMode="cover"
          source={require("../assets/action-button.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerPosition3: {
    left: "50.56%",
    right: "26.11%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  containerPosition2: {
    left: "25.83%",
    right: "50.83%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  textPosition: {
    top: "6.82%",
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    position: "absolute",
  },
  sliderContainerPosition: {
    left: "1.11%",
    right: "75.56%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  sliderPosition: {
    bottom: "27.67%",
    top: "50.97%",
  },
  containerPosition1: {
    bottom: "51.46%",
    top: "27.18%",
  },
  containerPosition: {
    bottom: "75.24%",
    top: "3.4%",
  },
  buttonIconLayout: {
    left: "75.56%",
    right: "1.11%",
    width: "23.33%",
    height: "21.36%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  numberInputChild: {
    maxHeight: "100%",
    maxWidth: "100%",
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    overflow: "hidden",
    width: "100%",
  },
  text: {
    width: "10.71%",
    top: "2.27%",
    left: "45.58%",
    textAlign: "left",
    color: "#0c0c0c",
    fontFamily: "Roboto-Regular",
    fontSize: 32,
    height: "86.36%",
    position: "absolute",
  },
  card: {
    bottom: "3.88%",
    top: "74.76%",
  },
  text1: {
    height: "79.55%",
    width: "20.24%",
    left: "39.88%",
    fontSize: 30,
  },
  container: {
    bottom: "3.88%",
    top: "74.76%",
  },
  text2: {
    width: "16.67%",
    left: "44.39%",
    fontSize: 32,
    height: "86.36%",
    top: "6.82%",
  },
  numberInputContainer: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  sliderContainer: {
    bottom: "3.88%",
    top: "74.76%",
  },
  slider1: {
    left: "50.56%",
    right: "26.11%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  container1: {
    left: "25.83%",
    right: "50.83%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  slider2: {
    left: "1.11%",
    right: "75.56%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  container2: {
    left: "50.56%",
    right: "26.11%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  card1: {
    left: "25.83%",
    right: "50.83%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  container3: {
    left: "1.11%",
    right: "75.56%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  container4: {
    left: "50.56%",
    right: "26.11%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  container5: {
    left: "25.83%",
    right: "50.83%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  container6: {
    left: "1.11%",
    right: "75.56%",
    width: "23.33%",
    height: "21.36%",
    position: "absolute",
  },
  containerIcon: {
    bottom: "75.24%",
    top: "3.4%",
  },
  containerIcon1: {
    bottom: "51.46%",
    top: "27.18%",
  },
  buttonIcon: {
    bottom: "27.67%",
    top: "50.97%",
  },
  actionButtonIcon: {
    bottom: "3.88%",
    top: "74.76%",
  },
  androidKeyboard: {
    borderStyle: "solid",
    borderColor: "#e9e8e8",
    borderTopWidth: 1,
    flex: 1,
    height: 216,
    overflow: "hidden",
    width: "100%",
  },
});

export default AndroidKeyboard;
