import React, { useState } from 'react';

const AssetForm = () => {
  const [entityName, setEntityName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState();

  const [asset, setAsset] = useState({
    entityName: '',
    description: '',
    amount: 0
  });

  const handleEntityNameChange = event => setEntityName(event.target.value);
  const handleDescriptionChange = event => setDescription(event.target.value);
  const handleAmountChange = event => setAmount(event.target.value);
  const handleSubmit = event => setAsset({ entityName, description, amount });

  return (
    <div>
      <form>
        <div className="row">
          <div className="form-group col">
            <label htmlFor="entity-name">Entity Name</label>
            <input
              type="text"
              className="form-control"
              id="entity-name"
              placeholder="Entity Name"
              value={entityName}
              onChange={handleEntityNameChange}
            />
          </div>
          <div className="form-group col">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Description"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="form-group col">
            <label htmlFor="amount">Amount</label>
            <input
              type="money"
              className="form-control"
              id="amount"
              placeholder="0"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onSubmit={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AssetForm;
