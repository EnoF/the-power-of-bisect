# The power of bisect

The test that can confirm if it is working:
```
const expect = chai.expect

describe('on change fill the input color', function() {
  before(function() {
    const testArea = document.createElement('div')
    testArea.id = 'test-area'
    testArea.innerHTML = '<form action="#" method="GET"> <label> My level of git is: <input type="number" name="git_level"> </label> <label> git bisect is: <select> <option>Awesome</option> <option>Great</option> <option>Meh</option> <option>Lame</option> </select> </label> <input type="submit" value="submit"> </form>'
    document.body.appendChild(testArea)
    addListeners()
  })

  it('has filled', function() {
    const input = document.querySelector('input')
    const event = document.createEvent('Event');
    event.initEvent('change', true, true)
    input.dispatchEvent(event)
    expect(input.classList.contains('filled')).to.equal(true)
  })
}
```
