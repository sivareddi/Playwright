# JavaScript Identifier Rules

| Rule | Valid Example | Invalid Example |
|------|---------------|-----------------|
| Must start with a letter, `_`, or `$` | `let name = 1;`<br>`let _count = 2;`<br>`let $price = 3;` | `let 1name = 1;` |
| Can contain letters, digits, `_`, `$` | `let user1 = 1;`<br>`let my_var = 2;`<br>`let data$et = 3;` | `let my-var = 1;` |
| Case-sensitive | `let x = 1; let X = 2;` (two different variables) | — |
| Cannot be a reserved keyword | `let name = 1;` | `let let = 1;`<br>`let class = 2;`<br>`let return = 3;` |
| Cannot contain spaces | `let fullName = 1;` | `let full name = 1;` |
| Unicode letters allowed | `let étudiant = 1;`<br>`let 名前 = 2;` | — |
