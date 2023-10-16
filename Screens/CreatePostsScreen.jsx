import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Button,
  ScrollView,
  TextInput,
} from "react-native";
import { SvgCamera } from "../assets/SvgCamera";
import { SVGtrashBin } from "../assets/SVGtrashBin";
import React, { useState, useEffect, useRef } from "react";
import * as MediaLibrary from "expo-media-library";
import { Camera, RNCamera } from "expo-camera";
import { getDownloadURL, ref, uploadBytes } from "@firebase/storage";
// import { addPostThunk, getPostsThunk } from "../../redux/posts/postsOperations";
import { db, storage } from "../config";
import { useDispatch } from "react-redux";
import { addPostThunk } from "../redux/posts/postsOperations";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = () => {
  const [title, setTitle] = useState("");
  const cameraRef = useRef(null);
  // const [permission, requestPermission] = Camera.useCameraPermissions();
  const [photoLink, setphotoLink] = useState("");
  const [location, setLocation] = useState(null);
  const [hasPermission, setHasPermission] = Camera.useCameraPermissions();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    setHasPermission();
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
    // (async () => {
    //   let { status } = await Location.requestForegroundPermissionsAsync();
    //   if (status !== "granted") {
    //     console.log("Permission to access location was denied");
    //   }
    //   let location = await Location.getCurrentPositionAsync({});
    //   const coords = {
    //     latitude: location.coords.latitude,
    //     longitude: location.coords.longitude,
    //     latitudeDelta: 0.0922,
    //     longitudeDelta: 0.0421,
    //   };
    //   setLocation(coords);
    // })();
  }, []);

  if (!hasPermission) {
    return <View />;
  }
  if (!hasPermission.granted) {
    return <Text>No access to camera</Text>;
  }

  const makePhoto = async () => {
    if (cameraRef.current) {
      const options = {
        skipProcessing: true,
      };
      try {
        const data = await cameraRef.current.takePictureAsync(options);
        setphotoLink(data.uri);
      } catch (error) {}
    }
  };

  const uploadImg = async () => {
    try {
      const response = await fetch(photoLink);
      const file = await response.blob();
      const imgRef = ref(storage, `photos/${file._data.blobId}`);
      await uploadBytes(imgRef, file).then((snapshot) => {
        console.log("Uploaded a blob or file!", snapshot);
      });
      const photoUrl = await getDownloadURL(imgRef);
      console.log(photoUrl);
      return photoUrl;
    } catch (error) {
      console.log(error);
    }
  };

  const publicPost = async () => {
    try {
      const img = await uploadImg();
      console.log(img);
      const newPost = {
        // location: location,
        title: title,
        // locationName: photoLocetion,
        imgRef: img || "",
        // coments: [],
      };
      dispatch(addPostThunk(newPost));
      navigation.navigate("PostsScreen");
      // // ====================
      // setPhotoName("");
      // setPhotoLocetion("");
      // setIsFormValid(false);
      setHasPermission(null);
      // setCameraRef(null);
      // setPhoto("");
      // setLocation(null);
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  };

  const handleInputChange = (title) => {
    setTitle(title);
  };

  return (
    <ScrollView>
      <View>
        <Camera ref={cameraRef} style={{ flex: 1 }}>
          <View>
            <Image source={{ uri: photoLink }} />
          </View>
          <TouchableOpacity onPress={makePhoto} style={styles.container}>
            <SvgCamera />
          </TouchableOpacity>
        </Camera>
        <Text style={styles.lable}>Завантажити фото</Text>
        <TextInput
          style={styles.input}
          placeholder="Назва..." // Placeholder text
          value={title}
          onChangeText={(title) => handleInputChange(title)}
        />
        {/* <View style={createPostsStyles.inputWrapper}>
          <Feather name="map-pin" size={24} color="#7365C3" />
          <TextInput
            placeholder="Місцевість..."
            style={createPostsStyles.input}
            value={mapLocation.isLoading ? "Location is updating . . ." : place}
            onChangeText={(value) => setPlace(value)}
            onBlur={() => place && getMapLocation()}
            placeholderTextColor="#BDBDBD"
          /></View> */}
      </View>
      <TouchableOpacity style={styles.btnWrapper} onPress={publicPost}>
        <Text style={styles.btn}>Опублікувати</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.container}>
        <SVGtrashBin />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CreatePostsScreen;

const styles = StyleSheet.create({
  btnWrapper: {
    height: 50,
    paddingLeft: 32,
    paddingRight: 32,
    paddingBottom: 16,
    paddingTop: 16,
    marginTop: 43,
    marginBottom: 16,
    borderRadius: 100,
    backgroundColor: "#FF6C00",
  },
  container: {
    width: 343,
    height: 240,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginHorizontal: "auto",
    marginVertical: 0,
    alignSelf: "center",
    alignItems: "center",
  },

  iconContainer: {
    flexDirection: "row", // Расположение элементов в линию
    alignItems: "center", // Выравнивание элементов по центру вертикально
    padding: 16, // Добавляем отступы по бокам
  },
  icon: {
    marginRight: 39,
  },
  iconWithGap: {
    marginRight: 39,
  },
  separator: {
    width: "100%",
    height: 0.5,
    backgroundColor: "grey", // Цвет линии
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  iconImage: {
    width: 24,
    height: 24,
    marginRight: 16,
  },
  userInfo: {
    flex: 1,
  },
  emailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  nameText: {
    fontSize: 16,
  },
  btn2: {
    width: 243,
    padding: 16,
    marginVertical: 12,
    borderRadius: 100, // Додано borderRadius
    backgroundColor: "orange", // Додано background
    display: "flex",
    paddingVertical: 16,
    paddingHorizontal: 32,
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  },
  btn: {
    color: "#fff",
    fontFamily: "Roboto",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    height: 32,
  },
  lable: {
    color: "#BDBDBD", // Change the color here
    fontFamily: "Roboto", // Change the font family here
    fontSize: 16, // Change the font size here
    fontStyle: "normal", // Change the font style here ('normal', 'italic', etc.)
    fontWeight: "400", // Change the font weight here ('400', 'bold', etc.)
    lineHeight: 24, // Change the line height here},
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCCCCC",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

// import { View, TouchableOpacity, Image, TextInput, Text } from "react-native";
// import { StyleSheet } from "react-native";
// import { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { useNavigation } from "@react-navigation/native";
// import * as ImagePicker from "expo-image-picker";
// import * as MediaLibrary from "expo-media-library";
// import * as Location from "expo-location";
// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { Feather, FontAwesome } from "@expo/vector-icons";

// // import { selectUser } from "../redux/auth/authSelectors";
// // import { addPost } from "../redux/posts/postsOperations";
// // import { createPostsStyles } from "./CreatePostsScreenStyles";

// let selectUrer;
// let addPost;

// const defaultMapLocation = {
//   isLoading: false,
//   latitude: null,
//   longitude: null,
// };

// export default function CreatePostScreen() {
//   const [isCameraPermissionDenied, setCameraDenied] = useState(false);
//   const [image, setImage] = useState(null);
//   const [title, setTitle] = useState("");
//   const [place, setPlace] = useState("");
//   const [mapLocation, setMapLocation] = useState({ ...defaultMapLocation });
//   const isDataFullFilled = image && title && place && !mapLocation.isLoading;

//   const { uid } = useSelector(1);
//   const { navigate } = useNavigation();
//   const dispatch = useDispatch();

//   async function makePhoto() {
//     const { granted } = await ImagePicker.requestCameraPermissionsAsync();
//     if (!granted) {
//       setCameraDenied(true);
//       return alert("Permission to camera access was denied");
//     }

//     await MediaLibrary.requestPermissionsAsync();
//     const { canceled, assets } = await ImagePicker.launchCameraAsync({
//       quality: 1,
//       allowsEditing: true,
//       allowsMultipleSelection: false,
//     });
//     if (!canceled) {
//       await MediaLibrary.createAssetAsync(assets[0].uri);
//       setImage(assets[0].uri);
//       setCameraDenied(false);
//     }
//   }

//   function removePhoto() {
//     setImage(null);
//   }

//   async function getMapLocation() {
//     const { status } = await Location.requestForegroundPermissionsAsync();
//     if (status !== "granted") {
//       return setMapLocation({ ...defaultMapLocation });
//     }

//     setMapLocation((state) => ({ ...state, isLoading: true }));
//     const {
//       coords: { latitude, longitude },
//     } = await Location.getCurrentPositionAsync({
//       accuracy: Location.LocationAccuracy.Low,
//     });
//     setMapLocation((state) => ({
//       ...state,
//       isLoading: false,
//       latitude,
//       longitude,
//     }));
//   }

//   function handleSubmit() {
//     dispatch(
//       addPost({
//         authorID: uid,
//         image,
//         title: title.trim(),
//         place: place.trim(),
//         mapLocation: {
//           latitude: mapLocation.latitude,
//           longitude: mapLocation.longitude,
//         },
//         comments: [],
//         likes: 0,
//       })
//     );
//     resetData();
//     navigate("PostsScreen");
//   }

//   function resetData() {
//     setImage(null);
//     setTitle("");
//     setPlace("");
//     setMapLocation({ ...defaultMapLocation });
//   }

//   return (
//     <KeyboardAwareScrollView style={createPostsStyles.container}>
//       <TouchableOpacity
//         style={createPostsStyles.imgWrapper}
//         onPress={image ? removePhoto : makePhoto}
//       >
//         {image && (
//           <Image style={createPostsStyles.imgSize} source={{ uri: image }} />
//         )}
//         <View
//           style={[
//             createPostsStyles.cameraBtn,
//             image && createPostsStyles.transparent,
//           ]}
//         >
//           <FontAwesome
//             name="camera"
//             size={24}
//             color={image ? "#fff" : "#7365C3"}
//           />
//         </View>
//       </TouchableOpacity>
//       {isCameraPermissionDenied ? (
//         <Text style={createPostsStyles.warning}>
//           To create a new post, please allow access to your camera.
//         </Text>
//       ) : (
//         <Text style={createPostsStyles.cameraText}>
//           {image ? "Редагувати фото" : "Завантажте фото"}
//         </Text>
//       )}

//       <View style={createPostsStyles.inputsList}>
//         <View style={createPostsStyles.inputWrapper}>
//           <TextInput
//             placeholder="Назва..."
//             style={createPostsStyles.input}
//             value={title}
//             onChangeText={(value) => setTitle(value)}
//             placeholderTextColor="#BDBDBD"
//           />
//         </View>
//         <View style={createPostsStyles.inputWrapper}>
//           <Feather name="map-pin" size={24} color="#7365C3" />
//           <TextInput
//             placeholder="Місцевість..."
//             style={createPostsStyles.input}
//             value={mapLocation.isLoading ? "Location is updating . . ." : place}
//             onChangeText={(value) => setPlace(value)}
//             onBlur={() => place && getMapLocation()}
//             placeholderTextColor="#BDBDBD"
//           />
//         </View>
//       </View>

//       <TouchableOpacity
//         style={[
//           createPostsStyles.submitBtn,
//           isDataFullFilled && createPostsStyles.activeBtn,
//         ]}
//         disabled={!isDataFullFilled}
//         onPress={handleSubmit}
//       >
//         <Text
//           style={[
//             createPostsStyles.submitBtnText,
//             isDataFullFilled && createPostsStyles.activeText,
//           ]}
//         >
//           Опубліковати
//         </Text>
//       </TouchableOpacity>

//       <TouchableOpacity style={createPostsStyles.resetBtn} onPress={resetData}>
//         <Feather name="trash-2" size={24} color="#7365C3" />
//       </TouchableOpacity>
//     </KeyboardAwareScrollView>
//   );
// }

// export const createPostsStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingLeft: 16,
//     paddingRight: 16,
//     paddingTop: 32,
//     backgroundColor: "#fff",
//   },
//   imgWrapper: {
//     height: 240,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#F6F6F6",
//     borderColor: "#E8E8E8",
//     borderWidth: 1,
//     borderRadius: 8,
//   },
//   imgSize: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 8,
//   },
//   cameraBtn: {
//     position: "absolute",
//     width: 60,
//     height: 60,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//     borderRadius: 50,
//   },
//   transparent: {
//     backgroundColor: "rgba(255, 255, 255, 0.30)",
//   },
//   cameraText: {
//     marginTop: 8,
//     color: "#BDBDBD",
//     fontSize: 16,
//   },
//   warning: {
//     color: "red",
//     fontSize: 18,
//     textAlign: "center",
//   },
//   inputsList: {
//     rowGap: 16,
//     marginVertical: 32,
//   },
//   inputWrapper: {
//     flexDirection: "row",
//     alignItems: "center",
//     columnGap: 4,
//     borderBottomWidth: 1,
//     borderBottomColor: "#E8E8E8",
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     fontSize: 16,
//     color: "#212121",
//   },
//   submitBtn: {
//     marginBottom: 120,
//     alignItems: "center",
//     padding: 16,
//     fontSize: 16,
//     backgroundColor: "#F6F6F6",
//     borderRadius: 100,
//   },
//   activeBtn: {
//     backgroundColor: "#7365C3",
//   },
//   submitBtnText: {
//     color: "#BDBDBD",
//     fontSize: 16,
//   },
//   activeText: {
//     color: "#ffffff",
//   },
//   resetBtn: {
//     width: 70,
//     height: 40,
//     alignItems: "center",
//     justifyContent: "center",
//     marginLeft: "auto",
//     marginRight: "auto",
//     backgroundColor: "#F6F6F6",
//     borderRadius: 20,
//   },
// });
