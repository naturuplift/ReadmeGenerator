# Professional README Generator

<br/>
<p align="center">
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" >
        <img alt="JavaScript - ES6" src="https://img.shields.io/static/v1.svg?label=JavaScript&message=ES6&color=violet" /></a>
    <a href="https://nodejs.org/" >
        <img alt="Node.js - A JavaScript runtime built on Chrome's V8 JavaScript engine, used for building fast and scalable network applications" src="https://img.shields.io/static/v1.svg?label=Node.js&message=JavaScript runtime&color=green" /></a>
    <a href="https://www.npmjs.com/package/inquirer" >
        <img alt="Inquirer.js" src="https://img.shields.io/static/v1.svg?label=npm&message=inquirer&color=blue" /></a>
    <a href="https://github.com/">
        <img alt="GitHub (for repository hosting and project management) - Provides hosting for software development and version control using Git" src="https://img.shields.io/static/v1.svg?label=GitHub&message=hosting&color=black" /></a>
    <a href="https://git-scm.com/">
        <img alt="Git (for version control) - A free and open-source distributed version control system" src="https://img.shields.io/static/v1.svg?label=Git&message=version control&color=lightgray" /></a>
    <a href="https://unb.ca/cel/bootcamps/coding.html">
        <img alt="University of New Brunswick" src="https://img.shields.io/static/v1.svg?label=bootcamp&message=UNB&color=red" /></a>
</p>
<br/>

Welcome to the README Generator Project! This project is designed to help you easily create well-structured README files for your own projects. Writing a comprehensive README is essential for providing information about your project, making it more accessible to users and contributors.

## Description

This README Generator Project aims to simplify the process of creating README files for your projects. You can use this project to:

- Automatically generate README templates with sections for project description, installation, usage, contribution guidelines, and more.
- Customize and fill in the content of each section based on your project's details.
- Export the generated README as a markdown (.md) file for easy integration into your project repositories.

## Table of Contents
- [Demo Video](#demo-video)
- [Getting Started](#getting-started)
- [Structure](#structure)
- [Contributing](#contributing)
- [Starter Code](#starter-code)
- [Additional Resources](#additional-resources)
- [State Flow Diagram](#state-flow-diagram)
- [License](#license)

## Demo Video
[Open Demo video of README Generator][readme-generator]

## Getting Started

To get started with the README Generator Project, follow these steps:

### 1. Clone or Download the Project

Clone this repository to your local machine using Git or download it as a ZIP file and extract its contents.

```shell
git clone https://github.com/yourusername/ReadmeGenerator.git
```
### 2. Install Required Dependencies

Before using the README generator, make sure you have Node.js and npm (Node Package Manager) installed on your system.

### 3. Generate a README

Run the following command in your terminal to start the README generator:

```shell
npm install
node index,js
```

Sample terminal prompting:
![readme-generator generation](https://github.com/naturuplift/readme-generator/assets/23546356/936fa374-a841-47fa-80d1-53e7e6e90014)

The generator will prompt you to answer questions about your project. Based on your responses, it will create a README.md file with the provided information.

Markdown created from the prompts:
![readme-generator markdown](https://github.com/naturuplift/readme-generator/assets/23546356/f53b4a4b-ac8d-4b46-be0c-c53cfbfee7dc)

### 4. Customize the Generated README

Review the generated README and make any additional changes or edits to suit your project's needs. You can add more sections, images, or formatting as desired.
You can preview the generated README file [online][mark-preview] or in [Visual Studio Code][VSC-markdown]

Below online preview for markdown generated:
![readme-generator markdown-preview](https://github.com/naturuplift/readme-generator/assets/23546356/413bab63-80bc-43bb-82d5-76c2ab033dad)

### 5. Add the README to Your Project

Copy the generated README.md file and add it to your project's repository. Make sure to commit and push the changes to make the README visible to others.

## Contributing
Contributions to the project are welcome: Fork the project. Create your feature branch (git checkout -b feature/AmazingFeature). Commit your changes (git commit -m 'Add some AmazingFeature'). Push to the branch (git push origin feature/AmazingFeature). Open a pull request.

## Structure

Your directory may have the following structure:

```javascript
readme-generator/
    ├── index.js
    ├── package.json
    ├── package-lock.json
    ├── templates/
    │   ├── readme-template.md
    ├── README.md
    ├── generatedREADME/
    │   ├── README.md
    └── .gitignore
```

You can customize the templates and project structure as needed.

## Starter Code

To start with this project we used the following [Starter Code][starter-code]

## Additional Resources

-    [Markdown Cheatsheet][mark-sheat]: A handy reference for Markdown syntax.
-    [Node.js Documentation][node-doc]: Documentation for Node.js, the runtime used for this project.

Feel free to explore and enhance this README Generator Project to suit your specific requirements. Creating well-documented projects is crucial for better collaboration and understanding. Happy README generation!

## State Flow Diagram
For a visual representation of the sequence of actions involved in the readme generator, refer to the [State Flow Diagram][state-flow] provided in the project documentation.

Feel free to reach out, contribute, or provide feedback to make the Password Generator Project even more robust and user-friendly!

## License

This project is licensed under the MIT License. See the [LICENSE][MIT] file for details.

[readme-generator]: <https://drive.google.com/file/d/1Ipq_Ebyq0QQEx_n9BKFClSTudtYsDKlo/view>
[mark-preview]: <https://markdownlivepreview.com/>
[readme-generator]: <https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced>
[starter-code]: <https://github.com/coding-boot-camp/potential-enigma>
[mark-sheat]: <https://www.markdownguide.org/cheat-sheet/>
[node-doc]: <https://nodejs.org/en/learn/getting-started/introduction-to-nodejs>
[state-flow]: <https://github.com/naturuplift/readme-generator/blob/main/assets/img/Readme%20Generator%20State%20Diagram%20v1.png>
[MIT]: <https://github.com/naturuplift/readme-generator/blob/main/LICENSE>
