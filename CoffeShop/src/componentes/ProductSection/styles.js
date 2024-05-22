import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { width: "100%", height: "100%" },
  header: {
    width: "100%",
    height: 280,
    backgroundColor: "#313131",
    left: 0,
    right: 0,
    position: "absolute",
  },
  locationTxt: {
    top: 68,
    left: 24,
    color: "#A2A2A2",
    fontFamily: "Sora_400Regular",
    fontSize: 16,
  },
  searchContainer: { flexDirection: "row", top: 76, left: 24 },
  countryTxt: {
    fontFamily: "Sora_600SemiBold",
    fontSize: 20,
    color: "#D8D8D8",
  },
  downIcon: { padding: 7 },
  options: {
    backgroundColor: "#C67C4E",
    padding: 15,
    borderRadius: 12,
    alignSelf: "center",
    transform: "rotate(90deg)",
  },

  body: {
    width: "100%",
    backgroundColor: "rgba(237,237,237, 35%)",
    height: "100%",
    top: 280,
    flex: 1,
  },
  searchSection: { position: "relative", top: 80, flexDirection: "row" },
  bannerSection: {
    alignItems: "center",
    position: "relative",
    top: -60,
    margin: 0,
    padding: 0,
  },
  banner: { width: 327, height: 140 },

  filterButtonsSection: { alignItems: "center", top: -30 },
  filterButtons: { width: 327, paddingBottom: 16 },
  coffeSection: { alignSelf: "center", flex: 1, top: -30 },
});

export default styles;
