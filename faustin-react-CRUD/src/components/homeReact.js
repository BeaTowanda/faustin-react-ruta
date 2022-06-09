import React from 'react';

import PageHeading from './pageHeading';
import ContRow from "./contRow";
import ContentRow2 from "./contentRow2";
import ContentRow3 from "./contentRow3";
import Title from "./title";
import DataBase from "./dataBase";
import DataUsers from "./dataUsers";
import TittleUser from "./tittleUser";






function HomeReact() {
    return (
  
      <>
      <div className="container-fluid">
            <PageHeading />
            <ContRow />
            <ContentRow2/>
            <Title />
            <DataBase />
            <ContentRow3/>
            <TittleUser />
            <DataUsers />
          </div>
          </>
);
}

export default HomeReact;