// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    message: 'Enter project title',
    name: 'title'
},

{
    type: 'input',
    message: 'Enter a description of your project.',
    name: 'description'
},

{
    type: 'input',
    message: 'Add instructions for installation.',
    name: 'installation'
},

{
    type: 'input',
    message: 'Add details on usage',
    name: 'usage'
},

{
    type: 'input',
    message: 'Enter credits',
    name: 'credits'
},

{
    type: 'list',
    message: 'Choose a license',
    choices: ['Apache License 2.0', 'MIT License'],
    name: 'license'
},

{
    type: 'confirm',
    name: 'continuePrompt',
    message: 'Do you want to add another input?',
    default: false,
},

]; 

// TODO: Create a function to write README file
function writeToFile(fileName, response) {

let readMeContent =
`# ${response.title}

## Description

${response.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${response.installation}

## Usage

${response.usage}

## Credits 

${response.credits}

## License

`;

if(response.license === 'MIT License')
{
    const mitLicense = `MIT License

Copyright (c) 

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`

readMeContent = `${readMeContent}${apacheLicense}`;

}
else{

    const apacheLicense = 
    `                             Apache License
                       Version 2.0, January 2004
                    http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1.  Definitions.

    "License" shall mean the terms and conditions for use, reproduction, and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by the copyright owner that is granting the License.

    "You" (or "Your") shall mean an individual or Legal Entity exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.

    "Object" form shall mean any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work.

    "Contribution" shall mean any work of authorship, including the original version of the Work and any modifications or additions to that Work, that is submitted to the Licensor for inclusion in the Work.

    "Contributor" shall mean Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by the Licensor and subsequently incorporated within the Work.

2.  Grant of Copyright License.

    Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute the Work and such derivative works in Source or Object form.

3.  Grant of Patent License.

    Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section) patent license to make, use, sell, offer for sale, import, and otherwise transfer the Work, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Work to which such Contribution(s) was submitted.

4.  Redistribution.

    You may reproduce and distribute copies of the Work or modifications thereof in any medium, with or without modifications, and in Source or Object form, provided that You meet the following conditions:

    (a) You must give any other recipients of the Work or modifications a copy of this License; and

    (b) You must cause any modified files to carry prominent notices stating that You changed the files; and

    (c) You must retain, in the Source form of any distribution, all copyright, patent, trademark, and attribution notices from the Source form of the Work, excluding those notices that do not pertain to any part of the Source; and

    (d) If the Work includes a "NOTICE" text file as part of its distribution, then any redistribution of the Work must include a readable copy of the attribution notices contained within such NOTICE file, excluding those notices that do not pertain to any part of the Work; and

    (e) You may not use the trade names, trademarks, service marks, or product names of the Licensor, except as required to comply with the conditions of this License.

5.  Submission of Contributions.

    Unless You explicitly state otherwise, any Contribution intentionally submitted for inclusion in the Work by You to the Licensor shall be under the terms and conditions of this License, without any additional terms or conditions.

    Notwithstanding the above, nothing herein shall be construed as shifting or assigning ownership of any intellectual property rights.

6.  Trademarks.

    This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required to comply with the conditions of this License.

7.  Disclaimer of Warranty.

    Unless required by applicable law or agreed to in writing, Licensor provides the Work (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Work and assume any risks associated with Your exercise of permissions under this License.

8.  Limitation of Liability.

    In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Work (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.

9.  Accepting the License.

    You accept and agree to be bound by the terms of this License by copying, modifying, or distributing the Work (or any work based on the Work).

10.  Miscellaneous.

    This License shall be governed by and interpreted in accordance with the laws of the State of California, without regard to its conflict-of-law provisions. If any provision of this License is held to be invalid or unenforceable, that provision shall be reformed only to the extent necessary to make it valid and enforceable. The invalidity or unenforceability of any provision of this License shall not affect the validity or enforceability of the remaining provisions of this License, which shall remain in full force and effect.

END OF TERMS AND CONDITIONS
`

readMeContent = `${readMeContent}${apacheLicense}`;

}
fs.writeFile(fileName, readMeContent, (err) => err ? console.error(err) : console.log('Success!'))

}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            writeToFile('README.md', response)
        })
}

// Function call to initialize app
init();
