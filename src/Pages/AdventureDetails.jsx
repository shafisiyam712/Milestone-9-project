/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const AdventureDetails = () => {
  const [showModal, setShowModal] = useState(false);

    const data=useLoaderData();
    const { ID } = useParams();
    // console.log(ID);
    
    const [card,setCard]=useState({})
    useEffect(() => {
        const singleData = data.find(card => card.ID==ID)
        setCard(singleData)
      }, [data,ID])

    const {AdventureTitle,Image,ShortDescription,AdventureCost,BookingAvailability,Location,Duration,AdventureLevel,IncludedItems=[],EcoFriendlyFeatures=[],MaxGroupSize,SpecialInstructions=[]}= card || {}

    
    //console.log(card);
    
    
    const [one,two,three]=EcoFriendlyFeatures
    const [four,five,six]=SpecialInstructions
    const [seven,eight,nine]=IncludedItems

    const handleTalkWithExpert = () => {
      const currentHour = new Date().getHours(); 
  
      if (currentHour >= 10 && currentHour < 20) {
        
        window.open("https://meet.google.com", "_blank");
      } else {
        
        setShowModal(true); 
      }
    };
    return (
        <div className="my-20">


        

        <div className="w-11/12 h-[1250] md:w-2/3 mx-auto border rounded-xl md:h-[800px] bg-white flex  flex-col p-4">
         
          <div className='w-full h-[300px]'>
            <img className='w-full h-full rounded-xl' src={Image} alt="" />
          </div>
         
          <div className="">

            <h1 className="text-xl font-bold my-4 text-center">{AdventureTitle}</h1>
            
            <p className="text-center mb-4">{ShortDescription}</p>

            <div className="flex justify-center gap-20">
              <div className="flex flex-col gap-2">
                <p>Booking Availability:{BookingAvailability}</p>
                <p>Adventure Cost:{AdventureCost}</p>
                <p>Adventure Level:{AdventureLevel}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p>Location: {Location}</p>
                <p>Duration : {Duration}</p>
                <p>MaxGroupSize: {MaxGroupSize}</p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row  justify-between gap-3 mt-8">
              <div className="flex flex-col">
                
                <h4 className="font-bold">EcoFriendlyFeatures:</h4>
                <div>
                  1.{one} <br />
                  2.{two} <br />
                  3.{three} <br />  <br />
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold">IncludedItems:</h4>
                <div>
                  1.{seven} <br />
                  2.{eight} <br />
                  3.{nine} <br />  <br />
                </div>
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold">SpecialInstructions:</h4>
                <div>
                  1.{four} <br />
                  2.{five} <br />
                  3.{six} <br />  <br />
                </div>
              </div>
            </div>

            <div className="w-1/2 md:w-1/6 mx-auto mt-5 text-center">
              <button onClick={handleTalkWithExpert} className="btn w-40 font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] hover:text-white hover:bg-[#1E2A47]">Talk With Expert</button>
            </div>

          </div>
        </div>

        {showModal && (
        <dialog
          id="my_modal_5"
          className="modal modal-bottom sm:modal-middle"
          open
        >
          <div className="modal-box bg-[#BEE3E2]">
            <h3 className="font-bold text-lg text-center">Opps!!</h3>
            <p className="py-4 text-center">
              Consultation hours are between 10:00 AM and 8:00 PM. Please try
              again during that time.
            </p>
            <div className="modal-action">
              <button
                onClick={() => setShowModal(false)}
                className="btn font-bold border border-[#1E2A47] rounded-full text-[#1E2A47] hover:text-white hover:bg-[#1E2A47] w-28 mx-auto"
              >
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

       
      
            </div>
        
    );
};

export default AdventureDetails;