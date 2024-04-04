import React, { useState } from "react";
import { changeSearchTerm } from "../../store/redditSlice";
import { useDispatch } from "react-redux";
import { FaReddit } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');

    const onSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const onSearchTermSubmit = (e) => {
        e.preventDefault();
        dispatch(changeSearchTerm(searchTerm));
    };

    return (
        <header>
            <FaReddit className="logo" />
            <h1><span>Mini</span>Reddit</h1>
            <form onSubmit={onSearchTermSubmit}>
                <input
                    type="text"
                    value={searchTerm}
                    onChange={onSearchTermChange}
                    placeholder="Search"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};

