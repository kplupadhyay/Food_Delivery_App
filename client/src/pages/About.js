import React from 'react'
// import "./About.css"
// import imz from "../assets/about.jpg"
import "./About.css"
import im from "../assets/about.jpg"
import Image from 'react-bootstrap/Image';
export default function About() {
  return (
    <div>
       {/* <h1 className='m-5 text-primary'>About</h1> */}
       <div className='show'>
       <div className='d-inline my-5' style={{backgroundColor:"yellow", height:50 ,  display:"inliine",width:30}}></div>
       <span className='my-5' style={{fontWeight:30 , fontSize:40 }}>About Us </span>
       </div>
      
      
      <div className='container' >
        <div className='row'>
          <div className='col-lg-6 col-md-6 col-12'>
            
          <Image src={im} fluid  style={{height:'500px',width:'110%', border:"none"}} className=' py-4 px-3'/>
            
            </div>
            <div className='col-lg-6 col-md-6 col-12 my-5  '  style={{height:300 , width:450  }}>
            <div class="card " style={{border:"none"}}>
  <div class="card-body">
  India, country that occupies the greater part of South Asia. India is made up of 28 states and eight union territories, and its national capital is New Delhi, built in the 20th century just south of the historic hub of Old Delhi to serve as India’s administrative centre. Its government is a constitutional republic that represents a highly diverse population consisting of thousands of ethnic groups and hundreds of languages. India became the world’s most populous country in 2023, according to estimates by the United Nations.

It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part 
    </div>
</div>
              </div>
         
        </div>
          </div>
          
             
            
        
      </div>
  
    
  )
}
// border border-primary border-3