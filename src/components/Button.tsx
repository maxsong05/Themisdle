/*function handleClick() {
  console.log("hi");
}

function Button() {
  return (
    <>
      <a
        href="#"
        className="btn btn-outline-success m-2"
        type="button"
        //target="_blank" //opens in new tab
        onClick={handleClick}
      >
        Play Card Mode
      </a>

      <a
        href="https://tot.wiki/wiki/Cards"
        className="btn btn-outline-primary"
        type="button"
        target="_blank" //opens in new tab
      >
        Wiki
      </a>
    </>
  );
}*/
import { useState } from "react";

function Button() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true); // Update the state to show the image
  };

  return (
    <div>
      <a
        href="#"
        className="btn btn-outline-success m-2"
        type="button"
        onClick={handleClick}
      >
        Play Card Mode
      </a>

      {/* Conditionally render the image */}
      <br />
      {showImage && (
        <img
          src="https://tot.wiki/images/f/f2/Artem_%22Staying_Humble%22_preview.png" // Replace with your image path
          alt="Card Name" // Replace with a description of the image
          style={{ marginTop: "5px", width: "172px", height: "351px" }} // Adjust the style as needed
        />
      )}
    </div>
  );
}

export default Button;
