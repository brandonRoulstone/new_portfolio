import React from 'react'
import PropTypes from 'prop-types'

const NavigationBar = ({  }) => {
  return (
    <>
        <div className="navbar bg-transparent text-neutral-300 fixed top-0 flex justify-between">
            <div className="text-3xl cursor-pointer">BR .</div>
            <button className="btn btn-md bg-neutral-300 border-0 hover:bg-neutral-400 skeleton text-neutral-900">Hire me</button>
        </div>
    </>
  )
}

NavigationBar.propTypes = {

}

export default NavigationBar
