import React from "react";
import "./App.css";

function Search() {
    return (
        <div>
            <form class="forms">
                <input class="search" type="search" placeholder=" | Search" aria-label="Search" size={30} /> &nbsp; &nbsp; &nbsp; &nbsp;
                <button type="button" class="btn btn-danger btn-lg searchbtn"> <i class="fas fa-search"></i> Search </button>
                </form>
        </div>
    );
}

export default Search;