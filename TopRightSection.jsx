import React from "react";
import "./App.css";

function TopRightSection() {
    return (
        <div class="top-right">
            <div class="1">
                <p class="icon"> <i class="fas fa-motorcycle fa-2x"></i> </p>
                <h3 class="quotes1"> Fast Delivery </h3>
                <p class="quotes2"> Promise to delivery within 30 mins </p>
            </div>
            <div class="2">
                <p class="icon"> <i class="fas fa-map-marker-alt fa-2x"></i> </p>
                <h3 class="quotes1"> Pick up </h3>
                <p class="quotes2"> Pickup, deliver at your doorstep </p>
            </div>
            <div class="3">
                <p class="icon"> <i class="fas fa-utensils fa-2x"></i> </p>
                <h3 class="quotes1"> Dine in </h3>
                <p class="quotes2"> Enjoy your food fresh, crispy and hot!! </p>
            </div>
        </div>
    );
}

export default TopRightSection;