export default function TabButton({children, onSelect, onSelectedBtn}){
  return(
    <li>
      <button className={onSelectedBtn ? "active" : null} onClick={onSelect}>{children}</button>
    </li>
  )
}