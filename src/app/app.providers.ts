import { ApplicantService } from './services/applicant.service';
import { FavoriteService } from './services/favorite.service';
import { StorageService } from './services/storage.service';

export const AppProviders = [
  ApplicantService,
  FavoriteService,
  StorageService
];
