// "use strict";
// let datafire = require('datafire');
// /*
// const N = "\n"
// +" , " + input.inputEmail
// */
//
// /* I've nested the api because dont want to send to them if havent sent to me,
// but feel really should just remove the datafire template and replace with my own
// doing from scratch should be able to format the message etc and send a message with CC
// to the sender etc
// */
// var google_gmail = require('@datafire/google_gmail').actions;
// module.exports = new datafire.Action({
//   inputs: [{
//     type: "string",
//     title: "inputFirstName"
//   }, {
//     type: "string",
//     title: "inputLastName"
//   }, {
//     type: "string",
//     title: "inputEmail",
//     pattern: ".*@.*\\..*"
//   }, {
//     type: "string",
//     title: "inputMessage"
//   }],
//   handler: async (input, context) => {
//
//     let messageToMe = await google_gmail.buildMessage({
//       to: "websitecontactushandler@gmail.com",
//       from: "websitecontactushandler@gmail.com",
//       subject: input.inputFirstName + " "+ input.inputLastName + " has sent you a msg via the bootstrap website contact me:",
//       body: input.inputFirstName + " "+ input.inputLastName + input.inputMessage +"/n" + " replay at : " + input.inputEmail,
//     }, context);
//
//         let messageToThem = await google_gmail.buildMessage({
//       to: input.inputEmail,
//       from: "websitecontactushandler@gmail.com",
//       subject: "You sent: " + input.inputFirstName + " "+ input.inputLastName + " has sent you a msg via the bootstrap website contact me:",
//       body: input.inputFirstName + " "+ input.inputLastName + input.inputMessage +"/n" + " reply at : " + input.inputEmail,
//     }, context);
//
//     let sentToMe = await google_gmail.users.messages.send({
//       userId: "me",
//       body: {
//         raw: messageToMe,
//       },
//     }, context);
//
//      let sentToThem = await google_gmail.users.messages.send({
//       userId: "me",
//       body: {
//         raw: messageToThem,
//       },
//     }, context);
//
//     return "Success";
//   },
// });
