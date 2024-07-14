export const resolveImagePath = (imagePath: string): string => {
    // Extract the filename from the JSON path
    const filename = imagePath.split("/").pop();
    // Return the resolved path in the public/images directory
    return `/images/${filename}`;
  };