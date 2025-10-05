// mobile/components/CameraCapture.js
import React, { useRef, useState } from "react";
import { View, Button, StyleSheet, Image, Text } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";

export default function CameraCapture({ onCapture, onReset, capturedImage }) {
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState("front");
  const cameraRef = useRef(null);

  if (!permission) return <Text>Loading camera permission…</Text>;

  if (!permission.granted)
    return (
      <View style={styles.center}>
        <Text style={styles.text}>Camera access required.</Text>
        <Button title="Grant Permission" onPress={requestPermission} />
      </View>
    );

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({
        quality: 0.7,
        skipProcessing: true,
      });
      onCapture(photo);
    }
  };

  return (
    <View style={styles.container}>
      {!capturedImage ? (
        <CameraView ref={cameraRef} style={styles.camera} facing={facing}>
          <View style={styles.controls}>
            <Button
              title="Flip"
              onPress={() =>
                setFacing((prev) => (prev === "back" ? "front" : "back"))
              }
            />
            <Button title="Capture" onPress={takePicture} />
          </View>
        </CameraView>
      ) : (
        <>
          <Image source={{ uri: capturedImage.uri }} style={styles.preview} />
          <Button title="Try Again" onPress={onReset} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" },
  camera: {
    width: "90%",
    height: 400,
    borderRadius: 12,
    overflow: "hidden",
    justifyContent: "flex-end",
  },
  controls: {
    backgroundColor: "rgba(0,0,0,0.25)",
    padding: 12,
    alignItems: "center",
  },
  preview: {
    width: 300,
    height: 300,
    borderRadius: 10,
    marginVertical: 15,
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { textAlign: "center", marginBottom: 12 },
});