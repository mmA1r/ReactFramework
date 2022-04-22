import React from "react";
import AddFunction from "./AddFunction";
import '../UI/UIComponents/UI.css'

class UI extends React.Component {
    render() {
        return(
            <div className = "UI">
                <AddFunction></AddFunction>
            </div>
        );
    }
}

export default UI;