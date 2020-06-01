import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { stateChange } from "/state/state.js";

import OptionbarInputSelect from "/components/inputs/input-select.jsx";

import LAYERS from "/utils/dbs/LAYERS.js";

const LayersOptions = [
   ["Tiles", LAYERS.TILES],
   ["Walls", LAYERS.WALLS],
   ["Wires", LAYERS.WIRES],
   ["Liquids", LAYERS.LIQUIDS],
]

function OptionbarOptionLayer({ stateChange, value, onChange }) {
   const [activeLayer, setActiveLayer] = useState(value);

   const _onChange = (LAYER) => {
      LAYER = parseInt(LAYER);
      setActiveLayer(LAYER);
      stateChange(["optionbar", "layer"], LAYER);
      onChange(LAYER);
   }

   useEffect(() => {
      _onChange(value);
   }, []);

   return <OptionbarInputSelect label="Layer" options={LayersOptions} value={activeLayer} onChange={_onChange}/>;
}

export default connect(
   null,
   { stateChange }
)(OptionbarOptionLayer);
