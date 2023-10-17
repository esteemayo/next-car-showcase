function init() {}

function log(error: string): void {
  console.error(error);
}

const logger = {
  init,
  log,
};

export default logger;
