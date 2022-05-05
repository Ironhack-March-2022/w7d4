import React from 'react'

export default function SearchField(props) {

	const handleInputChange = event => {
		props.setQuery(event.target.value)
	}

	return (
		<input type="text" onChange={handleInputChange} />
	)
}
