function generateMarkdown(data) {
    return `
  # ${data.title}

  ## Description 
  ${data.description}

  ## Dependencies
  ${data.dependencies}

## Installation
${data.installation}

  ## How To test
  If you want to run tests you need to use ${data.tests} on your terminal

  #Usage
  ${data.usage} 

  ## Contributions
  ${data.contributer}

  ## License 
  ${data.license}
`;
}

module.exports = generateMarkdown;