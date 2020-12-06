import React,{useState} from 'react';
import  '../index.css';
import LaptopsList from '../ItemLists/LaptopsList.js';
import SmartphonesList from '../ItemLists/SmartphonesList';
import TvsList from '../ItemLists/TvsList';
import TVsList from '../ItemLists/TvsList';


// 0 - laptops
// 1 - phones
// 2- Tvs 
// change productType with useStatus
function ProductsApp() {
    const [productType,setProductType]=useState(0);
    return (
        <>
        <nav className="navbar navbar-aux bg-light justify-content-center">
            <ul className="navbar-nav align-items-center justify-content-between flex-row">
                <li className="nav-item active">
                    <a className="nav-link">Laptops</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Smartphones</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">TVs</a>
                </li>
            </ul>
        </nav>
        {productType === 0 &&
        <LaptopsList></LaptopsList>
        }
        {productType === 1 &&
        <SmartphonesList></SmartphonesList>
        }
        {productType === 2 &&
        <TvsList></TvsList>
        }
        
    </>
    );
}
export default ProductsApp;