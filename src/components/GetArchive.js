function GetArchive(slug) {
  const data = require('../asset/archives/index.json');
  return data.find(data => data['slug'] === slug);
}

export default GetArchive;