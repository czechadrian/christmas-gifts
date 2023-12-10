import { SmsService } from "./smsService.js";
import _ from "lodash";
import 'dotenv/config.js';

// define list of participants here as {name: '', phoneNumber: ''}
const listOfParticipants = [];

function assignRandomParticipants(participants) {
    let shuffled = _.shuffle(participants);

    shuffled.forEach((shuffledElement, index) => {
        if (shuffledElement.name === participants[index].name) {
            let otherIndex = (index + 1) % shuffled.length;
            [shuffled[index], shuffled[otherIndex]] = [shuffled[otherIndex], shuffledElement];
        }
    });
    let assignments = [];
    participants.forEach((participant, index) =>
        assignments.push({
            fromName: participant.name,
            toName: shuffled[index].name,
            toPhoneNum: shuffled[index].phoneNumber
        }));

    return assignments;
}
const smsService = new SmsService();

assignRandomParticipants(listOfParticipants).forEach(draw => smsService.sendMessage(draw));
