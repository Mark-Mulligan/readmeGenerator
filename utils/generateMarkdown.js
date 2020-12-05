// function to generate markdown for README
function generateMarkdown(data, licenseInfo) {
  return `# ${data.projectName}

  ${licenseInfo.badge}

  ## Description 
  ${data.description}
  
  ## Table of Contents (Optional)
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  
  ## Installation
  ${data.description}
  
  ## Usage 
  ${data.usage}
  
  ## Credits
  ${data.credits}
  
  ## License
  This project is liscensed under a/an ${data.license} license.

  For more info, check see the link below:
  (${licenseInfo.link})
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions
  ${data.githubUsername}
  ${data.email}

  #### How to Contact Me
  ${data.howToContact}
  
  © ${data.name} 2020 All Rights Reserved.

`;
}

module.exports = generateMarkdown;
