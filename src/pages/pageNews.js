import { actionNews } from "../store/actions";
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { CNews } from "../components/News";

const PageNews = ({ match: { params: { title } }, getNewsDescription }) => {
    useEffect(() => {
        getNewsDescription(title)
    }, [title])
    return  < CNews />
    }

export const CPageNews = connect(s => ({ Data2: s.promise }), { getNewsDescription: actionNews })(PageNews)
