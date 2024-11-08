import React, { useState } from "react";
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image,Modal,ScrollView,} from "react-native";
import { MaterialIcons } from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";
import {useFonts,Roboto_300Light_Italic,} from "@expo-google-fonts/roboto";

const Homescreen = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    fields: [],
  });
  const [savedForms, setSavedForms] = useState([]);

  let [fontsLoaded] = useFonts({
    Roboto_300Light_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleInputChange = (index, value) => {
    const newFields = [...formData.fields];
    newFields[index] = value;
    setFormData({ ...formData, fields: newFields });
  };

  const addField = () => {
    setFormData({ ...formData, fields: [...formData.fields, ""] });
  };

  const saveForm = () => {
    setSavedForms([...savedForms, { ...formData, editable: false }]);
    setFormData({ title: "", fields: [] });
    setModalVisible(false);
  };

  const deleteForm = (index) => {
    const updatedForms = savedForms.filter((_, i) => i !== index);
    setSavedForms(updatedForms);
  };

  const updateSavedForm = (formIndex, fieldIndex, value) => {
    const updatedForms = savedForms.map((form, i) => {
      if (i === formIndex) {
        const updatedFields = [...form.fields];
        updatedFields[fieldIndex] = value;
        return { ...form, fields: updatedFields };
      }
      return form;
    });
    setSavedForms(updatedForms);
  };

  const toggleEditable = (index) => {
    const updatedForms = savedForms.map((form, i) => {
      if (i === index) {
        return { ...form, editable: !form.editable };
      }
      return form;
    });
    setSavedForms(updatedForms);
  };

  const updateFormTitle = (formIndex, title) => {
    const updatedForms = savedForms.map((form, i) => {
      if (i === formIndex) {
        return { ...form, title };
      }
      return form;
    });
    setSavedForms(updatedForms);
  };

  return (
    <View style={styles.view}>
      {savedForms.length === 0 ? (
        <View style={styles.placeholder}>
          <Image
            style={styles.images}
            source={require("../assets/essa.png")}
          />
          <Text style={styles.text}>
            Para começar a acompanhar seu progresso, adicione os treinos à sua
            lista.
          </Text>
        </View>
      ) : (
        <ScrollView style={styles.formContainer}>
          {savedForms.map((form, formIndex) => (
            <View key={formIndex} style={styles.savedForm}>
              <View style={styles.formHeader}>
                {form.editable ? (
                  <TextInput
                    style={styles.editableTitle}
                    value={form.title}
                    onChangeText={(text) => updateFormTitle(formIndex, text)}
                    onBlur={() => toggleEditable(formIndex)}
                  />
                ) : (
                  <TouchableOpacity onPress={() => toggleEditable(formIndex)}>
                    <Text style={styles.savedFormText}>
                      {form.title || "Clique para definir o título"}
                    </Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity onPress={() => deleteForm(formIndex)}>
                  <MaterialIcons name="delete" size={24} color="#ff1500" />
                </TouchableOpacity>
              </View>
              {form.fields.map((field, fieldIndex) => (
                <TextInput
                  key={fieldIndex}
                  style={styles.input}
                  placeholder={`Campo ${fieldIndex + 1}`}
                  value={field}
                  onChangeText={(text) =>
                    updateSavedForm(formIndex, fieldIndex, text)
                  }
                />
              ))}
            </View>
          ))}
        </ScrollView>
      )}

      <View style={styles.more}>
        <TouchableOpacity>
          <MaterialIcons name="dehaze" size={30} color="red" />
        </TouchableOpacity>
      </View>

      <View style={styles.add}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <MaterialIcons name="add-circle" size={50} color="red" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <MaterialIcons name="arrow-back-ios" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.modalText}>Preencha o Formulário</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Título"
            value={formData.title}
            onChangeText={(text) => setFormData({ ...formData, title: text })}
          />
          {formData.fields.map((field, index) => (
            <TextInput
              key={index}
              style={styles.input}
              placeholder={`Campo ${index + 1}`}
              value={field}
              onChangeText={(text) => handleInputChange(index, text)}
            />
          ))}
          <TouchableOpacity style={styles.iconadd} onPress={addField}>
            <MaterialIcons name="add" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.iconButton} onPress={saveForm}>
              <MaterialIcons name="done" size={24} color="#fff" />
            </TouchableOpacity>
        
          </View>
        </View>
      </Modal>

      <View style={styles.tab}>
        <TouchableOpacity
          onPressIn={() => setIsFocused(true)}
          onPressOut={() => setIsFocused(false)}
          style={styles.menu}
        >
          <Animatable.View
            animation={isFocused ? "zoomIn" : undefined}
            iterationCount={isFocused ? "infinite" : 1}
          >
            <MaterialIcons name="home" size={30} color="white" />
          </Animatable.View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <Animatable.View
            animation="zoomIn"
            duration={2000}
            style={styles.menu}
          >
            <MaterialIcons name="shopping-cart" size={30} color="white" />
          </Animatable.View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <Animatable.View
            animation="zoomIn"
            duration={2000}
            style={styles.menu}
          >
            <MaterialIcons name="dining" size={30} color="white" />
          </Animatable.View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menu}>
          <Animatable.View
            animation="zoomIn"
            duration={2000}
            style={styles.menu}
          >
            <MaterialIcons name="list-alt" size={30} color="white" />
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: "#ffffff",
    justifyContent: "flex-end",
  },
  placeholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  images: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    fontFamily: "Roboto_300Light_Italic",
    textAlign: "center",
    marginHorizontal: 20,
  },
  formContainer: {
    flex: 1,
    marginTop: 20,
  },
  tab: {
    justifyContent: "flex-end",
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#fcfcfc",
    height: 60,
    backgroundColor: "#000000",
  },
  menu: {
    justifyContent: "flex-end",
    justifyContent: "space-around",
  },
  more: {
    justifyContent: "flex-start",
    flexDirection: "row",
    position: "absolute",
    top: 30,
    left: 5,
  },
  add: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    position: "absolute",
    bottom: 70,
    right: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    width: "100%",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  scrollView: {
    marginVertical: 10,
  },
  savedForm: {
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginHorizontal: 20,
    marginVertical: 10,
    marginLeft: 35,
  },
  savedFormText: {
    fontSize: 16,
    marginBottom: 5,
  },
  editableTitle: {
    fontSize: 16,
    fontWeight: "bold",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 5,
    textAlign: "center",
  },
  iconButton: {
    backgroundColor: "#ff1500",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    flex: 1,
  },
  iconadd: {
    backgroundColor: "#ff1500",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    height: 50,
    left: 120,
    
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  formHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default Homescreen;