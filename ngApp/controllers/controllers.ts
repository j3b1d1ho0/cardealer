namespace dealership.Controllers {

    export class HomeController {
        public message = 'Hello from the home page!';
        public makes;
        public cars;
        public carSearch;
        public selectedMake;
        public getCarsForMake(make){

          let that = this;

console.log(that.selectedMake)
            this.CarService.getCars().then((results) => {
                this.cars = results.filter((car) => {
                    return car.make = that.selectedMake.name;
                });
                console.log(that.cars, 'CARS')
            })
    }
        
        constructor(private CarService:dealership.Services.CarService) {
            CarService.getMakes().then((results) => {
                this.makes = results;
            this.selectedMake = this.makes[0].name;
        });
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
