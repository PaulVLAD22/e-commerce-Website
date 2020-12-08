import SmartphoneRow from '../Components/Rows/SmartphoneRow';
import {smartphones} from '../data/smartphones';

//format smartphones array into subarrays of 3 elements


function SmartphonesList(){
    return (
        <div className="container">
            {smartphones.map((smartphoneRow,index)=>{
             return (
                 <SmartphoneRow key={index} {...smartphoneRow} ></SmartphoneRow>
             )
            })}
        </div>
    )
}
export default SmartphonesList;