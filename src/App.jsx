import './App.css'
import useGame from './hooks/useGame'
import FinishModal from './components/FinishModal'
import PlayInfo from './components/PlayInfo'
import WinnerBox from './components/winnerBox'
import { Unknow, Element } from './components/Elements'
import ElementList from './components/ElementList'
import EnemySection from './components/EnemySection'

function App() {

  const {
    turn,
    jugada,
    enemy,
    winner,
    options,
    finishResult,
    resetGame,
    nextRound,
    meWins,
    otherWins,
    cambiarJugada
  } = useGame()

  return (
    <section className='container' >
      <h1 className='title' > piedra papel o tijeras</h1>
      <PlayInfo
        turn={turn}
        meWins={meWins}
        otherWins={otherWins}
      />

      <div className="sections__container">
        <ElementList handleClick={cambiarJugada} options={options} />
        <EnemySection enemy={enemy} />
      </div>

      <WinnerBox
        winner={winner}
        enemy={enemy}
        jugada={jugada}
        nextRound={nextRound}
      />

      <FinishModal
        finishResult={finishResult}
        resetGame={resetGame}
      />
    </section >
  )
}

export default App