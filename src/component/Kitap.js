export default function Kitap(props) {

  return <button onClick={props.onClick} className={props.className}>{props.name}</button>

}
