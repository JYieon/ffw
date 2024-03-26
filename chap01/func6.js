let rectangle1 = { 
    width: 4, 
    height: 5,
    method1() {
        let getArea = () => { //화살표함수
            return this.width * this.height; 
        };
        console.log(getArea());
    }
};

rectangle1.method1();

