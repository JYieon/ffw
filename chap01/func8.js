let rectangle1 = { 
    width: 4, 
    height: 5,
    method1() {
        let getArea = function() { 
            return this.width * this.height; 
        };
        let getArea2 = getArea.bind(rectangle1);
        //getArea2본문의 this는 이미 rectangle1객체를 가르키도록 설정되어있다.
        console.log(getArea2());
    }
};

rectangle1.method1();

