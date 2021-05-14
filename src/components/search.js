import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionSearch} from "../store/actions/index.js";
import { useHistory } from "react-router-dom";

const SearchNews = ({ onInput }) => {
    let history = useHistory()
    const [search, setSearch] = useState("")
    const searchClick = () => {
        history.push("/search")
        onInput(search)
        setSearch("")
    }
    const searchClear = () => {
        history.push("/search")
        onInput("/////|||||")
        setSearch("")
    }
    return (
        <>
            <div className="form-inline my-2 my-lg-0 ml-4">
                <input
                    className="form-control me-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
                <button
                    className="btn btn-secondary btn-sm ml-4"
                    type="submit"
                    onClick={searchClick}
                >Search</button>
                <button
                    className="btn btn-secondary btn-sm ml-4"
                    type="submit"
                    onClick={searchClear}
                >Clear</button>
            </div>
        </>
    );
}

export const CSearch = connect(s => ({ getResultSearch: s.promise.searchResult }), { onInput: actionSearch })(SearchNews)
