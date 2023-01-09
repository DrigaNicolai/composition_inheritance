class Programmer {
  constructor(name) {
    this.name = name;
  }

  code() {
    console.log(`${this.name} is coding...`);
  }
}

class Frontend extends Programmer {
  vue() {
    console.log(`${this.name} is creating Vue app...`);
  }
}

class Backend extends Programmer {
  nodeJs() {
    console.log(`${this.name} is programming on Node JS`);
  }
}

class Fullstack extends Frontend {
  // Bad, due to duplicate
  nodeJs() {
    console.log(`${this.name} is programming on Node JS`);
  }
}

const programmer = new Programmer("Test");

programmer.code();

const frontend = new Frontend("Test frontend");

frontend.code();
frontend.vue();

const backend = new Backend("Test backend");

backend.code();
backend.nodeJs();