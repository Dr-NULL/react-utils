# react-utils

This is an small package, with some utilitites for react apps.

## Local implementation

This instructions assumes that you will working in `"C:\projects"`, you can use another folder if you want.

- Clone __`this`__ repository in `"C:\projects"`.

- Create a new project _(replace `[name]` with your project name)_ using [create-react-app](https://github.com/facebook/create-react-app):
```ps
PS C:\projects> create-react-app [name] --template typescript
```

- Go to the repository:
```ps
PS C:\projects> cd ./react-utils
```

- Link the react dependency from your test project to this library:
```ps
PS C:\projects\react-utils> npm link ../[name]/node_modules/react
```

- Finally build the repository:
```ps
PS C:\projects\react-utils> npm run build
```