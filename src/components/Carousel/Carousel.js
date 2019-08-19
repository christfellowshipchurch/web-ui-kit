import React, { useState, useEffect } from 'react'
import classnames from 'classnames'

const Carousel = ({ children, interval }) => {
    const [index, setIndex] = useState(0)

    // Changes index in a specified interval
    useEffect(() => {
        const add = (index) => {
            if (index < children.length - 1) {
                index += 1
            } else {
                index = 0
            }
            return index
        }

        const timer = setInterval(() => {
            setIndex(add(index));
        }, interval)

        return () => clearInterval(timer)
    }, [index, children.length, interval])

    return (
        <div className="carousel slide" data-ride="carousel">
            {/* <!-- Carousel indicators --> */}
            {children.length &&
                <ol className="carousel-indicators">
                    {children.map((n, i) => {
                        const indicatorClasses = classnames(
                            i === index ? 'active' : ''
                        )
                        return (
                            <li key={i} className={indicatorClasses} onClick={() => setIndex(i)}></li>
                        )
                    })}
                </ol>
            }

            {/* <!-- Wrapper for carousel items --> */}

            {children.length &&
                <div className="carousel-inner container d-flex align-items-center pb-5">
                    {children.map((child, i) => {
                        const itemClasses = classnames(
                            'item',
                            'carousel-item',
                            i === index ? 'active' : ''
                        )
                        return (
                            <div className={itemClasses} key={i}>
                                {child}
                            </div>
                        )
                    })}
                </div>
            }
        </div>
    )
}

Carousel.defaultProps = {
    interval: 3000
}

export default Carousel