'use strict';

console.log ('Hello World');

const class_cars = [{title: 'Класс Mini*', background: './images/citroen/clean.jpg', multi: 1, active: true}, 
                    {title: 'Средний класс*', background: './images/mazda/clean.jpg', multi: 1.5, active: false},
                    {title: 'Премиум класс*', background: './images/mercedes/clean.jpg ', multi: 2, active: false}
                    ];

const icons = [
                {title: 'фары', icon: './icons/optic.png'}, 
                {title: 'зеркала', icon: './icons/mirrors.png'}, 
                {title: 'пороги внутренние', icon: './icons/thresholdsinternal.png'}, 
                {title: 'тоцы дверей', icon: './icons/door.png'},
                {title: 'противотуманки', icon: './icons/foglights.png'},
                {title: 'передний бампер', icon: './icons/frontbumper.png'},
                {title: 'часть заднего бампера', icon: './icons/rearbumper.png'},
                {title: 'ручки', icon: './icons/handles.png'},
                {title: 'часть капота', icon: './icons/parthood.png'},
                {title: 'капот целиком', icon: './icons/hood.png'},
                {title: 'часть крыльев', icon: './icons/partwings.png'},
                {title: 'крылья полностью', icon: './icons/wings.png'}
];

// lorem lorem lorem 

const obj_complete = [
                      {description: 'Минимальный', price: 10, background: 
                        ['./images/citroen/mini.jpg', './images/mazda/mini.jpg', './images/mercedes/mini.jpg'],
                        icons: [icons[0], icons[1], icons[2], icons[3], icons[7]]},
                      {description: 'Стандарт', price: 15, background: 
                        ['./images/citroen/standart.jpg', './images/mazda/standart.jpg', './images/mercedes/standart.jpg'],
                        icons: [icons[0], icons[1], icons[4], icons[5], icons[7], icons[8], icons[10]]},
                      {description: 'Стандарт+', price: 18, background: 
                        ['./images/citroen/standartplus.jpg', './images/mazda/standartplus.jpg', './images/mercedes/standartplus.jpg'],
                        icons: [icons[0], icons[1], icons[4], icons[5], icons[7], icons[9], icons[10]]},
                      {description: 'Стандарт++', price: 22, background: 
                        ['./images/citroen/standart2plus.jpg', './images/mazda/standart2plus.jpg', './images/mercedes/standart2plus.jpg'],
                        icons: [icons[0], icons[1], icons[4], icons[5], icons[7], icons[9], icons[11]]},
                      {description: 'Стандарт+++', price: 28, background: 
                        ['./images/citroen/standart3plus.jpg', './images/mazda/standart3plus.jpg', './images/mercedes/standart3plus.jpg'],
                        icons: [icons[0], icons[1], icons[4], icons[5], icons[6], icons[7], icons[9], icons[11]]},
                      {description: 'Комплекс', price: 50, background: 
                        ['./images/citroen/all.jpg', './images/mazda/all.jpg', './images/mercedes/all.jpg'],
                        icons: [icons[0], icons[1], icons[4], icons[5], icons[6], icons[7], icons[9], icons[10], icons[11]]}
];

const obj_details = [
                      {description: 'Оптика стандарт', price: 10, background: 
                        ['./images/citroen/optic.jpg', './images/mazda/optic.jpg', './images/mercedes/optic.jpg']},
                      {description: 'Пороги внутренние', price: 12, background: 
                        ['./images/citroen/thresholdsinternal.jpg', './images/mazda/thresholdsinternal.jpg', './images/mercedes/thresholdsinternal.jpg']},
                      {description: 'Пороги наружные', price: 12, background: 
                        ['./images/citroen/thresholdsexternal.jpg', './images/mazda/thresholdsexternal.jpg', './images/mercedes/thresholdsexternal.jpg']},
                      {description: 'Двери (4шт)', price: 22, background:
                        ['./images/citroen/door.jpg', './images/mazda/door.jpg', './images/mercedes/door.jpg']},
                      {description: 'Задние крылья', price: 19, background: 
                        ['./images/citroen/backwing.jpg', './images/mazda/backwing.jpg', './images/mercedes/backwing.jpg']},
                      {description: 'Капот', price: 15, background: 
                        ['./images/citroen/hood.jpg', './images/mazda/hood.jpg', './images/mercedes/hood.jpg']},
                      {description: 'Передний бампер', price: 12, background: 
                        ['./images/citroen/frontbumper.jpg', './images/mazda/frontbumper.jpg', './images/mercedes/frontbumper.jpg']},
                      {description: 'Задний бампер', price: 12, background: 
                        ['./images/citroen/rearbumper.jpg', './images/mazda/rearbumper.jpg', './images/mercedes/rearbumper.jpg']}
];

new Vue({
  el: '#app',
  data: {
    class_cars: class_cars,
    obj_complete: obj_complete,
    obj_details: obj_details,
    icons: obj_complete[0].icons,
    selectedClassCarsIndex: 0,
    selectDescriptionIndex: 0,
    selectDescriptionSubIndex: -1, 
    multi: class_cars[0].multi,
    price: obj_complete[0].price,
    background: obj_complete[0].background[0],
    subMenuOpen: false
  },
  // update update update
  methods: {
    selectClassCars (index) {
      this.class_cars.forEach ((el, i) => {
        el.active = index === i ? true : false
      });
      this.multi = class_cars[index].multi;
      this.selectedClassCarsIndex = index;

      this.background = this.selectDescriptionIndex > -1 ? obj_complete[this.selectDescriptionIndex].background[this.selectedClassCarsIndex] : 
                        obj_details[this.selectDescriptionSubIndex].background[this.selectedClassCarsIndex];
      this.price = this.selectDescriptionIndex > -1 ? obj_complete[this.selectDescriptionIndex].price * this.multi :
                        obj_details[this.selectDescriptionSubIndex].price * this.multi;

    },
    selectDescription (index) {
      this.selectDescriptionSubIndex = -1;
      this.price = obj_complete[index].price * this.multi;
      this.background = obj_complete[index].background[this.selectedClassCarsIndex];
      this.selectDescriptionIndex = index;
      this.icons = obj_complete[index].icons;
    },
// lorem lorem lorem 
    carItemClassActive(index) {
      return {'active': this.selectDescriptionIndex === index}
    },
    selectSubDescription (index) {
      this.selectDescriptionIndex = -1;
      this.price = obj_details[index].price * this.multi;
      this.background = obj_details[index].background[this.selectedClassCarsIndex];
      this.selectDescriptionSubIndex = index;
      this.icons = [];
   },
    carSubItemClassActive(index) {
      return {'active': this.selectDescriptionSubIndex === index}
    },
    openSubMenu () {
      return {'active' : this.subMenuOpen}
    }
  }
})

// lorem lorem lorem 
>>>>>>> a73c2079351c49c3447eed56d5abb655a103624a
