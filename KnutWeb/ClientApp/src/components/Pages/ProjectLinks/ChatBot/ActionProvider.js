class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    handleJavascriptList = () => {
        const message = this.createChatBotMessage(
            "Fantastic, I've got the following resources for you on Javascript:",
            {
                widget: "javascriptLinks",
            }
        );

        this.updateChatbotState(message);
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hi, friend.");
        this.updateChatbotState(greetingMessage);
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }));
    }
}

export default ActionProvider;