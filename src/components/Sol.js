import React from 'react';
import '../stylesheets/Sol.css';

const Sol = () => {

  return (
    <div>
      <div className="solClock">
        Sol 25
      </div>
      <img src="https://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01001/opgs/edr/fcam/FLB_486349618EDR_F0481570FHAZ00323M_.JPG" style={{width: "50px"}} />
      Status: GREEN
    </div>
  )
}

export default Sol;
