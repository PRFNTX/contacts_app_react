import React from "react"
import { Link } from "react-router-dom"

const WrappedLink = (props) => {
  return (

	<Link className={props.className} to={props.to} >
		<button style={{height:'100%',width:'100%'}}>
			{props.text}
		</button>
	</Link>
  )
}

export default WrappedLink
