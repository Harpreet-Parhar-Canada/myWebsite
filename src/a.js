import React, { useState } from 'react'
import { render } from 'react-dom'
import { useTrail, animated } from 'react-spring'
import ImageJs from './assets/ImageJs.png'
import Image3 from './assets/Image3.png'


let items = [<img src = {Image3}/>,<img src={ImageJs}/>, 'dolor', 'sit']
const config = { mass: 5, tension: 2000, friction: 200 }

function A() {
  const [toggle, set] = useState(true)
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div  onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            
            style={{ ...rest, transform: x.interpolate(x => 'translate3d(0,${x}px,0)') }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  )
}

export default A;
