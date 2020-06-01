import React, { useEffect } from "react";
import { connect } from "react-redux";

import "/components/styles/statusbar.css";

function StatusBar({ percent, description, error }) {
   return (
      <div className="statusbar-container">
         <div className="statusbar">
            <div className="status-zoom"></div>
            <div className="status-action">
               <span>{ description == null ? "-" : description }</span>
               <div className="status-action-percent" style={{width: (percent == null || percent == 100) ? 0 : percent + "%"}}></div>
            </div>
            <div className="status-error">{error}</div>
         </div>
      </div>
   )
}

export default connect(
   state => {
      return {
         description: state.status.description,
         percent: state.status.percent,
         error: state.status.error
      };
   },
)(StatusBar);
