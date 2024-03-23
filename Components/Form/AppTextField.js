import { StyleSheet, Text, View } from "react-native";
import React from "react";
import AppTextInput from "./AppTextInput";
import ErrorMsg from "../ErrorMsg";
import { useFormikContext } from "formik";
import colors from "../../config/colors";

export default function AppTextField({ name,style, ...otherProps }) {
  const { setFieldTouched, handleChange, errors, touched } = useFormikContext();
  return (
    <View>
      <AppTextInput
        placeholderTextColor="grey"
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        style={style}
        {...otherProps}
        
      />
      {touched[name] && <ErrorMsg error={errors[name]}></ErrorMsg>}
    </View>
  );
}

const styles = StyleSheet.create({});
