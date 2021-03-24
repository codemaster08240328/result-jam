import type { TSubmission, TUser } from "$types/user.type";
import moment from 'moment'
import {board} from "./board"

export const getUserSubmissions = (user:TUser): Array<TSubmission> => {
  return user.submissions.map(submission => ({
    status: submission.status,
    title: board.steps[submission.stepId].title,
    img: board.steps[submission.stepId].url,
    date: submission.createdAt
  }))
}

export const getLastSubmission = (user: TUser): {title: string;} => {
  return board.steps[user.lastCompleted.id]
}

export const handleMoment = (date: string): {m: string; d: string; y: string; delta: number;} => {
  const dateObj = moment(date);
  const cur = moment();

  return {
    m: dateObj.format('MMM'),
    d: dateObj.format('DD'),
    y: dateObj.format("YYYY"),
    delta: cur.diff(dateObj, 'days')
  }
}

const specialOrds = ['1st', '2nd', '3rd']

export const ordNum = (ord: number) => {
  if (ord < 4) return specialOrds[ord-1];

  return `${ord}th`
}