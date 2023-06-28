const sqlite3 = require("sqlite3");
const path = require("path");

const pathDB = path.resolve(process.cwd(), "src", "db", "data-test.sqlite");
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

const initDB = async () => {
  try {
    await run(`CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY,
        title TEXT,
        description TEXT,
        is_done INTEGER DEFAULT 0
    )`)
  } catch (error) {
    console.log(error)
  }
};
initDB();
