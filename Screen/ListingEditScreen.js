import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  AppForm as Form,
  AppTextInput as FormField,
  TextPicker as Picker ,
  SubmitButton,
} from "../Components/Form";
import ItemPicker from "../Components/ItemPicker";
import TextPicker from "../Components/TextPicker";
import Screen from "../Components/Screen";
// import { Formik } from "formik";
// import { useFormikContext } from "formik";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
];

function ListingEditScreen() {
  const [selectCategory, setSelectCategory] = useState();

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onPress={(value) => console.log(value)}
        validationSchema={validationSchema}
      >
        <FormField
          maxLength={255}
          name="title"
          placeholder="Title"
          width={300}
        />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <TextPicker
          selectCategory={selectCategory}
          onSelectCategory={setSelectCategory}
          items={categories}
          name="category"
          placeholder="Category"
        />

        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />

        <SubmitButton title="Post" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
