import elements from "../services/elements"

export const validateTurnWinner = ({ a, b }) => {
  if (a === b) return false
  else if (a === elements[0] && b === elements[2]) return "yo"
  else if (a === elements[0] && b === elements[1]) return "enemigo"
  else if (a === elements[2] && b === elements[0]) return "enemigo"
  else if (a === elements[2] && b === elements[1]) return "yo"
  else if (a === elements[1] && b === elements[0]) return "yo"
  else if (a === elements[1] && b === elements[2]) return "enemigo"
  else return false
}