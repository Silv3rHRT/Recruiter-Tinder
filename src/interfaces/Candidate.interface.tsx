// Created an interface for the Candidate objects returned by the API
export interface Candidate {
    name: string;
    location?: string;
    email?: string;
    company?: string;
    bio?: string;
}