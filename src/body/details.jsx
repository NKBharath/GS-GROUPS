import React, {useState} from 'react'
import './details.css'
import busData from '../assets/busdata';
const Details = () => {
    const[selectedPackage,setSelectedPackage] = useState(null);

  return (
    <div className="details-main-container">
      <div className="details-card-container">
      {busData.map((bus) => (
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