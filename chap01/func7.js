let rectangle1 = { 
    width: 4, 
    height: 5,
    method1() {
        const getArea = () => this.width * this.height; 
        console.log(getArea());
    }
};

rectangle1.method1();

//inner함수인 화살표 함수 본문의 this는 그 함수가 포함된 outter 함수의 this와 같다.