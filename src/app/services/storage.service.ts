import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  /**
   * getLocalItem - Retrieves an item from local storage based on a provided key
   * @param { String } key The key of the item to retrieve
   */
  getLocalItem(key) {

    let item = JSON.parse(localStorage.getItem(key));

    if (item) {
      return item;
    }

    return false;

  }

  /**
   * getSessionItem - Retrieves an item from session storage based on a provided key
   * @param { String } key The key of the item to retrieve
   */
  getSessionItem(key) {

    let item = JSON.parse(localStorage.getItem(key));

    if (item) {
      return item;
    }

    return false;

  }

  /**
   * removeLocalItem - Removes an item from local storage based on a provided key
   * @param { String } key The key of the item to delete
   */
  removeLocalItem(key) {

    return localStorage.removeItem(key);

  }

  /**
   * removeSessionItem - Removes an item from session storage based on a provided key
   * @param { String } key The key of the item to delete
   */
  removeSessionItem(key) {

    return sessionStorage.removeItem(key);

  }

  /**
   * setLocalItem - Sets an item to local storage after stringifying
   * @param { String } key The key of the item to set
   * @param { Any } value The data to be set to local storage, could be string, object, etc
   */
  setLocalItem(key, value) {

    localStorage.setItem(key, JSON.stringify(value));

  }

  /**
   * setSessionItem - Sets an item to session storage after stringifying
   * @param { String } key The key of the item to set
   * @param { Any } value The data to be set to session storage, could be string, object, etc
   */
  setSessionItem(key, value) {

    sessionStorage.setItem(key, JSON.stringify(value));

  }

}
