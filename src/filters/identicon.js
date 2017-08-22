let Identicon = require('../../node_modules/identicon.js/identicon')
let crypto = require('../../node_modules/crypto-browserify')

export default (value, uid) => {
  let color = crypto.createHash('md5').update(uid).digest("hex")
  let r = parseInt(color.slice(0, 2), 16)
  let g = parseInt(color.slice(2, 4), 16)
  let b = parseInt(color.slice(4, 6), 16)
  let options = {
    foreground: [r, g, b, 255]
  }
  return value ? value : 'data:image/png;base64,' + new Identicon(uid, options)
}


