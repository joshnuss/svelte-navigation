import { writable } from 'svelte/store'

export const toasts = writable([])

function push(item) {
  toasts.update(list => {
    list.push(item)
    return list;
  })

  setTimeout(() => remove(item), 5000)
}

export function pushSuccess(message) {
  return push({type: 'success', message})
}

export function pushError(message) {
  return push({type: 'error', message})
}

export function remove(item) {
  toasts.update(list => {
    const index = list.indexOf(item)

    if (index > -1) list.splice(index, 1)

    return list;
  })
}
