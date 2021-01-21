# local-storage-data
Small piece of code handle localstorage simplify


## Installation

#### NPM
```js
npm install local-storage-data
```

#### YARN
```js
yarn add local-storage-data
```

## Usage

### import package first

```js
  import localStorageData from 'local-storage-data'
```

### Set
```js

const userData = {
  name: 'rudestewing',
  age: 25,
}

localStorageData.set('user', userData)

```
if you want to make it temporary just add duration to third parameter

```js

localStorageData.set('user', userData, (60*60*24))

```

### Get
```js
  const user = localStorageData.get('user')
```


### Remove

```js
localStorageData.remove('user')

```
