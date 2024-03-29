/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DialogueTextToSpeechDto = {
    appId: string;
    /**
     * Reference to the authenticated client the request originated from
     */
    clientId?: string;
    /**
     * Reference to the user interacting with the system
     */
    userId?: string;
    /**
     * User session identifier
     */
    sessionId?: string;
    /**
     * Unique identifier of the message
     */
    messageId?: string;
    /**
     * Actor providing the text, can be user or agent
     */
    actor?: 'user' | 'agent';
    /**
     * Text to convert to speech. If emotion field is set, it will be converted to SSML. If also `ssml` field is set, this field will be ignored
     */
    text?: string;
    /**
     * Assistant gender (M or F)
     */
    gender?: string;
    /**
     * Text language
     */
    language?: string;
    /**
     * User emotion, if available
     */
    emotion?: string;
    /**
     * LLM engine to use
     */
    llm?: string;
    /**
     * Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.
     */
    chunkId?: number;
    /**
     * SSML markup to render as speech.
     */
    ssml?: string;
};

