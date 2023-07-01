import "./playInfo.css"

function PlayInfo({ turn, meWins, otherWins }) {
  return (
    <div className='info__container'>
      <h3 className='subtitle' >ronda: {turn + 1} </h3>
      <div className="line"></div>
      <ul>
        <li>
          <span>YO</span>
          {meWins}
        </li>
        <li>
          <span>ENEMIGO</span>
          {otherWins}
        </li>
      </ul>
    </div>
  )
}

export default PlayInfo