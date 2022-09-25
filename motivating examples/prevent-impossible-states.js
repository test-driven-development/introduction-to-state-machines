const log = console.log

const STATES = {
  lit: 'lit',
  unlit: 'unlit',
  broken: 'broken',
}

function lightBulb() {
  let state = STATES.unlit

  return {
    state() {
      return state
    },
    toggle() {
      switch (state) {
        case STATES.lit:
          state = STATES.unlit
          break
        case STATES.unlit:
          state = STATES.lit
          break
      }
    },
    break() {
      state = STATES.broken
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
