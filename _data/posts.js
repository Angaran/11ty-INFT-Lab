const contentful = require('contentful')

const client = contentful.createClient({
  space: 'jbhqzo8hi24d',
  environment: 'master', // defaults to 'master' if not set
  accessToken: '8R84XhkRx-jgZSbeAODiPyJwuGJXQKJlXyB2R4PggfE'
})

client.getEntry('gVg7UxeAOLCncVR2sZ0BW')
  .then((entry) => console.log(entry))
  .catch(console.error)


