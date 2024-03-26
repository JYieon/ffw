let rectangle1 = { 
    width: 4, 
    height: 5,
    method1() {
        let area = this.width * this.height;
        console.log(area);
    }
};

rectangle1.method1();

