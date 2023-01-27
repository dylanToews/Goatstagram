import { View, Text, Image, TextInput } from "react-native";
import React, { useState } from "react";
import * as Yup from "yup";
import { Formik } from "formik";

const PLACEHOLDER_IMG =
  "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-image-web-flaticons-lineal-color-flat-icons-6.png";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit!"),
});

const FormikPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);

  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={(values) => console.log(values)}
      validationSchema={uploadPostSchema}
    >
      {({
        handleBlur,
        handleChange,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View>
            <Image
              source={{ uri: PLACEHOLDER_IMG }}
              style={{ width: 100, height: 100 }}
            />

            <TextInput
              style={{ color: "white", fontSize: 20 }}
              placeholder={"Write a caption..."}
              placeholderTextColor={"gray"}
              multiline={true}
            />
            <TextInput
                          style={{ color: "white" }}

              placeholder= {"Enter Image Url"}
              placeholderTextColor={"gray"}
            />
          </View>
        </>
      )}
    </Formik>
  );
};

export default FormikPostUploader;
