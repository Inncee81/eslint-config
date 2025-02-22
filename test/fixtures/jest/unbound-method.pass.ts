/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable functional/no-this-expression */
/* eslint-disable no-console */

class MyClass2 {
  public logBound = () => {
    console.log(this);
  };

  public logUnbound(): void {
    console.log(this);
  }
}

const instance2 = new MyClass2();

const { logBound } = instance2;
logBound();

// .bind and lambdas will also add a correct scope.
const dotBindLog = logBound.bind(instance2);

const innerLog = () => {
  instance2.logBound();
};
