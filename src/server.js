const app = require('./app');
const {exec} = require('child_process');


const PORT = process.env.PORT || 8090;


const main = async() => {
    try{
        app.listen(PORT);
        await new Promise((resolve, reject) => {
            const migrate = exec(
              'sequelize db:migrate',
              {env: process.env},
              err => (err ? reject(err): resolve())
            );
          
            // Forward stdout+stderr to this process
            migrate.stdout.pipe(process.stdout);
            migrate.stderr.pipe(process.stderr);
          });
        console.log(`Server running on port ${PORT}`);
    } catch(error){
        console.log(error);
    }
}

main();
