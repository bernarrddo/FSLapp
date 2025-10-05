from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import torch
import numpy as np
from torchvision import models
from io import BytesIO
import cv2

app = FastAPI()

# Load your trained model here
model = torch.load('backend/models/model.pth')
model.eval()  # Set to evaluation mode

@app.post("/predict/sign-to-text")
async def sign_to_text(file: UploadFile = File(...)):
    image_bytes = await file.read()
    img = np.frombuffer(image_bytes, np.uint8)
    image = cv2.imdecode(img, cv2.IMREAD_COLOR)

    # Preprocess image (example)
    preprocessed_image = preprocess_image(image)

    # Run inference
    with torch.no_grad():
        output = model(preprocessed_image)

    # Assume output is a predicted label
    predicted_text = output.argmax().item()  # Modify this based on your model
    predicted_label = 'Good Morning'  # Map predicted index to a label

    # Check feedback (dummy logic, adjust as needed)
    target = 'Good Morning'
    if predicted_label.lower() == target.lower():
        feedback = "Correct ✅"
    else:
        feedback = f"Incorrect ❌ — Target: {target}"

    return {"text": predicted_label, "feedback": feedback}

def preprocess_image(image):
    # Add your image preprocessing steps here
    return torch.tensor(image).unsqueeze(0).float()

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
