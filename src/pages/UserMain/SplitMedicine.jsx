import React from 'react';
import { Link } from 'react-router-dom';

export default function SplitMedicine() {
  return (
    <Link to={`/medicinesearch`} style={{ textDecoration: 'none' }}>
      <div className="">
        <Link to="/map" style={{ textDecoration: 'none' }}>
          <img
            src="/assets/images/UserMainImg/imgMedicine.png"
            alt="Watson Pharmacy"
            style={{ width: '300px', height: '250px' }}
          />
          <p style={{ marginBottom: 0 }} />
        </Link>
      </div>
    </Link>
  );
}
