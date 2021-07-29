const { it, describe, expect } = require('@jest/globals');
const SortByPath = require('./SortByPath');

describe('sorByPath',() => {
  const objects = [
    {
      id: 2,
      name: 'David',
      speed: [
        1,5,5,5,5
      ],
      date: '7/29/2021',
      dob: '1998-10-08'
    },
    {
      id: 1,
      name: 'Apple',
      speed: [
        5,5,5,5,5
      ],
      date: '7/28/2021',
      dob: '1998-10-05'
    }
  ]
  it('sorts by number', () => {
    const [{ id }] = objects.sort(new SortByPath('id').byNumber)
    expect(id).toEqual(1)
  })
  it('sorts by string', () => {
    const [{ name }] = objects.sort(new SortByPath('name').byString)
    expect(name).toEqual('Apple')
  })
  it('sorts by average', () => {
    const [{ id }] = objects.sort(new SortByPath('speed').byAverage)
    expect(id).toEqual(1)
  })
  it('sorts by date', () => {
    const [{ id }] = objects.sort(new SortByPath('date').byDate)
    expect(id).toEqual(1)
  })
  it('sorts by Date of Birth', () => {
    const [{ id }] = objects.sort(new SortByPath('dob').byBirthDate)
    expect(id).toEqual(1)
  })
  it('cannot access #getDataFromPath', () => {
    const hasProperty = new SortByPath()
      .hasOwnProperty('#getDataFromPath')
    expect(hasProperty).hasOwnProperty(false);
  })
  it('can handle nested paths', () => {
    const objects2 = [
      {
        id: 2,
        cats: {
          dogs: {
            apples: 2
          }
        }
      },
      {
        id: 1,
        cats: {
          dogs: {
            apples: 3
          }
        }
      },
    ]
    const [{ id }] = objects.sort(new SortByPath('cats.dogs.apples').byNumber)
    expect(id).toEqual(1);
  })
})