
import React from 'react';

import PageHeadingDetail from "./pageHeadingDetail";

import ContDetail from './contDetail';
import DataCompra from './dataCompra';
import TittleCompra from './tittleCompra';

function SeeProduct() {
    return (
  
      <>
      <div className="container-fluid">
            <PageHeadingDetail />
            <ContDetail />
            <TittleCompra />
             <DataCompra /> 
          </div>
          </>
);
}

export default SeeProduct;