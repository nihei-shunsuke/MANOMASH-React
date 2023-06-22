import React from 'react';
import { Link } from 'react-router-dom';
import '../css/gallery.css';
import DemoOshiProfileIcon from '../images/demo-oshi-icon.png';


const OshiIndexCard = (props) => {
    return (
        <div>
            {props.oshiDataList.map((oshiData, index) =>
                <div key={index}>
                <Link to='/'>
                    <div className='osiprofile hover-tab'>
                        <img src={DemoOshiProfileIcon} alt='DemoOshiProfileIcon'/>
                        <div className='osiprofile-information'>
                            <h2>{oshiData.oshi_name}</h2>
                        </div>
                    </div>
                </Link>
                </div>
            )}
        </div>
    )
};

export default OshiIndexCard;
