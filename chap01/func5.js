let rectangle1 = { 
    width: 4, 
    height: 5,
    method1() {
        const getArea = function() { 
            return this.width * this.height; 
        };
        console.log(getArea());
    }
};

rectangle1.method1();
//###.getArea() 로 호출하지 않아서 getArea본문의 this는 어떤 객체를 가르키지 않는다.
//error
