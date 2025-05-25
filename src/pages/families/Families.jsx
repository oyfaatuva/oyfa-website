import React, { Suspense, Component } from 'react'
import { Helmet } from 'react-helmet';
import HalfTitle from '../../components/layout/HalfTitle/HalfTitle';
import Loading from '../../components/layout/Loading/Loading';

export default class Families extends Component{
    render() {
        return(
            <div>
                <Helmet><title>Families - OYFA at UVA</title></Helmet>
                <HalfTitle header='Families' imgSrc=''/>
                
            </div>
        )
    }
}