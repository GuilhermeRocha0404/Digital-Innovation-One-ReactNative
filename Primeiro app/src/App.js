import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Image,
  Text,
  ImageBackground,
  Pressable,
  Linking
} from "react-native";

const colorGithub = "#010409";
const imageSpiderMan = "https://c-fa.cdn.smule.com/rs-s90/arr/6c/b6/4115a6b6-68a9-4f3c-b0e3-91b879dc59f6.jpg";
const imageVenom = "https://i.pinimg.com/originals/06/f1/6f/06f16f9e4a6a5d961641d6289117b12c.jpg";
const altColorFont = "#610d14";
const colorFont = "#c9d1d9";
const colorDarkFontGithub = "#989da3";
const spiderBackground = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4c82dcd2-fb32-4f71-91e3-c346ffaf43a8/dwfqu2-e10902a2-12d8-4869-85f6-451cc1491e4f.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRjODJkY2QyLWZiMzItNGY3MS05MWUzLWMzNDZmZmFmNDNhOFwvZHdmcXUyLWUxMDkwMmEyLTEyZDgtNDg2OS04NWY2LTQ1MWNjMTQ5MWU0Zi5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.PNOrg2lXdw0Cd-kpUuoTI-OBuvp84xLgYn14SU2dq6o";
const urlToMyGithub = "https://github.com/GuilhermeRocha0404";
const App = () => {

  const handlePressGoToMyGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  };
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <ImageBackground source={{ uri: spiderBackground }} style={style.imagemFundo}>
        <View style={style.container}>
          <View style={[style.content, style.rowller]}>
            <View style={style.content}>
              <Image
                style={style.avatar}
                source={{ uri: imageSpiderMan }}
                accessibilityLabel="Imagem do Homem Aranha"
              />
              <Text accessibilityLabel="Nickname Homem Aranha" style={[style.defaultText, style.nickname]}>Homem Aranha</Text>
              <Text accessibilityLabel="Nome Peter Parker" style={[style.defaultText, style.name]}>Peter Parker</Text>
            </View>
            <View style={style.content}>
              <Image
                style={style.avatar}
                source={{ uri: imageVenom }}
                accessibilityLabel="Imagem do Venom"
              />
              <Text accessibilityLabel="Nickname Venom" style={[style.defaultText, style.nickname]}>Venom</Text>
              <Text accessibilityLabel="Nome Eddie Brock" style={[style.defaultText, style.name]}>Eddie Brock</Text>
            </View>
          </View>
          <Pressable onPress={handlePressGoToMyGithub}>
            <View style={style.button}>
              <Text style={style.defaultText} >Open my Github</Text>
            </View>
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView >
  );
};
export default App;

const style = StyleSheet.create({
  container: {
    //Column
    // backgroundColor: colorGithub,
    flex: 1,//Expandir a tela inteira
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    alignItems: "center",
    padding: 5,
  },
  rowller: {
    flexDirection: "row",
  },
  defaultText: {
    fontSize: 24,
    color: colorFont,
  },
  nickname: {
    marginTop: 10,
    fontWeight: "bold",
    color: colorFont
  },
  name: {
    fontSize: 18,
    color: colorDarkFontGithub
  },
  avatar: {
    height: 160,
    width: 160,
    borderRadius: 80,
    borderColor: "pink",
    borderWidth: 2,
  },
  imagemFundo: {
    flex: 1,
    resizeMode: "cover",
    height: "100%",
    width: "100%",
  },
  button: {
    backgroundColor: altColorFont,
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
  }
});