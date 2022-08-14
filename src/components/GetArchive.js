function GetArchive(slug) {
  const data = require('../asset/archives/index.json');
  var result = data.find(data => data['slug'] === slug);
  if(typeof(result) === 'undefined'){
    result = {
      "title": "Not Found",
      "contentFile": "notfound.md",
      "slug": "not-found"
    };
  }
  return result;
}

export default GetArchive;