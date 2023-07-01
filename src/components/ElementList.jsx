import { Element } from './Elements'

function ElementList({ options, handleClick }) {
  return (
    <div className='me section'>
      <h2 className="name" >yo</h2>
      {
        options.map((element, index) => <Element key={index} handleClick={handleClick} element={element} />)
      }
    </div>
  )
}

export default ElementList