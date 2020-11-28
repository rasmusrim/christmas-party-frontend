import Controller from "./Controller";

const controller = new Controller();
controller.init('body').then(() => controller.start());
