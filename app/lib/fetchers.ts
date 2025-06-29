export const getter = (url: string) => fetch(url).then((res) => res.json());
export const putter = (url: string) => fetch(url, { method: 'PUT' }).then((res) => res.json());
export const putterWithBody = (url: string, { arg }) => fetch(url, { method: 'PUT', body: JSON.stringify(arg) }).then((res) => res.json());
export const poster = (url: string, { arg }) => fetch(url, { method: 'POST', body: JSON.stringify(arg) }).then((res) => res.json());
