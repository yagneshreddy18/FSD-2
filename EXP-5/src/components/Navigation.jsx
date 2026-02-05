import { Link } from "react-router-dom"

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/"> Dashboard |</Link>
      <Link to="/company"> Company Info |</Link>
      <Link to="/help"> Help</Link>
    </div>
  )
}

export default Navigation
