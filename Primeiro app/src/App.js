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
          {/* PIXEL ART DO HOMEM ARANHA */}
          <View /* Agrupamento de linhas */>
            <View style={style.rowller} /* Linha 0 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 1 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 2 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 3 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 4 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 5 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 6 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 7 */>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 8 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]}  /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 9 */>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 10 */>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 11 */>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 12 */>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 13 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 14 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.whitePixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 15 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 16 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 17 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 18 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 19 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 20 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 21 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 22 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 23 */>
              <View style={[style.defaultPixel, style.nullPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.bluePixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 24 */>
              <View style={[style.defaultPixel, style.deadPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.redPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <View style={style.rowller} /* Linha 25 */>
              <View style={[style.defaultPixel, style.deadPixel]}  /* Coluna 1 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 2 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 3 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 4 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 5 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 6 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 7 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 8 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 9 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 10 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 11 */>
              </View>
              <View style={[style.defaultPixel, style.deadPixel]} /* Coluna 12 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 13 */>
              </View>
              <View style={[style.defaultPixel, style.blackPixel]} /* Coluna 14 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 15 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 16 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 17 */>
              </View>
              <View style={[style.defaultPixel, style.nullPixel]} /* Coluna 18 */>
              </View>
            </View>
            <Text style={[style.defaultText]}>GuilhermeRocha0404</Text>
          </View>
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
  },
  defaultPixel: {
    width: 10,
    height: 10,
  },
  nullPixel: {
    backgroundColor: "transparent"
  },
  redPixel: {
    backgroundColor: "#d10000"
  },
  bluePixel: {
    backgroundColor: "#03329B"
  },
  blackPixel: {
    backgroundColor: "#1e1e1e"
  },
  whitePixel: {
    backgroundColor: "white"
  },
  deadPixel: {
    backgroundColor: "black"
  }
});