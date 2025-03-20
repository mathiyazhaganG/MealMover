import React from 'react'




export class About extends React.Component{  
	constructor(props){
		super(props)
		
		this.state={
			about:"About Us",
			about2: "About Us2",
			githubData: {},
		}
	}
	
	async componentDidMount(){
		const res=  await fetch("https://api.github.com/users/mathiyazhaganG")
		const data= await res.json()
		console.log(data)
		this.setState({githubData:data})
	}
	render(){
		const name =this.state.githubData.login
		const img =this.state.githubData.avatar_url
		const repo =this.state.githubData.repos_url
		return(
			<div>
				<h1>About Us-class</h1>
				<img src={img} alt=""/>
				<h2>{name}</h2>
				<h2> github repo:{repo}</h2>
				
			</div>
		)
	}
}

export default About
