import "./winnerBox.css"
import { BlueButton } from "./Buttons"

function WinnerBox({ winner, nextRound, jugada, enemy }) {
  if (winner === undefined) return null

  const hasWinner = winner === false
    ? "es un empate"
    : "gano: "

  return (
    < div className="winner__box" >
      <h4>Tu rival ha jugado: {enemy} </h4>
      <h4>Tu jugaste: {jugada} </h4>
      <div className="line"></div>
      <h4>resultado: <br /></h4>
      <h5><span>{hasWinner}</span> {winner} </h5>
      <BlueButton title="continue" handleClick={nextRound} />
    </div>
  )
}

export default WinnerBox