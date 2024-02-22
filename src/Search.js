// import React, { useState } from "react";

// import "./Search.css";

// export default function Search(props) {
//   const [city, setCity] = useState(props.cityDefault);

//   function handleSubmit(event) {
//     event.preventDefault();
//     console.log(city);
//   }

//   function handleCityChange(event) {
//     setCity(event.target.value);
//   }

//   return (
//     <div className="Search">
//       <div className="Flex">
//         <form id="EnterCityForm" onSubmit={handleSubmit}>
//           <div className="search-bar">
//             <input
//               className="search-input"
//               type="search"
//               placeholder="Enter a city"
//               id="EnteredCity"
//               autoComplete="off"
//             />
//             <input
//               type="submit"
//               value="search"
//               className="search-icon material-symbols-outlined"
//               onChange={handleCityChange}
//             />{" "}
//           </div>
//         </form>
//         <button id="CurrentLocationButton" title="Use current location">
//           <span className="material-symbols-outlined">location_searching</span>
//         </button>
//       </div>
//     </div>
//   );
// }
