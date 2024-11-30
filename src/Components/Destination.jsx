
import 'animate.css';
const Destination = () => {
    return (
        <div className="w-11/12 mx-auto mt-16">
            <h1 className="text-center font-bold text-2xl text-[#1E2A47] animate__animated animate__bounce animate__repeat-3">Our Previous Tour Destination</h1>
             <div className="w-11/12 mx-auto grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
               <div className='card border border-rounded-xl  shadow-xl overflow-hidden p-4 mb-2 gap-3'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src="https://i.ibb.co.com/PQMJgZh/Mount-Everest-Ph-Feng-Wei-Getty2-56a16b185f9b58b7d0bf2e87.jpg" />
    </div>  
      <div className=''>
      <h4 className='font-extrabold text-xl text-center'>Mount Everest</h4>
      </div>
            <div className='mt-3  mb-2 text-center'>
            <h4 className="font-bold">Country: Nepal</h4>
                 
                <h5 className='font-bold mt-2'>Journey date: 27 feb,2024</h5>
            </div>
        </div>

               <div className='card border border-rounded-xl shadow-xl overflow-hidden p-4 mb-2 gap-3'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src="https://i.ibb.co.com/m8jD4Pg/thumb-1920-560615.jpg" />
    </div>  
    <div className=''>
      <h4 className='font-extrabold text-xl text-center'>Majestic Alps </h4>
      </div>
            <div className='mt-3  mb-2 text-center'>
            <h4 className="font-bold">Country: France</h4>
                 
                <h5 className='font-bold mt-2'>Journey date: 29 oct,2024</h5>
            </div>
        </div>
               <div className='card border border-rounded-xl  shadow-xl overflow-hidden p-4 mb-2 gap-3'>
            <div className='mb-2  space-y-4 '>
        <img className='w-full h-60 border rounded-xl' src="https://i.ibb.co.com/J5gy95F/th-1.jpg" />
    </div>  
    <div className=''>
      <h4 className='font-extrabold text-xl text-center'>Shundarbon</h4>
      </div>
            <div className='mt-3  mb-2 text-center'>
            <h4 className="font-bold">Country: Bangladesh</h4>
                 
                <h5 className='font-bold mt-2'>Journey date: 11 nov,2023</h5>
            </div>
        </div>
        </div>
        </div>
       
    );
};

export default Destination;