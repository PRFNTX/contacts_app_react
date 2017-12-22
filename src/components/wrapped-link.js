import React from "react"
import { Link } from "react-router-dom"

const WrappedLink = (props) => {
  return (

	<Link to={props.to} >
		<button>
			{props.text}
		</button>
	</Link>
  )
}

export default WrappedLink
