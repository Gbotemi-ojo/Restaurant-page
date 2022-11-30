import { factoryDiv } from "./factory";
import { factoryImage } from "./factory";

const SpongeBob = (function (contactCardContainer, contactCard, ContactName,contactImage ,contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = factoryDiv('');
    contactCard = factoryDiv('');
    ContactName = factoryDiv('', 'SpongeBob');
    contactImage = factoryImage('/assets/spongeBob.jpeg', 'a pic of spongeBob');
    contactInfo = factoryDiv('');
    contactProfession = factoryDiv('', 'Chef');
    contactPhoneNumber = factoryDiv('', '+73-456-01');
    contactEmail = factoryDiv('', 'SpongeBob@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName,contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const plankTon = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail){
    contactCardContainer = factoryDiv('');
    contactCard = factoryDiv('');
    ContactName = factoryDiv('', 'Plankton');
    contactImage = factoryImage('/assets/spongeBob.jpeg', 'a pic of plankton');
    contactInfo = factoryDiv('');
    contactProfession = factoryDiv('', 'Villian');
    contactPhoneNumber = factoryDiv('', '+73-472-22');
    contactEmail = factoryDiv('', 'plankton07@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

const mrKrabs = (function (contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail) {
    contactCardContainer = factoryDiv('');
    contactCard = factoryDiv('');
    ContactName = factoryDiv('', 'Mr Krabs');
    contactImage = factoryImage('/assets/mrKrabs.png', 'a pic of mr Krabs');
    contactInfo = factoryDiv('');
    contactProfession = factoryDiv('', 'CEO');
    contactPhoneNumber = factoryDiv('', '+73-271-83');
    contactEmail = factoryDiv('', 'krabbyMula@milky.io');
    appendChildren(contactCardContainer, contactCard, ContactName, contactImage, contactInfo, contactProfession, contactPhoneNumber, contactEmail);
    return contactCardContainer
})()

export const contact = (function(){
    let contactUs = factoryDiv('contactUs');
    let ContactUsText = factoryDiv('','Contact Us');
    let contactsContainer = factoryDiv('contacts');
    contactUs.appendChild(ContactUsText);
    contactUs.appendChild(contactsContainer);
    contactsContainer.appendChild(SpongeBob);
    contactsContainer.appendChild(plankTon)
    contactsContainer.appendChild(mrKrabs)
    return contactUs
})()

function appendChildren(contactCardContainer,contactCard,ContactName,contactImage,contactInfo,contactProfession,contactPhoneNumber,contactEmail){
    contactCardContainer.appendChild(contactCard);
    contactCardContainer.appendChild(contactInfo);
    contactCard.appendChild(ContactName);
    contactCard.appendChild(contactImage);
    contactInfo.appendChild(contactProfession);
    contactInfo.appendChild(contactPhoneNumber);
    contactInfo.appendChild(contactEmail);
}