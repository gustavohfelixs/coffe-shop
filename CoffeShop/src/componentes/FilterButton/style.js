import { StyleSheet } from "react-native";

const styles = (isActive) =>
  StyleSheet.create({
    button: [
      {
        backgroundColor: "#C67C4E",
        width: 87,
        height: 29,
        marginTop: 32,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
      },
      {
        backgroundColor: isActive ? "#C67C4E" : "rgba(237,237,237, 0.35)",
      },
    ],
    buttonTxt: [
      {
        fontFamily: "Sora_600SemiBold",
        fontSize: 16,
      },
      { color: isActive ? "#FFFF" : "#313131" },
    ],
  });

export default styles;
