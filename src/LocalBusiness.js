import React, { Component } from "react";
import Badge from "react-bootstrap/Badge";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LocalBusiness.css";

class LocalBusiness extends Component {

    render() {
        return(
            <div className="business-wrapper">
                <Badge variant="warning">COVID-19</Badge> Due to the current situation, I encourage you to have a 
                nice pizza on May 22 (or any other kind of delivery/take out food any other day) from your local 
                restaurants. Supporting local businesses is more important than ever. Don't forget to also follow
                local laws and recommendations.
            </div>
        )
    }
}

export default LocalBusiness;
