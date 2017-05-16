import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';

/**
 * FavoriteService - Use to interacte with favorites
 * allows for un/favoriting an application, evaluating favorite status
 * @requires Injectable
 * @requires StorageService
 */
@Injectable()
export class FavoriteService {

  favoriteStorageName: String = 'favorites';

  constructor(private storage: StorageService) {}

  /**
   * addFavorite - Favorites an applicant based on it's id, if an id has already
   * been favorited it will remove that instance
   * @param { Integer } id The id of the applicant to favorite
   */
  addFavorite(id) {
    let favorites = this.getFavorites();

    let arr = favorites.favoritesArray;
    let idx = arr.indexOf(id);

    if (idx === -1) {
      arr.push(id);
    } else {
      arr.splice(idx, 1);
    }

    this.storage.setLocalItem(this.favoriteStorageName, favorites);

  }

  /**
   * getFavorites - Retrieves the favorite object from storage
   * TODO: Retrieve from service when available
   */
  getFavorites() {

    let favorites = this.storage.getLocalItem(this.favoriteStorageName);

    if (!favorites) {

      favorites = {
        favoritesArray: []
      };

      this.storage.setLocalItem(this.favoriteStorageName, favorites);

    }

    return favorites;

  }

  /**
   * isFavorited - Determines if an application has been favorited
   * @param { Integer } id The id of the application to be evaluated
   * @returns { Boolean } Whether an application id has been favorited
   */
  isFavorited(id) {

    let favorites = this.getFavorites();

    for (let fav of favorites.favoritesArray) {
      if (fav === id) {
        return true;
      }
    }

    return false;

  }

}
