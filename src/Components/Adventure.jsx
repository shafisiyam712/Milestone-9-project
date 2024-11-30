import { useLoaderData } from "react-router-dom";
import AdventureCard from "./AdventureCard";


const Adventure = () => {
    const data=useLoaderData()
   // console.log(data);
    
    return (
        <div>
           <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2">
        
                 {
                     // eslint-disable-next-line react/prop-types
                     data.map( adventure=> (
                // eslint-disable-next-line no-undef
                <AdventureCard key={adventure.ID} adventure={adventure}></AdventureCard>))
                }
            </div>
       
        
        </div>
    );
};

export default Adventure;