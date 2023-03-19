import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Error({ msg }) {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <>
      <div className="error-msg">{msg}</div>
      <p className="colorP">Return to previos page</p>

      <button className="btn_css" onClick={goBack}>
        Return
      </button>
    </>
  );
}
