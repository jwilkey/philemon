var fs = require('fs')

const generate = () => {
  const base = './src/studies'
  const studiesDir = './public/studies'
  if (!fs.existsSync(studiesDir)) { fs.mkdirSync(studiesDir) }
  fs.readdir(base, (e, files) => {
    files.forEach(f => {
      const path = base + '/' + f
      if (fs.lstatSync(path).isDirectory()) {
        if (!fs.existsSync(`${studiesDir}/${f}`)) { fs.mkdirSync(`${studiesDir}/${f}`) }
        fs.readdir(path, (e, files2) => {
          files2.forEach(f2 => {
            if (f2.endsWith('js')) {
              const studyPath = path + '/' + f2
              const study = require(studyPath)
              if (study.text && study.text.endsWith('.txt')) {
                study.text = fs.readFileSync(study.text, 'utf8')
              }
              fs.writeFile(`${studiesDir}/${f}/${f2}on`, JSON.stringify(study, null, 2), err => {
                if (err) { return console.error(err) }
                console.log('Wrote: ', studyPath)
              })
            }
          })
        })
      }
    })
  })
}

generate()
