import React, {useState} from 'react'
import './details.css'
import busData from '../assets/busdata';
const Details = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPackage, setSelectedPackage] = useState(null);
  
    const busesPerPage = 3;
    const currentBuses = busData.slice(
      currentIndex,
      currentIndex + busesPerPage
    );
  
    const handleNext = () => {
      if (currentIndex + busesPerPage < busData.length) {
        setCurrentIndex(currentIndex + busesPerPage);
      }
    };
  
    const handlePrev = () => {
      if (currentIndex - busesPerPage >= 0) {
        setCurrentIndex(currentIndex - busesPerPage);
      }
    };
  return (
    <div className="container">
      {currentBuses.map((bus) => (
        <div className="card" key={bus.id}>
          <img src={bus.image} alt={`Bus ${bus.id}`} className="bus-image"/>
          <div className="packages">
            {bus.packages.map((pkg, index) => (
              <button
                key={index}
                className="package-button"
                onClick={() => setSelectedPackage(pkg)}
              >
                {pkg.name}
              </button>
            ))}
          </div>
        </div>
      ))}

      <div className="navigation">
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex + busesPerPage >= busData.length}
        >
          Next
        </button>
      </div>

      {selectedPackage && (
        <div className="modal" onClick={() => setSelectedPackage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedPackage.name}</h3>
            <p>{selectedPackage.details}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Details