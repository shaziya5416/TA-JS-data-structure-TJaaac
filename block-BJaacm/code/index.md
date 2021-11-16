```js
let user = {
  name: 'Arya',
  sibling: ['Robb', 'Ryan', 'John'],
};
let allBrothers = ['Robb', 'Ryan', 'John'];
let brothersCopy = user.sibling;
let usename = user.name;
let newUser = user;
```

1. Memory representation

- Create the memory representation of the above snippet on notebook.
- Take a photo/screenshot and add it to the folder `code`

<!-- To add this image here use ![name](./hello.jpg) -->

2. Answer the following with reason:

- `user == newUser;` // true
- `user === newUser;`//true
- `user.name === newUser.name;`//true
- `user.name == newUser.name;`//true
- `user.sibling == newUser.sibling;`//true
- `user.sibling === newUser.sibling;`//true
- `user.sibling == allBrothers;`//fdalse
- `user.sibling === allBrothers;`//false
- `brothersCopy === allBrothers;`//false
- `brothersCopy == allBrothers;`//false beacuse no same address no matter double equal tos or single equal tos
- `brothersCopy == user.sibling;`//true
- `brothersCopy === user.sibling;`//true
- `brothersCopy[0] === user.sibling[0];`//true
- `brothersCopy[1] === user.sibling[1];`//true
- `user.sibling[1] === newUser.sibling[1];`//true
