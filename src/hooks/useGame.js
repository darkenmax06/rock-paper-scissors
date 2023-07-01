import { useEffect, useRef, useState } from 'react'
import { validateTurnWinner } from '../utilitys/validateTurnWinner'
import elements from '../services/elements'


const generateARandomPlay = (elements) => {
  const elementsNumber = (elements.length - 1)
  const randomNumber = Math.round(Math.random() * elementsNumber)
  const play = elements[randomNumber]
  return play
}

const calculateWhoWins = (meWins, otherWins) => {
  if (meWins > otherWins) return {
    whoWins: "yo",
    score: ("con " + meWins + " pts")
  }
  else if (otherWins > meWins) return {
    whoWins: "enemigo",
    score: ("con " + otherWins + " pts")
  }
  else return {
    whoWins: "fue un empate",
    score: ("yo :" + meWins + " enemigo :" + otherWins)
  }

}

export default function useGame() {

  const [jugada, setJugada] = useState(null)
  const [turn, setTurn] = useState(0)
  const [winners, setWinners] = useState([])
  const [enemy, setContrincante] = useState(null)
  const [options, setOptions] = useState(elements)
  const [finishResult, setFinishedResult] = useState(null)

  const rondas = useRef(5)

  const meWins = winners.filter(wins => wins === "yo").length
  const otherWins = winners.filter(wins => wins === "enemigo").length
  const winner = winners[turn]

  useEffect(() => {
    if (!jugada) return
    const enemyPlay = generateARandomPlay(elements)
    setContrincante(enemyPlay)

    const ganador = validateTurnWinner({ a: jugada, b: enemyPlay })

    if (ganador !== null) {
      const newWinners = [...winners]
      newWinners[turn] = ganador
      setWinners(newWinners)

      const winnerOption = options.filter(option => option === jugada)
      setOptions(winnerOption)
    }

  }, [jugada])


  const cambiarJugada = ({ element }) => {
    if (winner !== undefined) return
    setJugada(element)
  }

  const resetGame = () => {
    setJugada(null)
    setTurn(0)
    setContrincante(null)
    setOptions(elements)
    setWinners([])
    setFinishedResult(null)
  }

  const nextRound = () => {
    if (rondas.current === (turn + 1)) return setFinishedResult(calculateWhoWins(meWins, otherWins))
    setJugada(null)
    setContrincante(null)
    setOptions(elements)
    const newConter = turn + 1
    setTurn(newConter)
  }

  return {
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
  }
}