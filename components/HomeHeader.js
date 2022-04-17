import { View, Text, Image, TextInput } from "react-native";
import React from "react";

import { SIZES, FONTS, COLORS, assets } from "../constants";

const HomeHeader = ({ onSearch }) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={assets.logo}
          resizeMode="contain"
          style={{
            width: 90,
            height: 25,
          }}
        />
        <View
          style={{
            width: 45,
            height: 45,
          }}
        />
        <Image
          source={assets.person01}
          resizeMode="contain"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        />
        <Image
          source={assets.person01}
          style={{
            position: "absolute",
            height: 15,
            width: 15,
            bottom: 0,
            right: 0,
          }}
        />
      </View>
      <View
        style={{
          marginVertical: SIZES.font,
        }}
      >
        <Text
          style={{
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          {" "}
          Hello, Scarlett 👋
        </Text>
        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's Find A MasterPiece
        </Text>
      </View>
      <View
        style={{
          marginTop: SIZES.font,
        }}
      >
        <View
          style={{
            width: "100%",
            backgroundColor: COLORS.gray,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: SIZES.base,
            paddingVertical: SIZES.small - 2,
          }}
        >
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginRight: SIZES.base,
            }}
          />
          <TextInput
            placeholder="Search For Your NFT Masterpiece"
            style={{
              flex: 1,
            }}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
