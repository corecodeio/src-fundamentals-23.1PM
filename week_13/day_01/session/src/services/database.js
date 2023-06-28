const sqlite3 = require("sqlite3");
const path = require("path");

const pathDB = path.resolve(process.cwd(), "src", "db", "database.sqlite");

const db = new sqlite3.Database(pathDB);

const run = (qrery, params = []) => {
  return new Promise((resolve, reject) => {
    db.run(qrery, params, (error) => {
      if (error) {
        return reject(error);
      }
      return resolve({ status: true });
    });
  });
};

const get = (qrery, params = []) => {
  return new Promise((resolve, reject) => {
    db.all(qrery, params, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
};

const initDB = async () => {
    try {
        await run(`CREATE TABLE IF NOT EXISTS todos (
            id INTEGER PRIMARY KEY,
            title TEXT,
            description TEXT,
            isDone INTEGER DEFAULT 0
        )`)
    } catch (error) {
        console.log(error)
    }
};

module.exports = {
    initDB,
    run,
    get
}