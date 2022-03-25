function password (input) {
    let index = 0;
    let diggit = input[index];
    let currentDiggit = input[index];
    while (diggit === currentDiggit) {
        console.log(`Welcome ${diggit}!`);
        index++;
        currentDiggit = input[index];
    }
}

password(["Gosho",
"secret",
"secret"])