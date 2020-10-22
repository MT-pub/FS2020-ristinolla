import React from 'react';
import logo from './logo.svg';
import './Ristinolla.css';
import { usetState, useEffect } from 'react'

function Ristinolla() {
  const [vuoro, setVuoro] = useState(x)
  useEffect(() => {

  },[vuoro])

  const nelioNapautus = (iidee) {
    
  }

  return (
    <div className="Ristinolla">
      <div class="rivi">
        <span class="nelio" id="n11" onClick={() => nelioNapautus(this.id)}></span>
        <span class="nelio" id="n12" onClick={() => nelioNapautus(this.id)}></span>
        <span class="nelio" id="n13" onClick={() => nelioNapautus(this.id)}></span>
      </div>
      <div class="rivi">
        <span class="nelio" id="n21" onClick={() => nelioNapautus(this.id)}></span>
        <span class="nelio" id="n22" onClick={() => nelioNapautus(this.id)}></span>
        <span class="nelio" id="n23" onClick={() => nelioNapautus(this.id)}></span>
      </div>
      <div class="rivi">
        <span class="nelio" id="n31" onClick={() => nelioNapautus(this.id)}></span>
        <span class="nelio" id="n32" onClick={() => nelioNapautus(this.id)}></span>
        <span class="nelio" id="n33" onClick={() => nelioNapautus(this.id)}></span>
      </div>
    </div>
  );
}

export default Ristinolla;
