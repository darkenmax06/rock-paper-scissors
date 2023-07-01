import "./buttons.css"

function BlueButton({ title, handleClick }) {
  return (
    <button
      className="blue__button"
      onClick={handleClick}>
      {title}
    </button>
  )
}


function YellowButton({ handleClick, title }) {
  return (
    <button
      className="yellow__button"
      onClick={handleClick}>
      {title}
    </button>
  )
}



export {
  BlueButton,
  YellowButton
}