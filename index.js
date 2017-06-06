const express = require('express')
const app = express()

app.use('/public', express.static('./'))

app.get('/', (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8">
      <title>Git bisect is so awesome!</title>
      <style>
        .filled {
          background-color: green;
        }
      </style>
    </head>
    <body>
      <form
        action="#"
        method="GET"
      >
        <label>
          My level of git is:
          <input 
            type="number"
            name="git_level"
          />
        </label>

        <label>
          git bisect is:
          <select>
            <option>Awesome</option>
            <option>Great</option>
            <option>Meh</option>
            <option>Lame</option>
          </select>
        </label>
        <input
          type="submit"
          value="submit"
        />
      </form>
      <script src="/public/script.js" type="application/javascript" async></script>
    </body>
  </html>
  `)
})

app.listen(3000, () => console.log('server has started under port 3000'))
