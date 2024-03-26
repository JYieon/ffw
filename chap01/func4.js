let rectangle1 = { 
    width: 4, 
    height: 5,
    method1() {
        const getArea = function() {  //getArea는 method1 내부의 지역 변수
            return this.width * this.height; 
        };
        console.log(getArea());
    }
};

rectangle1.method1();
//error
