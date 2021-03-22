export type TUser = {
  id: string;
  firstName: string;
  lastName: string;
  percentComplete: number;
  numStepsComplete: number;
  photo: string;
  joined: string;
  place: number;
  lastCompleted: {
    id: string;
  };
  stepsCompleted: unknown;
  submissionsByStep: unknown;
  submissions: Array<{
    id: string;
    difficulty: number,
    stepId: string;
    status: string;
    createdAt: string;
  }>;
}

export type TSubmission = {
  status: string;
  title: string;
  img?: string; 
  date: string;
}