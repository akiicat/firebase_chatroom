export default (value, email) => {
  return value ? value : email.split('@')[0]
}
