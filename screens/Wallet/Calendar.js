
import * as React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Calendar = () => {
  return (
    <View style={styles.numberInput}>
      <View style={[styles.horizontalContainer, styles.paginationFlexBox]}>
        <Image
          style={styles.chevronIconLayout}
          resizeMode="cover"
          source={require("../assets/chevron-right.png")}
        />
        <Text style={[styles.october2023, styles.text18Typo]}>
          October 2023
        </Text>
        <Image
          style={[styles.chevronLeftIcon, styles.chevronIconLayout]}
          resizeMode="cover"
          source={require("../assets/chevron-left.png")}
        />
      </View>
      <View style={[styles.segmentedPicker, styles.paginationFlexBox]}>
        <View style={styles.day}>
          <Text style={styles.textTypo}>Mon</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.textTypo}>Tue</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.textTypo}>Wed</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.textTypo}>Thu</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.textTypo}>Fri</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.textTypo}>Sat</Text>
        </View>
        <View style={styles.day}>
          <Text style={styles.textTypo}>Sun</Text>
        </View>
      </View>
      <View style={[styles.pagination, styles.paginationFlexBox]}>
        <View style={[styles.day7, styles.dayFlexBox]}>
          <Text style={styles.textTypo}>1</Text>
        </View>
        <View style={[styles.day7, styles.dayFlexBox]}>
          <Text style={styles.textTypo}>2</Text>
        </View>
        <View style={[styles.day7, styles.dayFlexBox]}>
          <Text style={styles.textTypo}>3</Text>
        </View>
        <View style={[styles.day7, styles.dayFlexBox]}>
          <Text style={styles.textTypo}>4</Text>
        </View>
        <View style={[styles.day7, styles.dayFlexBox]}>
          <Text style={styles.textTypo}>5</Text>
        </View>
        <View style={[styles.day7, styles.dayFlexBox]}>
          <Text style={styles.textTypo}>6</Text>
        </View>
        <View style={[styles.day7, styles.dayFlexBox]}>
          <Text style={[styles.text13, styles.textTypo]}>7</Text>
        </View>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={[styles.text14, styles.textTypo]}>8</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>9</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>10</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>11</Text>
      </View>
      <View style={[styles.day18, styles.dayFlexBox]}>
        <Text style={[styles.text18, styles.text18Typo]}>12</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>13</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>14</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>15</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>16</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>17</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>18</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>19</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>20</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>21</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>22</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>23</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>24</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>25</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>26</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>27</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>28</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>29</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>30</Text>
      </View>
      <View style={[styles.day7, styles.dayFlexBox]}>
        <Text style={styles.textTypo}>31</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paginationFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text18Typo: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  chevronIconLayout: {
    overflow: "hidden",
    height: 20,
    width: 20,
  },
  dayFlexBox: {
    width: 39,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  textTypo: {
    color: "#0c0c0c",
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 12,
  },
  october2023: {
    color: "#404040",
    marginLeft: 12,
  },
  chevronLeftIcon: {
    marginLeft: 12,
  },
  horizontalContainer: {
    padding: 10,
    width: 273,
    justifyContent: "center",
    backgroundColor: "#fbfcfb",
  },
  day: {
    backgroundColor: "#e9e8e8",
    padding: 10,
    flex: 1,
  },
  segmentedPicker: {
    width: 273,
    justifyContent: "center",
  },
  day7: {
    backgroundColor: "#e9e8e8",
  },
  text13: {
    opacity: 0.7,
  },
  pagination: {
    borderColor: "#0c0c0c",
    justifyContent: "center",
    borderWidth: 1,
    borderStyle: "solid",
  },
  text14: {
    opacity: 0.8,
  },
  text18: {
    color: "#fff",
  },
  day18: {
    backgroundColor: "#125a93",
  },
  numberInput: {
    borderRadius: 8,
    borderColor: "#cbcbcb",
    width: "100%",
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingTop: 8,
    paddingRight: 8,
    paddingBottom: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: "#fbfcfb",
  },
});

export default Calendar;
