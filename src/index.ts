import Controller from "./Controller";
import faker from 'faker';


const controller = new Controller();
const div = document.createElement('div');
div.id = 'stage';
document.querySelector('body').append(div);



controller.init('#stage').then(() => {
  controller.start()

  for (let i = 0; i < 5; i++) {
    setTimeout(() => controller.addParticipant(getName()), i * 1000);
  }

});

function getName(): string {
  return faker.name.findName();
}






