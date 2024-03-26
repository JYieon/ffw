let rectangle1 = { 
    width: 4, 
    height: 5,
    method1() {
        let area = this.width * this.height;
        console.log(area);
    }
};

let method1 = rectangle1.method1;
method1();//###.method1()형태로 호출하지 않아서 함수 본문의 this는 어떤 객체를 가르키지 않는다.
//error
