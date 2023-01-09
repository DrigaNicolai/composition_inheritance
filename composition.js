const createProgrammer = (name) => {
  const programmer = { name };

  return {
    ...programmer,
    ...canCode(programmer)
  }
}

const canCode = ({ name }) => {
  return {
    code: () => console.log(`${name} is coding...`)
  }
}

const createFrontend = (name) => {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canVue(programmer),
    ...canAngularAndReact(programmer)
  }
}

const canAngularAndReact = ({ name }) => {
  return {
    angular: () => console.log(`${name} is creating Angular app...`),
    react: () => console.log(`${name} is creating React app...`)
  }
}

const canVue = ({ name }) => {
  return {
    vue: () => console.log(`${name} is creating Vue app...`)
  }
}

const createBackend = (name) => {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canNodeJs(programmer)
  }
}

const canNodeJs = ({ name }) => {
  return {
    nodeJs: () => console.log(`${name} is creating NodeJS app...`)
  }
}

const createFullstack = (name) => {
  const programmer = createProgrammer(name);

  return {
    ...programmer,
    ...canAngularAndReact(programmer),
    ...canNodeJs(programmer)
  }
}


const programmer = createProgrammer("Test");

programmer.code();

const frontend = createFrontend("Test frontend");

frontend.code();
frontend.vue();
frontend.angular();
frontend.react();

const backend = createBackend("Test backend");

backend.code();
backend.nodeJs();

const fullstack = createFullstack("Test fullstack");

fullstack.code();
fullstack.angular();
fullstack.react();
fullstack.nodeJs();
