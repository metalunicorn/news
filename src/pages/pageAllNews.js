import React, { useEffect } from "react";
import { connect } from "react-redux";
import { CAllNews } from "../components/allNews";
import { actionAllNews } from "../store/actions";
import { CPreloader } from "../components/preloader";


const PageNews = ({ match, allNews }) => {
    
    useEffect(() => {
        allNews()
    },)

    return (
        <>
            {(match.url === '/') ? <><CPreloader />
                <CAllNews /></> : <></>}
        </>
    )
}

export const CPageAllNews = connect(s => ({}), { allNews: actionAllNews })(PageNews)