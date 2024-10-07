// const fetchDogBreeds = async () => {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/list/all");
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     console.log(data.message); // Logs the list of breeds
//     return data.message;
//   } catch (error) {
//     console.error("There was a problem with the fetch operation:", error);
//   }
// };

// // Call the function to fetch the breeds
// fetchDogBreeds();

// const fetchRandomDogImage = async () => {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     if (!response.ok) {
//       throw new Error("Failed to fetch image");
//     }
//     const data = await response.json();
//     setImageUrl(data.message); // Store the image URL in the state
//     setLoading(false);
//   } catch (error) {
//     setError("Error fetching image");
//     setLoading(false);
//   }
// };

// // Fetch images from the API based on the number selected
// const fetchDogImages = async (limit: number) => {
//   setLoading(true); // Set loading to true
//   setError(null); // Reset error
//   try {
//     const response = await fetch(
//       `https://dog.ceo/api/breeds/image/random/${limit}`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch images");
//     }
//     const data = await response.json();
//     setDogImages(data.message); // Set the fetched image URLs
//   } catch (err) {
//     setError("Error fetching images");
//   } finally {
//     setLoading(false); // End loading
//   }
// };
