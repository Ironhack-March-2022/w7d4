import React from 'react'
import { useParams } from 'react-router-dom'
import { myProjects } from './Projects'

export default function ProjectDetails() {

	// this is how to retrieve a route parameter using react router
	const params = useParams()
	const id = params.id

	const project = myProjects.find(project => project.id === id)

	console.log(project)

	console.log(params)
	return (
		<>
			<div>ProjectDetails</div>
			<h3>{project.name}</h3>
		</>
	)
}
