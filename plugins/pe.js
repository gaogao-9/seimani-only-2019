export default (_, inject) => {
  const pe = {};

  inject("pe", Object.assign(pe, {
    delay: (ms = 0) => new Promise((r) => setTimeout(r, ms)),
    awaitAll: (...p) => Promise.all(...p, pe.delay),
    await: (p) => pe.awaitAll(p).then(([x]) => x),
  }));
};
