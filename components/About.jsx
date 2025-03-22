import React from "react";

export class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      about: "About Us",
      about2: "About Us2",
      githubData: {},
    };
  }

  async componentDidMount() {
    const res = await fetch("https://api.github.com/users/mathiyazhaganG");
    const data = await res.json();
    console.log(data);
    this.setState({ githubData: data });
  }

  render() {
    const name = this.state.githubData.login;
    const img = this.state.githubData.avatar_url;
    const repo = this.state.githubData.repos_url;

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <div className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
          <img
            src={img}
            alt="GitHub Avatar"
            className="w-32 h-32 rounded-full mx-auto border-4 border-gray-300"
          />
          <h2 className="text-2xl font-semibold text-gray-700 mt-4">{name}</h2>
          <h2 className="text-gray-600 mt-2">
            GitHub Repo:{" "}
            <a
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {repo}
            </a>
          </h2>
        </div>
      </div>
    );
  }
}

export default About;
