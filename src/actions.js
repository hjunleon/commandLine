/*
 * action types
 */
export const PROCESS_CMD = 'PROCESS_CMD'
export const PREV_CMD = 'PREV_CMD'
export const NEXT_CMD = 'NEXT_CMD'
export const AUTOCOM_CMD = 'AUTOCOM_CMD'
export const ENTER_HIT = 'ENTER_HIT'
/*
 * other constants
 */
/*
 * action creators
 */
export function processCMD(input) {
  return {type: PROCESS_CMD, input}
}

export function prevCMD(){
  return {type: PREV_CMD}
}

export function nextCMD(){
  return {type: NEXT_CMD}
}

export function autocomCMD(input) {
  return {type: PROCESS_CMD, input}
}

export function enterHit(){
  return {type: ENTER_HIT}
}
