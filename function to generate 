// function to generate sheilds for README
function licence(licence) {

  if (licence === "MIT") {
    return `![githublicence](https://img.shields.io/badge/MIT-Licence-green)`
  } 
  
  else if 
    (licence === "APACHE 2.0"){
     return `![githublicence](https://img.shields.io/badge/APACHE%202.0-Licence-blue)`

  }

  else if 
    (licence === "GPL 3.0"){
     return `![githublicence](https://img.shields.io/badge/GPL%203.0-Licence-red)`

  }

  else if 
    (licence === "BSD 3"){
     return `![githublicence](https://img.shields.io/badge/BSD%203-Licence-green)`

  }
  else
    {
     return `![githublicence](https://img.shields.io/badge/None-Licence-lightgrey)`

  }
  
};


// function to generate markdown for README
function generateMarkdown(data) {
  const badge = licence(data.license)


  return `${badge}
 # ${data.title}
 ${data.describe}
 ## Table of Contents 
 * [License](#license)
 
 * [Installation](#installation)
 
 * [Usage](#usage)
 
 * [Tests](#tests)
 
 * [Contributing](#contribute)
 
 * [Questions](#questions)
## Installation
${data.install}
## Usage
${data.usage}
## Tests
${data.test}
## Credits
${data.contribute}
## Questions
<https://github.com/${data.github}></br>
${data.email}
`;
}

module.exports = generateMarkdown;