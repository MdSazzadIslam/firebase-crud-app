import firebase from "./firebase";
const db = firebase.ref("/student");

class Services {
  debugger;
  getAll() {
    return db;
  }

  saveData(data) {
    debugger;
    return db
      .push(data)
      .then((res) => {
        console.log("Added");
        alert("Added");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  updateData(key, value) {
    debugger;
    return db
      .child(key)
      .update(value)
      .then(() => {
        console.log("Updated");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  deletData(key) {
    debugger;
    return db
      .child(key)
      .remove()
      .then((res) => {
        console.log("Deleted");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  deletAllData() {
    return db
      .remove()
      .then((res) => {
        console.log("Deleted");
      })
      .then((err) => {
        console.log(err);
      });
  }
}

export default new Services();
