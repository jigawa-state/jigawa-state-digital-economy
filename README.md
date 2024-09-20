# Welcome to Jigawa-State GitHub Organization
We are building a collaborative space to manage projects for all government projects within the Jigawa State. Below is a step-by-step guide on how you can contribute to as a member in our organization, including how to add your projects and collaborate on existing ones.

## Security and Privacy Rules
**To ensure the security and integrity of all Jigawa State projects, please follow these guidelines strictly:**

1. **Private Repositories:** All Jigawa State project repositories must remain private. No repository should be made public under any circumstances unless explicitly authorized by the organization’s leadership.

2. **No Third-Party Sharing:** Project source codes, files, and documentation should not be shared with any third party. This includes external individuals, organizations, or contractors unless they are officially part of the project and authorized by Jigawa State.

3. **Prohibited Use of Code:** Source code from Jigawa State projects must not be used, distributed, or sold to any other organization or entity. The code is strictly for the use of the ministries within Jigawa State.

4. **Access Control:** Only authorized team members should have access to project repositories. If a team member no longer works on a project, make sure to revoke their access immediately.

5. **Sensitive Data:** Do not commit any sensitive information (e.g., API keys, passwords, personal data) to the repository. Use environment variables and keep .env files out of version control by adding them to .gitignore.

6. **Reporting Security Issues:** If you suspect any security breach or unauthorized access to any project repository, immediately report the issue to the organization admins.



## Project Naming Convention
Each project in the organization is named using the following pattern: Each project have a sub-domain that points to the main project. The main domain is [jg.gov.ng](https://jg.gov.ng), so for The Ministry of Justice Software the domain will be [https://moj.gov.ng](https://moj.gov.ng), for Education Management Information System, the domain will be [https://emis.gov.ng](https://emis.gov.ng). Below is an example is an example naming convention for our repositories

```bash
    jigawa-[subdomain-of-the-project]
```


For example: 
- Ministry of Justice Software will be named: `jigawa-moj`
- Education Management Information System Software will be named: `jigawa-emis`

You'll find other repositories with names like this. Please identify the project you are working on based on the name and clone the repository to add your code or make changes to the project 



## Contributing Guidelines

If you are assign to work on a project or are part of a project team this guidelines will help you in making contributions to our organizations.  


## How to Add Your Existing Repository to the Organization
In some cases it's likely that you already have a GitHub repo created for the project on your personal GitHub Account. If that is the case you can move the repository to **Jigawa-State** organization with the following steps: 

### Transfer Ownership of the Repository
- Navigate to your repository on GitHub.
Go to `Settings > General` (scroll to the bottom).
Under the **Danger Zone**, 
- Find the Transfer option. Enter the name of the repository to confirm.
- When prompted, type the new owner as: **Jigawa-State**.
Confirm the transfer.

Once transferred, the repository will now be part of our organization.


## Cloning and Working on Existing Projects in the Organization
Sometimes you'll see these repo already created for you by the organization. In that case you'llIf you want to clone and contribute to an existing project in the Jigawa-State organization, follow these steps:

#### 1. Clone the Repository
Navigate to the repository page in the Jigawa-State organization, then clone the repository the copying and pasting the command below in the command line replacing `<name-of-repository>` with the name of the repository you'll be working on:

```bash
git clone https://github.com/Jigawa-State/<name-of-repoository>.git
```
#### 2. Set Up Your Branch
Before making any changes, make sure to create a new branch:

```bash
git checkout -b your-name/your-github-username
```
#### Commit and Push Your Branch
 Then copy all files from your project folder and paste to the repository or continuously make changes to this branch until you complete or your team completed working the projects. Once you finish you can commit and push your code for a review by using the following commands: 


```bash
    git add .
    git commit -m "Push Some project to GitHub" 
    git push origin your-name/your-github-username
```







### Security Reminders
- Keep all repositories private.
- Do not share code or data with third parties.
- Protect sensitive information from being committed to the repository.
- Report any security issues or breaches immediately.


Thank you for contributing to the Jigawa-State organization! Together, we’re building software that makes a difference.
