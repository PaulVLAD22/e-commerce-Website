import TvRow from '../Components/Rows/TvRow';
import {tvs} from '../data/tvs';

function TvsList(){
    return (
        <div className="container">
            {tvs.map((tvRow,index)=>{
             return (
                 <TvRow key={index} {...tvRow} ></TvRow>
             )
            })}
        </div>
    )
}
export default TvsList;