import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BTHanh-ANGULAR';
  ngOnInit(): void {
    this.Bai01();
     this.Bai02();
     this.Bai03();
     this.Bai01TuLam();
     this.Bai02TuLam();
     this.Bai03TuLam();
     this.Bai04TuLam();
     this.Bai05TuLam();
     this.Bai06TuLam();
     this.Bai08TuLam();
  }
  //Bai mau
  Bai01(): void {
    let n: number = 3;
    let s: number = 0;
    for (let i: number = 1; i <= n; ++i) s += 1.0 / i;
    console.log(s);
  }
  Bai02(): void {
    var list: number[] = [4, 11, 45, 3, 13, 50, 7, 60, 77];
    let checkNguyenTo = (x: number): boolean => {
      if (x < 2) return false;
      else if (x > 2) {
        if (x % 2 == 0) return false;
        for (let i: number = 3; i <= Math.sqrt(x); i += 2) {
          if (x % i == 0) return false;
        }
      }
      return true;
    };
    var listNguyenTo: number[] = list.filter((x) => checkNguyenTo(x));
    console.log('Các số nguyên tố là : ' + listNguyenTo);
  }
  Bai03(): void {
    class HCN {
      protected a: number;
      protected b: number;
      constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
      }
      public DienTich(): number {
        return this.a * this.b;
      }
    }

    class HH extends HCN {
      protected h: number;
      constructor(a: number, b: number, h: number) {
        super(a, b);
        this.h = h;
      }
      public TheTich(): number {
        return this.DienTich() * this.h;
      }
    }
    var a: number = 5;
    var b: number = 6;
    var h: number = 3;
    var hh = new HH(a, b, h);
    console.log(hh.TheTich());
  }
  //Bai tu lam
  Bai01TuLam(): void {
    const x: number = 2;
    let n: number = 2;
    let s: number = 0;
    for (let i: number = 1; i <= n; ++i) s += Math.pow(x, i);
    console.log(s);
  }
  Bai02TuLam(): void {
    const x: number = 3;
    let n: number = 3;
    let s: number = 0;
    let TinhGiaiThua = (x: number): number => {
      let res = 1;
      for (let i: number = 1; i <= x; ++i) res *= i;
      return res;
    };
    // console.log(TinhGiaiThua(0));
    for (let i: number = 1; i <= n; ++i) {
      s += (Math.pow(-1, i) * Math.pow(x, i)) / TinhGiaiThua(i);
    }
    console.log('Result: ' + s);
  }
  Bai03TuLam(): void {
    let students: any[] = [
      { hoten: 'Nguyen tien dinh', diemthi: 9 },
      { hoten: 'Tran Thi Anh', diemthi: 7.5 },
      { hoten: 'Hoang Thi Dung', diemthi: 8.3 },
    ];
    const res: any[] = students.sort((x, y) => (x.hoten > y.hoten ? 1 : -1));
    console.log(res);
  }
  Bai04TuLam(): void {
    let students: any[] = [
      { hoten: 'Nguyen Thi Mai', quequan: 'Hung Yen', diemthi: 9 },
      { hoten: 'Tran Thi Anh', quequan: 'Ha Noi', diemthi: 7.5 },
      { hoten: 'Hoang Thi Dung', quequan: 'Hai Phong', diemthi: 8.3 },
    ];
    let result: any[] = students.filter(
      (x) => x.diemthi > 8 && x.quequan.indexOf('Hai Phong') >= 0
    );
    console.log(result);
  }
  Bai05TuLam(): void {
    let nums: number[] = [1, 2, 3, 4, 9, 12, 25, 16, 36];
    const res: number[] = nums.filter(
      (x) => parseInt(Math.sqrt(x).toString()) == Math.sqrt(x)
    );
    console.log(res);
  }
  Bai06TuLam(): void {
    let nums: number[] = [-1, -2, 1, 2, 3];
    const sum: number = nums
      .filter((x) => x > 0)
      .reduce((total, num) => (total += num), 0);
    console.log(sum);
  }
  Bai08TuLam(): void {
    let Sday: number = 120;
    let h: number = 15;
    let S: number = (Sday * h) / 3;
    console.log(S);
  }
}