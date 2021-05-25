import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               {/* Do not remove the main div */}
               <ol key="relativeList">
                   <li key="relativeListItem1">Joseph</li>
                   <li key="relativeListItem2">Mark Brown</li>
                   <li key="relativeListItem3">Jeremy Brown</li>
               </ol>
            </div>
        )
    }
}


export default App;
