## Description

Inherit the Argc and Argv of the current APP

## Parameters

| Name  | Description                                                                          |
| ----- | ------------------------------------------------------------------------------------ |
| gArgc | argument count.It signifies how many arguments are being passed into the executable. |
| gArgv | argument values.It is a pointer to an array of characters.                           |


## Method 

```objectivec
- (void) connectArgcArgv:(int)gArgc setgArgv:(char **) gArgv
```