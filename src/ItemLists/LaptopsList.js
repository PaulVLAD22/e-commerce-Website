import {laptops} from '../data/laptops';
import LaptopRow from '../Components/Rows/LaptopRow';

function LaptopsList(){
    return (
        <div className="container-fluid">
            {laptops.map((laptopsRow,index)=>{
             return (
                 <LaptopRow key={index} {...laptopsRow} ></LaptopRow>
             )
            })}
        </div>
    )
}
export default LaptopsList;