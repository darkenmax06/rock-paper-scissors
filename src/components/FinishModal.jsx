import { YellowButton } from "./Buttons"
import { createPortal } from "react-dom"
import "./finishModal.css"

function FinishModal({ finishResult, resetGame }) {
  if (!finishResult) return null
  const ref = document.body

  const modalElement = (
    <div className="modal__container">
      <div>
        <h4>¡ganador!</h4>
        <h2> {finishResult.whoWins} </h2>
        <h5> {finishResult.score} </h5>
        <YellowButton title="reiniciar juego" handleClick={resetGame} />
      </div>
    </div>
  )

  return createPortal(modalElement, ref, 1)
}

export default FinishModal