import React, { useState, useEffect } from 'react';
import './styles/styles.css'; 

function Fetcheddata(props) {
  const { data } = props;
  const [showPopup, setShowPopup] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const closePopup = () => {
    setShowPopup(false);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = data.products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>In solidarity with Palestine, we've removed pro-genocide food outlets from our list.</p>
            <button onClick={closePopup}>OK</button>
          </div>
        </div>
      )}

      <h1>Explore Halal eateries.</h1>
      <h3>This is our curated selection of Halal-certified food spots and Muslim-owned food businesses.</h3>
      
      <div className="container">
        {currentProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image">
              <img src={product.images} alt={product.title} className="max-w-70 h-auto" />
            </div>
            <div className="product-details mt-4">
              <h2 className="mb-2">{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        {Array.from({ length: Math.ceil(data.products.length / productsPerPage) }, (_, i) => (
          <button key={i + 1} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
    </>
  );
}

export default Fetcheddata;
