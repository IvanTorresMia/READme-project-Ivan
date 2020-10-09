function generateMarkdown(data) {
    return `
  # ${data.title}

  ## Table of contents
* [Description](#Description)
* [Installation](#Installation)
* [Tests](#Tests)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [License](#License)

  ## Description 
  ${data.description}

  ## Installation
  To start you must install ${data.installation} on your terminal

  ## Tests
  If you want to run tests you need to use ${data.tests} on your terminal

  #Usage
  ${data.usage} 

  ## Contributions
  ${data.contributer}

  ## License 
  ${data.license}

  ## Questions?
  Reach me at ${data.email}
  My Git Hub Repo 
`;
}

module.exports = generateMarkdown;