import { useRef, useEffect } from "react";
import Heading from "../../components/Headings/Heading";

import "./Donate.scss";

import React, {useState} from "react";


const Donate = () => {

const [show,setShow]=useState(false);

   const lists =[
      {id: 1 , title:"500"},
      {id: 2, title:"1000"},
      {id: 3, title:"1500"},
      {id: 4, title:"2000"},
      {id: 5, title:"2500"},

    ];

const [selected,setSelected] = useState(1);
const [amount,setAmount] = useState('500');

const changeColor = (row)=>{
  setSelected(row.id);
  setAmount(row.title);
};

const getAmount =()=>{
   const other = document.querySelector('#other-A').value;
   setSelected(0);
   setAmount(other);
}

const [print, setPrint] = useState('One-Time Gift');

const handleGift=(e)=>{
 setPrint(e.target.innerHTML);
}


  return (
    <div className="bg-black">
      <Heading heading="Donate" ></Heading>

      <div className="absolute inset-x-[5%] flex flex-col gap-3 items-center justify-center py-10 text-center text-white">
        <h5 className="lg:text-3xl md:text-2xl text-1xl font-bold font-serif">
          Giving Back to NIT Patna
        </h5>
        <p className="lg:text-5xl md:text-4xl text-3xl font-bold font-serif">
          Make a Donation
        </p>
      </div>

      <div className="w-[100%] grid bg-blue text-white relative items-center mt-36">
        <div className="mb-12 md:mb-0">
          <p className="mb-4 text-lg md:text-left px-5 text-justify">
            As NITP campus and community grow, so must its financial resources.
            Support for the Campaign for NITP will ensure the success of the
            College's mission to offer an excellent education to promising and
            motivated students in the Bronx. It will allow NITP to continue
            meeting the changing needs of our students, our faculty, our campus,
            and our community while serving as a cultural and economic anchor in
            the region. Please consider supporting scholarships to keep our
            students on track for the future they still believe in and are
            working hard to obtain. We have received more than 5,000 scholarship
            requests from students in the last year. You may make your gift
            online using the link below.
          </p>
          <div className="flex justify-center text-2xl mt-5">
            <a
              className="text-white text-xl decoration-none hover:text-white"
              href="#"
            >
 
            </a>
          </div>
        </div>
      </div>
      {/* <p className="ml-5">
        <li>Here is the list of Top Donors of NIT Patna: Top Donors</li>
        <li>To donate, please visit : click here</li>
        <li>For any query, please contact-</li>
        <li>Prof. </li>
        <li>Dean of Resources and Alumni Affairs</li>
        <li>NAtional Institute of Technology, Patna</li>
        <li> Ph. 0612 237 1715 </li>
        <li>E-mail: </li>
      </p> */}

    <div className="donation-form">
      
       <div className="grid">
            <div className="donate-1">
                 <form>
                   <div className="donate-gift">
                        <h1 className="heading">Your Gift</h1>
                        <span>Gift Amount Options</span>
                
                        <div className="donation-amount">
              

                             {lists.map((list)=>(
                                <div className="amount" 
                                 
                                  key={list.id}
                                  onClick={() => changeColor(list)}
                                  style={{ backgroundColor: list.id === selected ? "#449fff" : "" }}
                                 >
                                 <h3>Rs.{list.title}</h3>
                                </div> 
                              ))}   
     
                            <div id="other-amount" onChange={getAmount}>
                               <h5 className="f-bold" >Other Amount</h5>
                               <input id="other-A" type="text"></input>
                            </div> 

                        </div> 

                    <div className="select-div">
                        <div >
                              <h5 className="f-bold">Select a School/Affiliate*</h5> 
                             <select className="select-1">
               
                               <option ><h3 className="options">Select a School or Affiliate</h3> </option>
                              <option ><h3 className="options">NIT</h3></option>
                  
                             </select> 
                       </div> 

                            <div >
                               <h5 className="f-bold">Select a Fund</h5>
                            
                              
                                 <select className="select-1">
                                   <option ><h3 className="options">Select a fund</h3></option>
                                 </select> 
                            </div> 

                      </div>

                         <div className="partition"></div>
                         
                          
                           <div  className="checkbox">
                           <input id="check" type="checkbox" onClick={()=>setShow(!show)}></input><label>	This is a joint gift from both my spouse / partner and me.</label></div>
                         
             { show?
                         <div className="name">

                           <div className="name-input">
                               <h3>Spouse/Partner First Name*</h3>
                               <input  type="text"></input>
                          </div>

                           <div className="name-input">
                              <h3>Spouse/Partner Last Name*</h3>
                              <input  type="text"></input>
                           </div>
                

                            <div className="name-input">
                               <h3>Spouse/Partner Class Year </h3>
                               <input type="text"></input>
                            </div>

                             <div className="name-input">
                                <h3>Spouse/Partner School </h3>
                                <select className="select-2" >
                                  <option>High School</option>
                                 </select>
                            </div>

                          </div> 
                          :null
                }

                          
                          
                          <div>
                               <h1 className="heading">Giving Frequency</h1>
                         </div> 

                         <div className="gift-type">
                           <div className="g-type"  onClick={handleGift}>One-Time Gift</div>
                           <div className="g-type"  onClick={handleGift}>Recurring Gift</div>

                         </div>
        
                        
        
                         
                            <h5>This is a <span className="f-bold" id="f1-footer">{print} </span></h5>
                         

                      
                     </div>
                  </form>   
          

                     
        </div>
        
        
 
        


        
        <div className="donate-1">
            <form>      
             <div className="donate-2">
               <h1 className="heading" >Your Contact Information</h1>

                 
                 <div>
                    <h3 className="f-bold">Title</h3> 
                    <input type="text"></input>
                 </div>
                 <div>
                    <h3 className="f-bold">First Name*</h3> 
                    <input type="text"></input>
                 </div>
                 <div>
                    <h3 className="f-bold">Last Name*</h3> 
                    <input type="text"></input>
                 </div>
               
              
                 <div className="d-flex">
                     <div >
                         <h3 className="f-bold">Class Year</h3> 
                          <input id="class-year" type="text"></input>
                      </div>
                      <div>
                         <h3 className="f-bold">School</h3> 
                          <select id="school" type="text">
                              <option>Graduate school of arta and science</option>
                          </select>
                      </div>
                 </div>
                 <div>
                    <h3 className="f-bold">Country</h3> 
                    <select  type="text">
                        <option>USA</option>
                    </select>
                 </div>
                 <div>
                    <h3 className="f-bold">Street1*</h3> 
                    <input type="text"></input>
                 </div>
                 <div>
                    <h3 className="f-bold">Street2*</h3> 
                    <input type="text"></input>
                 </div>
                 <div className="d-flex">
                     <div >
                         <h3 className="f-bold">City*</h3> 
                          <input id="city" type="text"></input>
                      </div>
                      <div>
                         <h3 className="f-bold">State*</h3> 
                          <input id="state" type="text"></input>
                      </div>
                      <div>
                         <h3 className="f-bold">Zip Code*</h3> 
                          <input id="zip-code" type="text"></input>
                      </div>
                 </div>
                 <div>
                    <h3 className="f-bold">Email*</h3> 
                    <input type="text"></input>
                 </div>
                 
                 
             </div>
          

             </form>
        </div>
        
    </div>


           <div className="donate-1" id="sticky-note">
              <div className="arrow"></div>
              <div className="sticky-div">
                    <div><h2 className="f-bold">Your Donation</h2></div>
                    <div><h1 className="f-bold">Rs.{amount}</h1></div>
                    <div><h6>Please Select a Recipient</h6></div>
                    <button id="btn-1">Add Another Gift</button>
                    <button id="btn-2">Complete Your Gift</button>
              </div>
           </div>
    </div>
    </div>
  );
};

export default Donate;
