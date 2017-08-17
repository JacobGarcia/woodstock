const watch = require('node-watch')
const fs = require('fs')

// Check if there is a new file int the spool directory
watch('spool', { recursive: true }, function(event, name) {
  console.log('%s changed.', name)

  // Get only the filename
  const filename = name.match(/[^/]*$/)
  console.log(filename[0])
  //When is recognized a new file, this needs to be copied to the files directory
  //fs.createReadStream(name).pipe(fs.createWriteStream('files/' + name))
})
