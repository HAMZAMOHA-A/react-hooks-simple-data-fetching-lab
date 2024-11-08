// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to hold the image URL and loading state
  const [dogImage, setDogImage] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data when the component mounts
  useEffect(() => {
    // Start the fetch request
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Parse the response to JSON
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL
        setLoading(false); // Set loading to false once the image is loaded
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setLoading(false); // Stop loading in case of an error
      });
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div>
      {/* Display "Loading..." message if the data is still being fetched */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={dogImage} alt="A Random Dog" style={{ maxWidth: "100%", height: "auto" }} />
      )}
    </div>
  );
}

export default App;
