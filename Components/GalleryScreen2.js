import { useState } from 'react';
import { Text, Button, Image, View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function GalleryScreen2() {
  const [image, setImage] = useState([]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images', 'videos'],
      allowsMultipleSelection: true, // เปิดให้เลือกหลายภาพ
      allowsEditing: false, // เปิดให้แก้ไขภาพได้
      //   aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      // setImage(result.assets[0].uri); // เก็บ URI ของภาพแรกที่เลือก
      // setImage(result.assets.map(asset => asset.uri)); // เก็บ URI ของภาพทั้งหมดที่เลือกล่าสุด
      setImage((prevImages) => [...prevImages, ...result.assets.map((asset) => asset.uri)]) // เก็บ URI ของภาพทั้งหมดที่เลือกลทั้งหมด
    }
  };

  //ลบภาพ
  const deleteImage = (uri) => {
    setImage((prevImages) => prevImages.filter((imageUri) => imageUri !== uri));
  }

  // แบ่งภาพเป็นกลุ่มละ 3 ภาพ
  const chunkArray = (array, size) => {
    return array.reduce((acc, _, index) => {
      if (index % size === 0) acc.push(array.slice(index, index + size));
      return acc;
    }, []);
  };

  return (
    <View style={styles.container}>
      <Button title="Pick images" onPress={pickImage} />

      {image.length === 0 && <Text style={styles.text}>กรุณาเลือกรูปภาพ</Text>}

      <ScrollView>
        {chunkArray(image, 3).map((row, rowIndex) => (
          // map แถวของภาพที่ถูกแบ่งเป็นชุดละ 3 ภาพ
          <View key={rowIndex} style={styles.row}>

            {row.map((uri, index) => (
              // map ภาพแต่ละภาพในแถว
              <View key={index} style={{ position: 'relative' }}>

                {/* แสดงภาพจาก URI */}
                <Image source={{ uri }} style={styles.image} />

                {/* ปุ่มลบภาพ */}
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => deleteImage(uri)} // เมื่อกดจะเรียกฟังก์ชันลบภาพโดยส่ง URI ไป
                >
                  <Text style={styles.deleteText}>X</Text>
                </TouchableOpacity>

              </View>
            ))}

          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    margin: 5,
    borderRadius: 10,
  },
  deleteButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
