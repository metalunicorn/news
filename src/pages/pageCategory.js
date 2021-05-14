import { actionCategory } from "../store/actions";
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { CCategory } from "../components/category";

const PageCategory = ({ match: { params: { category } }, getNewsCategory }) => {
    useEffect(() => {
        getNewsCategory(category)
    }, [category])
    return <CCategory />
}

export const CPageCategory = connect(s => ({ Data2: s.promise }), { getNewsCategory: actionCategory })(PageCategory)