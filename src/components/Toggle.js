import React from "react"

const Toggle = (props) => {
    return(
        <div className="toggle">
        <input onChange={props.handleOnChange} type="checkbox" className="toggle-checkbox" name={props.name} id={props.name} />
        <label className="toggle-label" htmlFor={props.name}>
          <span className="toggle-inner" />
          <span className="toggle-switch" />
        </label>
      </div>
    )
}

export default Toggle