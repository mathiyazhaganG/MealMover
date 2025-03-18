import React from 'react'
import { useRouteError } from 'react-router'

const Error = () => {
	const error = useRouteError()
  return (
	<div>
		
		<h1>{error.status}:{error.statusText}</h1>
		<p>Sorry, the page you are looking for does not exist.</p>
	  
	</div>
  )
}

export default Error
