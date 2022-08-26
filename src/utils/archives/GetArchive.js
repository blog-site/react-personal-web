function GetArchive(slug) {
  const data = require('../../asset/archives/index.json');
  var result = data.find(data => data['slug'] === slug);
  if(typeof(result) === 'undefined'){
    console.log('no result');
    result = {
      'title': 'Not Found',
      'contentDir': 'notFound',
      'slug': 'not-found'
    };
  }
  return result;
}

export default GetArchive;