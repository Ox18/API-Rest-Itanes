import * as sqlite from "sqlite3";
import path from "path";

class Connection {
  static getDB() {
    const dir = path.resolve(__dirname, "./db/tour.db");
    const sqlite3 = sqlite.verbose();
    const db = new sqlite3.Database(dir, sqlite3.OPEN_READWRITE, (error) => {
      if (error) {
        console.log(error.message);
      }
    });
    return db;
  }
}

export = Connection;
