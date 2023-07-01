import { Unknow, Element } from "./Elements"

function EnemySection({ enemy }) {

  const hasEnemy = enemy !== null
    ? <Element element={enemy} />
    : <Unknow />

  return (
    <div className="enemy section">
      <h2 className="name" >enemigo</h2>
      {hasEnemy}
    </div>
  )
}

export default EnemySection