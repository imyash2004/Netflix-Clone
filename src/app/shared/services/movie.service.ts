import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
const options = {
  params: {
    include_adult: 'true',
    include_video: 'true',
    language: 'en-US',
    page: '1',
  },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MjJkM2ZiMmM5ZWE4MjlkMDhhOTkwZGIwNWZiYmE4OSIsInN1YiI6IjY1OThkNWJjYmQ1ODhiMDA5MzkxNjc1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GOKySP8BPCYg5EJQPglUXuacXEFMuFTB5fJSMryuN48',
  },
};
@Injectable({
  providedIn: 'root',
})
export class MovieService {
  http = inject(HttpClient);
  getMovies() {
    return this.http.get<any>(
      'https://api.themoviedb.org/3/discover/movie',
      options
    );
  }
}
