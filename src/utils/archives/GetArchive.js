function GetArchive(slug) {
  const data = require('../../asset/archives/index.json');
  var archive = data.find(data => data['slug'] === slug);
  if(typeof(archive) === 'undefined'){
    archive = {
      'title': 'Not Found',
      'contentDir': 'notFound',
      'slug': 'not-found',
      'content': 'not-found'
    };
  }
  return archive;
}

export default GetArchive;