const log = console.log

function lightBulb() {
  let isLit = false
  let isBroken = false

  return {
    state() {
      return {
        isLit,
        isBroken,
      }
    },
    toggle() {
      isLit = !isLit
    },
    break() {
      isBroken = true
    },
  }
}

const output = () => {
  log(bulb.state())
}

const bulb = lightBulb()
output()
bulb.toggle()
output()
bulb.break()
output()
