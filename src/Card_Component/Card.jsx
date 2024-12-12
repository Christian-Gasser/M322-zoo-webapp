import './Card.css';

export default function Card(props) {
  return (
    <div className={'card' + (props.clickable ? ' clickable' : '') + (props.flex ? ' flex' : '')} >
      {props.children}
    </div>
  )
}