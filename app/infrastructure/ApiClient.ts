const getImages = async (width: number, height: number, imgCount: number) => {
  try {
    const imagePromises = Array(imgCount).fill(null).map(async () => {
      const response = await fetch(`https://picsum.photos/${width}/${height}.webp?random=${Math.floor(Math.random() * 1084) + 1}`);
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    });

    const imageUrls = await Promise.all(imagePromises);

    return imageUrls;
  } catch (error) {
    console.error('Error fetching images:', error);
  }
};

export default getImages;
