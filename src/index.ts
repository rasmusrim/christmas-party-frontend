import Controller from "./Controller";
import {Participant} from "./sprites/Participant";

const controller = new Controller();
const div = document.createElement('div');
div.id = 'stage';
document.querySelector('body').append(div);

controller.init('#stage').then(() => {
  controller.start()

  for (let i = 0; i < 10; i++) {
    setTimeout(() => controller.addParticipant(), i * 500);
  }

});






