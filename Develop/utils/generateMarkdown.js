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
  To start you must install 

\`\`\`
  ${data.installation} 
\`\`\`


  ## Tests
  If you want to run tests you need to use 

  \`\`\`
  ${data.tests} 
\`\`\`


  #Usage
  ${data.usage} 
 

  ## Contributions
  ${data.contributer}

  ## License 
  ${data.license}

  ## Questions?
  Reach me at ${data.email}
  My Github picture
  
  ![picture](https://github.com/${data.githubName}.png?size=100)

`;
}

module.exports = generateMarkdown;