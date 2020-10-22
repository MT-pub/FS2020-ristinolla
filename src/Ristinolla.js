import React from 'react';
import logo from './logo.svg';
import './Ristinolla.css';
import { useState, useEffect } from 'react'

function Ristinolla() {
  const [vuoro, setVuoro] = useState('x')
  const [voitto, setVoitto] = useState('')
  const [laskuri, setLaskuri] = useState(1)
  useEffect(() => {
    if (voitto === 'x') {
      document.getElementById("voittaja").innerHTML = "Voittaja on x"
    } else if (voitto === 'o') {
      document.getElementById("voittaja").innerHTML = "Voittaja on o"
    } else if (voitto === '0') {
      document.getElementById("voittaja").innerHTML = "Tasapeli"
    }
  }, [voitto])

  const nelioNapautus = (y, x) => {
    let nid = "n" + y + x
    if (voitto === '') {
      if (document.getElementById(nid).innerHTML === '') {
        document.getElementById(nid).innerHTML = vuoro

        if (vuoro === 'x') {
          document.getElementById(nid).style = "color:blue"
          tarkistaVoitto()
          setVuoro('o')
        } else {
          document.getElementById(nid).style = "color:red"
          tarkistaVoitto()
          setVuoro('x')
        }
      }
    }
  }

  const tarkistaVoitto = () => {
    //Ylimmän rivin tarkistus
    if (document.getElementById("n11").innerHTML === document.getElementById("n12").innerHTML &&
      document.getElementById("n11").innerHTML === document.getElementById("n13").innerHTML) {
      setVoitto(document.getElementById("n11").innerHTML)
    }
    //Keskirivin tarkistus
    else if (document.getElementById("n21").innerHTML === document.getElementById("n22").innerHTML &&
      document.getElementById("n21").innerHTML === document.getElementById("n23").innerHTML) {
      setVoitto(document.getElementById("n21").innerHTML)
    }
    //Alimman rivin tarkistus
    else if (document.getElementById("n31").innerHTML === document.getElementById("n32").innerHTML &&
      document.getElementById("n31").innerHTML === document.getElementById("n33").innerHTML) {
      setVoitto(document.getElementById("n31").innerHTML)
    }
    //Vasemman sarakkeen tarkistus
    else if (document.getElementById("n11").innerHTML === document.getElementById("n21").innerHTML &&
      document.getElementById("n11").innerHTML === document.getElementById("n31").innerHTML) {
      setVoitto(document.getElementById("n11").innerHTML)
    }
    //Keskisarakkeen tarkistus
    else if (document.getElementById("n12").innerHTML === document.getElementById("n22").innerHTML &&
      document.getElementById("n12").innerHTML === document.getElementById("n32").innerHTML) {
      setVoitto(document.getElementById("n12").innerHTML)
    }
    //Oikean sarakkeen tarkistus
    else if (document.getElementById("n13").innerHTML === document.getElementById("n23").innerHTML &&
      document.getElementById("n13").innerHTML === document.getElementById("n33").innerHTML) {
      setVoitto(document.getElementById("n13").innerHTML)
    }
    //Vasemmalta ylhäältä oikealle alas tarkistus
    else if (document.getElementById("n11").innerHTML === document.getElementById("n22").innerHTML &&
      document.getElementById("n11").innerHTML === document.getElementById("n33").innerHTML) {
      setVoitto(document.getElementById("n11").innerHTML)
    }
    //Vasemmalta alhaalta oikealle ylös tarkistus
    else if (document.getElementById("n13").innerHTML === document.getElementById("n22").innerHTML &&
      document.getElementById("n13").innerHTML === document.getElementById("n31").innerHTML) {
      setVoitto(document.getElementById("n13").innerHTML)
    }

    if (laskuri === 9 && voitto === '') {
      setVoitto('0')
    } else {
      setLaskuri(laskuri + 1)
    }
  }

  return (
    <div>
      <div className="Ristinolla">
        <div class="rivi">
          <span class="Nelio" id="n11" onClick={() => nelioNapautus(1, 1)}></span>
          <span class="Nelio" id="n12" onClick={() => nelioNapautus(1, 2)}></span>
          <span class="Nelio" id="n13" onClick={() => nelioNapautus(1, 3)}></span>
        </div>
        <div class="rivi">
          <span class="Nelio" id="n21" onClick={() => nelioNapautus(2, 1)}></span>
          <span class="Nelio" id="n22" onClick={() => nelioNapautus(2, 2)}></span>
          <span class="Nelio" id="n23" onClick={() => nelioNapautus(2, 3)}></span>
        </div>
        <div class="rivi">
          <span class="Nelio" id="n31" onClick={() => nelioNapautus(3, 1)}></span>
          <span class="Nelio" id="n32" onClick={() => nelioNapautus(3, 2)}></span>
          <span class="Nelio" id="n33" onClick={() => nelioNapautus(3, 3)}></span>
        </div>
      </div>
      <div>
        <p>Vuorossa: {vuoro}</p>
        <p id="voittaja"></p>
      </div>
    </div>
  );
}

export default Ristinolla;
