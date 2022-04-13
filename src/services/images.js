export async function getImage() {
  const response = await fetch(`https://api.cloudinary/v1_1/dumtya5g3/image/upload`);
  const data = await response.json();

  return data;
}
