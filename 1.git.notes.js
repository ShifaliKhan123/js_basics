const notes = `
What is Git?
 - Git is a version control system.
 - Version Control System : A system where you can access information ( mainly in the form of code) anytime and anywhere and hence use the info either to rectify any mistakes or to update the system.

What does Commit do in Git ?
- It takes a snapshot of the info in the git file.

What is a decentralized model?
- Git is a decentralized model where powers are distributed and data is stored and tracked both online and offline.
- Two parts in a Git system : local and server
- assuming we have one commit in local in order for it to reflect on the server side we need to  "Push" it to the server .

Branches
- instead of writing data in one Master folder we can write data in slave folder and once all the data is written the data fron the branches folder gets synced into the Master folder.

Commands in Git :
- git clone : pull data from repository ( a folder where your tracking everything via Git ) to a local system.
- git add : writing code sending it to the index .
- index : Imaginary space where data is temp stored before pushing it to the Repository.

folder —————> Index ——————> Repository —————> Server
        add         commit              push 

- git status : current status of the repository .
- git push - u origin master
  - origin is remote server
  - master : remote servers master branch
- git diff : changes between the local git repository from the latest commit
- git log : list of all commits starting from latest
`;
console.log(notes);
