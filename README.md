<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://qubika.com/">
    <img src="https://qubika.com/wp-content/themes/qubika-theme/img/qubika.svg" alt="Logo" height="50" style="padding: 20px">
  </a>
	<p>   </p>
  <a href="https://playwright.dev/">
    <img src="https://playwright.dev/img/playwright-logo.svg" alt="Logo" height="150" style="padding: 20px">
  </a>

<h3 align="center">qubika-playwright-exercise</h3>
  <p align="center">Repository of the requested JavaScript's exercise</p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#set-up">Set up</a></li>
      </ul>
    </li>
    <li><a href="#enhancements">Enhancements</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
As the project subtitle suggests, this is the repository for the JavaScript/Playwright exercise requested by Qubika.

I started this project by generating the default template given by Plawright for e2e testing.

For the structure of the project, I used the "Facade" design pattern to divide the different tasks the script does in order to have a better track of what every method and class does, avoiding god classes in the process.

I tried to simplify the steps of the test as much as possible, so it doesn't matter if the code is read by a Junior or Senior developer, it should be easy to figure out what every method does.

As for the parameters, I used the Dotenv library to handle environment variable files.

Lastly, I used the Faker library to generate random usernames, passwords, and category type names to avoid errors on both the API and the front end during the test execution.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![Javascript]
* ![Node.js]
* ![Playwright]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

* Node.js, installed on your system

### Set up

1. Clone the repo.
   ```sh
   git clone https://github.com/EmRodDev/qubika-playwright-exercise.git
   ```

2. Enter the project directory

    ```sh
    cd qubika-playwright-exercise
    ```

3. Install the dependencies

    ```sh
    npm install
    ```

3. Remove the *.example* extension from the *.env.example* filename

4. *(Optional)* Inside of said file there's two available parameters, changing the **BROWSER** parameter also changes the browser used by the script during the execution, and the **IS_HEADLESS** toggles the headless mode or disables it.

    The available browser options are: *chromium*,*firefox* and *webkit* (Safari)

    ```env
    BROWSER=firefox # chromium, firefox, webkit
    IS_HEADLESS=true
    ```

#### Execution

For the execution, simply execute the following command:


```sh
npx playwright test
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->
## Enhancements

* Splitting the test into multiple sub-tests to obtain a better trace of the execution on the reporter
* Replace the implicit waits added to handle the load of the navigation buttons with a more dynamic solution
* Modularize the methods even more to reutilize code
* Add support for more web browsers

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[JavaScript]:https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=000&style=for-the-badge
[Node.js]:https://img.shields.io/badge/Node.js-5FA04E?logo=nodedotjs&logoColor=fff&style=for-the-badge
[Playwright]:https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge&logo=playwright&logoColor=white

