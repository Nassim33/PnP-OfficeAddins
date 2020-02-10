import { SignApp, signInO365, SetStartupBehaviorHelper, getGlobal } from '../../utilities/office-apis-helpers';

const g = getGlobal() as any;

// the add-in command functions need to be available in global scope
g.btnsignin = btnSignIn;
g.btnsignout = btnSignOut;
g.btnenableaddinstart = btnEnableAddinStart;
g.btndisableaddinstart = btnDisableAddinStart;

export function btnSignIn(event: Office.AddinCommands.Event) {
    console.log('sign in button pressed');
    // Your code goes here

    let signapp = new SignApp();
    signInO365(signapp.setState, signapp.setToken, signapp.displayError);
    //SetRuntimeVisibleHelper(true);
    // Be sure to indicate when the add-in command function is complete
    event.completed();
}

export function btnSignOut(event: Office.AddinCommands.Event) {
    console.log('sign out button pressed');
    // Your code goes here

    event.completed();
}

export function btnEnableAddinStart(event: Office.AddinCommands.Event) {
    console.log('Enable add-in start button pressed');
    // Your code goes here
    SetStartupBehaviorHelper(true)
    event.completed();
}

export function btnDisableAddinStart(event: Office.AddinCommands.Event) {
    console.log('Disable add-in start button pressed');
    // Your code goes here
    SetStartupBehaviorHelper(false);
    event.completed();
}
