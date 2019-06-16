import React from 'react';
import Asset from '../../components/Assets/Asset';
import santanderRioLogo from './images/santander-rio.png';

const AssetList = () => (
  <section>
    <Asset
      entityLogo={santanderRioLogo}
      entityName="Santander Rio"
      amount="100.000"
    />
  </section>
);

export default AssetList;
