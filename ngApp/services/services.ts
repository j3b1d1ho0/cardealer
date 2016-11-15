namespace dealership.Services {

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    export class CarService{
        private CarResource;
        private MakeResource;
        public getCars(){
            return this.CarResource.query().$promise;
        }
        public getMakes(){
            return this.MakeResource.query().$promise;
        }

        constructor($resource: ng.resource.IResourceService) {
            this.CarResource = $resource('/api/cars');
            this.MakeResource = $resource('/api/makes')
        }
    }
    angular.module('dealership').service("CarService", CarService);
    
    angular.module('dealership').service('movieService', MovieService);
    export class MyService {

    }
    angular.module('dealership').service('myService', MyService);
    }
