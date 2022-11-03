class LocalStorageHelper{

    checkIfLocalStorageExist(){
      try {
        if(((typeof(Storage) !== "undefined" && typeof localStorage === 'object'))){
          localStorage.test = 2;
        return true;
        }
      } catch (e) {
        return false;
      }
      return false;
    }
  
    storeObject(key,object){
        if(this.checkIfLocalStorageExist()){
          localStorage.setItem(key,JSON.stringify(object));
        }
    }
    getObject(key){
        if(this.checkIfLocalStorageExist()){
          return JSON.parse(localStorage.getItem(key));
        }
        return undefined;
    }
  }
  
  export default new LocalStorageHelper();
  