import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OshiIndexCard from '../components/OshiIndexCard';
import '../css/gallery.css';

const Gallery = (props) => {
    console.log('エフェクト',props.oshiDataList)
    return (
        <div>
            <Header />    
            <h1 className="title">みんなの推しプロフィール</h1>
            <div className='osiprofiles'>
                <OshiIndexCard oshiDataList={props.oshiDataList}/>
            </div>
            <Footer />
        </div>
    )
};

export default Gallery;
