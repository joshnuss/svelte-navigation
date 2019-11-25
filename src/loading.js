import { writable } from 'svelte/store'

export const loading = writable(false)

export function toggle() {
  loading.update(value => !value)
}

export function enable() {
  loading.set(true)
}

export function disable() {
  loading.set(false)
}
