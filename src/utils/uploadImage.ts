const fileInput = document.getElementById('picture');

fileInput.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  
  // Create a FormData object to send the file
  const formData = new FormData();
  formData.append('picture', file);

  try {
    // Send the file to the server
    const response = await axios.post('/upload', formData);
    console.log('File uploaded successfully:', response.data.imageUrl);
  } catch (error) {
    console.error('Error uploading file:', error);
  }
});
