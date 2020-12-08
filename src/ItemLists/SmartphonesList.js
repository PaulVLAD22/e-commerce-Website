import SmartphoneRow from '../Components/Rows/SmartphoneRow';
import {smartphones} from '../data/smartphones';

function SmartphonesList(){
    return (
        <div className="container-fluid">
            {smartphones.map((smartphoneRow,index)=>{
             return (
                 <SmartphoneRow key={index} {...smartphoneRow} ></SmartphoneRow>
             )
            })}
        </div>
    )
}
export default SmartphonesList;