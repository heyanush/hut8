import React from "react";
import { Text } from "react-native";
import GeneralContainer from "../../../common/container/generalContainer";
import { StyleGlobal } from "../../../common/styles/styles-global";

const HomeTab = () => {
  return (
    <GeneralContainer containerInnerStyle={StyleGlobal.container}>
      <Text style={StyleGlobal.title}>{"Home is"}</Text>
      <Text style={StyleGlobal.subTitle}>
        {"where wifi connects automatically"}
      </Text>
    </GeneralContainer>
  );
};

export default HomeTab;
