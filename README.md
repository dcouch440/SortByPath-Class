# `SortByPath Class`

## `Created 7/29/2021 By David Couch`

## `About`

Why this was created? For Fun! This class gives you access to sorting methods by using the Array.prototype.sort() method combined with a class.

### `Examples`

#### `Simple`
```js
  const objects = [
    { id: 2, name: 'David' },
    { id: 1, name: 'Apples' }
  ]

  objects.sort(new SortByPath('id').byNumber)
  // RESULTS
    [
      { id: 1, name: 'Apples' },
      { id: 2, name: 'David' }
    ]


  objects.sort(new SortByPath('name').byString)
  // RESULTS
    [
      { id: 1, name: 'Apples' },
      { id: 2, name: 'David' }
    ]

  const averageObject = [
    {
      speed: [
        1,2,3,4,5
      ]
    },
    {
      speed: [
        2,5,6,7,8
      ]
    },
  ]
  averageObject.sort(new SortByPath('speed').byAverage)
  // RESULTS
  [
    {
      speed: [
        2,5,6,7,8
      ]
    },
    {
      speed: [
        1,2,3,4,5
      ]
    },
  ]

```

#### `Nested`

```js
  const objects = [
    {
      one: {
        two: {
          three: {
            val: 5
          }
        }
      }
    },
    {
      one: {
        two: {
          three: {
            val: 1
          }
        }
      }
    },
  ]
  objects.sort(new SortByPath('one.two.three.val').byNumber)
  // RESULTS
  [
    {
      one: {
        two: {
          three: {
            val: 1
          }
        }
      }
    },
    {
      one: {
        two: {
          three: {
            val: 5
          }
        }
      }
    },
  ]
```

#### `Methods`
```js
    // PRIVATE
    #getDataFromPath

    // Sorting By
    .byAverage

    .byNumber

    .byBirthDate

    .byDate

    .byString

    .byString
```

### `Tech Used`

- JavaScript

### `Download`
To Download
```
git clone Repo-HTTPS-Here
```
To Change Directory
```
cd Repo-Name-Here
```
To View
```
code .
```