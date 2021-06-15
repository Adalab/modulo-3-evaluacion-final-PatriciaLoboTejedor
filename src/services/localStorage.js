const set = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = (key) => {
  const data = localStorage.getItem(key);
  return JSON.parse(data);
};

const clear = () => {
  localStorage.clear();
};

const objectExport = {
  get: get,
  set: set,
  clear: clear,
};

export default objectExport;
