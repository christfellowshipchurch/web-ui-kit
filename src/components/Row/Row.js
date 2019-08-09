import React from 'react'
import classnames from 'classnames'
import { renderBlock } from '../utils'


const Row = ({ content }) => {
    const lastBlock = content[content.length - 1]
    const classes = {
        row: classnames(
            'row',
            'align-items-center'
        ),
        col: classnames(
            'col-12',
            'col-md-6',
            'p-0',
            'd-flex align-self-stretch'
        )
    }

    if(content.length % 2 === 0) {
        return (
            <div className={classes.row}>          
            {content.map((child, i) => {             
            return (
                    <div className={classes.col}>                   
                        {renderBlock({ content: child })}
                    </div>
                    )
            })}                
            </div>
            )    
    } else {   
        return (
            <div className={classes.row}>
                {content.map((child) => { 
                    content.pop()            
                    return (
                        <div className={classes.col}> 
                            {renderBlock({ content: child })}
                        </div>
                    )
                })}
                <div className='col-12 p-0'>                   
                    {renderBlock({ content: lastBlock })}
                </div>                
            </div>
            )  
    }
}
     

export default Row