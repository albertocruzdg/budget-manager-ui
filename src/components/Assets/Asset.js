import React from 'react';

const Asset = props => (
  <article className="card mb-3">
    <div className="row no-gutters">
      <figure className="col-md-4">
        <img src={props.entityLogo} alt="asset logo" />
      </figure>
      <div className="col-md-8">
        <div className="card-body">
          <h5 className="card-title">{props.entityName}</h5>
          <p className="card-text">{props.description}</p>
          <p className="card-text">$ {props.amount}</p>
        </div>
      </div>
    </div>
  </article>
);

export default Asset;
