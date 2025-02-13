import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [Candidate, setCandidate] = useState<Candidate>({
    name: '',
    location: '', 
    email: '',
    company: '',
    bio: '',
  });

  
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
