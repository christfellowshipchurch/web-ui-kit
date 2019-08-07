import React from 'react'
import { Tools, } from '../../components'


const Row = ({ content }) => {

let lastBlock = content[content.length-1]

if(content.length % 2 == 0) {
    return (
        <div className='row'>          
        {content.map((child, i) => {             
           return (
                <div className='col-6 p-0'>                   
                    <Tools.renderBlock content={child} />
                </div>
                )
        })}                
        </div>
        )    
} else {   
    return (
        <div className='row'>
        {content.map((child, i) => { 
        content.pop()            
           return (
                <div className='col-6 p-0'>                   
                    <Tools.renderBlock content={child} />
                </div>
                )
        })}
            <div className='col-12 p-0'>                   
                    <Tools.renderBlock content={lastBlock} />
                </div>                
        </div>
        )  
}
}
     

export default Row;