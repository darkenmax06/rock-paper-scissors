import "./elements.css"

function Element({ handleClick = () => { }, element }) {
  return (
    <div
      className='element'
      onClick={() => handleClick({ element })}
    > {element} </div>
  )
}

function Unknow() {
  return (
    <div className='element unknow' >¿?</div>
  )
}

export {
  Element,
  Unknow
}