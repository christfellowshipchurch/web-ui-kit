import React, { useState, useEffect } from 'react'
import classnames from 'classnames'


const Carousel = ({ children }) => {
    const [index, setIndex] = useState(0)
    const length = children.length

//Changes index in a specified interval
    useEffect(() => {
        const add = (index) => {
            if(index < length-1 ){
                 index += 1 
            } else {
                index = 0
            }
            return index
        }
        const interval = setInterval(() => {
          setIndex(add(index));
        }, 3000);
        return () => clearInterval(interval);
      }, [index, length]);


      
    return (
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                {/* <!-- Carousel indicators --> */}
                {length &&
                    <ol class="carousel-indicators">
                      {children.map((child, i) => {
                            const indicatorClasses = classnames(
                                i === index ? 'active' : ''
                            )
                            return (
                                    <li data-target="#myCarousel" data-slide-to="0" className={indicatorClasses} onClick={() => setIndex(i)}></li>
                            )
                        })}
                    </ol>

                }
                   
                {/* <!-- Wrapper for carousel items --> */}
                
                {length &&
                    <div className="carousel-inner d-flex align-items-center">
                        {children.map((child, i) => {
                            const itemClasses = classnames(
                                'item',
                                'carousel-item',
                                i === index ? 'active' : ''
                            )
                            return (
                                <div class={itemClasses}>
                                    <div className="d-flex justify-content-center"><img className='img-circle' src={child.imageUrl} alt=""/></div>
                                    <p className="p-5">{child.text}</p>
                                </div>
                            )
                        })}
                    </div>
                }
        </div>
    )
}

export default Carousel