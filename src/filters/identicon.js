let Identicon = require('../../node_modules/identicon.js/identicon')

export default (value, uid) => {
  return value ? value : 'data:image/png;base64,' + new Identicon(uid)
}


