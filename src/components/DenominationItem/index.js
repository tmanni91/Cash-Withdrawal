import './index.css'

const DenominationItem = props => {
  const {denominationDetails, updateBalance} = props
  const {value} = denominationDetails

  const onDenomination = () => {
    updateBalance(value)
  }

  return (
    <li className="denomination-list">
      <button className="btn" type="button" onClick={onDenomination}>
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
