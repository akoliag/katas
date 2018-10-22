//https://www.codewars.com/kata/basic-subclasses-adam-and-eve/train/javascripts

class Human {};
class Woman extends Human {};
class Man extends Human {};

class God{
    static create(){
      return [new Man, new Woman];
    }
  }
