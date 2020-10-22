import React from 'react';
import logo from './logo.svg';
import './Ristinolla.css';
import { useState, useEffect } from 'react'

function Ristinolla() {
  const [vuoro, setVuoro] = useState('x')
  useEffect(() => {

  },[vuoro])

  const nelioNapautus = (nid) => {
    if(document.getElementById(nid).innerHTML==='') {
      document.getElementById(nid).innerHTML=vuoro
      
      if(vuoro === 'x') {
        document.getElementById(nid).style="color:blue"
        setVuoro('o')
      } else {
        document.getElementById(nid).style="color:red"
        setVuoro('x')
      }

      tarkistaVoitto(nid)
    }
  }

  const tarkistaVoitto = (nid) => {
    
  }

  return (
    <div className="Ristinolla">
      <div class="rivi">
        <span class="Nelio" id="n11" onClick={() => nelioNapautus('n11')}></span>
        <span class="Nelio" id="n12" onClick={() => nelioNapautus('n12')}></span>
        <span class="Nelio" id="n13" onClick={() => nelioNapautus('n13')}></span>
      </div>
      <div class="rivi">
        <span class="Nelio" id="n21" onClick={() => nelioNapautus('n21')}></span>
        <span class="Nelio" id="n22" onClick={() => nelioNapautus('n22')}></span>
        <span class="Nelio" id="n23" onClick={() => nelioNapautus('n23')}></span>
      </div>
      <div class="rivi">
        <span class="Nelio" id="n31" onClick={() => nelioNapautus('n31')}></span>
        <span class="Nelio" id="n32" onClick={() => nelioNapautus('n32')}></span>
        <span class="Nelio" id="n33" onClick={() => nelioNapautus('n33')}></span>
      </div>
    </div>
  );
}

export default Ristinolla;
