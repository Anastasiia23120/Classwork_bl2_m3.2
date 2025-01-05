const fn1 = function () {
  console.log('fn1 execution');

  console.log('Before fn2 execution');
  fn2();
  console.log('After fn2 execution');
};

const fn2 = function () {
  console.log('fn2 execution');
};

const fn3 = function () {
  console.log('fn3 execution');
};

fn1();
fn2();
fn3();
