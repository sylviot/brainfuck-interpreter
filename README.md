# Brainfuck interpreter

[![Build Status](https://img.shields.io/travis/sylviot/brainfuck-interpreter.svg?style=flat-square
"Build Status")](https://travis-ci.org/sylviot/brainfuck-interpreter)

A simple brain fuck interpreter in javascript

## Commands


| Command     | Operator |                    |
| ------------|:--------:|:------------------:|
| Incremment  |   **+**  | :white_check_mark: |
| Decremment  |   **-**  | :white_check_mark: |
| Forward     |   **>**  | :white_check_mark: |
| Backward    |   **<**  | :white_check_mark: |
| Input       |   **,**  |:black_small_square:|
| Output      |   **.**  | :white_check_mark: |
| Debug       |   **#**  |:black_small_square:|

|| Legend |
|:-:|:-------|
|:black_small_square:| Not implemented|
|:white_check_mark:  | Implemented|


## How use

```javascript
bf('++++++++[>++++[>++>+++>+++>+<<<<-]>+>->+>>+[<]<-]>>.>>---.+++++++..+++.', console.log);
```

Enjoy :smile: