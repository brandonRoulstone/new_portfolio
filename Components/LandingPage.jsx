"use client"
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { motion, useDragControls } from 'framer-motion'

const LandingPage = ({ Username }) => {
    const dragControls = useDragControls();

    const Heading = () => {
        return <div className='text-6xl font-sans font-bold bg-gradient-to-r from-neutral-200 to-neutral-900 bg-clip-text text-transparent'>
            Hello I am <br /> {Username}
        </div>
    }

    const DraggableComponent = () => {
        return <>
            <motion.div 
                drag
                dragControls={dragControls}
                dragMomentum={false}
                // dragConstraints={{ left: 300, right: 300, top: 300, bottom: 300 }}
                whileHover={{ cursor: 'grab' }}
                className='h-[16rem] w-[16rem] bg-transparent backdrop-blur-md absolute border-2 border-white rounded-xl top-[10%] left-5'
            > 
            </motion.div>
        </>
    }

    const RoundedDiv = ({ children, color }) => {
        const [hovered, setHover] = useState(false);

        return <>
            <motion.div
                whileHover={{ width: '8rem', backgroundColor: color }} 
                className={`h-[3rem] w-[3rem] bg-white rounded-sm`}
            >
                {children}
            </motion.div>
        </>
    }
    RoundedDiv.propTypes = {
        children: PropTypes.node,
        color: PropTypes.string
    }

  return <>
    <div className="bg-neutral-950 min-h-screen w-full bg-grid-lg flex justify-evenly items-center">
        <Heading />
        <motion.div layout className="h-[6rem] w-[16rem] bg-transparent absolute left-0 bottom-0 flex flex-row justify-evenly items-center">
            <RoundedDiv color='rgb(12,12,12)'>
                
            </RoundedDiv>
            <RoundedDiv color='rgb(12,12,12)'>
                
            </RoundedDiv>
            <RoundedDiv color='rgb(12,12,12)'>
                
            </RoundedDiv>
            <RoundedDiv color='rgb(12,12,12)'>
                
            </RoundedDiv>
        </motion.div>
    </div>
  </>
}

LandingPage.propTypes = {

}

export default LandingPage;