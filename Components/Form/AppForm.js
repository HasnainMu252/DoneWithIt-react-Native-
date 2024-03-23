import { StyleSheet } from "react-native";
import React from "react";
import { Formik } from "formik";

export default function (
  { initialValues, onSubmit, validationSchema, children,style }
  
) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
      style={style}
    >
      {() => <>{children}</>}
    </Formik>
  );
}

const styles = StyleSheet.create({});
