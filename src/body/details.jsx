import React, { useState } from 'react';
import './details.css';
import busData from '../assets/busdata';

const Details = () => {
    const [selectedPackage, setSelectedPackage] = useState(null);

    return (
        <div id="packages" className="details-main-container">
            <div className="details-card-container">
                {busData.map((bus) => (
                    <div className="card-holder" key={bus.id}>
                        <div className="card-holder-one">
                            <img src={bus.image} alt={`Bus ${bus.id}`} className="bus-image"/>
                            <div className="card-holder-one-para">
                                <p>Bus Name:</p>
                                <p>{bus.busname}</p>
                                <p>Capacity {bus.capacity}</p>
                            </div>
                        </div>
                        <div className="packages">
                            {bus.packages.map((pkg, index) => (
                                <button key={index} className="package-button"
                                    onClick={() => setSelectedPackage(pkg)}>
                                    {pkg.name}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Package Details Popup */}
            {selectedPackage && (
                <div className="modal" onClick={() => setSelectedPackage(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <span className="close-button" onClick={() => setSelectedPackage(null)}>&times;</span>
                        <h3>{selectedPackage.name}</h3>

                        <h4>Places:</h4>
                        <ul>
                            {selectedPackage.places.map((place, i) => <li key={i}>{place}</li>)}
                        </ul>

                        <h4>Food Options:</h4>
                        <p><strong>Breakfast:</strong> {selectedPackage.food.breakfast}</p>
                        <p><strong>Lunch:</strong> {selectedPackage.food.lunch}</p>
                        <p><strong>Dinner:</strong> {selectedPackage.food.dinner}</p>

                        <h4>Stay Options:</h4>
                        <ul>
                            {selectedPackage.stay.map((stayOption, i) => <li key={i}>{stayOption}</li>)}
                        </ul>

                        <h4>Package Includes:</h4>
                        <ul>
                            {selectedPackage.includes.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Details;
