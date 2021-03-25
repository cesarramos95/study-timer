const jsonfile = require('jsonfile-promised');
const fs = require('fs');

module.exports = {
  saveCourseData(course, studyDuration){
    let coursePath = __dirname + '/data/' + course + '.json';

    if (fs.existsSync(coursePath)) {
      this.addTimeToCourse(coursePath, studyDuration);
    }else {
      this.createCourseFile(coursePath, {})
        .then(() => {
          this.addTimeToCourse(coursePath, studyDuration);
        });
    }
  },
  
  addTimeToCourse(coursePath, studyDuration) {
    let courseData = {
      UltimoEstudo: new Date().toString(),
      duracao: studyDuration
    }
    jsonfile.writeFile(coursePath, courseData, {spaces: 2})
            .then(() => {
              console.log('Tempo salvo com sucesso');
            }).catch((err) => {
              console.log(err);
            })
  },

  createCourseFile(filename, fileContent) {
    return jsonfile
            .writeFile(filename, fileContent)
            .then(() => {
              console.log('Arquivo criado');
            }).catch((err) => {
              console.log(err);
            });
  }
}  